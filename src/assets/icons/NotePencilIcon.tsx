import { NotePencilIcon as NotePencil } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function NotePencilIcon({ className, size = 16, fillColor, ...rest }: IconProps) {
  return <NotePencil {...rest} className={className} size={size} color={fillColor} />
}

export default NotePencilIcon
