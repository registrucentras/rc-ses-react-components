import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, test, vi } from 'vitest'

import usePrefersReducedMotion from './usePrefersReducedMotion'

const QUERY = '(prefers-reduced-motion: reduce)'

const createMatchMediaMock = (initialMatches: boolean) => {
  let matches = initialMatches
  const listeners = new Set<() => void>()

  const mediaQueryList = {
    get matches() {
      return matches
    },
    addEventListener: vi.fn((_event: string, listener: () => void) => {
      listeners.add(listener)
    }),
    removeEventListener: vi.fn((_event: string, listener: () => void) => {
      listeners.delete(listener)
    }),
  }

  return {
    matchMedia: vi.fn(() => mediaQueryList),
    mediaQueryList,
    setMatches: (next: boolean) => {
      matches = next
      listeners.forEach((listener) => listener())
    },
  }
}

describe('usePrefersReducedMotion', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
  })

  test('reflects the current matchMedia value on mount', () => {
    const { matchMedia } = createMatchMediaMock(true)
    vi.stubGlobal('matchMedia', matchMedia)

    const { result } = renderHook(() => usePrefersReducedMotion())

    expect(result.current).toBe(true)
    expect(matchMedia).toHaveBeenCalledWith(QUERY)
  })

  test('updates when the OS-level preference changes', () => {
    const { matchMedia, setMatches } = createMatchMediaMock(false)
    vi.stubGlobal('matchMedia', matchMedia)

    const { result } = renderHook(() => usePrefersReducedMotion())
    expect(result.current).toBe(false)

    act(() => setMatches(true))

    expect(result.current).toBe(true)
  })

  test('unsubscribes the change listener on unmount', () => {
    const { matchMedia, mediaQueryList } = createMatchMediaMock(false)
    vi.stubGlobal('matchMedia', matchMedia)

    const { unmount } = renderHook(() => usePrefersReducedMotion())
    expect(mediaQueryList.addEventListener).toHaveBeenCalledTimes(1)

    unmount()

    expect(mediaQueryList.removeEventListener).toHaveBeenCalledTimes(1)
  })

  test('falls back to false when matchMedia is unsupported (SSR-safe)', () => {
    vi.stubGlobal('matchMedia', undefined)

    const { result } = renderHook(() => usePrefersReducedMotion())

    expect(result.current).toBe(false)
  })
})
