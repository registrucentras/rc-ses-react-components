import { ComponentType } from 'react'

import {
  common,
  error,
  grey,
  overlays,
  primary,
  secondary,
  warning,
} from '@/theme/palette'

export type ListWithIconsItemTone = 'default' | 'secondary' | 'muted' | 'link'

export type PaletteColor =
  | (typeof primary)[keyof typeof primary]
  | (typeof secondary)[keyof typeof secondary]
  | (typeof grey)[keyof typeof grey]
  | (typeof warning)[keyof typeof warning]
  | (typeof error)[keyof typeof error]
  | (typeof overlays)[keyof typeof overlays]
  | (typeof common)[keyof typeof common]

export interface ListWithIconsItemData {
  icon?: ComponentType<{ fillColor?: string; size?: number }>
  text?: string
  disabled?: boolean
  tooltip?: string
  textColor?: ListWithIconsItemTone | PaletteColor
}
