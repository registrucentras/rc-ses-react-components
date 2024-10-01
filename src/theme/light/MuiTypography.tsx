import { Components } from '@mui/material'

const MuiTypography: Components['MuiTypography'] = {
  styleOverrides: {
    root: {},
    h1: {
      fontWeight: '500',
    },
    h2: {
      fontSize: '2rem',
      fontWeight: '500',
    },
    h3: {
      fontSize: '1.75rem',
      fontWeight: '500',
    },
    h4: {
      fontSize: '1.5rem',
      fontWeight: '500',
    },
    h5: {
      fontSize: '1.25rem',
      fontWeight: '500',
    },
    h6: {
      fontSize: '1.125rem',
    },
    body1: {
      fontSize: '0.9375rem',
    },
    body2: {
      fontSize: '0.875rem',
    },
    caption: {
      fontSize: '0.8125rem',
    },
    subtitle1: {
      fontSize: '0.75rem',
    },
    subtitle2: {
      fontSize: '0.6875rem',
    },
  },
}

export default MuiTypography
