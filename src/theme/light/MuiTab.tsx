import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { typographyTokens } from '../typographyTokens'

const MuiTab: Components['MuiTab'] = {
  defaultProps: {
    sx: {
      columnGap: spacingRoleBasedTokens['space-6'],
      px: spacingRoleBasedTokens['space-16'],
      // Legacy 11px padding has no matching spacing token.
      py: 1.375,
    },
  },
  styleOverrides: {
    root: {
      backgroundColor: colorTokens['surface-sunken'],
      borderColor: colorTokens['border-subtle'],
      borderStyle: 'solid solid none solid',
      borderWidth: borderTokens['stroke-1'],
      // Legacy folder corner radius has no 3px DS primitive.
      borderTopLeftRadius: '.1875rem',
      borderTopRightRadius: '.1875rem',
      color: colorTokens['text-default'],
      fontSize: typographyTokens['font-size-body-regular'],
      fontWeight: 400,
      lineHeight: typographyTokens['line-height-body-regular'],
      minHeight: '2.625rem',
      textTransform: 'none',

      '&.Mui-selected': {
        backgroundColor: `${colorTokens['surface-base']} !important`,
        borderColor: colorTokens['border-subtle'],
        borderBottomWidth: 0,
        color: colorTokens['text-default'],
        marginBottom: '-1px',
      },

      '&:hover': {
        backgroundColor: colorTokens['surface-muted'],
      },

      '&:active, &.Mui-focusVisible': {
        backgroundColor: colorTokens['surface-muted'],
      },

      '&.Mui-disabled': {
        backgroundColor: colorTokens['surface-sunken'],
        borderColor: colorTokens['border-subtle'],
        color: colorTokens['text-disabled'],
      },
    },
  },
}

export default MuiTab
