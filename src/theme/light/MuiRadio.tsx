import { Components } from '@mui/material'

import RcSesRadioMark from '@/components/common/RadioMark'

import { borderTokens } from '../borderTokens'
import { colorTokens } from '../colorTokens'
import { spacingRoleBasedTokens } from '../spacingRoleBasedTokens'

// Figma's unbound hover effect is shared by selected and unselected radio marks.
const hoverHalo =
  '0 0 0 4px color-mix(in srgb, var(--rc-color-cyans-400) 20%, transparent)'

const MuiRadio: Components['MuiRadio'] = {
  defaultProps: {
    disableRipple: true,
    checkedIcon: <RcSesRadioMark type='selected' />,
    icon: <RcSesRadioMark />,
  },
  styleOverrides: {
    root: ({ ownerState }) => ({
      margin: spacingRoleBasedTokens['space-4'],
      padding: spacingRoleBasedTokens['space-4'],
      color: colorTokens['control-border'],
      '--rc-mark-border': 'currentColor',
      '--rc-mark-selected': 'currentColor',
      '--rc-radio-hover-halo': hoverHalo,
      ...(ownerState.color === 'primary' && {
        '&.Mui-checked': { color: colorTokens['control-selected'] },
      }),
      '&.Mui-disabled': {
        '--rc-mark-border': colorTokens['control-border'],
        '--rc-mark-selected': colorTokens['control-disabled-selected'],
        '--rc-mark-surface': colorTokens['control-disabled'],
      },
      '&.Mui-focusVisible [data-rc-mark-shape]': {
        outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
        outlineOffset: spacingRoleBasedTokens['space-2'],
        boxShadow: 'none',
      },
      '&:hover:not(.Mui-disabled, .Mui-focusVisible)': {
        '--rc-mark-border': colorTokens['control-selected'],
        '[data-rc-mark-shape]': { boxShadow: 'var(--rc-radio-hover-halo)' },
      },
    }),
  },
}

export default MuiRadio
