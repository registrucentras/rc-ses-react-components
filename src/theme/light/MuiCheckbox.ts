import type { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'

// Figma's hover halo has no variable; it is a 20% tint of cyans-400.
const hoverHalo =
  '0 0 0 4px color-mix(in srgb, var(--rc-color-cyans-400) 20%, transparent)'

const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      svg: {
        borderRadius: borderTokens['radius-4'],
      },

      '&:hover:not(.Mui-disabled) svg': {
        boxShadow: hoverHalo,
      },

      // Only the unchecked outline changes color on hover, so custom checked colors stay.
      // One :not() list keeps specificity below the error color in MuiFormControl.
      '&:hover:not(.Mui-disabled, .Mui-checked, .MuiCheckbox-indeterminate) svg': {
        color: colorTokens['control-selected'],
      },
    },
  },
}

export default MuiCheckbox
