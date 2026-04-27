import { ComponentType } from 'react'

export interface ListWithIconsItemData {
  icon?: ComponentType<{ fillColor?: string; size?: number }>
  text?: string
  disabled?: boolean
  tooltip?: string
  textColor?: string
}
