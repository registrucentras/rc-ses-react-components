import { Components } from '@mui/material'

import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { typographyTokens } from '../typographyTokens'

const MuiFormHelperText: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      color: colorTokens['text-secondary'],
      fontSize: typographyTokens['font-size-body-caption'],
      fontStyle: 'normal',
      fontWeight: 400,
      lineHeight: typographyTokens['line-height-body-caption'],
      marginInline: spacingRoleBasedTokens['space-0'],
      marginTop: spacingRoleBasedTokens['space-4'],

      '&.Mui-error': {
        color: colorTokens['status-error-border'],
      },

      '&.Mui-disabled': {
        color: colorTokens['text-disabled'],
      },
    },
  },
}

export default MuiFormHelperText
