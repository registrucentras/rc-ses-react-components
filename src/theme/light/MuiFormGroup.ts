import type { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { typographyTokens } from '../typographyTokens'

const MuiFormGroup: Components['MuiFormGroup'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      '&.MuiRadioGroup-root': {
        flexDirection: 'row',

        '&.rc-ses-hide-native-radio': {
          margin: `calc(-1 * ${spacingRoleBasedTokens['space-4']})`,

          '.MuiButtonBase-root': {
            margin: spacingRoleBasedTokens['space-0'],
            opacity: 0,
            padding: spacingRoleBasedTokens['space-0'],
            postion: 'absolute',
          },

          '.MuiFormControlLabel-root': {
            borderColor: colorTokens['control-unselected'],
            borderRadius: '.1875rem',
            borderStyle: 'solid',
            borderWidth: borderTokens['stroke-1'],
            flex: '0 0 0%',
            lineHeight: typographyTokens['line-height-body-caption'],
            margin: spacingRoleBasedTokens['space-4'],
            padding: `${spacingRoleBasedTokens['space-12']} ${spacingRoleBasedTokens['space-16']}`,
            whiteSpace: 'nowrap',

            '&.Mui-disabled': {
              backgroundColor: colorTokens['surface-muted'],
              borderColor: colorTokens['border-strong'],
              color: colorTokens['text-disabled'],
            },

            '&:not(.Mui-disabled)': {
              '&:focus-within': {
                '&:not(:active):not(:hover):not(.Mui-checked):not(.Mui-focused)::before':
                  {
                    content: '""',
                    background: 'transparent',
                    border: `${borderTokens['border-focus']} solid`,
                    borderColor: colorTokens['border-focus'],
                    borderRadius: borderTokens['radius-6'],
                    height: `calc(100% + ${spacingRoleBasedTokens['space-6']})`,
                    left: '-.1875rem',
                    position: 'absolute',
                    top: '-.1875rem',
                    width: `calc(100% + ${spacingRoleBasedTokens['space-6']})`,
                    zIndex: 1,
                  },
              },

              '&:hover': {
                backgroundColor: colorTokens['surface-brand-subtle'],
                borderColor: colorTokens['control-selected'],
              },

              '&.Mui-checked': {
                backgroundColor: colorTokens['control-selected'],
                borderColor: colorTokens['control-selected'],
                color: colorTokens['control-foreground'],
              },
            },
          },

          '.MuiButtonBase-root > *:not(input)': {
            display: 'none',
          },

          '.MuiTypography-root': {
            lineHeight: typographyTokens['line-height-body-caption'],
          },
        },
      },
    },
  },
}

export default MuiFormGroup
