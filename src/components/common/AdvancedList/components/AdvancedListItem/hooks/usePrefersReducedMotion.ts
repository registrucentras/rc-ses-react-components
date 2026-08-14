import { useEffect, useState } from 'react'

const QUERY = '(prefers-reduced-motion: reduce)'

const supportsMatchMedia = () =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(
    () => supportsMatchMedia() && window.matchMedia(QUERY).matches,
  )

  useEffect(() => {
    if (!supportsMatchMedia()) {
      return undefined
    }

    const mediaQueryList = window.matchMedia(QUERY)
    const listener = () => setPrefersReducedMotion(mediaQueryList.matches)

    mediaQueryList.addEventListener('change', listener)
    return () => mediaQueryList.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}

export default usePrefersReducedMotion
