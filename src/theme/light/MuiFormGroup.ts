import { Components, decomposeColor } from '@mui/material'

import palette from '../palette'

const MuiFormGroup: Components['MuiFormGroup'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '&.MuiRadioGroup-root': {
        flexDirection: 'row',

        '&.rc-ses-hide-native-radio': {
          margin: '-.25rem',

          '.MuiButtonBase-root': {
            margin: 0,
            opacity: 0,
            padding: 0,
            postion: 'absolute',
          },

          '.MuiFormControlLabel-root': {
            borderColor: palette.grey['600'],
            borderRadius: '.1875rem',
            borderStyle: 'solid',
            borderWidth: '1px',
            flex: '0 0 0%',
            lineHeight: '1.125rem',
            margin: '.25rem',
            padding: '.75rem 1rem',
            whiteSpace: 'nowrap',

            '&.Mui-disabled': {
              backgroundColor: palette.grey['100'],
              borderColor: palette.grey['600'],
              color: palette.grey['600'],
            },

            '&:not(.Mui-disabled)': {
              '&:focus-within': {
                '&:not(:active):not(:hover):not(.Mui-checked):not(.Mui-focused)::before':
                  {
                    content: '""',
                    background: 'transparent',
                    border: '2px solid',
                    borderColor: palette.grey[950],
                    borderRadius: '.375rem',
                    height: 'calc(100% + 6px)',
                    left: '-3px',
                    position: 'absolute',
                    top: '-3px',
                    width: 'calc(100% + 6px)',
                    zIndex: 1,
                  },
              },

              '&:hover': {
                backgroundColor: `rgba(${decomposeColor(palette.primary['400']).values}, .2)`,
                borderColor: palette.primary['500'],
              },

              '&.Mui-checked': {
                backgroundColor: palette.primary['500'],
                borderColor: palette.primary['500'],
                color: 'white',
              },
            },
          },

          '.MuiButtonBase-root > *:not(input)': {
            display: 'none',
          },

          '.MuiTypography-root': {
            lineHeight: '1.125rem',
          },
        },
      },
    },
  },
}

export default MuiFormGroup
