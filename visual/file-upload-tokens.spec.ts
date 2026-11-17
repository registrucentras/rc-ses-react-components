import { expect, test } from '@playwright/test'

const widths = [375, 768, 1024, 1440]

widths.forEach((width) => {
  test(`File upload and dropzone preserve selection at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 1000 })
    await page.goto('/iframe.html?id=organisms-fileupload--token-bindings&viewMode=story')
    const upload = page.locator('#file-token-empty')
    await upload.setInputFiles({
      name: 'example.pdf',
      mimeType: 'application/pdf',
      buffer: Buffer.from('Document'),
    })
    await expect(upload.locator('..')).toContainText('example.pdf')
    await expect(page.locator('#file-token-disabled')).toBeDisabled()

    await page.goto(
      '/iframe.html?id=organisms-filedropzone--token-bindings&viewMode=story',
    )
    const dropzoneInput = page.locator('#file-token-empty')
    const dropzone = dropzoneInput.locator('..')
    await expect(dropzone).toHaveCSS('border-color', 'rgb(197, 202, 209)')
    await expect(dropzone).toHaveCSS('padding-left', '44px')
    await expect(dropzone).toHaveCSS('padding-top', '40px')
    await dropzoneInput.setInputFiles({
      name: 'example.pdf',
      mimeType: 'application/pdf',
      buffer: Buffer.from('Document'),
    })
    await expect(dropzone).toContainText('example.pdf')
    await dropzone.locator('button').click()
    await expect(dropzone).not.toContainText('example.pdf')
  })
})

test('File upload and dropzone read live DS tokens', async ({ page }) => {
  await page.goto('/iframe.html?id=organisms-fileupload--token-overrides&viewMode=story')
  await expect(page.locator('#file-token-empty').locator('..')).toHaveCSS(
    'background-color',
    'rgb(255, 250, 240)',
  )
  await expect(page.locator('#file-token-empty').locator('..')).toHaveCSS(
    'border-radius',
    '12px',
  )
  await page.goto(
    '/iframe.html?id=organisms-filedropzone--token-overrides&viewMode=story',
  )
  const dropzone = page.locator('#file-token-empty').locator('..')
  await expect(dropzone).toHaveCSS('border-color', 'rgb(165, 104, 53)')
  await expect(dropzone).toHaveCSS('border-radius', '12px')
  await expect(page.locator('#file-token-error').locator('..')).toHaveCSS(
    'border-color',
    'rgb(160, 32, 64)',
  )
  await dropzone.hover()
  await expect(dropzone).toHaveCSS('border-color', 'rgb(139, 69, 19)')
})
