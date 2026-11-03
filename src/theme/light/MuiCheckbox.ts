import type { Components } from '@mui/material'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'

const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {},
  styleOverrides: {
    root: {
      svg: {
        borderRadius: borderTokens['radius-4'],
      },

      // Figma's hover halo has no variable; it is a 20% tint of the selected role.
      '&:hover': {
        svg: {
          boxShadow: `0 0 0 4px color-mix(in srgb, ${colorTokens['control-selected']} 20%, transparent)`,

          '.checkbox-stroke': {
            stroke: colorTokens['control-selected'],
          },
        },
      },
    },
  },
}

export default MuiCheckbox
