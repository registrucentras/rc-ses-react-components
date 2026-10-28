import { expect, test } from '@playwright/test'

test('existing Select uses live tokens with the legacy Storybook theme', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--token-bindings&viewMode=story')
  const input = page.getByRole('combobox', { name: 'Single' })
  const root = input.locator('..')
  await expect(root).toHaveCSS('border-radius', '8px')
  await expect(input).toHaveCSS('font-size', '15px')
  await input.click()
  // Shared Input focus: 2px Border/focus stroke, no ring.
  await expect(root.locator('fieldset')).toHaveCSS('border-color', 'rgb(0, 121, 173)')
  await expect(root.locator('fieldset')).toHaveCSS('border-width', '2px')
  await expect(root).toHaveCSS('box-shadow', 'none')
  const paper = page.locator('.MuiAutocomplete-paper')
  const first = page.getByRole('option', { name: 'First option Option description' })
  await expect(first).toBeVisible()
  await page.evaluate(() => {
    const css = document.documentElement.style
    css.setProperty('--rc-radius-input', '1rem')
    css.setProperty('--rc-color-text-default', 'rgb(10, 20, 30)')
    css.setProperty('--rc-typography-font-size-body-regular', '1.125rem')
    css.setProperty('--rc-elevation-md', '0 4px 10px rgba(0, 0, 0, 0.2)')
    css.setProperty('--rc-padding-md', '1.5rem')
    css.setProperty('--rc-color-surface-brand-subtle', 'rgb(210, 240, 250)')
  })
  await expect(root).toHaveCSS('border-radius', '16px')
  await expect(input).toHaveCSS('font-size', '18px')
  await expect(input).toHaveCSS('color', 'rgb(10, 20, 30)')
  await expect(first).toHaveCSS('padding-left', '24px')
  await expect(first.locator('.rc-ses-select-option-label')).toHaveCSS(
    'font-size',
    '18px',
  )
  await expect(paper).toHaveCSS('box-shadow', 'rgba(0, 0, 0, 0.2) 0px 4px 10px 0px')
  await first.click()
  await expect(page.getByTestId('select-values')).toContainText('"single":"first"')
  await expect(
    page.locator('#tokens-single').locator('..').locator('.rc-ses-select-single-value'),
  ).toHaveText('First option')
})

test('chips, limitTags, filtered selectAll and group member values retain existing behavior', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--token-bindings&viewMode=story')
  const multi = page.locator('#tokens-multiple').locator('..')
  await expect(multi.locator('.MuiChip-root')).toHaveCount(1)
  await expect(multi).toContainText('+1')
  await page.getByRole('combobox', { name: 'Grouped' }).click()
  const group = page.getByRole('option').filter({ hasText: 'Group A' })
  await group.click()
  await expect(page.getByTestId('select-values')).toContainText(
    '"grouped":["first","second"]',
  )
  await expect(group).toHaveAttribute('aria-selected', 'true')
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-color-control-selected',
      'rgb(120, 20, 130)',
    )
  })
  await expect(group.locator('[aria-hidden] > div > div')).toHaveCSS(
    'background-color',
    'rgb(120, 20, 130)',
  )
  await group.click()
  await expect(page.getByTestId('select-values')).toContainText('"grouped":[]')
  const search = page.getByPlaceholder('Ieškoti')
  await search.fill('Third')
  await page.getByRole('option', { name: 'Visi' }).click()
  await expect(page.getByTestId('select-values')).toContainText('"grouped":["third"]')
  await expect(page.getByTestId('select-values')).not.toContainText('__')
})

test('consumer field and paper overrides take priority over token styles', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--token-overrides&viewMode=story')
  const input = page.getByRole('combobox', { name: 'Single' })
  await expect(input.locator('..')).toHaveCSS('border-radius', '3px')
  await expect(input.locator('..')).toHaveCSS('background-color', 'rgb(102, 51, 153)')
  await expect(input.locator('..').locator('fieldset')).toHaveCSS(
    'border-color',
    'rgb(128, 0, 128)',
  )
  await input.click()
  await expect(page.locator('.MuiAutocomplete-paper')).toHaveCSS('box-shadow', 'none')
  await expect(page.locator('.MuiAutocomplete-paper')).toHaveCSS(
    'background-color',
    'rgb(230, 230, 250)',
  )
  await expect(page.locator('.MuiAutocomplete-paper')).toHaveCSS('border-radius', '3px')
})

test('keyboard selection, disabled, error focus and loading remain available', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--token-bindings&viewMode=story')
  const input = page.getByRole('combobox', { name: 'Single' })
  await input.focus()
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('ArrowDown')
  await page.keyboard.press('Enter')
  await expect(page.getByTestId('select-values')).toContainText('"single":"first"')
  await expect(page.getByRole('combobox', { name: 'Disabled' })).toBeDisabled()
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-color-text-disabled',
      'rgb(90, 80, 70)',
    )
    document.documentElement.style.setProperty(
      '--rc-color-status-error-border',
      'rgb(200, 30, 40)',
    )
  })
  await expect(
    page
      .getByRole('combobox', { name: 'Disabled' })
      .locator('..')
      .locator('.rc-ses-select-single-value'),
  ).toHaveCSS('color', 'rgb(90, 80, 70)')
  const error = page.getByRole('combobox', { name: 'Error' })
  await error.hover()
  await expect(error.locator('..').locator('fieldset')).toHaveCSS(
    'border-color',
    'rgb(200, 30, 40)',
  )
  await error.focus()
  const errorOutline = error.locator('..').locator('fieldset')
  await expect(errorOutline).toHaveCSS('border-color', 'rgb(200, 72, 56)')
  await expect(errorOutline).toHaveCSS('border-width', '2px')
  await expect(error.locator('..')).toHaveCSS('box-shadow', 'none')
  await page.getByRole('combobox', { name: 'Loading' }).click()
  await expect(page.locator('.MuiAutocomplete-loading')).toBeVisible()
})
