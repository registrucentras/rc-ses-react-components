import { Components, createTheme } from '@mui/material'

import { colorTokens as color } from '../colorTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'
import { typographyTokens as typography } from '../typographyTokens'

const { breakpoints } = createTheme()

const MuiFormLabel: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      color: color['text-default'],
      fontSize: typography['font-size-body-regular'],
      fontWeight: 400,
      lineHeight: typography['line-height-body-regular'],

      [breakpoints.up('md')]: {
        fontWeight: 500,
      },

      '&.Mui-focused, &.Mui-error': {
        color: color['text-default'],
      },

      '&.Mui-disabled': {
        color: color['text-disabled'],
      },

      '.MuiFormLabel-asterisk': {
        color: color['status-error-border'],
        fontWeight: 600,
        marginLeft: space['space-2'],
      },

      '.rc-ses-label-subtitle': {
        color: color['text-secondary'],
        display: 'block',
        fontSize: typography['font-size-body-caption'],
        fontStyle: 'italic',
        fontWeight: 500,
        lineHeight: typography['line-height-body-caption'],
        marginTop: space['space-2'],
      },
    },
  },
}

export default MuiFormLabel
