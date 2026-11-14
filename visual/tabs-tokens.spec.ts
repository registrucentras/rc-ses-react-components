import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`Tabs preserve selection and keyboard interaction at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=molecules-tabs--token-bindings&viewMode=story')
    const tabs = page.getByRole('tab')
    await expect(tabs.nth(0)).toHaveAttribute('aria-selected', 'true')
    await expect(tabs.nth(2)).toBeDisabled()
    await tabs.nth(1).click()
    await expect(page.getByRole('tabpanel')).toContainText('Content for tab 2')
    await tabs.nth(1).press('ArrowRight')
    await expect(tabs.nth(3)).toBeFocused()
    await tabs.nth(3).press('Enter')
    await expect(page.getByRole('tabpanel')).toContainText('Content for tab 4')
    await tabs.nth(3).press('Home')
    await expect(tabs.nth(0)).toBeFocused()
    await tabs.nth(0).press('End')
    await expect(tabs.nth(3)).toBeFocused()
  })
})

test('Tabs, wrapper and panel read scoped DS tokens', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-tabs--token-overrides&viewMode=story')
  const tabs = page.getByRole('tab')
  await expect(tabs.nth(0)).toHaveCSS('background-color', 'rgb(255, 250, 240)')
  await expect(tabs.nth(0)).toHaveCSS('color', 'rgb(84, 45, 22)')
  await expect(tabs.nth(1)).toHaveCSS('background-color', 'rgb(242, 233, 222)')
  await expect(tabs.nth(2)).toHaveCSS('color', 'rgb(163, 140, 124)')
  const panel = page.getByRole('tabpanel')
  await expect(panel).toHaveCSS('background-color', 'rgb(255, 250, 240)')
  await expect(panel).toHaveCSS('border-bottom-left-radius', '12px')
  await expect(panel.locator('..')).toHaveCSS('border-color', 'rgb(165, 104, 53)')
})
