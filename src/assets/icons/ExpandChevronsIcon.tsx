import { ArrowsOutLineVerticalIcon as ArrowsOutLineVertical } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ExpandChevronsIcon({ className, size = 16, fillColor }: IconProps) {
  return (
    <ArrowsOutLineVertical
      className={className}
      size={size}
      weight='bold'
      color={fillColor}
    />
  )
}

export default ExpandChevronsIcon
