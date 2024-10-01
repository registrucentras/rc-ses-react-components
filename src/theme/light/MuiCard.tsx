import { Components } from '@mui/material'

import Colors from '@/theme/palette'

const MuiCard: Components['MuiCard'] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: {
      border: '1px solid',
      borderColor: Colors.grey['200'],
      borderRadius: '0.375rem',
    },
  },
}

export default MuiCard
