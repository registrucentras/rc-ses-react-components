import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`Header keeps its existing responsive dimensions at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=organisms-serviceheader--token-bindings&viewMode=story',
    )
    const header = page.locator('.MuiContainer-root')
    await expect(header).toHaveCSS('padding-top', width < 900 ? '6px' : '24px')
    await expect(header).toHaveCSS('padding-bottom', width < 900 ? '32px' : '36px')
    // Container already supplies a 24px gutter from sm; preserve that cascade.
    await expect(header).toHaveCSS('padding-left', width < 600 ? '16px' : '24px')
    await expect(page.getByRole('heading', { name: 'Service Title' })).toHaveCSS(
      'line-height',
      width < 900 ? '32px' : '40px',
    )
    const description = page.getByText('This is a description of the service.', {
      exact: true,
    })
    await expect(description).toHaveCSS('font-size', width < 900 ? '13px' : '16px')
    await expect(description).toHaveCSS('line-height', width < 900 ? '18px' : '24px')
    await expect(page.locator('.MuiBreadcrumbs-root')).toHaveCSS('font-size', '12px')
    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        '--rc-color-surface-base',
        'rgb(11, 22, 33)',
      )
      document.documentElement.style.setProperty('--rc-space-10', '14px')
    })
    await expect(header.locator('..')).toHaveCSS('background-color', 'rgb(11, 22, 33)')
    await expect(description.locator('..')).toHaveCSS('row-gap', '14px')
  })

  test(`Footer preserves text, spacing and live tokens at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=organisms-footer--token-bindings&viewMode=story')
    const text = page.locator('.MuiTypography-caption')
    const footer = text.locator('../..')
    await expect(text).toHaveCSS('font-size', '13px')
    await expect(text).toHaveCSS('line-height', '20px')
    await expect(text).toHaveCSS('white-space', 'pre-line')
    await expect(footer).toHaveCSS('padding-left', width < 900 ? '16px' : '32px')
    await expect(footer).toHaveCSS('padding-top', '24px')
    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        '--rc-color-surface-inverse',
        'rgb(11, 22, 33)',
      )
      document.documentElement.style.setProperty(
        '--rc-color-neutrals-200',
        'rgb(210, 220, 230)',
      )
    })
    await expect(footer).toHaveCSS('background-color', 'rgb(11, 22, 33)')
    await expect(text).toHaveCSS('color', 'rgb(210, 220, 230)')
  })
})

test('Header consumer backgroundColor takes priority over the default token', async ({
  page,
}) => {
  await page.goto(
    '/iframe.html?id=organisms-serviceheader--custom-background&viewMode=story',
  )
  await page.evaluate(() =>
    document.documentElement.style.setProperty(
      '--rc-color-surface-base',
      'rgb(11, 22, 33)',
    ),
  )
  await expect(page.locator('.MuiContainer-root').locator('..')).toHaveCSS(
    'background-color',
    'rgb(240, 242, 245)',
  )
})
