import { MagnifyingGlassIcon as MagnifyingGlass } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function MagnifyingGlassIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return <MagnifyingGlass {...rest} className={className} size={size} color={fillColor} />
}

export default MagnifyingGlassIcon
