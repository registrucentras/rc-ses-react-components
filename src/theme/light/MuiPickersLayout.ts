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
        width: '296px',
      },

      '.MuiDayCalendar-weekDayLabel': {
        color: palette.grey['600'],
        height: '2.25rem',
        lineHeight: '1.125rem',
      },

      '.MuiPickersDay-root': {
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
      },

      '.MuiPickersDay-dayOutsideMonth': {
        color: palette.grey['400'],
      },

      '.MuiDayCalendar-weekContainer': {
        '.MuiPickersDay-root:nth-child(6), .MuiPickersDay-root:nth-child(7)': {
          color: palette.error['600'],

          '&.MuiPickersDay-dayOutsideMonth': {
            color: palette.error['200'],
          },
        },
      },
    },
  },
}

export default MuiPickersLayout
