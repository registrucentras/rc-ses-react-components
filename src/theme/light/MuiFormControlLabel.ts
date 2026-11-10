import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
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
        '.MuiRadio-root': {
          backgroundColor: colorTokens['surface-brand-subtle'],

          '[data-name="outer"]': {
            stroke: colorTokens['control-selected'],
          },
        },
      },

      '&:active': {
        '.MuiRadio-root': {
          '[data-name="inner"]': {
            fill: radioPressedFill,
          },
        },
      },

      '.MuiFormControlLabel-asterisk': {
        color: colorTokens['status-error-text'],
        fontWeight: 600,
        marginLeft: spacingRoleBasedTokens['space-2'],
      },

      '.PrivateSwitchBase-input': {
        '&:focus, &:focus-visible': {
          '& + svg': {
            outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
            outlineOffset: spacingRoleBasedTokens['space-2'],
            outlineStyle: 'auto',
          },
        },
      },
    },
  },
}

export default MuiFormControlLabel
