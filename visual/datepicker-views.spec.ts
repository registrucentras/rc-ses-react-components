import { expect, test } from '@playwright/test'

import expectNoSeriousA11yIssues from './a11y'

const selections = ['single', 'range']
const widths = [375, 768, 1440]
const monthButton = /Pasirinkti mėnesį|Choose month/
const yearButton = /Pasirinkti metus|Choose year/
const monthsName = /Mėnesių vaizdas|Months view/
const yearsName = /Metų vaizdas|Years view/

test('Empty Single autofocus does not paint today as selected', async ({ page }) => {
  await page.clock.setFixedTime(new Date(2026, 0, 15, 12))
  await page.goto('/iframe.html?id=molecules-datepicker--main&viewMode=story')
  await page.getByRole('spinbutton').first().click()
  const calendar = page.locator('.MuiDateCalendar-root')
  const today = calendar.locator('.MuiPickerDay-today')
  await expect(today).toBeFocused()
  await expect(today).not.toHaveClass(/Mui-selected/)
  // MUI can mark autofocus as focus-visible; both base-white and transparent
  // are valid here. The primary-colour focus tint must never reappear.
  await expect(today).toHaveCSS(
    'background-color',
    /^(rgba\(0, 0, 0, 0\)|rgb\(255, 255, 255\))$/,
  )
  await expect(today).toHaveCSS('outline-color', 'rgb(6, 160, 212)')
  await expect(calendar.locator('.Mui-selected')).toHaveCount(0)
  await page.keyboard.press('ArrowRight')
  const focused = calendar.locator('.Mui-focusVisible')
  await expect(focused).toBeFocused()
  await expect(focused).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  await expect(focused).not.toHaveCSS('box-shadow', 'none')
  await expect(calendar.locator('.Mui-selected')).toHaveCount(0)
})

;[375, 1440].forEach((width) => {
  test(`Single field click opens the calendar at ${width}px and clear stays closed`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=molecules-datepicker--main&viewMode=story')
    const field = page.locator('.MuiPickersInputBase-root')
    await field.getByRole('spinbutton').first().click()
    const dialog = page.getByRole('dialog')
    await expect(dialog).toBeVisible()
    await expect(dialog.locator('.MuiPickersLayout-actionBar')).toHaveCount(0)
    await dialog
      .locator('.MuiPickerDay-root:not(.Mui-disabled)')
      .filter({ hasText: /^15$/ })
      .first()
      .click()
    await expect(dialog).not.toBeVisible()
    await page.getByRole('button', { name: /Clear current|Išvalyti/i }).click()
    await expect(dialog).not.toBeVisible()
    await expect(field.getByRole('spinbutton').first()).not.toHaveAttribute(
      'aria-valuenow',
    )
    // The empty space within the field is also a trigger.
    const bounds = await field.boundingBox()
    await field.click({ position: { x: bounds!.width - 20, y: 20 } })
    await expect(dialog).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(dialog).not.toBeVisible()
    await page
      .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
      .click()
    await expect(dialog).toBeVisible()
    await page.mouse.click(1, 1)
    await expect(dialog).not.toBeVisible()
  })
})

test('Single preserves keyboard date editing without opening on focus', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-datepicker--single-views&viewMode=story')
  const section = page.getByRole('spinbutton').first()
  const before = Number(await section.getAttribute('aria-valuenow'))
  await section.focus()
  await page.keyboard.press('ArrowUp')
  await expect(section).toHaveAttribute('aria-valuenow', String(before + 1))
  await expect(page.getByRole('dialog')).not.toBeVisible()
})

test('Selected Single weekend retains inverse text contrast', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-datepicker--single-views&viewMode=story')
  await page
    .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
    .click()
  await page.getByRole('gridcell', { name: '13', exact: true }).click()
  await page
    .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
    .click()
  const selected = page.locator('.MuiDayCalendar-root .Mui-selected')
  await expect(selected).toHaveText('13')
  await expect(selected).toHaveCSS('color', 'rgb(255, 255, 255)')
  await expect(selected).toHaveCSS('background-color', 'rgb(0, 121, 173)')
})

