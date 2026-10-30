import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'

const MuiRadio: Components['MuiRadio'] = {
  defaultProps: {
    checkedIcon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          data-name='outer'
          x='0.5'
          y='0.5'
          width='23'
          height='23'
          rx='11.5'
          fill={colorTokens['control-selected']}
          stroke={colorTokens['control-selected']}
        />
        <circle
          data-name='inner'
          cx='12'
          cy='12'
          r='5'
          fill={colorTokens['control-foreground']}
        />
      </svg>
    ),
    icon: (
      <svg
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect
          data-name='inner'
          x='1'
          y='1'
          width='22'
          height='22'
          rx='11'
          fill={colorTokens['surface-base']}
        />
        <rect
          data-name='outer'
          x='1'
          y='1'
          width='22'
          height='22'
          rx='11'
          stroke={colorTokens['control-unselected']}
          strokeWidth={borderTokens['stroke-2']}
        />
      </svg>
    ),
  },
  styleOverrides: {
    root: {
      borderWidth: borderTokens['stroke-2'],
      margin: spacingRoleBasedTokens['space-4'],
      padding: spacingRoleBasedTokens['space-4'],

      '&.Mui-disabled': {
        '[data-name="inner"]': {
          fill: colorTokens['control-disabled'],
        },
      },
    },
  },
}

export default MuiRadio
