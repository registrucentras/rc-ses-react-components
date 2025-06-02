import { Components } from '@mui/material'

import palette from '../palette'

const MuiTab: Components['MuiTab'] = {
  defaultProps: {
    sx: {
      columnGap: '.375rem',
      px: 2,
      py: 1.375,
    },
  },
  styleOverrides: {
    root: {
      backgroundColor: palette.grey['100'],
      borderColor: palette.grey['200'],
      borderStyle: 'solid solid none solid',
      borderWidth: 1,
      borderTopLeftRadius: '.1875rem',
      borderTopRightRadius: '.1875rem',
      color: palette.grey['900'],
      fontSize: '.9375rem',
      fontWeight: 400,
      lineHeight: '1.125rem',
      minHeight: '2.625rem',
      textTransform: 'none',

      '&.Mui-selected': {
        backgroundColor: 'white !important',
        borderColor: palette.grey['300'],
        borderBottomWidth: 0,
        color: palette.grey['900'],
        marginBottom: '-1px',
      },

      '&:hover': {
        backgroundColor: palette.grey['200'],
      },

      '&:active, &.Mui-focusVisible': {
        backgroundColor: palette.grey['300'],
      },

      '&.Mui-disabled': {
        backgroundColor: palette.grey['100'],
        borderColor: palette.grey['300'],
        color: palette.grey['500'],
      },
    },
  },
}

export default MuiTab
