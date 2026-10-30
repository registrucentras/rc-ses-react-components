import { Components } from '@mui/material'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'

const MuiFormControlLabel: Components['MuiFormControlLabel'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      position: 'relative',

      '&:hover': {
        '.MuiRadio-root': {
          backgroundColor: color['surface-brand-subtle'],

          '[data-name="outer"]': {
            stroke: color['control-unselected-hover'],
          },
        },
      },

      '&:active': {
        '.MuiRadio-root': {
          '[data-name="inner"]': {
            fill: color['cyans-100'],
          },
        },
      },

      '.MuiFormControlLabel-asterisk': {
        color: color['status-error-text'],
        fontWeight: 600,
        marginLeft: space['space-2'],
      },

      '.PrivateSwitchBase-input': {
        '&:focus, &:focus-visible': {
          '& + svg': {
            outline: `${border['border-focus']} solid ${color['border-focus']}`,
            outlineOffset: space['space-2'],
            outlineStyle: 'auto',
          },
        },
      },
    },
  },
}

export default MuiFormControlLabel
