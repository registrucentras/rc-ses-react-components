import { Components } from '@mui/material'

const MuiOutlinedInput: Components['MuiOutlinedInput'] = {
  styleOverrides: {
    root: {
      borderRadius: '.5rem',

      '.MuiOutlinedInput-notchedOutline': {
        borderRadius: '.5rem',
      },
    },
  },
}

export default MuiOutlinedInput
