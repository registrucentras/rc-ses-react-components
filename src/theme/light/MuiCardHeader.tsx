import { Components } from '@mui/material'

import Colors from '@/theme/palette'

const MuiCardHeader: Components['MuiCardHeader'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      backgroundColor: Colors.grey['50'],
      padding: '1.25rem 1.5rem',
    },
  },
}

export default MuiCardHeader
