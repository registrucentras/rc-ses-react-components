import { ReactNode } from 'react'

export type CardTier = 'card' | 'subcard'

export type CardTheme = 'default' | 'brand' | 'sunken'

export type CardHeadingLevel = 2 | 3 | 4 | 5 | 6

export type RcSesCardV2TestIds = {
  root?: string
  header?: string
  heading?: string
  badge?: string
  description?: string
  icon?: string
  headerActions?: string
  content?: string
  footer?: string
}

export type RcSesCardV2Props = {
  tier?: CardTier
  theme?: CardTheme
  /**
   * When true, the card stretches to fill its container height and the footer
   * is pinned to the bottom (useful in equal-height grids of cards).
   */
  fullHeight?: boolean
  heading?: ReactNode
  headingLevel?: CardHeadingLevel
  description?: ReactNode
  icon?: ReactNode
  badge?: ReactNode
  headerActions?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
  testIds?: RcSesCardV2TestIds
}
