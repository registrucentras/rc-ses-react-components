import { ArrowRightIcon as PhosphorArrowRightIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ArrowRightIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return (
    <PhosphorArrowRightIcon
      {...rest}
      className={className}
      size={size}
      color={fillColor}
    />
  )
}

export default ArrowRightIcon
