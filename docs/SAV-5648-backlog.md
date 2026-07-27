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

| Phase | Hours | Spent |
| --- | --- | --- |
| 0 — Safety net | 2.5 | — |
| 1 — Hygiene + peers | 0.75 → **1.75** | LIB-03 done |
| 2 — Toolchain | 3.25 | — |
| 3 — MUI 5 → 9 | 8.25 | — |
| 4 — Runtime majors | 2.25 | — |
| 5 — Release | 3.0 | — |
| **Total** | **21.0** | |

Phase 1 grew by 1h when LIB-03 split: the `react-hook-form` peer move turned out to be coupled to the build's externals config and to the library's i18n initialisation, so it became **LIB-03b** rather than shipping inside a packaging commit. Running total **21h** against the 20h budget.

**The one assumption that breaks this:** LIB-09's 3h is *review*, and it presupposes LIB-01 produced a working visual baseline. If Chromatic isn't procured, there is nothing to diff 39 themed slots against and that 3h buys nothing — the theme verification then falls back to manual page-by-page checking, which is neither 3h nor agent-compressible. **LIB-01 is the load-bearing task in this budget.**

---

## Backlog

Dependencies are strict unless marked ∥ (parallelisable).

### Phase 0 — Safety net

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-01** | Vizualinės regresijos bazinės linijos sukūrimas (Chromatic / test-runner) | **1.5h** | — |
| **LIB-02** | Storybook istorijų aprėpties užpildymas temos komponentams | **1h** | LIB-01 ∥ |

**LIB-01** — `@chromatic-com/storybook` is registered in `.storybook/main.ts` but **no workflow publishes a baseline**, so there is currently no visual regression net at all. Add a Chromatic workflow, or a `@storybook/test-runner` + `axe-playwright` snapshot job (both already in `devDependencies`). Capture the baseline on `develop` **before any dependency changes**. Also record `npm ls --all > docs/baseline-tree.txt`.
*DoD:* CI job produces a reviewable visual diff on every PR; baseline captured at 1.11.0.

**LIB-02** — 48 stories cover ~50 components, but the risk surface is the **39 themed `Mui*` slots**. Audit which slots have no story and add them — `MuiButton` (388 lines) and `MuiAlert` (219 lines) first, then `MuiInputBase`, `MuiAutocomplete`, `MuiPagination`, `MuiStepper`, `MuiPickersLayout`, `MuiTable*`.
*DoD:* every slot in `src/theme/light/` is exercised by at least one story.

### Phase 1 — Hygiene + peers

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-03** | ✅ Nenaudojamų priklausomybių išėmimas ir deps/peers pertvarkymas | **0.5h** | — |
| **LIB-03b** | Externals konfigūracijos sutvarkymas (`react-hook-form` → peer) | **1h** | LIB-01 |
| **LIB-04** | Saugių minor versijų atnaujinimas | **0.25h** | LIB-03 ∥ |

**LIB-03** — ✅ **Done 2026-07-27.** Removed `axios`, `notistack`, `@fontsource/public-sans`, `@types/react-helmet` (zero imports, verified across `src/` *and* config files). Moved `react-router-dom` → `devDependencies` (used only by `src/App.tsx`, `src/main.tsx`, `src/examples/**`), which takes the router 6 → 7 major off the critical path. Widened all 11 peers from exact pins to caret ranges, plus `react`/`react-dom` → `^18.3.1 || ^19.0.0`.

Two things discovered during execution that were **not** in the original plan:

1. **Every peer is now also pinned exactly in `devDependencies`.** None of the 11 peers had a devDep pin — they were auto-installed by npm at their exact declared versions. Since `build:lib` runs `npm i`, widening the peer ranges alone would have let npm resolve them upward on the next build, and four of them (`date-fns`, `date-fns-tz`, `i18next`, `react-i18next`) are **bundled into `dist`** — so a silent major could have shipped inside the artifact. The devDep pins make the build environment reproducible and are what keep peer widening safe. Verified: zero version drift after `npm i`.
2. **`import/no-extraneous-dependencies` needed its allowlist extended** with `src/App.tsx`, `src/main.tsx`, `src/examples/**`. The rule correctly flagged the router move; those four files are demo-only. **Port this to the flat config in LIB-05.**

*Verification:* lint clean · 29 files / 193 tests pass · `build:lib` clean · **shipped ESM bundle byte-identical** (400 037 bytes before and after, no change to the externals list) — a pure packaging change with zero runtime impact.

**LIB-03b** — the deferred half of LIB-03. `vite.config.lib.ts` derives its `external` array from **`Object.keys(pkg.dependencies)`**, so moving `react-hook-form` to `peerDependencies` would cause it to be **bundled** — the opposite of the intent. Fixing that means adding `...Object.keys(pkg.peerDependencies)` to `external`, which simultaneously externalises `date-fns`, `date-fns-tz`, `i18next` and `react-i18next` — all currently bundled.

That is a **behaviour change, not a packaging change**, because `src/i18n/i18n.ts` calls `i18n.use(initReactI18next).init({...})` at import time and is pulled into the library entry graph as a side effect by `FormControlWrapper/index.tsx` and `PhoneInputFormControl/index.tsx`. Today the library initialises its **own bundled** i18next with its own `common`/`input` resources and syncs language via cookie. Externalising i18next would make that `init()` call apply to the **consumer's shared instance**, overwriting `fallbackLng`, `lng`, `supportedLngs` and `resources`. Needs LIB-01's visual/behavioural baseline and an explicit decision: *is the library's i18n self-contained or consumer-provided?* Do not fold this back into a packaging commit.

