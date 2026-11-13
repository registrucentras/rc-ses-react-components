import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`Phone-input tokens and existing masking at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=atoms-phoneinput--token-bindings&viewMode=story')
    const empty = page.locator('#phone-token-empty')
    await expect(empty).toBeVisible()
    if (width === 1440) {
      await page
        .locator('#storybook-root')
        .screenshot({ path: test.info().outputPath('phone-input-states.png') })
    }
    await empty.fill('61234567')
    await expect(empty).toHaveValue('612 34 567')
    await empty.focus()
    const outline = empty.locator('..').locator('fieldset')
    await expect(outline).toHaveCSS('border-color', 'rgb(0, 121, 173)')
    await expect(outline).toHaveCSS('border-top-width', '2px')
    await page.mouse.click(0, 0)
    const trigger = page.getByRole('button').first()
    await trigger.click()
    const search = page.getByRole('combobox')
    await search.fill('LATV')
    await page.getByRole('option', { name: /Latvia/ }).click()
    await expect(empty).toHaveValue('')
    await expect(empty.locator('..')).toContainText('+371')
  })
})

test('Phone-input live tokens style the country button, separator and focus', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-phoneinput--token-overrides&viewMode=story')
  const input = page.locator('#phone-token-empty')
  await input.focus()
  await expect(input.locator('..').locator('fieldset')).toHaveCSS(
    'border-color',
    'rgb(139, 69, 19)',
  )
  await expect(input.locator('..').locator('.MuiDivider-root')).toHaveCSS(
    'border-color',
    'rgb(165, 104, 53)',
  )
  await expect(input.locator('..').getByRole('button')).toHaveCSS(
    'background-color',
    'rgb(255, 250, 240)',
  )
})
