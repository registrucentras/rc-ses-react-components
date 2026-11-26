import { Components } from '@mui/material'

import { typographyTokens } from '@/theme/typographyTokens'

const MuiChip: Components['MuiChip'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      fontSize: '0.875rem',
      fontWeight: typographyTokens['font-weight-semibold'],
    },
  },
}

export default MuiChip
