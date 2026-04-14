import { CheckSquareIcon as CheckSquare } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CheckBoldIcon({ className, fillColor, size = 24, ...rest }: IconProps) {
  return (
    <CheckSquare
      {...rest}
      className={className}
      size={size}
      weight='fill'
      color={fillColor}
    />
  )
}

export default CheckBoldIcon
