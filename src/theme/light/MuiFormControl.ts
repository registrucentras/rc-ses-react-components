import { Components } from '@mui/material'

import { colorTokens as color } from '../colorTokens'
import { effectTokens as effect } from '../effectTokens'

const MuiFormControl: Components['MuiFormControl'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiFormControlLabel-root': {
        '&.Mui-error': {
          '.MuiCheckbox-root': {
            '.checkbox-stroke': {
              stroke: color['status-error-border'],
            },

            '&:hover': {
              svg: {
                boxShadow: effect['focus-ring-error'],
              },
            },
          },
        },
      },
    },
  },
}

export default MuiFormControl
