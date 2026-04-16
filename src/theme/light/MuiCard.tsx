import { Components } from '@mui/material'

import Colors from '@/theme/palette'

const MuiCard: Components['MuiCard'] = {
  defaultProps: {
    elevation: 0,
  },
  styleOverrides: {
    root: {
      border: '1px solid',
      borderColor: Colors.grey['300'],
      borderRadius: '1rem',
    },
  },
}

export default MuiCard
