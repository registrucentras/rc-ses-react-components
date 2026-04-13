import { CaretDownIcon as CaretDown } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretDownIcon({ className, size = 24, fillColor }: IconProps) {
  return <CaretDown className={className} size={size} color={fillColor} />
}

export default CaretDownIcon
