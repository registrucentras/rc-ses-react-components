import { Components } from '@mui/material'

import palette from '@/theme/palette'

export const typography = {
  bodyRegularMuted: {
    color: palette.grey[500],
    fontSize: '0.9375rem', // 15px
    fontWeight: 400,
    lineHeight: '1.375rem', // 22px
  },
  priceEmphasis: {
    color: palette.grey[900],
    fontSize: '1.125rem', // 18px
    fontWeight: 500,
    lineHeight: '1.5rem', // 24px
  },
}

const MuiTypography: Components['MuiTypography'] = {
  styleOverrides: {
    root: {},
    h1: {
      fontWeight: '500',
      lineHeight: '2rem', // 32px
    },
    h2: {
      fontSize: '2rem', // 32px
      fontWeight: '500',
      lineHeight: '2.75rem', // 44px
    },
    h3: {
      fontSize: '1.75rem', // 28px
      fontWeight: '500',
      lineHeight: '2.375rem', // 38px
    },
    h4: {
      fontSize: '1.5rem', // 24px
      fontWeight: '500',
      lineHeight: '1.75rem', // 28px
    },
    h5: {
      fontSize: '1.25rem', // 20px
      fontWeight: '500',
      lineHeight: '1.6875rem', // 27px
    },
    h6: {
      fontSize: '1.125rem', // 18px
      fontWeight: '500',
      lineHeight: '1.5rem', // 24px
    },
    body1: {
      fontSize: '.9375rem', // 15px
      lineHeight: '1.125rem', // 18px
    },
    body2: {
      fontSize: '.875rem', // 14px
      lineHeight: '1rem', // 16px
    },
    caption: {
      fontSize: '.8125rem', // 13px
      lineHeight: '1rem', // 16px
    },
    subtitle1: {
      fontSize: '.75rem', // 12px
      lineHeight: '.875rem', // 14px
    },
    subtitle2: {
      fontSize: '.6875rem', // 11px
    },
  },
}

export default MuiTypography
