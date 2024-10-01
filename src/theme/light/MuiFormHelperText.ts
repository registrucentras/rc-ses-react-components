import { Components } from '@mui/material'

import palette from '../palette'

const MuiFormHelperText: Components['MuiFormHelperText'] = {
  styleOverrides: {
    root: {
      marginLeft: 0,
      marginRight: 0,

      '&.Mui-error': {
        color: palette.error['600'],
      },
    },
  },
}

export default MuiFormHelperText
