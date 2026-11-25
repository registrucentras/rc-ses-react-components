import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { effectTokens } from '../effectTokens'

const MuiPickerPopper: PickerComponents['MuiPickerPopper'] = {
  styleOverrides: {
    paper: {
      backgroundColor: colorTokens['surface-base'],
      borderRadius: borderTokens['radius-12'],
      boxShadow: effectTokens['elevation-md'],
    },
  },
}

export default MuiPickerPopper
