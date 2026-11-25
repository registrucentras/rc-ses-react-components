import { Components } from '@mui/material'

import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

const MuiBreadcrumbs: Components['MuiBreadcrumbs'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      fontSize: typographyTokens['font-size-body-micro'],
    },
    li: {
      lineHeight: typographyTokens['line-height-body-micro'],
      paddingBottom: spacingRoleBasedTokens['space-6'],
      paddingTop: spacingRoleBasedTokens['space-6'],

      a: {
        color: colorTokens['text-secondary'],
        textDecoration: 'none',
      },

      '&:last-child': {
        a: {
          color: colorTokens['text-default'],
        },
      },

      '&:hover': {
        a: {
          color: colorTokens['text-link'],
        },
      },

      '&:active, &:focus': {
        a: {
          color: colorTokens['text-link-hover'],
        },
      },
    },

    separator: {
      color: colorTokens['text-secondary'],
      marginLeft: spacingRoleBasedTokens['space-6'],
      marginRight: spacingRoleBasedTokens['space-6'],
    },
  },
}

export default MuiBreadcrumbs
