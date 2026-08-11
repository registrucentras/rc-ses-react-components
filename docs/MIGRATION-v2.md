# Migrating to `@registrucentras/rc-ses-react-components` 2.0.0

`2.0.0` updates the library's whole dependency stack: **MUI 5 → 9**, x-date-pickers 7 → 9, Storybook 8 → 10, Vite 6 → 7, ESLint 8 → 9, i18next 23 → 26, date-fns 3 → 4, react-window 1 → 2, react-dropzone 14 → 19.

**React stays on 18.** MUI 9 accepts React 17/18/19, so nothing here forces a React upgrade. The peer range is `^18.3.1 || ^19.0.0`.

## Consumers and where they start from

| Consumer | Current | Notes |
| --- | --- | --- |
| `ses-ui` | 1.3.1 | also picks up everything from §5 — 8 minors of design changes |
| `ses-ui-mfe-host/apps/mfe-host` | ^1.7.1 | §5 applies from 1.7.1 |
| `ses-ui-mfe-host/apps/mfe-navigation` | ^1.7.1 | §5 applies from 1.7.1 |
| `ses-bdar-report-ui` | 1.2.2 | §5 applies in full |

Anyone below 1.11.0 is making **two** jumps at once: the library's own design evolution (§5) and this dependency update (§1–4). Read §5 first if that is you.

---

## 1. Peer dependencies — do this first

```jsonc
"peerDependencies": {
  "@emotion/react":      "^11.13.3",
  "@emotion/styled":     "^11.13.0",
  "@mui/material":       "^9.2.0",   // was ^5.16.7
  "@mui/system":         "^9.2.0",   // was ^5.16.7
  "@mui/x-date-pickers": "^9.10.1",  // was ^7.17.0
  "date-fns":            "^3.6.0 || ^4.0.0",
  "date-fns-tz":         "^3.2.0",
  "react":               "^18.3.1 || ^19.0.0",
  "react-dom":           "^18.3.1 || ^19.0.0",
  "react-hook-form":     "^7.53.2"   // NEW — see below
}
```

**`react-hook-form` is now a peer.** It used to be a dependency, so npm installed it for you. **You must add it to your own `package.json`.** It has to be a single instance — two copies break the form context that `RcSesTextField`, `RcSesSelect`, `RcSesDatepicker` and friends rely on.

**`@emotion/styled` must now be resolvable in your app.** It was previously bundled into the library (33 kB of it). MUI requires it anyway, so you almost certainly have it — but if you were relying on the library carrying it, add it explicitly.

**`date-fns` accepts 3 *or* 4.** No need to migrate date-fns to use 2.0.0.

**`i18next` and `react-i18next` are no longer peers.** They are bundled, so you do not need to install them and do not need matching versions. See §3 for what that means for language switching.

---

## 2. Breaking API changes — these fail the build

### `RcSesSearchInput` — slot props renamed

MUI 9 deleted `InputProps` and `inputProps` from `TextFieldProps`, so the old names had nowhere to map to.

```diff
  <RcSesSearchInput
    slotProps={{
      field: {
-       InputProps: { readOnly: true },
-       inputProps: { maxLength: 20 },
+       slotProps: {
+         input: { readOnly: true },      // the OutlinedInput wrapper
+         htmlInput: { maxLength: 20 },   // the native <input>
+       },
      },
    }}
  />
```

### `RcSesButton` — polymorphic, so `to` comes from `component`

1.x declared a bare `to?: string` on the button, which allowed `to` whether or not a `component` was given. 2.0.0 declares the button the way MUI declares its own `Button`, so `component={Link}` now brings the target's props with it:

```tsx
// still fine - `to` comes from react-router's Link
<RcSesButton component={Link} to={route('cart')}>Cart</RcSesButton>

// no longer type-checks - `to` means nothing on a <button>
<RcSesButton to='/cart'>Cart</RcSesButton>
```

