import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

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
  borderRadius: borderTokens['radius-card'],
  gap: spacingRoleBasedTokens['gap-lg'],
  footerGap: spacingRoleBasedTokens['gap-sm'],
  padding: spacingRoleBasedTokens['padding-lg'],
}

const subcard = {
  borderRadius: borderTokens['radius-subcard'],
  gap: spacingRoleBasedTokens['gap-md'],
  footerGap: spacingRoleBasedTokens['gap-sm'],
  padding: spacingRoleBasedTokens['padding-md'],
}

/**
 * Card header values. Two of them are departures from the type scale: the title
 * is `h6` at weight 600 rather than 500, and the description is `body2` on a
 * 1.25rem line. The three gaps follow the surrounding components - the row gap
 * matches the card gap and the actions gap matches the footer - rather than a
 * measured token. All six are pending confirmation against the DS.
 */
const header = {
  actionsGap: spacingRoleBasedTokens['gap-md'],
  badgeGap: spacingRoleBasedTokens['gap-sm'],
  descriptionLineHeight: '1.25rem',
  gap: spacingRoleBasedTokens['space-4'],
  rowGap: spacingRoleBasedTokens['gap-lg'],
  titleFontWeight: 600,
}

const footer = {
  gap: spacingRoleBasedTokens['gap-md'],
}

const themes = {
  brand: {
    backgroundColor: colorTokens['surface-brand-subtle'],
    borderColor: colorTokens['action-primary-bg'],
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
