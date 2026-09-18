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

/**
 * Any color value that exists in the design system palette (`@/theme/palette`),
 * e.g. `secondary['700']` or `primary.main`. Prevents passing arbitrary/hardcoded
 * colors that aren't sourced from the palette.
 */
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
  /**
   * DS "Text" token name, or a custom color from `@/theme/palette`.
   * Defaults to `'secondary'` (grey[600]), matching the Figma Meta component
   * (node 46320:2805) which binds meta icon + text to Text/secondary.
   */
  textColor?: ListWithIconsItemTone | PaletteColor
}
