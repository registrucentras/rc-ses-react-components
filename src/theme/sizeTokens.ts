const sizeTokens = {
  'icon-size-badge': 'var(--rc-icon-size-badge)',
  'icon-size-button': 'var(--rc-icon-size-button)',
  'icon-size-control': 'var(--rc-icon-size-control)',
  'icon-size-feature': 'var(--rc-icon-size-feature)',
  'icon-size-inline': 'var(--rc-icon-size-inline)',
  'icon-size-12': 'var(--rc-icon-size-12)',
  'icon-size-16': 'var(--rc-icon-size-16)',
  'icon-size-20': 'var(--rc-icon-size-20)',
  'icon-size-24': 'var(--rc-icon-size-24)',
  'icon-size-32': 'var(--rc-icon-size-32)',
  'icon-size-8': 'var(--rc-icon-size-8)',
} as const

// Numeric icon size constants for component props (e.g., icon size attribute)
// These correspond to the CSS variable values above
const iconSizeTokens = {
  'icon-size-badge': 12,
  'icon-size-button': 24,
  'icon-size-control': 16,
  'icon-size-feature': 32,
  'icon-size-inline': 16,
  'icon-size-12': 12,
  'icon-size-16': 16,
  'icon-size-20': 20,
  'icon-size-24': 24,
  'icon-size-32': 32,
  'icon-size-8': 8,
} as const

export { sizeTokens, iconSizeTokens }
export default sizeTokens
