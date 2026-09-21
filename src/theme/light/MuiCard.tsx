import { Components } from '@mui/material'

import Colors from '@/theme/palette'

const MuiCard: Components['MuiCard'] = {
  defaultProps: {
    elevation: 0,
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      borderRadius: '1rem',
      // Paint the default outlined border on the root instead of a
      // `variants[{ variant: 'outlined' }]` entry. `styleOverrides` deep-
      // merges when a consumer calls `createTheme(RcSesTheme, {...})`, but
      // arrays like `variants` are replaced wholesale - so a consumer theme
      // that declares its own MuiCard variants would otherwise strip our
      // outlined-border rule and leave every card borderless.
      borderWidth: 1,
      borderStyle: 'solid',
      borderColor: Colors.grey['300'],
    },
  },
  variants: [
    {
      props: { variant: 'elevation' },
      style: {
        border: 'none',
      },
    },
  ],
}

export default MuiCard
