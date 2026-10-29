import { expect, test } from '@playwright/test'

const fixed: Record<string, [number, number]> = {
  'heading-h4': [16, 22],
  'heading-h5': [14, 20],
  'body-large': [16, 24],
  'body-lead': [16, 24],
  'body-regular': [15, 22],
  'body-small': [14, 20],
  'body-caption': [13, 18],
  'body-micro': [12, 20],
  'button-regular': [15, 20],
  'button-compact': [14, 20],
}
const responsive = {
  'heading-h1': [
    [28, 32],
    [30, 36],
    [36, 40],
    [36, 40],
  ],
  'heading-h2': [
    [20, 26],
    [22, 28],
    [24, 32],
    [24, 32],
  ],
  'heading-h3': [
    [16, 22],
    [18, 24],
    [18, 24],
    [18, 24],
  ],
  'heading-card-title': [
    [18, 24],
    [18, 24],
    [20, 28],
    [20, 28],
  ],
} as const

test('all 14 role dimensions resolve at xs, sm, md and lg without reloading', async ({
  page,
}) => {
  await page.goto(
    '/iframe.html?id=fixtures-foundations-typography--dimensions&viewMode=story',
  )
  await expect(page.getByTestId('heading-h1')).toBeVisible()
  const widths = [375, 768, 1024, 1440]
  /* eslint-disable no-await-in-loop -- Resize one page sequentially; assertions within each mode are independent. */
  for (let index = 0; index < widths.length; index += 1) {
    await page.setViewportSize({ width: widths[index], height: 900 })
    const values = {
      ...fixed,
      ...Object.fromEntries(
        Object.entries(responsive).map(([role, modes]) => [role, modes[index]]),
      ),
    }
    await Promise.all(
      Object.entries(values).map(async ([role, [size, line]]) => {
        const specimen = page.getByTestId(role)
        await expect(specimen).toHaveCSS('font-size', `${size}px`)
        await expect(specimen).toHaveCSS('line-height', `${line}px`)
      }),
    )
  }
  /* eslint-enable no-await-in-loop */
})

test('named theme styles inherit font attributes without guessing Figma weights', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(
    '/iframe.html?id=fixtures-foundations-typography--inheritance&viewMode=story',
  )
  await Promise.all(
    ['headingCardTitle', 'bodyLarge', 'buttonCompact'].map(async (variant) => {
      const text = page.getByTestId(variant)
      await expect(text).toHaveCSS('font-family', 'monospace')
      await expect(text).toHaveCSS('font-weight', '700')
    }),
  )
})
