import { XIcon as X } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CloseIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return <X {...rest} className={className} size={size} color={fillColor} />
}

export default CloseIcon
