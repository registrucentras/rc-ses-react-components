import { Components, createTheme } from '@mui/material'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import CloseIcon from '@/assets/icons/CloseIcon'
import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import ScrollIcon from '@/assets/icons/ScrollIcon'
import WarningDiamondFillIcon from '@/assets/icons/WarningDiamondFillIcon'
import WarningFillIcon from '@/assets/icons/WarningFillIcon'

import palette from '../palette'

const { breakpoints } = createTheme()

const MuiAlert: Components['MuiAlert'] = {
  defaultProps: {
    elevation: 0,
    iconMapping: {
      grey: <InfoFillIcon />,
      error: <WarningDiamondFillIcon />,
      info: <ScrollIcon />,
      success: <CheckCircleFillIcon />,
      warning: <WarningFillIcon />,
    },
    slots: {
      closeIcon: CloseIcon,
    },
    variant: 'outlined',
  },
  styleOverrides: {
    root: {
      marginBottom: '1.5rem',
      padding: '.75rem .75rem .75rem .5rem',

      '.MuiAlert-icon svg': {
        height: '1.125rem',
        width: '1.125rem',
      },

      [breakpoints.up('md')]: {
        padding: '.75rem 1rem',

        '.MuiAlert-icon svg': {
          height: '1.5rem',
          width: '1.5rem',
        },
      },
    },

    icon: {
      alignSelf: 'flex-start',
      marginRight: '.5rem',
      paddingBottom: 0,
      paddingTop: 0,

      [breakpoints.up('md')]: {
        alignSelf: 'center',
        marginRight: '.75rem',
      },
    },

    message: {
      a: {
        color: 'inherit',
      },
    },

    standard: {
      borderRadius: 0,
      borderLeftStyle: 'solid',
      borderLeftWidth: 3,
      fontWeight: 300,
      fontSize: '.9375rem',
      lineHeight: '1.125rem',
      padding: '1rem 1.5rem 1rem 1.25rem',

      '.MuiAlert-icon': {
        display: 'none',
      },

      '.MuiAlert-message': {
        fontWeight: 300,
        padding: 0,

        a: {
          color: 'inherit',
          fontWeight: 500,
        },
      },

      [breakpoints.up('md')]: {
        fontSize: '1.0625rem',
        lineHeight: '1.5rem',
        padding: '1rem 1.875rem 1rem 1.5rem',
      },
    },
    standardGrey: {
      backgroundColor: palette.grey['50'],
      borderLeftColor: palette.grey['500'],
      color: palette.grey['900'],
    },
    standardError: {
      backgroundColor: palette.error['50'],
      borderLeftColor: palette.error['500'],
      color: palette.error['900'],
    },
    standardInfo: {
      backgroundColor: palette.primary['50'],
      borderLeftColor: palette.primary['300'],
      color: palette.primary['900'],
    },
    standardSuccess: {
      backgroundColor: palette.secondary['50'],
      borderLeftColor: palette.secondary['500'],
      color: palette.secondary['900'],
    },
    standardWarning: {
      backgroundColor: palette.warning['50'],
      borderLeftColor: palette.warning['300'],
    },

    filled: {
      fontSize: '.8125rem',
      fontWeight: 400,

      '.MuiAlert-message': {
        lineHeight: '1rem',
        padding: '.125rem 0',

        a: {
          fontWeight: 600,
        },
      },

      [breakpoints.up('md')]: {
        fontSize: '.875rem',

        '.MuiAlert-message': {
          lineHeight: '1.25rem',
          padding: '.125rem 0',
        },
      },
    },
    filledGrey: {
      backgroundColor: palette.grey['600'],
      borderColor: palette.grey['600'],
    },
    filledError: {
      backgroundColor: palette.error['600'],
      borderColor: palette.error['600'],
    },
    filledInfo: {
      backgroundColor: palette.primary['500'],
      borderColor: palette.primary['500'],
    },
    filledSuccess: {
      backgroundColor: palette.secondary['700'],
      borderColor: palette.secondary['700'],
    },
    filledWarning: {
      backgroundColor: palette.warning['300'],
      borderColor: palette.warning['300'],
    },

    outlined: {
      fontSize: '.8125rem',
      fontWeight: 600,

      '.MuiAlert-message': {
        lineHeight: '1rem',
        padding: '.125rem 0',

        a: {
          fontWeight: 600,
        },
      },

      [breakpoints.up('md')]: {
        fontSize: '.875rem',

        '.MuiAlert-message': {
          lineHeight: '1.25rem',
          padding: '.125rem 0',
        },
      },
    },
    outlinedGrey: {
      backgroundColor: palette.grey['50'],
      borderColor: palette.grey['200'],

      '.MuiAlert-icon path': {
        fill: palette.grey['600'],
      },
    },
    outlinedError: {
      backgroundColor: palette.error['50'],
      borderColor: palette.error['200'],

      '.MuiAlert-icon path': {
        fill: palette.error['600'],
      },
    },
    outlinedInfo: {
      backgroundColor: palette.primary['50'],
      borderColor: palette.primary['300'],

      '.MuiAlert-icon path': {
        fill: palette.primary['500'],
      },
    },
    outlinedSuccess: {
      backgroundColor: palette.secondary['100'],
      borderColor: palette.secondary['300'],

      '.MuiAlert-icon path': {
        fill: palette.secondary['600'],
      },
    },
    outlinedWarning: {
      backgroundColor: palette.warning['100'],
      borderColor: palette.warning['300'],

      '.MuiAlert-icon path': {
        fill: palette.warning['600'],
      },
    },
  },
}

export default MuiAlert
