import { WarningIcon as Warning } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function WarningFillIcon({ className, size = 24, fillColor }: IconProps) {
  return <Warning className={className} size={size} weight='fill' color={fillColor} />
}
export default WarningFillIcon
