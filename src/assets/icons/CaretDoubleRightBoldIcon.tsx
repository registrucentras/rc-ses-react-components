import { CaretDoubleRightIcon as CaretDoubleRight } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretDoubleRightBoldIcon({ className, size = 16, fillColor }: IconProps) {
  return (
    <CaretDoubleRight className={className} size={size} weight='bold' color={fillColor} />
  )
}

export default CaretDoubleRightBoldIcon
