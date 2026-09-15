import { Box } from '@mui/material'
import { CSSProperties, useRef, useState } from 'react'

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
  overflow,
  offset,
  sidebarWidth = '17rem',
  sx,
}: RcSesSideNavLayoutProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  // The mobile bar is sticky and sits on top of the content, so a section
  // scrolled to at `offset` would land underneath it - heading first. Everything
  // that scrolls the page has to clear the bar as well as the page header.
  const [overlayHeight, setOverlayHeight] = useState(0)
  const scrollOffset = (offset ?? 0) + overlayHeight

  const isControlled = controlledActiveItemId !== undefined
  const itemIds = items.map((item) => item.id)
  const scrollSpy = useSideNavScrollSpy({
    itemIds: isControlled ? [] : itemIds,
    offset: scrollOffset,
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
        overflow={overflow}
        offset={offset}
        onOverlayHeightChange={setOverlayHeight}
        sx={{
          position: 'sticky',
          top: `${offset ?? 0}px`,
          alignSelf: { xs: 'stretch', md: 'flex-start' },
          width: { md: sidebarWidth },
          flexShrink: 0,
        }}
      />
      {/*
        Sections are the consumer's, so the layout cannot set their
        scroll-margin itself; it publishes the offset they need instead:
        `scrollMarginTop: 'var(--rc-ses-sidenav-scroll-offset)'`. Inline rather
        than in sx, so a resize rewrites one property instead of minting a class.
      */}
      <Box
        ref={contentRef}
        style={{ '--rc-ses-sidenav-scroll-offset': `${scrollOffset}px` } as CSSProperties}
        sx={{ flex: 1, minWidth: 0 }}
      >
        {children}
      </Box>
    </Box>
  )
}

export default RcSesSideNavLayout
export type { RcSesSideNavLayoutProps } from './SideNav.types'
