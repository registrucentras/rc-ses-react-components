import { act, renderHook } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import useElementHeight from './useElementHeight'

type ResizeCallback = () => void

const resizeCallbacks: ResizeCallback[] = []

// Matches the sibling SideNav suites: a plain function, so `new` hands back the
// object below rather than a class instance ESLint wants methods on.
function ResizeObserverMock(callback: ResizeCallback) {
  resizeCallbacks.push(callback)
  return { observe: () => {}, unobserve: () => {}, disconnect: () => {} }
}

function elementOfHeight(height: number) {
  const element = document.createElement('div')
  vi.spyOn(element, 'getBoundingClientRect').mockImplementation(
    () => ({ height }) as DOMRect,
  )
  return element
}

function renderWithElement(element: HTMLElement | null) {
  const ref = createRef<HTMLElement>()
  Object.assign(ref, { current: element })
  return renderHook(() => useElementHeight(ref))
}

describe('useElementHeight', () => {
  afterEach(() => {
    resizeCallbacks.length = 0
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('returns 0 when there is no element to measure', () => {
    const { result } = renderWithElement(null)

    expect(result.current).toBe(0)
  })

  it('measures the element on mount', () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)

    const { result } = renderWithElement(elementOfHeight(62))

    expect(result.current).toBe(62)
  })

  // A hidden element has no box at all, which is what lets the caller use the
  // height as a breakpoint test.
  it('reports 0 for an element the media query switched off', () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)

    const { result } = renderWithElement(elementOfHeight(0))

    expect(result.current).toBe(0)
  })

  it('rounds to whole pixels', () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)

    const { result } = renderWithElement(elementOfHeight(61.6))

    expect(result.current).toBe(62)
  })

  it('re-measures when the element resizes in place', () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
    const element = elementOfHeight(62)

    const { result } = renderWithElement(element)
    vi.spyOn(element, 'getBoundingClientRect').mockImplementation(
      () => ({ height: 104 }) as DOMRect,
    )
    act(() => resizeCallbacks.forEach((callback) => callback()))

    expect(result.current).toBe(104)
  })

  it('re-measures on a viewport resize', () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
    const element = elementOfHeight(62)

    const { result } = renderWithElement(element)
    vi.spyOn(element, 'getBoundingClientRect').mockImplementation(
      () => ({ height: 0 }) as DOMRect,
    )
    act(() => window.dispatchEvent(new Event('resize')))

    expect(result.current).toBe(0)
  })

  it('still measures where ResizeObserver is unavailable', () => {
    vi.stubGlobal('ResizeObserver', undefined)

    const { result } = renderWithElement(elementOfHeight(62))

    expect(result.current).toBe(62)
  })

  it('stops listening once unmounted', () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
    const element = elementOfHeight(62)

    const { result, unmount } = renderWithElement(element)
    unmount()
    vi.spyOn(element, 'getBoundingClientRect').mockImplementation(
      () => ({ height: 104 }) as DOMRect,
    )
    act(() => window.dispatchEvent(new Event('resize')))

    expect(result.current).toBe(62)
  })
})
