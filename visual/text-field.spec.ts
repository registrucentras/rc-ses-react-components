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

test('TextField keeps cyan focus on invalid inputs after merging input styles', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-textfield--token-states&viewMode=story')
  const input = page.getByRole('textbox', { name: 'Klaida ir error hover', exact: true })
  await input.focus()
  const outline = input.locator('..').locator('fieldset')
  await expect(outline).toHaveCSS('border-color', 'rgb(0, 121, 173)')
  await expect(outline).toHaveCSS('border-width', '2px')
})
