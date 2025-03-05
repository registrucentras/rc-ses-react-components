import { Components } from '@mui/material'

const MuiIconButton: Components['MuiIconButton'] = {
  styleOverrides: {
    sizeSmall: {
      '& > *:nth-of-type(1)': {
        fontSize: '1rem !important',
      },
    },
    sizeMedium: {
      '& > *:nth-of-type(1)': {
        fontSize: '1.5rem !important',
      },
    },
    sizeLarge: {
      '& > *:nth-of-type(1)': {
        fontSize: '1.5rem !important',
      },
    },
  },
}

export default MuiIconButton
