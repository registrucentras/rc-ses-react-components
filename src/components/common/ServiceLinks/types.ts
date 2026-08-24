import { ReactNode } from 'react'

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
  key?: string
}

export type RcSesServiceLinksProps = {
  items: RcSesServiceLinkItem[]
  dividers?: boolean
  isLoading?: boolean
  skeletonCount?: number
  /**
   * Custom link wrapper for navigable rows. Receives href/target/rel/onClick
   * and must render them on the returned node (e.g. router `<Link>`,
   * `<NavLink>`). When omitted, a native `<a>` is used.
   */
  renderLink?: (args: {
    href: string
    target?: string
    rel?: string
    onClick?: (e: React.MouseEvent<HTMLElement>) => void
    children: ReactNode
    className?: string
  }) => ReactNode
  className?: string
  testIds?: RcSesServiceLinksTestIds
}
