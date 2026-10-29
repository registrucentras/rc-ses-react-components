import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { effectTokens as effect } from '../effectTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'
import { typographyTokens as typography } from '../typographyTokens'

const MuiPickersLayout: PickerComponents['MuiPickersLayout'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      // No calendar panel radius role exists; preserve the existing radius primitive.
      borderRadius: border['radius-6'],

      '.MuiPickersLayout-actionBar': {
        backgroundColor: color['surface-raised'],
        borderBottomLeftRadius: border['radius-6'],
        borderBottomRightRadius: border['radius-6'],
        // Calendar action-bar spacing has no semantic role yet.
        padding: `${space['space-8']} ${space['space-10']}`,

        '.MuiButtonBase-root': {
          backgroundColor: 'transparent',
          height: space['space-36'],
          minWidth: 'unset',
          padding: `${space['space-0']} ${space['space-10']}`,
        },
      },
    },
    contentWrapper: {
      '.MuiDateCalendar-root': {
        width: '100%',
      },

      '.MuiDayCalendar-weekDayLabel': {
        color: color['text-muted'],
        height: space['space-36'],
        lineHeight: typography['line-height-body-small'],
      },

      '.MuiPickerDay-root': {
        color: color['text-default'],
        fontSize: typography['font-size-body-regular'],
        lineHeight: typography['line-height-body-regular'],
        // No calendar radius role exists; preserve the existing circular day shape.
        borderRadius: border['radius-full'],
        '&.MuiPickerDay-today': {
          outline: `${border['stroke-1']} solid ${color['text-secondary']}`,
          outlineOffset: `calc(-1 * ${border['stroke-1']})`,
        },
        '&.Mui-focusVisible': {
          boxShadow: effect['focus-ring-default'],
          backgroundColor: color['surface-base'],
        },

        '&:hover': {
          backgroundColor: color['surface-muted'],
        },

        '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
          backgroundColor: color['cyans-500'],
          // v9 sets the contrast colour in a variant, which loses to the
          // day colour above, so it has to be restated.
          color: color['text-inverse'],
          fontWeight: 400,
        },

        '&.MuiPickerDay-dayOutsideMonth:not(.Mui-selected)': {
          color: color['text-muted'],
        },
        '&.Mui-disabled, &.Mui-disabled.MuiPickerDay-dayOutsideMonth': {
          color: color['text-disabled'],
        },
      },
      '.MuiDayCalendar-weekContainer': {
        // No weekend color roles exist; keep the legacy red distinction using DS primitives.
        '.MuiPickerDay-root:nth-of-type(6), .MuiPickerDay-root:nth-of-type(7)': {
          color: color['red-600'],
          '&.MuiPickerDay-dayOutsideMonth': { color: color['red-200'] },
        },
      },
    },
  },
}

export default MuiPickersLayout
