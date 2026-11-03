import { Components } from '@mui/material'

import palette from '../palette'

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
          fill='#06A0D4'
          stroke='#06A0D4'
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
          stroke='#8E959E'
          strokeWidth='2'
        />
      </svg>
    ),
  },
  styleOverrides: {
    root: {
      borderWidth: '2px',
      margin: '5px',
      padding: '4px',

      '&.Mui-disabled': {
        '[data-name="inner"]': {
          fill: palette.grey['200'],
        },
      },
    },
  },
}

export default MuiRadio
