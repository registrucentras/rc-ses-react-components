import { expect, test } from '@playwright/test'
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
 */

type StoryIndexEntry = {
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

test.describe('Storybook visual regression', () => {
  stories.forEach((story) => {
    test(`${story.title} - ${story.name}`, async ({ page }) => {
      await page.goto(`/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`, {
        waitUntil: 'domcontentloaded',
      })

      // Storybook toggles these classes on <body> once the story has rendered.
      await page.waitForSelector('body.sb-show-main', { state: 'attached' })
      await expect(page.locator('body.sb-show-errordisplay')).toHaveCount(0)
      await expect(page.locator('#storybook-root')).toBeAttached()

      // Without this, the first stories in a run can capture fallback glyphs
      // before Public Sans has finished loading.
      await page.evaluate(() => document.fonts.ready)

      await expect(page).toHaveScreenshot(`${story.id}.png`, { fullPage: true })
    })
  })
})
