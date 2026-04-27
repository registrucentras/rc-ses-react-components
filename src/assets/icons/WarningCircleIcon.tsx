import { WarningCircleIcon as WarningCircle } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function WarningCircleIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return (
    <WarningCircle
      {...rest}
      className={className}
      size={size}
      weight='fill'
      color={fillColor}
    />
  )
}
export default WarningCircleIcon
