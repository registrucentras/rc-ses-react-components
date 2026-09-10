import { act, renderHook } from '@testing-library/react'
import { createRef } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'

import useElementHeight from './useElementHeight'

type ResizeCallback = () => void

const resizeCallbacks: ResizeCallback[] = []
const disconnect = vi.fn()

// Matches the sibling SideNav suites: a plain function, so `new` hands back the
// object below rather than a class instance ESLint wants methods on.
function ResizeObserverMock(callback: ResizeCallback) {
  resizeCallbacks.push(callback)
  return { observe: () => {}, unobserve: () => {}, disconnect }
}

function elementOfHeight(height: number) {
  const element = document.createElement('div')
  vi.spyOn(element, 'getBoundingClientRect').mockImplementation(
    () => ({ height }) as DOMRect,
  )
  return element
}

function remeasureAt(element: HTMLElement, height: number) {
  vi.spyOn(element, 'getBoundingClientRect').mockImplementation(
    () => ({ height }) as DOMRect,
  )
}

function renderWithElement(element: HTMLElement | null) {
  const ref = createRef<HTMLElement>()
  Object.assign(ref, { current: element })
  return renderHook(() => useElementHeight(ref))
}

describe('useElementHeight', () => {
  afterEach(() => {
    resizeCallbacks.length = 0
    disconnect.mockClear()
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
    remeasureAt(element, 104)
    act(() => resizeCallbacks.forEach((callback) => callback()))

    expect(result.current).toBe(104)
  })

  // A viewport resize that changes the element's box is a resize of the element,
  // so the observer already reports it and a second listener would only measure
  // the same thing twice.
  it('does not listen for viewport resizes alongside the observer', () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
    const addEventListener = vi.spyOn(window, 'addEventListener')

    renderWithElement(elementOfHeight(62))

    expect(addEventListener).not.toHaveBeenCalledWith('resize', expect.anything())
  })

  it('falls back to a viewport resize listener where ResizeObserver is missing', () => {
    vi.stubGlobal('ResizeObserver', undefined)
    const element = elementOfHeight(62)

    const { result } = renderWithElement(element)
    expect(result.current).toBe(62)

    remeasureAt(element, 0)
    act(() => window.dispatchEvent(new Event('resize')))

    expect(result.current).toBe(0)
  })

  it('disconnects the observer once unmounted', () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)

    const { unmount } = renderWithElement(elementOfHeight(62))
    unmount()

    expect(disconnect).toHaveBeenCalled()
  })

  it('drops the fallback listener once unmounted', () => {
    vi.stubGlobal('ResizeObserver', undefined)
    const element = elementOfHeight(62)

    const { result, unmount } = renderWithElement(element)
    unmount()
    remeasureAt(element, 104)
    act(() => window.dispatchEvent(new Event('resize')))

    expect(result.current).toBe(62)
  })
})
