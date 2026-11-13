import { Components, createTheme } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'

const { breakpoints } = createTheme()

const MuiTabs: Components['MuiTabs'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      color: colorTokens['text-default'],
      minHeight: '2.25rem',
      textTransform: 'none',
    },
    // v9 renamed the flexContainer slot to list.
    list: {
      borderBottomStyle: 'solid',
      borderBottomColor: colorTokens['border-subtle'],
      borderBottomWidth: borderTokens['stroke-1'],
      columnGap: spacingRoleBasedTokens['space-6'],
      paddingLeft: spacingRoleBasedTokens['space-12'],
      paddingRight: spacingRoleBasedTokens['space-12'],

      [breakpoints.up('md')]: {
        paddingLeft: spacingRoleBasedTokens['space-20'],
        paddingRight: spacingRoleBasedTokens['space-20'],
      },
    },
    indicator: {
      display: 'none',
    },
  },
}

export default MuiTabs
