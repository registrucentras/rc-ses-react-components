import { expect, test } from '@playwright/test'
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

import theme from '../src/theme/light'

/**
 * Asserts that every `Mui*` slot the theme overrides is rendered by at least one
 * story, and is therefore protected by a visual baseline (SAV-5648 / LIB-02).
 *
 * A `styleOverrides` key nothing renders is invisible: it does not fail the
 * build, it does not fail the unit tests, and the visual suite has nothing to
 * diff it against - so an upgrade can quietly stop applying it. This walks every
 * story once, collects the `Mui*` class prefixes that actually reach the DOM,
 * and fails if a themed slot is missing from that set.
 *
 * When this fails, the fix is a story that renders the slot, not an exclusion.
 * Slots with no `RcSes*` wrapper are covered by `Foundations/Themed MUI Components`.
 */

type StoryIndexEntry = { type: string; id: string; tags?: string[] }

const indexPath = fileURLToPath(
  new URL('../storybook-static/index.json', import.meta.url),
)

const index = JSON.parse(readFileSync(indexPath, 'utf8')) as {
  entries: Record<string, StoryIndexEntry>
}

const stories = Object.values(index.entries)
  .filter((entry) => entry.type === 'story')
  .filter((entry) => !entry.tags?.includes('no-snapshot'))
  .sort((a, b) => a.id.localeCompare(b.id))

const components = theme.components ?? {}

// Only `styleOverrides` are the concern here. `createTheme` also merges the
// x-date-pickers locale objects in, which contribute a defaultProps-only
// `MuiLocalizationProvider` entry - a context provider that renders no element
// and so can never appear in the DOM.
const themedSlots = Object.keys(components)
  .filter((slot) => {
    const overrides = (components as Record<string, { styleOverrides?: object }>)[slot]
      ?.styleOverrides
    return !!overrides && Object.keys(overrides).length > 0
  })
  .sort()

test('every themed Mui* slot is rendered by at least one story', async ({ page }) => {
  // One pass over the whole Storybook; the default per-test timeout is nowhere
  // near enough.
  test.setTimeout(900_000)

  const rendered = new Set<string>()

  /* eslint-disable no-await-in-loop -- one shared page, visited sequentially */
  for (let i = 0; i < stories.length; i += 1) {
    const story = stories[i]

    await page.goto(`/iframe.html?id=${encodeURIComponent(story.id)}&viewMode=story`, {
      waitUntil: 'domcontentloaded',
    })
    await page.waitForSelector('body.sb-show-main', { state: 'attached' })

    const prefixes = await page.evaluate(() => {
      const found = new Set<string>()
      document.querySelectorAll('[class*="Mui"]').forEach((element) => {
        element.classList.forEach((className) => {
          const match = className.match(/^(Mui[A-Za-z]+)-/)
          if (match) found.add(match[1])
        })
      })
      return [...found]
    })

    prefixes.forEach((prefix) => rendered.add(prefix))
  }
  /* eslint-enable no-await-in-loop */

  const uncovered = themedSlots.filter((slot) => !rendered.has(slot))

  expect(
    uncovered,
    `${themedSlots.length} themed slots, ${uncovered.length} uncovered`,
  ).toEqual([])
})
