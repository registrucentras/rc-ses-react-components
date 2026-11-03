import { Components } from '@mui/material'

import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

const MuiBreadcrumbs: Components['MuiBreadcrumbs'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      fontSize: '.6875rem',
    },
    li: {
      lineHeight: '.875rem',
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
  },
}

export default MuiBreadcrumbs
