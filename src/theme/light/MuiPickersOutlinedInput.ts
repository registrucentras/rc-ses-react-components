import { decomposeColor } from '@mui/material'
import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import palette, { common } from '../palette'

/**
 * x-date-pickers 9 gives the picker its own field components, which none of the
 * `MuiInputBase` / `MuiOutlinedInput` slots reach. This mirrors them onto the
 * picker slots - keep the two in step.
 */
const MuiPickersOutlinedInput: PickerComponents['MuiPickersOutlinedInput'] = {
  styleOverrides: {
    root: {
      backgroundColor: common.white,
      borderRadius: '.5rem',
      // The value renders as sections, not an <input>, so the horizontal
      // padding sits here and the vertical padding on the sections.
      padding: '0 .75rem',

      '.MuiPickersInputBase-sectionsContainer': {
        color: palette.grey['900'],
        fontSize: '.9375rem',
        // The 18px content box MuiInputBase gives a plain input, so the row
        // stays 44px.
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
