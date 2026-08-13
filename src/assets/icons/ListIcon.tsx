import { ListIcon as List } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ListIcon({
  className,
  fillColor,
  size = 24,
  weight = 'regular',
  ...rest
}: IconProps) {
  return (
    <List {...rest} className={className} size={size} weight={weight} color={fillColor} />
  )
}

export default ListIcon
