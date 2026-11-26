import { expect, test } from '@playwright/test'

import expectNoSeriousA11yIssues from './a11y'

test('empty state announcements follow user actions', async ({ page }) => {
  await page.goto(
    '/iframe.html?id=molecules-emptystate--after-user-action&viewMode=story',
  )
  await expect(page.getByRole('heading', { name: 'Kol kas nieko nėra' })).toBeVisible()
  await expect(page.getByRole('status')).toBeEmpty()
  await page.getByRole('button', { name: 'Įkelti sąrašą' }).click()
  await expect(page.getByRole('status')).toHaveText(
    'Nepavyko įkelti sąrašo. Bandykite dar kartą.',
  )
  await expect(page.getByRole('status')).toHaveAttribute('aria-live', 'polite')
  await expectNoSeriousA11yIssues(page, '#storybook-root')
})

;[320, 375, 768, 1440].forEach((width) => {
  test(`empty state tones and wrapping at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=molecules-emptystate--all-tones&viewMode=story')
    await expect(page.getByRole('heading')).toHaveCount(8)
    await expectNoSeriousA11yIssues(page, '#storybook-root')
    await expect(page.locator('section svg').first()).toHaveAttribute(
      'aria-hidden',
      'true',
    )
    await expect(page.getByRole('alert')).toHaveCount(0)
    const iconContrasts = await page.locator('section').evaluateAll((regions) => {
      const luminance = (color: string) => {
        const channels = color
          .match(/[\d.]+/g)!
          .slice(0, 3)
          .map(Number)
          .map((value) => {
            const channel = value / 255
            return channel <= 0.04045
              ? channel / 12.92
              : ((channel + 0.055) / 1.055) ** 2.4
          })
        return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722
      }
      return regions.map((region) => {
        const foreground = luminance(getComputedStyle(region.querySelector('svg')!).color)
        const background = luminance(getComputedStyle(region).backgroundColor)
        return (
          (Math.max(foreground, background) + 0.05) /
          (Math.min(foreground, background) + 0.05)
        )
      })
    })
    iconContrasts.forEach((contrast) => expect(contrast).toBeGreaterThanOrEqual(3))
    await expect(page).toHaveScreenshot(`empty-state-tones-${width}.png`, {
      fullPage: true,
    })
    await page.goto('/iframe.html?id=molecules-emptystate--long-content&viewMode=story')
    await expect(page.getByRole('heading')).toBeVisible()
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
    const button = await page.getByRole('button').boundingBox()
    const region = await page.locator('section').boundingBox()
    expect(button).not.toBeNull()
    if (width < 600) {
      const inset = await page
        .locator('section')
        .evaluate((el) => parseFloat(getComputedStyle(el).paddingInlineStart))
      expect(button!.width).toBeCloseTo(region!.width - inset * 2, 0)
    }
  })
})

test('compact omits hint and hidden action; validation preserves padding', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=molecules-emptystate--compact&viewMode=story')
  await expect(page.getByText('Patarimas:', { exact: false })).toHaveCount(0)
  await page.goto('/iframe.html?id=molecules-emptystate--without-action&viewMode=story')
  await expect(page.getByRole('button')).toHaveCount(0)
  const padding = await page
    .locator('section')
    .evaluate((el) => getComputedStyle(el).padding)
  await page.goto('/iframe.html?id=molecules-emptystate--validation&viewMode=story')
  await expect(page.getByRole('heading')).toBeVisible()
  expect(
    await page.locator('section').evaluate((el) => getComputedStyle(el).padding),
  ).toBe(padding)
  expect(
    await page.locator('section').evaluate((el) => getComputedStyle(el).boxShadow),
  ).not.toBe('none')
  await expectNoSeriousA11yIssues(page, '#storybook-root')
})

test('action is keyboard accessible and keeps a visible focus ring', async ({ page }) => {
  await page.goto('/iframe.html?id=molecules-emptystate--regular&viewMode=story')
  const button = page.getByRole('button', { name: 'Kaip ieškoti?' })
  await expect(button).toBeVisible()
  await page.keyboard.press('Tab')
  await expect(button).toBeFocused()
  await expect(button).not.toHaveCSS('box-shadow', 'none')
})
