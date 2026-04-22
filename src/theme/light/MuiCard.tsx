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
    },
  },
  variants: [
    {
      props: { variant: 'outlined' },
      style: {
        border: '1px solid',
        borderColor: Colors.grey['300'],
      },
    },
    {
      props: { variant: 'elevation' },
      style: {
        border: 'none',
      },
    },
  ],
}

export default MuiCard
