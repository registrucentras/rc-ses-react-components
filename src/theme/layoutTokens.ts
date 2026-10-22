// CSS variable references. Values and responsive modes live in tokens.css.
const layoutTokens = {
  'column-width': 'var(--rc-layout-column-width)',
  'container-medium-width': 'var(--rc-layout-container-medium-width)',
  'container-narrow-width': 'var(--rc-layout-container-narrow-width)',
  'container-wide-width': 'var(--rc-layout-container-wide-width)',
  'grid-width-lg': 'var(--rc-layout-grid-width-lg)',
  gutter: 'var(--rc-layout-gutter)',
  'outer-container-max-width': 'var(--rc-layout-outer-container-max-width)',
  'outer-padding': 'var(--rc-layout-outer-padding)',
} as const

export { layoutTokens }
export default layoutTokens
