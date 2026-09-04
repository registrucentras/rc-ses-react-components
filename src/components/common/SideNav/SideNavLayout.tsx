import { Box } from '@mui/material'
import { useRef } from 'react'

import normalizeSx from '@/components/utils/normalizeSx'

import RcSesSideNav from '.'
import { RcSesSideNavLayoutProps } from './SideNav.types'
import useSideNavScrollSpy from './hooks/useSideNavScrollSpy'

function RcSesSideNavLayout({
  children,
  items,
  activeItemId: controlledActiveItemId,
  onItemClick,
  title,
  offset,
  sidebarWidth = '17rem',
  sx,
}: RcSesSideNavLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  const isControlled = controlledActiveItemId !== undefined
  const itemIds = items.map((item) => item.id)
  const scrollSpy = useSideNavScrollSpy({
    itemIds: isControlled ? [] : itemIds,
    offset,
    scope: contentRef,
  })
  const activeItemId = isControlled ? controlledActiveItemId : scrollSpy.activeItemId

  const isInteractive = !isControlled || !!onItemClick
  const handleItemClick = isInteractive
    ? (id: string) => {
        if (!isControlled) scrollSpy.scrollToItem(id)
        onItemClick?.(id)
      }
    : undefined

  return (
    <Box
      sx={[
        { display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '2rem' },
        ...normalizeSx(sx),
      ]}
    >
      <RcSesSideNav
        items={items}
        activeItemId={activeItemId}
        onItemClick={handleItemClick}
        title={title}
        sx={{
          position: 'sticky',
          top: `${offset ?? 0}px`,
          alignSelf: { xs: 'stretch', md: 'flex-start' },
          width: { md: sidebarWidth },
          flexShrink: 0,
        }}
      />
      <Box ref={contentRef} sx={{ flex: 1, minWidth: 0 }}>
        {children}
      </Box>
    </Box>
  )
}

export default RcSesSideNavLayout
export type { RcSesSideNavLayoutProps } from './SideNav.types'
