import { CaretLeftIcon as CaretLeft } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretLeftBoldIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return (
    <CaretLeft
      {...rest}
      className={className}
      size={size}
      weight='bold'
      color={fillColor}
    />
  )
}

export default CaretLeftBoldIcon
