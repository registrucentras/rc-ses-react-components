import { Components } from '@mui/material'

import palette from '../palette'

const MuiTable: Components['MuiTable'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiTableHead-root': {
        tr: {
          borderColor: palette.grey['300'],
          borderStyle: 'solid',
          borderWidth: '1px',
        },
      },
    },
  },
}

export default MuiTable
