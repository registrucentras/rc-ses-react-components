import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { effectTokens } from '../effectTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { typographyTokens } from '../typographyTokens'

const weekendColor = 'var(--rc-color-red-600)'
const outsideWeekendColor = 'var(--rc-color-red-200)'
// Figma binds the Cyans/500 primitive for the today ring; no semantic role maps to it.
const todayRingColor = 'var(--rc-color-cyans-500)'

const MuiPickersLayout: PickerComponents['MuiPickersLayout'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      borderRadius: borderTokens['radius-12'],

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
        width: '44px',
        height: '24px',
        margin: 0,
        fontSize: typographyTokens['font-size-body-caption'],
        lineHeight: typographyTokens['line-height-body-caption'],
      },

      '.MuiDayCalendar-header': {
        marginBottom: spacingRoleBasedTokens['space-12'],
      },
      '.MuiDayCalendar-weekContainer': { margin: 0 },
      '.MuiDayCalendar-slideTransition': { minHeight: 0, overflow: 'visible' },
      '.MuiDayCalendar-monthContainer': { overflow: 'visible' },
      '.MuiDayCalendar-root .MuiPickerDay-root': {
        width: '44px',
        height: '44px',
        margin: 0,
        color: colorTokens['text-default'],
        fontSize: typographyTokens['font-size-body-regular'],
        lineHeight: typographyTokens['line-height-body-regular'],
        borderRadius: borderTokens['radius-8'],
        '&.MuiPickerDay-today': {
          outline: `${borderTokens['stroke-1']} solid ${todayRingColor}`,
          outlineOffset: `calc(-1 * ${borderTokens['stroke-1']})`,
        },
        // MUI paints a primary tint on :focus, including pointer-open autofocus.
        // In DS only selected days have a brand fill; focus is conveyed by a ring.
        '&:focus': { backgroundColor: 'transparent' },
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

        '&.Mui-selected.Mui-focusVisible': {
          boxShadow: `0 0 0 ${borderTokens['stroke-2']} ${colorTokens['surface-base']}, 0 0 0 ${borderTokens['stroke-4']} ${colorTokens['border-focus']}`,
        },

        '&.MuiPickerDay-dayOutsideMonth:not(.Mui-selected), &.Mui-disabled': {
          color: colorTokens['text-muted'],
        },
      },
      '.MuiDayCalendar-weekContainer .MuiPickerDay-root': {
        // No weekend color roles exist; keep the legacy red distinction using DS primitives.
        '&:nth-of-type(6):not(.Mui-selected), &:nth-of-type(7):not(.Mui-selected)': {
          color: weekendColor,
          '&.MuiPickerDay-dayOutsideMonth': { color: outsideWeekendColor },
        },
      },
    },
  },
}

export default MuiPickersLayout
