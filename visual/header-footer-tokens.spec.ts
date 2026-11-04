import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  const mode = width >= 900 ? 2 : Number(width >= 600)
  test(`Header follows DS responsive dimensions at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=organisms-serviceheader--token-bindings&viewMode=story',
    )
    const header = page.locator('.MuiContainer-root')
    await expect(header).toHaveCSS('padding-top', ['16px', '24px', '32px'][mode])
    await expect(header).toHaveCSS('padding-bottom', ['24px', '32px', '48px'][mode])
    await expect(header).toHaveCSS('padding-left', ['16px', '24px', '32px'][mode])
    const title = page.getByRole('heading', { name: 'Service Title' })
    await expect(title).toHaveCSS('font-size', ['28px', '30px', '36px'][mode])
    await expect(page.getByRole('heading', { name: 'Service Title' })).toHaveCSS(
      'line-height',
      ['32px', '36px', '40px'][mode],
    )
    const description = page.getByText('This is a description of the service.', {
      exact: true,
    })
    await expect(description).toHaveCSS('font-size', '16px')
    await expect(description).toHaveCSS('line-height', '24px')
    await expect(page.locator('.MuiBreadcrumbs-root')).toHaveCSS('font-size', '12px')
    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        '--rc-color-surface-base',
        'rgb(11, 22, 33)',
      )
      document.documentElement.style.setProperty('--rc-space-10', '14px')
      document.documentElement.style.setProperty(
        '--rc-typography-font-size-heading-h1',
        '41px',
      )
      document.documentElement.style.setProperty(
        '--rc-typography-line-height-heading-h1',
        '50px',
      )
    })
    await expect(header.locator('..')).toHaveCSS('background-color', 'rgb(11, 22, 33)')
    await expect(description.locator('..')).toHaveCSS('row-gap', '14px')
    await expect(title).toHaveCSS('font-size', '41px')
    await expect(title).toHaveCSS('line-height', '50px')
  })

  test(`Footer preserves text, spacing and live tokens at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=organisms-footer--token-bindings&viewMode=story')
    const text = page.locator('.MuiTypography-body2')
    const footer = text.locator('../..')
    await expect(text).toHaveCSS('font-size', '14px')
    await expect(footer).toHaveCSS('background-color', 'rgb(16, 22, 31)')
    await expect(text).toHaveCSS('line-height', '20px')
    await expect(text).toHaveCSS('white-space', 'pre-line')
    await expect(footer).toHaveCSS('padding-left', width < 900 ? '16px' : '32px')
    await expect(footer).toHaveCSS('padding-top', '24px')
    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        '--rc-color-neutrals-950',
        'rgb(11, 22, 33)',
      )
      document.documentElement.style.setProperty(
        '--rc-color-neutrals-200',
        'rgb(210, 220, 230)',
      )
      document.documentElement.style.setProperty(
        '--rc-typography-font-size-body-small',
        '17px',
      )
    })
    await expect(footer).toHaveCSS('background-color', 'rgb(11, 22, 33)')
    await expect(text).toHaveCSS('color', 'rgb(210, 220, 230)')
    await expect(text).toHaveCSS('font-size', '17px')
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
