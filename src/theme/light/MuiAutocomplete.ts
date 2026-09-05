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
      border: `1px solid ${palette.grey['200']}`,
      borderRadius: '.75rem',
      boxShadow: '0px 4px 16px 0px rgba(0, 0, 0, 0.08)',
      fontSize: '.9375rem',
      lineHeight: '1.375rem',

      '.MuiAutocomplete-listbox': {
        '.MuiAutocomplete-groupLabel': {
          color: palette.grey['900'],
          fontFamily: '"Public Sans", sans-serif',
          fontSize: '.875rem',
          fontStyle: 'normal',
          fontWeight: 600,
          letterSpacing: 'normal',
          lineHeight: '1.25rem',
          padding: '.75rem 1rem',
          textTransform: 'none',
        },

        '.MuiAutocomplete-option': {
          alignItems: 'center',
          backgroundColor: 'transparent',
          borderRadius: 0,
          color: palette.grey['900'],
          flexDirection: 'column',
          margin: 0,
          minHeight: '3rem',
          padding: '.75rem 1rem',
          transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',

          '&:hover': {
            backgroundColor: palette.grey['100'],
          },

          '&.Mui-focused:not(:hover)': {
            backgroundColor: 'transparent',
            boxShadow: `inset 0 0 0 2px ${palette.primary.main}`,
          },

          '&.Mui-selected': {
            backgroundColor: palette.primary['50'],

            '&:hover, &.Mui-focused': {
              backgroundColor: palette.primary['50'],
            },
          },

          '&[aria-selected="true"]': {
            backgroundColor: palette.primary['50'],
          },

          '&[aria-selected="true"].Mui-focused, &[aria-selected="true"]:hover': {
            backgroundColor: palette.primary['50'],
          },

          '&.Mui-disabled': {
            color: palette.grey['500'],
            opacity: 1,
          },

          '&.rc-ses-select-option--indent-single': {
            paddingLeft: '2.5rem',
          },
          '&.rc-ses-select-option--indent-multi': {
            paddingLeft: '2rem',
          },

          '&.Mui-selected .rc-ses-select-option-label': {
            color: palette.primary['700'],
          },

          '.rc-ses-select-option-label': {
            display: 'block',
            fontFamily: '"Public Sans", sans-serif',
            fontSize: '.9375rem',
            fontWeight: 400,
            lineHeight: '1.375rem',
            overflowWrap: 'anywhere',
          },
          '.rc-ses-select-option-description': {
            color: palette.grey['600'],
            display: 'block',
            fontSize: '.75rem',
            fontStyle: 'italic',
            fontWeight: 500,
            lineHeight: '1rem',
            marginTop: '.25rem',
            overflowWrap: 'anywhere',
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
