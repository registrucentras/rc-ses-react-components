import { UploadSimpleIcon as UploadSimple } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function UploadSimpleIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return <UploadSimple {...rest} className={className} size={size} color={fillColor} />
}

export default UploadSimpleIcon
