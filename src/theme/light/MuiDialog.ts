import { Components } from '@mui/material'

const MuiDialog: Components['MuiDialog'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiDialogTitle-root': {
        fontSize: '24px',
        lineHeight: '32px',
        padding: '2rem 2rem 1rem',
      },

      '.MuiDialogContent-root': {
        padding: '0 2rem',
      },

      '.MuiDialogActions-root': {
        padding: '.5rem 2rem 2rem',
      },
    },
  },
}

export default MuiDialog
