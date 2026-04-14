import { CircleIcon as Circle } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CircleFilledIcon({ className, fillColor, size = 24, ...rest }: IconProps) {
  return (
    <Circle {...rest} className={className} size={size} weight='fill' color={fillColor} />
  )
}

export default CircleFilledIcon
