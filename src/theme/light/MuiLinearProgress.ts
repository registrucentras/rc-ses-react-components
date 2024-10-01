import { Components } from '@mui/material'

const MuiLinearProgress: Components['MuiLinearProgress'] = {
  defaultProps: {
    color: 'inherit',
  },
  styleOverrides: {
    root: {
      height: '2px',
    },
    bar1Indeterminate: {
      display: 'none',
    },
  },
}

export default MuiLinearProgress
