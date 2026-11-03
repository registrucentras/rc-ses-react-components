import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'

import './tokens.css'
import { typographyTokens } from './typographyTokens'

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
  gap: spacingTokens['spacing-aliases-cards-card-section-gap'],
  footerGap: spacingTokens['spacing-aliases-cards-card-section-gap'],
  padding: spacingTokens['spacing-aliases-cards-card-padding'],
}

const subcard = {
  borderRadius: borderTokens['radius-subcard'],
  gap: spacingTokens['spacing-aliases-cards-subcard-section-gap'],
  footerGap: spacingTokens['spacing-aliases-cards-subcard-section-gap'],
  padding: spacingTokens['spacing-aliases-cards-subcard-padding'],
}

/**
 * Card header values. The title font weight (500) is not yet tokenized.
 * All spacing and typography line-height values use design tokens.
 */
const header = {
  actionsGap: spacingRoleBasedTokens['space-12'],
  badgeGap: spacingRoleBasedTokens['space-8'],
  descriptionLineHeight: typographyTokens['line-height-body-small'],
  gap: spacingTokens['spacing-aliases-cards-card-heading-gap'],
  rowGap: spacingRoleBasedTokens['space-16'],
  titleFontWeight: 500,
}

const footer = {
  gap: spacingTokens['spacing-aliases-button-group-gap'],
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
    borderColor: colorTokens['surface-sunken'],
  },
}

export { borderWidth, card, footer, header, subcard, themes }
export default { borderWidth, card, footer, header, subcard, themes }
