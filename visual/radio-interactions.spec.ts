import { expect, test } from '@playwright/test'

const names = [
  'Selected radio',
  'Unselected radio',
  'Selected error radio',
  'Unselected error radio',
]

names.forEach((name) => {
  test(`${name} preserves the clear 2px focus gap while hovered`, async ({ page }) => {
    await page.goto(
      '/iframe.html?id=atoms-radiomark--keyboard-and-pointer&viewMode=story',
    )
    const radio = page.getByRole('radio', { name, exact: true })
    await page.keyboard.press('Tab')
    await radio.focus()
    await radio.hover()
    const shape = radio.locator('..').locator('[data-rc-mark-shape]')
    await expect(shape).toHaveCSS('outline-style', 'solid')
    await expect(shape).toHaveCSS('outline-width', '2px')
    await expect(shape).toHaveCSS('outline-offset', '2px')
    await expect(shape).toHaveCSS('outline-color', 'rgb(0, 121, 173)')
    await expect(shape).toHaveCSS('box-shadow', 'none')
    await expect(shape).toHaveCSS('width', '20px')
    await expect(radio.locator('..')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
    if (name === 'Unselected radio') {
      await expect(shape).toHaveCSS('border-top-color', 'rgb(107, 116, 127)')
    }
    if (name === 'Selected radio') {
      await expect(shape).toHaveCSS('background-color', 'rgb(0, 121, 173)')
      const path = test.info().outputPath('radio-selected-focus-hover.png')
      await radio.locator('..').locator('..').screenshot({ path })
      await test
        .info()
        .attach('radio-selected-focus-hover', { path, contentType: 'image/png' })
    }
    if (name === 'Selected error radio') {
      await expect(shape).toHaveCSS('background-color', 'rgb(250, 90, 70)')
    }
  })
})

test('normal and error Radio hover use Figma halos with semantic colors', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-radiomark--keyboard-and-pointer&viewMode=story')
  const unchecked = page.getByRole('radio', { name: 'Unselected radio', exact: true })
  await unchecked.locator('..').locator('..').hover()
  const shape = unchecked.locator('..').locator('[data-rc-mark-shape]')
  await expect(shape).toHaveCSS('border-top-color', 'rgb(0, 121, 173)')
  await expect(shape).toHaveCSS(
    'box-shadow',
    /^color\(srgb .+ \/ 0\.2\) 0px 0px 0px 4px$/,
  )
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-color-status-error-border',
      '#123456',
    )
    document.documentElement.style.setProperty('--rc-color-red-600', '#234567')
  })
  const error = page.getByRole('radio', { name: 'Selected error radio', exact: true })
  await error.hover()
  const errorShape = error.locator('..').locator('[data-rc-mark-shape]')
  await expect(errorShape).toHaveCSS('background-color', 'rgb(18, 52, 86)')
  await expect(errorShape).toHaveCSS(
    'box-shadow',
    /^color\(srgb 0\.137\d* 0\.270\d* 0\.403\d* \/ 0\.2\) 0px 0px 0px 4px$/,
  )
})

const disabled = ['Selected disabled radio', 'Unselected disabled radio']
disabled.forEach((name) => {
  test(`${name} retains its disabled paint without a hover halo`, async ({ page }) => {
    await page.goto(
      '/iframe.html?id=atoms-radiomark--keyboard-and-pointer&viewMode=story',
    )
    const radio = page.getByRole('radio', { name, exact: true })
    await expect(radio).toBeDisabled()
    await radio.locator('..').locator('..').hover()
    const shape = radio.locator('..').locator('[data-rc-mark-shape]')
    await expect(shape).toHaveCSS('box-shadow', 'none')
    await expect(shape).toHaveCSS('outline-style', 'none')
    await expect(shape).toHaveCSS(
      'background-color',
      name.startsWith('Selected') ? 'rgb(136, 218, 247)' : 'rgb(220, 224, 229)',
    )
  })
})
