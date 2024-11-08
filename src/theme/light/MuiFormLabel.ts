import { Components, createTheme } from '@mui/material'

import palette from '../palette'

const { breakpoints } = createTheme()

const MuiFormLabel: Components['MuiFormLabel'] = {
  styleOverrides: {
    root: {
      color: palette.grey['900'],
      fontSize: '.9375rem',
      fontWeight: 400,
      lineHeight: '1.125rem',

      [breakpoints.up('sm')]: {
        fontWeight: 500,
      },

      '&.Mui-focused': {
        color: 'inherit',
      },

      '&.Mui-error': {
        color: 'inherit',
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
