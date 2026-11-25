import { expect, test } from '@playwright/test'

test('theme radius multiplication, component aliases, live tokens and legacy fallbacks', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=fixtures-foundations-borders--radius&viewMode=story')
  const shape = page.getByTestId('theme-radius')
  const card = page.getByTestId('theme-card')
  const button = page.getByTestId('theme-button')
  const input = page.getByTestId('theme-input')
  const errorInput = page.getByTestId('theme-input-error')
  const autocomplete = page.getByTestId('theme-autocomplete')
  const autocompleteRoot = autocomplete.locator('.MuiOutlinedInput-root')
  const autocompleteOutline = autocomplete.locator('fieldset')
  await expect(autocompleteRoot).toHaveCSS('border-top-left-radius', '8px')
  await expect(autocompleteOutline).toHaveCSS('border-top-left-radius', '8px')
  await expect(page.getByTestId('custom-radius')).toHaveCSS(
    'border-top-left-radius',
    '3px',
  )
  await expect(shape).toHaveCSS('border-top-left-radius', '8px')
  await expect(card).toHaveCSS('border-top-left-radius', '16px')
  await expect(button).toHaveCSS('border-top-left-radius', '8px')
  await input.locator('input').focus()
  await expect(input.locator('fieldset')).toHaveCSS('border-top-left-radius', '8px')
  await page.evaluate(() => {
    document.documentElement.style.setProperty('--rc-radius-4', '0.375rem')
    document.documentElement.style.setProperty('--rc-radius-16', '1.5rem')
    document.documentElement.style.setProperty('--rc-radius-button', '0.75rem')
    document.documentElement.style.setProperty('--rc-radius-input', '0.625rem')
  })
  await expect(autocompleteRoot).toHaveCSS('border-top-left-radius', '10px')
  await expect(autocompleteOutline).toHaveCSS('border-top-left-radius', '10px')
  await autocomplete.locator('input').focus()
  await expect(autocompleteRoot).toHaveCSS('border-top-left-radius', '10px')
  await expect(autocompleteOutline).toHaveCSS('border-top-left-radius', '10px')
  await input.locator('input').focus()
  await expect(shape).toHaveCSS('border-top-left-radius', '12px')
  await expect(card).toHaveCSS('border-top-left-radius', '24px')
  await expect(page.getByTestId('radius-card')).toHaveCSS(
    'border-top-left-radius',
    '24px',
  )
  await expect(button).toHaveCSS('border-top-left-radius', '12px')
  await expect(page.getByTestId('custom-radius')).toHaveCSS(
    'border-top-left-radius',
    '3px',
  )
  await expect(input.locator('fieldset')).toHaveCSS('border-top-left-radius', '10px')
  await errorInput.locator('input').focus()
  await expect(errorInput.locator('fieldset')).toHaveCSS('border-top-left-radius', '10px')
  await page.evaluate(() => {
    document.documentElement.style.setProperty('--rc-radius-4', 'initial')
    document.documentElement.style.setProperty('--rc-radius-16', 'initial')
    document.documentElement.style.setProperty('--rc-radius-button', 'initial')
    document.documentElement.style.fontSize = '20px'
    document.documentElement.style.setProperty('--rc-radius-input', 'initial')
  })
  await expect(shape).toHaveCSS('border-top-left-radius', '8px')
  await expect(card).toHaveCSS('border-top-left-radius', '20px')
  await expect(button).toHaveCSS('border-top-left-radius', '10px')
  await expect(errorInput.locator('fieldset')).toHaveCSS('border-top-left-radius', '10px')
  await autocomplete.locator('input').focus()
  await expect(autocompleteRoot).toHaveCSS('border-top-left-radius', '10px')
  await expect(autocompleteOutline).toHaveCSS('border-top-left-radius', '10px')
})
