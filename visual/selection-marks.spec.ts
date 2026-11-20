import { expect, test } from '@playwright/test'

test('Checkbox-mark covers six visual states without adding input semantics', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-checkboxmark--all-states&viewMode=story')
  const marks = page.locator('[data-rc-checkbox-mark]')
  await expect(marks).toHaveCount(6)
  await expect(page.getByRole('checkbox')).toHaveCount(0)
  await expect(marks.first()).toHaveAttribute('aria-hidden', 'true')
  await expect(marks.first()).toHaveCSS('width', '24px')
  await expect(marks.first().locator('[data-rc-mark-shape]')).toHaveCSS('width', '20px')
  const unchecked = page.locator(
    '[data-rc-checkbox-mark="unchecked"] [data-rc-mark-shape]',
  )
  await expect(unchecked.first()).toHaveCSS('border-top-color', 'rgb(107, 116, 127)')
  await expect(unchecked.last()).toHaveCSS('background-color', 'rgb(220, 224, 229)')
  await expect(unchecked.last()).toHaveCSS('border-top-color', 'rgb(136, 218, 247)')
  await expect(
    page.locator('[data-rc-checkbox-mark="checked"]').first().locator('svg'),
  ).toHaveCSS('width', '16px')
  await expect(
    page.locator('[data-rc-checkbox-mark="indeterminate"]').first().locator('svg'),
  ).toHaveCount(1)
})

test('Radio-mark covers four distinct states with a 10px selected dot', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-radiomark--all-states&viewMode=story')
  await expect(page.locator('[data-rc-radio-mark]')).toHaveCount(4)
  await expect(page.getByRole('radio')).toHaveCount(0)
  await expect(page.locator('[data-rc-checkbox-mark]')).toHaveCount(0)
  await expect(page.locator('[data-rc-radio-dot]')).toHaveCount(2)
  await expect(page.locator('[data-rc-radio-dot]').first()).toHaveCSS('width', '10px')
  const unchecked = page.locator('[data-rc-radio-mark="unselected"] [data-rc-mark-shape]')
  await expect(unchecked.last()).toHaveCSS('border-top-color', 'rgb(107, 116, 127)')
  await expect(unchecked.last()).toHaveCSS('background-color', 'rgb(220, 224, 229)')
  const checked = page.locator('[data-rc-radio-mark="selected"] [data-rc-mark-shape]')
  await expect(checked.first()).toHaveCSS('background-color', 'rgb(0, 121, 173)')
  await expect(checked.last()).toHaveCSS('background-color', 'rgb(136, 218, 247)')
})

const kinds = ['checkbox', 'radio']

kinds.forEach((kind) => {
  test(`${kind} mark responds to scoped color and size tokens`, async ({ page }) => {
    await page.goto(`/iframe.html?id=atoms-${kind}mark--token-overrides&viewMode=story`)
    const shape = page.locator(`[data-rc-${kind}-mark] [data-rc-mark-shape]`).first()
    await expect(shape).toHaveCSS('border-top-color', 'rgb(101, 67, 33)')
    await expect(shape).toHaveCSS('width', '22px')
  })

  test(`${kind} mark enabled outline and selected glyph meet 3:1 contrast`, async ({
    page,
  }) => {
    await page.goto(`/iframe.html?id=atoms-${kind}mark--all-states&viewMode=story`)
    const contrast = await page
      .locator(`[data-rc-${kind}-mark]`)
      .first()
      .evaluate((mark) => {
        const luminance = (color: string) => {
          const rgb = color
            .match(/[\d.]+/g)!
            .slice(0, 3)
            .map(Number)
            .map((value) => {
              const channel = value / 255
              return channel <= 0.04045
                ? channel / 12.92
                : ((channel + 0.055) / 1.055) ** 2.4
            })
          return rgb[0] * 0.2126 + rgb[1] * 0.7152 + rgb[2] * 0.0722
        }
        const ratio = (a: string, b: string) => {
          const first = luminance(a)
          const second = luminance(b)
          return (Math.max(first, second) + 0.05) / (Math.min(first, second) + 0.05)
        }
        const shape = getComputedStyle(mark.querySelector('[data-rc-mark-shape]')!)
        const selected = mark.parentElement!.parentElement!.querySelector(
          '[data-rc-radio-mark="selected"], [data-rc-checkbox-mark="checked"]',
        )!
        const selectedShape = getComputedStyle(
          selected.querySelector('[data-rc-mark-shape]')!,
        )
        const glyph = selected.querySelector('svg, [data-rc-radio-dot]')!
        const glyphStyle = getComputedStyle(glyph)
        return {
          outline: ratio(shape.borderTopColor, shape.backgroundColor),
          glyph: ratio(
            glyph.tagName.toLowerCase() === 'svg'
              ? glyphStyle.fill
              : glyphStyle.backgroundColor,
            selectedShape.backgroundColor,
          ),
        }
      })
    expect(contrast.outline).toBeGreaterThanOrEqual(3)
    expect(contrast.glyph).toBeGreaterThanOrEqual(3)
  })
})

test('native controls use the marks while retaining disabled state and keyboard navigation', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-checkboxmark--native-controls&viewMode=story')
  const disabled = page.getByRole('checkbox', {
    name: 'Inherited disabled checked checkbox',
    exact: true,
  })
  await expect(disabled).toBeDisabled()
  await expect(disabled.locator('..').locator('[data-rc-mark-shape]')).toHaveCSS(
    'background-color',
    'rgb(136, 218, 247)',
  )
  await page.goto('/iframe.html?id=atoms-radiomark--native-controls&viewMode=story')
  const first = page.getByRole('radio', { name: 'First radio' })
  await first.focus()
  await page.keyboard.press('ArrowDown')
  const second = page.getByRole('radio', { name: 'Second radio' })
  await expect(second).toBeChecked()
  await expect(
    second.locator('..').locator('[data-rc-radio-mark="selected"]'),
  ).toHaveCount(1)
  await expect(page.getByRole('radio', { name: 'Disabled radio' })).toBeDisabled()
})

const consumers = [
  { story: 'organisms-advancedlistitem--checkbox-expand', mark: 'checkbox' },
  { story: 'organisms-advancedlistitem--radio-expand', mark: 'radio' },
  { story: 'organisms-selectablecardlist--main', mark: 'radio' },
  { story: 'molecules-radiobuttongroup--keyboard-selection', mark: 'radio' },
]

consumers.forEach(({ story, mark }) => {
  test(`${story} renders the shared ${mark} mark`, async ({ page }) => {
    await page.goto(`/iframe.html?id=${story}&viewMode=story`)
    await expect(page.locator(`[data-rc-${mark}-mark]`).first()).toBeVisible()
  })
})

test('bare MUI Checkbox uses the same clear focus gap as SimpleCheckbox', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=atoms-checkboxmark--native-controls&viewMode=story')
  const checkbox = page.getByRole('checkbox', { name: 'Checked checkbox', exact: true })
  await page.keyboard.press('Tab')
  await checkbox.focus()
  await checkbox.hover()
  await expect(checkbox.locator('..')).toHaveCSS('background-color', 'rgba(0, 0, 0, 0)')
  const shape = checkbox.locator('..').locator('[data-rc-mark-shape]')
  await expect(shape).toHaveCSS('outline-style', 'solid')
  await expect(shape).toHaveCSS('outline-offset', '2px')
  await expect(shape).toHaveCSS('box-shadow', 'none')
})
