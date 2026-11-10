import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'

const MuiSwitch: Components['MuiSwitch'] = {
  defaultProps: {
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      width: spacingRoleBasedTokens['space-36'],
      height: spacingRoleBasedTokens['space-20'],
      padding: spacingRoleBasedTokens['space-0'],
      overflow: 'visible',
    },
    switchBase: {
      padding: spacingRoleBasedTokens['space-0'],
      margin: spacingRoleBasedTokens['space-2'],
      transition: 'transform 200ms ease-in-out',

      '@media (prefers-reduced-motion: reduce)': {
        transition: 'none',
      },

      '&:hover': {
        backgroundColor: 'transparent',
      },
      '&:hover + .MuiSwitch-track': {
        backgroundColor: colorTokens['control-unselected-hover'],
      },
      '&.Mui-focusVisible + .MuiSwitch-track': {
        boxShadow: `0 0 0 ${borderTokens['stroke-2']} ${colorTokens['surface-base']}, 0 0 0 ${borderTokens['stroke-4']} ${colorTokens['border-focus']}`,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        backgroundColor: colorTokens['control-disabled'],
        opacity: 1,
      },
      '&.Mui-disabled .MuiSwitch-thumb': {
        color: colorTokens['control-foreground'],
      },

      '&.Mui-checked': {
        transform: `translateX(${spacingRoleBasedTokens['space-16']})`,
        color: colorTokens['control-foreground'],

        '& + .MuiSwitch-track': {
          backgroundColor: colorTokens['control-selected'],
          opacity: 1,
          border: borderTokens['stroke-0'],
        },
        '&:hover + .MuiSwitch-track': {
          backgroundColor: colorTokens['control-selected-hover'],
        },
        '&.Mui-disabled + .MuiSwitch-track': {
          backgroundColor: colorTokens['control-disabled-selected'],
          opacity: 1,
        },
      },
    },
    thumb: {
      boxSizing: 'border-box',
      width: spacingRoleBasedTokens['space-16'],
      height: spacingRoleBasedTokens['space-16'],
      borderRadius: borderTokens['radius-full'],
      backgroundColor: colorTokens['control-foreground'],
      // Figma's thumb shadow has no matching foundation effect token.
      boxShadow: '0 1px 2px 0 #0000002e',
    },
    track: {
      borderRadius: borderTokens['radius-full'],
      backgroundColor: colorTokens['control-unselected'],
      opacity: 1,
      // kept active under prefers-reduced-motion: only the sliding transform is suppressed
      transition: 'background-color 200ms ease-in-out',
    },
  },
}

export default MuiSwitch
