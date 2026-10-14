import { expect, test } from '@playwright/test'

test('all icon dimensions resolve from Sizes tokens and react to primitive changes', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=foundations-sizes--icons&viewMode=story')
  const expected = {
    'icon-primitives-8': 8,
    'icon-primitives-12': 12,
    'icon-primitives-16': 16,
    'icon-primitives-20': 20,
    'icon-primitives-24': 24,
    'icon-primitives-32': 32,
    'icon-aliases-inline': 16,
    'icon-aliases-button': 20,
    'icon-aliases-control': 20,
    'icon-aliases-badge': 12,
    'icon-aliases-feature': 24,
  }
  await Promise.all(
    Object.entries(expected).map(async ([name, size]) => {
      const icon = page.getByTestId(name)
      await expect(icon).toHaveCSS('width', `${size}px`)
      await expect(icon).toHaveCSS('height', `${size}px`)
      const bounds = await icon.boundingBox()
      expect(bounds?.width).toBeCloseTo(size, 1)
      expect(bounds?.height).toBeCloseTo(size, 1)
    }),
  )
  await page.evaluate(() => {
    document.documentElement.style.setProperty('--rc-sizes-icon-primitives-20', '2rem')
  })
  await Promise.all(
    ['icon-primitives-20', 'icon-aliases-button', 'icon-aliases-control'].map(
      async (name) => {
        await expect(page.getByTestId(name)).toHaveCSS('width', '32px')
        await expect(page.getByTestId(name)).toHaveCSS('height', '32px')
      },
    ),
  )
  await expect(page.getByTestId('icon-aliases-inline')).toHaveCSS('width', '16px')
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '20px'
  })
  await expect(page.getByTestId('icon-aliases-inline')).toHaveCSS('width', '20px')
  await expect(page.getByTestId('icon-aliases-button')).toHaveCSS('width', '40px')
})
