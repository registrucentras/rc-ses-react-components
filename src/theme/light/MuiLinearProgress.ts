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
    // slot scoped to the indeterminate variant class.
    bar1: {
      '&.MuiLinearProgress-bar1Indeterminate, .MuiLinearProgress-indeterminate &': {
        display: 'none',
      },
    },
  },
}

export default MuiLinearProgress
