import { RefObject, useCallback, useLayoutEffect, useState } from 'react'

/**
 * Rendered height of an element, in pixels.
 *
 * 0 while the element is absent or `display: none`, which is what makes this
 * usable as a breakpoint test: the nav's mobile bar and desktop column are
 * swapped by a media query, so measuring the one that is switched off yields 0
 * without the hook having to know anything about breakpoints.
 */
function useElementHeight(ref: RefObject<HTMLElement>): number {
  const [height, setHeight] = useState(0)

  const measure = useCallback((element: HTMLElement | null) => {
    setHeight(element ? Math.round(element.getBoundingClientRect().height) : 0)
  }, [])

  // Before paint, not after: the height feeds the offset the page is scrolled
  // by, and a consumer that scrolls on mount - honouring a #hash deep link, say
  // - runs its own effect after this one and would otherwise read 0.
  useLayoutEffect(() => {
    const element = ref.current
    measure(element)
    if (!element) return undefined

    // The bar changes height in place - the pills wrap, a late web font lands,
    // the media query switches it off entirely - and a ResizeObserver reports
    // all of it, viewport resizes included. So the window listener is the
    // fallback for where ResizeObserver is missing, not a second opinion
    // running alongside it.
    if (typeof ResizeObserver !== 'undefined') {
      const observer = new ResizeObserver(() => measure(element))
      observer.observe(element)
      return () => observer.disconnect()
    }

    const onResize = () => measure(element)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ref is a ref, its identity is stable
  }, [measure])

  return height
}

export default useElementHeight
