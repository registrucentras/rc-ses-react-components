import { ReactNode } from 'react'

export type CardShellVariant = 'card' | 'subcard'

export type CardShellTheme = 'default' | 'brand' | 'sunken'

export interface RcSesCardShellTestIds {
  root?: string
  header?: string
  content?: string
  footer?: string
}

export interface RcSesCardShellProps {
  variant?: CardShellVariant
  theme?: CardShellTheme
  fullHeight?: boolean
  /** Renders the shell without any border. */
  borderless?: boolean
  /** Header row, normally `RcSesTitleBlock`. The shell only provides the slot. */
  header?: ReactNode
  children?: ReactNode
  /**
   * Footer row, normally `RcSesCardFooter`. The shell only provides the slot, so
   * direction and alignment belong to the footer block rather than here.
   */
  footer?: ReactNode
  className?: string
  testIds?: RcSesCardShellTestIds
}
