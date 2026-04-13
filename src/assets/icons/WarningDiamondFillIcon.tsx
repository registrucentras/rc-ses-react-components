import { WarningDiamondIcon as WarningDiamond } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function WarningDiamondFillIcon({ className, size = 24, fillColor }: IconProps) {
  return (
    <WarningDiamond className={className} size={size} weight='fill' color={fillColor} />
  )
}

export default WarningDiamondFillIcon
