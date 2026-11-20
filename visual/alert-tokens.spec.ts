/* eslint-disable no-restricted-syntax, no-await-in-loop -- Sequential scoped token mutations keep each assertion isolated. */
import { expect, test } from '@playwright/test'

test('outlined alerts consume scoped semantic status tokens', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-alert--outlined&viewMode=story')
  for (const severity of ['info', 'success', 'warning', 'error']) {
    const alert = page.locator(
      `.MuiAlert-color${severity[0].toUpperCase()}${severity.slice(1)}`,
    )
    await expect(alert).toBeVisible()
    await alert.evaluate((element, status) => {
      const root = element as HTMLElement
      root.style.setProperty(`--rc-color-status-${status}-bg`, '#112233')
      root.style.setProperty(`--rc-color-status-${status}-border`, '#223344')
      root.style.setProperty(`--rc-color-status-${status}-icon`, '#334455')
      root.style.setProperty(`--rc-color-status-${status}-text`, '#445566')
    }, severity)
    await expect(alert).toHaveCSS('background-color', 'rgb(17, 34, 51)')
    await expect(alert).toHaveCSS('border-top-color', 'rgb(34, 51, 68)')
    await expect(alert).toHaveCSS('color', 'rgb(68, 85, 102)')
    await expect(alert.locator('.MuiAlert-icon')).toHaveCSS('color', 'rgb(51, 68, 85)')
  }
})

for (const width of [390, 768, 1280]) {
  test(`outlined alert uses Body/Small and 20px icons at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=molecules-alert--outlined&viewMode=story')
    const alert = page.locator('.MuiAlert-colorInfo')
    await expect(alert).toHaveCSS('font-size', '14px')
    await expect(alert).toHaveCSS('line-height', '20px')
    await expect(alert).toHaveCSS('gap', '12px')
    await expect(alert).toHaveCSS('padding', '12px 16px')
    await expect(alert.locator('.MuiAlert-icon svg')).toHaveCSS('width', '20px')
  })
}
