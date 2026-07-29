# SAV-5648 — execution backlog

Companion to [`SAV-5648-dependency-update.md`](./SAV-5648-dependency-update.md). That document is the analysis; this one is the ordered task list to work through.

**Release model (decided 2026-07-27):** **single big-bang `2.0.0`**, no interim `1.12.0`. The new `ses-ui` design is already planned *against the latest component library*, so an interim 1.11.0 adoption would mean migrating `ses-ui` twice for one outcome. `2.0.0` ships as a combined release train: dependency update + new `ses-ui` design.

**Consequences of that decision, recorded so they are not rediscovered later:**
- §10 of the analysis doc (three-track incremental sequencing, temporary token pin) is **superseded**. Kept for the reasoning, not as the plan.
- Phases are now **internal PR milestones into `develop`**, not releases. One npm publish at the end (plus release candidates).
- **Phase 0 (visual baseline) becomes more important, not less** — every visual change now lands in one release, so there is no intermediate state to diff against unless we build one.
- **SAV-6284** is blocked by SAV-6098, which now waits for `2.0.0`. Confirm that slip is acceptable with whoever owns SAV-6284's date.

---

## The sequencing constraint that matters most

> **New redesign components must be authored *after* LIB-08 lands on `develop`, on MUI 9 — not before, on MUI 5.**

Any component written against MUI 5 between now and then pays the migration twice: legacy `Grid item xs` → `size={{}}`, `InputProps` → `slotProps.input`, and theme-override churn across the 39 `Mui*` slots. The redesign will need components that do not exist yet ("*probably some components are missing at the moment but they will be created*") — those creation tickets should be scheduled **after LIB-08**.

Practical implication: get LIB-01 → LIB-08 done **fast and first**. `src/theme/light/` is the conflict zone — 39 files, and almost every new component touches it. Long-lived parallel branches adding components during Phase 3 will conflict badly. Either land the migration quickly or freeze new-component PRs for its duration.

---

## Estimates — 20h, AI-agent execution

Implementation is AI-agent driven, so the budget is the existing **20h** on `SAV-5654`, distributed below. Revise as real numbers come in.

The split is deliberately **not** proportional to lines of code. Agents compress mechanical work hard — codemods, config migration, dependency edits, lint churn, story scaffolding — so those get thin slices. The hours are weighted toward what agents *don't* compress:

| Doesn't compress | Why | Where the hours went |
| --- | --- | --- |
| Visual diff review | Judgment, not typing — a human decides whether an 8px radius on 39 themed slots is *intended* | LIB-09 **3h** — the largest single item |
| Chromatic setup | Account, project token, CI secret — procurement, not code | LIB-01 **1.5h** |
| MUI v9 semantics | Post-cutoff; the guide must be read and behaviour verified, not pattern-matched | LIB-08c **1.5h** |
| rc validation | Wall-clock waiting on `ses-ui` to exercise it | LIB-17 **1h** |

Execution order: **1 → 2 → 2b → 3 → 4 → 5.** The safety net moved out of Phase 0 to sit after the toolchain — see Phase 2b for why.

| Phase | Hours | Status |
| --- | --- | --- |
| 1 — Hygiene + peers | 0.75 → **1.75** | ✅ LIB-03, LIB-04 done · LIB-03b open |
| 2 — Toolchain | 3.25 → **3.5** | ✅ LIB-05, LIB-06, LIB-07 all done |
| 2b — Safety net | 2.5 → **3.5** | ✅ LIB-01 done · LIB-02 open |
| 3 — MUI 5 → 9 | 8.25 → **8.75** | ✅ LIB-08a/b/c, LIB-10 done · LIB-09 (1h, verification) open |
| 4 — Runtime majors | 2.25 | — |
| 5 — Release | 3.0 | — |
| **Total** | **21.75** | |

Adjustments so far:
- **+1h**: LIB-03 split. The `react-hook-form` peer move turned out to be coupled to the build's externals config *and* to the library's i18n initialisation, so it became **LIB-03b** rather than shipping inside a packaging commit.
- **−0.25h**: LIB-06 (TypeScript 5.9) was already satisfied — `^5.4.5` resolves to 5.9.3.
- **+1h**: LIB-01 revised from 1.5h to 2.5h. The self-hosted Playwright harness is more work than wiring a hosted service, and Storybook turned out not to load its own webfont, which has to be fixed first or baselines are unstable.
- **+0.5h**: LIB-07 ran to ~1.5h. Storybook 10 forced the `tsconfig` `moduleResolution` change that was scoped into SAV-6398, and the automigration's import rewrites needed a lint pass plus one real type fix.
- **+0.5h**: LIB-08a ran to ~1.5h — two real regressions (Button's `loading` prop colliding with MUI 6's new native one, and Switch silently losing Enter-to-toggle).
- **+0.5h**: LIB-08b ran to ~2.5h across three commits, including 9 new `SearchableField` tests written before touching it.
- **+1.5h**: LIB-08c ran to ~3h. Pickers 7 → 9 skipped a major, and MUI 9 removed enough that ~25 type errors needed resolving.
- **−1h**: LIB-10 absorbed into LIB-08c (MUI 9 forces pickers 9 anyway).
- **−2h**: LIB-09 reduced from migration to verification — the compiler forced the mandatory theme work into LIB-08c.

Running total **23.25h** against the 20h budget.

