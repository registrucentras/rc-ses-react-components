import { CaretRightIcon as CaretRight } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretRightBoldIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return (
    <CaretRight
      {...rest}
      className={className}
      size={size}
      weight='bold'
      color={fillColor}
    />
  )
}

export default CaretRightBoldIcon
