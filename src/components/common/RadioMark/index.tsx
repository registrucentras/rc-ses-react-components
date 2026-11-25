import { styled } from '@mui/material/styles'
import { CSSProperties } from 'react'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

export interface RadioMarkProps {
  type?: 'unselected' | 'selected'
  disabled?: boolean
  className?: string
  style?: CSSProperties
}

const Mark = styled('span')({
  alignItems: 'center',
  display: 'inline-flex',
  flexShrink: 0,
  height: sizeTokens['icon-size-24'],
  justifyContent: 'center',
  pointerEvents: 'none',
  verticalAlign: 'middle',
  width: sizeTokens['icon-size-24'],
  '& > span': {
    alignItems: 'center',
    borderRadius: borderTokens['radius-full'],
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'inline-flex',
    height: sizeTokens['icon-size-control'],
    justifyContent: 'center',
    width: sizeTokens['icon-size-control'],
  },
  '& [data-rc-radio-dot]': {
    backgroundColor: colorTokens['control-foreground'],
    borderRadius: borderTokens['radius-full'],
    height: spacingRoleBasedTokens['space-10'],
    width: spacingRoleBasedTokens['space-10'],
  },
})

export default function RcSesRadioMark({
  type = 'unselected',
  disabled = false,
  ...props
}: RadioMarkProps) {
  const selected = type === 'selected'
  // --rc-mark-* are component hooks set by the MuiCheckbox/MuiRadio/MuiFormControl
  // themes for hover, error and disabled states; they are not DS tokens.
  const selectedColor = disabled
    ? colorTokens['control-disabled-selected']
    : `var(--rc-mark-selected, ${colorTokens['control-selected']})`
  const surface = disabled
    ? colorTokens['control-disabled']
    : `var(--rc-mark-surface, ${colorTokens['surface-base']})`

  return (
    <Mark {...props} aria-hidden='true' data-rc-radio-mark={type}>
      <span
        data-rc-mark-shape
        style={{
          backgroundColor: selected ? selectedColor : surface,
          borderColor: selected
            ? selectedColor
            : `var(--rc-mark-border, ${colorTokens['control-border']})`,
          borderWidth: selected
            ? borderTokens['border-default']
            : borderTokens['border-focus'],
        }}
      >
        {selected && <span data-rc-radio-dot />}
      </span>
    </Mark>
  )
}
