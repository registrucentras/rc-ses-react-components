import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`Switch preserves geometry and token states at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/iframe.html?id=atoms-switch--token-bindings&viewMode=story')
    await page.evaluate(() => {
      Object.entries({
        'control-unselected': '#0a141e',
        'control-unselected-hover': '#141e28',
        'control-selected': '#1e2832',
        'control-selected-hover': '#28323c',
        'control-disabled': '#323c46',
        'control-disabled-selected': '#3c4650',
        'text-disabled': '#46505a',
        'text-default': '#505a64',
      }).forEach(([name, value]) =>
        document.documentElement.style.setProperty(`--rc-color-${name}`, value),
      )
    })
    const off = page.getByRole('switch', { name: 'Unchecked switch', exact: true })
    const on = page.getByRole('switch', { name: 'Checked switch', exact: true })
    const root = off.locator('../..')
    const track = root.locator('.MuiSwitch-track')
    await expect(root).toHaveCSS('width', '36px')
    await expect(root).toHaveCSS('height', '20px')
    await expect(root.locator('.MuiSwitch-thumb')).toHaveCSS('width', '16px')
    await expect(root.locator('.MuiSwitch-thumb')).toHaveCSS(
      'box-shadow',
      'rgba(0, 0, 0, 0.18) 0px 1px 2px 0px',
    )
    const label = page.getByText('Unchecked switch', { exact: true })
    await expect(label).toHaveCSS('color', 'rgb(80, 90, 100)')
    await expect(label).toHaveCSS('font-size', '15px')
    await expect(label).toHaveCSS('line-height', '22px')
    await expect(track).toHaveCSS('background-color', 'rgb(10, 20, 30)')
    await off.hover()
    await expect(track).toHaveCSS('background-color', 'rgb(20, 30, 40)')
    await expect(on.locator('../..').locator('.MuiSwitch-track')).toHaveCSS(
      'background-color',
      'rgb(30, 40, 50)',
    )
    await on.hover()
    await expect(on.locator('../..').locator('.MuiSwitch-track')).toHaveCSS(
      'background-color',
      'rgb(40, 50, 60)',
    )
    const disabledOff = page.getByRole('switch', {
      name: 'Disabled unchecked switch',
      exact: true,
    })
    const disabledOn = page.getByRole('switch', {
      name: 'Disabled checked switch',
      exact: true,
    })
    await expect(disabledOff).toBeDisabled()
    await expect(disabledOn).toBeDisabled()
    await expect(disabledOff.locator('../..').locator('.MuiSwitch-track')).toHaveCSS(
      'background-color',
      'rgb(50, 60, 70)',
    )
    await expect(disabledOn.locator('../..').locator('.MuiSwitch-track')).toHaveCSS(
      'background-color',
      'rgb(60, 70, 80)',
    )
    await expect(page.getByText('Disabled unchecked switch', { exact: true })).toHaveCSS(
      'color',
      'rgb(70, 80, 90)',
    )
    await off.click()
    await expect(off).toBeChecked()
    await off.focus()
    await page.keyboard.press('Enter')
    await expect(off).not.toBeChecked()
    await page.keyboard.press('Space')
    await expect(off).toBeChecked()
  })
})

test('Checked Switch focus keeps the existing gap before the ring', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-switch--on&viewMode=story')
  const toggle = page.getByRole('switch')
  await page.keyboard.press('Tab')
  await toggle.focus()
  const root = toggle.locator('../..')
  await page.evaluate(() => {
    const css = document.documentElement.style
    css.setProperty('--rc-color-border-focus', '#0a141e')
    css.setProperty('--rc-color-control-selected', '#1e2832')
  })
  await expect(root).toHaveCSS('overflow', 'visible')
  await expect(root.locator('.MuiSwitch-track')).toHaveCSS(
    'box-shadow',
    'rgb(255, 255, 255) 0px 0px 0px 2px, rgb(10, 20, 30) 0px 0px 0px 4px',
  )
  await expect(root.locator('.MuiSwitch-track')).toHaveCSS(
    'background-color',
    'rgb(30, 40, 50)',
  )
})

test('Switch retains reduced-motion transform behavior', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/iframe.html?id=atoms-switch--on&viewMode=story')
  await expect(page.locator('.MuiSwitch-switchBase')).toHaveCSS(
    'transition-duration',
    '0s',
  )
  await expect(page.locator('.MuiSwitch-track')).toHaveCSS('transition-duration', '0.2s')
})

test('Switch consumer sx overrides remain effective', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-switch--consumer-overrides&viewMode=story')
  await expect(page.locator('.MuiSwitch-track')).toHaveCSS(
    'background-color',
    'rgb(0, 133, 97)',
  )
})

test('Switch label responds to typography token overrides', async ({ page }) => {
  await page.goto('/iframe.html?id=atoms-switch--off&viewMode=story')
  await page.evaluate(() => {
    document.documentElement.style.setProperty(
      '--rc-typography-font-size-body-regular',
      '19px',
    )
    document.documentElement.style.setProperty(
      '--rc-typography-line-height-body-regular',
      '28px',
    )
  })
  const label = page.getByText('Notifications', { exact: true })
  await expect(label).toHaveCSS('font-size', '19px')
  await expect(label).toHaveCSS('line-height', '28px')
})
