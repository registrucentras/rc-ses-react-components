import palette, { common } from '@/theme/palette'

/**
 * Card surface tokens - Figma `Cards/card/*` and `Cards/subcard/*`.
 *
 * The boxed surface lives here rather than in the component that draws it, so
 * anything needing a boxed row reads the same values instead of copying them.
 * `MuiCard` keeps its own radius until `RcSesCard` is deprecated.
 */
const borderWidth = '1px'

const card = {
  borderRadius: '0.75rem',
  gap: { xs: '1rem', md: '1.5rem' },
  padding: { xs: '1.25rem 1.5rem 1.5rem', md: '1.5rem 2rem 2rem' },
}

const subcard = {
  borderRadius: '0.5rem',
  gap: { xs: '0.75rem', md: '1rem' },
  padding: { xs: '1rem', md: '1.25rem 1.5rem' },
}

const themes = {
  brand: {
    backgroundColor: palette.primary[50],
    borderColor: palette.primary[200],
  },
  default: {
    backgroundColor: common.white,
    borderColor: palette.grey[300],
  },
  sunken: {
    backgroundColor: palette.grey[100],
    borderColor: palette.grey[200],
  },
}

export { borderWidth, card, subcard, themes }
export default { borderWidth, card, subcard, themes }
