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
  key?: string
  component?: ElementType
}

export type RcSesServiceLinksProps = {
  items: RcSesServiceLinkItem[]
  dividers?: boolean
  isLoading?: boolean
  skeletonCount?: number
  linkComponent?: ElementType
  className?: string
  testIds?: RcSesServiceLinksTestIds
}
