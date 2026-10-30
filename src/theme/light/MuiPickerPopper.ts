import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { effectTokens } from '../effectTokens'

const MuiPickerPopper: PickerComponents['MuiPickerPopper'] = {
  styleOverrides: {
    paper: {
      backgroundColor: colorTokens['surface-base'],
      // No calendar-panel radius role exists; retain the existing layout primitive.
      borderRadius: borderTokens['radius-6'],
      boxShadow: effectTokens['elevation-md'],
    },
  },
}

export default MuiPickerPopper
