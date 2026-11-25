import { Page, expect, test } from '@playwright/test'

// Resolves a CSS colour the way the browser computes it, so color-mix() values
// can be compared with the backdrop's computed background.
const computedColor = (page: Page, color: string) =>
  page.evaluate((value) => {
    const probe = document.createElement('div')
    probe.style.backgroundColor = value
    document.body.appendChild(probe)
    const resolved = getComputedStyle(probe).backgroundColor
    probe.remove()
    return resolved
  }, color)

const dark = 'color-mix(in srgb, var(--rc-color-surface-inverse) 55%, transparent)'
const light = 'color-mix(in srgb, var(--rc-color-surface-base) 70%, transparent)'

const cases = [
  ['Modal', 'organisms-modal--token-bindings', dark],
  ['Dialog', 'organisms-dialog--open', dark],
  ['BottomSheet', 'organisms-bottomsheet--open-mobile-viewport', dark],
  ['Drawer', 'organisms-drawer--default', dark],
  ['FullPageLoader dark', 'organisms-fullpageloader--dark-backdrop', dark],
  ['FullPageLoader light', 'organisms-fullpageloader--default', light],
] as const

cases.forEach(([name, id, expected]) => {
  test(`${name} uses the shared backdrop token`, async ({ page }) => {
    await page.goto(`/iframe.html?id=${id}&viewMode=story`)
    const backdrop = page.locator('.MuiBackdrop-root').first()
    await expect(backdrop).toBeVisible()
    await expect(backdrop).toHaveCSS(
      'background-color',
      await computedColor(page, expected),
    )
  })
})
