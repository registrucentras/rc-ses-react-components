import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`Stepper binds dot and connector tokens at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=organisms-servicewizardstepper--token-bindings&viewMode=story',
    )
    const icons = page.locator('.MuiStepLabel-iconContainer > svg')
    await expect(icons).toHaveCount(3)
    await expect(icons.first()).toHaveCSS('width', '20px')
    await page.evaluate(() => {
      const css = document.documentElement.style
      css.setProperty('--rc-color-cyans-400', '#0b1621')
      css.setProperty('--rc-color-border-default', '#2c3742')
      css.setProperty('--rc-color-neutrals-800', '#4d5863')
      css.setProperty('--rc-typography-font-size-heading-h4', '19px')
    })
    await expect(icons.nth(0)).toHaveCSS('fill', 'rgb(11, 22, 33)')
    await expect(icons.nth(1)).toHaveCSS('fill', 'rgb(11, 22, 33)')
    await expect(icons.nth(2)).toHaveCSS('fill', 'rgb(44, 55, 66)')
    await expect(page.locator('.MuiStepConnector-line').first()).toHaveCSS(
      'border-color',
      'rgb(11, 22, 33)',
    )
    if (width >= 900) {
      const label = page.getByText('Step 2', { exact: true })
      await expect(label).toHaveCSS('font-size', '19px')
      await expect(label).toHaveCSS('color', 'rgb(77, 88, 99)')
      await expect(label).toHaveCSS('font-weight', '500')
      await expect(page.getByRole('tab', { name: 'Step 3' })).toBeDisabled()
    }
  })
})

test('Vertical labels and connectors use DS tokens', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=organisms-servicewizardstepper--vertical-token-bindings&viewMode=story',
  )
  const label = page.getByText('Step 2', { exact: true })
  await expect(label).toHaveCSS('font-size', '16px')
  await expect(label).toHaveCSS('line-height', '22px')
  await expect(label).toHaveCSS('font-weight', '500')
  await expect(page.locator('.MuiStepLabel-iconContainer').first()).toHaveCSS(
    'padding-right',
    '4px',
  )
  await page.evaluate(() => {
    const css = document.documentElement.style
    css.setProperty('--rc-color-neutrals-800', '#4d5863')
    css.setProperty('--rc-color-text-muted', '#0a141e')
  })
  await expect(label).toHaveCSS('color', 'rgb(77, 88, 99)')
  await expect(page.getByText('Step 3', { exact: true })).toHaveCSS(
    'color',
    'rgb(10, 20, 30)',
  )
})

test('Desktop loading preserves skeleton count', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=organisms-servicewizardstepper--loading&viewMode=story',
  )
  await expect(page.locator('.MuiSkeleton-root')).toHaveCount(3)
})
