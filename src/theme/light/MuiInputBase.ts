import type { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { sizeTokens } from '../sizeTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { spacingTokens } from '../spacingTokens'
import { typographyTokens } from '../typographyTokens'

// Internal shared values, with rem fallbacks for when DS CSS is absent.
export const inputPadding = `${spacingTokens['spacing-aliases-input-padding-y'].slice(0, -1)}, 0.625rem) ${spacingRoleBasedTokens['space-12'].slice(0, -1)}, 0.75rem)`
// Input v2 fields are 44px: 10px padding around a 24px content row. Figma has no
// height variable, and the 22px line height alone would leave the field at 42px.
export const inputMinHeight = '2.75rem'

const MuiInputBase: Components['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      backgroundColor: colorTokens['surface-base'],
      borderRadius: borderTokens['radius-input'],
      gap: spacingRoleBasedTokens['space-8'],
      minHeight: inputMinHeight,
      '&.Mui-disabled': { backgroundColor: colorTokens['surface-muted'] },
      '.MuiInputAdornment-root': {
        color: colorTokens['text-secondary'],
        margin: spacingRoleBasedTokens['space-0'],
        // Direct icons only: nested loading spinners keep their own dimensions.
        '& > svg': {
          display: 'block',
          width: sizeTokens['icon-size-control'],
          height: sizeTokens['icon-size-control'],
        },
        '.MuiTypography-root': {
          color: 'inherit',
          fontSize: typographyTokens['font-size-body-regular'],
          lineHeight: typographyTokens['line-height-body-regular'],
        },
      },
    },
    input: {
      color: colorTokens['text-default'],
      fontSize: typographyTokens['font-size-body-regular'],
      lineHeight: typographyTokens['line-height-body-regular'],
      height: 'auto',
      // No horizontal Input padding role exists; retain its spacing primitive.
      padding: inputPadding,
      '&::placeholder': { color: colorTokens['text-secondary'], opacity: 1 },
      '&.Mui-disabled': {
        color: colorTokens['text-disabled'],
        WebkitTextFillColor: colorTokens['text-disabled'],
        '&::placeholder': { color: colorTokens['text-disabled'] },
      },
    },
    multiline: {
      padding: spacingRoleBasedTokens['space-0'],
      '.MuiInputBase-inputMultiline': { overflowWrap: 'anywhere' },
    },
    adornedStart: {
      paddingLeft: spacingRoleBasedTokens['space-12'],
      '.MuiInputBase-input': { paddingLeft: spacingRoleBasedTokens['space-0'] },
      '.MuiIconButton-edgeStart': { marginLeft: spacingRoleBasedTokens['space-0'] },
    },
    adornedEnd: {
      paddingRight: spacingRoleBasedTokens['space-12'],
      '.MuiInputBase-input': { paddingRight: spacingRoleBasedTokens['space-0'] },
    },
  },
}
export default MuiInputBase
