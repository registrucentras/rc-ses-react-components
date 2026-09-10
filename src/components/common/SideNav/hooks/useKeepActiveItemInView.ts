import { RefObject, useEffect } from 'react'

interface UseKeepActiveItemInViewOptions {
  // The element with `overflow: auto`. Its items are matched by `data-item-id`.
  containerRef: RefObject<HTMLElement>
  activeItemId?: string
  axis: 'horizontal' | 'vertical'
  // Off while the container cannot scroll at all, so no work is done for the
  // variant that hugs its content.
  enabled?: boolean
  // 'smooth' is downgraded to 'auto' under prefers-reduced-motion.
  behavior?: ScrollBehavior
}

/**
 * Scrolls the container the minimum amount needed to bring the active item into
 * view - the nav's own equivalent of `scrollIntoView({ block: 'nearest' })`.
 *
 * Deliberately not `scrollIntoView`: that also scrolls every scrollable
 * ancestor, so bringing a nav item into view would drag the page along with it
 * and fight the scroll-spy that picked the item in the first place.
 */
function useKeepActiveItemInView({
  containerRef,
  activeItemId,
  axis,
  enabled = true,
  behavior = 'auto',
}: UseKeepActiveItemInViewOptions) {
  useEffect(() => {
    if (!enabled || !activeItemId) return

    const container = containerRef.current
    // Compared as an attribute value rather than interpolated into a selector:
    // ids are arbitrary strings, and quotes or backslashes break a selector.
    const target = Array.from(
      container?.querySelectorAll<HTMLElement>('[data-item-id]') ?? [],
    ).find((element) => element.dataset.itemId === activeItemId)
    if (!container || !target) return

    // Viewport rects on both, so they agree: offsetTop/offsetLeft would be
    // relative to the nearest positioned ancestor, not the scroll container.
    const containerRect = container.getBoundingClientRect()
    const targetRect = target.getBoundingClientRect()
    const isVertical = axis === 'vertical'
    const overflowStart = isVertical
      ? containerRect.top - targetRect.top
      : containerRect.left - targetRect.left
    const overflowEnd = isVertical
      ? targetRect.bottom - containerRect.bottom
      : targetRect.right - containerRect.right

    let delta = 0
    if (overflowStart > 0) delta = -overflowStart
    else if (overflowEnd > 0) delta = overflowEnd
    if (delta === 0) return

    const property = isVertical ? 'scrollTop' : 'scrollLeft'
    const position = container[property] + delta
    const prefersReducedMotion = window.matchMedia?.(
      '(prefers-reduced-motion: reduce)',
    ).matches

    // The direct assignment is both what an instant scroll wants and the only
    // path available in layout-less environments, where Element.scrollTo is absent.
    if (
      behavior === 'smooth' &&
      !prefersReducedMotion &&
      typeof container.scrollTo === 'function'
    ) {
      container.scrollTo({ [isVertical ? 'top' : 'left']: position, behavior: 'smooth' })
    } else {
      container[property] = position
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- containerRef is a ref, its identity is stable
  }, [activeItemId, axis, behavior, enabled])
}

export default useKeepActiveItemInView
export type { UseKeepActiveItemInViewOptions }