**`React.ComponentProps<typeof RcSesButton>` no longer does what you want.** On a polymorphic component it collapses to the default `'button'` overload, which has no `component`, so a wrapper typed that way fails as soon as it sets `component={Link}` itself. Type such wrappers with `ButtonProps` from `@mui/material` instead:

```diff
- function CartLinkButton(props: React.ComponentProps<typeof RcSesButton>) {
+ function CartLinkButton(props: ButtonProps) {
    return <RcSesButton component={Link} to={route('cart')} {...props} />
  }
```

### `RcSesButton` — `loading` is now MUI's own prop

MUI 6 added a native `loading` prop, so the library stopped declaring its own. The behaviour is unchanged — the custom spinner still renders — but the type is now `boolean | null` rather than `boolean`. Only matters if you were assigning it to a `boolean` variable.

---

## 3. Runtime changes — these do **not** fail the build

The three that follow type-check cleanly and break when the code actually runs. Grep for them.

### A standalone `RcSesTab` now throws

From MUI 9 a `Tab` must be inside a `Tabs`, which provides `RovingTabIndexContext`. Rendering one alone raises:

> `MUI: RovingTabIndexContext is missing. Roving tab index items must be placed within a roving tab index provider.`

```diff
- <RcSesTab label='Details' />
+ <RcSesTabs value={0} onChange={handleChange}>
+   <RcSesTab label='Details' />
+ </RcSesTabs>
```

### Stepper steps are `role="tab"`, not `role="button"`

MUI 9 made `Stepper` a `tablist` and `StepButton` a `tab`. **Any test or query selecting stepper steps by button role will break**, including `getAllByRole('button')` counts that previously included the steps.

```diff
- const steps = screen.getAllByRole('button')
+ const steps = screen.getAllByRole('tab')
```

### Language switching and the library's i18next

The library bundles its own i18next instance, initialised with its own `common` and `input` namespaces, and reads the current language from the cookie named by `ENV_LANGUAGE_COOKIE_NAME`. It does **not** read your app's i18next instance.

This is unchanged from 1.x — recorded here because `i18next` disappearing from the peers makes it look like something changed. Nothing did. Switching language still means setting that cookie; calling `i18n.changeLanguage()` on *your* instance will not move the library's labels.

---

## 4. MUI 9 in your own code

The library is only part of the work: your app's own MUI usage needs the same migration. Run the codemods first — they cover most of it.

```bash
npx @mui/codemod@latest deprecations/all src   # a preset; don't run the ~50 transforms individually
npx @mui/codemod@latest v9.0.0/system-props src
npx @mui/codemod@latest v6.0.0/grid-v2-props src
```

**What a scan of `ses-ui` currently finds** (2026-07-30) — indicative of the shape of the work:

| Pattern | Files | Fix |
| --- | --- | --- |
| system props on `Box`/`Stack`/`Typography`/`Grid`/`Link` | 47 | → `sx` — codemod |
| `<Grid item xs={…}>` | 16 | → `<Grid size={{ xs: … }}>`, drop `item` — codemod, then check `flex`/`flexGrow` hacks by hand |
| `PaperProps` | 5 | → `slotProps.paper` — codemod |
| `inputProps` | 1 | → `slotProps.input` **or** `slotProps.htmlInput` — see the warning below |
| `TransitionComponent` | 1 | → `slots.transition` — codemod |

Good news for `ses-ui`: its own theme has **no** deprecated combined variant+colour class keys, and none of its 32 MUI class references in selector strings were removed in v9.

### Things the codemods get wrong

**Slot names are per-component. Do not apply one rule everywhere.**

| Component | wrapper slot | native `<input>` slot |
| --- | --- | --- |
| `TextField` | `input` | **`htmlInput`** |
| `OutlinedInput` | `root` | **`input`** |

A blanket `inputProps` → `slotProps.htmlInput` rename puts props on the wrong element. `tsc` catches it only for object literals — a `{...spread}` passes silently.

**The codemod skips styled wrappers.** `StepIconComponent` on a `styled(StepLabel)` was left untouched in this library; check any `styled(MuiComponent)` by hand.

