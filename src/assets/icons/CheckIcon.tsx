import { CheckIcon as CheckFillIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CheckIcon({
  className,
  fillColor,
  size = 24,
  weight = 'regular',
  ...rest
}: IconProps) {
  return (
    <CheckFillIcon
      {...rest}
      className={className}
      size={size}
      weight={weight}
      color={fillColor}
    />
  )
}

export default CheckIcon
