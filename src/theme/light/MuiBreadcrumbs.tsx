import { Components } from '@mui/material'

import Colors from '@/theme/palette'

const MuiBreadcrumbs: Components['MuiBreadcrumbs'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      fontSize: '.6875rem',
    },
    li: {
      lineHeight: '.875rem',
      paddingBottom: '.375rem',
      paddingTop: '.375rem',

      a: {
        color: Colors.grey['600'],
        textDecoration: 'none',
      },

      '&:last-child': {
        a: {
          color: Colors.grey['900'],
        },
      },

      '&:hover': {
        a: {
          color: Colors.primary['600'],
        },
      },

      '&:active, &:focus': {
        a: {
          color: Colors.primary['700'],
        },
      },
    },
  },
}

export default MuiBreadcrumbs