test('Disabled Single does not open on field click', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-datepicker--disabled&viewMode=story')
  await page.locator('.MuiPickersInputBase-root').click({ force: true })
  await expect(page.getByRole('dialog')).not.toBeVisible()
})

test('Single month animation stays inside the calendar panel', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' })
  await page.goto('/iframe.html?id=molecules-datepicker--single-views&viewMode=story')
  await page
    .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
    .click()
  const calendar = page.locator('.MuiDateCalendar-root')
  await expect(calendar).toBeVisible()
  await expect(calendar).toHaveCSS('overflow', 'hidden')
  const checkSlide = async (buttonName: RegExp) => {
    await page.getByRole('button', { name: buttonName }).click()
    const exit = calendar.locator('.MuiPickersSlideTransition-slideExit')
    await expect(exit).toBeAttached()
    const leaks = await calendar.evaluate((panel) => {
      const bounds = panel.getBoundingClientRect()
      return [...panel.querySelectorAll('.MuiPickerDay-root')].some((day) => {
        const rect = day.getBoundingClientRect()
        const x = rect.x + rect.width / 2
        const y = rect.y + rect.height / 2
        if (x >= bounds.left && x <= bounds.right) return false
        const hit = document.elementFromPoint(x, y)
        return hit !== null && day.contains(hit)
      })
    })
    expect(leaks).toBe(false)
    await expect(exit).not.toBeAttached()
  }
  await checkSlide(/Next month/)
  await checkSlide(/Previous month/)
})

