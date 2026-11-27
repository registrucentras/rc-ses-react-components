import { expect, test } from '@playwright/test'

import expectNoSeriousA11yIssues from './a11y'

test('default disclosure keyboard, regions, disabled and pinned semantics', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=organisms-accordion--default-v-2&viewMode=story')
  const header = page.getByRole('button', {
    name: 'Sekcijos pavadinimas Trumpas sekcijos paaiškinimas',
  })
  await expect(header).toBeVisible()
  await header.focus()
  await page.keyboard.press('Enter')
  await expect(header).toHaveAttribute('aria-expanded', 'true')
  await expect(header).toBeFocused()
  await expect(
    page.getByRole('region', {
      name: 'Sekcijos pavadinimas Trumpas sekcijos paaiškinimas',
    }),
  ).toBeVisible()
  await page.keyboard.press('Space')
  await expect(header).toHaveAttribute('aria-expanded', 'false')
  await expect(
    page.getByRole('button', { name: 'Neaktyvi sekcija Sekcija dar neprieinama' }),
  ).toBeDisabled()
  await expect(
    page.getByRole('heading', { name: 'Visada atidaryta sekcija' }),
  ).toBeVisible()
  await expect(
    page.getByRole('button', { name: 'Visada atidaryta sekcija' }),
  ).toHaveCount(0)
  await expect(
    page.getByRole('region', { name: 'Visada atidaryta sekcija' }),
  ).toBeVisible()
  await expectNoSeriousA11yIssues(page, '#storybook-root')
})

test('menu opens current page once, switches exclusively and can close all', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=organisms-accordion--menu-current-page&viewMode=story')
  const people = page.getByRole('button', { name: 'Gyventojai' })
  const services = page.getByRole('button', { name: 'Įmonės ir organizacijos' })
  await expect(people).toHaveAttribute('aria-expanded', 'true')
  await expect(page.getByRole('link', { name: 'Mano duomenys' })).toHaveAttribute(
    'aria-current',
    'page',
  )
  await expect(page.getByRole('heading')).toHaveCount(0)
  await expect(page.getByRole('region')).toHaveCount(0)
  await services.focus()
  await page.keyboard.press('Enter')
  await expect(services).toHaveAttribute('aria-expanded', 'true')
  await expect(people).toHaveAttribute('aria-expanded', 'false')
  await expect(services).toBeFocused()
  await page.keyboard.press('Space')
  await expect(services).toHaveAttribute('aria-expanded', 'false')
  await expect(people).toHaveAttribute('aria-expanded', 'false')
  await people.click()
  await page.keyboard.press('Tab')
  const current = page.getByRole('link', { name: 'Mano duomenys' })
  await expect(current).toBeFocused()
  await expect(current).toHaveCSS('outline-width', '2px')
  await expect(current).toHaveAttribute('aria-current', 'page')
  await expectNoSeriousA11yIssues(page, '#storybook-root')
})

;[320, 375, 768, 1440].forEach((width) => {
  test(`accordion v2 wraps and retains card geometry at ${width}`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=organisms-accordion--default-v-2&viewMode=story')
    const card = page.locator('[data-accordion-type="default"]').first()
    await expect(card).toBeVisible()
    await expect(card).toHaveCSS('border-top-width', '1px')
    await expect(card).toHaveCSS('border-top-left-radius', '16px')
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
    await expect(page).toHaveScreenshot(`accordion-default-${width}.png`, {
      fullPage: true,
    })
    await page.goto('/iframe.html?id=organisms-accordion--menu&viewMode=story')
    const header = page.getByRole('button', { name: 'Įmonės ir organizacijos' })
    await expect(header).toBeVisible()
    const groups = page.locator('[data-accordion-type="menu"]')
    const firstGroup = (await groups.nth(0).boundingBox())!
    const nextGroup = (await groups.nth(1).boundingBox())!
    expect(nextGroup.y).toBeCloseTo(firstGroup.y + firstGroup.height, 1)
    expect((await header.boundingBox())!.height).toBeGreaterThanOrEqual(64)
    const tile = page.locator('.IconWithSquareBackground-root').first()
    await expect(tile).toHaveCSS('width', '24px')
    await expect(tile.locator('svg')).toHaveCSS('width', '16px')
    await expect(header.locator('[aria-hidden="true"]').first()).toBeVisible()
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
    await expect(page).toHaveScreenshot(`accordion-menu-${width}.png`, { fullPage: true })
    await expectNoSeriousA11yIssues(page, '#storybook-root')
  })
})

