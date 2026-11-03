import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`Breadcrumbs preserve dimensions and bind token states at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=molecules-breadcrumbs--token-bindings&viewMode=story',
    )
    const breadcrumbs = page.locator('.MuiBreadcrumbs-root')
    const first = page.getByRole('link', { name: 'Home', exact: true })
    const current = page.getByRole('link', { name: 'Current page', exact: true })
    await expect(breadcrumbs).toHaveCSS('font-size', '11px')
    await expect(first.locator('..')).toHaveCSS('line-height', '14px')
    await expect(first.locator('..')).toHaveCSS('padding-top', '6px')
    await expect(first).toHaveAttribute('href', '#home')
    await expect(current).toHaveAttribute('href', '#current')
    await page.evaluate(() => {
      Object.entries({
        'text-secondary': 'rgb(11, 22, 33)',
        'text-default': 'rgb(44, 55, 66)',
        'text-link': 'rgb(77, 88, 99)',
        'text-link-hover': 'rgb(100, 110, 120)',
      }).forEach(([name, value]) =>
        document.documentElement.style.setProperty(`--rc-color-${name}`, value),
      )
    })
    await expect(first).toHaveCSS('color', 'rgb(11, 22, 33)')
    await expect(current).toHaveCSS('color', 'rgb(44, 55, 66)')
    await first.hover()
    await expect(first).toHaveCSS('color', 'rgb(77, 88, 99)')
    await page.mouse.down()
    await expect(first).toHaveCSS('color', 'rgb(100, 110, 120)')
    await page.mouse.up()
    await page.mouse.move(0, 0)
    await expect(first).toHaveCSS('color', 'rgb(11, 22, 33)')
  })
})

test('Breadcrumbs consumer sx overrides theme styles', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=molecules-breadcrumbs--consumer-overrides&viewMode=story',
  )
  await expect(page.locator('.MuiBreadcrumbs-root')).toHaveCSS('font-size', '18px')
  const link = page.getByRole('link', { name: 'Home', exact: true })
  await expect(link).toHaveCSS('color', 'rgb(0, 133, 97)')
  await expect(link.locator('..')).toHaveCSS('padding-top', '3px')
})