**LIB-04** — `vitest` 4.1.x, `@vitest/coverage-v8`, `jsdom` 29, `prettier`, `@emotion/*` 11.14, eslint-plugin patch bumps.

### Phase 2 — Toolchain

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-05** | ESLint 9 + flat config migracija, airbnb → airbnb-extended | **2h** | LIB-04 |
| **LIB-06** | TypeScript 5.9 atnaujinimas | **0.25h** | LIB-05 |
| **LIB-07** | Storybook 8 → 10 ir Vite 6 → 7 atnaujinimas | **1h** | LIB-06 |

**LIB-05** — `.eslintrc.cjs` → `eslint.config.js`. **ESLint 10 is not reachable**: `eslint-plugin-import`, `-jsx-a11y` and `-react` all cap at `^9`. `eslint-config-airbnb@19.0.4` peers `^7 || ^8` and `-typescript@18` peers `^8.56.0`, so both must go — replace with **`eslint-config-airbnb-extended@3.1.1`** (flat config, peers `^9.0.0`). Port all 11 rule customisations verbatim, plus the `@` → `./src` resolver alias and `react.version: detect`. Use `@eslint/eslintrc` `FlatCompat` only as a temporary shim.
*DoD:* `npm run lint` clean; **zero changes under `src/` beyond autofix churn** — review separately from anything touching components.

**LIB-07** — `npx storybook@latest upgrade` runs the addon migrations; `@storybook/test` folds into `storybook/test` in 9+. Keep `test-runner` and `addon-a11y` working, since LIB-01 may depend on them.

### Phase 3 — MUI 5 → 9

| ID | Summary (LT, for Jira) | Est. | Depends |
| --- | --- | --- | --- |
| **LIB-08a** | MUI 5 → 6 migracija | **0.75h** | LIB-07 |
| **LIB-08b** | MUI 6 → 7 migracija (Grid, slots/slotProps) | **2h** | LIB-08a |
| **LIB-08c** | MUI 7 → 9 migracija | **1.5h** | LIB-08b |
| **LIB-09** | Temos perrašymų (39 `Mui*` slots) suderinimas su MUI 9 | **3h** | LIB-08c ∥ |
| **LIB-10** | `@mui/x-date-pickers` 7 → 9 atnaujinimas | **1h** | LIB-08c |

There is **no MUI v8** — majors are 5, 6, 7, 9. Run `npx @mui/codemod@latest` per hop, **one commit per hop** so a bisect is possible.

**LIB-08b** is the largest hop:
- **Grid** — legacy `<Grid item xs={12} md={6}>` in 5 files: `layout/ServiceFormActions.tsx`, `layout/ServiceFormContainer/AccordionFormContainer/index.tsx` + `components/AccordionCollapseControls.tsx`, `examples/SingleStepForm/components/ObjectIdentifierSearchModal.tsx`. In v7 old `Grid` → `GridLegacy`; new `Grid` drops `item` for `size={{ xs: 12, md: 6 }}`. Codemod handles most; the flex hacks (`flex: '0 0 270px'`, `flexGrow: 1`) need manual review.
- **slots/slotProps** — `InputProps={{...}}` in `form/inputs/Select/index.tsx` (×2), `SearchInput/index.tsx`, `SearchableField.tsx`, `PhoneInputFormControl/index.tsx` + `components/AutocompleteInput.tsx` → `slotProps.input`.

**LIB-08c** — read the official v9 migration guide first; it is newer than any local knowledge. `@mui/codemod@9.1.0` ships the v9 transforms. v9 adds `@mui/material-pigment-css` as an optional peer — **we are not adopting Pigment CSS**. MUI 9 peers accept `react ^17 || ^18 || ^19`, so **no React 19 needed**.

**LIB-09** — the effort sink. All 39 files in `src/theme/light/` use `defaultProps` + `styleOverrides` per slot; `MuiButton.tsx` (388 lines) and `MuiAlert.tsx` (219 lines) dominate.
*DoD:* LIB-01 visual diff reviewed **slot by slot**; every intentional change listed in the PR, every unintentional one fixed.

**LIB-10** — `x-date-pickers@9` peers `@mui/material ^7.3.0 || ^9.0.0`. Verify the `PickerValidDateLookup` module augmentation in `src/library/index.ts:62` still exists under v9. Touch points: `theme/light/MuiPickersLayout.ts`, `form/inputs/Datepicker/index.tsx`.

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
**LIB-16** — must cover: MUI 9 now required in the host app; `react-hook-form` is a peer; `react-router-dom` no longer provided; removed/renamed props; the radius token changes (3px → 8px on buttons and inputs). SAV-6098 cannot be planned without this.
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

## Jira — deferred

**No Jira tickets are being created for this breakdown.** This document is the working backlog; SAV-5648 and its existing sub-task **`SAV-5654`** (20h, In Progress) remain the only tracking, and the 20h above is budgeted against SAV-5654 as-is. Nothing double-counts, because no sibling sub-tasks exist.

If that changes later:
- Sub-task creation in project SAV requires **`assignee` + `originalEstimate`** (hidden workflow validators).
- Summaries above are already drafted in Lithuanian to match project convention; descriptions can be English.
- `SAV-5654` is an empty placeholder (description = title, zero worklogs, assigned to algada, auto-created 2026-05-06 as the estimate carrier). Repurpose it as LIB-01 rather than adding a 19th ticket alongside it.

Progress is tracked by ticking LIB-xx here and in the PR titles (`SAV-5648: <LIB-xx> …`).
