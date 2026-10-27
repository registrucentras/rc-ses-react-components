import { expect, test } from '@playwright/test'

test('Select inherits shared Rest, Loading, Hover and Focus token roles', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--token-bindings&viewMode=story')
  const input = page.getByRole('combobox', { name: 'Single' })
  await expect(input).toBeVisible()
  await page.evaluate(() => {
    const css = document.documentElement.style
    css.setProperty('--rc-color-border-strong', 'rgb(1 2 3)')
    css.setProperty('--rc-color-control-border', 'rgb(4 5 6)')
    css.setProperty('--rc-focus-ring-default', '0 0 0 3px rgb(7 8 9)')
  })
  const outline = input.locator('..').locator('fieldset')
  await expect(outline).toHaveCSS('border-color', 'rgb(1, 2, 3)')
  await expect(
    page.getByRole('combobox', { name: 'Loading' }).locator('..').locator('fieldset'),
  ).toHaveCSS('border-color', 'rgb(1, 2, 3)')
  await input.hover()
  await expect(outline).toHaveCSS('border-color', 'rgb(4, 5, 6)')
  await input.focus()
  await expect(outline).toHaveCSS('box-shadow', 'rgb(7, 8, 9) 0px 0px 0px 3px')
})

test('trailing icons match Figma frames, visible glyph and spacing', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-select--token-bindings&viewMode=story')
  const root = page.locator('#tokens-multiple').locator('..')
  const clear = root.locator('.MuiAutocomplete-clearIndicator svg')
  const caret = root.locator('.MuiAutocomplete-popupIndicator svg')
  await expect(clear).toHaveCSS('width', '20px')
  await expect(clear).toHaveCSS('height', '20px')
  await expect(caret).toHaveCSS('width', '20px')
  await expect(caret).toHaveCSS('height', '20px')
  const clearBox = await clear.boundingBox()
  const caretBox = await caret.boundingBox()
  expect(caretBox!.x - clearBox!.x - clearBox!.width).toBeCloseTo(8, 1)
  const glyph = await clear.evaluate((element) => {
    const svg = element as SVGSVGElement
    const box = svg.getBBox()
    const scale = svg.getBoundingClientRect().width / svg.viewBox.baseVal.width
    return { width: box.width * scale, height: box.height * scale }
  })
  expect(glyph.width).toBeCloseTo(16.25, 1)
  expect(glyph.height).toBeCloseTo(16.25, 1)
  await root.getByRole('button', { name: 'Clear' }).click()
  await expect(page.getByTestId('select-values')).toContainText('"multiple":[]')
  await expect(root).not.toContainText('Visi')
})

test('existing Select uses live tokens with the legacy Storybook theme', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--token-bindings&viewMode=story')
  const input = page.getByRole('combobox', { name: 'Single' })
  const root = input.locator('..')
  await expect(root).toHaveCSS('border-radius', '8px')
  await expect(input).toHaveCSS('font-size', '15px')
  await input.click()
  await expect(root).toHaveCSS('box-shadow', 'none')
  await expect(root.locator('fieldset')).toHaveCSS('border-width', '2px')
  await expect(root.locator('fieldset')).toHaveCSS('border-color', 'rgb(0, 121, 173)')
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

test('text summary, All and group member selection follow the Figma model', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--token-bindings&viewMode=story')
  const multi = page.locator('#tokens-multiple').locator('..')
  await expect(multi.locator('.MuiChip-root')).toHaveCount(0)
  await expect(multi).toContainText('First option ir dar 1')
  await expect(multi).toHaveCSS('height', '44px')
  await expect(multi.getByRole('button', { name: 'Clear' })).toBeVisible()
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
  await expect(page.getByTestId('select-values')).toContainText('"grouped":[]')
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
  await expect(page.getByRole('option', { name: 'Visi', exact: true })).toHaveCount(0)
  await expect(
    page.getByRole('option', { name: 'First option Option description' }),
  ).toBeVisible()
  await page.keyboard.press('Home')
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
    document.documentElement.style.setProperty(
      '--rc-color-border-focus-error',
      'rgb(210, 40, 50)',
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
  await expect(error.locator('..')).toHaveCSS('box-shadow', 'none')
  await expect(error.locator('..').locator('fieldset')).toHaveCSS('border-width', '2px')
  await expect(error.locator('..').locator('fieldset')).toHaveCSS(
    'border-color',
    'rgb(210, 40, 50)',
  )
  await expect(error.locator('..').locator('fieldset')).toHaveCSS(
    'box-shadow',
    'rgb(210, 40, 50) 0px 0px 0px 2px',
  )
  await page.getByRole('combobox', { name: 'Loading' }).click()
  await expect(page.getByRole('status').filter({ hasText: 'Kraunama...' })).toHaveText(
    'Kraunama...',
  )
})

test('295px and 428px summaries keep the first label and adapt without wrapping', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--figma-design&viewMode=story')
  await Promise.all(
    ['figma-mobile', 'figma-desktop'].map(async (id) => {
      const root = page.locator(`#${id}`).locator('..')
      await expect(root).toHaveCSS('height', '44px')
      const summary = root.locator('.rc-ses-select-single-value')
      await expect(summary).toContainText('Metinės finansinės ataskaitos')
      await expect(summary).toContainText('ir dar 2')
      await expect(summary).not.toHaveText('ir dar 3')
      await expect(root.locator('.MuiChip-root')).toHaveCount(0)
    }),
  )
  const screenshotPath = test.info().outputPath('figma-summaries.png')
  await page.screenshot({ path: screenshotPath, fullPage: true })
  await test
    .info()
    .attach('Figma summaries', { path: screenshotPath, contentType: 'image/png' })
  const desktop = page.locator('#figma-desktop').locator('..')
  await desktop.evaluate((element) => {
    element.closest('.MuiAutocomplete-root')!.parentElement!.style.width = '1000px'
  })
  await expect(desktop.locator('.rc-ses-select-single-value')).toHaveText(
    'Metinės finansinės ataskaitos, Pelno mokesčio informacijos ataskaitos, Tarpinės finansinės ataskaitos',
  )
})

