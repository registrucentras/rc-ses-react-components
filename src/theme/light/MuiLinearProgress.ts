import { Components } from '@mui/material'

const MuiLinearProgress: Components['MuiLinearProgress'] = {
  defaultProps: {
    color: 'inherit',
  },
  styleOverrides: {
    root: {
      height: '2px',
    },
    // v9 removed the combined bar1Indeterminate key. The equivalent is the bar1
    // slot scoped to the indeterminate class on the root.
    bar1: {
      '.MuiLinearProgress-indeterminate &': {
        display: 'none',
      },
    },
  },
}

export default MuiLinearProgress
