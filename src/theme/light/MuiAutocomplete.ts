import { Components } from '@mui/material'

import palette from '../palette'

const MuiAutocomplete: Components['MuiAutocomplete'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiOutlinedInput-root': {
        borderRadius: '.5rem',

        '.MuiOutlinedInput-notchedOutline': {
          borderRadius: '.5rem',
        },

        '&.Mui-focused': {
          borderRadius: '.5rem',

          '.MuiOutlinedInput-notchedOutline': {
            borderRadius: '.5rem',
          },
        },

        '.MuiAutocomplete-input': {
          marginRight: '2rem',
          padding: '.25rem .1875rem',
        },
      },
    },
    paper: {
      backgroundColor: 'white',
      borderRadius: '.375rem',
      fontSize: '.9375rem',
      lineHeight: '1.125rem',

      '.MuiAutocomplete-listbox': {
        '.MuiAutocomplete-groupLabel': {
          color: palette.primary['600'],
          fontFamily: '"Public Sans", sans-serif',
          fontSize: '.75rem',
          fontStyle: 'normal',
          fontWeight: 500,
          letterSpacing: '.0075rem',
          lineHeight: '140%',
          padding: '.5rem .75rem .25rem',
          textTransform: 'uppercase',
        },

        '.MuiAutocomplete-option': {
          alignItems: 'flex-start',
          backgroundColor: 'transparent',
          borderRadius: '.375rem',
          color: palette.grey['900'],
          flexDirection: 'column',
          margin: '0 .375rem',
          padding: '.8125rem .75rem',
          transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',

          '&:hover': {
            backgroundColor: palette.grey['100'],
          },

          '&.Mui-focused': {
            backgroundColor: palette.grey['100'],
          },

          '&.Mui-selected': {
            backgroundColor: 'transparent',

            '&:hover, &.Mui-focused': {
              backgroundColor: palette.grey['100'],
            },
          },

          '&[aria-selected="true"]': {
            backgroundColor: 'transparent',
          },

          '&[aria-selected="true"].Mui-focused, &[aria-selected="true"]:hover': {
            backgroundColor: palette.grey['100'],
          },

          '.rc-ses-select-option-label': {
            display: 'block',
          },
          '.rc-ses-select-option-description': {
            color: palette.grey['600'],
            display: 'block',
            fontSize: '.75rem',
            fontStyle: 'italic',
            lineHeight: '1rem',
            marginTop: '.25rem',
            fontWeight: 500,
          },
        },
      },
    },
    hasClearIcon: {
      '.MuiOutlinedInput-root': {
        '.MuiAutocomplete-input': {
          marginRight: '4rem',
        },
      },
    },
  },
}

export default MuiAutocomplete
