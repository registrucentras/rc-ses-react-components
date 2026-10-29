import { Components, createTheme } from '@mui/material'

import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { typographyTokens } from '../typographyTokens'

const { breakpoints } = createTheme()

const MuiFormLabel: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      color: colorTokens['text-default'],
      fontSize: typographyTokens['font-size-body-regular'],
      fontWeight: 400,
      lineHeight: typographyTokens['line-height-body-regular'],

      [breakpoints.up('md')]: {
        fontWeight: 500,
      },

      '&.Mui-focused, &.Mui-error': {
        color: colorTokens['text-default'],
      },

      '&.Mui-disabled': {
        color: colorTokens['text-disabled'],
      },

      '.MuiFormLabel-asterisk': {
        color: colorTokens['status-error-border'],
        fontWeight: 600,
        marginLeft: spacingRoleBasedTokens['space-2'],
      },

      '.rc-ses-label-subtitle': {
        color: colorTokens['text-secondary'],
        display: 'block',
        fontSize: typographyTokens['font-size-body-caption'],
        fontStyle: 'italic',
        fontWeight: 500,
        lineHeight: typographyTokens['line-height-body-caption'],
        marginTop: spacingRoleBasedTokens['space-2'],
      },
    },
  },
}

export default MuiFormLabel
