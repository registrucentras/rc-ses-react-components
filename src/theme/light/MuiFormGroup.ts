import type { Components } from '@mui/material'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { spacingRoleBasedTokens as space } from '../spacingRoleBasedTokens'
import { typographyTokens as typography } from '../typographyTokens'

const MuiFormGroup: Components['MuiFormGroup'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '&.MuiRadioGroup-root': {
        flexDirection: 'row',

        '&.rc-ses-hide-native-radio': {
          margin: `calc(-1 * ${space['space-4']})`,

          '.MuiButtonBase-root': {
            margin: space['space-0'],
            opacity: 0,
            padding: space['space-0'],
            postion: 'absolute',
          },

          '.MuiFormControlLabel-root': {
            borderColor: color['control-unselected'],
            borderRadius: '.1875rem',
            borderStyle: 'solid',
            borderWidth: border['stroke-1'],
            flex: '0 0 0%',
            lineHeight: typography['line-height-body-caption'],
            margin: space['space-4'],
            padding: `${space['space-12']} ${space['space-16']}`,
            whiteSpace: 'nowrap',

            '&.Mui-disabled': {
              backgroundColor: color['surface-muted'],
              borderColor: color['border-strong'],
              color: color['text-disabled'],
            },

            '&:not(.Mui-disabled)': {
              '&:focus-within': {
                '&:not(:active):not(:hover):not(.Mui-checked):not(.Mui-focused)::before':
                  {
                    content: '""',
                    background: 'transparent',
                    border: `${border['border-focus']} solid`,
                    borderColor: color['border-focus'],
                    borderRadius: border['radius-6'],
                    height: `calc(100% + ${space['space-6']})`,
                    left: '-.1875rem',
                    position: 'absolute',
                    top: '-.1875rem',
                    width: `calc(100% + ${space['space-6']})`,
                    zIndex: 1,
                  },
              },

              '&:hover': {
                backgroundColor: color['surface-brand-subtle'],
                borderColor: color['control-unselected-hover'],
              },

              '&.Mui-checked': {
                backgroundColor: color['control-selected'],
                borderColor: color['control-selected'],
                color: color['control-foreground'],
              },
            },
          },

          '.MuiButtonBase-root > *:not(input)': {
            display: 'none',
          },

          '.MuiTypography-root': {
            lineHeight: typography['line-height-body-caption'],
          },
        },
      },
    },
  },
}

export default MuiFormGroup
