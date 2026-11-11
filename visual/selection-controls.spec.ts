import { expect, test } from '@playwright/test'

const viewports = [375, 768, 1024, 1440]

const focusCheckboxes = [
  'Unchecked checkbox',
  'Checked checkbox',
  'Indeterminate checkbox',
  'Error checkbox',
]

focusCheckboxes.forEach((name) => {
  test(`${name} keeps the Figma focus gap even while hovered`, async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-simplecheckbox--token-bindings&viewMode=story')
    const checkbox = page.getByRole('checkbox', { name, exact: true })
    await page.keyboard.press('Tab')
    await checkbox.focus()
    await checkbox.hover()
    const shape = checkbox.locator('..').locator('[data-rc-mark-shape]')
    await expect(shape).toHaveCSS('outline-style', 'solid')
    await expect(shape).toHaveCSS('outline-width', '2px')
    await expect(shape).toHaveCSS('outline-offset', '2px')
    await expect(shape).toHaveCSS('outline-color', 'rgb(0, 121, 173)')
    await expect(shape).toHaveCSS('box-shadow', 'none')
    if (name === 'Unchecked checkbox') {
      await expect(shape).toHaveCSS('border-top-color', 'rgb(107, 116, 127)')
    }
    if (name === 'Checked checkbox') {
      const screenshotPath = test.info().outputPath('checked-focus-hover.png')
      await checkbox.locator('..').locator('..').screenshot({ path: screenshotPath })
      await test.info().attach('checked-focus-hover', {
        path: screenshotPath,
        contentType: 'image/png',
      })
    }
    await page.keyboard.press('Space')
    await expect(shape).toHaveCSS('outline-offset', '2px')
    await expect(shape).toHaveCSS('box-shadow', 'none')
  })
})

test('Checkbox hover and error hover show a tinted halo, not the focus ring', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-simplecheckbox--token-bindings&viewMode=story')
  await page.evaluate(() => {
    const { style } = document.documentElement
    style.setProperty('--rc-color-control-selected', '#0b1621')
    style.setProperty('--rc-color-cyans-400', '#1e2d3c')
    style.setProperty('--rc-color-status-error-border', '#2c3742')
    style.setProperty('--rc-color-red-600', '#424d58')
  })
  const normal = page.getByRole('checkbox', { name: 'Unchecked checkbox', exact: true })
  await normal.hover()
  const normalSvg = normal.locator('..').locator('[data-rc-mark-shape]')
  await expect(normalSvg).toHaveCSS('border-top-color', 'rgb(11, 22, 33)')
  await expect(normalSvg).toHaveCSS(
    'box-shadow',
    /^color\(srgb 0\.117\d* 0\.176\d* 0\.235\d* \/ 0\.2\) 0px 0px 0px 4px$/,
  )
  const error = page.getByRole('checkbox', { name: 'Error checkbox', exact: true })
  await expect(error.locator('..').locator('[data-rc-mark-shape]')).toHaveCSS(
    'border-top-color',
    'rgb(44, 55, 66)',
  )
  await error.hover()
  const errorSvg = error.locator('..').locator('[data-rc-mark-shape]')
  await expect(errorSvg).toHaveCSS('border-top-color', 'rgb(44, 55, 66)')
  await expect(errorSvg).toHaveCSS(
    'box-shadow',
    /^color\(srgb 0\.258\d* 0\.301\d* 0\.345\d* \/ 0\.2\) 0px 0px 0px 4px$/,
  )
  await error.click()
  await expect(error).toBeChecked()
  await expect(errorSvg).toHaveCSS('border-top-width', '2px')
  await expect(errorSvg).toHaveCSS('background-color', 'rgb(44, 55, 66)')
})

const disabledCheckboxes = [
  'Disabled unchecked checkbox',
  'Disabled checked checkbox',
  'Disabled indeterminate checkbox',
]

disabledCheckboxes.forEach((name) => {
  test(`${name} keeps its color without a hover halo`, async ({ page }) => {
    await page.goto('/iframe.html?id=atoms-simplecheckbox--token-bindings&viewMode=story')
    const checkbox = page.getByRole('checkbox', { name, exact: true })
    const svg = checkbox.locator('..').locator('[data-rc-mark-shape]')
    const color = await svg.evaluate((node) => getComputedStyle(node).backgroundColor)
    // Disabled MUI controls have pointer-events: none; move the pointer anyway.
    await checkbox.locator('..').hover({ force: true })
    await expect(svg).toHaveCSS('background-color', color)
    await expect(svg).toHaveCSS('box-shadow', 'none')
  })
})

test('Checkbox sx overrides checked color and focus styles', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-simplecheckbox--token-overrides&viewMode=story')
  const checkbox = page.getByRole('checkbox', { name: 'Custom checkbox styles' })
  await expect(checkbox.locator('..')).toHaveCSS('color', 'rgb(10, 20, 30)')
  await page.keyboard.press('Tab')
  await checkbox.focus()
  await expect(checkbox.locator('..').locator('[data-rc-mark-shape]')).toHaveCSS(
    'box-shadow',
    'none',
  )
  const palette = page.getByRole('checkbox', { name: 'Custom palette checkbox' })
  await expect(palette.locator('..')).toHaveCSS('color', 'rgb(77, 88, 99)')
  await checkbox.hover()
  await expect(checkbox.locator('..').locator('[data-rc-mark-shape]')).toHaveCSS(
    'background-color',
    'rgb(10, 20, 30)',
  )
  await palette.hover()
  await expect(palette.locator('..').locator('[data-rc-mark-shape]')).toHaveCSS(
    'background-color',
    'rgb(77, 88, 99)',
  )
})

viewports.forEach((width) => {
  test(`Existing checkbox geometry is preserved at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=atoms-checkbox--main&viewMode=story')
    const card = page.locator('.MuiFormControlLabel-root').first()
    await expect(card).toHaveCSS('padding', '16px 20px 16px 14px')
    await expect(card.locator('.MuiFormLabel-root')).toHaveCSS('font-weight', '400')
    await expect(card.locator('.MuiFormControlLabel-label')).toHaveCSS(
      'margin-left',
      '3px',
    )
    await expect(card.locator('[data-rc-checkbox-mark]')).toHaveCSS('width', '24px')
  })
})

test('Existing radio group keeps keyboard selection', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=molecules-radiobuttongroup--keyboard-selection&viewMode=story',
  )
  const radio = page.getByRole('radio', { name: 'First option', exact: true })
  await radio.focus()
  await expect(radio).toBeChecked()
  await page.keyboard.press('ArrowRight')
  await expect(
    page.getByRole('radio', { name: 'Second option', exact: true }),
  ).toBeChecked()
})
