import type { Components } from '@mui/material'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { effectTokens as effect } from '../effectTokens'

const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      svg: {
        borderRadius: border['radius-4'],
      },

      '&:hover': {
        svg: {
          boxShadow: effect['focus-ring-default'],

          '.checkbox-stroke': {
            stroke: color['control-unselected-hover'],
          },
        },
      },
    },
  },
}

export default MuiCheckbox
