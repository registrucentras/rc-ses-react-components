import { expect, test } from '@playwright/test'

const viewports = [375, 768, 1024, 1440]

viewports.forEach((width) => {
  test(`Meta-info keeps existing layout and live token bindings at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=molecules-listwithicons--horizontal&viewMode=story')
    const list = page.getByRole('list')
    await expect(list).toHaveCSS('flex-direction', width < 900 ? 'column' : 'row')
    await expect(list).toHaveCSS('row-gap', '4px')
    await expect(list).toHaveCSS('column-gap', width < 900 ? '4px' : '16px')
    const text = page.getByText('Application received', { exact: true })
    await expect(text).toHaveCSS('font-weight', '300')
    await expect(text).toHaveCSS('font-size', '14px')
    await expect(text).toHaveCSS('line-height', '20px')
    const icon = page.getByRole('listitem').first().locator('svg')
    await expect(icon).toHaveCSS('width', '16px')
    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        '--rc-color-text-secondary',
        'rgb(10, 20, 30)',
      )
      document.documentElement.style.setProperty('--rc-icon-size-inline', '18px')
    })
    await expect(text).toHaveCSS('color', 'rgb(10, 20, 30)')
    await expect(icon).toHaveCSS('fill', 'rgb(10, 20, 30)')
    await expect(icon).toHaveCSS('width', '18px')
    await expect(
      page.getByText('Unavailable item', { exact: true }).locator('xpath=ancestor::li'),
    ).toHaveCSS('opacity', '0.5')
    await text.hover()
    await expect(page.getByRole('tooltip')).toHaveText(
      'The submission was successfully received.',
    )
  })
})

test('Meta-info preserves consumer colors and loading count', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-listwithicons--custom-color&viewMode=story')
  await expect(page.getByText('Custom palette color')).toHaveCSS(
    'color',
    'rgb(0, 133, 97)',
  )
  await page.goto('/iframe.html?id=molecules-listwithicons--loading&viewMode=story')
  await expect(page.locator('.MuiSkeleton-root')).toHaveCount(3)
})
