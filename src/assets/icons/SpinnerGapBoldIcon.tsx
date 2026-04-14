import { SpinnerGapIcon as SpinnerGap } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function SpinnerGapBoldIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return (
    <SpinnerGap
      {...rest}
      className={className}
      size={size}
      weight='bold'
      color={fillColor}
    />
  )
}

export default SpinnerGapBoldIcon
