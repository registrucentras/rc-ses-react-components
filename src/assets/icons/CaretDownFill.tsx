import { CaretDownIcon as CaretDown } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretDownFill({ className, size = 24, fillColor }: IconProps) {
  return <CaretDown className={className} size={size} weight='fill' color={fillColor} />
}

export default CaretDownFill
