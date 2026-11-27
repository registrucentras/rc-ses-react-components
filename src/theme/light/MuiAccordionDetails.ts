import { Components } from '@mui/material'

import { spacingTokens } from '../spacingTokens'

const MuiAccordionDetails: Components['MuiAccordionDetails'] = {
  defaultProps: {
    sx: {
      paddingBottom: spacingTokens['spacing-aliases-card-padding-bottom'],
      paddingInline: spacingTokens['spacing-aliases-card-padding-x'],
      paddingTop: spacingTokens['spacing-aliases-card-padding-top'],
    },
  },
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      gap: spacingTokens['spacing-aliases-form-field-gap'],
    },
  },
}

export default MuiAccordionDetails
