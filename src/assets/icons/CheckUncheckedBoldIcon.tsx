import { SquareIcon as Square } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CheckUncheckedBoldIcon({ className, fillColor, size = 24, ...rest }: IconProps) {
  return <Square {...rest} className={className} size={size} color={fillColor} />
}

export default CheckUncheckedBoldIcon
