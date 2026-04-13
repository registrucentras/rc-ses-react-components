import { ArrowRightIcon as PhosphorArrowRightIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ArrowRightIcon({ className, size = 24, fillColor }: IconProps) {
  return <PhosphorArrowRightIcon className={className} size={size} color={fillColor} />
}

export default ArrowRightIcon
