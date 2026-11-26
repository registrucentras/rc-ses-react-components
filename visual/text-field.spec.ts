import { expect, test } from '@playwright/test'

test('TextField input sx overrides typography and padding in the browser', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-textfield--input-style-overrides&viewMode=story')
  const objectInput = page.getByRole('textbox', { name: 'Custom input' })
  await expect(objectInput).toHaveCSS('font-size', '20px')
  await expect(objectInput).toHaveCSS('padding', '4px 8px')
  const callbackInput = page.getByRole('textbox', { name: 'Callback input' })
  await expect(callbackInput).toHaveCSS('font-size', '24px')
  await expect(callbackInput).toHaveCSS('padding', '8px')
})

test('TextField adornments preserve spinner and SVG dimensions', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-textfield--loading&viewMode=story')
  await Promise.all(
    (
      [
        ['small', 16],
        ['large', 24],
      ] as const
    ).map(async ([size, pixels]) => {
      const spinner = page
        .getByRole('group', { name: `Loading ${size}` })
        .getByRole('progressbar')
      await expect(spinner).toHaveCSS('width', `${pixels}px`)
      await expect(spinner).toHaveCSS('height', `${pixels}px`)
      await expect(spinner.locator('svg')).toHaveCSS('width', `${pixels}px`)
      await expect(spinner.locator('svg')).toHaveCSS('height', `${pixels}px`)
    }),
  )
})

test('TextField uses the DS cyan error focus', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-textfield--token-states&viewMode=story')
  const input = page.getByRole('textbox', { name: /^Klaida ir error hover/ })
  await input.focus()
  const outline = input.locator('..').locator('fieldset')
  await expect(outline).toHaveCSS('border-color', 'rgb(0, 121, 173)')
  await expect(outline).toHaveCSS('border-width', '2px')
  await expect(outline).toHaveCSS('box-shadow', 'none')
})

test('disabled Input uses Surface/muted fill and Border/subtle stroke', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-textfield--token-states&viewMode=story')
  const input = page.getByRole('textbox', {
    name: /^Išjungtas laukas(?: \((?:neprivaloma|optional)\))?$/,
  })
  await expect(input).toBeDisabled()
  await page.evaluate(() => {
    const css = document.documentElement.style
    css.setProperty('--rc-color-surface-muted', 'rgb(1 2 3)')
    css.setProperty('--rc-color-border-subtle', 'rgb(4 5 6)')
    css.setProperty('--rc-color-control-disabled', 'rgb(100 110 120)')
  })
  await expect(input.locator('..')).toHaveCSS('background-color', 'rgb(1, 2, 3)')
  await expect(input.locator('..').locator('fieldset')).toHaveCSS(
    'border-color',
    'rgb(4, 5, 6)',
  )
})

/* eslint-disable no-restricted-syntax, no-await-in-loop -- each theme checks sequential focus and hover on the same page. */
test('raw MUI inputs share token states in legacy and token themes', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-textfield--shared-input-states&viewMode=story')
  await page.evaluate(() => {
    document.documentElement.style.setProperty('--rc-color-border-strong', 'rgb(1 2 3)')
    document.documentElement.style.setProperty('--rc-color-control-border', 'rgb(4 5 6)')
  })
  for (const name of ['legacy', 'tokens']) {
    const rest = page.getByRole('textbox', { name: `${name} rest`, exact: true })
    const outline = rest.locator('..').locator('fieldset')
    await expect(outline).toHaveCSS('border-color', 'rgb(1, 2, 3)')
    await rest.hover()
    await expect(outline).toHaveCSS('border-color', 'rgb(4, 5, 6)')
    await rest.focus()
    await expect(outline).toHaveCSS('border-color', 'rgb(0, 121, 173)')
    await expect(outline).toHaveCSS('border-width', '2px')
    await expect(outline).toHaveCSS('box-shadow', 'none')
    const error = page.getByRole('textbox', { name: `${name} error`, exact: true })
    await error.hover()
    await error.focus()
    const errorOutline = error.locator('..').locator('fieldset')
    await expect(errorOutline).toHaveCSS('border-color', 'rgb(200, 72, 56)')
    await expect(errorOutline).toHaveCSS('border-width', '2px')
    await expect(errorOutline).toHaveCSS('box-shadow', 'none')
    const autocomplete = page.getByRole('combobox', { name: `${name} autocomplete` })
    await autocomplete.focus()
    await expect(autocomplete.locator('..').locator('fieldset')).toHaveCSS(
      'border-color',
      'rgb(0, 121, 173)',
    )
  }
})

;['default', 'top', 'side'].forEach((mode) => {
  ;[375, 768, 1440].forEach((width) => {
    test(`TextField and Select share ${mode} labels and supporting text at ${width}px`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1200 })
      await page.goto(
        '/iframe.html?id=molecules-formcontrolwrapper--shared-labels&viewMode=story',
      )
      const text = page.locator(`.shared-text-${mode}`)
      const select = page.locator(`.shared-select-${mode}`)
      const textLabel = text.locator('.MuiFormLabel-root')
      const selectLabel = select.locator('.MuiFormLabel-root')
      await expect(textLabel).toBeVisible()
      const readLabel = (element: Element) => {
        const css = getComputedStyle(element)
        return {
          fontSize: css.fontSize,
          lineHeight: css.lineHeight,
          fontWeight: css.fontWeight,
          color: css.color,
        }
      }
      expect(await textLabel.evaluate(readLabel)).toEqual(
        await selectLabel.evaluate(readLabel),
      )
      await expect(text.locator('.MuiFormHelperText-root')).toHaveCount(2)
      await expect(select.locator('.MuiFormHelperText-root')).toHaveCount(2)
      expect(
        await text.locator('.MuiFormHelperText-root').last().evaluate(readLabel),
      ).toEqual(
        await select.locator('.MuiFormHelperText-root').last().evaluate(readLabel),
      )
      const textBox = await text.boundingBox()
      const selectBox = await select.boundingBox()
      const textFieldBox = await text.locator('.rc-ses-form-field-wrapper').boundingBox()
      const selectFieldBox = await select
        .locator('.rc-ses-form-field-wrapper')
        .boundingBox()
      expect(textFieldBox!.x - textBox!.x).toBeCloseTo(
        selectFieldBox!.x - selectBox!.x,
        1,
      )
      await expect(text.getByText(/neprivaloma|optional/)).toHaveCount(0)
      await page.getByRole('button', { name: 'Toggle required' }).click()
      await expect(textLabel.locator('.MuiFormLabel-asterisk')).toHaveCount(1)
      await expect(selectLabel.locator('.MuiFormLabel-asterisk')).toHaveCount(1)
      await page.getByRole('button', { name: 'Toggle disabled' }).click()
      await expect(text.locator('input')).toBeDisabled()
      await expect(select.locator('input')).toBeDisabled()
      expect(await textLabel.evaluate(readLabel)).toEqual(
        await selectLabel.evaluate(readLabel),
      )
    })
  })
})
