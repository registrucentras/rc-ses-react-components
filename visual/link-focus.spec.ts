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
  const ring = await button.evaluate((element) => {
    const style = getComputedStyle(element, '::before')
    return {
      content: style.content,
      width: style.borderTopWidth,
      style: style.borderTopStyle,
      color: style.borderTopColor,
    }
  })
  expect(ring).toEqual({
    content: '""',
    width: '2px',
    style: 'solid',
    color: 'rgb(16, 22, 31)',
  })

  // Start a fresh pointer interaction without retained keyboard modality.
  await page.reload()
  await expect(button).toBeVisible()
  await button.hover()
  await expect(button).toHaveCSS('color', 'rgb(14, 103, 144)')
  await page.mouse.down()
  await expect(button).toHaveCSS('color', 'rgb(22, 71, 99)')
  await page.mouse.up()
  await expect(button).toBeFocused()
  expect(await button.evaluate((element) => element.matches(':focus-visible'))).toBe(
    false,
  )
  await expect(button).toHaveCSS('color', 'rgb(14, 103, 144)')
  expect(['none', 'normal']).toContain(
    await button.evaluate((element) => getComputedStyle(element, '::before').content),
  )
  await page.mouse.move(0, 0)
  await expect(button).toBeFocused()
  await expect(button).toHaveCSS('color', 'rgb(0, 121, 173)')
})

test('disabled link retains its existing appearance and cannot receive focus', async ({
  page,
}) => {
  await page.goto(`${story};disabled:true`)
  const button = page.getByRole('button', { name: 'Button', exact: true })
  await expect(button).toBeDisabled()
  await expect(button).toHaveCSS('color', 'rgb(0, 121, 173)')
  await expect(button).toHaveCSS('opacity', '0.4')
  await page.keyboard.press('Tab')
  await expect(button).not.toBeFocused()
})
