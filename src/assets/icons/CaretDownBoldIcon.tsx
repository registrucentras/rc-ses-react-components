import { CaretDownIcon as CaretDown } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretDownBoldIcon({ className, size = 16, fillColor }: IconProps) {
  return <CaretDown className={className} size={size} weight='bold' color={fillColor} />
}

export default CaretDownBoldIcon
