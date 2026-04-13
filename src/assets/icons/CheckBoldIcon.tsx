import { CheckSquareIcon as CheckSquare } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CheckBoldIcon({ className, fillColor, size = 24 }: IconProps) {
  return <CheckSquare className={className} size={size} weight='fill' color={fillColor} />
}

export default CheckBoldIcon
