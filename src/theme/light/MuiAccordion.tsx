import { Components, Theme } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'

const MuiAccordion: Components<Theme>['MuiAccordion'] = {
  defaultProps: {
    elevation: 0,
    disableGutters: true,
    // MUI's rounded variant sets its own first/last-of-type radii, which outrank
    // the radius below.
    square: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      borderWidth: borderTokens['stroke-1'],
      borderRadius: borderTokens['radius-card'],
      margin: `${spacingRoleBasedTokens['space-8']} 0`,
      [theme.breakpoints.up('md')]: {
        margin: `${spacingRoleBasedTokens['space-16']} 0`,
      },
      backgroundColor: colorTokens['surface-base'],
      borderColor: colorTokens['border-default'],
      borderStyle: 'solid',
      padding: 0,
      '& > .MuiAccordion-heading': { margin: 0, font: 'inherit' },

      ':before': {
        content: 'unset',
      },

      // Figma draws keyboard focus on the whole section, not just its header.
      '&:has(.MuiAccordionSummary-root.Mui-focusVisible)': {
        outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
        outlineOffset: 0,
      },

      '&.Mui-disabled': {
        backgroundColor: colorTokens['surface-base'],
        opacity: 1,
      },

      '&.Mui-expanded': {
        '.MuiAccordionSummary-root': {
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
        },
      },
    }),
  },
}

export default MuiAccordion
