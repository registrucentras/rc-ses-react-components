import { CheckCircleIcon as CheckCircleFillIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CheckCircleIcon({ className, fillColor, size = 24, ...rest }: IconProps) {
  return (
    <CheckCircleFillIcon
      {...rest}
      className={className}
      size={size}
      weight='fill'
      color={fillColor}
    />
  )
}

export default CheckCircleIcon
