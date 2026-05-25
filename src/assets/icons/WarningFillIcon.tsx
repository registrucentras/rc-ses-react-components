import { WarningIcon as Warning } from '@phosphor-icons/react'

import IconProps from '../IconProps'

interface WarningFillIconProps extends IconProps {
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill'
}

function WarningFillIcon({
  className,
  size = 24,
  fillColor,
  weight = 'fill',
  ...rest
}: WarningFillIconProps) {
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
