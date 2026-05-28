import { WarningIcon as Warning } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function WarningFillIcon({
  className,
  size = 24,
  fillColor,
  weight = 'fill',
  ...rest
}: IconProps) {
  return (
    <Warning
      {...rest}
      className={className}
      size={size}
      weight={weight}
      color={fillColor}
    />
  )
}
export default WarningFillIcon
