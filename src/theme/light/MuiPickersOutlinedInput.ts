import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'
import { typographyTokens as typography } from '../typographyTokens'

/**
 * x-date-pickers 9 gives the picker its own field components, which none of the
 * `MuiInputBase` / `MuiOutlinedInput` slots reach. This mirrors them onto the
 * picker slots - keep the two in step.
 */
const MuiPickersOutlinedInput: PickerComponents['MuiPickersOutlinedInput'] = {
  styleOverrides: {
    root: {
      backgroundColor: color['surface-base'],
      borderRadius: border['radius-input'],
      // The value renders as sections, not an <input>, so the horizontal
      // padding sits here and the vertical padding on the sections.
      padding: `${space['space-0']} ${space['space-12']}`,

      '&.Mui-error': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: color['status-error-border'],
        },
      },

      '&.Mui-focused': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: color['border-focus'],
          borderWidth: border['border-focus'],
        },

        '&.Mui-error': {
          '.MuiPickersOutlinedInput-notchedOutline': {
            borderColor: color['border-focus-error'],
          },
        },
      },

      '&.Mui-focused:not(.Mui-error) .MuiPickersOutlinedInput-notchedOutline': {
        borderColor: color['border-focus'],
      },

      '&.Mui-readOnly': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: color['border-strong'],
          borderWidth: border['stroke-1'],
        },
      },

      '&.Mui-disabled': {
        backgroundColor: color['surface-muted'],

        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: color['border-subtle'],
          borderWidth: border['stroke-1'],
        },

        '.MuiPickersInputBase-sectionsContainer': {
          color: color['text-disabled'],
          WebkitTextFillColor: color['text-disabled'],
        },
      },

      '&:hover:not(.Mui-disabled):not(.Mui-readOnly):not(.Mui-focused):not(.Mui-error)': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: color['control-border'],
        },
      },
    },
    sectionsContainer: {
      color: color['text-default'],
      fontSize: typography['font-size-body-regular'],
      boxSizing: 'content-box',
      height: typography['line-height-body-regular'],
      lineHeight: typography['line-height-body-regular'],
      padding: `${space['input-padding-y']} ${space['space-0']}`,
    },
    notchedOutline: {
      borderColor: color['border-strong'],
      borderWidth: border['stroke-1'],
      borderRadius: border['radius-input'],
      boxShadow: 'none',
    },
  },
}

export default MuiPickersOutlinedInput
