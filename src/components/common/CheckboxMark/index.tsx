import { styled } from '@mui/material/styles'
import { CSSProperties } from 'react'

import { CheckIcon, MinusBoldIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'

export interface CheckboxMarkProps {
  type?: 'unchecked' | 'checked' | 'indeterminate'
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
    borderRadius: borderTokens['radius-4'],
    borderStyle: 'solid',
    boxSizing: 'border-box',
    display: 'inline-flex',
    height: sizeTokens['icon-size-control'],
    justifyContent: 'center',
    width: sizeTokens['icon-size-control'],
    '& > svg': {
      flexShrink: 0,
      height: sizeTokens['icon-size-16'],
      width: sizeTokens['icon-size-16'],
    },
  },
})

export default function RcSesCheckboxMark({
  type = 'unchecked',
  disabled = false,
  ...props
}: CheckboxMarkProps) {
  const selected = type !== 'unchecked'
  const selectedColor = disabled
    ? colorTokens['control-disabled-selected']
    : `var(--rc-mark-selected, ${colorTokens['control-selected']})`
  const borderColor = disabled
    ? colorTokens['control-disabled-selected']
    : `var(--rc-mark-border, ${colorTokens['control-border']})`
  const surface = disabled
    ? colorTokens['control-disabled']
    : `var(--rc-mark-surface, ${colorTokens['surface-base']})`

  return (
    <Mark {...props} aria-hidden='true' data-rc-checkbox-mark={type}>
      <span
        data-rc-mark-shape
        style={{
          backgroundColor: selected ? selectedColor : surface,
          borderColor: selected ? selectedColor : borderColor,
          borderWidth:
            selected && !disabled
              ? `var(--rc-mark-selected-stroke, ${borderTokens['border-default']})`
              : borderTokens['border-focus'],
        }}
      >
        {type === 'checked' && (
          <CheckIcon
            size={16}
            weight='bold'
            fillColor={colorTokens['control-foreground']}
          />
        )}
        {type === 'indeterminate' && (
          <MinusBoldIcon size={16} fillColor={colorTokens['control-foreground']} />
        )}
      </span>
    </Mark>
  )
}
