import { CaretDownIcon as CaretDown } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretDownBoldIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return (
    <CaretDown
      {...rest}
      className={className}
      size={size}
      weight='bold'
      color={fillColor}
    />
  )
}

export default CaretDownBoldIcon
