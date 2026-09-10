# SAV-5648 — Dependency update plan (`@registrucentras/rc-ses-react-components`)

**Ticket:** [SAV-5648](https://jira.registrucentras.lt/jira/browse/SAV-5648) — *ses react komponentų bibliotekos priklausomybių atnaujinimas*
**Analysis:** [SAV-5647](https://jira.registrucentras.lt/jira/browse/SAV-5647) (done) · **Epic:** SAV-4872 · **Fix version:** NS_1.0.25 · **Estimate:** 20 SP
**Follow-up:** [SAV-6098](https://jira.registrucentras.lt/jira/browse/SAV-6098) (ses-ui adopts the new lib) → blocks [SAV-6284](https://jira.registrucentras.lt/jira/browse/SAV-6284)
**Branch:** `feature/SAV-5648-dependency-update` (exists, currently identical to `develop`)

> **Execution plan: [`SAV-5648-backlog.md`](./SAV-5648-backlog.md)** — the ordered task list (LIB-01 … LIB-18). This document is the underlying analysis.
>
> Scope: the **library repo only**. Consumer adoption is SAV-6098 and the follow-ups in [§9](#9-consumer-handoff-out-of-scope-here). **Release model: single big-bang `2.0.0`** combined with the new `ses-ui` design release — §10's incremental recommendation is superseded.

---

## 1. Baseline (verified 2026-07-27)

Measured on `feature/SAV-5648-dependency-update` @ `b6fae0a`, library version **1.11.0**:

| Check | Result |
| --- | --- |
| `npm run lint` | ✅ clean, exit 0 |
| `npm run test:run` | ✅ 29 files / 193 tests pass (~4 min) |
| Node / npm | v22.22.0 / 10.9.4 (CI pins Node 22) |

**Codebase size:** 239 `.tsx` + 46 `.ts` in `src/`; ~50 exported components; 48 Storybook stories; 28 test files; **~2 000 LOC of MUI theme overrides across 39 `Mui*` component slots** in `src/theme/light/`.

That last number is the single biggest driver of effort in this ticket — see [§4](#4-phase-3--mui-5--6--7--9-the-hard-part).

---

## 2. What actually needs updating

Current pins vs. latest (queried from the npm registry 2026-07-27):

### peerDependencies — exact-pinned today, which is the root problem

| Package | Pinned | Latest | Majors to cross |
| --- | --- | --- | --- |
| `@mui/material` | `5.16.7` | **9.2.0** | 5 → 6 → 7 → 9 |
| `@mui/system` | `5.16.7` | **9.2.0** | ↑ same |
| `@mui/x-date-pickers` | `7.17.0` | **9.10.1** | 7 → 8 → 9 |
| `react` / `react-dom` | `18.3.1` | **19.2.8** | 18 → 19 |
| `i18next` | `23.15.1` | **26.3.6** | 23 → 26 |
| `react-i18next` | `14.1.3` | **17.0.11** | 14 → 17 |
| `date-fns` | `3.6.0` | **4.4.0** | 3 → 4 |
| `date-fns-tz` | `3.1.3` | 3.2.0 | minor |
| `@emotion/react` / `styled` | `11.13.3` / `11.13.0` | 11.14.x | minor |

### dependencies

| Package | Pinned | Latest | Note |
| --- | --- | --- | --- |
| `react-router-dom` | `6.26.2` | **7.18.1** | **Not used by any exported component** — see [§3.3](#33-dependency-hygiene-do-this-first-its-free) |
| `react-dropzone` | `14.3.5` | 15.0.0 | major; used by `RcSesFileDropzone` |
| `react-window` | `^1.8.11` | **2.2.7** | major; used by `PhoneInputFormControl` virtualised listbox |
| `uuid` | `^11.0.3` | 14.0.0 | major, but API is stable (`v4`) |
| `react-hook-form` | `7.53.2` | 7.75.0 | minor — but **should be a peer**, see §3.3 |
| `axios` | `^1.7.2` | 1.16.0 | **unused — remove** |
| `notistack` | `^3.0.1` | 3.0.2 | **unused — remove** |
| `@fontsource/public-sans` | `^5.0.18` | 5.2.x | **unused — remove** (host apps load Public Sans from Google Fonts) |

### devDependencies — the toolchain

| Package | Pinned | Latest | Target here |
| --- | --- | --- | --- |
| `eslint` | `^8.56.0` | 10.8.0 | **9.x** (10 is blocked, see §3.2) |
| `@typescript-eslint/*` | `^7.13.0` | 8.65.0 | 8.x (via `typescript-eslint` flat package) |
| `eslint-config-airbnb` + `-typescript` | `19.0.4` / `18.0.0` | *stale* | **replace** — see §3.2 |
| `eslint-plugin-react-hooks` | `^4.6.2` | 7.1.1 | 7.x (needed for React 19 rules) |
| `storybook` + `@storybook/*` | `^8.1.9` | 10.5.5 | 10.x |
| `typescript` | `^5.4.5` | 7.0.2 | **5.9.x** (TS 6/7 is a separate ticket) |
| `vite` | `^6.2.5` | 8.1.5 | 7.x, then evaluate 8 |
| `vitest` / `@vitest/coverage-v8` | `^4.0.15` | 4.1.5 | 4.1.x (minor) |
| `jsdom` | `^27.3.0` | 29.1.1 | 29.x |
| `@types/react` / `-dom` | `^18.3.3` | 19.2.x | bump with React (§5) |
| `@types/react-helmet` | `^6.1.11` | — | **unused — remove** |

---

## 3. Three findings that change the shape of the work

### 3.1 There is no MUI v8 — the path is 5 → 6 → 7 → 9

`npm view @mui/material versions` returns majors **5, 6, 7, 9** only. Release dates: v6 2024-08-27, v7 2025-03-26, v9 2026-04-07.

**MUI v9 peers accept `react ^17 || ^18 || ^19`.** This is the most important fact in this document: **the MUI upgrade does not require React 19.** The two can and should be sequenced separately, which is what makes this ticket tractable.

`@mui/x-date-pickers@9` peers `@mui/material ^7.3.0 || ^9.0.0` — so pickers 9 is reachable from MUI 7 as well, giving an intermediate checkpoint.

### 3.2 ESLint 10 is not reachable; ESLint 9 requires dropping airbnb

The current `.eslintrc.cjs` extends `airbnb` + `airbnb-typescript`. Peer ranges as of today:

| Package | Latest | `peerDependencies.eslint` |
| --- | --- | --- |
| `eslint-config-airbnb` | 19.0.4 | `^7.32.0 \|\| ^8.2.0` ← **blocks 9 and 10** |
| `eslint-config-airbnb-typescript` | 18.0.0 | `^8.56.0` ← **blocks 9** |
| `eslint-plugin-import` | 2.32.0 | `… \|\| ^9` ← blocks 10 |
| `eslint-plugin-jsx-a11y` | 6.10.2 | `… \|\| ^9` ← blocks 10 |
| `eslint-plugin-react` | 7.37.5 | `… \|\| ^9.7` ← blocks 10 |
| `@typescript-eslint/*` | 8.65.0 | `^8.57.0 \|\| ^9 \|\| ^10` |
| `eslint-config-airbnb-extended` | 3.1.1 | `^9.0.0` |

So: **target ESLint 9 + flat config**, and replace the two airbnb packages with **`eslint-config-airbnb-extended`** (community flat-config port of the airbnb ruleset, ESLint 9 only). ESLint 10 goes on the backlog until `eslint-plugin-import` / `-react` / `-jsx-a11y` catch up.

The alternative — drop airbnb entirely for `typescript-eslint` recommended + `eslint-plugin-react` — produces a much larger lint diff and loses ~200 rules the team has been coding against. Not recommended for this ticket.

### 3.3 Dependency hygiene — do this first, it's free

Verified by grepping `src/`:

- **`axios`, `notistack`, `@fontsource/public-sans`, `@types/react-helmet` have zero imports.** Dead weight in every consumer's tree. Delete.
- **`react-router-dom` is imported only by `src/App.tsx`, `src/main.tsx` and `src/examples/**`** — the demo app, none of which ships in `dist/`. It is currently in `dependencies`, forcing every consumer to install React Router. **Move to `devDependencies`.** This alone removes the react-router 6 → 7 major from the critical path.
- **`react-hook-form` is in `dependencies`** but the form components take a `control` from the consumer's form instance. Two copies of RHF in one bundle = broken context. **Move to `peerDependencies` (`^7.53.2`).** This is technically a breaking change for consumers, which is fine — we are releasing 2.0.0.
- **All peerDependencies are exact-pinned** (`"react": "18.3.1"`, not `"^18.3.1"`). **Widen every peer to a range** — this was step 2 in the SAV-5647 analysis and it is the highest value/lowest risk change in the whole ticket.

  Precision on who this actually blocks (measured 2026-07-27): **`ses-ui` is *not* peer-blocked.** Its deps match the library's exact peers byte for byte — MUI 5.16.7, `@mui/system` 5.16.7, x-date-pickers 7.17.0, react 18.3.1, i18next 23.15.1, react-i18next 14.1.3, date-fns 3.6.0, emotion 11.13.3/11.13.0. It could adopt 1.11.0 today. Its 1.3.1 pin is a *visual* freeze, not a dependency conflict — see [§10](#10-sequencing-decision-incremental-not-big-bang).

  The MFE apps *are* exposed: `mfe-host` and `mfe-navigation` declare `@mui/material: ^5.16.3`, which permits 5.18.x and would then violate the library's exact `5.16.7` peer. Their lockfiles currently resolve to exactly 5.16.7, so this is a latent hazard a fresh `npm i` would expose rather than a present break.

---

## 4. Phase plan

Each phase is one PR into `develop`, each independently green on `lint` + `test:run` + `build:lib`. Do not batch them.

### Phase 0 — Safety net (blocking prerequisite)

The current net is thin: 193 tests over ~50 components, and **there is no Chromatic CI workflow** — `@chromatic-com/storybook` is registered in `.storybook/main.ts` but nothing publishes a baseline. A 2 000-LOC theme override rewrite without visual regression testing will ship broken styling.

1. Add a Chromatic workflow (or `@storybook/test-runner` + `axe-playwright` snapshot job — both packages are already in `devDependencies`) and capture a baseline on `develop` **before** touching any dependency.
2. Confirm the 48 stories cover the 39 themed `Mui*` slots; add stories for any slot with no story.
3. Record the baseline `npm ls --all > docs/baseline-tree.txt` for later diffing.

**Exit:** a visual baseline exists that a reviewer can diff against.

### Phase 1 — Hygiene + peer widening

1. Remove `axios`, `notistack`, `@fontsource/public-sans`, `@types/react-helmet`.
2. Move `react-router-dom` → `devDependencies`; move `react-hook-form` → `peerDependencies` (`^7.53.2`) **and** `devDependencies`.
3. Widen all peers to ranges, still MUI 5 / React 18 at this point:
   ```jsonc
   "react":      "^18.3.1 || ^19.0.0",
   "react-dom":  "^18.3.1 || ^19.0.0",
   "@mui/material": "^5.16.7",
   "@mui/system":   "^5.16.7",
   "@mui/x-date-pickers": "^7.17.0",
   "date-fns": "^3.6.0 || ^4.0.0",
   "i18next": "^23.15.1",
   "react-i18next": "^14.1.3"
   ```
4. Bump the safe minors: `vitest` 4.1.x, `@vitest/coverage-v8`, `jsdom` 29, `prettier`, `@emotion/*` 11.14, `eslint-plugin-*` patch-level.

**Exit:** green; `dist/` diff is styling-neutral. Ship as **1.12.0** — this closes the latent peer hazard for `mfe-host` / `mfe-navigation` (§3.3) and drops four dead packages from every consumer's tree. Note that SAV-6098 does **not** need to wait for it: `ses-ui` can adopt the already-published 1.11.0 today (§10).

### Phase 2 — Lint + TypeScript toolchain

1. `.eslintrc.cjs` → `eslint.config.js` flat config. Use `@eslint/eslintrc`'s `FlatCompat` only as a temporary shim for any plugin without flat exports.
2. `eslint` 8 → 9; `@typescript-eslint/*` 7 → 8 (switch to the unified `typescript-eslint` package); `eslint-config-airbnb` + `-typescript` → `eslint-config-airbnb-extended`; `eslint-plugin-react-hooks` 4 → 7.
3. Port the 11 rule customisations from `.eslintrc.cjs` verbatim (`prettier/prettier`, `react/react-in-jsx-scope`, `react/require-default-props`, `linebreak-style`, `no-underscore-dangle`, `no-param-reassign`, `react/jsx-props-no-spreading`, `react/function-component-definition`, `import/no-extraneous-dependencies`) plus the `@` → `./src` resolver alias and `react.version: detect`.
4. `typescript` → 5.9.x. Storybook 8 → 10 (`npx storybook@latest upgrade` runs the addon migrations; `@storybook/test` is folded into `storybook/test` in 9+). `vite` 6 → 7.

**Exit:** green, **zero `src/` behaviour changes** — this PR should be config + lint-fix churn only. Review it separately from anything that touches components.

### Phase 3 — MUI 5 → 6 → 7 → 9 (the hard part)

Run `npx @mui/codemod@latest` per hop; commit each hop separately so a bisect is possible.

**5 → 6:** `v6.0.0/*` codemods. Watch for `styled` engine changes and the CSS-variables theme (`cssVariables: true` is opt-in — **do not enable it in this ticket**).

**6 → 7:** the largest hop for this codebase.
- **Grid.** `<Grid item xs={12} md={6}>` (v5 API) appears in 5 files — `layout/ServiceFormActions.tsx`, `layout/ServiceFormContainer/AccordionFormContainer/index.tsx` + `components/AccordionCollapseControls.tsx`, `examples/SingleStepForm/components/ObjectIdentifierSearchModal.tsx`. In v7 the old `Grid` is renamed `GridLegacy` and the new `Grid` drops `item` in favour of `size={{ xs: 12, md: 6 }}`. Codemod handles most of it; the flex-basis hacks (`flex: '0 0 270px'`, `flexGrow: 1`) need manual review.
- **slots/slotProps.** `InputProps={{...}}` appears in `form/inputs/Select/index.tsx` (×2), `SearchInput/index.tsx`, `SearchableField.tsx`, `PhoneInputFormControl/index.tsx` + `components/AutocompleteInput.tsx` — migrate to `slotProps.input`. Same for any `components` / `componentsProps`.
- **Deep imports.** Verify nothing imports below the documented entry points.

**7 → 9:** read the official v9 migration guide before starting — it is newer than any local knowledge and `@mui/codemod@9.1.0` ships the v9 transforms. Note that v9 introduces `@mui/material-pigment-css` as an optional peer; we are **not** adopting Pigment CSS in this ticket.

**Theme overrides — expect this to dominate the phase.** All 39 files in `src/theme/light/` use `defaultProps` + `styleOverrides` per component slot. `MuiButton.tsx` (388 lines) and `MuiAlert.tsx` (219 lines) are the two to budget most time for. `MuiPickersLayout.ts` moves with x-date-pickers, not Material.

**x-date-pickers 7 → 9** alongside. `src/library/index.ts` declares the `PickerValidDateLookup` module augmentation for `date-fns` — verify that interface still exists under v9. `src/theme/light/MuiPickersLayout.ts` and `form/inputs/Datepicker/index.tsx` are the touch points.

**Exit:** green **and** a Chromatic diff reviewed slot by slot against the Phase 0 baseline. Every intentional visual change gets a line in the PR description; every unintentional one gets fixed.

### Phase 4 — i18n + date-fns

- `i18next` 23 → 26, `react-i18next` 14 → 17. `react-i18next@17` peers `i18next >= 26.2.0` and `typescript ^5 || ^6 || ^7` — compatible with TS 5.9. Touch point: `src/i18n/i18n.ts`.
- `date-fns` 3 → 4 (+ `date-fns-tz` 3.2.0). Usage is light: `parseISO`, `fromZonedTime`, the `Locale` type and `enUS`/`lt` locale imports in `src/i18n/i18n.ts`, `form/inputs/Datepicker/index.tsx`, `src/main.tsx`. Verify the `Locale` type export path and locale subpath imports (`date-fns/locale/lt`) still resolve; v4's timezone story moves to `@date-fns/tz` but we do not need it.
- Remaining runtime majors: `react-dropzone` 14 → 15 (`RcSesFileDropzone`), `react-window` 1 → 2 (**API rewrite** — `PhoneInputFormControl/components/ListboxComponent.tsx` + `OuterElementType.tsx`; budget real time), `uuid` 11 → 14 (11 call sites, `v4` API unchanged).

**Exit:** green.

### Phase 5 — Release 2.0.0

1. Bump to `2.0.0` — peer changes and the `react-hook-form` peer move are breaking for consumers.
2. Write `docs/MIGRATION-v2.md`: MUI 5 → 9 required in the host app, `react-hook-form` now a peer, `react-router-dom` no longer provided, removed props. Consumers need this to do SAV-6098.
3. Publish a `2.0.0-rc.0` prerelease first and have SAV-6098 validate against it before cutting the final tag — the `build-and-publish.yml` workflow publishes on GitHub release, so an rc tag is the natural fit.
4. Deploy Storybook (`deploy-storybook.yml`) so consumers have live docs.

---

## 5. React 19 — deliberately deferred, and here is why

**Do not require React 19 in this ticket. Widen the peer range to `^18.3.1 || ^19.0.0` and stop there.**

`ses-ui-mfe-host/apps/mfe-host/src/index.ejs` loads **react and react-dom as SystemJS import-map singletons pinned to 18.3.1 from jsDelivr**, for both local and deployed environments, and `webpack.config.js` sets `externals: /^@rc-ses\/.+/` (single-spa's default config additionally externalises react/react-dom). So:

- Every MFE in the shell — `mfe-navigation`, `ses-bdar-report-ui` (9104), the demo providers (9101/9102/9103) — **shares one React instance at 18.3.1**.
- Forcing React 19 in the library means bumping the import map and every MFE **in lockstep, in a single deploy**, across four+ repos. That is a separate epic, not a line item in SAV-5648.
- MUI 9 accepts React 18, so nothing in this ticket needs React 19.

MUI and emotion, by contrast, are **bundled per MFE** (not in the import map), so the MUI 9 rollout *can* proceed MFE by MFE. One thing to test: `mfe-navigation` on MUI 5 and a service MFE on MUI 9 coexisting on the same page — two emotion instances plus two `CssBaseline`s can fight over injection order. Verify before rolling out partially.

Recommended follow-up ticket: *"React 18 → 19 across the MFE graph"*, sequenced after SAV-6098.

---

## 6. Risk register

| Risk | Impact | Mitigation |
| --- | --- | --- |
| 2 000 LOC of theme overrides silently break styling | **High** | Phase 0 visual baseline is a hard prerequisite; review Chromatic diffs per slot |
| No Chromatic CI today | **High** | Phase 0 |
| 193 tests / ~50 components — thin unit coverage | Medium | Lean on Storybook + a11y test-runner, not unit tests, for the MUI hop |
| `react-window` 1 → 2 API rewrite | Medium | Isolate to the phone-input listbox; 2 files |
| `eslint-config-airbnb-extended` is community-maintained | Medium | It is the only ESLint 9 path that keeps the ruleset; alternative is dropping airbnb |
| MUI 9 knowledge is newer than local docs | Medium | Read the official v9 migration guide at the start of Phase 3; rely on `@mui/codemod@9.1.0` |
| Consumers are 4–9 minors behind (1.2.2 / 1.3.1 / 1.7.1 vs 1.11.0) | Medium | Track 1 (§10) closes the gap against published 1.11.0 in parallel, before 2.0.0 lands |
| Bundling the design gap with the MUI major makes `ses-ui` regressions unattributable | **High** | Three-track sequencing (§10) — MUI 9 becomes the only variable in the 2.0.0 pass |
| Radius tokens (3px → 8px) land on non-redesigned `ses-ui` pages — square cards with 8px buttons/inputs | **High** | Temporary token pin in `ses-ui`'s own theme (§10); removed at the redesign milestone. Not fixed by delaying the release |
| Mixed MUI majors across MFEs during rollout | Medium | Test `mfe-navigation` (MUI 5) + a MUI 9 MFE on one page; coordinate in SAV-6098 |
| ESLint 10 wanted but unreachable | Low | Document as backlog; note the three blocking plugins |
| Phase 3 balloons past the 20 SP estimate | Medium | Phases 1 and 2 ship independently as 1.12.0, so partial delivery still has value |

---

## 7. Explicitly out of scope

- **React 18 → 19** as a requirement (§5) — peer range widening only.
- **ESLint 10** (§3.2) — blocked by three plugins.
- **TypeScript 6/7** — stay on 5.9.x; TS 6 is its own ticket.
- **MUI CSS variables** (`cssVariables: true`) and **Pigment CSS** — new features, not upgrades.
- **`rc-ses-vue-components` / `rc-ses-angular-components`** — early-stage (v0.4.x), no in-workspace consumers, separate tickets.
- **Consumer repos** — SAV-6098 and follow-ups (§9).

---

## 8. Definition of done

- [ ] Phase 0 visual baseline exists in CI
- [ ] `npm run lint` clean under ESLint 9 flat config
- [ ] `npm run test:run` — 193+ tests pass
- [ ] `npm run build:lib` clean, including the `tsconfig.check-dist.json` pass
- [ ] `npm run storybook-build` clean; Chromatic diff reviewed, every visual change intentional and listed in the PR
- [ ] `npm outdated` shows no remaining major gaps except the documented deferrals (React 19, ESLint 10, TS 6/7)
- [ ] `docs/MIGRATION-v2.md` written
- [ ] `2.0.0-rc.0` published and validated by a consumer before the `2.0.0` tag
- [ ] Acceptance criterion from the ticket met: *"Pilnai veikianti funkcinė dalis (apimtyje iki versijų atnaujinimo)"* — no functional change beyond the version bumps

---

## 9. Consumer handoff (out of scope here)

Current pins of `@registrucentras/rc-ses-react-components`:

| Consumer | Pinned | Gap to 1.11.0 | Ticket |
| --- | --- | --- | --- |
| `ses-ui` | `1.3.1` (exact) | 8 minors | **SAV-6098** (+ SAV-5916 Button `loading` prop) |
| `ses-ui-mfe-host/apps/mfe-host` | `^1.7.1` | 4 minors | needs a ticket |
| `ses-ui-mfe-host/apps/mfe-navigation` | `^1.7.1` | 4 minors | needs a ticket |
| `services/ses-bdar-report-service/ses-bdar-report-ui` | `1.2.2` (exact) | 9 minors | needs a ticket |

SAV-6098's premise — *"SES UI projekte yra užfiksuota (nenaujinama) SES react bibliotekos versija"* — is confirmed as a **visual** freeze, not a dependency conflict. `ses-ui` mirrors the library's exact peers, so it can adopt the already-published **1.11.0 today** with no library release and no peer work. It will still need its own MUI 5 → 9 hop later, in its own tree.

---

## 10. Sequencing analysis (superseded — see below)

> ⚠️ **Superseded 2026-07-27.** The team chose a **single big-bang `2.0.0`**, combined with the new `ses-ui` design release. The deciding fact, which this section did not have: **the new `ses-ui` design is already planned against the latest component library**, with the missing components to be created. Interim adoption of 1.11.0 would therefore mean migrating `ses-ui` twice for one outcome, and the temporary token pin below would be built only to be deleted.
>
> The execution plan is **[`SAV-5648-backlog.md`](./SAV-5648-backlog.md)**. This section is retained for the measurements and the reasoning, which remain valid — particularly the token-clash table, which now becomes **content for the `MIGRATION-v2.md` release notes (LIB-16)** rather than something to work around.

The analysis as originally written:

**Decision: release incrementally. Do not hold everything for one 2.0.0 followed by a single full-regression pass on the consumers.**

### The measurement that decides it

`git diff 0e97f66..HEAD` (1.3.1 → 1.11.0, 2026-03-09 → 2026-07-22):

| Measure | Value |
| --- | --- |
| Files **added** under `src/components` | **67** |
| Files **modified** | **15** |
| Deleted / renamed | 4 / 2 |
| `src/theme` diff | 11 files, **+318 / −46** |
| **Dependency or peer changes** | **zero** |

Four and a half months of work, ~95% of it new components. The "new design" the ticket warns about is overwhelmingly **additive** — 46 deleted theme lines in total.

So the two risks are cleanly separable, and only one of them belongs to this ticket:

- **Risk A — version/design gap (1.3.1 → 1.11.0).** Needs design sign-off and visual regression, on a precisely known surface (below). **Zero dependency work. No release needed. Can start today.**
- **Risk B — MUI 5 → 9 (2.0.0).** 2 000 LOC of theme overrides, no visual baseline yet (Phase 0).

Bundling them means that when `ses-ui` renders wrong, the cause is ambiguous between three variables — intended redesign, MUI 9 regression, or a theme override the codemod mangled — across 39 themed slots with no baseline to diff. A "full regression pass" on a 3-variable change is not one cycle; it is one cycle plus N attribution rounds.

The schedule argument points the same way: **SAV-6284 is blocked by SAV-6098, and SAV-6098 does not need MUI 9.** Big-bang makes the new services layout wait on Phase 3 — the least estimable part of the ticket.

### Exact regression surface for Risk A (SAV-6098's test plan)

**15 modified components:**
`common/Accordion/hooks/useAccordionController.tsx` · `common/Breadcrumbs` · `common/Button` · `form/components/FormControlWrapper` · `form/inputs/Checkbox` · `CheckboxFormControl` · `FileDropzone` · `FileUpload` · `NumberStepper` · `PhoneInputFormControl` (+ `AutocompleteInput`, `RowComponent`) · `RadioButtonGroup` · `layout/ServiceHeader` · `layout/ServiceWizardStepper`

**8 theme files** — highest risk, because these restyle *every* MUI usage in `ses-ui`, not only library components:
`MuiAlert` · `MuiAutocomplete` · `MuiButton` · `MuiCard` · `MuiInputBase` · `MuiPagination` · `palette` · `themePalette` (+ new `MuiOutlinedInput`, `MuiSwitch`)

**Moved / removed — check for deep imports:**
`form/inputs/Select.tsx` → `Select/index.tsx` · `layout/ServiceFormContainer/` → `ServiceFormContainer/AccordionFormContainer/` · 3 deleted stepper icons (`ActiveStepIcon`, `CompletedStepIcon`, `PendingStepIcon` → `CustomStepIcon`)

**Public API:** `src/library/index.ts` **+80 / −23** — diff the export list before upgrading.

### The mixed-design objection — valid, and how it is actually solved

> *"If we bump the lib in ses-ui, some places get new design and some old — design changes don't cover all of ses-ui yet."*

**The objection is correct on the facts.** The library changed corner-radius tokens between 1.3.1 and 1.11.0:

| Token | 1.3.1 | 1.11.0 |
| --- | --- | --- |
| Button radius | `.1875rem` (3px) | **`0.5rem` (8px)** |
| Input radius (`MuiInputBase.root`) | `.1875rem` (3px) | **`.5rem` (8px)** |
| Button focus ring | `.375rem`, 6px offset | `0.75rem`, 8px offset |
| Disabled button | `grey[500]` / `grey[50]` / `grey[400]` | `grey[600]` / `grey[300]` / `grey[600]`, `opacity: 1` |
| Outlined default border | `grey[600]` | `grey[300]`, explicit `1px` |

Blast radius in `ses-ui`: **245 `RcSesButton` + 18 `<Button>`**, **60 `RcSesTextField` + 10 `RcSesSelect` + 6 `RcSesDatepicker`**. `ses-ui/src/theme/MuiButton.ts` overrides only `iconSize*` — it does **not** set radius, and there is no local `MuiInputBase` override, so **nothing is shielded**.

Meanwhile `ses-ui/src/theme/MuiCard.ts` (248 lines) pins **`borderRadius: 0`** on 7 of its 9 variants. Result: **square cards containing 8px-radius buttons and inputs**, across 109 `<Card>` usages. That is a concrete incoherence, not a hypothetical.

What the objection does **not** cover:
- **The palette is purely additive** — no existing color value changed; only new `light` / `ghost` / `overlays` / `common` tokens were added.
- **The 67 new components are opt-in.** Installing 1.11.0 renders a `RcSesBadge` or `RcSesSegmentedControl` on exactly zero pages until `ses-ui` code uses them.

**A big-bang 2.0.0 does not fix this.** The radius change is already merged in the library; 2.0.0 carries it too, plus MUI 9's own visual deltas. Waiting defers the clash, bundles it with a second independent source of visual change, and blocks SAV-6284 meanwhile.

**The fix: temporary token pin in `ses-ui`.** `ses-ui` does `createTheme(RcSesTheme, {...})` — a deep merge in which **ses-ui's keys win**. So it can adopt 1.11.0 while holding the old look:

```ts
// src/theme/MuiInputBase.ts  (new file, register in theme/index.tsx)
const MuiInputBase: Components['MuiInputBase'] = {
  styleOverrides: { root: { borderRadius: '.1875rem' } },
}

// src/theme/MuiButton.ts  (alongside the existing iconSize* overrides)
root: { borderRadius: '.1875rem' },
```

Delete the pins when the redesign milestone lands. This yields the 67 new components for SAV-6284, 8 minors of bug fixes and dependency alignment, with **no visible change to existing pages** — and turns *"when do rounded corners ship"* into a one-line decision scheduled independently of both the library version and MUI 9.

Caveats, stated honestly:
- The library also sets the focus-ring radius inside a `::before` pseudo-element — pin that too if it matters.
- The disabled-state colour shift needs its own line if design wants the old greys.
- Budget an afternoon diffing Storybook 1.3.1 vs 1.11.0 to build the pin list; expect **5–15 lines**. It is deliberate, documented, temporary divergence with a clear removal trigger — not free.
- **It does not help** if the concern is that merely *having* new components available invites piecemeal adoption. That is design governance on SAV-6284's scope; no release strategy addresses it, and holding the npm version is a weak proxy for it.

### Three tracks — 1 and 2 run in parallel

| Track | Work | Output | Depends on |
| --- | --- | --- | --- |
| **1** | **SAV-6098:** `ses-ui` 1.3.1 → **1.11.0** (already on npm as `latest`), **+ temporary radius/disabled token pin** (above) | unblocks **SAV-6284**, no visible change to existing pages | nothing — start now |
| **2** | **SAV-5648 Phases 0–2:** visual baseline, hygiene, ESLint 9 / TS / Storybook 10 | **1.12.0** | nothing — no rendering change, cannot collide with Track 1 |
| **3** | **SAV-5648 Phases 3–5:** MUI 5 → 9 | `2.0.0-rc.0` → `2.0.0` | Track 2 (Phase 0 baseline is mandatory) |

Then: consumers adopt 2.0.0 — with `ses-ui` already on 1.11/1.12, **MUI 9 is the only variable in that regression pass**. Tickets still needed for `mfe-host`, `mfe-navigation`, `ses-bdar-report-ui` to reach 1.12.0.

**SAV-5916** (remove the custom Button `loading` prop) is unlocked by Track 3, not before — `src/components/common/Button/index.tsx` carries `// TODO: use MUI's loading prop when MUI lib upgrade is done`, waiting on exactly this. It is a breaking change, so it belongs in 2.0.0.

Separate epic, after all three tracks: **React 18 → 19 across the MFE graph + import map** (§5).

### The honest cost of incremental

`ses-ui` absorbs two regression cycles rather than one. If QA capacity is the binding constraint, that is a real cost. It is still the right call: the second cycle is much cheaper *because* the first already happened (one variable, not three), and Track 1 delivers SAV-6284's unblock months earlier regardless.

**One item to verify explicitly rather than assume:** during a partial 2.0.0 rollout, `mfe-navigation` (MUI 5) and a service MFE (MUI 9) coexist on one page. MUI and emotion are bundled per-MFE — only `@rc-ses/*`, `react` and `react-dom` are shared (§5) — so this should work, but two emotion instances and two `CssBaseline`s can fight over style injection order. Test it before committing to a partial rollout.

---

## Appendix — commands

```bash
cd C:/dev/ses-component-library/github/rc-ses-react-components

# baseline
npm run lint && npm run test:run && npm run build:lib
npm outdated
npm ls --all > docs/baseline-tree.txt

# MUI hops (one commit per hop)
npx @mui/codemod@latest v6.0.0/preset-safe src
npx @mui/codemod@latest v7.0.0/preset-safe src
npx @mui/codemod@latest v9.0.0/preset-safe src   # confirm transform name against @mui/codemod@9.1.0

# storybook
npx storybook@latest upgrade
npm run storybook-build && npm run storybook-test

# verify what actually ships
npm pack --dry-run
```
