import { Components, decomposeColor } from '@mui/material'

import palette from '../palette'

const MuiFormControlLabel: Components['MuiFormControl'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '&:hover': {
        '.MuiRadio-root': {
          backgroundColor: `rgba(${decomposeColor(palette.primary['400']).values}, .2)`,

          '[data-name="outer"]': {
            stroke: palette.primary['500'],
          },
        },
      },

      '&:active': {
        '.MuiRadio-root': {
          '[data-name="inner"]': {
            fill: palette.primary['100'],
          },
        },
      },

      '&:focus:not(:active):not(:hover)': {
        '.MuiRadio-root': {
          '&::before': {
            content: '""',
            position: 'absolute',
            background: 'transparent',
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            border: '2px solid',
            borderColor: palette.grey['950'],
            zIndex: 1,
          },
        },
      },
    },
  },
}

export default MuiFormControlLabel
