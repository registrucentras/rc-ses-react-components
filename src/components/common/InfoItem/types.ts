import { ReactNode } from 'react'

import IconProps from '@/assets/IconProps'

import { CardHeadingLevel } from '../CardShell/CardHeader/types'

export type RcSesInfoItemTestIds = {
  root?: string
  icon?: string
  heading?: string
  description?: string
  action?: string
}

export type RcSesInfoItemProps = {
  title: ReactNode
  description?: ReactNode
  headingLevel?: CardHeadingLevel
  /**
   * Leading Phosphor-style icon rendered inside a circular background.
   * Defaults to `InfoFillIcon`.
   */
  Icon?: React.JSXElementConstructor<IconProps>
  /**
   * Optional href — when provided the card renders as an anchor and shows
   * a trailing arrow affordance.
   */
  href?: string
  /**
   * Optional click handler — when provided the card is rendered as a button
   * and shows a trailing arrow affordance.
   */
  onClick?: () => void
  /**
   * Force the trailing arrow on/off. Defaults to `true` when `href`/`onClick`
   * is provided, `false` otherwise.
   */
  showArrow?: boolean
  className?: string
  testIds?: RcSesInfoItemTestIds
}
