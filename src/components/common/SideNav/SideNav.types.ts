import { SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'

export type RcSesSideNavItem = {
  id: string
  label: string
  count?: number
}

export type RcSesSideNavProps = {
  // In document order - scroll-spy compares section positions in list order.
  items: RcSesSideNavItem[]
  activeItemId?: string
  onItemClick?: (id: string) => void
  title?: string
  sx?: SxProps<Theme>
}

export type RcSesSideNavLayoutProps = Omit<RcSesSideNavProps, 'sx'> & {
  children: ReactNode
  sidebarWidth?: string
  offset?: number
  sx?: SxProps<Theme>
}
