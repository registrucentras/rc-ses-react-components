import { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'
import { spacingTokens } from '../spacingTokens'
import { typographyTokens } from '../typographyTokens'

const MuiStepper: Components['MuiStepper'] = {
  defaultProps: {},
  styleOverrides: {
    root: {},
    vertical: {
      '.MuiStepLabel-root': {
        alignItems: 'center',
        minHeight: spacingRoleBasedTokens['space-32'],
        paddingBottom: 0,
        paddingTop: 0,
      },

      '.MuiStepLabel-iconContainer': {
        paddingRight: spacingTokens['spacing-aliases-stepper-item-gap'],
      },

      '.MuiStepLabel-labelContainer': {
        color: colorTokens['text-secondary'],
        fontSize: typographyTokens['font-size-heading-h4'],
        fontWeight: 400,
        lineHeight: typographyTokens['line-height-heading-h4'],

        '.Mui-active': {
          color: colorTokens['text-default'],
          fontSize: typographyTokens['font-size-heading-h4'],
          fontWeight: 600,
          lineHeight: typographyTokens['line-height-heading-h4'],
        },
      },

      '.MuiStepConnector-root': {
        height: spacingRoleBasedTokens['space-32'],
        marginBottom: `calc(-1 * ${spacingRoleBasedTokens['space-16']})`,
        marginLeft: '11.5px',
        marginTop: `calc(-1 * ${spacingRoleBasedTokens['space-16']})`,
        zIndex: '-1',

        '.MuiStepConnector-line': {
          borderColor: colorTokens['surface-muted'],
          borderLeftWidth: borderTokens['stroke-2'],
          minHeight: spacingRoleBasedTokens['space-32'],
        },
      },
    },
  },
}

export default MuiStepper
