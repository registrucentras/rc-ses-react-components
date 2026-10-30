import { expect, test } from '@playwright/test'

const viewports = [375, 768, 1024, 1440]

viewports.forEach((width) => {
  test(`BottomSheet preserves geometry and supports live tokens at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=organisms-bottomsheet--token-bindings&viewMode=story',
    )
    const dialog = page.getByRole('dialog')
    const handle = page.getByTestId('rc-ses-bottom-sheet-handle').locator('> div')
    await expect(dialog).toBeVisible()
    await expect(dialog).toHaveCSS('border-top-left-radius', '16px')
    await expect(handle).toHaveCSS('width', '36px')
    await expect(handle).toHaveCSS('height', '4px')
    await expect(page.getByRole('heading', { name: 'Token bindings' })).toHaveCSS(
      'font-size',
      '16px',
    )
    await page.evaluate(() => {
      document.documentElement.style.setProperty('--rc-radius-modal', '20px')
      document.documentElement.style.setProperty(
        '--rc-color-border-default',
        'rgb(10, 20, 30)',
      )
      document.documentElement.style.setProperty('--rc-space-24', '28px')
    })
    await expect(dialog).toHaveCSS('border-top-left-radius', '20px')
    await expect(dialog).toHaveCSS('border-bottom-left-radius', '0px')
    await expect(handle).toHaveCSS('background-color', 'rgb(10, 20, 30)')
    await expect(
      page.getByRole('heading', { name: 'Token bindings' }).locator('..'),
    ).toHaveCSS('padding-left', '28px')
  })
})
