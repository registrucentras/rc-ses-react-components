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
  await expect(page.getByTestId('legacy-h6')).toHaveCSS('font-size', '18px')
  await expect(page.getByTestId('legacy-h6')).toHaveCSS('line-height', '24px')
  await expect(probe).toHaveCSS('padding-top', '16px')
  await expect(probe).toHaveCSS('border-radius', '8px')
  await page.evaluate(() => {
    const root = document.documentElement.style
    root.setProperty('--rc-color-control-selected', 'rgb(170, 30, 70)')
    root.setProperty('--rc-space-16', '20px')
    root.setProperty('--rc-radius-4', '6px')
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
  await expect(page.getByTestId('custom-h2')).toHaveCSS('font-weight', '400')
  await expect(page.getByTestId('custom-h2')).toHaveCSS('line-height', '64px')
  await expect(page.getByTestId('custom-h1')).toHaveCSS('font-size', '40px')
  await expect(page.getByTestId('custom-weight')).toHaveCSS('font-weight', '700')
  await expect(page.getByTestId('custom-weight')).toHaveCSS('font-size', '15px')
  await expect(page.getByTestId('custom-weight')).toHaveCSS('line-height', '22px')
  await expect(page.getByTestId('component-typography')).toHaveCSS('font-size', '56px')
  await expect(page.getByTestId('component-typography')).toHaveCSS('line-height', '72px')
  await page.evaluate(() =>
    document.documentElement.style.setProperty(
      '--rc-color-neutrals-300',
      'rgb(170, 30, 70)',
    ),
  )
  await expect(page.getByTestId('literal-card')).toHaveCSS(
    'border-top-color',
    'rgb(197, 202, 209)',
  )
  await page.evaluate(() =>
    document.documentElement.style.setProperty(
      '--rc-typography-font-size-body-regular',
      '19px',
    ),
  )
  await expect(page.getByTestId('custom-weight')).toHaveCSS('font-size', '19px')
  await page.evaluate(() =>
    document.documentElement.style.removeProperty(
      '--rc-typography-font-size-body-regular',
    ),
  )
  await page.setViewportSize({ width: 375, height: 900 })
  await expect(page.getByTestId('custom-h1')).toHaveCSS('font-size', '40px')
  await expect(page.getByTestId('custom-h2')).toHaveCSS('font-size', '48px')
  await expect(page.getByTestId('custom-h2')).toHaveCSS('font-weight', '400')
  await expect(page.getByTestId('custom-weight')).toHaveCSS('font-size', '15px')
  await expect(page.getByTestId('custom-weight')).toHaveCSS('font-weight', '700')
})

test('legacy component padding stays in rem at a 20px root without DS tokens', async ({
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

;[375, 1440].forEach((width) => {
  test(`H1 without DS tokens matches legacy at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=foundations-theme-adapter--h-1-fallback&viewMode=story',
    )
    await page.evaluate(() => {
      document.documentElement.style.fontSize = '16px'
    })
    const legacy = page.getByTestId('fallback-legacy-h1')
    const adapted = page.getByTestId('fallback-token-h1')
    await expect(legacy).toBeVisible()
    await expect(page.getByTestId('missing-token-example')).toHaveAttribute(
      'style',
      /--rc-.*initial/,
    )
    const expected = await legacy.evaluate((element) => {
      const style = getComputedStyle(element)
      return { size: style.fontSize, height: style.lineHeight }
    })
    await expect.soft(adapted).toHaveCSS('font-size', expected.size)
    await expect.soft(adapted).toHaveCSS('line-height', expected.height)
  })
  test(`H2 weight override retains live size tokens at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto(
      '/iframe.html?id=foundations-theme-adapter--heading-weight&viewMode=story',
    )
    const heading = page.getByTestId('weight-h2')
    await expect.soft(heading).toHaveCSS('font-weight', '700')
    await expect(heading).toHaveCSS('font-size', width === 375 ? '20px' : '24px')
    await expect(heading).toHaveCSS('line-height', width === 375 ? '26px' : '32px')
    await page.evaluate(() => {
      document.documentElement.style.setProperty(
        '--rc-typography-font-size-heading-h2',
        '35px',
      )
      document.documentElement.style.setProperty(
        '--rc-typography-line-height-heading-h2',
        '43px',
      )
    })
    await expect(heading).toHaveCSS('font-size', '35px')
    await expect(heading).toHaveCSS('line-height', '43px')
    await expect.soft(heading).toHaveCSS('font-weight', '700')
  })
})

;[
  ['default', 'rgb(255, 255, 255)', 'rgb(197, 202, 209)'],
  ['brand-theme', 'rgb(243, 251, 254)', 'rgb(185, 233, 250)'],
  ['sunken-theme', 'rgb(249, 250, 251)', 'rgb(220, 224, 229)'],
].forEach(([story, background, border]) => {
  test(`legacy CardShell ${story} loads semantic color variables with the legacy theme`, async ({
    page,
  }) => {
    await page.goto(`/iframe.html?id=molecules-cardshell--${story}&viewMode=story`)
    const card = page.locator('#storybook-root > .MuiBox-root').first()
    await expect(card).toBeVisible()
    await expect(card).toHaveCSS('--rc-color-surface-base', 'rgb(255 255 255 / 1)')
    await expect(card).toHaveCSS('background-color', background)
    await expect(card).toHaveCSS('border-top-color', border)
    await expect(card).toHaveCSS('border-top-width', '1px')
  })
})
