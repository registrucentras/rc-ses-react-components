import { Box } from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import { RcSesSideNavItem } from '../SideNav.types'
import useKeepActiveItemInView from '../hooks/useKeepActiveItemInView'
import SideNavPill from './SideNavPill'

const FADE_WIDTH = spacingRoleBasedTokens['space-32']
// The mobile scroll indicator is not in Figma; no semantic role matches these.
const SCROLL_TRACK_BG = 'var(--rc-color-neutrals-200)'
const SCROLL_THUMB_BG = 'var(--rc-color-neutrals-400)'
const SCROLL_EPSILON = 1

interface Props {
  items: RcSesSideNavItem[]
  activeItemId?: string
  onItemClick?: (id: string) => void
  getItemAriaLabel: (item: RcSesSideNavItem) => string | undefined
}

interface ScrollState {
  hasOverflow: boolean
  showRightFade: boolean
  thumbWidth: number
  thumbOffset: number
  // Gap to the viewport's right edge, so the fade can bleed over the page gutter.
  edgeBleed: number
}

const INITIAL_SCROLL_STATE: ScrollState = {
  hasOverflow: false,
  showRightFade: false,
  thumbWidth: 100,
  thumbOffset: 0,
  edgeBleed: 0,
}

function SideNavPillList({ items, activeItemId, onItemClick, getItemAriaLabel }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [scrollState, setScrollState] = useState<ScrollState>(INITIAL_SCROLL_STATE)

  const updateScrollState = useCallback(() => {
    const el = scrollRef.current
    if (!el) return

    const hasOverflow = el.scrollWidth > el.clientWidth + SCROLL_EPSILON
    const showRightFade =
      hasOverflow && el.scrollLeft < el.scrollWidth - el.clientWidth - SCROLL_EPSILON

    // Not innerWidth: that counts the vertical scrollbar.
    const edgeBleed = Math.max(
      0,
      document.documentElement.clientWidth - el.getBoundingClientRect().right,
    )

    const next: ScrollState = {
      hasOverflow,
      showRightFade,
      thumbWidth: hasOverflow ? (el.clientWidth / el.scrollWidth) * 100 : 100,
      thumbOffset: hasOverflow ? (el.scrollLeft / el.scrollWidth) * 100 : 0,
      edgeBleed,
    }

    // onScroll fires far more often than these values actually change.
    setScrollState((prev) =>
      prev.hasOverflow === next.hasOverflow &&
      prev.showRightFade === next.showRightFade &&
      prev.thumbWidth === next.thumbWidth &&
      prev.thumbOffset === next.thumbOffset &&
      prev.edgeBleed === next.edgeBleed
        ? prev
        : next,
    )
  }, [])

  useEffect(() => {
    const el = scrollRef.current
    updateScrollState()
    if (!el) return undefined

    const resizeObserver = new ResizeObserver(updateScrollState)
    resizeObserver.observe(el)
    // The pills too: a late web font changes scrollWidth, not the container's size.
    Array.from(el.children).forEach((child) => resizeObserver.observe(child))
    // A viewport resize inside a max-width container does not resize the list.
    window.addEventListener('resize', updateScrollState)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('resize', updateScrollState)
    }
  }, [items, updateScrollState])

  useKeepActiveItemInView({
    containerRef: scrollRef,
    activeItemId,
    axis: 'horizontal',
  })

  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <Box
          ref={scrollRef}
          onScroll={updateScrollState}
          sx={{
            display: 'flex',
            gap: spacingRoleBasedTokens['space-8'],
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            paddingX: spacingRoleBasedTokens['space-12'],
            paddingY: spacingRoleBasedTokens['space-8'],
          }}
        >
          {items.map((item) => (
            <Box key={item.id} data-item-id={item.id} sx={{ display: 'flex' }}>
              <SideNavPill
                label={item.label}
                count={item.count}
                ariaLabel={getItemAriaLabel(item)}
                active={item.id === activeItemId}
                onClick={onItemClick ? () => onItemClick(item.id) : undefined}
              />
            </Box>
          ))}
        </Box>

        {scrollState.showRightFade && (
          <Box
            aria-hidden
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: `-${scrollState.edgeBleed}px`,
              width: `calc(${FADE_WIDTH} + ${scrollState.edgeBleed}px)`,
              // Stop at FADE_WIDTH, not 100%, so the bleed stays solid.
              background: `linear-gradient(to right, transparent, ${colorTokens['surface-base']} ${FADE_WIDTH})`,
              pointerEvents: 'none',
            }}
          />
        )}
      </Box>

      {scrollState.hasOverflow && (
        <Box
          aria-hidden
          sx={{
            position: 'relative',
            height: spacingRoleBasedTokens['space-4'],
            marginX: spacingRoleBasedTokens['space-12'],
            marginTop: spacingRoleBasedTokens['space-4'],
            borderRadius: borderTokens['radius-pill'],
            backgroundColor: SCROLL_TRACK_BG,
            overflow: 'hidden',
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: `${scrollState.thumbOffset}%`,
              width: `${scrollState.thumbWidth}%`,
              borderRadius: borderTokens['radius-pill'],
              backgroundColor: SCROLL_THUMB_BG,
            }}
          />
        </Box>
      )}
    </Box>
  )
}

export default SideNavPillList
