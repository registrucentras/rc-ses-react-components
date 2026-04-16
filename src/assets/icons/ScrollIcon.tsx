import { ScrollIcon as Scroll } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ScrollIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return <Scroll {...rest} className={className} size={size} color={fillColor} />
}

export default ScrollIcon
