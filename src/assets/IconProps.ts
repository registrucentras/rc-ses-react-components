import type { IconWeight } from '@phosphor-icons/react'
import type { SVGProps } from 'react'

type IconProps = SVGProps<SVGSVGElement> & {
  fillColor?: string
  size?: number
  weight?: IconWeight
}

export default IconProps
