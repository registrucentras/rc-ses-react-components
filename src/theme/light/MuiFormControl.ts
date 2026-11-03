import { Components } from '@mui/material'

import { colorTokens } from '../colorTokens'

const MuiFormControl: Components['MuiFormControl'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiFormControlLabel-root': {
        '&.Mui-error': {
          '.MuiCheckbox-root': {
            '.checkbox-stroke': {
              stroke: colorTokens['status-error-border'],
            },

            '&:hover': {
              svg: {
                boxShadow: `0 0 0 4px color-mix(in srgb, ${colorTokens['status-error-border']} 20%, transparent)`,
              },
            },
          },
        },
      },
    },
  },
}

export default MuiFormControl
