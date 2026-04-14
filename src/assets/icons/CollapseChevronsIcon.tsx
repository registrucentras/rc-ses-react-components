import { ArrowsInLineVerticalIcon as ArrowsInLineVertical } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CollapseChevronsIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return (
    <ArrowsInLineVertical
      {...rest}
      className={className}
      size={size}
      weight='bold'
      color={fillColor}
    />
  )
}

export default CollapseChevronsIcon
