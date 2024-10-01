import { Components, createTheme } from '@mui/material'

import palette from '../palette'

const { breakpoints } = createTheme()

const MuiTabs: Components['MuiTabs'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      color: palette.grey['900'],
      minHeight: '2.25rem',
      textTransform: 'none',
    },
    flexContainer: {
      borderBottomStyle: 'solid',
      borderBottomColor: palette.grey['300'],
      borderBottomWidth: 1,
      columnGap: '.375rem',
      paddingLeft: '.75rem',
      paddingRight: '.75rem',

      [breakpoints.up('md')]: {
        paddingLeft: '1.25rem',
        paddingRight: '1.25rem',
      },
    },
    indicator: {
      display: 'none',
    },
  },
}

export default MuiTabs
