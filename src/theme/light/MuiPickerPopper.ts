import type { PickerComponents } from '@mui/x-date-pickers/themeAugmentation'

import { borderTokens as border } from '../borderTokens'
import { colorTokens as color } from '../colorTokens'
import { effectTokens as effect } from '../effectTokens'

const MuiPickerPopper: PickerComponents['MuiPickerPopper'] = {
  styleOverrides: {
    paper: {
      backgroundColor: color['surface-base'],
      // No calendar-panel radius role exists; retain the existing layout primitive.
      borderRadius: border['radius-6'],
      boxShadow: effect['elevation-md'],
    },
  },
}

export default MuiPickerPopper
