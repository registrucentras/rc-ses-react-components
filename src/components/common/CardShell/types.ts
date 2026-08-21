import { ReactNode } from 'react'

export type CardShellVariant = 'card' | 'subcard'

export type CardShellTheme = 'default' | 'brand' | 'sunken'

export type RcSesCardShellTestIds = {
  root?: string
  header?: string
  content?: string
  footer?: string
}

export type RcSesCardShellProps = {
  variant?: CardShellVariant
  theme?: CardShellTheme
  fullHeight?: boolean
  header?: ReactNode
  children?: ReactNode
  footer?: ReactNode
  className?: string
  testIds?: RcSesCardShellTestIds
}
