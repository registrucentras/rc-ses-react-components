import { expect, test } from '@playwright/test'

test('all icon dimensions resolve from Sizes tokens and react to primitive changes', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=foundations-sizes--icons&viewMode=story')
  const expected = {
    'icon-size-8': 8,
    'icon-size-12': 12,
    'icon-size-16': 16,
    'icon-size-20': 20,
    'icon-size-24': 24,
    'icon-size-32': 32,
    'icon-size-inline': 16,
    'icon-size-button': 20,
    'icon-size-control': 20,
    'icon-size-badge': 12,
    'icon-size-feature': 24,
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
    document.documentElement.style.setProperty('--rc-icon-size-20', '2rem')
  })
  await Promise.all(
    ['icon-size-20', 'icon-size-button', 'icon-size-control'].map(async (name) => {
      await expect(page.getByTestId(name)).toHaveCSS('width', '32px')
      await expect(page.getByTestId(name)).toHaveCSS('height', '32px')
    }),
  )
  await expect(page.getByTestId('icon-size-inline')).toHaveCSS('width', '16px')
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '20px'
  })
  await expect(page.getByTestId('icon-size-inline')).toHaveCSS('width', '20px')
  await expect(page.getByTestId('icon-size-button')).toHaveCSS('width', '40px')
})
