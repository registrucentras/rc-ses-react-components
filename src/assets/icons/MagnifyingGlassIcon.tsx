import { MagnifyingGlassIcon as MagnifyingGlass } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function MagnifyingGlassIcon({ className, size = 24, fillColor }: IconProps) {
  return <MagnifyingGlass className={className} size={size} color={fillColor} />
}

export default MagnifyingGlassIcon
