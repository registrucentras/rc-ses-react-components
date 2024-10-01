import { Components } from '@mui/material'

import palette from '../palette'

const MuiAutocomplete: Components['MuiAutocomplete'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '.MuiOutlinedInput-root': {
        '.MuiAutocomplete-input': {
          padding: '.25rem .1875rem',
        },
      },
    },
    paper: {
      fontSize: '.9375rem',
      lineHeight: '1.125rem',

      '.MuiAutocomplete-listbox': {
        '.MuiAutocomplete-option': {
          alignItems: 'flex-start',
          flexDirection: 'column',
          margin: '0 .375rem',
          padding: '.8125rem .75rem',

          '.Mui-focused': {
            backgroundClor: palette.grey['100'],
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
          },
        },
      },
    },
  },
}

export default MuiAutocomplete
