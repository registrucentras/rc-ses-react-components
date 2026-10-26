import { expect, test } from '@playwright/test'

/* eslint-disable no-restricted-syntax, no-await-in-loop -- viewport changes and pointer interactions share one page and must run sequentially. */

const story = '/iframe.html?id=atoms-button--design-combinations&viewMode=story'

test('token theme keeps legacy Button dimensions when DS variables are unavailable', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-button--fallbacks&viewMode=story')
  await expect(page.getByTestId('fallback-medium-normal')).toHaveCSS('height', '44px')
  await page.evaluate(() => {
    Array.from(getComputedStyle(document.documentElement))
      .filter((name) => name.startsWith('--rc-') && !name.startsWith('--rc-mui-'))
      .forEach((name) => document.documentElement.style.setProperty(name, 'initial'))
  })
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const size of ['small', 'medium', 'large'] as const) {
      const normal = page.getByTestId(`fallback-${size}-normal`)
      await expect(normal).toHaveCSS('height', size === 'small' ? '36px' : '44px')
      await expect(normal).toHaveCSS('font-size', '15px')
      await expect(normal).toHaveCSS('line-height', '18px')
      const padding = { small: '8px 12px', medium: '13px 20px', large: '15px 36px' }
      await expect(normal).toHaveCSS('padding', padding[size])
      const icon = page.getByTestId(`fallback-${size}-icon`)
      const lengths = { small: '36px', medium: '44px', large: '48px' }
      await expect(icon).toHaveCSS('height', lengths[size])
      await expect(icon).toHaveCSS('width', lengths[size])
      await expect(icon).toHaveCSS('padding', '0px')
      await expect(page.getByTestId(`fallback-${size}-link`)).toHaveCSS(
        'height',
        size === 'small' ? '36px' : '38px',
      )
    }
  }
})

test('DS roles, responsive spacing and fixed heights resolve without reloading', async ({
  page,
}) => {
  await page.goto(story)
  const keyboardButton = page.getByTestId('ds-Primary-medium-rest-none')
  await expect(keyboardButton).toBeVisible()
  await page.keyboard.press('Tab')
  await expect(keyboardButton).toBeFocused()
  await expect(keyboardButton).toHaveCSS('box-shadow', 'rgb(0, 121, 173) 0px 0px 0px 2px')
  for (const width of [375, 768, 1024, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    for (const size of ['medium', 'small']) {
      const regular = size === 'medium'
      const padding =
        width < 600
          ? { medium: '16px', small: '12px' }
          : { medium: '20px', small: '16px' }
      const button = page.getByTestId(`ds-Primary-${size}-rest-left`)
      await expect(button).toHaveCSS('height', regular ? '44px' : '36px')
      await expect(button).toHaveCSS('padding-top', regular ? '12px' : '8px')
      await expect(button).toHaveCSS(
        'padding-left',
        padding[size as keyof typeof padding],
      )
      await expect(button).toHaveCSS('border-radius', '8px')
      await expect(button.locator('.MuiButton-startIcon')).toHaveCSS(
        'margin-right',
        regular ? '8px' : '6px',
      )
      await expect(button.locator('svg')).toHaveCSS('width', '20px')
    }
  }
  const primary = page.getByTestId('ds-Primary-medium-rest-none')
  await expect(primary).toHaveCSS('background-color', 'rgb(185, 233, 250)')
  await primary.hover()
  await expect(primary).toHaveCSS('background-color', 'rgb(80, 201, 243)')
  await page.mouse.down()
  await expect(primary).toHaveCSS('background-color', 'rgb(6, 160, 212)')
  await page.mouse.up()
  const error = page.getByTestId('ds-Error-medium-rest-none')
  await expect(error).toHaveCSS('background-color', 'rgb(200, 72, 56)')
  await expect(error).toHaveCSS('color', 'rgb(255, 255, 255)')
  const secondary = page.getByTestId('ds-Secondary-medium-rest-none')
  await expect(secondary).toHaveCSS('background-color', 'rgb(255, 255, 255)')
  for (const role of ['Primary', 'Secondary', 'Error', 'Link']) {
    const disabled = page.getByTestId(`ds-${role}-medium-disabled-none`)
    await expect(disabled).toBeDisabled()
    await expect(disabled).toHaveCSS('color', 'rgb(142, 149, 158)')
    const loading = page.getByTestId(`ds-${role}-medium-loading-left`)
    await expect(loading).toBeDisabled()
    await expect(loading).toHaveAttribute('aria-busy', 'true')
    await expect(loading.getByRole('progressbar')).toBeVisible()
    await expect(loading).toHaveCSS('color', 'rgb(142, 149, 158)')
    const separation = await loading.evaluate((element) => {
      const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT)
      let node = walker.nextNode()
      while (node && node.textContent?.trim() !== 'Button') node = walker.nextNode()
      if (!node) throw new Error('Loading label is missing')
      const range = document.createRange()
      range.selectNodeContents(node)
      const spinner = element.querySelector('[role="progressbar"]')!
      return range.getBoundingClientRect().left - spinner.getBoundingClientRect().right
    })
    expect(separation).toBeGreaterThanOrEqual(4)
    const before = await page.getByTestId(`ds-${role}-medium-rest-none`).boundingBox()
    const after = await page.getByTestId(`ds-${role}-medium-loading-none`).boundingBox()
    expect(after!.width).toBeCloseTo(before!.width, 1)
  }
})

test('live tokens preserve the existing icon-only sizing priority', async ({ page }) => {
  await page.goto(story)
  await page.evaluate(() => {
    const css = document.documentElement.style
    css.setProperty('--rc-color-action-primary-bg', 'rgb(10, 20, 30)')
    css.setProperty('--rc-radius-button', '12px')
    css.setProperty('--rc-icon-size-button', '24px')
    css.setProperty('--rc-typography-font-size-button-regular', '18px')
  })
  const button = page.getByTestId('ds-Primary-medium-rest-left')
  await expect(button).toHaveCSS('background-color', 'rgb(10, 20, 30)')
  await expect(button).toHaveCSS('border-radius', '12px')
  await expect(button).toHaveCSS('font-size', '18px')
  await expect(button.locator('svg')).toHaveCSS('width', '24px')
  await page.goto('/iframe.html?id=atoms-button--token-overrides&viewMode=story')
  const custom = page.getByRole('button', { name: 'Custom button' })
  await expect(custom).toHaveCSS('width', '44px')
  await expect(custom).toHaveCSS('height', '44px')
  await expect(custom).toHaveCSS('border-radius', '3px')
  const paddingOverride = page.getByRole('button', { name: 'Custom padding' })
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 })
    await expect(paddingOverride).toHaveCSS('padding-left', '0px')
    await expect(paddingOverride).toHaveCSS('padding-right', '0px')
  }
})