test('All is the only state after selecting every value, and clear returns to All', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--token-bindings&viewMode=story')
  await page.getByRole('combobox', { name: 'Grouped' }).click()
  await expect(page.getByRole('option', { name: 'Visi', exact: true })).toHaveAttribute(
    'aria-selected',
    'true',
  )
  await page.getByRole('option', { name: 'First option Option description' }).click()
  await page.getByRole('option', { name: 'Second option', exact: true }).click()
  await page.getByRole('option', { name: 'Third option', exact: true }).click()
  await expect(page.getByTestId('select-values')).toContainText('"grouped":[]')
  await expect(page.locator('#tokens-grouped').locator('..')).toContainText('Visi')
  await expect(page.getByRole('option', { name: 'Visi', exact: true })).toHaveAttribute(
    'aria-selected',
    'true',
  )
  await page.getByRole('option', { name: 'Second option', exact: true }).click()
  await page.keyboard.press('Escape')
  await page
    .locator('#tokens-grouped')
    .locator('..')
    .getByRole('button', { name: 'Clear' })
    .click()
  await expect(page.getByTestId('select-values')).toContainText('"grouped":[]')
})

test('search supports no-results and keyboard Escape; load error has an outlined icon and no retry', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--figma-design&viewMode=story')
  await page.locator('#figma-mobile').click()
  const search = page.getByPlaceholder('Ieškoti ataskaitų tipo')
  await search.fill('2019')
  await expect(page.getByRole('status').filter({ hasText: '2019' })).toContainText('2019')
  await expect(page.getByRole('option', { name: 'Visi', exact: true })).toHaveCount(0)
  await search.press('Escape')
  await expect(page.locator('.MuiAutocomplete-paper')).toHaveCount(0)
  await expect(page.locator('#figma-mobile')).toBeFocused()
  await page.locator('#figma-mobile').click()
  await search.fill('Tvarumo')
  await search.press('ArrowDown')
  await page.keyboard.press('End')
  await page.keyboard.press('Enter')
  await expect(page.getByTestId('figma-values')).toContainText('"mobile":[]')
  await page.keyboard.press('Escape')
  await page.locator('#figma-failed').click()
  const alert = page.getByRole('alert')
  await expect(alert).toHaveText('Nepavyko įkelti duomenų.')
  await expect(alert).toHaveCSS('align-items', 'center')
  await expect(alert.getByRole('button')).toHaveCount(0)
  await expect(alert.locator('svg')).toHaveCount(1)
  await page.screenshot({ path: test.info().outputPath('figma-load-error.png') })
})

test('single group is selectable and its count is shown in the popup', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-select--figma-design&viewMode=story')
  await page.locator('#figma-single-group').click()
  await page.getByRole('option', { name: /^Transportas/ }).click()
  await expect(page.locator('#figma-single-group').locator('..')).toContainText(
    'Transportas',
  )
  await expect(page.getByTestId('figma-values')).toContainText(
    '"singleGroup":"__dropdown-group__:Transportas"',
  )
})

test('keyboard Tab enters popup search and leaves it in form order', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-select--figma-design&viewMode=story')
  const trigger = page.locator('#figma-mobile')
  const search = page.getByPlaceholder('Ieškoti ataskaitų tipo')
  await trigger.focus()
  await trigger.press('ArrowDown')
  await expect(page.locator('.MuiAutocomplete-paper')).toBeVisible()
  await trigger.press('Tab')
  await expect(search).toBeFocused()
  await search.press('Shift+Tab')
  await expect(trigger).toBeFocused()
  await expect(page.locator('.MuiAutocomplete-paper')).toBeVisible()
  await trigger.press('Tab')
  await search.fill('2019')
  await expect(page.getByRole('status').filter({ hasText: '2019' })).toBeVisible()
  await search.press('Tab')
  await expect(page.locator('#figma-desktop')).toBeFocused()
  await expect(page.locator('.MuiAutocomplete-paper')).toHaveCount(0)
})

test('negative limitTags does not cap labels in a wide summary', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-select--figma-design&viewMode=story')
  await expect(
    page.locator('#figma-many').locator('..').locator('.rc-ses-select-single-value'),
  ).toHaveText('2025, 2024, 2023, 2022')
})
