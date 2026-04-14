import { MapPinAreaIcon as MapPinArea } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function MapPinAreaIcon({ className, fillColor, size = 24, ...rest }: IconProps) {
  return <MapPinArea {...rest} className={className} color={fillColor} size={size} />
}

export default MapPinAreaIcon
