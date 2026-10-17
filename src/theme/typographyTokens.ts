import type { CSSProperties } from '@mui/material/styles'

// CSS variable references. Values and responsive modes live in tokens.css.
const typographyTokens = {
  'font-size-body-caption': 'var(--rc-typography-font-size-body-caption)',
  'font-size-body-large': 'var(--rc-typography-font-size-body-large)',
  'font-size-body-lead': 'var(--rc-typography-font-size-body-lead)',
  'font-size-body-micro': 'var(--rc-typography-font-size-body-micro)',
  'font-size-body-regular': 'var(--rc-typography-font-size-body-regular)',
  'font-size-body-small': 'var(--rc-typography-font-size-body-small)',
  'font-size-button-compact': 'var(--rc-typography-font-size-button-compact)',
  'font-size-button-regular': 'var(--rc-typography-font-size-button-regular)',
  'font-size-heading-card-title': 'var(--rc-typography-font-size-heading-card-title)',
  'font-size-heading-h1': 'var(--rc-typography-font-size-heading-h1)',
  'font-size-heading-h2': 'var(--rc-typography-font-size-heading-h2)',
  'font-size-heading-h3': 'var(--rc-typography-font-size-heading-h3)',
  'font-size-heading-h4': 'var(--rc-typography-font-size-heading-h4)',
  'font-size-heading-h5': 'var(--rc-typography-font-size-heading-h5)',
  'line-height-body-caption': 'var(--rc-typography-line-height-body-caption)',
  'line-height-body-large': 'var(--rc-typography-line-height-body-large)',
  'line-height-body-lead': 'var(--rc-typography-line-height-body-lead)',
  'line-height-body-micro': 'var(--rc-typography-line-height-body-micro)',
  'line-height-body-regular': 'var(--rc-typography-line-height-body-regular)',
  'line-height-body-small': 'var(--rc-typography-line-height-body-small)',
  'line-height-button-compact': 'var(--rc-typography-line-height-button-compact)',
  'line-height-button-regular': 'var(--rc-typography-line-height-button-regular)',
  'line-height-heading-card-title': 'var(--rc-typography-line-height-heading-card-title)',
  'line-height-heading-h1': 'var(--rc-typography-line-height-heading-h1)',
  'line-height-heading-h2': 'var(--rc-typography-line-height-heading-h2)',
  'line-height-heading-h3': 'var(--rc-typography-line-height-heading-h3)',
  'line-height-heading-h4': 'var(--rc-typography-line-height-heading-h4)',
  'line-height-heading-h5': 'var(--rc-typography-line-height-heading-h5)',
} as const

export { typographyTokens }
export default typographyTokens

/** Existing MUI variants retain their font attributes; unmatched roles are additive. */
export const typographyRoleVariants = {
  'heading-h1': 'h1',
  'heading-h2': 'h2',
  'heading-h3': 'h3',
  'heading-card-title': 'headingCardTitle',
  'heading-h4': 'h4',
  'heading-h5': 'h5',
  'body-large': 'bodyLarge',
  'body-lead': 'subtitle1',
  'body-regular': 'body1',
  'body-small': 'body2',
  'body-caption': 'caption',
  'body-micro': 'subtitle2',
  'button-regular': 'button',
  'button-compact': 'buttonCompact',
} as const

export type RcSesTypographyRole = keyof typeof typographyRoleVariants
export type RcSesNamedTypographyVariant =
  'headingCardTitle' | 'bodyLarge' | 'buttonCompact'

declare module '@mui/material/styles' {
  interface TypographyVariants {
    headingCardTitle?: CSSProperties
    bodyLarge?: CSSProperties
    buttonCompact?: CSSProperties
  }
  interface TypographyVariantsOptions {
    headingCardTitle?: CSSProperties
    bodyLarge?: CSSProperties
    buttonCompact?: CSSProperties
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    headingCardTitle: true
    bodyLarge: true
    buttonCompact: true
  }
}
