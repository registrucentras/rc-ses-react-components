import { Box, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import normalizeSx from '@/components/utils/normalizeSx'
import palette, { common } from '@/theme/palette'

import { RcSesSideNavItem, RcSesSideNavProps } from './SideNav.types'
import SideNavPillList from './components/SideNavPillList'
import SideNavRow from './components/SideNavRow'
import useElementHeight from './hooks/useElementHeight'
import useKeepActiveItemInView from './hooks/useKeepActiveItemInView'

const ROW_GAP = '0.25rem'

function RcSesSideNav({
  items,
  activeItemId,
  onItemClick,
  title,
  overflow = 'fit',
  offset = 0,
  onOverlayHeightChange,
  sx,
}: RcSesSideNavProps) {
  const { t } = useTranslation('common', { keyPrefix: 'components.RcSesSideNav' })
  const navTitle = title ?? t('title')
  const rowListRef = useRef<HTMLDivElement>(null)
  const pillBarRef = useRef<HTMLDivElement>(null)

  const isScrollable = overflow === 'scroll'
  useKeepActiveItemInView({
    containerRef: rowListRef,
    activeItemId,
    axis: 'vertical',
    enabled: isScrollable,
    behavior: 'smooth',
  })

  // 0 above the mobile breakpoint, where the bar is display: none and the nav is
  // a column beside the content rather than a layer on top of it.
  const overlayHeight = useElementHeight(pillBarRef)
  useEffect(() => {
    onOverlayHeightChange?.(overlayHeight)
  }, [overlayHeight, onOverlayHeightChange])

  const getItemAriaLabel = (item: RcSesSideNavItem) =>
    item.count !== undefined
      ? t('itemLabel', { label: item.label, count: item.count })
      : undefined

  return (
    <Box
      component='nav'
      aria-label={navTitle}
      sx={[
        {
          width: '100%',
          // Only the mobile bar overlays scrolling content.
          backgroundColor: { xs: common.white, md: 'transparent' },
          // Above content setting zIndex: 1 - the nav precedes it in DOM order.
          zIndex: 2,
        },
        ...normalizeSx(sx),
      ]}
    >
      <Box
        sx={{
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          gap: ROW_GAP,
          // Capped to what is left of the viewport below the sticky header, so
          // the list can never run past the bottom of the screen. The title stays
          // put and only the rows scroll, hence minHeight: 0 on this flex column.
          ...(isScrollable && { maxHeight: `calc(100vh - ${offset}px)`, minHeight: 0 }),
        }}
      >
        <Typography
          sx={{
            width: '100%',
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
            color: palette.grey[600],
          }}
        >
          {navTitle}
        </Typography>
        <Box
          ref={rowListRef}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: ROW_GAP,
            ...(isScrollable && { overflowY: 'auto', minHeight: 0 }),
          }}
        >
          {items.map((item) => (
            <SideNavRow
              key={item.id}
              itemId={item.id}
              label={item.label}
              count={item.count}
              ariaLabel={getItemAriaLabel(item)}
              active={item.id === activeItemId}
              onClick={onItemClick ? () => onItemClick(item.id) : undefined}
            />
          ))}
        </Box>
      </Box>

      <Box ref={pillBarRef} sx={{ display: { xs: 'block', md: 'none' } }}>
        <SideNavPillList
          items={items}
          activeItemId={activeItemId}
          onItemClick={onItemClick}
          getItemAriaLabel={getItemAriaLabel}
        />
      </Box>
    </Box>
  )
}

export default RcSesSideNav
export type {
  RcSesSideNavItem,
  RcSesSideNavOverflow,
  RcSesSideNavProps,
} from './SideNav.types'
