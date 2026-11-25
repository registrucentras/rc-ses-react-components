import { expect, test } from '@playwright/test'

const story = '/iframe.html?id=fixtures-foundations-effects--overview&viewMode=story'
const shadows = {
  sm: 'rgba(0, 0, 0, 0.08) 0px 4px 6px 0px, rgba(0, 0, 0, 0.06) 0px 1px 3px 0px',
  md: 'rgba(0, 0, 0, 0.08) 0px 4px 16px 0px',
  lg: 'rgba(0, 0, 0, 0.12) 0px 8px 16px 0px',
}
const rings = {
  default: 'rgb(0, 121, 173) 0px 0px 0px 2px',
  error: 'rgb(200, 72, 56) 0px 0px 0px 2px',
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
    '1px solid rgb(0, 121, 173)',
  )
  await expect(page.getByTestId('focus-reference-error')).toHaveCSS(
    'border-radius',
    '6px',
  )
  await expect(page.getByTestId('focus-reference-error')).toHaveCSS(
    'border',
    '1px solid rgb(107, 116, 127)',
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
  await page.evaluate(() =>
    document.documentElement.style.setProperty('--rc-elevation-md', 'initial'),
  )
  await expect(page.locator('.MuiAutocomplete-paper')).toHaveCSS('box-shadow', shadows.md)
})

test('component roles cover Popover, Menu, Select, Dialog and Snackbar with live tokens and legacy fallbacks', async ({
  page,
}) => {
  await page.goto(
    '/iframe.html?id=fixtures-foundations-effects--component-roles&viewMode=story',
  )
  await expect(
    page.getByRole('button', { name: 'Open popover', exact: true }),
  ).toBeVisible()
  const legacy = await Promise.all(
    [8, 24, 6].map(async (level) =>
      page
        .getByTestId(`legacy-shadow-${level}`)
        .evaluate((element) => getComputedStyle(element).boxShadow),
    ),
  )
  const cases = [
    { role: 'popover', token: 'md', fallback: legacy[0] },
    { role: 'menu', token: 'md', fallback: legacy[0] },
    { role: 'select', token: 'md', fallback: legacy[0] },
    { role: 'dialog', token: 'lg', fallback: legacy[1] },
    { role: 'snackbar', token: 'lg', fallback: legacy[2] },
  ] as const
  /* eslint-disable no-await-in-loop -- Open and close each portalled component sequentially. */
  for (let index = 0; index < cases.length; index += 1) {
    const { role, token, fallback } = cases[index]
    if (role === 'select')
      await page.getByRole('combobox', { name: 'Role select' }).click()
    else await page.getByRole('button', { name: `Open ${role}`, exact: true }).click()
    const paper = page.locator(`.effects-role-${role}`)
    await expect(paper).toBeVisible()
    await expect(paper).toHaveCSS('box-shadow', shadows[token])
    await page.evaluate(
      (name) => document.documentElement.style.setProperty(name, 'none'),
      `--rc-elevation-${token}`,
    )
    await expect(paper).toHaveCSS('box-shadow', 'none')
    await page.evaluate(
      (name) => document.documentElement.style.setProperty(name, 'initial'),
      `--rc-elevation-${token}`,
    )
    await expect(paper).toHaveCSS('box-shadow', fallback)
    await page.evaluate(
      (name) => document.documentElement.style.removeProperty(name),
      `--rc-elevation-${token}`,
    )
    await expect(paper).toHaveCSS('box-shadow', shadows[token])
    await page.keyboard.press('Escape')
    await expect(paper).not.toBeVisible()
  }
  /* eslint-enable no-await-in-loop */
})
