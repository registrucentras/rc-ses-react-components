import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
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
            '--rc-mark-border': colorTokens['status-error-border'],
            '--rc-mark-selected': colorTokens['status-error-border'],

            '&:hover:not(.Mui-focusVisible)': {
              '--rc-mark-selected-stroke': borderTokens['border-focus'],
              '[data-rc-mark-shape]': {
                boxShadow: errorHoverHalo,
              },
            },
          },
          '.MuiRadio-root:not(.Mui-disabled)': {
            '--rc-mark-border': colorTokens['status-error-border'],
            '--rc-mark-selected': colorTokens['status-error-border'],
            '--rc-radio-hover-halo': errorHoverHalo,
          },
        },
      },
    },
  },
}

export default MuiFormControl
