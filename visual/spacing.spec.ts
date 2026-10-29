import { expect, test } from '@playwright/test'

const storyUrl = '/iframe.html?id=fixtures-foundations-spacing--tokens&viewMode=story'
const fixed = {
  'padding-xs': 8,
  'padding-sm': 12,
  'padding-md': 16,
  'gap-xs': 4,
  'gap-sm': 8,
  'gap-md': 12,
  'gap-lg': 16,
}
const exceptions = {
  'button-padding-y-regular': 12,
  'button-padding-y-small': 8,
  'button-padding-icon-only-regular': 10,
  'button-padding-icon-only-small': 8,
  'input-padding-y': 13,
}

test('12 spacing roles respond in four modes while primitives and exceptions stay stable', async ({
  page,
}) => {
  await page.goto(storyUrl)
  await expect(page.getByTestId('theme-spacing')).toBeVisible()
  const widths = [375, 768, 1024, 1440]
  /* eslint-disable no-await-in-loop -- A single specimen page changes modes sequentially. */
  for (let index = 0; index < widths.length; index += 1) {
    const width = widths[index]
    await page.setViewportSize({ width, height: 900 })
    const desktop = width >= 900
    const values = {
      ...fixed,
      'padding-lg': desktop ? 24 : 20,
      'padding-xl': desktop ? 32 : 24,
      'gap-xl': desktop ? 24 : 16,
      'gap-2xl': desktop ? 32 : 24,
      'gap-3xl': desktop ? 48 : 32,
    }
    await Promise.all(
      Object.entries(values).map(([name, amount]) =>
        expect(page.getByTestId(name)).toHaveCSS(
          name.startsWith('padding-') ? 'padding-top' : 'gap',
          `${amount}px`,
        ),
      ),
    )
    await Promise.all(
      Object.entries(exceptions).map(([name, amount]) =>
        expect(page.getByTestId(name)).toHaveCSS('padding-top', `${amount}px`),
      ),
    )
    await expect(page.getByTestId('theme-spacing')).toHaveCSS('padding-top', '24px')
    await expect(page.getByTestId('fraction-spacing')).toHaveCSS('padding-top', '14px')
  }
  /* eslint-enable no-await-in-loop */
})

test('semantic aliases and theme.spacing share live primitive references', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(storyUrl)
  await expect(page.getByTestId('padding-lg')).toHaveCSS('padding-top', '24px')
  await page.evaluate(() =>
    document.documentElement.style.setProperty('--rc-space-24', '30px'),
  )
  await expect(page.getByTestId('padding-lg')).toHaveCSS('padding-top', '30px')
  await expect(page.getByTestId('gap-xl')).toHaveCSS('gap', '30px')
  await expect(page.getByTestId('theme-spacing')).toHaveCSS('padding-top', '30px')
  await page.evaluate(() => {
    document.documentElement.style.setProperty('--rc-space-24', '28px')
    document.documentElement.style.setProperty('--rc-space-8', '10px')
  })
  await expect(page.getByTestId('theme-spacing')).toHaveCSS('padding-top', '28px')
  await expect(page.getByTestId('fraction-spacing')).toHaveCSS('padding-top', '17.5px')
  await expect(page.getByTestId('gap-xl')).toHaveCSS('gap', '28px')
  await expect(page.getByTestId('padding-lg')).toHaveCSS('padding-top', '28px')
})

test('rem tokens scale with the root font while missing primitive tokens keep MUI px fallbacks', async ({
  page,
}) => {
  await page.goto(storyUrl)
  await expect(page.getByTestId('theme-spacing')).toHaveCSS('padding-top', '24px')
  await page.evaluate(() => {
    document.documentElement.style.fontSize = '20px'
  })
  await expect(page.getByTestId('theme-spacing')).toHaveCSS('padding-top', '30px')
  await expect(page.getByTestId('input-padding-y')).toHaveCSS('padding-top', '16.25px')
  await page.evaluate(() => {
    Array.from(getComputedStyle(document.documentElement))
      .filter((name) => name.startsWith('--rc-space-'))
      .forEach((name) => document.documentElement.style.setProperty(name, 'initial'))
  })
  await expect(page.getByTestId('theme-spacing')).toHaveCSS('padding-top', '24px')
  await expect(page.getByTestId('fraction-spacing')).toHaveCSS('padding-top', '14px')
})
