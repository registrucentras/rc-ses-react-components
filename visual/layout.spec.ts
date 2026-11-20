import { expect, test } from '@playwright/test'

// Admin panel container: full width minus outer padding, no max-width.
test('fluid full width, padding and stretching grid at five viewports', async ({
  page,
}) => {
  await page.goto('/iframe.html?id=fixtures-foundations-layout--fluid&viewMode=story')
  await expect(page.getByTestId('layout-fluid')).toBeVisible()
  const cases = [
    [375, 16, 16, [343, 343, 343]],
    [768, 24, 16, [720, 720, 720]],
    [1024, 24, 24, [744, 936, 1128]],
    [1440, 36, 24, [744, 936, 1128]],
    [1920, 36, 24, [744, 936, 1128]],
  ] as const
  /* eslint-disable no-await-in-loop -- Resize one specimen page sequentially. */
  for (let index = 0; index < cases.length; index += 1) {
    const [width, padding, gutter, maxWidths] = cases[index]
    await page.setViewportSize({ width, height: 900 })
    const outer = width
    const inner = outer - 2 * padding
    const fluid = page.getByTestId('layout-fluid')
    await expect(fluid).toHaveCSS('padding-left', `${padding}px`)
    await expect(fluid).toHaveCSS('padding-right', `${padding}px`)
    await expect(fluid).toHaveCSS('max-width', 'none')
    await expect(fluid).toHaveCSS('box-sizing', 'border-box')
    const bounds = await fluid.boundingBox()
    expect(bounds?.width).toBeCloseTo(outer, 1)
    expect(bounds?.x).toBeCloseTo((width - outer) / 2, 1)
    expect(width - (bounds!.x + bounds!.width)).toBeCloseTo(bounds!.x, 1)
    const grid = page.getByTestId('layout-grid')
    await expect(grid).toHaveCSS('gap', `${gutter}px`)
    const gridBounds = await grid.boundingBox()
    expect(gridBounds?.width).toBeCloseTo(inner, 1)
    expect(gridBounds?.x).toBeCloseTo(bounds!.x + padding, 1)
    const tracks = await grid.evaluate((element) =>
      getComputedStyle(element)
        .gridTemplateColumns.split(/\s+/)
        .map(Number.parseFloat)
        .filter((size) => size > 0),
    )
    expect(tracks).toHaveLength(12)
    tracks.forEach((size) => {
      expect(size).toBeCloseTo((inner - 11 * gutter) / 12, 1)
    })
    await Promise.all(
      ['narrow', 'medium', 'wide'].map(async (variant, position) => {
        const element = page.getByTestId(`layout-${variant}`)
        await expect(element).toHaveCSS('max-width', `${maxWidths[position]}px`)
        expect((await element.boundingBox())?.width).toBeCloseTo(
          Math.min(inner, maxWidths[position]),
          1,
        )
      }),
    )
  }
  /* eslint-enable no-await-in-loop */
  await page.evaluate(() => {
    document.documentElement.style.setProperty('--rc-layout-outer-padding', '40px')
    document.documentElement.style.setProperty('--rc-layout-gutter', '20px')
  })
  await expect(page.getByTestId('layout-fluid')).toHaveCSS('padding-left', '40px')
  await expect(page.getByTestId('layout-grid')).toHaveCSS('gap', '20px')
  expect((await page.getByTestId('layout-grid').boundingBox())?.width).toBeCloseTo(
    1840,
    1,
  )
  const resizedTracks = await page.getByTestId('layout-grid').evaluate((element) =>
    getComputedStyle(element)
      .gridTemplateColumns.split(/\s+/)
      .map(Number.parseFloat)
      .filter((size) => size > 0),
  )
  expect(resizedTracks).toHaveLength(12)
  resizedTracks.forEach((size) => expect(size).toBeCloseTo((1840 - 11 * 20) / 12, 1))
})
