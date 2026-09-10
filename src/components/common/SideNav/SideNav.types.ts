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
  // Reports the height of the mobile bar, which is sticky and overlays the
  // scrolling content - 0 on the desktop layout, where the nav overlays nothing.
  // Anything that scrolls the page to a section has to clear it on top of
  // `offset`; RcSesSideNavLayout does that for its own children.
  onOverlayHeightChange?: (height: number) => void
  sx?: SxProps<Theme>
}

// The layout measures the mobile bar for its own children, so the callback is
// not part of its surface.
export type RcSesSideNavLayoutProps = Omit<
  RcSesSideNavProps,
  'sx' | 'onOverlayHeightChange'
> & {
  children: ReactNode
  sidebarWidth?: string
  sx?: SxProps<Theme>
}
