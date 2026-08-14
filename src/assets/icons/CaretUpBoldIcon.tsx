import { CaretUpIcon as CaretUp } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretUpBoldIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return (
    <CaretUp
      {...rest}
      className={className}
      size={size}
      weight='bold'
      color={fillColor}
    />
  )
}

export default CaretUpBoldIcon
