import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { typographyTokens } from '../typographyTokens'

/**
 * x-date-pickers 9 gives the picker its own field components, which none of the
 * `MuiInputBase` / `MuiOutlinedInput` slots reach. This mirrors them onto the
 * picker slots - keep the two in step.
 */
const MuiPickersOutlinedInput: PickerComponents['MuiPickersOutlinedInput'] = {
  styleOverrides: {
    root: {
      backgroundColor: colorTokens['surface-base'],
      borderRadius: borderTokens['radius-input'],
      // The value renders as sections, not an <input>, so the horizontal
      // padding sits here and the vertical padding on the sections.
      padding: `${spacingRoleBasedTokens['space-0']} ${spacingRoleBasedTokens['space-12']}`,

      '&.Mui-error': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: colorTokens['status-error-border'],
        },
      },

      '&&.Mui-focused': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: colorTokens['border-focus'],
          borderWidth: borderTokens['border-focus'],
        },

        '&.Mui-error': {
          '.MuiPickersOutlinedInput-notchedOutline': {
            borderColor: colorTokens['border-focus-error'],
          },
        },
      },

      '&.Mui-readOnly': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: colorTokens['border-strong'],
          borderWidth: borderTokens['stroke-1'],
        },
      },

      '&.Mui-disabled': {
        backgroundColor: colorTokens['surface-muted'],

        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: colorTokens['border-subtle'],
          borderWidth: borderTokens['stroke-1'],
        },

        '.MuiPickersInputBase-sectionsContainer': {
          color: colorTokens['text-disabled'],
          WebkitTextFillColor: colorTokens['text-disabled'],
        },
      },

      '&:hover:not(.Mui-disabled):not(.Mui-readOnly):not(.Mui-focused):not(.Mui-error)': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: colorTokens['control-border'],
        },
      },
    },
    sectionsContainer: {
      color: colorTokens['text-default'],
      fontSize: typographyTokens['font-size-body-regular'],
      boxSizing: 'content-box',
      height: typographyTokens['line-height-body-regular'],
      lineHeight: typographyTokens['line-height-body-regular'],
      padding: `${spacingRoleBasedTokens['input-padding-y']} ${spacingRoleBasedTokens['space-0']}`,
    },
    notchedOutline: {
      borderColor: colorTokens['border-strong'],
      borderWidth: borderTokens['stroke-1'],
      borderRadius: borderTokens['radius-input'],
      boxShadow: 'none',
    },
  },
}

export default MuiPickersOutlinedInput
