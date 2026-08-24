import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import palette from '../palette'

const MuiPickersLayout: PickerComponents['MuiPickersLayout'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      borderRadius: '.375rem',

      '.MuiPickersLayout-actionBar': {
        backgroundColor: palette.grey['50'],
        borderBottomLeftRadius: '.375rem',
        borderBottomRightRadius: '.375rem',
        padding: '.5rem .625rem',

        '.MuiButtonBase-root': {
          backgroundColor: 'transparent',
          height: '2.25rem',
          minWidth: 'unset',
          padding: '0 .625rem',
        },
      },
    },
    contentWrapper: {
      '.MuiDateCalendar-root': {
        width: '100%',
      },

      '.MuiDayCalendar-weekDayLabel': {
        color: palette.grey['600'],
        height: '2.25rem',
        lineHeight: '1.125rem',
      },

      '.MuiPickerDay-root': {
        color: palette.grey['900'],
        fontSize: '.875rem',
        lineHeight: '1.125rem',

        '&:hover': {
          backgroundColor: palette.grey['100'],
        },

        '&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
          backgroundColor: palette.primary['500'],
          fontWeight: 400,
        },

        // x-date-pickers 9 applies the disabled colour through a `variants`
        // entry, which emits at single-class specificity and so loses to the
        // descendant selector above - disabled days rendered in grey[900], the
        // same as selectable ones. v7 used a compound selector and won on its
        // own, which is why this was never needed before. Weekends stay red,
        // because the rule below is more specific - same as 1.x.
        '&.Mui-disabled': {
          color: palette.grey['400'],
        },
      },

      '.MuiPickerDay-dayOutsideMonth': {
        color: palette.grey['400'],
      },

      '.MuiDayCalendar-weekContainer': {
        '.MuiPickerDay-root:nth-of-type(6), .MuiPickerDay-root:nth-of-type(7)': {
          color: palette.error['600'],

          '&.MuiPickerDay-dayOutsideMonth': {
            color: palette.error['200'],
          },
        },
      },
    },
  },
}

export default MuiPickersLayout
