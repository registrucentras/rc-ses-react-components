import { expect, test } from '@playwright/test'
import { checkA11y, injectAxe } from 'axe-playwright'

const widths = [375, 768, 1440]

test('Input v2 state accessibility includes error, loading and disabled', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-textfield--input-states&viewMode=story')
  await injectAxe(page)
  await checkA11y(page, '#storybook-root', { includedImpacts: ['critical', 'serious'] })
})

widths.forEach((width) => {
  test(`Input v2 presets and accessibility at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto('/iframe.html?id=atoms-textfield--presets&viewMode=story')
    const fields = page.locator('.RcSesTextField-root')
    await expect(fields).toHaveCount(5)
    await Promise.all(
      (await fields.all()).map(async (field) => {
        await expect(field.locator('.MuiOutlinedInput-root')).toHaveCSS('height', '44px')
        const bounds = await field.boundingBox()
        expect(bounds!.x).toBeGreaterThanOrEqual(0)
        expect(bounds!.x + bounds!.width).toBeLessThanOrEqual(width)
      }),
    )
    const search = page.getByRole('searchbox')
    await expect(page.getByRole('button', { name: /Išvalyti|Clear/ })).not.toBeVisible()
    await search.fill('Registrai')
    await page.getByRole('button', { name: /Išvalyti|Clear/ }).click()
    await expect(search).toHaveValue('')
    await expect(search).toBeFocused()
    await page.getByRole('button', { name: /slaptažodį|password/ }).click()
    await expect(page.getByLabel('Slaptažodis', { exact: true })).toHaveAttribute(
      'type',
      'text',
    )
    await injectAxe(page)
    await checkA11y(page, '#storybook-root', { includedImpacts: ['critical', 'serious'] })
    await expect(page.locator('#storybook-root')).toHaveScreenshot(
      `text-field-presets-${width}.png`,
    )
  })
})

test('Input v2 focus stays cyan in error, error replaces helper and explainer works by keyboard', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-textfield--error&viewMode=story')
  const input = page.getByRole('textbox')
  await expect(input).toHaveAttribute('aria-invalid', 'true')
  await expect(input).toHaveAccessibleDescription('Įveskite reikšmę')
  await expect(page.getByText('Pagalbinis tekstas', { exact: true })).not.toBeVisible()
  const outline = page.locator('.MuiOutlinedInput-notchedOutline')
  await input.hover()
  await expect(input.locator('..')).toHaveCSS('background-color', 'rgb(254, 222, 218)')
  await input.focus()
  await expect(outline).toHaveCSS('border-color', 'rgb(0, 121, 173)')
  await expect(outline).toHaveCSS('border-width', '2px')
  await page.keyboard.press('Tab')
  // The explainer precedes the input in the natural tab order.
  await page.getByRole('button', { name: /Paaiškinimas|Help/ }).focus()
  await expect(page.getByRole('tooltip')).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(page.getByRole('tooltip')).not.toBeVisible()
})

test('Input v2 long values scroll inside the field and readonly remains copyable', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 1000 })
  await page.goto('/iframe.html?id=atoms-textfield--preset-adornments&viewMode=story')
  const input = page.getByRole('textbox').last()
  await input.focus()
  await page.keyboard.press('End')
  expect(
    await input.evaluate((element) => element.scrollWidth > element.clientWidth),
  ).toBe(true)
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
  ).toBe(true)
  await page.goto('/iframe.html?id=atoms-textfield--read-only&viewMode=story')
  const readonly = page.getByRole('textbox')
  await expect(readonly).toHaveAttribute('readonly')
  await readonly.focus()
  await expect(readonly).toBeFocused()
  const value = await readonly.inputValue()
  await page.keyboard.type('Changed')
  await expect(readonly).toHaveValue(value)
})

test('Input v2 validates on submit through RHF and retains focus/error relationships', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-textfield--form&viewMode=story')
  const code = page.getByRole('textbox', { name: 'Įmonės kodas', exact: true })
  await code.focus()
  await page.keyboard.press('Tab')
  await expect(code).not.toHaveAttribute('aria-invalid', 'true')
  await page.getByRole('button', { name: 'Tęsti' }).click()
  await expect(code).toHaveAttribute('aria-invalid', 'true')
  await expect(code).toBeFocused()
  await expect(code).toHaveAccessibleDescription('Įveskite įmonės kodą')
  await code.fill('123456789')
  await page
    .getByRole('textbox', { name: 'Pavadinimas', exact: true })
    .fill('UAB Pavyzdys')
  await page.getByRole('button', { name: 'Tęsti' }).click()
  await expect(page.getByRole('status')).toHaveText('Duomenys pateikti')
})

test('Input v2 controlled Clear and native form reset preserve values', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-textfield--controlled&viewMode=story')
  await page.getByRole('button', { name: /Išvalyti|Clear/ }).click()
  await expect(page.getByLabel('Reikšmė')).toHaveText('Tuščia')
  await page.getByRole('button', { name: 'Atkurti' }).click()
  await expect(page.getByRole('searchbox')).toHaveValue('Atkurta')
  await page.goto('/iframe.html?id=atoms-textfield--native-reset&viewMode=story')
  await page.getByRole('searchbox').fill('Tekstas')
  await page.getByRole('button', { name: 'Išvalyti formą' }).click()
  await expect(page.getByRole('searchbox')).toHaveValue('')
  await expect(
    page.getByRole('button', { name: /Išvalyti reikšmę|Clear value/ }),
  ).not.toBeVisible()
})
