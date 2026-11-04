import { expect, test } from '@playwright/test'

const viewports = [375, 768, 1024, 1440]

viewports.forEach((width) => {
  test(`BottomSheet follows Figma geometry and live tokens at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=organisms-bottomsheet--token-bindings&viewMode=story',
    )
    const dialog = page.getByRole('dialog')
    const handleArea = page.getByTestId('rc-ses-bottom-sheet-handle')
    const handle = handleArea.locator('> div')
    const title = page.getByRole('heading', { name: 'Token bindings' })
    const content = page.getByText('Bottom sheet content', { exact: true }).locator('..')
    await expect(dialog).toBeVisible()
    await expect(dialog).toHaveCSS('border-top-left-radius', '16px')
    await expect(dialog).toHaveCSS('padding', '8px 16px 16px')
    await expect(dialog).toHaveCSS('row-gap', '16px')
    await expect(dialog).toHaveCSS('box-shadow', 'rgba(0, 0, 0, 0.18) 0px -4px 24px 0px')
    await expect(handle).toHaveCSS('width', '40px')
    await expect(handle).toHaveCSS('height', '4px')
    await expect(handleArea).toHaveCSS('padding', '0px 0px 4px')
    await expect(content).toHaveCSS('padding', '8px 0px')
    await expect(title).toHaveCSS('font-size', width < 600 ? '16px' : '18px')
    await expect(title).toHaveCSS('line-height', width < 600 ? '22px' : '24px')
    await page.evaluate(() => {
      const css = document.documentElement.style
      css.setProperty('--rc-radius-modal', '20px')
      css.setProperty('--rc-color-border-default', 'rgb(10, 20, 30)')
      css.setProperty('--rc-color-surface-base', 'rgb(30, 40, 50)')
      css.setProperty('--rc-color-text-default', 'rgb(60, 70, 80)')
      css.setProperty('--rc-space-16', '28px')
      css.setProperty('--rc-typography-font-size-heading-h3', '23px')
      css.setProperty('--rc-typography-line-height-heading-h3', '30px')
    })
    await expect(dialog).toHaveCSS('border-top-left-radius', '20px')
    await expect(dialog).toHaveCSS('border-bottom-left-radius', '0px')
    await expect(handle).toHaveCSS('background-color', 'rgb(10, 20, 30)')
    await expect(dialog).toHaveCSS('padding-left', '28px')
    await expect(dialog).toHaveCSS('background-color', 'rgb(30, 40, 50)')
    await expect(title).toHaveCSS('font-size', '23px')
    await expect(title).toHaveCSS('line-height', '30px')
    await expect(title).toHaveCSS('color', 'rgb(60, 70, 80)')
  })
})
