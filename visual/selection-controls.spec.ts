import { expect, test } from '@playwright/test'

const viewports = [375, 768, 1024, 1440]

test('Checkbox hover and error hover show a tinted halo, not the focus ring', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-simplecheckbox--token-bindings&viewMode=story')
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-color-control-selected',
      'rgb(11, 22, 33)',
    )
    document.documentElement.style.setProperty(
      '--rc-color-status-error-border',
      'rgb(44, 55, 66)',
    )
  })
  const normal = page.getByRole('checkbox', { name: 'Unchecked checkbox', exact: true })
  await normal.hover()
  const normalSvg = normal.locator('..').locator('svg')
  await expect(normalSvg).toHaveCSS(
    'box-shadow',
    /^color\(srgb 0\.043\d* 0\.086\d* 0\.129\d* \/ 0\.2\) 0px 0px 0px 4px$/,
  )
  const error = page.getByRole('checkbox', { name: 'Error checkbox', exact: true })
  await error.hover()
  const errorSvg = error.locator('..').locator('svg')
  await expect(errorSvg).toHaveCSS(
    'box-shadow',
    /^color\(srgb 0\.172\d* 0\.215\d* 0\.258\d* \/ 0\.2\) 0px 0px 0px 4px$/,
  )
})

test('Checkbox sx overrides checked color and focus styles', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-simplecheckbox--token-overrides&viewMode=story')
  const checkbox = page.getByRole('checkbox', { name: 'Custom checkbox styles' })
  await expect(checkbox.locator('..')).toHaveCSS('color', 'rgb(10, 20, 30)')
  await page.keyboard.press('Tab')
  await checkbox.focus()
  await expect(checkbox.locator('..').locator('svg')).toHaveCSS('box-shadow', 'none')
  await expect(
    page.getByRole('checkbox', { name: 'Custom palette checkbox' }).locator('..'),
  ).toHaveCSS('color', 'rgb(77, 88, 99)')
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
    await expect(card.locator('.MuiCheckbox-root > svg')).toHaveCSS('width', '24px')
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
