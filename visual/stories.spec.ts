import { Page, expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

/**
 * Screenshots every story in the built Storybook and compares it against a
 * committed baseline (SAV-5648 / LIB-01).
 *
 * Requires `npm run storybook-build` to have been run first - the story list is
 * read from the build output rather than hard-coded, so new stories are picked
 * up automatically and no one has to remember to register them here.
 *
 * Opt a story out by adding the `no-snapshot` tag to it.
 *
 * Shots are clipped to `#storybook-root` rather than captured `fullPage`, so the
 * diff budget is a share of the component under test instead of a share of the
 * page around it (LIB-19). Under `fullPage` a 1280x720 shot gave every story the
 * same 9216-pixel allowance, which for a 32x32 switch was larger than the whole
 * component - three regressions reached a release through that gap.
 */

/**
 * Layers MUI renders through a portal on `<body>`, i.e. outside
 * `#storybook-root`. Ten stories currently rely on one: the dialog, popover,
 * tooltip, full-page loader and open-calendar stories. `organisms-dialog--open`
 * is the clearest case - its root holds only the 32x32 trigger button while the
 * dialog itself is portalled, so clipping to the root would capture the trigger
 * and silently stop testing the dialog.
 */
const PORTAL_LAYER_SELECTOR = [
  '.MuiModal-root',
  '.MuiDialog-root',
  '.MuiPopover-root',
  '.MuiPopper-root',
  '.MuiTooltip-popper',
  '.MuiDrawer-root',
  '.MuiSnackbar-root',
  '.MuiMenu-root',
  '.MuiBackdrop-root',
].join(',')

interface StoryIndexEntry {
  type: string
  id: string
  name: string
  title: string
  tags?: string[]
}

const indexPath = fileURLToPath(
  new URL('../storybook-static/index.json', import.meta.url),
)

let entries: StoryIndexEntry[]
try {
  const index = JSON.parse(readFileSync(indexPath, 'utf8')) as {
    entries: Record<string, StoryIndexEntry>
  }
  entries = Object.values(index.entries)
} catch {
  throw new Error(
    `Could not read ${indexPath}. Run \`npm run storybook-build\` before the visual tests.`,
  )
}

const stories = entries
  // `docs` entries are generated documentation pages, not component renderings.
  .filter((entry) => entry.type === 'story')
  .filter((entry) => !entry.tags?.includes('no-snapshot'))
  .sort((a, b) => a.id.localeCompare(b.id))

if (stories.length === 0) {
  throw new Error('Story index contained no stories - was the Storybook build empty?')
}

/**
 * Stories tagged `viewport-<width>` are captured at that width instead of the
 * project's desktop default, so responsive values (the shell's xs paddings, the
 * footer stacking below sm) get a baseline of their own. Only the width matters:
 * MUI breakpoints are width-based, and the clip decides the captured height.
 */
const viewportWidth = (tags: string[] | undefined) => {
  const tag = tags?.find((entry) => entry.startsWith('viewport-'))
  if (!tag) {
    return null
  }

  const width = Number(tag.slice('viewport-'.length))
  if (!Number.isFinite(width) || width <= 0) {
    throw new Error(`Story tag "${tag}" is not a usable viewport width.`)
  }

  return width
}

/**
 * `body.sb-show-main` goes on as soon as Storybook hands the story to React, so
 * it can be set a frame before anything is laid out. Waiting for a measurable
 * box makes that race explicit: without it the run leans on
 * `toHaveScreenshot`'s retries, which turns a genuinely empty story into a
 * screenshot timeout rather than a clear failure.
 */
const waitForStoryPaint = (page: Page) =>
  page.waitForFunction((selector: string) => {
    const root = document.querySelector('#storybook-root')
    if (!root) {
      return false
    }

    const box = root.getBoundingClientRect()
    if (box.width > 0 && box.height > 0) {
      return true
    }

    // A story whose only output is portalled leaves the root itself empty.
    return Array.from(document.querySelectorAll(selector)).some((element) => {
      const portalBox = element.getBoundingClientRect()
      return portalBox.width > 0 && portalBox.height > 0
    })
  }, PORTAL_LAYER_SELECTOR)

const hasPortalledLayer = (page: Page) =>
  page.evaluate((selector: string) => {
    const root = document.querySelector('#storybook-root')
    if (!root) {
      return false
    }

    return Array.from(document.querySelectorAll(selector)).some((element) => {
      if (root.contains(element)) {
        return false
      }

      const box = element.getBoundingClientRect()
      return box.width > 0 && box.height > 0
    })
  }, PORTAL_LAYER_SELECTOR)

test.describe('Storybook visual regression', () => {
  stories.forEach((story) => {
    test(`${story.title} - ${story.name}`, async ({ page }) => {
      const width = viewportWidth(story.tags)
      if (width !== null) {
        await page.setViewportSize({ width, height: 900 })
      }
      await page.goto(`/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`, {
        waitUntil: 'domcontentloaded',
      })

      // Storybook toggles these classes on <body> once the story has rendered.
      await page.waitForSelector('body.sb-show-main', { state: 'attached' })
      await expect(page.locator('body.sb-show-errordisplay')).toHaveCount(0)
      await expect(page.locator('#storybook-root')).toBeAttached()
      await waitForStoryPaint(page)

      // Without this, the first stories in a run can capture fallback glyphs
      // before Public Sans has finished loading.
      await page.evaluate(() => document.fonts.ready)

      // Detected rather than declared, so a new portalled story needs no
      // registration - the same reason the story list is read from the build.
      // `snapshot-fullpage` forces this path for anything the check misses.
      const isPortalled =
        story.tags?.includes('snapshot-fullpage') || (await hasPortalledLayer(page))

      if (isPortalled) {
        await expect(page).toHaveScreenshot(`${story.id}.png`, { fullPage: true })
        return
      }

      await expect(page.locator('#storybook-root')).toHaveScreenshot(`${story.id}.png`)
    })
  })
})
