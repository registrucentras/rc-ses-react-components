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
    await expect(root).toHaveCSS('gap', '0px')
    await expect(minus).toHaveCSS('border-width', '0px 0px 0px 1px')
    await expect(plus).toHaveCSS('border-width', '0px 0px 0px 1px')
    const inputBounds = await input.boundingBox()
    const minusBounds = await minus.boundingBox()
    const plusBounds = await plus.boundingBox()
    expect(inputBounds).not.toBeNull()
    expect(minusBounds).not.toBeNull()
    expect(plusBounds).not.toBeNull()
    expect(minusBounds!.x).toBeCloseTo(inputBounds!.x + inputBounds!.width, 0)
    expect(plusBounds!.x).toBeCloseTo(minusBounds!.x + minusBounds!.width, 0)
    expect(plusBounds!.height).toBeCloseTo((await root.boundingBox())!.height, 0)
    await expect(plus).toHaveCSS('padding', '13px')
    await expect(plus.locator('svg')).toHaveCSS('width', '16px')
    await plus.click()
    await expect(input).toHaveValue('1')
    await expect(minus).toBeEnabled()
    await minus.click()
    await expect(input).toHaveValue('0')
    await page.evaluate(() => {
      document.documentElement.style.setProperty('--rc-color-surface-sunken', '#0b1621')
      document.documentElement.style.setProperty('--rc-color-text-muted', '#2c3742')
      document.documentElement.style.setProperty('--rc-color-border-strong', '#4d5863')
      document.documentElement.style.setProperty('--rc-color-neutrals-200', '#646e78')
      document.documentElement.style.setProperty('--rc-color-border-subtle', '#828c96')
      document.documentElement.style.setProperty('--rc-color-border-default', '#a0aab4')
    })
    await expect(minus).toHaveCSS('background-color', 'rgb(11, 22, 33)')
    await expect(minus.locator('svg path')).toHaveCSS('fill', 'rgb(44, 55, 66)')
    await expect(minus).toHaveCSS('border-left-color', 'rgb(130, 140, 150)')
    await expect(plus).toHaveCSS('border-left-color', 'rgb(130, 140, 150)')
    await plus.click()
    await expect(minus).toBeEnabled()
    await input.fill('100')
    await expect(plus).toBeDisabled()
    await expect(plus.locator('svg path')).toHaveCSS('fill', 'rgb(44, 55, 66)')
    await expect(plus).toHaveCSS('background-color', 'rgb(11, 22, 33)')
    await input.fill('1')
    await expect(minus).toHaveCSS('border-left-color', 'rgb(130, 140, 150)')
    await minus.click()
    await expect(minus).toBeDisabled()
    await expect(minus).toHaveCSS('border-left-color', 'rgb(130, 140, 150)')
    await plus.hover()
    await expect(plus).toHaveCSS('background-color', 'rgb(100, 110, 120)')
    const disabledInput = page.getByRole('spinbutton').nth(1)
    await expect(disabledInput).toBeDisabled()
    await expect(disabledInput.locator('..').getByRole('button').first()).toBeDisabled()
    const disabledRoot = disabledInput.locator('..')
    await expect(disabledRoot.getByRole('button').first()).toHaveCSS(
      'background-color',
      'rgb(11, 22, 33)',
    )
    await expect(disabledRoot.getByRole('button').first()).toHaveCSS(
      'border-left-color',
      'rgb(130, 140, 150)',
    )
    await expect(disabledRoot.getByRole('button').last()).toHaveCSS(
      'border-left-color',
      'rgb(130, 140, 150)',
    )
    await expect(disabledRoot.locator('.MuiOutlinedInput-notchedOutline')).toHaveCSS(
      'border-color',
      'rgb(130, 140, 150)',
    )
  })
})

test('Quantity-input respects consumer input sx overrides', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=atoms-numberstepper--consumer-overrides&viewMode=story',
  )
  await expect(page.getByRole('spinbutton').first()).toHaveCSS('font-size', '21px')
})
