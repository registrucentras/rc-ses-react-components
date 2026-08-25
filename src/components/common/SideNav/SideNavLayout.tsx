import { Box } from '@mui/material'

import normalizeSx from '@/components/utils/normalizeSx'

import RcSesSideNav from '.'
import { RcSesSideNavLayoutProps } from './SideNav.types'

function RcSesSideNavLayout({
  children,
  sidebarWidth = '17rem',
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
      <Box sx={{ width: { xs: '100%', md: sidebarWidth }, flexShrink: 0 }}>
        <RcSesSideNav {...sideNavProps} />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>{children}</Box>
    </Box>
  )
}

export default RcSesSideNavLayout
