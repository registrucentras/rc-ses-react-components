import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { effectTokens } from '../effectTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { typographyTokens } from '../typographyTokens'

const weekendColor = 'var(--rc-color-red-600)'
const outsideWeekendColor = 'var(--rc-color-red-200)'
const outsideMonthColor = 'var(--rc-color-neutrals-400)'

const MuiPickersLayout: PickerComponents['MuiPickersLayout'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      // No calendar panel radius role exists; preserve the existing radius primitive.
      borderRadius: borderTokens['radius-6'],

      '.MuiPickersLayout-actionBar': {
        backgroundColor: colorTokens['surface-sunken'],
        borderBottomLeftRadius: borderTokens['radius-6'],
        borderBottomRightRadius: borderTokens['radius-6'],
        // Calendar action-bar spacing has no semantic role yet.
        padding: `${spacingRoleBasedTokens['space-8']} ${spacingRoleBasedTokens['space-10']}`,

        '.MuiButtonBase-root': {
          backgroundColor: 'transparent',
          height: spacingRoleBasedTokens['space-36'],
          minWidth: 'unset',
          padding: `${spacingRoleBasedTokens['space-0']} ${spacingRoleBasedTokens['space-10']}`,
        },
      },
    },
    contentWrapper: {
      '.MuiDateCalendar-root': {
        width: '100%',
      },

      '.MuiDayCalendar-weekDayLabel': {
        color: colorTokens['text-muted'],
        height: spacingRoleBasedTokens['space-36'],
        lineHeight: typographyTokens['line-height-body-small'],
      },

      '.MuiPickerDay-root': {
        color: colorTokens['text-default'],
        fontSize: typographyTokens['font-size-body-small'],
        lineHeight: typographyTokens['line-height-body-small'],
        // No calendar radius role exists; preserve the existing circular day shape.
        borderRadius: borderTokens['radius-full'],
        '&.MuiPickerDay-today': {
          outline: `${borderTokens['stroke-1']} solid ${colorTokens['text-secondary']}`,
          outlineOffset: `calc(-1 * ${borderTokens['stroke-1']})`,
        },
        '&.Mui-focusVisible': {
          boxShadow: effectTokens['focus-ring-default'],
          backgroundColor: colorTokens['surface-base'],
        },

        '&:hover': {
          backgroundColor: colorTokens['surface-muted'],
        },

        '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
          backgroundColor: colorTokens['control-selected'],
          // v9 sets the contrast colour in a variant, which loses to the
          // day colour above, so it has to be restated.
          color: colorTokens['text-inverse'],
          fontWeight: 400,
        },

        '&.MuiPickerDay-dayOutsideMonth:not(.Mui-selected)': {
          color: outsideMonthColor,
        },
        '&.Mui-disabled, &.Mui-disabled.MuiPickerDay-dayOutsideMonth': {
          color: colorTokens['text-disabled'],
        },
      },
      '.MuiDayCalendar-weekContainer': {
        // No weekend color roles exist; keep the legacy red distinction using DS primitives.
        '.MuiPickerDay-root:nth-of-type(6), .MuiPickerDay-root:nth-of-type(7)': {
          color: weekendColor,
          '&.MuiPickerDay-dayOutsideMonth': { color: outsideWeekendColor },
        },
      },
    },
  },
}

export default MuiPickersLayout
