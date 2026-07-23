import { MinusIcon as Minus } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function MinusRegularIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return <Minus {...rest} className={className} size={size} color={fillColor} />
}

export default MinusRegularIcon
