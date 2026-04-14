import { CaretDownIcon as CaretDown } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretDownFill({ className, size = 24, fillColor, ...rest }: IconProps) {
  return (
    <CaretDown
      {...rest}
      className={className}
      size={size}
      weight='fill'
      color={fillColor}
    />
  )
}

export default CaretDownFill
