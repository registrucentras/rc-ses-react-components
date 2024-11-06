import { Components } from '@mui/material'

const MuiDialog: Components['MuiDialog'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiDialogTitle-root': {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: '2rem',
        padding: '2rem 2.25rem 1rem',
      },

      '.MuiDialogContent-root': {
        padding: '.5rem 2.25rem 2.25rem',
      },

      '.MuiDialogActions-root': {
        padding: '.5rem 2.25rem 2rem',
      },
    },
  },
}

export default MuiDialog
