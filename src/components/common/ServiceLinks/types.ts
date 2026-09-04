import { ElementType, ReactNode } from 'react'

export type RcSesServiceLinksTestIds = {
  root?: string
  item?: string
  itemLabel?: string
  itemIcon?: string
}

export type RcSesServiceLinkItem = {
  label: ReactNode
  href?: string
  target?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
  disabled?: boolean
  /**
   * Optional stable identity used as the React key when rendering the list.
   * Stripped out before spreading onto the row, so it never reaches the DOM.
   */
  key?: string
}

export type RcSesServiceLinksProps = {
  items: RcSesServiceLinkItem[]
  dividers?: boolean
  isLoading?: boolean
  skeletonCount?: number
  /**
   * Custom element used to render navigable rows. Receives `href` (and other
   * anchor props). Falls back to a native `<a>` when omitted. For router
   * links pass a small adapter, e.g.
   * `({ href, ...rest }) => <RouterLink to={href} {...rest} />`.
   */
  linkComponent?: ElementType
  className?: string
  testIds?: RcSesServiceLinksTestIds
}
