import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

const lockedStories = ['selected-disabled', 'selected-disabled-small']

lockedStories.forEach((story) => {
  test(`${story} keeps the selected tint and disabled selected border`, async ({
    page,
  }) => {
    await page.goto(`/iframe.html?id=molecules-segmentedcontrol--${story}&viewMode=story`)
    const selected = page.getByRole('radio', { name: 'Locked selection' })
    await expect(selected).toBeDisabled()
    await expect(selected).toHaveAttribute('aria-checked', 'true')
    await page.evaluate(() => {
      const css = document.documentElement.style
      css.setProperty('--rc-color-control-disabled-selected', '#0b1621')
      css.setProperty('--rc-color-surface-brand-subtle', '#d2dce6')
      css.setProperty('--rc-color-text-secondary', '#2c3742')
    })
    await expect(selected).toHaveCSS('border-top-color', 'rgb(11, 22, 33)')
    await expect(selected).toHaveCSS('background-color', 'rgb(210, 220, 230)')
    await expect(selected).toHaveCSS('color', 'rgb(44, 55, 66)')
    await expect(selected).toHaveCSS('height', story.endsWith('small') ? '36px' : '44px')
  })
})

test('Wrapped long segments fill the background without horizontal overflow', async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 900 })
  await page.goto(
    '/iframe.html?id=molecules-segmentedcontrol--long-labels-narrow&viewMode=story',
  )
  const group = page.getByRole('radiogroup')
  await expect(group).toBeVisible()
  const bounds = await group.boundingBox()
  expect(bounds).not.toBeNull()
  expect(bounds!.width).toBeLessThanOrEqual(295)
  await Promise.all(
    (await group.getByRole('radio').all()).map(async (button) => {
      const box = await button.boundingBox()
      expect(box!.width).toBeCloseTo(bounds!.width - 8, 0)
    }),
  )
})

widths.forEach((width) => {
  test(`Segmented control follows Figma sizing and token states at ${width}px`, async ({
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
    await expect(group).toHaveCSS('gap', '8px 4px')
    await expect(group).toHaveCSS('border-radius', '12px')
    await expect(selected).toHaveCSS('padding', '10px 18px')
    await expect(selected).toHaveCSS('font-size', '15px')
    await expect(selected).toHaveCSS('font-weight', '500')
    await expect(selected).toHaveCSS('line-height', '20px')
    await page.evaluate(() => {
      document.documentElement.style.setProperty('--rc-color-text-link', '#0a141e')
      document.documentElement.style.setProperty(
        '--rc-color-surface-brand-subtle',
        '#d2dce6',
      )
      document.documentElement.style.setProperty('--rc-color-border-focus', '#28323c')
    })
    await expect(available).toHaveCSS('color', 'rgb(10, 20, 30)')
    await available.hover()
    await expect(available).toHaveCSS('background-color', 'rgb(255, 255, 255)')
    await expect(selected).toHaveCSS('background-color', 'rgb(210, 220, 230)')
    await expect(selected).toHaveCSS('border-top-color', 'rgb(40, 50, 60)')
    await available.focus()
    await expect(selected).toHaveAttribute('aria-checked', 'true')
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

test('Small segments follow Figma sizing and disableBg drops the track', async ({
  page,
}) => {
  await page.goto(
    '/iframe.html?id=molecules-segmentedcontrol--small-two-options&viewMode=story',
  )
  await expect(page.getByRole('radio').first()).toHaveCSS('padding', '6px 14px')
  await expect(page.getByRole('radio').first()).toHaveCSS('height', '36px')
  await expect(page.getByRole('radio').first()).toHaveCSS('font-size', '14px')
  await page.goto(
    '/iframe.html?id=molecules-segmentedcontrol--regular-no-background&viewMode=story',
  )
  await expect(page.getByRole('radiogroup')).toHaveCSS(
    'background-color',
    'rgba(0, 0, 0, 0)',
  )
})
