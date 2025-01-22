import { Components, createTheme } from '@mui/material'

import palette from '../palette'

const { breakpoints } = createTheme()

const MuiFormLabel: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      color: palette.grey['900'],
      fontSize: '.8125rem',
      fontWeight: 400,
      lineHeight: '1rem',

      [breakpoints.up('md')]: {
        fontSize: '.9375rem',
        fontWeight: 500,
        lineHeight: '1.125rem',
      },

      '&.Mui-focused': {
        color: 'inherit',
      },

      '&.Mui-error': {
        color: 'inherit',
      },

      '.MuiFormLabel-asterisk': {
        color: palette.error['500'],
        fontWeight: 600,
        marginLeft: '.125rem',
      },

      '.rc-ses-label-subtitle': {
        color: palette.grey['700'],
        display: 'block',
        fontSize: '.75rem',
        fontStyle: 'italic',
        fontWeight: 500,
        lineHeight: '1rem',
        marginTop: '.125rem',
      },
    },
  },
}

export default MuiFormLabel