selections.forEach((selection) => {
  test(`${selection} view navigation preserves the value and returns focus to the day grid`, async ({
    page,
  }) => {
    await page.goto(
      `/iframe.html?id=molecules-datepicker--${selection}-views&viewMode=story`,
    )
    const field =
      selection === 'single'
        ? page.locator('.MuiPickersInputBase-root')
        : page.getByRole('combobox', { includeHidden: true })
    const before =
      selection === 'single' ? await field.innerText() : await field.inputValue()
    await page
      .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
      .click()
    await page.getByRole('button', { name: monthButton }).click()
    await page.getByRole('button', { name: yearButton }).click()
    await page.getByRole('gridcell', { name: '2027', exact: true }).click()
    await page.getByRole('gridcell', { name: /Gegužė/i }).click()
    const calendar = page.locator('.MuiDateCalendar-root')
    const dayGrid = calendar.locator('.MuiDayCalendar-root')
    await expect(dayGrid.locator('[role="rowgroup"] [role="row"]')).toHaveCount(6)
    await expect
      .poll(() => dayGrid.evaluate((element) => element.contains(document.activeElement)))
      .toBe(true)
    const lastDay = dayGrid.locator('.MuiPickerDay-root').last()
    const bounds = await calendar.boundingBox()
    const lastBounds = await lastDay.boundingBox()
    expect(lastBounds!.y + lastBounds!.height).toBeLessThanOrEqual(
      bounds!.y + bounds!.height,
    )
    const after =
      selection === 'single' ? await field.innerText() : await field.inputValue()
    expect(after).toBe(before)
  })

  test(`${selection} calendar fits without an internal scrollbar`, async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 600 })
    await page.goto(
      `/iframe.html?id=molecules-datepicker--${selection}-views&viewMode=story`,
    )
    await page
      .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
      .click()
    const calendar = page.locator('.MuiDateCalendar-root')
    const day = calendar.locator('.MuiPickerDay-root.Mui-selected').first()
    await expect(day).toHaveCSS('width', '44px')
    await expect(day).toHaveCSS('height', '44px')
    await expect(day).toHaveCSS('border-radius', '8px')
    const checkOverflow = async () => {
      const overflow = await page.getByRole('dialog').evaluate((dialog) =>
        [dialog, ...dialog.querySelectorAll('*')]
          .filter((element) => {
            const style = getComputedStyle(element)
            return (
              ['auto', 'scroll'].includes(style.overflowY) &&
              element.scrollHeight > element.clientHeight + 1
            )
          })
          .map((element) => ({
            className: element.className,
            height: element.clientHeight,
            content: element.scrollHeight,
          })),
      )
      expect(overflow).toEqual([])
    }
    await checkOverflow()
    await page.getByRole('button', { name: monthButton }).click()
    await checkOverflow()
    await page.getByRole('button', { name: yearButton }).click()
    await checkOverflow()
  })

  widths.forEach((width) => {
    test(`${selection} Calendar/Months/Years at ${width}px`, async ({ page }) => {
      await page.setViewportSize({ width, height: 1000 })
      await page.goto(
        `/iframe.html?id=molecules-datepicker--${selection}-views&viewMode=story`,
      )
      await page
        .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
        .click()
      const calendar = page.locator('.MuiDateCalendar-root')
      await expect(calendar).toBeVisible()
      await expect(calendar).toHaveCSS('height', '388px')
      await page.getByRole('button', { name: monthButton }).click()
      const months = page.getByRole('grid', { name: monthsName })
      await expect(months.getByRole('gridcell')).toHaveCount(12)
      await expect(calendar).toHaveCSS('height', '388px')
      const cell = await months.getByRole('gridcell').first().boundingBox()
      expect(cell!.width).toBeGreaterThanOrEqual(44)
      expect(cell!.height).toBeGreaterThanOrEqual(44)
      await months.getByRole('gridcell', { name: /liepa/i }).click()
      await expect(page.getByRole('button', { name: monthButton })).toContainText(
        /liepa/i,
      )
      await page.getByRole('button', { name: monthButton }).click()
      await page.getByRole('button', { name: yearButton }).click()
      const years = page.getByRole('grid', { name: yearsName })
      await expect(years.getByRole('gridcell')).toHaveCount(12)
      await expect(years.getByRole('gridcell').first()).toHaveText('2020')
      await page.getByRole('button', { name: /Kiti 12|Next 12/ }).click()
      await expect(years.getByRole('gridcell').first()).toHaveText('2032')
      await page.getByRole('button', { name: /Ankstesni 12|Previous 12/ }).click()
      await expect(years.getByRole('gridcell').first()).toHaveText('2020')
      await page.getByRole('button', { name: /Kiti 12|Next 12/ }).click()
      await expect(calendar).toHaveCSS('height', '388px')
      await years.getByRole('gridcell', { name: '2035', exact: true }).click()
      await expect(months).toBeVisible()
      await expect(page.getByRole('button', { name: yearButton })).toContainText('2035')
      await months.getByRole('gridcell', { name: /rugpjūtis/i }).click()
      await expect(page.getByRole('button', { name: monthButton })).toContainText('2035')
      const bounds = await calendar.boundingBox()
      expect(bounds!.x).toBeGreaterThanOrEqual(0)
      expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width)
      await page.keyboard.press('Escape')
    })
  })

  test(`${selection} view grids keyboard, Escape and accessibility`, async ({ page }) => {
    await page.goto(
      `/iframe.html?id=molecules-datepicker--${selection}-views&viewMode=story`,
    )
    await page
      .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
      .click()
    await page.getByRole('button', { name: monthButton }).click()
    const months = page.getByRole('grid', { name: monthsName })
    await expect(months.getByRole('gridcell', { name: /birželis/i })).toBeFocused()
    await page.keyboard.press('ArrowDown')
    await expect(months.getByRole('gridcell', { name: /rugsėjis/i })).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(page.getByRole('button', { name: monthButton })).toContainText(
      /rugsėjis/i,
    )
    await page.getByRole('button', { name: monthButton }).click()
    await expectNoSeriousA11yIssues(page, '.MuiDateCalendar-root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    })
    await expect(page.locator('.MuiDateCalendar-root')).toHaveScreenshot(
      `datepicker-${selection}-months.png`,
    )
    await page.getByRole('button', { name: yearButton }).click()
    await expectNoSeriousA11yIssues(page, '.MuiDateCalendar-root', {
      detailedReport: true,
      detailedReportOptions: { html: true },
    })
    await expect(page.locator('.MuiDateCalendar-root')).toHaveScreenshot(
      `datepicker-${selection}-years.png`,
    )
    const years = page.getByRole('grid', { name: yearsName })
    await expect(years.getByRole('gridcell', { name: '2026', exact: true })).toBeFocused()
    await page.keyboard.press('ArrowRight')
    await expect(years.getByRole('gridcell', { name: '2027', exact: true })).toBeFocused()
    await page.keyboard.press('Enter')
    await expect(months).toBeVisible()
    await page.getByRole('button', { name: yearButton }).click()
    await page.keyboard.press('Escape')
    await expect(months).toBeVisible()
    // Check focus before the next animation frame, when the month cell has
    // just been removed and another Escape must still reach the dialog.
    const calendar = page.locator('.MuiDateCalendar-root')
    await calendar.evaluate((element) => {
      const header = element.querySelector('[data-calendar-view]')!
      const observer = new MutationObserver(() => {
        if (header.getAttribute('data-calendar-view') !== 'calendar') return
        element.setAttribute(
          'data-focus-returned',
          String(element.contains(document.activeElement)),
        )
        observer.disconnect()
      })
      observer.observe(header, {
        attributes: true,
        attributeFilter: ['data-calendar-view'],
      })
    })
    await page.keyboard.press('Escape')
    await expect(calendar).toHaveAttribute('data-focus-returned', 'true')
    await expect(page.getByRole('button', { name: monthButton })).toBeVisible()
    await expect(page.getByRole('dialog')).toBeVisible()
    await page.keyboard.press('Escape')
    await expect(page.getByRole('dialog')).not.toBeVisible()
  })
})

