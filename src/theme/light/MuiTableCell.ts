import { Components } from '@mui/material'

import { typographyTokens } from '@/theme/typographyTokens'

import palette from '../palette'

const MuiTableCell: Components['MuiTableCell'] = {
  defaultProps: {
    sx: {
      px: {
        xs: 1,
        md: 2,
      },
      py: {
        xs: 1,
        md: 1.5,
      },
    },
  },
  styleOverrides: {
    root: {
      fontSize: '.9375rem',
      lineHeight: '1.3125rem',
    },
    head: {
      backgroundColor: palette.grey['200'],
      borderBottomColor: palette.grey['300'],
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      fontWeight: typographyTokens['font-weight-semibold'],
    },
    body: {
      backgroundColor: 'white',
      borderColor: palette.grey['300'],
      borderStyle: 'solid',
      borderWidth: '1px',
      fontWeight: typographyTokens['font-weight-light'],
    },
  },
}

export default MuiTableCell
