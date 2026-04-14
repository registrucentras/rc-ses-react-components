import { CaretDownIcon as CaretDown } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretDownIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return <CaretDown {...rest} className={className} size={size} color={fillColor} />
}

export default CaretDownIcon
