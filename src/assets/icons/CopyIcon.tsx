import { CopyIcon as CopyFillIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function CopyIcon({
  className,
  fillColor,
  size = 24,
  weight = 'regular',
  ...rest
}: IconProps) {
  return (
    <CopyFillIcon
      {...rest}
      className={className}
      size={size}
      weight={weight}
      color={fillColor}
    />
  )
}

export default CopyIcon
