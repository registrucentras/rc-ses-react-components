import { ShoppingCartIcon as PhosphorShoppingCartIcon } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function ShoppingCartIcon({ className, size = 24, fillColor, ...rest }: IconProps) {
  return (
    <PhosphorShoppingCartIcon
      {...rest}
      className={className}
      size={size}
      color={fillColor}
    />
  )
}

export default ShoppingCartIcon
