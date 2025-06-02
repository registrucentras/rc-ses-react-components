import { Components } from '@mui/material'

import palette from '../palette'

const MuiIconButton: Components['MuiIconButton'] = {
  styleOverrides: {
    root: {
      '&:focus-visible, &.Mui-focusVisible': {
        backgroundColor: palette.grey['200'],
      },
    },
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
