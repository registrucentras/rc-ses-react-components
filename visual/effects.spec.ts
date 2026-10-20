import { expect, test } from '@playwright/test'

const story = '/iframe.html?id=foundations-effects--overview&viewMode=story'
const shadows = {
  sm: 'rgba(0, 0, 0, 0.08) 0px 4px 6px 0px, rgba(0, 0, 0, 0.06) 0px 1px 3px 0px',
  md: 'rgba(0, 0, 0, 0.08) 0px 4px 16px 0px',
  lg: 'rgba(0, 0, 0, 0.12) 0px 8px 16px 0px',
}
const rings = {
  default: 'rgba(140, 215, 240, 0.6) 0px 0px 0px 3px',
  error: 'rgba(242, 177, 164, 0.6) 0px 0px 0px 3px',
}

test('Figma shadows, Tab focus rings and popup resolve and react to live tokens', async ({
  page,
}) => {
  await page.goto(story)
  await Promise.all(
    Object.entries(shadows).map(async ([role, shadow]) => {
      await expect(page.getByTestId(`elevation-${role}`)).toHaveCSS('box-shadow', shadow)
      await expect(page.getByTestId(`elevation-${role}`)).toHaveCSS(
        'border-radius',
        '16px',
      )
    }),
  )
  await expect(page.getByTestId('focus-reference-default')).toHaveCSS(
    'box-shadow',
    rings.default,
  )
  await expect(page.getByTestId('focus-reference-error')).toHaveCSS(
    'box-shadow',
    rings.error,
  )
  await expect(page.getByTestId('focus-reference-default')).toHaveCSS(
    'border-radius',
    '6px',
  )
  await expect(page.getByTestId('focus-reference-default')).toHaveCSS(
    'border',
    '1px solid rgb(6, 160, 212)',
  )
  await expect(page.getByTestId('focus-reference-error')).toHaveCSS(
    'border-radius',
    '6px',
  )
  await expect(page.getByTestId('focus-reference-error')).toHaveCSS(
    'border',
    '1px solid rgb(169, 175, 184)',
  )

  await page.keyboard.press('Tab')
  const defaultFocus = page.getByTestId('focus-default')
  await expect(defaultFocus).toBeFocused()
  await expect(defaultFocus).toHaveCSS('box-shadow', `${shadows.md}, ${rings.default}`)
  await page.keyboard.press('Tab')
  const errorFocus = page.getByTestId('focus-error')
  await expect(errorFocus).toBeFocused()
  await expect(errorFocus).toHaveCSS('box-shadow', `${shadows.md}, ${rings.error}`)

  await page.evaluate(() => {
    const root = document.documentElement.style
    root.setProperty('--rc-elevation-sm', 'none')
    root.setProperty('--rc-elevation-md', '0 2px 10px rgb(1 2 3 / 0.5)')
    root.setProperty('--rc-elevation-lg', 'none')
    root.setProperty('--rc-focus-ring-default', '0 0 0 5px rgb(2 3 4 / 0.7)')
    root.setProperty('--rc-focus-ring-error', '0 0 0 6px rgb(3 4 5 / 0.8)')
  })
  const changedMd = 'rgba(1, 2, 3, 0.5) 0px 2px 10px 0px'
  await expect(page.getByTestId('elevation-sm')).toHaveCSS('box-shadow', 'none')
  await expect(page.getByTestId('elevation-md')).toHaveCSS('box-shadow', changedMd)
  await expect(page.getByTestId('elevation-lg')).toHaveCSS('box-shadow', 'none')
  await expect(errorFocus).toHaveCSS(
    'box-shadow',
    `${changedMd}, rgba(3, 4, 5, 0.8) 0px 0px 0px 6px`,
  )
  await page.keyboard.press('Shift+Tab')
  await expect(defaultFocus).toHaveCSS(
    'box-shadow',
    `${changedMd}, rgba(2, 3, 4, 0.7) 0px 0px 0px 5px`,
  )
  await page.getByTestId('effects-autocomplete').locator('input').click()
  await expect(page.getByRole('listbox')).toBeVisible()
  await expect(page.locator('.MuiAutocomplete-paper')).toHaveCSS('box-shadow', changedMd)
})

test('missing elevation token restores the legacy theme shadow', async ({ page }) => {
  await page.goto(story)
  await expect(page.getByTestId('legacy-elevation-4')).toBeVisible()
  const legacy = await page
    .getByTestId('legacy-elevation-4')
    .evaluate((element) => getComputedStyle(element).boxShadow)
  expect(legacy).not.toBe('none')
  await page.evaluate(() =>
    document.documentElement.style.setProperty('--rc-elevation-md', 'initial'),
  )
  await expect(page.getByTestId('elevation-md')).toHaveCSS('box-shadow', legacy)
  await page.getByTestId('effects-autocomplete').locator('input').click()
  await expect(page.getByRole('listbox')).toBeVisible()
  await expect(page.locator('.MuiAutocomplete-paper')).toHaveCSS('box-shadow', shadows.md)
})
