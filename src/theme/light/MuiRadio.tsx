import { Components } from '@mui/material'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'

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
          fill={color['control-selected']}
          stroke={color['control-selected']}
        />
        <circle data-name='inner' cx='12' cy='12' r='5' fill={color['surface-base']} />
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
          fill={color['surface-base']}
        />
        <rect
          data-name='outer'
          x='1'
          y='1'
          width='22'
          height='22'
          rx='11'
          stroke={color['control-unselected']}
          strokeWidth='2'
        />
      </svg>
    ),
  },
  styleOverrides: {
    root: {
      borderWidth: border['stroke-2'],
      margin: '.3125rem',
      padding: space['space-4'],

      '&.Mui-disabled': {
        '[data-name="inner"]': {
          fill: color['control-disabled'],
        },
      },
    },
  },
}

export default MuiRadio
