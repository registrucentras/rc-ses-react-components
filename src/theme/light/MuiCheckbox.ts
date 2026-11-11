import type { Components } from '@mui/material'
import { createElement } from 'react'

import RcSesCheckboxMark from '@/components/common/CheckboxMark'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'

// Figma's hover halo has no variable; it is a 20% tint of cyans-400.
const hoverHalo =
  '0 0 0 4px color-mix(in srgb, var(--rc-color-cyans-400) 20%, transparent)'

const MuiCheckbox: Components['MuiCheckbox'] = {
  defaultProps: {
    disableRipple: true,
    icon: createElement(RcSesCheckboxMark),
    checkedIcon: createElement(RcSesCheckboxMark, { type: 'checked' }),
    indeterminateIcon: createElement(RcSesCheckboxMark, { type: 'indeterminate' }),
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      color: colorTokens['control-border'],
      '--rc-mark-border': 'currentColor',
      '--rc-mark-selected': 'currentColor',
      ...(ownerState.color === 'primary' && {
        '&.Mui-checked, &.MuiCheckbox-indeterminate': {
          color: colorTokens['control-selected'],
        },
      }),
      '&.Mui-disabled': {
        '--rc-mark-border': colorTokens['control-disabled-selected'],
        '--rc-mark-selected': colorTokens['control-disabled-selected'],
        '--rc-mark-surface': colorTokens['control-disabled'],
        '--rc-mark-selected-stroke': borderTokens['border-focus'],
      },
      '&.Mui-focusVisible [data-rc-mark-shape]': {
        outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
        outlineOffset: spacingRoleBasedTokens['space-2'],
        boxShadow: 'none',
      },

      '&:hover:not(.Mui-disabled, .Mui-focusVisible) [data-rc-mark-shape]': {
        boxShadow: hoverHalo,
      },

      // Only the unchecked outline changes color on hover, so custom checked colors stay.
      // One :not() list keeps specificity below the error color in MuiFormControl.
      '&:hover:not(.Mui-disabled, .Mui-checked, .MuiCheckbox-indeterminate, .Mui-focusVisible)':
        {
          color: colorTokens['control-selected'],
        },
    }),
  },
}

export default MuiCheckbox
