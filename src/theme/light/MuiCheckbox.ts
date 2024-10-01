import { Components, decomposeColor } from '@mui/material'

import palette from '../palette'

const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      svg: {
        borderRadius: '.25rem',
      },

      '&:hover': {
        svg: {
          boxShadow: `0px 0px 0px 4px rgba(${decomposeColor(palette.primary['500']).values}, .2)`,

          '.checkbox-stroke': {
            stroke: palette.primary['500'],
          },
        },
      },
    },
  },
}

export default MuiCheckbox
