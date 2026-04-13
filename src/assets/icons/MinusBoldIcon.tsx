import { MinusIcon as Minus } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function MinusBoldIcon({ className, size = 16, fillColor }: IconProps) {
  return <Minus className={className} size={size} weight='bold' color={fillColor} />
}

export default MinusBoldIcon
