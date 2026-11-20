import { colorTokens } from './colorTokens'

// Figma has no backdrop variables; the designer defined them as semantic surfaces
// mixed with transparency (figma-deviations Q14).
const backdropTokens = {
  'backdrop-dark': `color-mix(in srgb, ${colorTokens['surface-inverse']} 55%, transparent)`,
  'backdrop-light': `color-mix(in srgb, ${colorTokens['surface-base']} 70%, transparent)`,
} as const

export { backdropTokens }
export default backdropTokens
