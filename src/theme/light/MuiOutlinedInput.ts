import type { Components } from '@mui/material'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'
import { inputPadding } from './MuiInputBase'

const MuiOutlinedInput: Components['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {
      borderRadius: border['radius-input'],
      '&.MuiInputBase-adornedStart': { paddingLeft: space['space-12'] },
      '&.MuiInputBase-adornedEnd': { paddingRight: space['space-12'] },
      '&:hover:not(.Mui-disabled):not(.Mui-readOnly):not(.Mui-focused) .MuiOutlinedInput-notchedOutline':
        {
          borderColor: color['control-border'],
        },
      '&.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: color['status-error-border'],
      },
      '&.Mui-error:hover:not(.Mui-disabled):not(.Mui-readOnly):not(.Mui-focused)': {
        backgroundColor: color['status-error-bg'],
        '.MuiOutlinedInput-notchedOutline': { borderColor: color['status-error-border'] },
      },
      '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
        borderColor: color['border-focus'],
        borderWidth: border['border-focus'],
      },
      '&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline': {
        borderColor: color['border-focus-error'],
      },
      '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
        borderColor: color['border-subtle'],
        borderWidth: border['stroke-1'],
        boxShadow: 'none',
      },
    },
    notchedOutline: {
      borderColor: color['border-strong'],
      borderWidth: border['stroke-1'],
      borderRadius: border['radius-input'],
      boxShadow: 'none',
    },
    // OutlinedInput applies these slots after InputBase.
    multiline: { padding: space['space-0'] },
    input: {
      padding: inputPadding,
      '&.MuiInputBase-inputAdornedStart': { paddingLeft: space['space-0'] },
      '&.MuiInputBase-inputAdornedEnd': { paddingRight: space['space-0'] },
    },
  },
}
export default MuiOutlinedInput
