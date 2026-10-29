import { expect, test } from '@playwright/test'

const viewports = [375, 768, 1024, 1440]

test('Existing checkbox hover and error hover use effect tokens', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-simplecheckbox--token-bindings&viewMode=story')
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-focus-ring-default',
      '0 0 0 3px rgb(11, 22, 33)',
    )
    document.documentElement.style.setProperty(
      '--rc-focus-ring-error',
      '0 0 0 3px rgb(44, 55, 66)',
    )
  })
  const normal = page.getByRole('checkbox', { name: 'Unchecked checkbox', exact: true })
  await normal.hover()
  await expect(normal.locator('..').locator('svg')).toHaveCSS(
    'box-shadow',
    'rgb(11, 22, 33) 0px 0px 0px 3px',
  )
  const error = page.getByRole('checkbox', { name: 'Error checkbox', exact: true })
  await error.hover()
  await expect(error.locator('..').locator('svg')).toHaveCSS(
    'box-shadow',
    'rgb(44, 55, 66) 0px 0px 0px 3px',
  )
})

test('Existing radio SVG fills and disabled fill use token values', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=molecules-radiobuttongroup--token-bindings&viewMode=story',
  )
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-color-control-selected',
      'rgb(11, 22, 33)',
    )
    document.documentElement.style.setProperty(
      '--rc-color-control-disabled',
      'rgb(44, 55, 66)',
    )
  })
  const checked = page
    .getByRole('radio', { name: 'Checked radio', exact: true })
    .locator('..')
  await expect(checked.locator('rect')).toHaveCSS('fill', 'rgb(11, 22, 33)')
  const disabled = page
    .getByRole('radio', { name: 'Disabled unchecked radio', exact: true })
    .locator('..')
  await expect(disabled.locator('[data-name="inner"]')).toHaveCSS(
    'fill',
    'rgb(44, 55, 66)',
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
  test(`Existing checkbox and radio geometry is preserved at ${width}px`, async ({
    page,
  }) => {
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
    await page.goto(
      '/iframe.html?id=molecules-radiobuttongroup--token-bindings&viewMode=story',
    )
    const radio = page
      .getByRole('radio', { name: 'Unchecked radio', exact: true })
      .locator('..')
    await expect(radio).toHaveCSS('margin', '5px')
    await expect(radio).toHaveCSS('padding', '4px')
    await expect(radio.locator('svg')).toHaveCSS('width', '24px')
    await expect(radio.locator('svg')).toHaveCSS('height', '24px')
  })
})

test('Radio sx overrides the checked color', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=molecules-radiobuttongroup--token-bindings&viewMode=story',
  )
  await expect(
    page.getByRole('radio', { name: 'Custom radio styles' }).locator('..'),
  ).toHaveCSS('color', 'rgb(10, 20, 30)')
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
