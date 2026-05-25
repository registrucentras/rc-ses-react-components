import { CheckCircleIcon as CheckCircleFillIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

interface CheckCircleFillIconProps extends IconProps {
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill'
}

function CheckCircleIcon({
  className,
  fillColor,
  size = 24,
  weight = 'fill',
  ...rest
}: CheckCircleFillIconProps) {
  return (
    <CheckCircleFillIcon
      {...rest}
      className={className}
      size={size}
      weight={weight}
      color={fillColor}
    />
  )
}

export default CheckCircleIcon
