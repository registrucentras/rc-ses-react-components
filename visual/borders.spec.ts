import { expect, test } from '@playwright/test'

test('theme radius multiplication, component aliases, live tokens and legacy fallbacks', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=foundations-borders--radius&viewMode=story')
  const shape = page.getByTestId('theme-radius')
  const card = page.getByTestId('theme-card')
  const button = page.getByTestId('theme-button')
  await expect(shape).toHaveCSS('border-top-left-radius', '8px')
  await expect(card).toHaveCSS('border-top-left-radius', '16px')
  await expect(button).toHaveCSS('border-top-left-radius', '8px')
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-borders-radius-primitives-4',
      '0.375rem',
    )
    document.documentElement.style.setProperty(
      '--rc-borders-radius-primitives-16',
      '1.5rem',
    )
    document.documentElement.style.setProperty(
      '--rc-borders-radius-aliases-button',
      '0.75rem',
    )
  })
  await expect(shape).toHaveCSS('border-top-left-radius', '12px')
  await expect(card).toHaveCSS('border-top-left-radius', '24px')
  await expect(page.getByTestId('radius-aliases-card')).toHaveCSS(
    'border-top-left-radius',
    '24px',
  )
  await expect(button).toHaveCSS('border-top-left-radius', '12px')
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-borders-radius-primitives-4',
      'initial',
    )
    document.documentElement.style.setProperty(
      '--rc-borders-radius-primitives-16',
      'initial',
    )
    document.documentElement.style.setProperty(
      '--rc-borders-radius-aliases-button',
      'initial',
    )
    document.documentElement.style.fontSize = '20px'
  })
  await expect(shape).toHaveCSS('border-top-left-radius', '8px')
  await expect(card).toHaveCSS('border-top-left-radius', '20px')
  await expect(button).toHaveCSS('border-top-left-radius', '10px')
})
