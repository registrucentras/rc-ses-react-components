import { PencilSimpleLineIcon as PencilSimpleLine } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function PencilSimpleLineIcon({
  className,
  fillColor,
  size = 24,
  weight,
  ...rest
}: IconProps) {
  return (
    <PencilSimpleLine
      {...rest}
      className={className}
      size={size}
      weight={weight || 'regular'}
      color={fillColor}
    />
  )
}

export default PencilSimpleLineIcon
