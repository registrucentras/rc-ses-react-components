import { PlusIcon as Plus } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function PlusIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return <Plus {...rest} className={className} size={size} color={fillColor} />
}

export default PlusIcon
