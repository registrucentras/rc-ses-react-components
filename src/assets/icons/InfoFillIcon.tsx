import { InfoIcon as Info } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function InfoFillIcon({ className, size = 24, fillColor }: IconProps) {
  return <Info className={className} size={size} weight='fill' color={fillColor} />
}

export default InfoFillIcon