**Done:** LIB-03, LIB-04 (Phase 1) · LIB-05, LIB-06, LIB-07 (Phase 2) · LIB-01 (Phase 2b) · LIB-08a, LIB-08b, LIB-08c, LIB-10 (Phase 3).
**Open:** LIB-09 (theme slot audit, 1h) · LIB-02 (story coverage) · LIB-03b (needs a decision on the library's i18next) · then Phase 4 and Phase 5.

**The library is on MUI 9.2.0 and x-date-pickers 9.10.1 as of 2026-07-29**, with all 154 visual baselines matching and 202 unit tests passing. Every MUI hop landed pixel-identical.

**The one assumption that breaks this:** LIB-09's 3h is *review*, and it presupposes LIB-01 produced a working visual baseline. Without one there is nothing to diff 39 themed slots against and that 3h buys nothing — theme verification then falls back to manual page-by-page checking, which is neither 3h nor agent-compressible. **LIB-01 is the load-bearing task in this budget.**

---

## Backlog

Dependencies are strict unless marked ∥ (parallelisable).

### Phase 1 — Hygiene + peers

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-03** | ✅ Nenaudojamų priklausomybių išėmimas ir deps/peers pertvarkymas | **0.5h** | — |
| **LIB-03b** | Externals konfigūracijos sutvarkymas (`react-hook-form` → peer) | **1h** | LIB-01 (Phase 2b) |
| **LIB-04** | ✅ Saugių minor versijų atnaujinimas | **0.25h** | LIB-03 |

**LIB-03** — ✅ **Done 2026-07-27.** Removed `axios`, `notistack`, `@fontsource/public-sans`, `@types/react-helmet` (zero imports, verified across `src/` *and* config files). Moved `react-router-dom` → `devDependencies` (used only by `src/App.tsx`, `src/main.tsx`, `src/examples/**`), which takes the router 6 → 7 major off the critical path. Widened all 11 peers from exact pins to caret ranges, plus `react`/`react-dom` → `^18.3.1 || ^19.0.0`.

Two things discovered during execution that were **not** in the original plan:

1. **Every peer is now also pinned exactly in `devDependencies`.** None of the 11 peers had a devDep pin — they were auto-installed by npm at their exact declared versions. Since `build:lib` runs `npm i`, widening the peer ranges alone would have let npm resolve them upward on the next build, and four of them (`date-fns`, `date-fns-tz`, `i18next`, `react-i18next`) are **bundled into `dist`** — so a silent major could have shipped inside the artifact. The devDep pins make the build environment reproducible and are what keep peer widening safe. Verified: zero version drift after `npm i`.
2. **`import/no-extraneous-dependencies` needed its allowlist extended** with `src/App.tsx`, `src/main.tsx`, `src/examples/**`. The rule correctly flagged the router move; those four files are demo-only. **Port this to the flat config in LIB-05.**

*Verification:* lint clean · 29 files / 193 tests pass · `build:lib` clean · **shipped ESM bundle byte-identical** (400 037 bytes before and after, no change to the externals list) — a pure packaging change with zero runtime impact.

**LIB-03b** — the deferred half of LIB-03. `vite.config.lib.ts` derives its `external` array from **`Object.keys(pkg.dependencies)`**, so moving `react-hook-form` to `peerDependencies` would cause it to be **bundled** — the opposite of the intent. Fixing that means adding `...Object.keys(pkg.peerDependencies)` to `external`, which simultaneously externalises `date-fns`, `date-fns-tz`, `i18next` and `react-i18next` — all currently bundled.

That is a **behaviour change, not a packaging change**, because `src/i18n/i18n.ts` calls `i18n.use(initReactI18next).init({...})` at import time and is pulled into the library entry graph as a side effect by `FormControlWrapper/index.tsx` and `PhoneInputFormControl/index.tsx`. Today the library initialises its **own bundled** i18next with its own `common`/`input` resources and syncs language via cookie. Externalising i18next would make that `init()` call apply to the **consumer's shared instance**, overwriting `fallbackLng`, `lng`, `supportedLngs` and `resources`. Needs LIB-01's visual/behavioural baseline and an explicit decision: *is the library's i18n self-contained or consumer-provided?* Do not fold this back into a packaging commit.

**LIB-04** — ✅ **Done 2026-07-27.** `npm update` — 26 direct packages moved, all within their declared majors (verified no drift).

Notable: **all `@storybook/*` addons went 8.4.6 → 8.6.x, fixing an existing inconsistency** where `storybook` itself was already 8.6.18 while every addon sat at 8.4.6 — Storybook requires them aligned. That de-risks LIB-07. Also `vitest`/`@vitest/coverage-v8` 4.0.17 → 4.1.10, `@vitejs/plugin-react` 4.3.4 → 4.7.0, `@types/react` 18.3.12 → 18.3.31, `prettier` 3.4.1 → 3.9.6, `eslint-plugin-*` and `vite-plugin-*` minors.

**Deliberately not taken** (they are other tasks' scope, not "safe minors"): `@emotion/*` 11.14 and `jsdom` 29 — both are peer/bundled-adjacent and `jsdom` 27 → 29 is a major. `date-fns`, `i18next`, `react-i18next`, `react`, `@mui/*` stay pinned by the LIB-03 devDep pins.

*Verification:* lint clean · 193 tests pass · `build:lib` clean · **externals list unchanged (23 → 23, nothing newly bundled)**. Bundle grew 400 037 → 401 048 bytes (+1 011), attributable to `vite` 6.4.2 → 6.4.3 and `@vitejs/plugin-react` 4.3.4 → 4.7.0 output differences, not to new dependencies.

`prettier` 3.9 reformatted **5 files** (union-type and `extends`-clause line breaking) — autofixed via `lint:fix`, cosmetic only: `form/inputs/TextField.tsx`, `loaders/FullPageLoader/index.tsx`, `overlays/Dialog/index.tsx`, `overlays/Modal/index.tsx`, `types/common/ColorType.tsx`.

**Audit note:** `npm audit` went 24 → 59 advisories, but **`npm audit --omit=dev` reports 0** — every one is dev-only tooling, nothing reaches consumers. The roots are the ESLint ecosystem (`eslint` 8.57.1, `eslint-config-airbnb`, `@typescript-eslint/*`, `eslint-plugin-*`) and jest via `@storybook/test-runner` — i.e. **exactly what LIB-05 and LIB-07 remove**. No action needed here; it resolves as a side effect of the toolchain phase.

### Phase 2 — Toolchain

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-05** | ✅ ESLint 9 + flat config migracija, airbnb → airbnb-extended | **2h** | LIB-04 |
| **LIB-06** | ✅ TypeScript 5.9 — floor pin | **0.25h → 0h** | LIB-05 |
| **LIB-07** | ✅ Storybook 8 → 10 ir Vite 6 → 7 atnaujinimas | **1h → 1.5h** | LIB-06 |

**LIB-05** — ✅ **Done 2026-07-27.** `.eslintrc.cjs` + `.eslintignore` → `eslint.config.js` (flat), ESLint 8.57.1 → **9.39.5**. `eslint-config-airbnb` + `-typescript` replaced by **`eslint-config-airbnb-extended@3.1.1`**; `@typescript-eslint/*` 7 → unified `typescript-eslint@8`; `eslint-plugin-storybook` 0.8 → 0.11.6; `eslint-config-prettier` 9 → 10. `FlatCompat` was not needed. **ESLint 10 confirmed unreachable** — `eslint-plugin-import`, `-jsx-a11y`, `-react` all cap at `^9`.

*Verification:* lint **0 errors / 6 warnings** · 193 tests pass · `build:lib` clean · **bundle byte-identical** to LIB-04 (401 048 bytes, externals unchanged).

Six findings from doing the work:

1. **`airbnb-extended` bundles its own plugin copies** (import-x, jsx-a11y, n, react, react-hooks, typescript-eslint, @stylistic). Our direct devDeps for those were redundant *and* blocking: `eslint-plugin-react-hooks@^4.6.2` peers ESLint ≤8, which made `npm install` ERESOLVE. Removed 8 now-redundant packages: `eslint-plugin-{react-hooks,react,jsx-a11y,n,import,promise}`, `eslint-import-resolver-alias`, and later re-added `eslint-import-resolver-typescript` explicitly because the config imports it. Note `eslint-plugin-promise` had never been referenced by the old config at all — a dead devDep.
2. **It uses `eslint-plugin-import-x`, so rules are namespaced `import-x/*`.** Our `import/no-extraneous-dependencies` customisation had to be renamed, and an inline `// eslint-disable-next-line import/prefer-default-export` in `FormControlLayoutVariables.ts` had become a hard error ("rule not found").
3. **Flat config needs plugins registered before any config references them** — `configs.*` alone throws `could not find plugin "import-x"`. `airbnb-extended` exports `plugins.*` objects for this.
4. **The `@/*` alias would not resolve — 1 027 of the initial 1 163 errors** (`import-x/no-unresolved` + `import-x/extensions`) came from this single cause. `tsconfig.json` declares `paths` under `moduleResolution: "Node"` (legacy node10), and the resolver does not apply path mappings in that mode. Verified by probe: the same resolver works against a tsconfig using `"Bundler"`. Fixed by passing `alias` explicitly to `createTypeScriptImportResolver` rather than editing `tsconfig.json` — switching to `"Bundler"` is arguably correct for a Vite project but changes what `tsc` accepts, which is a build concern outside this task. **Worth a follow-up ticket.**
5. **`.eslintignore` had entries I nearly lost** — it excluded `vite.config.ts`, `vite.config.lib.ts`, `public`, `jest.config.cjs`. Ported into the flat `ignores` block. Separately, `.storybook/**` sits outside `tsconfig.json`'s `include: ["src"]`, so the project service cannot type it; those files get `projectService: false` plus `tseslint.configs.disableTypeChecked.rules`, since airbnb's type-aware rules *throw* rather than fail without type info.
6. **`--fix` mangled a JSX comment.** Removing an unused `{/* eslint-disable-next-line no-console */}` directive left a stray `{}` in `src/examples/SingleStepForm/index.tsx`. Harmless at runtime but junk; cleaned up by hand. Worth diffing autofix output rather than trusting it.

**Rules deliberately switched off** to hold enforcement at the previous level — `airbnb-extended` is stricter than `airbnb` + `airbnb-typescript` was. Turning these on means ~100 source edits with no functional change, which belongs in its own decision, not in a toolchain migration:

| Rule | Occurrences | Why deferred |
| --- | --- | --- |
| `@typescript-eslint/consistent-type-definitions` | 53 | would rewrite `type` → `interface` across the codebase |
| `import-x/no-rename-default` | 24 | all of them the deliberate `RcSes*` public-name convention |
| `@typescript-eslint/no-unnecessary-type-assertion` | 13 | |
| `@typescript-eslint/array-type` | 7 | |
| `@typescript-eslint/no-unnecessary-type-arguments` | 2 | |
| `@typescript-eslint/no-empty-object-type` | 1 | |
| `import-x/no-empty-named-blocks` | 6 | **must stay off** — flags the intentional `import type {} from '@mui/system'` module-augmentation blocks in `src/library/index.ts` |

**6 remaining warnings are real findings** — all from `eslint-plugin-react-hooks` v4 → v7, which adds rules the old version did not have. Not regressions; pre-existing patterns now visible:

- `react-hooks/set-state-in-effect` — `Snackbar/index.tsx:60`, `NumberStepper.tsx:142`, `examples/ListWithPagination/index.tsx:61`
- `react-hooks/static-components` — `IconWithCircularBackground.tsx:68` ("cannot create components during render")
- `react-hooks/incompatible-library` ×2 — `CheckboxFormControl.stories.tsx:199,315`, react-hook-form's `watch()` cannot be memoised safely

Tracked as **[SAV-6399](https://jira.registrucentras.lt/jira/browse/SAV-6399)** — see the follow-ups section below.

**Source changes** (40 files, all mechanical): 22 test files `'./index'` → `'.'` (`import-x/no-useless-path-segments`), removal of now-unused eslint-disable directives, prettier reformatting of `.storybook/*`, plus four deliberate one-liners — `catch (_)` → `catch` in `Datepicker/index.tsx`, `import type` in `env.tsx` (correct anyway under `isolatedModules`), the duplicate `darkTheme` import in `.storybook/preview.ts` (dark and light resolved to the same module — see LIB-02), and a `for...of` → `reduce` in `.storybook/test-runner.ts`.

**LIB-06** — **already satisfied, no work needed.** The declared `^5.4.5` range resolves to **typescript 5.9.3** and lint/tests/build are all green on it. Reduce to a verification step: pin the floor to `^5.9.3` when LIB-05 touches `package.json`, so the intent is explicit rather than incidental. TS 6/7 remains out of scope.

**LIB-07** — ✅ **Done 2026-07-28**, as **two commits**: Storybook 8.6 → 10.5.5, then Vite 6.4 → 7.3.6. They turned out to be **independent** — `@storybook/react-vite@10` accepts `vite ^5||^6||^7||^8` — so splitting them keeps a bisect possible.

*Verification (both):* lint 0 errors · 193 tests pass · `storybook-build` green · `build:lib` green · `tsc` clean against both tsconfigs. Bundle byte-identical after Storybook; **shrank 401 048 → 396 565 bytes (−4 483)** after Vite 7, externals unchanged at 23 either way.

Storybook: `storybook upgrade` handled the addon migrations. `addon-essentials` and `addon-interactions` dropped (viewport/controls/actions/interactions moved into core in v9); `@storybook/blocks` → `@storybook/addon-docs/blocks` and `@storybook/test` → `storybook/test`; `test-runner` 0.18 → 0.24.4, `@chromatic-com/storybook` 1 → 5.2.1, `addon-coverage` 1 → 3.0.2, `eslint-plugin-storybook` 0.11 → 10.5.5; `main.js` `docs.autodocs` removed.

Five findings worth recording:

1. **`tsconfig` `moduleResolution` "Node" → "Bundler" was forced here, not deferrable.** It was scoped into SAV-6398, but Storybook 10 exposes its types through `exports` maps that legacy node10 resolution cannot read — `tsc` fails outright and says so. Changed in **both** `tsconfig.json` and `tsconfig.lib.json`; `tsconfig.json` also gained `baseUrl: "."` for consistency. **SAV-6398 must be updated — that scope item is done.**
2. **`tsconfig.lib.json` does not exclude `src/stories`**, so story files are part of the *library* type-check. That is what surfaced the failure above, and it is arguably wrong on its own — stories are not library code. Left as-is; candidate for a small follow-up.
3. **The eslint resolver alias workaround could not be removed.** Retested after the Bundler switch, with `baseUrl` added: the resolver still ignores tsconfig `paths`, most likely because of the project `references` entry. The explicit `alias` stays, now with an accurate comment. Time-boxed rather than chased further.
4. **The automigration added `@storybook/addon-mcp` unprompted** — removed, along with the legacy `@storybook/blocks` and `@storybook/test` packages the migration left in `package.json` after rewriting their imports.
5. **One real type error** from Storybook 10's stricter story typings: `PhoneInputFormControl.stories.tsx` typed its demo `label` as `string` while the component accepts `ReactNode`. Fixed the demo to mirror the component API. The other 97 lint errors were pure import-ordering churn from the migration not honouring `@trivago/prettier-plugin-sort-imports` — autofixed.

Also: **`storybook-static` and `debug-storybook.log` added to `.gitignore`.** Neither was ignored, and the first Storybook commit accidentally staged 444 build-output files / ~118k lines before it was caught and removed.

Vite: no other package had to move — every plugin already supported 7. **Deliberately not taken:** `@vitejs/plugin-react` 6 and `vite-plugin-css-injected-by-js` 5 both peer-depend on **Vite 8**, so they are out of scope until Vite 8 is considered on its own.

### Phase 2b — Safety net (moved: must come *after* LIB-07)

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-01** | ✅ Vizualinės regresijos aplinka su Playwright + bazinė linija | **2.5h** | LIB-07 |
| **LIB-02** | Storybook istorijų aprėpties užpildymas temos komponentams | **1h** | LIB-01 ∥ |

**Why this moved out of Phase 0** (decided 2026-07-27): a Storybook major can shift canvas padding and wrapper markup, so a baseline captured before LIB-07 would be invalidated by the Storybook upgrade itself — you would then be diffing Storybook's changes against MUI's. Capturing after LIB-07 leaves **MUI as the only variable**. Nothing in Phase 1 or 2 changes component rendering, so no coverage is lost by waiting. Ordering is therefore **LIB-05 → LIB-07 → LIB-01 → LIB-08a**.

**LIB-01 — approach chosen: self-hosted Playwright, not Chromatic.** Rationale: the repo is **public**, so GitHub Actions minutes are free and unlimited, making the marginal cost genuinely zero; Chromatic's free tier (5 000 snapshots/month) would be outgrown during Phase 3's frequent pushes, and it would mean uploading the built Storybook to a third-party US SaaS. `playwright` 1.62.0 is **already installed** as an `axe-playwright` transitive; only `@playwright/test` needs adding for `toHaveScreenshot()`.

Implementation: enumerate stories from Storybook's `index.json`, capture each at `/iframe.html?id=<storyId>`, diff via `toHaveScreenshot()`, serve `storybook-static` in CI.

Three things that must be handled or the suite will be flaky:

1. **Storybook does not load Public Sans.** The theme declares `fontFamily: 'Public sans, sans-serif, Arial'` (`theme/light/themePalette.tsx:21`, `MuiAutocomplete.ts:39`) but there is no `preview-head.html`, no font import in `preview.ts`, and no `@fontsource` import anywhere — so Storybook renders in the OS generic sans-serif (DejaVu on Linux, Arial/Helvetica on Windows). **Re-add `@fontsource/public-sans` as a `devDependency` and import it in `.storybook/preview.ts`.** This bundles the font into the Storybook build: deterministic, no CDN, and Storybook finally renders what users actually see. Removing it from `dependencies` in LIB-03 was still correct — consumers should not inherit it.
2. **MUI animations** — ripples, transitions, `Fade`/`Grow` — need `reducedMotion: 'reduce'` plus a CSS override zeroing transitions, or captures land mid-animation.
3. **Baselines must be generated inside `mcr.microsoft.com/playwright:v1.62.0-jammy`** to match CI. They cannot be refreshed from a Windows dev machine.

Known cost: **PNG bloat in git history.** ~48 stories × 50–150 KB ≈ 3–7 MB initially, and every intentional theme change in Phase 3 leaves the old blobs in history permanently. Acceptable, but if it becomes a problem the fallback is keeping baselines as CI artifacts and committing only once the theme settles.

Also worth wiring up regardless: **`.storybook/test-runner.ts` already exists** and is fully configured for a11y (`injectAxe` + `checkA11y` with per-story rule overrides), with a `storybook-test` script — but **no workflow runs it**. Adding that job is ~15 minutes and catches "component throws and renders nothing", a real MUI-migration failure mode that pixel diffing alone reports as an empty image.

*DoD:* CI produces a reviewable visual diff on every PR; baseline captured after LIB-07; a11y job green.

---

#### LIB-01 — as built (2026-07-28)

| File | Purpose |
| --- | --- |
| `playwright.config.ts` | chromium, `reducedMotion: 'reduce'`, `animations: 'disabled'`, `caret: 'hide'`, 1 % pixel budget for anti-aliasing noise |
| `visual/stories.spec.ts` | reads `storybook-static/index.json`, one test per story |
| `visual/__snapshots__/` | committed baselines, **Linux-only** |
| `.github/workflows/visual-regression.yml` | one job: build Storybook once → visual diff → a11y |
| `npm run test:visual` | run locally against existing baselines |
| `npm run test:visual:update` | **regenerate baselines in the CI image** — the only supported way |
| `npm run test:visual:report` | open the HTML diff report |

**154 stories, not 48** — the earlier figure counted `.stories.tsx` files. This retroactively confirms the Playwright decision: 154 snapshots per run would exhaust Chromatic's 5 000/month free tier in about **32 runs**, which Phase 3 would burn through in days.

**Baselines are platform-specific and must never be generated on Windows.** `test:visual:update` runs `npm ci`, the Storybook build and Playwright inside `mcr.microsoft.com/playwright:v1.62.0-noble`, mounting the repo with an *anonymous volume over `node_modules`* so the host's Windows-native binaries (esbuild, rollup) are left intact. Three things must stay in step: the Playwright version in `package.json`, the image tag in that script, and the image tag in the workflow.

**The font fix was a prerequisite, not a nicety.** The theme has always declared `fontFamily: 'Public sans, ...'` while nothing loaded the font, so Storybook rendered in whichever generic sans-serif the OS supplied — DejaVu on Linux, Arial/Helvetica on Windows. Without `@fontsource/public-sans` imported in `.storybook/preview.ts`, baselines would have been irreproducible between any two machines, making the whole harness unreliable rather than merely slightly inaccurate.

**Serving:** `vite preview --outDir storybook-static` rather than adding a static-server dependency — Vite is already present.

**`--host 127.0.0.1` is required, not cosmetic.** Without it `vite preview` binds to `localhost`, which inside the Linux container resolves to `::1` while Playwright polls `127.0.0.1` — the server is never detected and the run dies on a `webServer` timeout after the Storybook build has already succeeded. It happens to work either way on Windows, so this only shows up in the container and in CI. Applied in both `playwright.config.ts` and the workflow's a11y step.

**`node_modules` uses a named Docker volume** (`rcses-visual-node-modules`) rather than an anonymous one, so repeat runs skip the `npm ci` — which is slow over a Windows bind mount. It still masks the host's `node_modules`, keeping Windows-native binaries (esbuild, rollup) intact.

**Opting a story out:** add the `no-snapshot` tag to it. `docs` entries are skipped automatically.

**The a11y check is now wired up too.** `.storybook/test-runner.ts` had `injectAxe`/`checkA11y` fully configured since before this ticket with no workflow calling it. It runs with `if: always()` so a visual failure cannot mask an accessibility regression, and it catches "story throws and renders nothing" — which pixel diffing alone reports only as an unexpectedly blank image.

**LIB-02** — 48 stories cover ~50 components, but the risk surface is the **39 themed `Mui*` slots**. Audit which slots have no story and add them — `MuiButton` (388 lines) and `MuiAlert` (219 lines) first, then `MuiInputBase`, `MuiAutocomplete`, `MuiPagination`, `MuiStepper`, `MuiPickersLayout`, `MuiTable*`.

Note: `.storybook/preview.ts` has `import darkTheme from '../src/theme/light'` — dark and light resolve to the same module, so snapshotting both themes would double the count for identical images. **Snapshot `light` only** until a real dark theme exists.
*DoD:* every slot in `src/theme/light/` is exercised by at least one story.

### Phase 3 — MUI 5 → 9

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-08a** | ✅ MUI 5 → 6 migracija | **0.75h → 1.5h** | LIB-07 |
| **LIB-08b** | ✅ MUI 6 → 7 migracija (Grid, slots/slotProps) | **2h → 2.5h** | LIB-08a |
| **LIB-08c** | ✅ MUI 7 → 9 migracija | **1.5h → 3h** | LIB-08b |
| **LIB-09** | Temos slotų patikrinimas (nebe migracija) | **3h → 1h** | LIB-08c |
| **LIB-10** | ✅ `@mui/x-date-pickers` 7 → 9 — įvykdyta LIB-08c apimtyje | **1h → 0h** | — |

There is **no MUI v8** — majors are 5, 6, 7, 9. Run `npx @mui/codemod@latest` per hop, **one commit per hop** so a bisect is possible.

#### LIB-08a — done 2026-07-28

MUI 5.16.7 → **6.5.0**. `@mui/x-date-pickers` stayed at 7.17.0 — its peer already allows `@mui/material ^6.0.0`, so it did not need to move (one fewer variable).

*Verification:* `tsc` clean (lib + app) · lint 0 errors · **193 unit tests pass** · `build:lib` clean · **visual regression 154/154 passed against the MUI 5 baselines, zero pixel change**. Bundle 396 565 → 396 774 bytes (+209).

**The visual result is the headline: MUI 5 → 6 is pixel-identical across all 154 stories.** v6's changes are internal (styled engine, opt-in CSS variables) rather than default-style changes. Baselines were left untouched by the run, confirming a genuine comparison rather than a rewrite.

**Codemods: run, reviewed, reverted.** There is no `v6.0.0/preset-safe` — that was a v5 concept. The actual v6 transforms are `all`, `grid-v2-props`, `list-item-button-prop` and `styled`. Findings:
- `styled` + `list-item-button-prop` produced **almost entirely jscodeshift printer noise** across 5 files — redundant parens around JSX, inserted blank lines, dropped trailing commas — plus one genuine conversion in `StyledStepLabel.tsx` from callback styling to v6's `variants` API. That conversion is *correct* (it properly decomposes `orientation === 'vertical' && !isLast` with the nested `stepState` ternary into a base variant plus an override), but `styled()`'s callback form is **not deprecated in v6**, so adopting `variants` is optional modernisation, not migration. Reverted; the type-checker was then allowed to say what v6 actually requires.
- **The codemod rewrote all 258 files with CRLF.** `.gitattributes` (`* text=auto eol=lf`) neutralised it in git, but this is a landmine for LIB-08b/c — always check `git diff --stat` before trusting a codemod's file count.
- `grid-v2-props` was deliberately not run: Grid belongs to LIB-08b.

**Two real regressions, both fixed:**

1. **`Button` — MUI 6 added a native `loading` prop** (`boolean | null`, with `loadingIndicator` and `loadingPosition`). Our custom `loading?: boolean` conflicted with MUI's nullable type at every call site spreading `ButtonProps` (`ButtonWithPopover.tsx:39`, `SearchInput/index.tsx:267`). Fixed by no longer re-declaring the prop — `loading` is still destructured out and drives `RcSesLoadingSpinner`, so it never reaches `MuiButton` and behaviour is unchanged.
   → **SAV-5916 / LIB-15 is actionable at MUI 6, not v9** — three hops earlier than planned.
2. **`Switch` stopped toggling on Enter**, caught by a unit test. Diagnosed with a throwaway probe against a bare MUI Switch: `slotProps.input.onKeyDown` → 0 calls, `inputProps.onKeyDown` → 0, root `onKeyDown` → 1. **As of MUI 6, `SwitchBase` applies plain attributes from the input slot but drops event handlers.** Handler moved to the Switch root (keydown bubbles from the input) and now reaches the checkbox to toggle it.

**`inputProps` is deprecated in v6 and removed in v7.** `Switch` is migrated to `slotProps.input`; the remaining sites still need it in LIB-08b — `form/inputs/Select/index.tsx` (×2), `SearchInput/index.tsx`, `SearchableField.tsx`, `PhoneInputFormControl/index.tsx`, `components/AutocompleteInput.tsx`.

#### LIB-08b — done 2026-07-28, as three commits

| Step | Change | Visual |
| --- | --- | --- |
| 1 | `Grid` → `Grid2` on v6 (4 files, 17 usages) | 154/154, zero change |
| 2 | MUI 6.5.0 → **7.3.11**, `Grid2` → `Grid` rename | 154/154, zero change |
| 3 | `InputProps`/`inputProps` → `slotProps` (9 sites, 6 files) | 154/154, zero change |

**Grid2-first was the right ordering.** Doing it on v6 made step 2 a pure rename, landing the JSX on v7's final API (`<Grid size={{ xs, md }}>`) without an intermediate shape needing a second pass. Grid2's headline breaking change is its spacing model (v1 used negative margins), but three of the four files use Grid purely as a flex wrapper with **no `spacing` at all** — layout driven by `sx` — so the difference could not apply. Only the demo modal uses `columnSpacing`, and it is not in the published library.

**`@mui/x-date-pickers` 7.17.0 → 7.29.4 was forced.** 7.17.0 peers `@mui/material ^5.15.14 || ^6.0.0` and blocks MUI 7 outright. 7.29.4 adds `^7.0.0` while staying in major 7, keeping the pickers 7 → 9 work isolated in LIB-10.

**Correction to the earlier plan: `InputProps` is *not* removed in v7.** It is deprecated but still accepted, and `tsc` passes untouched — so the slotProps migration was never a v7 blocker. It was done anyway, in its own commit, because both APIs coexist in v7 and the change could therefore be verified against a known-good baseline rather than discovered as forced breakage at v9.

**`SearchableField` got 9 tests, written before the migration.** It had no coverage, and its click-to-open behaviour runs through the input slot. Those tests passed before *and* after, which settles something for LIB-08c: **`slotProps.htmlInput` does forward event handlers on TextField** — MUI 6's handler-dropping was specific to `SwitchBase`, not a general property of slot APIs.

**Two traps the type-checker caught that a blanket rename would have got wrong:**

1. **Slot names are per-component, not a uniform rename:**

   | Component | Wrapper slot | Native `<input>` slot |
   | --- | --- | --- |
   | `TextField` | `input` | **`htmlInput`** |
   | `OutlinedInput` | `root` | **`input`** |

   `NumberStepper` uses `OutlinedInput`, so it maps to `slotProps.input` while every TextField site maps to `slotProps.htmlInput`. A uniform rule would have silently put props on the wrong element — and `tsc` only caught it because these were object literals; a `{...spread}` would have passed straight through. **Do not codemod this.**
2. **Handler parameters lose their contextual type inside `slotProps`.** `onKeyDown: (event) => ...` type-checked under `InputProps` but became implicit `any` under `slotProps.htmlInput`, needing an explicit `React.KeyboardEvent<HTMLInputElement>`.

The components' own **public** `slotProps` APIs were left untouched — `SearchInput` exposes `field.InputProps` to consumers, and changing that is a breaking API decision for the 2.0.0 review, not a mechanical migration. Worth listing in `MIGRATION-v2.md` (LIB-16).

Original notes on this hop:
- **Grid** — legacy `<Grid item xs={12} md={6}>` in 5 files: `layout/ServiceFormActions.tsx`, `layout/ServiceFormContainer/AccordionFormContainer/index.tsx` + `components/AccordionCollapseControls.tsx`, `examples/SingleStepForm/components/ObjectIdentifierSearchModal.tsx`. In v7 old `Grid` → `GridLegacy`; new `Grid` drops `item` for `size={{ xs: 12, md: 6 }}`. Codemod handles most; the flex hacks (`flex: '0 0 270px'`, `flexGrow: 1`) need manual review.
- **slots/slotProps** — `InputProps={{...}}` in `form/inputs/Select/index.tsx` (×2), `SearchInput/index.tsx`, `SearchableField.tsx`, `PhoneInputFormControl/index.tsx` + `components/AutocompleteInput.tsx` → `slotProps.input`.

#### LIB-08c — done 2026-07-29, as two commits

| Step | Change | Visual |
| --- | --- | --- |
| 1 | `@mui/x-date-pickers` 7.29.4 → **9.10.1**, still on MUI 7 | 154/154, zero change |
| 2 | MUI 7.3.11 → **9.2.0** | 154/154 after two fixes |

**LIB-10 is absorbed here.** Neither pickers 7 nor 8 supports `@mui/material` 9 — both peer `^5.15.14 || ^6.0.0 || ^7.0.0`. Pickers 9 peers `^7.3.0 || ^9.0.0`, so it went first while still on MUI 7, isolating the variable the same way Grid2-first did.

**Pickers 7 → 9 skipped major 8**, so it was two majors of breaking changes. `@mui/x-codemod` `v8.0.0/preset-safe` then `v9.0.0/preset-safe` handled the renames; twelve errors needed hand work:

| Removed | Replacement |
| --- | --- |
| `PickersActionBarProps.onAccept/onCancel/onClear/onSetToday` | `usePickerActionsContext()` → `clearValue`, `cancelValueChanges`, `acceptValueChanges`, `setValueToToday` |
| `MuiPickersAdapterContext` | `usePickerAdapter()` for the adapter, `usePickerTranslations()` for `localeText` |
| `onMonthChange(date, direction)` | direction argument dropped |
| `DatePickerProps<Date, boolean>`, `PickersCalendarHeaderProps<Date>` | no longer generic |
| `locales/utils/getPickersLocalization` | **not in the package `exports` map** — the file exists on disk, so this only breaks under `moduleResolution: "Bundler"`. Inlined; it is a four-line wrapper |

Note `useLocalizationContext` reads like the natural replacement for the adapter context and is declared in the type definitions, but **is not exported** from `hooks/index`. Take v9 replacements from the installed `.d.ts` rather than from the guide.

**MUI 7 → 9.** `deprecations/all` (a preset — do not run 50 individual transforms) plus `v9.0.0/system-props` covered Snackbar `TransitionComponent`, Dialog `PaperProps`, Autocomplete `ListboxComponent`/`ListboxProps`/`PopperComponent`, and the 11 system-prop sites. Hand work:

- `AutocompleteRenderInputParams` now ships `params.slotProps` (`{ inputLabel, input, htmlInput }`) instead of `inputProps`/`InputProps`
- `StepLabel` `StepIconComponent` → `slots.stepIcon`. **The codemod skipped both sites** because they sit on a `styled(StepLabel)` wrapper
- `Modal` `disableEscapeKeyDown` removed — a no-op here, `FullPageLoader` takes no `onClose`
- `FormControlLabel` `slotProps.typography` rejects style shorthands → `sx`

**Three breaking changes for `MIGRATION-v2.md` (LIB-16). Two are runtime-visible in `ses-ui`, not just compile-time:**

1. **`SearchInput`'s public API changed** — `slotProps.field.InputProps`/`.inputProps` → `slotProps.field.slotProps.input`/`.htmlInput`. Not a choice: v9 deleted both from `TextFieldProps`.
2. **A standalone `Tab` now throws.** `Tabs` supplies `RovingTabIndexContext`; without it MUI raises *"RovingTabIndexContext is missing"*. A hard error, not a degradation.
3. **`Stepper` is a `tablist` and `StepButton` a `tab`.** Anything selecting stepper steps by button role breaks — confirmed in `Stepper.js:114` and `StepButton.js:138`.

**What the visual suite caught that nothing else did** — both after types and all 202 unit tests were green:

- **`Select` rendered a deletable Chip in single-select mode.** v9 merged `renderTags` into `renderValue`, which now fires for both modes. Also made the field taller, cascading a vertical offset down the page.
- **The three `Tab` stories rendered MUI's crash page**, showing up as an 87 kB screenshot against a 5.6 kB baseline. Because the harness captures full pages rather than asserting on elements, a throwing component is *more* legible than the blank image predicted in LIB-01, not less.

**LIB-09 — scope reduced from migration to verification.** The compiler forced the mandatory theme work into LIB-08c: `MuiAlert` (all 15 combined `standard`/`filled`/`outlined` × severity keys restructured into nested `&.MuiAlert-color*` selectors — **pixel-identical**), `MuiTabs` (`flexContainer` slot renamed `list`), `MuiLinearProgress` (`bar1Indeterminate` removed, `bar1` scoped instead).

The other 36 slots compile clean and render pixel-identical, so what remains is narrower than the original 3h: **audit for silently dead overrides** — `styleOverrides` keys that still type-check but no longer match anything in v9. `MuiButton.tsx` (388 lines) is the one to check first, since v9's class consolidation affects exactly the variant+colour patterns it targets. A key that has become dead will not fail the build or the visual suite; it just stops applying.
*DoD:* LIB-01 visual diff reviewed **slot by slot**; every intentional change listed in the PR, every unintentional one fixed.

**LIB-10** — ✅ done inside LIB-08c (see above). The `PickerValidDateLookup` module augmentation in `src/library/index.ts` still resolves under v9; `theme/light/MuiPickersLayout.ts` was migrated by the x-codemod presets.

### Phase 4 — Remaining runtime majors

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-11** | i18next 23 → 26 ir react-i18next 14 → 17 | **0.5h** | LIB-08c |
| **LIB-12** | date-fns 3 → 4 atnaujinimas | **0.25h** | LIB-11 ∥ |
| **LIB-13** | react-window 1 → 2 API migracija | **1h** | LIB-08c |
| **LIB-14** | react-dropzone 14 → 15 ir uuid 11 → 14 | **0.5h** | LIB-08c ∥ |

**LIB-11** — `react-i18next@17` peers `i18next >= 26.2.0` and `typescript ^5 || ^6 || ^7`, compatible with TS 5.9. Touch point: `src/i18n/i18n.ts`.
**LIB-12** — light usage: `parseISO`, `fromZonedTime`, the `Locale` type, `enUS`/`lt` locale imports. Verify `date-fns/locale/lt` subpath still resolves. `@date-fns/tz` not needed.
**LIB-13** — genuine **API rewrite**, not a version bump, but confined to 2 files: `form/inputs/PhoneInputFormControl/components/ListboxComponent.tsx` + `OuterElementType.tsx`. The 1h assumes the virtualised phone-country listbox is re-verified by hand — it is the one place an agent can produce compiling code that scrolls wrong.
**LIB-14** — `react-dropzone` → `RcSesFileDropzone`; `uuid` 11 call sites, `v4` API unchanged.

### Phase 5 — Release

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-15** | SAV-5916: custom Button `loading` propo pakeitimas MUI native | **0.5h** | LIB-08c |
| **LIB-16** | Migracijos dokumentacija vartotojams (`MIGRATION-v2.md`) | **1h** | LIB-14 |
| **LIB-17** | `2.0.0-rc.0` išleidimas ir validavimas su ses-ui | **1h** | LIB-16 |
| **LIB-18** | `2.0.0` išleidimas | **0.5h** | LIB-17 |

**LIB-15** — unlocked by LIB-08c. `src/components/common/Button/index.tsx` carries `// TODO: use MUI's loading prop when MUI lib upgrade is done`. Breaking, so it belongs in 2.0.0. Links to existing ticket **SAV-5916**.
**LIB-16** — must cover: MUI 9 now required in the host app; `react-hook-form` is a peer; `react-router-dom` no longer provided; the radius token changes (3px → 8px on buttons and inputs, see §10 of the analysis doc). SAV-6098 cannot be planned without this.

Breaking changes confirmed so far, to list verbatim:

| Change | Kind |
| --- | --- |
| `SearchInput` `slotProps.field.InputProps`/`.inputProps` → `slotProps.field.slotProps.input`/`.htmlInput` | compile-time |
| A standalone `RcSesTab` outside `RcSesTabs` **throws** (`RovingTabIndexContext is missing`) | **runtime** |
| `Stepper` renders `role=tablist`, `StepButton` `role=tab` — selectors/tests targeting steps by button role break | **runtime** |
| Peers now require `@mui/material` ^9, `@mui/system` ^9, `@mui/x-date-pickers` ^9 | install-time |
| `react-hook-form` may become a peer (pending LIB-03b) | install-time |
**LIB-17** — publish `2.0.0-rc.0` and have SAV-6098 validate before tagging final. `build-and-publish.yml` publishes on GitHub release, so an rc tag fits the existing pipeline.

---

## Downstream — already ticketed, do not duplicate

| Ticket | Scope | Fix version |
| --- | --- | --- |
| **SAV-6098** | `ses-ui` adopts the new library + new design | NS_1.0.25 |
| **SAV-6284** | New services-area layout — **blocked by SAV-6098** | — |
| **SAV-5916** | Button `loading` prop → MUI native (= LIB-15) | — |
| **SAV-5534** | `ses-ui` own dependency versions | NS_1.0.27 |
| **SAV-5535** | `ses-admin-ui` own dependency versions | NS_1.0.27 |
| **SAV-5536** | `ses-bdar-report-ui` own dependency versions | NS_1.0.27 |
| **SAV-5538** | `ses-cms` own dependency versions | NS_1.0.27 |
| **SAV-5539** | `ses-ui-mfe-host` own dependency versions | NS_1.0.25 |

Consumer pins to move to 2.0.0 once released: `ses-ui` **1.3.1**, `ses-bdar-report-ui` **1.2.2**, `mfe-host` **^1.7.1**, `mfe-navigation` **^1.7.1**.

**Still needs a ticket:** *React 18 → 19 across the MFE graph + SystemJS import map.* `mfe-host/src/index.ejs` pins react/react-dom to **18.3.1 from jsDelivr** as a shared singleton for every MFE, so React 19 is a lockstep multi-repo deploy. Out of scope for 2.0.0 — the peer range widening in LIB-03 is all that is needed here.

**To verify during rollout, not assume:** with per-MFE bundling of MUI/emotion (only `@rc-ses/*`, `react`, `react-dom` are shared), a partially migrated shell puts `mfe-navigation` on MUI 5 next to a MUI 9 MFE. Two emotion instances and two `CssBaseline`s can fight over injection order. Test before any partial rollout.

---

## Follow-up tickets created from this work

Both under epic **SAV-4872** (*Projektuose naudojamų bibliotekų periodinis atnaujinimas*), linked to SAV-5648. Split deliberately: one is cosmetic churn, the other is potential render bugs, and they have **different gates**.

| Ticket | Scope | Gate | Priority |
| --- | --- | --- | --- |
| **[SAV-6398](https://jira.registrucentras.lt/jira/browse/SAV-6398)** | Re-enable the 76 deferred stricter lint rules; `tsconfig.json` `moduleResolution` `"Node"` → `"Bundler"` (removes the resolver-alias workaround from LIB-05); records why ESLint 10 is unreachable | **After 2.0.0** — doing it earlier would collide with the theme rewrites in Phase 3 | Minor |
| **[SAV-6399](https://jira.registrucentras.lt/jira/browse/SAV-6399)** | The 6 `react-hooks` v7 findings | **Before the React 18 → 19 migration**, not merely "after updates". React 19 is stricter about cascading renders and effects, so `set-state-in-effect` and `static-components` can surface as real failures rather than warnings. Independent of 2.0.0 — can run in parallel | Major |

SAV-6398 explicitly records the two rules that must stay **off permanently**, so nobody spends effort "fixing" them: `import-x/no-rename-default` (24 hits, all the deliberate `RcSes*` naming convention) and `import-x/no-empty-named-blocks` (6 hits, the intentional MUI module-augmentation blocks).

---

## Jira — deferred

**No Jira sub-tasks are being created for the LIB-xx breakdown.** This document is the working backlog; SAV-5648 and its existing sub-task **`SAV-5654`** (20h, In Progress) remain the only tracking for the work itself, and the 20h above is budgeted against SAV-5654 as-is. Nothing double-counts, because no sibling sub-tasks exist. (SAV-6398 and SAV-6399 above are separate follow-up stories, not part of this ticket's estimate.)

If that changes later:
- Sub-task creation in project SAV requires **`assignee` + `originalEstimate`** (hidden workflow validators).
- Summaries above are already drafted in Lithuanian to match project convention; descriptions can be English.
- `SAV-5654` is an empty placeholder (description = title, zero worklogs, assigned to algada, auto-created 2026-05-06 as the estimate carrier). Repurpose it as LIB-01 rather than adding a 19th ticket alongside it.

Progress is tracked by ticking LIB-xx here and in the PR titles (`SAV-5648: <LIB-xx> …`).
