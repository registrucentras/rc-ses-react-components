import { expect, test } from '@playwright/test'

const variants = [
  { story: 'destructive-token-bindings', token: 'error', buttons: 2 },
  { story: 'success-token-bindings', token: 'success', buttons: 1 },
  { story: 'info-token-bindings', token: 'info', buttons: 1 },
]

variants.forEach(({ story, token, buttons }) => {
  test(`${story} uses its semantic icon role and preserves its actions`, async ({
    page,
  }) => {
    await page.goto(`/iframe.html?id=organisms-modal--${story}&viewMode=story`)
    const dialog = page.getByRole('dialog')
    await expect(dialog.getByRole('button')).toHaveCount(buttons)
    await page.locator('.MuiDialog-root').evaluate((element, status) => {
      const root = element as HTMLElement
      root.style.setProperty(`--rc-color-status-${status}-icon`, '#123456')
    }, token)
    await expect(dialog.locator('[aria-hidden="true"] svg')).toHaveCSS(
      'fill',
      'rgb(18, 52, 86)',
    )
  })
})

test('Modal binds surface, border, typography, icon and built-in action tokens', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=organisms-modal--token-bindings&viewMode=story')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toHaveCSS('width', '600px')
  await expect(dialog).toHaveCSS('padding', '32px')
  await expect(dialog).toHaveCSS('border-radius', '16px')
  await expect(dialog.locator('.MuiDialogTitle-root')).toHaveCSS('font-size', '24px')
  await expect(dialog.locator('.MuiDialogContent-root')).toHaveCSS('line-height', '22px')
  await expect(dialog.getByRole('button', { name: 'Tęsti' })).toHaveCSS(
    'background-color',
    'rgb(185, 233, 250)',
  )
  await page.locator('.MuiDialog-root').evaluate((element) => {
    const root = element as HTMLElement
    root.style.setProperty('--rc-color-surface-base', '#112233')
    root.style.setProperty('--rc-color-border-default', '#223344')
    root.style.setProperty('--rc-radius-modal', '20px')
    root.style.setProperty('--rc-color-status-info-icon', '#334455')
    root.style.setProperty('--rc-color-action-primary-bg', '#445566')
    root.style.setProperty('--rc-typography-font-size-heading-h2', '30px')
  })
  await expect(dialog).toHaveCSS('background-color', 'rgb(17, 34, 51)')
  await expect(dialog).toHaveCSS('border-top-color', 'rgb(34, 51, 68)')
  await expect(dialog).toHaveCSS('border-radius', '20px')
  await expect(dialog.locator('.MuiDialogTitle-root')).toHaveCSS('font-size', '30px')
  await expect(dialog.locator('[aria-hidden="true"] svg')).toHaveCSS(
    'fill',
    'rgb(51, 68, 85)',
  )
  await expect(dialog.getByRole('button', { name: 'Tęsti' })).toHaveCSS(
    'background-color',
    'rgb(68, 85, 102)',
  )
})

test('Dialog binds the same surface and border tokens', async ({ page }) => {
  await page.goto('/iframe.html?id=organisms-dialog--token-overrides&viewMode=story')
  const dialog = page.getByRole('dialog')
  await expect(dialog).toHaveCSS('background-color', 'rgb(255, 248, 237)')
  await expect(dialog).toHaveCSS('border-top-color', 'rgb(152, 107, 34)')
  await expect(dialog).toHaveCSS('border-radius', '24px')
  await expect(dialog).toHaveCSS('box-shadow', 'none')
})

test('Modal retains keyboard dismissal and returns focus to its trigger', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=organisms-modal--confirm&viewMode=story')
  const trigger = page.getByRole('button', { name: 'Open Modal' })
  await trigger.click()
  await expect(page.getByRole('dialog')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('dialog')).toHaveCount(0)
  await expect(trigger).toBeFocused()
})

test('mobile Modal uses responsive H2 tokens without horizontal overflow', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/iframe.html?id=organisms-modal--mobile-token-bindings&viewMode=story')
  const dialog = page.getByRole('dialog')
  await expect(dialog.locator('.MuiDialogTitle-root')).toHaveCSS('font-size', '20px')
  const bounds = await dialog.boundingBox()
  expect(bounds).not.toBeNull()
  expect(bounds!.x).toBeGreaterThanOrEqual(0)
  expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(390)
})
