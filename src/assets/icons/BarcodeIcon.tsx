import { BarcodeIcon as Barcode } from '@phosphor-icons/react'

import IconProps from '../IconProps'

function BarcodeIcon({ className, fillColor, size = 24, ...rest }: IconProps) {
  return <Barcode {...rest} className={className} size={size} color={fillColor} />
}

export default BarcodeIcon
