import { ArrowRightIcon as PhosphorArrowRightIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ArrowRightIcon({ className, size = 24, fillColor, weight, ...rest }: IconProps) {
  return (
    <PhosphorArrowRightIcon
      {...rest}
      className={className}
      size={size}
      color={fillColor}
      weight={weight}
    />
  )
}

export default ArrowRightIcon
