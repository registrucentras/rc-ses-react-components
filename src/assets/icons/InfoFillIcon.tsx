import { InfoIcon as Info } from '@phosphor-icons/react'

import IconProps from '../IconProps'

interface InfoFillIconProps extends IconProps {
  weight?: 'thin' | 'light' | 'regular' | 'bold' | 'fill'
}

function InfoFillIcon({
  className,
  size = 24,
  fillColor,
  weight = 'fill',
  ...rest
}: InfoFillIconProps) {
  return (
    <Info {...rest} className={className} size={size} weight={weight} color={fillColor} />
  )
}

export default InfoFillIcon
