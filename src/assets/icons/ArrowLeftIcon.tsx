import { ArrowLeftIcon as PhosphorArrowLeftIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ArrowLeftIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return (
    <PhosphorArrowLeftIcon
      {...rest}
      className={className}
      size={size}
      color={fillColor}
    />
  )
}

export default ArrowLeftIcon
