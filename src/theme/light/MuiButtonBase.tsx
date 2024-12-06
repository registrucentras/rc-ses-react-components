import { Components } from '@mui/material'

const MuiButtonBase: Components['MuiButtonBase'] = {
  defaultProps: {
    disableRipple: true,
    disableTouchRipple: true,
  },
  styleOverrides: {
    root: {
      letterSpacing: 0,
    },
  },
}

export default MuiButtonBase
