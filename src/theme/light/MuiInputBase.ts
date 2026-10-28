import type { Components } from '@mui/material'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { sizeTokens as size } from '../sizeTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'
import { typographyTokens as typography } from '../typographyTokens'

// Internal shared value: preserve the existing rem padding when DS CSS is absent.
export const inputPadding = `${space['input-padding-y'].slice(0, -1)}, 0.8125rem) ${space['space-12'].slice(0, -1)}, 0.75rem)`

const MuiInputBase: Components['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      backgroundColor: color['surface-base'],
      borderRadius: border['radius-input'],
      gap: space['space-8'],
      '&.Mui-disabled': { backgroundColor: color['surface-muted'] },
      '.MuiInputAdornment-root': {
        color: color['text-secondary'],
        margin: space['space-0'],
        // Direct icons only: nested loading spinners keep their own dimensions.
        '& > svg': {
          display: 'block',
          width: size['icon-size-control'],
          height: size['icon-size-control'],
        },
        '.MuiTypography-root': {
          color: 'inherit',
          fontSize: typography['font-size-body-regular'],
          lineHeight: typography['line-height-body-regular'],
        },
      },
    },
    input: {
      color: color['text-default'],
      fontSize: typography['font-size-body-regular'],
      lineHeight: typography['line-height-body-regular'],
      height: 'auto',
      // No horizontal Input padding role exists; retain its spacing primitive.
      padding: inputPadding,
      '&::placeholder': { color: color['text-secondary'], opacity: 1 },
      '&.Mui-disabled': {
        color: color['text-disabled'],
        WebkitTextFillColor: color['text-disabled'],
        '&::placeholder': { color: color['text-disabled'] },
      },
    },
    multiline: {
      padding: space['space-0'],
      '.MuiInputBase-inputMultiline': { overflowWrap: 'anywhere' },
    },
    adornedStart: {
      paddingLeft: space['space-12'],
      '.MuiInputBase-input': { paddingLeft: space['space-0'] },
      '.MuiIconButton-edgeStart': { marginLeft: space['space-0'] },
    },
    adornedEnd: {
      paddingRight: space['space-12'],
      '.MuiInputBase-input': { paddingRight: space['space-0'] },
    },
  },
}
export default MuiInputBase
