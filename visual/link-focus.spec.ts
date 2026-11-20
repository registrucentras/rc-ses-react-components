import { expect, test } from '@playwright/test'

const story =
  '/iframe.html?id=atoms-button--primary-contained&viewMode=story&args=variant:link'

test('link shows a keyboard focus indicator and mouse release restores hover/base colors', async ({
  page,
}) => {
  await page.goto(story)
  const button = page.getByRole('button', { name: 'Button', exact: true })
  await expect(button).toBeVisible()
  await page.keyboard.press('Tab')
  await expect(button).toBeFocused()
  expect(await button.evaluate((element) => element.matches(':focus-visible'))).toBe(true)
  await expect(button).toHaveCSS('box-shadow', 'rgb(0, 121, 173) 0px 0px 0px 2px')

  // Start a fresh pointer interaction without retained keyboard modality.
  await page.reload()
  await expect(button).toBeVisible()
  await button.hover()
  await expect(button).toHaveCSS('color', 'rgb(21, 85, 117)')
  await page.mouse.down()
  await expect(button).toHaveCSS('color', 'rgb(21, 85, 117)')
  await page.mouse.up()
  await expect(button).toBeFocused()
  expect(await button.evaluate((element) => element.matches(':focus-visible'))).toBe(
    false,
  )
  await expect(button).toHaveCSS('color', 'rgb(21, 85, 117)')
  await expect(button).toHaveCSS('box-shadow', 'none')
  await page.mouse.move(0, 0)
  await expect(button).toBeFocused()
  await expect(button).toHaveCSS('color', 'rgb(14, 103, 144)')
})

test('disabled link uses DS disabled text and cannot receive focus', async ({ page }) => {
  await page.goto(`${story};disabled:true`)
  const button = page.getByRole('button', { name: 'Button', exact: true })
  await expect(button).toBeDisabled()
  await expect(button).toHaveCSS('color', 'rgb(142, 149, 158)')
  await expect(button).toHaveCSS('opacity', '1')
  await page.keyboard.press('Tab')
  await expect(button).not.toBeFocused()
})
