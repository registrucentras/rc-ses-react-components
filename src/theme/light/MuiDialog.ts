import { Components } from '@mui/material'

const MuiDialog: Components['MuiDialog'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiDialogTitle-root': {
        fontSize: '1.5rem',
        fontWeight: 500,
        lineHeight: '2rem',
        padding: '2rem 2.25rem 1.5rem',
      },

      '.MuiDialogContent-root': {
        marginBottom: '2.25rem',
        padding: '.5rem 2.25rem 0',
      },

      '.MuiDialogActions-root': {
        padding: '.5rem 2.25rem 2rem',
      },
    },
  },
}

export default MuiDialog
