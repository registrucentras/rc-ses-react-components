import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'

// Mobile stays flat (no border or radius): AccordionFormContainer lays the
// sections edge to edge on a muted page background below md.
const MuiAccordion: Components['MuiAccordion'] = {
  defaultProps: {
    elevation: 0,
    disableGutters: true,
    // MUI's rounded variant sets its own first/last-of-type radii, which outrank
    // the radius below.
    square: true,
    sx: {
      borderWidth: {
        xs: 0,
        md: borderTokens['stroke-1'],
      },
      borderRadius: {
        xs: 0,
        md: borderTokens['radius-card'],
      },
      margin: {
        xs: `${spacingRoleBasedTokens['space-8']} 0`,
        md: `${spacingRoleBasedTokens['space-16']} 0`,
      },
    },
  },
  styleOverrides: {
    root: {
      backgroundColor: colorTokens['surface-base'],
      borderColor: colorTokens['border-default'],
      borderStyle: 'solid',
      padding: 0,

      ':before': {
        content: 'unset',
      },

      // Figma draws keyboard focus on the whole section, not just its header.
      '&:has(.MuiAccordionSummary-root.Mui-focusVisible)': {
        outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
        outlineOffset: `calc(-1 * ${borderTokens['border-focus']})`,
      },

      '&.Mui-disabled': {
        backgroundColor: colorTokens['surface-base'],
      },

      '&.Mui-expanded': {
        '.MuiAccordionSummary-root': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    },
  },
}

export default MuiAccordion
