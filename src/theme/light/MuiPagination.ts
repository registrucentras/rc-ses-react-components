import { Components } from '@mui/material'

import palette from '../palette'

const MuiPagination: Components['MuiPagination'] = {
  defaultProps: {
    hidePrevButton: true,
    hideNextButton: true,
  },
}

const MuiPaginationItem: Components['MuiPaginationItem'] = {
  styleOverrides: {
    root: {
      borderRadius: 8,
      height: 40,
      width: 40,
      fontSize: 14,
      fontWeight: 300,
      color: palette.grey[800],

      '&:hover': {
        backgroundColor: palette.grey[200],
      },

      '&:active': {
        backgroundColor: palette.grey[300],
      },

      '&.Mui-focusVisible': {
        border: `2px solid ${palette.grey[950]}`,
        backgroundColor: palette.grey[50],
      },

      '&.Mui-disabled': {
        backgroundColor: palette.grey[100],
        color: palette.grey[500],
      },

      '&.Mui-selected': {
        backgroundColor: palette.grey[800],
        color: '#fff',

        '&:hover': {
          backgroundColor: palette.grey[800],
        },
      },
      '&.MuiPaginationItem-ellipsis': {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 14,
      },
    },
  },
}

export { MuiPagination, MuiPaginationItem }
