import { Page, expect } from '@playwright/test'
import { checkA11y, injectAxe } from 'axe-playwright'

type CheckA11yOptions = Parameters<typeof checkA11y>[2]

// Storybook's a11y addon runs axe after each render, and axe refuses to start
// while another run is in progress, so retry until the page is free.
const expectNoSeriousA11yIssues = async (
  page: Page,
  context: string,
  options: CheckA11yOptions = {},
) => {
  await injectAxe(page)
  await expect(async () => {
    await checkA11y(page, context, {
      includedImpacts: ['critical', 'serious'],
      ...options,
    })
  }).toPass({ timeout: 10_000 })
}

export default expectNoSeriousA11yIssues
