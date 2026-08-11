import { UserIcon as User } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function UserIcon({
  className,
  fillColor,
  size = 24,
  weight = 'regular',
  ...rest
}: IconProps) {
  return (
    <User {...rest} className={className} size={size} weight={weight} color={fillColor} />
  )
}

export default UserIcon
