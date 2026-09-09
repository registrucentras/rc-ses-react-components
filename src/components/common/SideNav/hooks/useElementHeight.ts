import { RefObject, useCallback, useEffect, useState } from 'react'

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

  useEffect(() => {
    const element = ref.current
    measure(element)
    if (!element) return undefined

    // The bar changes height in place - the pills wrap, a late web font lands,
    // the media query flips it off entirely - so a resize listener alone would
    // miss it.
    const observer =
      typeof ResizeObserver === 'undefined'
        ? undefined
        : new ResizeObserver(() => measure(element))
    observer?.observe(element)

    const onResize = () => measure(element)
    window.addEventListener('resize', onResize)

    return () => {
      observer?.disconnect()
      window.removeEventListener('resize', onResize)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- ref is a ref, its identity is stable
  }, [measure])

  return height
}

export default useElementHeight
