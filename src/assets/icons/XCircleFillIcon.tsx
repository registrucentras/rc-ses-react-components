import { XCircleIcon as XCircle } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function XCircleFillIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return (
    <XCircle
      {...rest}
      className={className}
      size={size}
      weight='fill'
      color={fillColor}
    />
  )
}

export default XCircleFillIcon
