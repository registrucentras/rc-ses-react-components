import { Components } from '@mui/material'

import palette from '../palette'

const MuiPagination: Components['MuiPagination'] = {
  defaultProps: {
    hidePrevButton: true,
    shape: 'rounded',
  },
  styleOverrides: {
    root: {
      '.MuiButtonBase-root': {
        height: '2.5rem',
        minWidth: '2.5rem',

        '&.Mui-selected': {
          backgroundColor: palette.grey[800],
          color: 'white',
          fontSize: '.9275rem',
          lineHeight: '1.125rem',
        },
      },

      '.MuiPaginationItem-previousNext svg': {
        fontSize: '1rem !important',
      },
    },
  },
}

export default MuiPagination
