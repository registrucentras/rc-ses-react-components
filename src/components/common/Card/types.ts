import { ReactNode } from 'react'

export type CardVariant = 'card' | 'subcard'

export type CardTheme = 'default' | 'brand' | 'sunken'

export type CardHeadingLevel = 2 | 3 | 4 | 5 | 6

export type RcSesCardTestIds = {
  root?: string
  header?: string
  content?: string
  footer?: string
}

export type RcSesCardProps = {
  variant?: CardVariant
  theme?: CardTheme
  fullHeight?: boolean
  header?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
  testIds?: RcSesCardTestIds
}

export type RcSesCardHeaderTestIds = {
  root?: string
  icon?: string
  heading?: string
  badge?: string
  description?: string
  actions?: string
}

export type RcSesCardHeaderProps = {
  title: ReactNode
  headingLevel?: CardHeadingLevel
  icon?: ReactNode
  badge?: ReactNode
  description?: ReactNode
  actions?: ReactNode
  className?: string
  testIds?: RcSesCardHeaderTestIds
}
