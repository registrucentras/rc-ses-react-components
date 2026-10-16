import { common, error, grey, overlays, primary, secondary, warning } from './palette'

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
  overlays: { black: overlays.black, white: overlays.white },
} as const

const colorTokens = {
  'action-destructive-bg': 'var(--rc-color-action-destructive-bg)',
  'action-destructive-bg-hover': 'var(--rc-color-action-destructive-bg-hover)',
  'action-destructive-bg-pressed': 'var(--rc-color-action-destructive-bg-pressed)',
  'action-destructive-text': 'var(--rc-color-action-destructive-text)',
  'action-link-text': 'var(--rc-color-action-link-text)',
  'action-link-text-hover': 'var(--rc-color-action-link-text-hover)',
  'action-primary-bg': 'var(--rc-color-action-primary-bg)',
  'action-primary-bg-disabled': 'var(--rc-color-action-primary-bg-disabled)',
  'action-primary-bg-hover': 'var(--rc-color-action-primary-bg-hover)',
  'action-primary-bg-pressed': 'var(--rc-color-action-primary-bg-pressed)',
  'action-primary-text': 'var(--rc-color-action-primary-text)',
  'action-primary-text-disabled': 'var(--rc-color-action-primary-text-disabled)',
  'action-secondary-bg': 'var(--rc-color-action-secondary-bg)',
  'action-secondary-bg-hover': 'var(--rc-color-action-secondary-bg-hover)',
  'action-secondary-border': 'var(--rc-color-action-secondary-border)',
  'action-secondary-border-hover': 'var(--rc-color-action-secondary-border-hover)',
  'action-secondary-text': 'var(--rc-color-action-secondary-text)',
  'border-brand-subtle': 'var(--rc-color-border-brand-subtle)',
  'border-default': 'var(--rc-color-border-default)',
  'border-focus': 'var(--rc-color-border-focus)',
  'border-inverse': 'var(--rc-color-border-inverse)',
  'border-strong': 'var(--rc-color-border-strong)',
  'border-subtle': 'var(--rc-color-border-subtle)',
  'control-border': 'var(--rc-color-control-border)',
  'control-disabled': 'var(--rc-color-control-disabled)',
  'control-disabled-selected': 'var(--rc-color-control-disabled-selected)',
  'control-foreground': 'var(--rc-color-control-foreground)',
  'control-selected': 'var(--rc-color-control-selected)',
  'control-selected-hover': 'var(--rc-color-control-selected-hover)',
  'control-unselected': 'var(--rc-color-control-unselected)',
  'control-unselected-hover': 'var(--rc-color-control-unselected-hover)',
  'flow-destructive': 'var(--rc-color-flow-destructive)',
  'flow-edge': 'var(--rc-color-flow-edge)',
  'flow-progress': 'var(--rc-color-flow-progress)',
  'status-error-bg': 'var(--rc-color-status-error-bg)',
  'status-error-border': 'var(--rc-color-status-error-border)',
  'status-error-icon': 'var(--rc-color-status-error-icon)',
  'status-error-text': 'var(--rc-color-status-error-text)',
  'status-info-bg': 'var(--rc-color-status-info-bg)',
  'status-info-border': 'var(--rc-color-status-info-border)',
  'status-info-icon': 'var(--rc-color-status-info-icon)',
  'status-info-text': 'var(--rc-color-status-info-text)',
  'status-success-bg': 'var(--rc-color-status-success-bg)',
  'status-success-border': 'var(--rc-color-status-success-border)',
  'status-success-icon': 'var(--rc-color-status-success-icon)',
  'status-success-text': 'var(--rc-color-status-success-text)',
  'status-warning-bg': 'var(--rc-color-status-warning-bg)',
  'status-warning-border': 'var(--rc-color-status-warning-border)',
  'status-warning-icon': 'var(--rc-color-status-warning-icon)',
  'status-warning-text': 'var(--rc-color-status-warning-text)',
  'surface-base': 'var(--rc-color-surface-base)',
  'surface-brand-subtle': 'var(--rc-color-surface-brand-subtle)',
  'surface-inverse': 'var(--rc-color-surface-inverse)',
  'surface-muted': 'var(--rc-color-surface-muted)',
  'surface-raised': 'var(--rc-color-surface-raised)',
  'surface-sunken': 'var(--rc-color-surface-sunken)',
  'text-default': 'var(--rc-color-text-default)',
  'text-disabled': 'var(--rc-color-text-disabled)',
  'text-inverse': 'var(--rc-color-text-inverse)',
  'text-link': 'var(--rc-color-text-link)',
  'text-link-hover': 'var(--rc-color-text-link-hover)',
  'text-muted': 'var(--rc-color-text-muted)',
  'text-secondary': 'var(--rc-color-text-secondary)',
} as const

export type RcSesColorTokens = { [K in keyof typeof colorTokens]: string }

export const colorTokenSchemes: { light: RcSesColorTokens; dark?: RcSesColorTokens } = {
  light: colorTokens,
}

export { colorTokens }
export default colorTokens
