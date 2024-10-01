import { Components } from '@mui/material'

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
      fontWeight: 300,
      lineHeight: '1.25rem',
      maxWidth: '270px',
    },
  },
}

export default MuiPopover
