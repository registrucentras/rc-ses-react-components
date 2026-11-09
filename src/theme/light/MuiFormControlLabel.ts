import { Components } from '@mui/material'

import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'

// No semantic role covers the pressed radio fill, so the primitive stays local.
const radioPressedFill = 'var(--rc-color-cyans-100)'

const MuiFormControlLabel: Components['MuiFormControlLabel'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      position: 'relative',

      '&:hover': {
        '.MuiRadio-root:not(.Mui-disabled, .Mui-focusVisible)': {
          '--rc-mark-border': colorTokens['control-selected'],
          '[data-rc-mark-shape]': { boxShadow: 'var(--rc-radio-hover-halo)' },
        },
      },

      '&:active': {
        '.MuiRadio-root:not(.Mui-disabled, .Mui-checked)': {
          '--rc-mark-surface': radioPressedFill,
        },
      },

      '.MuiFormControlLabel-asterisk': {
        color: colorTokens['status-error-text'],
        fontWeight: 600,
        marginLeft: spacingRoleBasedTokens['space-2'],
      },
    },
  },
}

export default MuiFormControlLabel
