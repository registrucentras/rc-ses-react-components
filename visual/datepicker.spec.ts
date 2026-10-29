import { expect, test } from '@playwright/test'

const viewports = [375, 768, 1024, 1440]

test('Datepicker preserves consumer typography overrides', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=molecules-datepicker--consumer-overrides&viewMode=story',
  )
  const sections = page.locator('.MuiPickersInputBase-sectionsContainer')
  await expect(sections).toHaveCSS('font-size', '23px')
  await expect(sections).toHaveCSS('line-height', '29px')
})

const fieldStates = [
  { story: 'main', rest: '--rc-color-border-strong', focus: '--rc-color-border-focus' },
  {
    story: 'with-error',
    rest: '--rc-color-status-error-border',
    focus: '--rc-color-border-focus-error',
  },
]

fieldStates.forEach(({ story, rest, focus }) => {
  test(`Datepicker ${story} uses the shared Input roles without a double focus ring`, async ({
    page,
  }) => {
    await page.goto(`/iframe.html?id=molecules-datepicker--${story}&viewMode=story`)
    await page.evaluate(
      ({ restToken, focusToken }) => {
        document.documentElement.style.setProperty(restToken, 'rgb(11, 22, 33)')
        document.documentElement.style.setProperty(focusToken, 'rgb(44, 55, 66)')
      },
      { restToken: rest, focusToken: focus },
    )
    const field = page.locator('.MuiPickersInputBase-root')
    const outline = field.locator('.MuiPickersOutlinedInput-notchedOutline')
    await expect(outline).toHaveCSS('border-color', 'rgb(11, 22, 33)')
    await field.getByRole('spinbutton').first().focus()
    await expect(field).toHaveClass(/Mui-focused/)
    await expect(outline).toHaveCSS('border-color', 'rgb(44, 55, 66)')
    await expect(outline).toHaveCSS('border-width', '2px')
    await expect(outline).toHaveCSS('box-shadow', 'none')
    await field.hover()
    await expect(outline).toHaveCSS('border-color', 'rgb(44, 55, 66)')
  })
})

test('Datepicker disabled field uses Surface/muted and Border/subtle', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-datepicker--disabled&viewMode=story')
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-color-surface-muted',
      'rgb(11, 22, 33)',
    )
    document.documentElement.style.setProperty(
      '--rc-color-border-subtle',
      'rgb(44, 55, 66)',
    )
    document.documentElement.style.setProperty(
      '--rc-color-control-disabled',
      'rgb(77, 88, 99)',
    )
  })
  const field = page.locator('.MuiPickersInputBase-root')
  await expect(field).toHaveClass(/Mui-disabled/)
  await expect(field).toHaveCSS('background-color', 'rgb(11, 22, 33)')
  await expect(field.locator('.MuiPickersOutlinedInput-notchedOutline')).toHaveCSS(
    'border-color',
    'rgb(44, 55, 66)',
  )
})

viewports.forEach((width) => {
  test(`Datepicker token binding preserves existing cell dimensions at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.clock.setFixedTime(new Date(2026, 0, 15, 12))
    await page.goto(
      '/iframe.html?id=molecules-datepicker--calendar-with-value&viewMode=story',
    )
    const selected = page.locator('.MuiPickerDay-root.Mui-selected')
    // The installed MUI picker defaults to 36px; this ticket does not resize it.
    await expect(selected).toHaveCSS('width', '36px')
    await expect(selected).toHaveCSS('height', '36px')
    await expect(selected).toHaveCSS('font-size', '15px')
    await expect(selected).toHaveCSS('line-height', '22px')
    await expect(selected).toHaveCSS('border-radius', '9999px')
    await expect(selected).toHaveCSS('background-color', 'rgb(6, 160, 212)')
    await expect(selected).toHaveCSS('color', 'rgb(255, 255, 255)')
    await page.evaluate(() => {
      document.documentElement.style.setProperty('--rc-color-cyans-500', 'rgb(1, 2, 3)')
      document.documentElement.style.setProperty(
        '--rc-typography-font-size-body-regular',
        '17px',
      )
      document.documentElement.style.setProperty(
        '--rc-typography-line-height-body-regular',
        '23px',
      )
    })
    await expect(selected).toHaveCSS('background-color', 'rgb(1, 2, 3)')
    await expect(selected).toHaveCSS('font-size', '17px')
    await expect(selected).toHaveCSS('line-height', '23px')
    const outside = page.locator('.MuiPickerDay-dayOutsideMonth').first()
    await expect(outside).toBeVisible()
  })
})

test('Datepicker today outline and outside-day hover use tokens without a redesign', async ({
  page,
}) => {
  await page.clock.setFixedTime(new Date(2026, 0, 15, 12))
  await page.goto('/iframe.html?id=molecules-datepicker--calendar-open&viewMode=story')
  const today = page.locator('.MuiPickerDay-today')
  await today.evaluate((element) => (element as HTMLElement).blur())
  await expect(today).not.toHaveClass(/Mui-focusVisible/)
  await expect(today).toHaveCSS('outline-width', '1px')
  await expect(today).toHaveCSS('outline-color', 'rgb(107, 116, 127)')
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-color-surface-muted',
      'rgb(10, 20, 30)',
    )
    document.documentElement.style.setProperty('--rc-color-text-muted', 'rgb(40, 50, 60)')
  })
  await today.hover()
  await expect(today).toHaveCSS('background-color', 'rgb(10, 20, 30)')
  await expect(today).toHaveCSS('outline-width', '1px')
  const outside = page.locator('.MuiPickerDay-dayOutsideMonth').first()
  await outside.hover()
  await expect(outside).toHaveCSS('color', 'rgb(40, 50, 60)')
  await expect(outside).toHaveCSS('background-color', 'rgb(10, 20, 30)')
})

test.describe('touch Datepicker', () => {
  test.use({ hasTouch: true, isMobile: true, viewport: { width: 375, height: 812 } })

  test('mobile dialog uses the same selection token', async ({ page }) => {
    await page.goto(
      '/iframe.html?id=molecules-datepicker--calendar-with-value&viewMode=story',
    )
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    const selected = dialog.locator('.MuiPickerDay-root.Mui-selected')
    await expect(selected).toHaveCSS('width', '36px')
    await expect(selected).toHaveCSS('height', '36px')
    await expect(selected).toHaveCSS('background-color', 'rgb(6, 160, 212)')
  })
})

test('Datepicker keeps red weekend styling, including disabled and outside days', async ({
  page,
}) => {
  await page.goto(
    '/iframe.html?id=molecules-datepicker--calendar-with-disabled-dates&viewMode=story',
  )
  await page.evaluate(() => {
    document.documentElement.style.setProperty('--rc-color-red-600', 'rgb(11, 22, 33)')
    document.documentElement.style.setProperty('--rc-color-red-200', 'rgb(44, 55, 66)')
  })
  const weekend = page.getByRole('gridcell', { name: '24', exact: true })
  await expect(weekend).toBeDisabled()
  await expect(weekend).toHaveCSS('color', 'rgb(11, 22, 33)')
  const outsideWeekend = page
    .locator(
      '.MuiDayCalendar-weekContainer .MuiPickerDay-dayOutsideMonth:is(:nth-of-type(6), :nth-of-type(7))',
    )
    .first()
  await expect(outsideWeekend).toHaveCSS('color', 'rgb(44, 55, 66)')
})
