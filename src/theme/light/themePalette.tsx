import { createTheme } from '@mui/material'

import { error, grey, primary, secondary, warning } from '../palette'

const themePalette = createTheme({
  palette: {
    mode: 'light',
    text: {
      primary: grey['900'],
    },
    primary,
    secondary,
    warning,
    error,
    grey,
    dark: grey,
  },
  typography: {
    fontFamily: 'Public sans, sans-serif, Arial',
  },
})

export default themePalette
