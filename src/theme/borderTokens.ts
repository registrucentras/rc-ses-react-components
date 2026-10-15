// CSS variable references. Values and responsive modes live in tokens.css.
const borderTokens = {
  'button-border-radius': 'var(--rc-borders-button-border-radius)',
  'container-border-radius': 'var(--rc-borders-container-border-radius)',
  'radius-aliases-button': 'var(--rc-borders-radius-aliases-button)',
  'radius-aliases-card': 'var(--rc-borders-radius-aliases-card)',
  'radius-aliases-chip': 'var(--rc-borders-radius-aliases-chip)',
  'radius-aliases-input': 'var(--rc-borders-radius-aliases-input)',
  'radius-aliases-list-item': 'var(--rc-borders-radius-aliases-list-item)',
  'radius-aliases-modal': 'var(--rc-borders-radius-aliases-modal)',
  'radius-aliases-pill': 'var(--rc-borders-radius-aliases-pill)',
  'radius-aliases-subcard': 'var(--rc-borders-radius-aliases-subcard)',
  'radius-primitives-0': 'var(--rc-borders-radius-primitives-0)',
  'radius-primitives-10': 'var(--rc-borders-radius-primitives-10)',
  'radius-primitives-12': 'var(--rc-borders-radius-primitives-12)',
  'radius-primitives-16': 'var(--rc-borders-radius-primitives-16)',
  'radius-primitives-2': 'var(--rc-borders-radius-primitives-2)',
  'radius-primitives-20': 'var(--rc-borders-radius-primitives-20)',
  'radius-primitives-24': 'var(--rc-borders-radius-primitives-24)',
  'radius-primitives-4': 'var(--rc-borders-radius-primitives-4)',
  'radius-primitives-6': 'var(--rc-borders-radius-primitives-6)',
  'radius-primitives-8': 'var(--rc-borders-radius-primitives-8)',
  'radius-primitives-full': 'var(--rc-borders-radius-primitives-full)',
  'stroke-aliases-border-accent': 'var(--rc-borders-stroke-aliases-border-accent)',
  'stroke-aliases-border-default': 'var(--rc-borders-stroke-aliases-border-default)',
  'stroke-aliases-border-focus': 'var(--rc-borders-stroke-aliases-border-focus)',
  'stroke-primitives-0': 'var(--rc-borders-stroke-primitives-0)',
  'stroke-primitives-1': 'var(--rc-borders-stroke-primitives-1)',
  'stroke-primitives-2': 'var(--rc-borders-stroke-primitives-2)',
  'stroke-primitives-4': 'var(--rc-borders-stroke-primitives-4)',
} as const

export { borderTokens }
export default borderTokens
