import { CheckIcon as CheckFillIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CheckIcon({ className, fillColor, size = 24, ...rest }: IconProps) {
  return (
    <CheckFillIcon
      {...rest}
      className={className}
      size={size}
      weight='fill'
      color={fillColor}
    />
  )
}

export default CheckIcon
