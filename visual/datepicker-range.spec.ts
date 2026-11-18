import { expect, test } from '@playwright/test'
import { checkA11y, injectAxe } from 'axe-playwright'

const widths = [375, 768, 1440]

widths.forEach((width) => {
  test(`Range pointer selection, preview, reverse dates and clearing at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=molecules-datepicker--range&viewMode=story')
    const input = page.getByRole('combobox')
    await input.click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toHaveCSS('transform', 'none')
    const start = dialog.getByRole('gridcell', { name: /^2026-06-17/ })
    await start.click()
    await expect(dialog.getByRole('status')).toContainText('2026-06-17')
    await dialog.getByRole('gridcell', { name: /^2026-06-10/ }).hover()
    await expect(dialog.locator('[data-range-state="preview"]')).not.toHaveCount(0)
    await dialog.getByRole('gridcell', { name: /^2026-06-10/ }).click()
    await expect(input).toHaveValue('2026-06-10 - 2026-06-17')
    await expect(dialog).not.toBeVisible()
    await input.click()
    await expect(dialog.locator('[data-range-state="in-range"]')).toHaveCount(6)
    await expect(dialog).toHaveCSS('transform', 'none')
    await expect(dialog).toHaveScreenshot(`datepicker-range-${width}.png`)
    const box = await dialog.getByRole('gridcell', { name: /^2026-06-10/ }).boundingBox()
    expect(box?.width).toBeGreaterThanOrEqual(44)
    expect(box?.height).toBeGreaterThanOrEqual(44)
    const bounds = await dialog.boundingBox()
    expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width)
    await page.keyboard.press('Escape')
    await page.getByRole('button', { name: /Clear current|Išvalyti/i }).click()
    await expect(input).toHaveValue('')
    await expect(page.getByLabel('Stored range')).toContainText('[null,null]')
  })
})

test('Range keyboard selection, Escape and form reset preserve semantics', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-datepicker--range&viewMode=story')
  const input = page.getByRole('combobox')
  await input.focus()
  await input.press('Enter')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toHaveCSS('transform', 'none')
  const start = dialog.getByRole('gridcell', { name: /^2026-06-10/ })
  await start.focus()
  await start.press('Enter')
  await page.keyboard.press('ArrowRight')
  await expect(
    dialog.getByRole('gridcell', { name: /^2026-06-11/ }),
    await page.evaluate(() => document.activeElement?.outerHTML),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(input).toHaveValue('2026-06-10 - 2026-06-11')
  await input.press('Enter')
  await page.keyboard.press('Escape')
  await expect(input).toBeFocused()
  await page.getByRole('button', { name: 'Reset form' }).click()
  await expect(input).toHaveValue('')
})

test('Range can span months and select the same day twice', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-datepicker--range&viewMode=story')
  const input = page.getByRole('combobox')
  await input.click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toHaveCSS('transform', 'none')
  await dialog.getByRole('gridcell', { name: /^2026-06-10/ }).click()
  await dialog.locator('.MuiPickersArrowSwitcher-button').last().click()
  await dialog.getByRole('gridcell', { name: /^2026-07-17/ }).click()
  await expect(input).toHaveValue('2026-06-10 - 2026-07-17')
  await input.click()
  await dialog.getByRole('gridcell', { name: /^2026-07-10/ }).click()
  await dialog.getByRole('gridcell', { name: /^2026-07-10/ }).click()
  await expect(input).toHaveValue('2026-07-10 - 2026-07-10')
})

test('Range accessible names, contrast, navigation targets and automated a11y', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-datepicker--range-selected&viewMode=story')
  await page.getByRole('combobox').click()
  const dialog = page.getByRole('dialog')
  await expect(dialog).toHaveCSS('transform', 'none')
  await expect(
    dialog.getByRole('gridcell', { name: /2026-06-11,.*(interval|range)/i }),
  ).toBeVisible()
  const day = dialog.locator('[data-range-state="start"]')
  await expect(day).toHaveCSS('background-color', 'rgb(0, 121, 173)')
  await expect(day).toHaveCSS('color', 'rgb(255, 255, 255)')
  const ratio = await day.evaluate((element) => {
    const luminance = (rgb: string) =>
      rgb
        .match(/\d+/g)!
        .slice(0, 3)
        .map(Number)
        .map((v) => {
          const c = v / 255
          return c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4
        })
        .reduce((n, v, i) => n + v * [0.2126, 0.7152, 0.0722][i], 0)
    const style = getComputedStyle(element)
    return (luminance(style.color) + 0.05) / (luminance(style.backgroundColor) + 0.05)
  })
  expect(ratio).toBeGreaterThanOrEqual(4.5)
  const buttons = dialog.locator('.MuiPickersArrowSwitcher-button')
  const buttonBox = await buttons.first().boundingBox()
  expect(buttonBox!.width).toBeGreaterThanOrEqual(44)
  expect(buttonBox!.height).toBeGreaterThanOrEqual(44)
  await injectAxe(page)
  await checkA11y(page, '[role="dialog"]', { includedImpacts: ['critical', 'serious'] })
  await dialog.screenshot({ path: test.info().outputPath('range-calendar.png') })
})

test('A partial range survives Escape and waits for its end when reopened', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-datepicker--range&viewMode=story')
  const input = page.getByRole('combobox')
  await input.click()
  const dialog = page.getByRole('dialog')
  await dialog.getByRole('gridcell', { name: /^2026-06-10/ }).click()
  await page.keyboard.press('Escape')
  await expect(input).toHaveValue('2026-06-10')
  await expect(page.getByLabel('Stored range')).toContainText('["2026-06-10",null]')
  await input.press('ArrowDown')
  await dialog.getByRole('gridcell', { name: /^2026-06-17/ }).click()
  await expect(input).toHaveValue('2026-06-10 - 2026-06-17')
})

test('Disabled Range cannot open its calendar', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-datepicker--range-disabled&viewMode=story')
  await expect(page.getByRole('combobox')).toBeDisabled()
  await expect(page.locator('[role="dialog"]')).toHaveCount(0)
})

test('Range clear button works with keyboard without opening the calendar', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-datepicker--range-selected&viewMode=story')
  const clear = page.getByRole('button', { name: /Clear current|Išvalyti/i })
  await clear.focus()
  await clear.press('Enter')
  await expect(page.getByRole('combobox')).toHaveValue('')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(page.getByRole('combobox')).toBeFocused()
  await injectAxe(page)
  await checkA11y(page, '#storybook-root', { includedImpacts: ['critical', 'serious'] })
})

test('Range dialog traps focus and shows a focus ring on keyboard days', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-datepicker--range&viewMode=story')
  const input = page.getByRole('combobox')
  await input.focus()
  await input.press('Enter')
  const dialog = page.getByRole('dialog')
  const day = dialog.getByRole('gridcell', { name: /^2026-06-10/ })
  await day.focus()
  await day.press('ArrowRight')
  const next = dialog.getByRole('gridcell', { name: /^2026-06-11/ })
  await expect(next).toBeFocused()
  await expect(next).not.toHaveCSS('box-shadow', 'none')
  await page.keyboard.press('Tab')
  await expect
    .poll(() => dialog.evaluate((el) => el.contains(document.activeElement)))
    .toBe(true)
  await page.keyboard.press('Shift+Tab')
  await expect
    .poll(() => dialog.evaluate((el) => el.contains(document.activeElement)))
    .toBe(true)
  await page.keyboard.press('Escape')
  await expect(input).toBeFocused()
})

test('Range Today ring uses the same Figma primitive as Single', async ({ page }) => {
  await page.clock.setFixedTime(new Date('2026-06-15T12:00:00Z'))
  await page.goto('/iframe.html?id=molecules-datepicker--range&viewMode=story')
  await page.getByRole('combobox').click()
  const today = page.getByRole('dialog').getByRole('gridcell', { name: /^2026-06-15/ })
  await expect(today).toHaveAttribute('aria-current', 'date')
  await expect(today).toHaveCSS('outline-color', 'rgb(6, 160, 212)')
})
