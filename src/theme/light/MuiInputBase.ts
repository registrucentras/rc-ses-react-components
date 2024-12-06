import { Components, decomposeColor } from '@mui/material'

import palette from '../palette'

const MuiInputBase: Components['MuiInputBase'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      backgroundColor: 'white',
      borderRadius: '.1875rem',

      '.MuiInputBase-input': {
        color: palette.grey['900'],
        fontSize: '.9375rem',
        height: '1.125rem',
        lineHeight: '1.125rem',
        padding: '.8125rem .75rem',

        '&::placeholder': {
          color: palette.grey['600'],
        },
      },

      '.MuiOutlinedInput-notchedOutline': {
        borderColor: palette.grey['600'],
      },

      '&.Mui-error': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: `${palette.error['600']} !important`,
        },
      },

      '&.Mui-focused': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: `${palette.grey['900']} !important`,
          boxShadow: `0px 0px 0px 3px rgba(${decomposeColor(palette.grey['900']).values}, .2)`,
        },

        '&.Mui-error': {
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: `${palette.error['600']} !important`,
            borderWidth: '.125rem',
            boxShadow: `0px 0px 0px 3px rgba(${decomposeColor(palette.error['600']).values}, .2)`,
          },
        },
      },

      '&.Mui-readOnly': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: `${palette.grey['600']} !important`,
          borderWidth: '1px !important',
          boxShadow: 'none !important',
        },
      },

      '&.Mui-disabled': {
        backgroundColor: `${palette.grey['100']} !important`,

        '.MuiOutlinedInput-notchedOutline': {
          borderColor: `${palette.grey['600']} !important`,
        },

        '.MuiInputBase-input': {
          color: `${palette.grey['600']} !important`,
        },
      },

      '&:hover:not(.Mui-disabled):not(.Mui-readOnly)': {
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: palette.grey['900'],
        },
      },
    },
    multiline: {
      padding: '0 !important',
    },
    adornedStart: {
      paddingLeft: '0 !important',

      '.MuiInputBase-input': {
        paddingLeft: 0,
      },

      '.MuiIconButton-edgeStart': {
        marginLeft: 0,
      },
    },
    adornedEnd: {
      paddingRight: '0 !important',

      '.MuiInputBase-input': {
        paddingRight: 0,
      },
    },
  },
}

export default MuiInputBase