test('focus boundaries differ and reduced motion disables both transitions', async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/iframe.html?id=organisms-accordion--default-v-2&viewMode=story')
  await expect(
    page.getByRole('button', {
      name: 'Sekcijos pavadinimas Trumpas sekcijos paaiškinimas',
    }),
  ).toBeVisible()
  await page.keyboard.press('Tab')
  const card = page.locator('[data-accordion-type="default"]').first()
  await expect(card).toHaveCSS('outline-width', '2px')
  await expect(card).toHaveCSS('outline-offset', '0px')
  await expect(page).toHaveScreenshot('accordion-default-focus.png', { fullPage: true })
  await page.keyboard.press('Enter')
  await expect(card.locator('.MuiCollapse-root')).toHaveCSS('transition-duration', '0s')
  await page.goto('/iframe.html?id=organisms-accordion--menu&viewMode=story')
  await expect(
    page.getByRole('button', { name: 'Įmonės ir organizacijos' }),
  ).toBeVisible()
  await page.keyboard.press('Tab')
  const header = page.getByRole('button', { name: 'Įmonės ir organizacijos' })
  await expect(header).toBeFocused()
  await expect(header).toHaveCSS('outline-offset', '-2px')
  await expect(header).toHaveCSS('outline-width', '2px')
  await expect(page).toHaveScreenshot('accordion-menu-focus.png', { fullPage: true })
  await page.keyboard.press('Space')
  await expect(page.locator('.MuiCollapse-root').first()).toHaveCSS(
    'transition-duration',
    '0s',
  )
})

test('hover states match Default muted and Menu sunken surfaces', async ({ page }) => {
  await page.goto('/iframe.html?id=organisms-accordion--default-v-2&viewMode=story')
  const header = page.getByRole('button', {
    name: 'Sekcijos pavadinimas Trumpas sekcijos paaiškinimas',
  })
  await header.hover()
  await expect(header).toHaveCSS('background-color', 'rgb(240, 242, 245)')
  await expect(page).toHaveScreenshot('accordion-default-hover.png', { fullPage: true })
  await page.goto('/iframe.html?id=organisms-accordion--menu&viewMode=story')
  const menuHeader = page.getByRole('button', { name: 'Įmonės ir organizacijos' })
  await menuHeader.hover()
  await expect(menuHeader).toHaveCSS('background-color', 'rgb(249, 250, 251)')
  await expect(page).toHaveScreenshot('accordion-menu-hover.png', { fullPage: true })
})

test('touch activation uses the Menu hover surface', async ({ browser }) => {
  const context = await browser.newContext({
    viewport: { width: 375, height: 812 },
    hasTouch: true,
    reducedMotion: 'reduce',
  })
  try {
    const page = await context.newPage()
    await page.goto(
      'http://127.0.0.1:6007/iframe.html?id=organisms-accordion--menu&viewMode=story',
    )
    const header = page.getByRole('button', { name: 'Gyventojai' })
    await expect(header).toBeVisible()
    const bounds = (await header.boundingBox())!
    const client = await context.newCDPSession(page)
    await client.send('Input.dispatchTouchEvent', {
      type: 'touchStart',
      touchPoints: [{ x: bounds.x + bounds.width / 2, y: bounds.y + bounds.height / 2 }],
    })
    await expect(header).toHaveCSS('background-color', 'rgb(249, 250, 251)')
    await client.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] })
    await expect(header).toHaveAttribute('aria-expanded', 'true')
  } finally {
    await context.close()
  }
})
