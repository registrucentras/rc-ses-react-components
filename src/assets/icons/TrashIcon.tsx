import { TrashIcon as Trash } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function TrashIcon({
  className,
  fillColor,
  size = 24,
  weight = 'regular',
  ...rest
}: IconProps) {
  return (
    <Trash
      {...rest}
      className={className}
      size={size}
      weight={weight}
      color={fillColor}
    />
  )
}

export default TrashIcon
