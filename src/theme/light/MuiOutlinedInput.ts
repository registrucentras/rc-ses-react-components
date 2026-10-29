import type { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { inputPadding } from './MuiInputBase'

const MuiOutlinedInput: Components['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {
      borderRadius: borderTokens['radius-input'],
      '&.MuiInputBase-adornedStart': { paddingLeft: spacingRoleBasedTokens['space-12'] },
      '&.MuiInputBase-adornedEnd': { paddingRight: spacingRoleBasedTokens['space-12'] },
      '&:hover:not(.Mui-disabled):not(.Mui-readOnly):not(.Mui-focused) .MuiOutlinedInput-notchedOutline':
        {
          borderColor: colorTokens['control-border'],
        },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: colorTokens['status-error-border'],
      },
      '&.Mui-error:hover:not(.Mui-disabled):not(.Mui-readOnly):not(.Mui-focused)': {
        backgroundColor: colorTokens['status-error-bg'],
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: colorTokens['status-error-border'],
        },
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: colorTokens['border-focus'],
        borderWidth: borderTokens['border-focus'],
      },
      '&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: colorTokens['border-focus-error'],
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: colorTokens['border-subtle'],
        borderWidth: borderTokens['stroke-1'],
        boxShadow: 'none',
      },
    },
    notchedOutline: {
      borderColor: colorTokens['border-strong'],
      borderWidth: borderTokens['stroke-1'],
      borderRadius: borderTokens['radius-input'],
      boxShadow: 'none',
    },
    // OutlinedInput applies these slots after InputBase.
    multiline: { padding: spacingRoleBasedTokens['space-0'] },
    input: {
      padding: inputPadding,
      '&.MuiInputBase-inputAdornedStart': {
        paddingLeft: spacingRoleBasedTokens['space-0'],
      },
      '&.MuiInputBase-inputAdornedEnd': {
        paddingRight: spacingRoleBasedTokens['space-0'],
      },
    },
  },
}
export default MuiOutlinedInput
