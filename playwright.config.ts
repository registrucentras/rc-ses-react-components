import { defineConfig, devices } from '@playwright/test'

/**
 * Visual regression harness for the Storybook (SAV-5648 / LIB-01).
 *
 * Chosen over Chromatic because this repository is public, so GitHub Actions
 * minutes are free and unlimited, whereas Chromatic's free tier (5 000
 * snapshots/month) would be outgrown during the MUI 5 -> 9 migration's frequent
 * pushes - and it would mean uploading the built Storybook to a third party.
 *
 * IMPORTANT: baselines are platform-specific. Font rasterisation differs between
 * Windows and the Linux CI container, so snapshots MUST be generated inside the
 * same image CI uses:
 *
 *   npm run test:visual:update
 *
 * Running `playwright test` directly on a dev machine will report differences
 * against CI-generated baselines even when nothing changed.
 */

const PORT = 6007

export default defineConfig({
  testDir: './visual',
  // Storybook is a static build; nothing here mutates shared state.
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: process.env.CI ? [['github'], ['html', { open: 'never' }]] : [['list']],
  // Baselines live in one directory rather than beside the spec, so the whole
  // set can be regenerated or reviewed as a unit.
  snapshotPathTemplate: '{testDir}/__snapshots__/{arg}{ext}',
  expect: {
    toHaveScreenshot: {
      // Anti-aliasing differs very slightly even within the same image; a small
      // pixel budget avoids false positives without hiding real changes.
      maxDiffPixelRatio: 0.01,
      // Give fonts and MUI transitions a moment to settle before capturing.
      animations: 'disabled',
      caret: 'hide',
      scale: 'css',
    },
  },
  use: {
    baseURL: `http://127.0.0.1:${PORT}`,
    ...devices['Desktop Chrome'],
    // Removes MUI ripples and Fade/Grow transitions as a source of flake.
    reducedMotion: 'reduce',
    trace: 'off',
    video: 'off',
  },
  projects: [{ name: 'chromium', use: { ...devices['Desktop Chrome'] } }],
  // `vite preview` is used rather than adding a static-server dependency: Vite
  // is already a devDependency and can serve an arbitrary outDir.
  webServer: {
    // --host 127.0.0.1 is required, not cosmetic: `vite preview` otherwise binds
    // to `localhost`, which inside the Linux container resolves to ::1 while
    // Playwright polls 127.0.0.1, so the server is never detected and the run
    // dies on a webServer timeout. It happens to work on Windows either way.
    command: `npx vite preview --outDir storybook-static --host 127.0.0.1 --port ${PORT} --strictPort`,
    url: `http://127.0.0.1:${PORT}/iframe.html`,
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
})
