import { Components } from '@mui/material'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'

const MuiCard: Components['MuiCard'] = {
  defaultProps: {
    elevation: 0,
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      borderRadius: borderTokens['radius-card'],
      // Paint the default outlined border on the root instead of a
      // `variants[{ variant: 'outlined' }]` entry. `styleOverrides` deep-
      // merges when a consumer calls `createTheme(RcSesTheme, {...})`, but
      // arrays like `variants` are replaced wholesale - so a consumer theme
      // that declares its own MuiCard variants would otherwise strip our
      // outlined-border rule and leave every card borderless.
      borderWidth: borderTokens['stroke-1'],
      borderStyle: 'solid',
      borderColor: colorTokens['border-default'],
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
