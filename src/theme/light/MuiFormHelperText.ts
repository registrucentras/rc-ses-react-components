import { Components } from '@mui/material'

import { colorTokens as color } from '../colorTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'
import { typographyTokens as typography } from '../typographyTokens'

const MuiFormHelperText: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      color: color['text-secondary'],
      fontSize: typography['font-size-body-caption'],
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: typography['line-height-body-caption'],
      marginInline: space['space-0'],
      marginTop: space['space-4'],

      '&.Mui-error': {
        color: color['status-error-border'],
      },

      '&.Mui-disabled': {
        color: color['text-disabled'],
      },
    },
  },
}

export default MuiFormHelperText
