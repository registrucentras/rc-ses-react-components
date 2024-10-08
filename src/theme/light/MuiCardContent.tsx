import { Components } from '@mui/material'

const MuiCardContent: Components['MuiCardContent'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      padding: '1.25rem 1.5rem',

      '&.side': {
        padding: '1.25rem',
      },
      '&.full': {
        padding: '1.5rem',
      },
    },
  },
}

export default MuiCardContent
