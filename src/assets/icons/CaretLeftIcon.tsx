import { CaretLeftIcon as CaretLeft } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CaretLeftIcon({ className, size = 16, fillColor }: IconProps) {
  return <CaretLeft className={className} size={size} color={fillColor} />
}

export default CaretLeftIcon
