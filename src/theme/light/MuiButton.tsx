import { Components } from '@mui/material'

import palette, { error, grey, primary, secondary, warning } from '../palette'

const MuiButton: Components['MuiButton'] = {
  variants: [
    {
      props: {
        variant: 'link',
      },
      style: {
        color: palette.primary[600],
        fontSize: '.875rem',
        fontWeight: 600,
        height: '2.375rem',

        '&.Mui-disabled': {
          opacity: 0.4,

          '&.MuiButton-colorPrimary': {
            color: palette.primary[600],
          },
        },

        '&:not(.Mui-disabled)': {
          'svg path': {
            fill: palette.primary[600],
          },

          '&:hover': {
            backgroundColor: 'transparent',
            color: palette.primary[700],

            'svg path': {
              fill: palette.primary[700],
            },
          },

          '&:active, &:focus': {
            backgroundColor: 'transparent',
            color: palette.primary[900],

            'svg path': {
              fill: palette.primary[900],
            },
          },

          '&:focus-visible:not(:active)::before, &.MuiButton-outlined:focus-visible:not(:active)::before':
            {
              content: '""',
              background: 'transparent',
              border: '2px solid',
              borderColor: grey[950],
              borderRadius: '.375rem',
              height: 'calc(100% + 6px)',
              left: '-3px',
              position: 'absolute',
              top: '-3px',
              width: 'calc(100% + 6px)',
              zIndex: 1,
            },
        },

        '&.MuiButton-sizeSmall': {
          fontWeight: 400,
          height: '2.25rem',
          padding: '.625rem .5rem',
        },

        '&.MuiButton-sizeLarge': {
          fontSize: '.9375rem',
          padding: '.6875rem 0',
        },

        '.MuiButton-startIcon': {
          marginLeft: 0,
          marginRight: '.25rem',
        },

        '.MuiButton-endIcon': {
          marginLeft: '.25rem',
        },
      },
    },
    {
      props: {
        color: 'grey',
        variant: 'link',
      },
      style: {
        color: palette.grey[600],
        fontSize: '.875rem',
        lineHeight: '1rem',
        padding: '.6875rem .25rem',

        '&:not(.Mui-disabled)': {
          '&:hover': {
            backgroundColor: 'transparent',
            color: palette.grey[700],
          },

          '&:active': {
            backgroundColor: 'transparent',
            color: palette.grey[900],
          },
        },
      },
    },
    {
      props: {
        color: 'dark',
        variant: 'link',
      },
      style: {
        color: palette.grey[700],
        textDecoration: 'underline',
      },
    },
  ],
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
    variant: 'contained',
  },
  styleOverrides: {
    root: {
      borderRadius: '.1875rem',
      fontSize: '.9375rem',
      height: '2.75rem',
      letterSpacing: 0,
      lineHeight: '1.125rem',
      padding: '.8125rem 1.25rem',
      position: 'relative',
      textTransform: 'none',

      '&.MuiButton-contained:focus-visible:not(:active)::before, &.MuiButton-outlined:focus-visible:not(:active)::before':
        {
          background: 'transparent',
          border: '2px solid',
          borderColor: grey[950],
          borderRadius: '.375rem',
          content: '""',
          height: 'calc(100% + 6px)',
          left: '-3px',
          position: 'absolute',
          top: '-3px',
          width: 'calc(100% + 6px)',
          zIndex: 1,
        },

      '&.MuiButton-outlined:focus-visible:not(:active)::before': {
        height: 'calc(100% + 8px)',
        left: '-4px',
        top: '-4px',
        width: 'calc(100% + 8px)',
      },
    },

    sizeSmall: {
      height: '2.25rem',
      padding: '.5rem .75rem',
    },

    sizeLarge: {
      padding: '.9375rem 2.25rem',
    },

    contained: {
      '&.Mui-disabled': {
        backgroundColor: `${grey[100]} !important`,
        color: `${grey[500]} !important`,
      },

      '&.MuiButton-colorPrimary': {
        color: primary['950'],
        backgroundColor: primary[200],

        '&:hover': {
          backgroundColor: primary[300],
        },
        '&:active': {
          backgroundColor: primary[400],
        },
      },

      '&.MuiButton-colorGrey': {
        color: grey[900],
        backgroundColor: grey[100],

        '&:hover': {
          backgroundColor: grey[200],
        },
        '&:active': {
          backgroundColor: grey[300],
        },
      },

      '&.MuiButton-colorDark': {
        color: 'white',
        backgroundColor: grey[900],

        '&:hover': {
          backgroundColor: grey[800],
        },
        '&:active': {
          backgroundColor: grey[700],
        },
      },

      '&.MuiButton-colorSecondary': {
        color: secondary['950'],
        backgroundColor: secondary[200],

        '&:hover': {
          backgroundColor: secondary[300],
        },
        '&:active': {
          backgroundColor: secondary[400],
        },
      },

      '&.MuiButton-colorWarning': {
        color: warning['950'],
        backgroundColor: warning[200],

        '&:hover': {
          backgroundColor: warning[300],
        },
        '&:active': {
          backgroundColor: warning[400],
        },
      },

      '&.MuiButton-colorError': {
        color: error['700'],
        backgroundColor: error[100],

        '&:hover': {
          backgroundColor: error[200],
        },
        '&:active': {
          backgroundColor: error[300],
        },

        '&:not(.Mui-disabled)': {
          '&:focus-visible:not(:active)::before, &.MuiButton-outlined:focus-visible:not(:active)::before':
            {
              borderColor: error[700],
            },
        },
      },
    },

    outlined: {
      '&.Mui-disabled': {
        backgroundColor: `transparent !important`,
        borderColor: `${grey[50]} !important`,
        color: `${grey[400]} !important`,
      },

      '&.MuiButton-colorPrimary': {
        borderColor: primary[600],
        color: primary[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: primary[50],
        },
        '&:active': {
          backgroundColor: primary[100],
        },
      },

      '&.MuiButton-colorGrey': {
        borderColor: grey[600],
        color: grey[900],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: grey[50],
        },
        '&:active': {
          backgroundColor: grey[100],
        },
      },

      '&.MuiButton-colorSecondary': {
        borderColor: secondary[600],
        color: secondary[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: secondary[50],
        },
        '&:active': {
          backgroundColor: secondary[100],
        },
      },

      '&.MuiButton-colorWarning': {
        borderColor: warning[600],
        color: warning[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: warning[50],
        },
        '&:active': {
          backgroundColor: warning[100],
        },
      },

      '&.MuiButton-colorError': {
        borderColor: error[600],
        color: error[600],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: error[50],
        },
        '&:active': {
          backgroundColor: error[100],
        },
      },
    },
    text: {
      '&.MuiButton-colorGrey': {
        color: grey[600],

        '&:hover': {
          color: grey[700],
        },
        '&:active': {
          color: grey[900],
        },
      },

      '&.MuiButton-colorDark': {
        color: grey[900],

        '&:hover': {
          color: grey[800],
        },
        '&:active': {
          color: grey[700],
        },
      },

      '&.MuiButton-colorSecondary': {
        color: secondary[600],

        '&:hover': {
          color: secondary[700],
        },
        '&:active': {
          color: secondary[900],
        },
      },

      '&.MuiButton-colorWarning': {
        color: warning[600],

        '&:hover': {
          color: warning[700],
        },
        '&:active': {
          color: warning[900],
        },
      },

      '&.MuiButton-colorError': {
        color: error[600],

        '&:hover': {
          color: error[700],
        },
        '&:active': {
          color: error[900],
        },
      },
    },
  },
}

export default MuiButton
