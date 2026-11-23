import { expect, test } from '@playwright/test'

import expectNoSeriousA11yIssues from './a11y'

const navigationName = /Puslapiavimas|Pagination/
const pageName = (number: number) =>
  new RegExp(`^(Eiti į ${number} puslapį|Go to page ${number})$`)
const nextName = /Kitas puslapis|Next page|^Kitas$/
const previousName = /Ankstesnis puslapis|Previous page/

;[320, 375, 768, 1440].forEach((width) => {
  test(`Pagination fits one row, preserves numeric navigation and accessibility at ${width}px`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto(
      '/iframe.html?id=organisms-datapagination--responsive-records&viewMode=story',
    )
    const nav = page.getByRole('navigation', { name: navigationName })
    const rows = page.getByRole('list', { name: 'Įrašai' }).getByRole('listitem')
    const size = width < 900 ? 5 : 10
    const last = Math.ceil(123 / size)
    await expect(rows).toHaveCount(size)
    await expect(nav.locator('[aria-current="page"]')).toHaveCount(1)
    await expect(nav.getByRole('button', { name: previousName })).toBeDisabled()
    await expect(nav.getByRole('button', { name: previousName })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
    await expect(nav.getByRole('button', { name: pageName(last) })).toBeVisible()
    const buttons = await nav.getByRole('button').all()
    await Promise.all(
      (await nav.locator('button > svg').all()).map(async (icon) => {
        await expect(icon).toHaveCSS('width', '16px')
        await expect(icon).toHaveCSS('height', '16px')
      }),
    )
    const bounds = await Promise.all(buttons.map((button) => button.boundingBox()))
    bounds.forEach((box) => {
      expect(box!.x).toBeGreaterThanOrEqual(0)
      expect(box!.x + box!.width).toBeLessThanOrEqual(width)
      expect(box!.y).toBe(bounds[0]!.y)
      expect(box!.width).toBeGreaterThanOrEqual(40)
    })
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
    await expectNoSeriousA11yIssues(page, '#storybook-root')
    await expect(nav).toHaveScreenshot(`pagination-${width}.png`)

    await nav.getByRole('button', { name: pageName(3) }).click()
    await nav.getByRole('button', { name: nextName }).click()
    await expect(nav.getByRole('button', { name: pageName(4) })).toHaveAttribute(
      'aria-current',
      'page',
    )
    await expect(rows.first()).toHaveText(`Įrašas ${3 * size + 1}`)
    await nav.getByRole('button', { name: pageName(last) }).click()
    await expect(nav.getByRole('button', { name: nextName })).toBeDisabled()
    await expect(nav.getByRole('button', { name: nextName })).toHaveAttribute(
      'aria-disabled',
      'true',
    )
  })
})

test('Five numeric pages and both arrows fit a padded 320px screen', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 })
  await page.goto(
    '/iframe.html?id=organisms-datapagination--uncontrolled&args=count:5&viewMode=story',
  )
  const nav = page.getByRole('navigation', { name: navigationName })
  await expect(nav.getByRole('button')).toHaveCount(7)
  const last = await nav.getByRole('button', { name: nextName }).boundingBox()
  expect(last!.x + last!.width).toBeLessThanOrEqual(320)
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth),
  ).toBe(true)
})

test('Responsive record pagination keeps the same record across breakpoints', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto(
    '/iframe.html?id=organisms-datapagination--responsive-records&viewMode=story',
  )
  const nav = page.getByRole('navigation', { name: navigationName })
  const rows = page.getByRole('list', { name: 'Įrašai' }).getByRole('listitem')
  await nav.getByRole('button', { name: pageName(4) }).click()
  await expect(rows.first()).toHaveText('Įrašas 31')
  await page.setViewportSize({ width: 375, height: 1000 })
  await expect(rows).toHaveCount(5)
  await expect(rows.first()).toHaveText('Įrašas 31')
  await expect(nav.getByRole('button', { name: pageName(7) })).toHaveAttribute(
    'aria-current',
    'page',
  )
  await page.setViewportSize({ width: 1440, height: 1000 })
  await expect(rows).toHaveCount(10)
  await expect(rows.first()).toHaveText('Įrašas 31')
  await expect(nav.getByRole('button', { name: pageName(4) })).toHaveAttribute(
    'aria-current',
    'page',
  )
})

test('Service overrides size the records independently on desktop and mobile', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 })
  await page.goto(
    '/iframe.html?id=organisms-datapagination--custom-page-sizes&viewMode=story',
  )
  const rows = page.getByRole('list', { name: 'Įrašai' }).getByRole('listitem')
  await expect(rows).toHaveCount(4)
  await page.getByRole('button', { name: pageName(3) }).click()
  await expect(rows.first()).toHaveText('Įrašas 9')
  await page.setViewportSize({ width: 375, height: 1000 })
  await expect(rows).toHaveCount(2)
  await expect(rows.first()).toHaveText('Įrašas 9')
  await expect(page.getByRole('button', { name: pageName(5) })).toHaveAttribute(
    'aria-current',
    'page',
  )
})

test('Page navigation supports Tab and Enter with visible focus', async ({ page }) => {
  await page.goto('/iframe.html?id=organisms-datapagination--uncontrolled&viewMode=story')
  const first = page.getByRole('button', { name: pageName(1) })
  await expect(first).toBeVisible()
  await page.keyboard.press('Tab')
  await expect(first).toBeFocused()
  await page.keyboard.press('Tab')
  const second = page.getByRole('button', { name: pageName(2) })
  await expect(second).toBeFocused()
  await expect(second).toHaveClass(/Mui-focusVisible/)
  await page.keyboard.press('Enter')
  await expect(second).toHaveAttribute('aria-current', 'page')
  await expect(second).toBeFocused()
})

test('Loading only lasts for the request and restores the requested active page', async ({
  page,
}) => {
  await page.goto(
    '/iframe.html?id=organisms-datapagination--network-loading&viewMode=story',
  )
  const nav = page.getByRole('navigation', { name: navigationName })
  await nav.getByRole('button', { name: nextName }).click()
  await expect(nav).toHaveAttribute('aria-busy', 'true')
  await expect(nav.getByRole('status')).toBeVisible()
  await expect(nav.getByRole('button')).toHaveCount(0)
  await page.getByRole('button', { name: 'Baigti užklausą' }).click()
  await expect(nav).not.toHaveAttribute('aria-busy')
  await expect(nav.getByRole('button', { name: pageName(2) })).toHaveAttribute(
    'aria-current',
    'page',
  )
})

test('ExpandButton replaces pagination and toggles show more/less on mobile', async ({
  page,
}) => {
  await page.setViewportSize({ width: 320, height: 1000 })
  await page.goto(
    '/iframe.html?id=organisms-datapagination--expand-alternative&viewMode=story',
  )
  const rows = page.getByRole('listitem')
  await expect(rows).toHaveCount(3)
  await expect(page.getByRole('navigation')).toHaveCount(0)
  await page.getByRole('button', { name: /Rodyti daugiau|Show more/ }).click()
  await expect(rows).toHaveCount(12)
  const less = page.getByRole('button', { name: /Rodyti mažiau|Show less/ })
  await expect(less).toHaveAttribute('aria-expanded', 'true')
  await expectNoSeriousA11yIssues(page, '#storybook-root')
  await less.click()
  await expect(rows).toHaveCount(3)
})
