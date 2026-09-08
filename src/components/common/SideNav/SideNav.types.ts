import { SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'

export interface RcSesSideNavItem {
  id: string
  label: string
  count?: number
}

// 'fit' - the nav hugs its items, however tall the list gets.
// 'scroll' - the desktop list is capped to the viewport and scrolls inside itself,
// keeping the active item reachable when there are more topics than fit.
export type RcSesSideNavOverflow = 'fit' | 'scroll'

export interface RcSesSideNavProps {
  // In document order - scroll-spy compares section positions in list order.
  items: RcSesSideNavItem[]
  activeItemId?: string
  onItemClick?: (id: string) => void
  title?: string
  overflow?: RcSesSideNavOverflow
  // Height of the sticky page header the nav sits below. Decides both where the
  // nav sticks and, with overflow='scroll', how tall it may grow.
  offset?: number
  sx?: SxProps<Theme>
}

export type RcSesSideNavLayoutProps = Omit<RcSesSideNavProps, 'sx'> & {
  children: ReactNode
  sidebarWidth?: string
  sx?: SxProps<Theme>
}
