import { PencilSimpleLineIcon as PencilSimpleLine } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function PencilSimpleLineIcon({ className, fillColor, size = 24, ...rest }: IconProps) {
  return (
    <PencilSimpleLine
      {...rest}
      className={className}
      size={size}
      weight='fill'
      color={fillColor}
    />
  )
}

export default PencilSimpleLineIcon
