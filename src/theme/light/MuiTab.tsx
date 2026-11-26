import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { typographyTokens } from '../typographyTokens'

// The folder tab states step through neutrals with no matching semantic role.
const tabHoverBackground = 'var(--rc-color-neutrals-200)'
const tabPressedBackground = 'var(--rc-color-neutrals-300)'

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
      backgroundColor: colorTokens['surface-muted'],
      borderColor: colorTokens['border-subtle'],
      borderStyle: 'solid solid none solid',
      borderWidth: borderTokens['stroke-1'],
      // Legacy folder corner radius has no 3px DS primitive.
      borderTopLeftRadius: '.1875rem',
      borderTopRightRadius: '.1875rem',
      color: colorTokens['text-default'],
      fontSize: typographyTokens['font-size-body-regular'],
      fontWeight: typographyTokens['font-weight-body-regular'],
      lineHeight: typographyTokens['line-height-body-regular'],
      minHeight: '2.625rem',
      textTransform: 'none',

      '&.Mui-selected': {
        backgroundColor: `${colorTokens['surface-base']} !important`,
        borderColor: colorTokens['border-default'],
        borderBottomWidth: 0,
        color: colorTokens['text-default'],
        marginBottom: '-1px',
      },

      '&:hover': {
        backgroundColor: tabHoverBackground,
      },

      '&:active, &.Mui-focusVisible': {
        backgroundColor: tabPressedBackground,
      },

      '&.Mui-disabled': {
        backgroundColor: colorTokens['surface-muted'],
        borderColor: colorTokens['border-default'],
        color: colorTokens['text-disabled'],
      },
    },
  },
}

export default MuiTab
