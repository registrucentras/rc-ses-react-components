import { expect, test } from '@playwright/test'

const storyUrl = '/iframe.html?id=foundations-theme-adapter--tokens&viewMode=story'

test('token typography responds at all four widths and palette/spacing/shape resolve', async ({
  page,
}) => {
  await page.goto(storyUrl)
  const heading = page.getByTestId('token-theme-heading')
  const probe = page.getByTestId('token-theme-probe')
  await expect(heading).toBeVisible()
  const viewports = [
    [1440, 36, 40],
    [1024, 36, 40],
    [768, 30, 36],
    [375, 28, 32],
  ]
  /* eslint-disable no-await-in-loop -- A shared page must resize and resolve CSS sequentially. */
  for (let index = 0; index < viewports.length; index += 1) {
    const [width, size, height] = viewports[index]
    await page.setViewportSize({ width, height: 900 })
    await expect(heading).toHaveCSS('font-size', `${size}px`)
    await expect(heading).toHaveCSS('line-height', `${height}px`)
  }
  /* eslint-enable no-await-in-loop */
  await expect(probe).toHaveCSS('background-color', 'rgb(6, 160, 212)')
  await expect(probe).toHaveCSS('padding-top', '16px')
  await expect(probe).toHaveCSS('border-radius', '8px')
  await page.evaluate(() => {
    const root = document.documentElement.style
    root.setProperty('--rc-color-tokens-control-selected', 'rgb(170, 30, 70)')
    root.setProperty('--rc-spacing-spacing-primitives-16', '20px')
    root.setProperty('--rc-borders-radius-primitives-4', '6px')
  })
  await expect(probe).toHaveCSS('background-color', 'rgb(170, 30, 70)')
  await expect(probe).toHaveCSS('padding-top', '20px')
  await expect(probe).toHaveCSS('border-radius', '12px')
})

test('missing DS variables fall back to legacy values', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(storyUrl)
  await expect(page.getByTestId('token-theme-heading')).toBeVisible()
  await page.evaluate(() => {
    const properties = getComputedStyle(document.documentElement)
    Array.from(properties)
      .filter((name) => name.startsWith('--rc-') && !name.startsWith('--rc-mui-'))
      .forEach((name) => {
        document.documentElement.style.setProperty(name, 'initial')
      })
  })
  await expect(page.getByTestId('token-theme-heading')).toHaveCSS('font-size', '36px')
  await expect(page.getByTestId('token-theme-heading')).toHaveCSS('line-height', '48px')
  await expect(page.getByTestId('token-theme-probe')).toHaveCSS(
    'background-color',
    'rgb(6, 160, 212)',
  )
  await expect(page.getByTestId('token-theme-probe')).toHaveCSS('padding-top', '16px')
  await expect(page.getByTestId('token-theme-probe')).toHaveCSS('border-radius', '8px')
})

const overridesUrl =
  '/iframe.html?id=foundations-theme-adapter--consumer-overrides&viewMode=story'

test('literal component overrides and individual typography properties win in the browser', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 900 })
  await page.goto(overridesUrl)
  await expect(page.getByTestId('custom-h2')).toHaveCSS('font-size', '48px')
  await expect(page.getByTestId('custom-h2')).toHaveCSS('line-height', '32px')
  await expect(page.getByTestId('custom-h1')).toHaveCSS('font-size', '40px')
  await expect(page.getByTestId('custom-h3')).toHaveCSS('font-weight', '700')
  await expect(page.getByTestId('custom-h3')).toHaveCSS('font-size', '18px')
  await page.evaluate(() =>
    document.documentElement.style.setProperty(
      '--rc-colors-neutrals-300',
      'rgb(170, 30, 70)',
    ),
  )
  await expect(page.getByTestId('literal-card')).toHaveCSS(
    'border-top-color',
    'rgb(197, 202, 209)',
  )
  await page.setViewportSize({ width: 375, height: 900 })
  await expect(page.getByTestId('custom-h1')).toHaveCSS('font-size', '40px')
  await expect(page.getByTestId('custom-h2')).toHaveCSS('font-size', '48px')
  await expect(page.getByTestId('custom-h3')).toHaveCSS('font-size', '16px')
  await expect(page.getByTestId('custom-h3')).toHaveCSS('font-weight', '700')
})

test('missing tokens preserve rem padding at a 20px root, including calculated lengths', async ({
  page,
}) => {
  await page.goto(overridesUrl)
  await expect(page.getByTestId('base-rem-padding')).toBeVisible()
  await page.evaluate(() => {
    const root = document.documentElement
    root.style.fontSize = '20px'
    Array.from(getComputedStyle(root))
      .filter((name) => name.startsWith('--rc-') && !name.startsWith('--rc-mui-'))
      .forEach((name) => root.style.setProperty(name, 'initial'))
  })
  await expect(page.getByTestId('base-rem-padding')).toHaveCSS('padding-top', '25px')
  await expect(page.getByTestId('base-rem-padding')).toHaveCSS('padding-right', '30px')
  await expect(page.getByTestId('base-rem-input').locator('input')).toHaveCSS(
    'padding-top',
    '16.25px',
  )
  await expect(page.getByTestId('base-rem-input').locator('input')).toHaveCSS(
    'padding-right',
    '15px',
  )
})
