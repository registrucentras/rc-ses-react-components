import { ScalesIcon as Scales } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ScalesIcon({ className, fillColor, size = 24 }: IconProps) {
  return <Scales className={className} color={fillColor} size={size} />
}

export default ScalesIcon
