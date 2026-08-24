import { decomposeColor } from '@mui/material'
import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import palette from '../palette'

/**
 * x-date-pickers 9 renders the picker field with its own components -
 * `PickersTextField` / `PickersOutlinedInput` / `PickersInputBase` - instead of
 * MUI's `TextField` and `OutlinedInput`. None of the slots that `MuiInputBase`
 * and `MuiOutlinedInput` style exist there any more, so every picker field fell
 * back to MUI defaults: a 4px radius, a 56px row, a transparent background and
 * the default outline colour.
 *
 * This mirrors `MuiInputBase` and `MuiOutlinedInput` onto the picker slots so a
 * date field matches every other input again. Keep the two in step: a change to
 * the input theme needs the same change here.
 */
const MuiPickersOutlinedInput: PickerComponents['MuiPickersOutlinedInput'] = {
  styleOverrides: {
    root: {
      backgroundColor: 'white',
      borderRadius: '.5rem',
      // The value sits in a sections container rather than an <input>, so the
      // horizontal padding lives here and the vertical padding on the sections.
      padding: '0 .75rem',

      '.MuiPickersInputBase-sectionsContainer': {
        color: palette.grey['900'],
        fontSize: '.9375rem',
        // Matches the 18px content box MuiInputBase gives a plain input, so a
        // date field is the same 44px row height as every other field.
        boxSizing: 'content-box',
        height: '1.125rem',
        lineHeight: '1.125rem',
        padding: '.8125rem 0',
      },

      '.MuiPickersOutlinedInput-notchedOutline': {
        borderColor: palette.grey['600'],
        borderRadius: '.5rem',
      },

      '&.Mui-error': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: `${palette.error['600']} !important`,
        },
      },

      '&.Mui-focused': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: `${palette.grey['900']} !important`,
          borderRadius: '.5rem',
          boxShadow: `0px 0px 0px 3px rgba(${decomposeColor(palette.grey['900']).values}, .2)`,
        },

        '&.Mui-error': {
          '.MuiPickersOutlinedInput-notchedOutline': {
            borderColor: `${palette.error['600']} !important`,
            borderWidth: '.125rem',
            borderRadius: '.5rem',
            boxShadow: `0px 0px 0px 3px rgba(${decomposeColor(palette.error['600']).values}, .2)`,
          },
        },
      },

      '&.Mui-readOnly': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: `${palette.grey['600']} !important`,
          borderWidth: '1px !important',
          boxShadow: 'none !important',
        },
      },

      '&.Mui-disabled': {
        backgroundColor: `${palette.grey['100']} !important`,

        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: `${palette.grey['600']} !important`,
        },

        '.MuiPickersInputBase-sectionsContainer': {
          color: `${palette.grey['600']} !important`,
        },
      },

      '&:hover:not(.Mui-disabled):not(.Mui-readOnly)': {
        '.MuiPickersOutlinedInput-notchedOutline': {
          borderColor: palette.grey['900'],
        },
      },
    },
  },
}

export default MuiPickersOutlinedInput
