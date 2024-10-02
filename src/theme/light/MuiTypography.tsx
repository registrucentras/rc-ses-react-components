import { Components } from '@mui/material'

const MuiTypography: Components['MuiTypography'] = {
  styleOverrides: {
    root: {},
    h1: {
      fontWeight: '500',
      lineHeight: '3rem',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '500',
      lineHeight: '2.75rem',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: '500',
      lineHeight: '2.375rem',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '500',
      lineHeight: '1.75rem',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: '500',
      lineHeight: '1.6875rem',
    },
    h6: {
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
    },
    body1: {
      fontSize: '.9375rem',
      lineHeight: '1.125rem',
    },
    body2: {
      fontSize: '.875rem',
      lineHeight: '1rem',
    },
    caption: {
      fontSize: '.8125rem',
      lineHeight: '1rem',
    },
    subtitle1: {
      fontSize: '.75rem',
      lineHeight: '.875rem',
    },
    subtitle2: {
      fontSize: '.6875rem',
    },
  },
}

export default MuiTypography
