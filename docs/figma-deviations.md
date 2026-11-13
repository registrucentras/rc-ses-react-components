# Figma deviations

Places where the code intentionally differs from the RC Dizaino sistema Figma file
([GPujqQEuxSUKDUPbYmx7TG](https://www.figma.com/design/GPujqQEuxSUKDUPbYmx7TG/RC-Dizaino-sistema)),
plus open questions for the designer. Figma variable bindings are the source of truth for
token choice; anything the code does differently goes here.

When a PR deviates from Figma, add a row in the same PR. When the designer resolves an item
(Figma updated, or code realigned), remove the row.

## Components

| Component | Figma | Code | Reason | PR |
| --- | --- | --- | --- | --- |
| Datepicker | Selected day `Cyans/500` | `control-selected` (`Cyans/600`) | White on `Cyans/500` is 3.0:1, below the 4.5:1 Figma's accessibility section asks for | #212 |
| Datepicker | Today ring `Cyans/500`, no semantic variable | Local `cyans-500` constant | No semantic role maps to it | #212 |
| Datepicker | No weekend colouring | Weekend days keep `red-600` / `red-200` | Existing behaviour kept | #212 |
| Datepicker | 44px rounded-square day cells | 36px circles | Existing geometry kept | #212 |
| Datepicker | No action bar | Cancel action bar kept | Existing behaviour kept | #212 |
| Datepicker | Month/year link with caret opening Months and Years views | Static month label with double chevrons | Existing behaviour kept; Figma page still marked in progress | #212 |
| Checkbox | `Checkbox-selectable-area`: `Selectable-area/padding-y` / `padding-x` (8/12px), 2px icon frame, 20px icon, `Stack/tight` (8px) gap | Outlined card 16/20/16/14px padding, MUI's 9px checkbox padding, 24px icon, 3px label margin | Legacy geometry kept; realigning moves icon and label, planned as a separate change | #216 |
| Checkbox | Selectable area has no visible border or fill at rest | Outlined card shows `surface-sunken` fill and `border-strong` border at rest | Legacy appearance kept | #216 |
| Checkbox | Hover halo `#50c9f3` / error hover halo `#c84838` at 20%, no variables | Local `color-mix` constants of `cyans-400` / `red-600` at 20% | No semantic role maps to them | #216 |
| Radio | Pressed fill `Cyans/100` | Local `cyans-100` constant | No semantic role maps to it | #216 |
| StepCard | Final footer price label `Neutrals/500` | `text-secondary` (`Neutrals/600`) | `Neutrals/500` is 3.0:1 on white, below 4.5:1 | #210 |
| Quantity input | No segment hover state | Segment hover keeps the existing `neutrals-200` tint via a local constant | Existing behaviour kept; no semantic role matches | #223 |
| Button | Button v2 has four variants: Primary, Secondary, Link, Error | Other MUI colour/variant combinations (contained grey, dark, secondary, warning; outlined primary, secondary, warning, error, light, ghost; the `text` variant) keep legacy primitives | Existing API kept; no Figma variant or action role to bind | #205 |
| ServiceLinks | Service-list-item (Trailing=Arrow) has `Service-list-item/padding-x` (12/16px), a bottom `Border/subtle` stroke on each row and a 16px arrow | No horizontal padding, dividers between rows only, 20px bold arrow | Existing geometry kept; rows sit flush with the card content they are used in | #235 |
| ServiceLinks | Hover fills the row with `Surface/sunken`; Selected uses `Surface/brand-subtle`; Focus is a 2px inside `Border/focus` stroke | Hover tints the label and arrow `text-link-hover` and nudges the arrow; no Selected state; focus is a 2px outline outside the row | Existing behaviour kept; a hover fill without horizontal padding would touch the text | #235 |
| ServiceLinks | Description line, Leading icon tile, Actions trailing and the mobile stacked layout | Not supported; label and arrow only | Out of scope for the token rebind | #235 |
| Modal | Mobile Modal-window stacks the actions full-width, primary on top, with `Card/footer-buttons-gap` (16px) | Actions stay in a row on mobile | Mobile action stacking left out of the token rebind | #229 |
| Side-nav | `.Side-nav-row` has no hover state | Clickable rest rows keep the existing `neutrals-50` hover tint via a local constant | Existing behaviour kept; no semantic role matches | #234 |
| Side-nav | Mobile pill bar has no scroll indicator | An overflowing pill bar keeps its scroll track (`neutrals-200`) and thumb (`neutrals-400`) via local constants | Existing behaviour kept; no semantic role matches | #234 |

## Open questions

| Topic | Question | Raised in |
| --- | --- | --- |
| Spacing aliases | Overlapping groups: `Card/*` vs `Cards/card/*`, `Subcard/*` vs `Cards/subcard/*`. Code prefers the responsive `Cards/*` group when a variant binds both. Which group is current? | #215 |
| Spacing roles | `padding-*` / `gap-*` roles exist in tokens but no component checked so far binds them, and the Figma Spacing page documents only primitives and aliases. Are they meant for use? | #215 |
| Icon sizes | `tokens.css` sets the button and control icon roles to 20px, while buttons in code use 24px icons (e.g. StepCard arrows). Which is intended? | #210 |
| Bottom sheet values | Figma leaves the sheet shadow (`0 -4px 24px #0000002e`), the sheet fill (`#ffffff`) and the title colour (`#101619`) unbound. Code uses a local shadow constant, `surface-base` and `text-default` (`#1f2733`). Should these be bound to variables (e.g. an upward elevation effect), and is the title meant to be `Text/default`? | #217 |
| Stepper active label weight | The `.Stepper-item-horizontal` Active variant sets the label at weight 500, while the assembled Horizontal-stepper overrides the active label to 700 (the previous code's weight). Code follows the variant (500). Which is intended? | #227 |
| Toggle thumb shadow | Figma leaves the thumb shadow (`0 1px 2px #0000002e`) unbound; code uses a local literal. Should it be an effect variable? | #226 |
| Radio error states | Figma's Radio set has Error and Error hover variants (`Status/Error/border` outline, red fill when selected, red-600 halo), but radios have no error state in practice and the code has none. Can those variants be removed from Figma? | #214 |
| Font weights | Figma has `font-weight/*` variables (Pagination binds `font-weight/body-small`), but the exported tokens contain only font size and line height. Should the next export include weights? | #232 |
| Primitive-bound states | Several component states bind primitives with no semantic role: Datepicker today ring (`Cyans/500`), Radio pressed (`Cyans/100`), Checkbox hover halos, Quantity input segment hover, and all Pagination states (`Neutrals/50` to `Neutrals/800`). Should these get semantic roles, or are primitives intended for component-specific states? | #212, #216, #223, #232 |
| Card header title | The DS Card-header binds `Heading/Card title` (18/24, 20/28 from 900px), while the Paslaugos product screens use other values. Which should card headers default to, and should the product values become a named variant? | #225 |
| Button legacy variants | Several MUI colour/variant combinations have no Button v2 variant (contained grey, dark, secondary, warning; outlined primary, secondary, warning, error, light, ghost; the `text` variant). Are they deprecated, or should they get Figma variants? | #205 |
