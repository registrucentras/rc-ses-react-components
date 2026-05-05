import { ArrowsClockwiseIcon as PhosphorArrowClockwiseIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ArrowsClockwiseIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return (
    <PhosphorArrowClockwiseIcon
      {...rest}
      className={className}
      size={size}
      color={fillColor}
    />
  )
}

export default ArrowsClockwiseIcon
