import { common, error, grey, overlays, primary, secondary, warning } from './palette'

/** Figma Colors: existing literals stay compatible with JS color utilities. */
const { main: primaryMain, ...cyans } = primary
const { main: secondaryMain, ...greens } = secondary
const { main: greyMain, ...neutrals } = grey
const { main: warningMain, ...yellows } = warning
const { main: errorMain, ...red } = error

export const colorPrimitives = {
  cyans,
  greens,
  neutrals,
  yellows,
  red,
  white: common.white,
  overlays: {
    black: overlays.black,
    white: overlays.white,
  },
} as const

/** Light roles reference semantic CSS aliases, with primitive fallback values. */
export const colorTokens = {
  'action-destructive-bg': `var(--rc-color-tokens-action-destructive-bg, ${colorPrimitives.red['600']})`,
  'action-destructive-bg-hover': `var(--rc-color-tokens-action-destructive-bg-hover, ${colorPrimitives.red['700']})`,
  'action-destructive-bg-pressed': `var(--rc-color-tokens-action-destructive-bg-pressed, ${colorPrimitives.red['800']})`,
  'action-destructive-text': `var(--rc-color-tokens-action-destructive-text, ${colorPrimitives.white})`,
  'action-link-text': `var(--rc-color-tokens-action-link-text, ${colorPrimitives.cyans['700']})`,
  'action-link-text-hover': `var(--rc-color-tokens-action-link-text-hover, ${colorPrimitives.cyans['800']})`,
  'action-primary-bg': `var(--rc-color-tokens-action-primary-bg, ${colorPrimitives.cyans['200']})`,
  'action-primary-bg-disabled': `var(--rc-color-tokens-action-primary-bg-disabled, ${colorPrimitives.neutrals['100']})`,
  'action-primary-bg-hover': `var(--rc-color-tokens-action-primary-bg-hover, ${colorPrimitives.cyans['400']})`,
  'action-primary-bg-pressed': `var(--rc-color-tokens-action-primary-bg-pressed, ${colorPrimitives.cyans['500']})`,
  'action-primary-text': `var(--rc-color-tokens-action-primary-text, ${colorPrimitives.cyans['950']})`,
  'action-primary-text-disabled': `var(--rc-color-tokens-action-primary-text-disabled, ${colorPrimitives.neutrals['500']})`,
  'action-secondary-bg': `var(--rc-color-tokens-action-secondary-bg, ${colorPrimitives.white})`,
  'action-secondary-bg-hover': `var(--rc-color-tokens-action-secondary-bg-hover, ${colorPrimitives.neutrals['50']})`,
  'action-secondary-border': `var(--rc-color-tokens-action-secondary-border, ${colorPrimitives.neutrals['400']})`,
  'action-secondary-border-hover': `var(--rc-color-tokens-action-secondary-border-hover, ${colorPrimitives.neutrals['500']})`,
  'action-secondary-text': `var(--rc-color-tokens-action-secondary-text, ${colorPrimitives.neutrals['800']})`,
  'border-brand-subtle': `var(--rc-color-tokens-border-brand-subtle, ${colorPrimitives.cyans['100']})`,
  'border-default': `var(--rc-color-tokens-border-default, ${colorPrimitives.neutrals['300']})`,
  'border-focus': `var(--rc-color-tokens-border-focus, ${colorPrimitives.cyans['500']})`,
  'border-inverse': `var(--rc-color-tokens-border-inverse, ${colorPrimitives.neutrals['950']})`,
  'border-strong': `var(--rc-color-tokens-border-strong, ${colorPrimitives.neutrals['400']})`,
  'border-subtle': `var(--rc-color-tokens-border-subtle, ${colorPrimitives.neutrals['200']})`,
  'control-border': `var(--rc-color-tokens-control-border, ${colorPrimitives.neutrals['500']})`,
  'control-disabled': `var(--rc-color-tokens-control-disabled, ${colorPrimitives.neutrals['200']})`,
  'control-disabled-selected': `var(--rc-color-tokens-control-disabled-selected, ${colorPrimitives.cyans['300']})`,
  'control-foreground': `var(--rc-color-tokens-control-foreground, ${colorPrimitives.white})`,
  'control-selected': `var(--rc-color-tokens-control-selected, ${colorPrimitives.cyans['500']})`,
  'control-selected-hover': `var(--rc-color-tokens-control-selected-hover, ${colorPrimitives.cyans['600']})`,
  'control-unselected': `var(--rc-color-tokens-control-unselected, ${colorPrimitives.neutrals['400']})`,
  'control-unselected-hover': `var(--rc-color-tokens-control-unselected-hover, ${colorPrimitives.neutrals['500']})`,
  'flow-destructive': `var(--rc-color-tokens-flow-destructive, ${colorPrimitives.red['500']})`,
  'flow-edge': `var(--rc-color-tokens-flow-edge, ${colorPrimitives.yellows['400']})`,
  'flow-progress': `var(--rc-color-tokens-flow-progress, ${colorPrimitives.greens['500']})`,
  'status-error-bg': `var(--rc-color-tokens-status-error-bg, ${colorPrimitives.red['100']})`,
  'status-error-border': `var(--rc-color-tokens-status-error-border, ${colorPrimitives.red['500']})`,
  'status-error-icon': `var(--rc-color-tokens-status-error-icon, ${colorPrimitives.red['600']})`,
  'status-error-text': `var(--rc-color-tokens-status-error-text, ${colorPrimitives.red['700']})`,
  'status-info-bg': `var(--rc-color-tokens-status-info-bg, ${colorPrimitives.cyans['100']})`,
  'status-info-border': `var(--rc-color-tokens-status-info-border, ${colorPrimitives.cyans['400']})`,
  'status-info-icon': `var(--rc-color-tokens-status-info-icon, ${colorPrimitives.cyans['500']})`,
  'status-info-text': `var(--rc-color-tokens-status-info-text, ${colorPrimitives.cyans['800']})`,
  'status-success-bg': `var(--rc-color-tokens-status-success-bg, ${colorPrimitives.greens['100']})`,
  'status-success-border': `var(--rc-color-tokens-status-success-border, ${colorPrimitives.greens['500']})`,
  'status-success-icon': `var(--rc-color-tokens-status-success-icon, ${colorPrimitives.greens['600']})`,
  'status-success-text': `var(--rc-color-tokens-status-success-text, ${colorPrimitives.greens['800']})`,
  'status-warning-bg': `var(--rc-color-tokens-status-warning-bg, ${colorPrimitives.yellows['100']})`,
  'status-warning-border': `var(--rc-color-tokens-status-warning-border, ${colorPrimitives.yellows['400']})`,
  'status-warning-icon': `var(--rc-color-tokens-status-warning-icon, ${colorPrimitives.yellows['500']})`,
  'status-warning-text': `var(--rc-color-tokens-status-warning-text, ${colorPrimitives.yellows['800']})`,
  'surface-base': `var(--rc-color-tokens-surface-base, ${colorPrimitives.white})`,
  'surface-brand-subtle': `var(--rc-color-tokens-surface-brand-subtle, ${colorPrimitives.cyans['50']})`,
  'surface-inverse': `var(--rc-color-tokens-surface-inverse, ${colorPrimitives.neutrals['900']})`,
  'surface-muted': `var(--rc-color-tokens-surface-muted, ${colorPrimitives.neutrals['100']})`,
  'surface-raised': `var(--rc-color-tokens-surface-raised, ${colorPrimitives.white})`,
  'surface-sunken': `var(--rc-color-tokens-surface-sunken, ${colorPrimitives.neutrals['50']})`,
  'text-default': `var(--rc-color-tokens-text-default, ${colorPrimitives.neutrals['900']})`,
  'text-disabled': `var(--rc-color-tokens-text-disabled, ${colorPrimitives.neutrals['500']})`,
  'text-inverse': `var(--rc-color-tokens-text-inverse, ${colorPrimitives.white})`,
  'text-link': `var(--rc-color-tokens-text-link, ${colorPrimitives.cyans['700']})`,
  'text-link-hover': `var(--rc-color-tokens-text-link-hover, ${colorPrimitives.cyans['800']})`,
  'text-muted': `var(--rc-color-tokens-text-muted, ${colorPrimitives.neutrals['500']})`,
  'text-secondary': `var(--rc-color-tokens-text-secondary, ${colorPrimitives.neutrals['600']})`,
} as const

export type RcSesColorTokens = { [K in keyof typeof colorTokens]: string }
/** Dark is intentionally absent until its Figma values are supplied. */
export const colorTokenSchemes: { light: RcSesColorTokens; dark?: RcSesColorTokens } = {
  light: colorTokens,
}

export default colorTokens
