import { UploadSimpleIcon as UploadSimple } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function UploadSimpleIcon({ className, size = 24, fillColor }: IconProps) {
  return <UploadSimple className={className} size={size} color={fillColor} />
}

export default UploadSimpleIcon
