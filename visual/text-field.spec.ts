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

test('TextField keeps error focus red in the shared Input theme', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-textfield--token-states&viewMode=story')
  const input = page.getByRole('textbox', { name: 'Klaida ir error hover', exact: true })
  await input.focus()
  const outline = input.locator('..').locator('fieldset')
  await expect(outline).toHaveCSS('border-color', 'rgb(200, 72, 56)')
  await expect(outline).toHaveCSS('border-width', '2px')
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
    await expect(outline).toHaveCSS('box-shadow', 'rgb(0, 121, 173) 0px 0px 0px 2px')
    const error = page.getByRole('textbox', { name: `${name} error`, exact: true })
    await error.hover()
    await error.focus()
    const errorOutline = error.locator('..').locator('fieldset')
    await expect(errorOutline).toHaveCSS('border-color', 'rgb(200, 72, 56)')
    await expect(errorOutline).toHaveCSS('box-shadow', 'rgb(200, 72, 56) 0px 0px 0px 2px')
    const autocomplete = page.getByRole('combobox', { name: `${name} autocomplete` })
    await autocomplete.focus()
    await expect(autocomplete.locator('..').locator('fieldset')).toHaveCSS(
      'border-color',
      'rgb(0, 121, 173)',
    )
  }
})
