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

/**
 * Card header values. Two of them are departures from the type scale: the title
 * is `h6` at weight 600 rather than 500, and the description is `body2` on a
 * 1.25rem line. The three gaps follow the surrounding components - the row gap
 * matches the card gap and the actions gap matches the footer - rather than a
 * measured token. All six are pending confirmation against the DS.
 */
const header = {
  actionsGap: '0.75rem',
  badgeGap: '0.5rem',
  descriptionLineHeight: '1.25rem',
  gap: '0.25rem',
  rowGap: '1rem',
  titleFontWeight: 600,
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

export { borderWidth, card, header, subcard, themes }
export default { borderWidth, card, header, subcard, themes }
