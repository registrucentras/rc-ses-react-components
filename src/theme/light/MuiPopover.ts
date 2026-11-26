import { Components } from '@mui/material'

import { typographyTokens } from '@/theme/typographyTokens'

const MuiPopover: Components['MuiPopover'] = {
  defaultProps: {
    anchorOrigin: {
      vertical: 'bottom',
      horizontal: 'left',
    },
    slotProps: {
      paper: {
        sx: {
          px: { xs: 1.75, md: 2.5 },
          py: { xs: 1.5, md: 2 },
        },
      },
    },
  },

  styleOverrides: {
    paper: {
      fontSize: '.9375rem',
      fontWeight: typographyTokens['font-weight-body-regular'],
      lineHeight: '1.25rem',
      maxWidth: '270px',
    },
  },
}

export default MuiPopover