**Handler parameters lose their contextual type inside `slotProps`.** `onKeyDown: (event) => …` type-checks under `InputProps` but becomes implicit `any` under `slotProps`, so it needs annotating.

**Check `git diff --stat` rather than the codemod's file count.** The MUI codemods rewrote all 258 files in this repo with CRLF line endings. A `.gitattributes` with `* text=auto eol=lf` neutralises it.

### Silent theme breakage

MUI 9 removed the combined variant+colour classes — `.MuiButton-textPrimary` is now `.MuiButton-text` + `.MuiButton-colorPrimary`. `tsc` catches these as `styleOverrides` **keys**, but **not** as class names inside nested selector strings or `.css` files. Those just stop matching, with no error and no visual difference in the wrong direction.

Worth grepping your own theme for `Mui[A-Za-z]+-(text|contained|outlined|filled|standard)(Primary|Secondary|…)`, plus `MuiTabs-flexContainer` (now `list`) and `MuiLinearProgress-bar1Indeterminate` (removed).

---

## 5. Visual changes when coming from below 1.11.0

Between 1.3.1 and 1.11.0 the library gained **67 new components** and modified 15 existing ones. New components are opt-in — installing 2.0.0 renders none of them until you use them. What *does* change everywhere is the token-level styling:

| Token | before | after |
| --- | --- | --- |
| Button radius | `.1875rem` (3px) | **`0.5rem` (8px)** |
| Input radius | `.1875rem` (3px) | **`.5rem` (8px)** |
| Button focus ring | `.375rem`, 6px offset | `0.75rem`, 8px offset |
| Disabled button | `grey[500]` / `grey[50]` / `grey[400]` | `grey[600]` / `grey[300]` / `grey[600]`, `opacity: 1` |
| Outlined border | `grey[600]` | `grey[300]`, explicit `1px` |

The palette is **purely additive** — no existing colour value changed; only `light`, `ghost`, `overlays` and `common` were added.

For `ses-ui` that is roughly **245 `RcSesButton` + 18 `<Button>`** and **60 `RcSesTextField` + 10 `RcSesSelect` + 6 `RcSesDatepicker`**. Note `ses-ui/src/theme/MuiCard.ts` pins `borderRadius: 0` on 7 of its 9 card variants, so expect square cards containing 8px-radius controls across ~109 `<Card>` usages until the redesign lands.

**If you need to defer that look**, `ses-ui` composes its theme with `createTheme(RcSesTheme, {…})`, so its own keys win. Roughly 5–15 lines pins the old radii until the redesign is ready:

```ts
// src/theme/MuiInputBase.ts
const MuiInputBase: Components['MuiInputBase'] = {
  styleOverrides: { root: { borderRadius: '.1875rem' } },
}
// src/theme/MuiButton.ts — alongside the existing iconSize* overrides
root: { borderRadius: '.1875rem' },
```

Also pin the focus-ring radius on the `::before` pseudo-element if that matters, and the disabled greys if design wants the old ones.

**Also changed between 1.3.1 and 1.11.0:** `form/inputs/Select.tsx` moved to `Select/index.tsx`, `ServiceFormContainer/` became `ServiceFormContainer/AccordionFormContainer/`, and three stepper icons (`ActiveStepIcon`, `CompletedStepIcon`, `PendingStepIcon`) were replaced by `CustomStepIcon`. Deep imports into those paths will break; the barrel export is unaffected.

---

## 6. Checklist

1. Add `react-hook-form` to your own dependencies; confirm `@emotion/styled` is there.
2. Bump `@mui/material`, `@mui/system`, `@mui/x-date-pickers` to `^9`.
3. Remove `i18next` / `react-i18next` if you only had them for this library.
4. Run the three codemods from §4, then read `git diff --stat`.
5. Fix the two compile errors from §2.
6. Grep for the three runtime traps in §3 — nothing will tell you about them otherwise.
7. Audit your theme for removed class names in **selector strings**, not just override keys.
8. If below 1.11.0, decide with design whether to accept the §5 token changes now or pin them.
