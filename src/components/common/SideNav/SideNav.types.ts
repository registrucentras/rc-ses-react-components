import { SxProps, Theme } from '@mui/material'

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
