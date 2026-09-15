# Migrating to `@registrucentras/rc-ses-react-components` 2.0.0

`2.0.0` updates the library's dependency stack: **MUI 5 → 9**, x-date-pickers 7 → 9, i18next 23 → 26, date-fns 3 → 4, react-window 1 → 2, react-dropzone 14 → 19, plus tooling (Storybook 8 → 10, Vite 6 → 7, ESLint 8 → 9).

**React stays on 18.** MUI 9 accepts React 17/18/19, so nothing here forces a React upgrade. The peer range is `^18.3.1 || ^19.0.0`.

Sections 1-4 apply to every consumer. Section 5 applies only if you are upgrading from a 1.x older than 1.11.0 - every token change it lists landed at or before that release, and the 1.x line ended at 1.13.0.

---

## 1. Peer dependencies - do this first

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
  "react-hook-form":     "^7.53.2"   // NEW - see below
}
```

**`react-hook-form` is now a peer.** It used to be a dependency, so npm installed it for you. **Add it to your own `package.json`.** It has to be a single instance - two copies break the form context that `RcSesTextField`, `RcSesSelect`, `RcSesDatepicker` and friends rely on.

**`@emotion/styled` must be resolvable in your app.** It was previously bundled into the library. MUI requires it anyway, so you almost certainly have it - but add it explicitly if you were relying on the library carrying it.

**`date-fns` accepts 3 *or* 4.** You do not need to migrate date-fns to use 2.0.0.

**`i18next` and `react-i18next` are no longer peers.** They are bundled, so you do not need to install them or match versions. See §3 for what that means for language switching.

---

## 2. Breaking API changes - these fail the build

### `RcSesSearchInput` - slot props renamed

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

### `RcSesButton` - polymorphic, so `to` comes from `component`

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

### `RcSesButton` - `loading` is now MUI's own prop

MUI 6 added a native `loading` prop, so the library stopped declaring its own. The behaviour is unchanged - the custom spinner still renders - but the type is now `boolean | null` rather than `boolean`. Only matters if you were assigning it to a `boolean` variable.

---

## 3. Runtime changes - these do **not** fail the build

All three type-check cleanly and break when the code actually runs. Grep for them.

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

### Language switching no longer follows your app's i18next

In 1.x `i18next` was a peer, so the library and your app resolved to the **same** instance. Two things followed from that, and both stop in 2.0.0:

- your `i18n.changeLanguage()` moved the library's labels;
- the library's own `init()` overwrote your `fallbackLng`, `lng`, `supportedLngs` and `resources` as soon as one of its components was imported.

2.0.0 bundles `i18next` and `react-i18next`, so the library runs on its own instance. Your `changeLanguage()` no longer moves its labels, and it no longer clobbers your i18next config.

The library picks its language **once, at import time**, from the cookie named by `ENV_LANGUAGE_COOKIE_NAME` (falling back to `ENV_FRONTEND_DEFAULT_LANG`), using its own `common` and `input` namespaces. The instance is not exported, so switching language means setting that cookie and reloading.

---

## 4. MUI 9 in your own code

The library is only part of the work: your app's own MUI usage needs the same migration. Run the codemods first - they cover most of it.

```bash
npx @mui/codemod@latest deprecations/all src   # a preset; don't run the ~50 transforms individually
npx @mui/codemod@latest v9.0.0/system-props src
npx @mui/codemod@latest v6.0.0/grid-v2-props src
```

What they handle:

| Pattern | Fix |
| --- | --- |
| system props on `Box`/`Stack`/`Typography`/`Grid`/`Link` | → `sx` |
| `<Grid item xs={…}>` | → `<Grid size={{ xs: … }}>`, drop `item`, then check `flex`/`flexGrow` hacks by hand |
| `PaperProps` | → `slotProps.paper` |
| `inputProps` | → `slotProps.input` **or** `slotProps.htmlInput` - see the warning below |
| `TransitionComponent` | → `slots.transition` |

### Things the codemods get wrong

**Slot names are per-component. Do not apply one rule everywhere.**

| Component | wrapper slot | native `<input>` slot |
| --- | --- | --- |
| `TextField` | `input` | **`htmlInput`** |
| `OutlinedInput` | `root` | **`input`** |

A blanket `inputProps` → `slotProps.htmlInput` rename puts props on the wrong element. `tsc` catches it only for object literals - a `{...spread}` passes silently.

**The codemod skips styled wrappers.** `StepIconComponent` on a `styled(StepLabel)` was left untouched in this library; check any `styled(MuiComponent)` by hand.

**Handler parameters lose their contextual type inside `slotProps`.** `onKeyDown: (event) => …` type-checks under `InputProps` but becomes implicit `any` under `slotProps`, so it needs annotating.

**Check `git diff --stat` rather than the codemod's file count.** The MUI codemods rewrite files with CRLF line endings. A `.gitattributes` with `* text=auto eol=lf` neutralises it.

### Silent theme breakage

MUI 9 removed the combined variant+colour classes - `.MuiButton-textPrimary` is now `.MuiButton-text` + `.MuiButton-colorPrimary`. `tsc` catches these as `styleOverrides` **keys**, but **not** as class names inside nested selector strings or `.css` files. Those just stop matching, with no error.

Grep your own theme for `Mui[A-Za-z]+-(text|contained|outlined|filled|standard)(Primary|Secondary|…)`, plus `MuiTabs-flexContainer` (now `list`) and `MuiLinearProgress-bar1Indeterminate` (removed).

---

## 5. Visual changes when coming from a 1.x below 1.11.0

The 1.x line ended at **1.13.0**. Between 1.3.1 and 1.11.0 the library gained **67 new components** and modified 15 existing ones; 1.12.0 and 1.13.0 added two more, plus text-wrapping fixes and a tooltip theme. Your own jump is a subset of that. New components are opt-in - installing 2.0.0 renders none of them until you use them. What *does* change everywhere is the token-level styling:

| Token | before | after | changed in |
| --- | --- | --- | --- |
| Button radius | `.1875rem` (3px) | **`.5rem` (8px)** | 1.4.0 |
| Button focus ring | `.375rem`, 6px offset | `.75rem`, 8px offset | 1.4.0 |
| Input radius | `.1875rem` (3px) | **`.5rem` (8px)** | 1.5.0 |
| Disabled button | `grey[500]` / `grey[50]` / `grey[400]` | `grey[600]` / `grey[300]` / `grey[600]`, `opacity: 1` | ≤ 1.11.0 |
| Outlined border | `grey[600]` | `grey[300]`, explicit `1px` | ≤ 1.11.0 |

**The radii landed earlier than the rest**, so check what you are coming *from*: **on 1.5.0 or later the three radius rows do not apply to you** - 2.0.0 itself leaves the radii alone.

The palette is **purely additive** - no existing colour value changed; only `light`, `ghost`, `overlays` and `common` were added.

These changes are theme-level, so they hit every button and input in your app at once. If your own theme pins `borderRadius: 0` on cards or containers, expect square containers around 8px-radius controls until your design catches up.

**If you need to defer that look**, compose your theme with `createTheme(RcSesTheme, {…})` - your own keys win. A few lines pin the old radii:

```ts
const MuiInputBase: Components['MuiInputBase'] = {
  styleOverrides: { root: { borderRadius: '.1875rem' } },
}
const MuiButton: Components['MuiButton'] = {
  styleOverrides: { root: { borderRadius: '.1875rem' } },
}
```

Pin the focus-ring radius on the `::before` pseudo-element too if that matters, and the disabled greys if design wants the old ones.

**Moved files.** `form/inputs/Select.tsx` → `Select/index.tsx`, `ServiceFormContainer/` → `ServiceFormContainer/AccordionFormContainer/`, and three stepper icons (`ActiveStepIcon`, `CompletedStepIcon`, `PendingStepIcon`) were replaced by `CustomStepIcon`. Deep imports into those paths will break; the barrel export is unaffected.

---

## 6. Checklist

1. Add `react-hook-form` to your own dependencies; confirm `@emotion/styled` is there.
2. Bump `@mui/material`, `@mui/system`, `@mui/x-date-pickers` to `^9`.
3. Remove `i18next` / `react-i18next` if you only had them for this library.
4. Run the three codemods from §4, then read `git diff --stat`.
5. Fix the compile errors from §2.
6. Grep for the three runtime traps in §3 - nothing will tell you about them otherwise.
7. Audit your theme for removed class names in **selector strings**, not just override keys.
8. If below 1.11.0, decide with design whether to accept the §5 token changes now or pin them.
