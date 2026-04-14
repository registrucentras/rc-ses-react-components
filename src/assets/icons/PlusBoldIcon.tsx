import { PlusIcon as Plus } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function PlusBoldIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return (
    <Plus {...rest} className={className} size={size} weight='bold' color={fillColor} />
  )
}

export default PlusBoldIcon
