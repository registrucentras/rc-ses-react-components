import { Components } from '@mui/material'

import palette, { error, grey, primary, secondary, warning } from '../palette'

const MuiButton: Components['MuiButton'] = {
  variants: [
    {
      props: {
        variant: 'link',
      },
      style: {
        color: palette.primary['600'],
        fontWeight: 500,
        height: '2.375rem',

        '&.Mui-disabled': {
          opacity: 0.4,
        },

        '&:not(.Mui-disabled)': {
          'svg path': {
            fill: palette.primary['600'],
          },

          '&:hover': {
            backgroundColor: 'transparent',
            color: palette.primary['700'],

            'svg path': {
              fill: palette.primary['700'],
            },
          },

          '&:active, &:focus': {
            backgroundColor: 'transparent',
            color: palette.primary['900'],

            'svg path': {
              fill: palette.primary['900'],
            },
          },

          '&:focus:not(:active)::before, &.MuiButton-outlined:focus:not(:active)::before':
            {
              content: '""',
              position: 'absolute',
              background: 'transparent',
              width: 'calc(100% + 6px)',
              height: 'calc(100% + 6px)',
              borderRadius: '.375rem',
              border: '2px solid',
              borderColor: grey['950'],
              zIndex: 1,
            },
        },

        '&.MuiButton-sizeSmall': {
          padding: '.5625rem .5rem',
        },

        '&.MuiButton-sizeLarge': {
          padding: '.6875rem 0',
        },

        '.MuiButton-startIcon': {
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
        fontSize: '.875rem',
        lineHeight: '1rem',
        padding: '.6875rem .25rem',

        '&:not(.Mui-disabled)': {
          '&:hover': {
            backgroundColor: 'transparent',
          },

          '&:active': {
            backgroundColor: 'transparent',
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
        color: palette.grey['700'],
        textDecoration: 'underline',

        '&:not(.Mui-disabled)': {
          '&:hover': {
            // backgroundColor: 'transparent',
            // color: palette.grey['700'],
          },

          '&:active': {
            // backgroundColor: 'transparent',
          },
        },
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
      letterSpacing: '.06rem',
      lineHeight: '1.125rem',
      padding: '.8125rem 1.25rem',
      position: 'relative',
      textTransform: 'none',

      '&.MuiButton-contained:focus:not(:active)::before, &.MuiButton-outlined:focus:not(:active)::before':
        {
          content: '""',
          position: 'absolute',
          background: 'transparent',
          width: 'calc(100% + 6px)',
          height: 'calc(100% + 6px)',
          borderRadius: '.375rem',
          border: '2px solid',
          borderColor: grey['950'],
          zIndex: 1,
        },

      '&.MuiButton-outlined:focus:not(:active)::before': {
        width: 'calc(100% + 8px)',
        height: 'calc(100% + 8px)',
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
        backgroundColor: `${grey['50']} !important`,
      },

      '&.MuiButton-colorPrimary': {
        color: primary['950'],
        backgroundColor: primary['200'],

        '&:hover': {
          backgroundColor: primary['300'],
        },
        '&:active': {
          backgroundColor: primary['400'],
        },
      },

      '&.MuiButton-colorGrey': {
        color: grey['950'],
        backgroundColor: grey['100'],

        '&:hover': {
          backgroundColor: grey['200'],
        },
        '&:active': {
          backgroundColor: grey['300'],
        },
      },

      '&.MuiButton-colorDark': {
        color: 'white',
        backgroundColor: grey['900'],

        '&:hover': {
          backgroundColor: grey['800'],
        },
        '&:active': {
          backgroundColor: grey['700'],
        },
        '&.Mui-disabled': {
          backgroundColor: `${grey['100']} !important`,
          color: `${grey['500']} !important`,
        },
      },

      '&.MuiButton-colorSecondary': {
        color: secondary['950'],
        backgroundColor: secondary['200'],

        '&:hover': {
          backgroundColor: secondary['300'],
        },
        '&:active': {
          backgroundColor: secondary['400'],
        },
      },

      '&.MuiButton-colorWarning': {
        color: warning['950'],
        backgroundColor: warning['200'],

        '&:hover': {
          backgroundColor: warning['300'],
        },
        '&:active': {
          backgroundColor: warning['400'],
        },
      },

      '&.MuiButton-colorError': {
        color: error['950'],
        backgroundColor: error['200'],

        '&:hover': {
          backgroundColor: error['300'],
        },
        '&:active': {
          backgroundColor: error['400'],
        },
      },
    },

    outlined: {
      '&.Mui-disabled': {
        backgroundColor: `transparent !important`,
        borderColor: `${grey['50']} !important`,
        color: `${grey['300']} !important`,
      },

      '&.MuiButton-colorPrimary': {
        borderColor: primary['600'],
        color: primary['600'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: primary['50'],
        },
        '&:active': {
          backgroundColor: primary['100'],
        },
      },

      '&.MuiButton-colorGrey': {
        borderColor: grey['600'],
        color: grey['900'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: grey['50'],
        },
        '&:active': {
          backgroundColor: grey['100'],
        },
      },

      '&.MuiButton-colorSecondary': {
        borderColor: secondary['600'],
        color: secondary['600'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: secondary['50'],
        },
        '&:active': {
          backgroundColor: secondary['100'],
        },
      },

      '&.MuiButton-colorWarning': {
        borderColor: warning['600'],
        color: warning['600'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: warning['50'],
        },
        '&:active': {
          backgroundColor: warning['100'],
        },
      },

      '&.MuiButton-colorError': {
        borderColor: error['600'],
        color: error['600'],
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: error['50'],
        },
        '&:active': {
          backgroundColor: error['100'],
        },
      },
    },
    text: {},
  },
}

export default MuiButton
