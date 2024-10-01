import { ColorType } from '@/types/common/ColorType'

type IconProps = {
  className?: string
  width?: number
  height?: number
  disabled?: boolean
  color?: ColorType | string
}

export const IconDefaultProps = {
  className: undefined,
  disabled: false,
  color: undefined,
  width: undefined,
  height: undefined,
}

export default IconProps
