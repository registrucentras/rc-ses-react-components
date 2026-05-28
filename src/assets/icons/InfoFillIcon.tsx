import { InfoIcon as Info } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function InfoFillIcon({
  className,
  size = 24,
  fillColor,
  weight = 'fill',
  ...rest
}: IconProps) {
  return (
    <Info {...rest} className={className} size={size} weight={weight} color={fillColor} />
  )
}

export default InfoFillIcon
