// This file is compiled against the built dist/ output (not src/) to verify
// that all declaration files were emitted correctly by vite-plugin-dts.
// It runs in CI after build:lib via `npm run check:dist`.
// skipLibCheck is intentionally false in tsconfig.check-dist.json.
// @ts-ignore
import type {} from '../dist/library/index'
