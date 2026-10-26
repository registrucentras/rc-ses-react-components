import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorPrimitives, colorTokens } from '../colorTokens'

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
          fill={colorPrimitives.cyans['500']}
          stroke={colorPrimitives.cyans['500']}
        />
        <circle data-name='inner' cx='12' cy='12' r='5' fill='white' />
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
        <rect data-name='inner' x='1' y='1' width='22' height='22' rx='11' fill='white' />
        <rect
          data-name='outer'
          x='1'
          y='1'
          width='22'
          height='22'
          rx='11'
          stroke={colorPrimitives.neutrals['500']}
          strokeWidth='2'
        />
      </svg>
    ),
  },
  styleOverrides: {
    root: {
      borderWidth: borderTokens['stroke-2'],
      margin: '5px',
      padding: '4px',

      '&.Mui-disabled': {
        '[data-name="inner"]': {
          fill: colorTokens['control-disabled'],
        },
        '[data-name="outer"]': {
          stroke: colorTokens['control-disabled'],
        },
      },
    },
  },
}

export default MuiRadio
