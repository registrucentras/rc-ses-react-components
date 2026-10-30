import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`Segmented control retains sizing and token states at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=molecules-segmentedcontrol--token-bindings&viewMode=story',
    )
    const group = page.getByRole('radiogroup')
    const selected = page.getByRole('radio', { name: 'Selected', exact: true })
    const available = page.getByRole('radio', { name: 'Available', exact: true })
    await expect(group).toHaveCSS('padding', '4px')
    await expect(group).toHaveCSS('gap', '2px 8px')
    await expect(selected).toHaveCSS('padding', '10px 16px')
    await expect(selected).toHaveCSS('font-size', '15px')
    await expect(selected).toHaveCSS('font-weight', '500')
    await expect(selected).toHaveCSS('line-height', '20px')
    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        '--rc-color-text-link',
        'rgb(10, 20, 30)',
      )
      document.documentElement.style.setProperty(
        '--rc-color-surface-brand-subtle',
        'rgb(210, 220, 230)',
      )
      document.documentElement.style.setProperty(
        '--rc-color-border-focus',
        'rgb(40, 50, 60)',
      )
    })
    await expect(available).toHaveCSS('color', 'rgb(10, 20, 30)')
    await available.hover()
    await expect(available).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    await expect(selected).toHaveCSS('background-color', 'rgb(210, 220, 230)')
    await expect(selected).toHaveCSS('border-top-color', 'rgb(40, 50, 60)')
    await selected.focus()
    await page.keyboard.press('ArrowRight')
    await expect(available).toHaveAttribute('aria-checked', 'true')
    await page.keyboard.press('ArrowRight')
    await expect(selected).toHaveAttribute('aria-checked', 'true')
    await expect(
      page.getByRole('radio', { name: 'Disabled', exact: true }),
    ).toBeDisabled()
  })
})

test('Small segments and disableBg retain existing styling', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=molecules-segmentedcontrol--small-two-options&viewMode=story',
  )
  await expect(page.getByRole('radio').first()).toHaveCSS('padding', '8px 12px')
  await expect(page.getByRole('radio').first()).toHaveCSS('font-size', '14px')
  await page.goto(
    '/iframe.html?id=molecules-segmentedcontrol--regular-no-background&viewMode=story',
  )
  await expect(page.getByRole('radiogroup')).toHaveCSS(
    'background-color',
    'rgba(0, 0, 0, 0)',
  )
})
