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
  /**
   * Overrides the `variant` preset's header-to-content gap (`cards[variant].gap`).
   * Use when a composition needs a fixed spacing regardless of breakpoint.
   */
  contentGap?: string
  /**
   * Overrides the `variant` preset's content-to-footer gap
   * (`cards[variant].footerGap`).
   */
  footerGap?: string
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
