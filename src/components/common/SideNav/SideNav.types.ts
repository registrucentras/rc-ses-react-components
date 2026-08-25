import { SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'

export type RcSesSideNavItem = {
  id: string
  label: string
  count?: number
}

export type RcSesSideNavProps = {
  items: RcSesSideNavItem[]
  activeItemId?: string
  onItemClick?: (id: string) => void
  title?: string
  offset?: number
  sx?: SxProps<Theme>
}

export type RcSesSideNavLayoutProps = Omit<RcSesSideNavProps, 'sx'> & {
  children: ReactNode
  sidebarWidth?: string
  sx?: SxProps<Theme>
}
