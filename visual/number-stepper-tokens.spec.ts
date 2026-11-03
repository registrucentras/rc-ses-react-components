import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`Quantity-input keeps stepper behavior and token styles at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=atoms-numberstepper--token-bindings&viewMode=story')
    const input = page.getByRole('spinbutton').first()
    const root = input.locator('..')
    const minus = root.getByRole('button').first()
    const plus = root.getByRole('button').last()
    await expect(input).toHaveValue('0')
    await expect(minus).toBeDisabled()
    await expect(plus).toBeEnabled()
    await expect(root).toHaveCSS('padding-right', '0px')
    await expect(plus).toHaveCSS('padding', '13px')
    await expect(plus.locator('svg')).toHaveCSS('width', '16px')
    await plus.click()
    await expect(input).toHaveValue('1')
    await expect(minus).toBeEnabled()
    await minus.click()
    await expect(input).toHaveValue('0')
    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        '--rc-color-surface-muted',
        'rgb(11, 22, 33)',
      )
      document.documentElement.style.setProperty(
        '--rc-color-text-disabled',
        'rgb(44, 55, 66)',
      )
      document.documentElement.style.setProperty(
        '--rc-color-border-strong',
        'rgb(77, 88, 99)',
      )
      document.documentElement.style.setProperty(
        '--rc-color-neutrals-200',
        'rgb(100, 110, 120)',
      )
    })
    await expect(minus).toHaveCSS('background-color', 'rgb(11, 22, 33)')
    await expect(minus.locator('svg path')).toHaveCSS('fill', 'rgb(44, 55, 66)')
    await expect(minus).toHaveCSS('border-left-color', 'rgb(77, 88, 99)')
    await plus.hover()
    await expect(plus).toHaveCSS('background-color', 'rgb(100, 110, 120)')
    const disabledInput = page.getByRole('spinbutton').nth(1)
    await expect(disabledInput).toBeDisabled()
    await expect(disabledInput.locator('..').getByRole('button').first()).toBeDisabled()
  })
})

test('Quantity-input respects consumer input sx overrides', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=atoms-numberstepper--consumer-overrides&viewMode=story',
  )
  await expect(page.getByRole('spinbutton').first()).toHaveCSS('font-size', '21px')
})
