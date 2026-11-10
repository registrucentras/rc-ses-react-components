import { Components } from '@mui/material'

import { colorTokens } from '../colorTokens'

// Figma's error hover halo has no variable; it is a 20% tint of red-600.
const errorHoverHalo =
  '0 0 0 4px color-mix(in srgb, var(--rc-color-red-600) 20%, transparent)'

const MuiFormControl: Components['MuiFormControl'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiFormControlLabel-root': {
        '&.Mui-error': {
          '.MuiCheckbox-root:not(.Mui-disabled)': {
            '& > svg': {
              color: colorTokens['status-error-border'],
            },

            '&:hover': {
              svg: {
                boxShadow: errorHoverHalo,
              },
            },
          },
        },
      },
    },
  },
}

export default MuiFormControl
