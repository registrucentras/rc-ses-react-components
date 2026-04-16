import { CaretDoubleLeftIcon as CaretDoubleLeft } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretDoubleLeftBoldIcon({
  className,
  size = 16,
  fillColor,
  ...rest
}: IconProps) {
  return (
    <CaretDoubleLeft
      {...rest}
      className={className}
      size={size}
      weight='bold'
      color={fillColor}
    />
  )
}

export default CaretDoubleLeftBoldIcon
