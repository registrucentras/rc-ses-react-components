import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingTokens } from '@/theme/spacingTokens'

import './tokens.css'

/**
 * Card surface tokens - Figma `Cards/card/*` and `Cards/subcard/*`.
 *
 * The boxed surface lives here rather than in the component that draws it, so
 * anything needing a boxed row reads the same values instead of copying them.
 * `MuiCard` keeps its own radius until `RcSesCard` is deprecated.
 */
const borderWidth = borderTokens['stroke-1']

const card = {
  borderRadius: borderTokens['radius-6'],
  gap: {
    xs: spacingTokens['spacing-primitives-16'],
    md: spacingTokens['spacing-primitives-24'],
  },
  footerGap: spacingTokens['spacing-primitives-8'],
  padding: `${spacingTokens['spacing-primitives-24']} ${spacingTokens['spacing-primitives-24']}`,
}

const subcard = {
  borderRadius: borderTokens['radius-4'],
  gap: {
    xs: spacingTokens['spacing-primitives-12'],
    md: spacingTokens['spacing-primitives-16'],
  },
  footerGap: spacingTokens['spacing-primitives-8'],
  padding: {
    xs: spacingTokens['spacing-primitives-16'],
    md: `${spacingTokens['spacing-primitives-20']} ${spacingTokens['spacing-primitives-24']}`,
  },
}

/**
 * Card header values. Two of them are departures from the type scale: the title
 * is `h6` at weight 600 rather than 500, and the description is `body2` on a
 * 1.25rem line. The three gaps follow the surrounding components - the row gap
 * matches the card gap and the actions gap matches the footer - rather than a
 * measured token. All six are pending confirmation against the DS.
 */
const header = {
  actionsGap: spacingTokens['spacing-primitives-12'],
  badgeGap: spacingTokens['spacing-primitives-8'],
  descriptionLineHeight: spacingTokens['spacing-primitives-20'],
  gap: spacingTokens['spacing-primitives-4'],
  rowGap: spacingTokens['spacing-primitives-16'],
  titleFontWeight: 600,
}

const footer = {
  gap: spacingTokens['spacing-primitives-12'],
}

const themes = {
  brand: {
    backgroundColor: colorTokens['surface-brand-subtle'],
    borderColor: colorTokens['border-brand-subtle'],
  },
  default: {
    backgroundColor: colorTokens['surface-base'],
    borderColor: colorTokens['border-default'],
  },
  sunken: {
    backgroundColor: colorTokens['surface-sunken'],
    borderColor: colorTokens['border-subtle'],
  },
}

export { borderWidth, card, footer, header, subcard, themes }
export default { borderWidth, card, footer, header, subcard, themes }
