import { MapPinAreaIcon as MapPinArea } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function MapPinAreaIcon({ className, fillColor, size = 24 }: IconProps) {
  return <MapPinArea className={className} color={fillColor} size={size} />
}

export default MapPinAreaIcon