test('Months view hides Previous/Next navigation arrows', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-datepicker--single-views&viewMode=story')
  await page
    .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
    .click()
  await page.getByRole('button', { name: monthButton }).click()
  // months view hides Previous/Next navigation arrows with visibility:hidden
  const prevButton = page.getByRole('button', { name: /Ankstesnį mėnesį|Previous month/ })
  const nextButton = page.getByRole('button', { name: /Kitą mėnesį|Next month/ })
  await expect(prevButton).toBeHidden()
  await expect(nextButton).toBeHidden()
  // year button remains visible and functional
  await expect(page.getByRole('button', { name: yearButton })).toBeVisible()
})

test('Years blocks respect min/max bounds and disabled months are skipped', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-datepicker--bounded-views&viewMode=story')
  await page
    .getByRole('button', { name: /Atverti datos|Open datepicker|Choose date/ })
    .click()
  await page.getByRole('button', { name: monthButton }).click()
  const months = page.getByRole('grid', { name: monthsName })
  await expect(months.getByRole('gridcell', { name: /sausis/i })).toBeDisabled()
  await expect(months.getByRole('gridcell', { name: /gruodis/i })).toBeDisabled()
  await page.getByRole('button', { name: yearButton }).click()
  await expect(
    page.getByRole('button', { name: /Ankstesni 12|Previous 12/ }),
  ).toBeDisabled()
  await expect(page.getByRole('button', { name: /Kiti 12|Next 12/ })).toBeDisabled()
  await expect(page.getByRole('gridcell', { name: '2025', exact: true })).toBeDisabled()
  await expect(page.getByRole('gridcell', { name: '2026', exact: true })).toBeEnabled()
})
