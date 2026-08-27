import { Box } from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'

import palette, { common } from '@/theme/palette'

import { RcSesSideNavItem } from '../SideNav.types'
import SideNavPill from './SideNavPill'

const FADE_WIDTH = '2rem'
const SCROLL_EPSILON = 1

type Props = {
  items: RcSesSideNavItem[]
  activeItemId?: string
  onItemClick?: (id: string) => void
  getItemAriaLabel: (item: RcSesSideNavItem) => string | undefined
}

type ScrollState = {
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

  useEffect(() => {
    if (!activeItemId) return
    const container = scrollRef.current
    const target = container?.querySelector<HTMLElement>(
      `[data-item-id="${activeItemId}"]`,
    )
    if (!container || !target) return

    // Viewport rects on both, so they agree: offsetLeft would be relative to the
    // positioned wrapper, not the scroll container.
    const containerRect = container.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const overflowLeft = containerRect.left - targetRect.left
    const overflowRight = targetRect.right - containerRect.right

    if (overflowLeft > 0) {
      container.scrollLeft -= overflowLeft
    } else if (overflowRight > 0) {
      container.scrollLeft += overflowRight
    }
  }, [activeItemId])

  return (
    <Box>
      <Box sx={{ position: 'relative' }}>
        <Box
          ref={scrollRef}
          onScroll={updateScrollState}
          sx={{
            display: 'flex',
            gap: '0.5rem',
            overflowX: 'auto',
            overflowY: 'hidden',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
            padding: '0.5rem 0.75rem',
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
              background: `linear-gradient(to right, ${common.white}00, ${common.white} ${FADE_WIDTH})`,
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
            height: '0.25rem',
            marginX: '0.75rem',
            marginTop: '0.25rem',
            borderRadius: '9999px',
            backgroundColor: palette.grey[200],
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
              borderRadius: '9999px',
              backgroundColor: palette.grey[400],
            }}
          />
        </Box>
      )}
    </Box>
  )
}

export default SideNavPillList
