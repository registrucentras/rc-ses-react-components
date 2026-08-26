import { Box } from '@mui/material'

import normalizeSx from '@/components/utils/normalizeSx'

import RcSesSideNav from '.'
import { RcSesSideNavLayoutProps } from './SideNav.types'

function RcSesSideNavLayout({
  children,
  sidebarWidth = '17rem',
  offset,
  sx,
  ...sideNavProps
}: RcSesSideNavLayoutProps) {
  return (
    <Box
      sx={[
        { display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '2rem' },
        ...normalizeSx(sx),
      ]}
    >
      <RcSesSideNav
        {...sideNavProps}
        offset={offset}
        sx={{
          position: 'sticky',
          top: `${offset ?? 0}px`,
          alignSelf: { xs: 'stretch', md: 'flex-start' },
          width: { md: sidebarWidth },
          flexShrink: 0,
        }}
      />
      <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>
    </Box>
  )
}

export default RcSesSideNavLayout
export type { RcSesSideNavLayoutProps } from './SideNav.types'
