import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import useSideNavScrollSpy from './useSideNavScrollSpy'

type Viewport = { scrollY: number; innerHeight: number; scrollHeight: number }
type SectionTop = { id: string; top: number }

const setViewport = ({ scrollY, innerHeight, scrollHeight }: Viewport) => {
  Object.defineProperty(window, 'scrollY', { value: scrollY, configurable: true })
  Object.defineProperty(window, 'innerHeight', { value: innerHeight, configurable: true })
  Object.defineProperty(document.documentElement, 'scrollHeight', {
    value: scrollHeight,
    configurable: true,
  })
}

const setSectionTops = (tops: SectionTop[]) => {
  tops.forEach(({ id, top }) => {
    const el = document.getElementById(id) as HTMLElement
    el.getBoundingClientRect = () => ({ top }) as DOMRect
  })
}

// requestAnimationFrame is inherently async in real browsers: scheduling
// (rafRef.current = requestAnimationFrame(cb)) always completes before cb runs.
// A mock that runs cb synchronously inverts that order - cb's own
// `rafRef.current = undefined` reset would run *before* the outer assignment,
// which then immediately clobbers it back to a truthy value and permanently
// blocks the in-flight guard from ever scheduling another update. Deferring
// via a microtask preserves the real ordering.
const fireScroll = async () => {
  await act(async () => {
    window.dispatchEvent(new Event('scroll'))
    await Promise.resolve()
  })
}

let rafId = 0
let cancelledRafIds: Set<number>

beforeEach(() => {
  rafId = 0
  cancelledRafIds = new Set()
  // Mirrors real cancellation semantics (unlike a no-op stub) so tests can verify
  // behaviour after a frame is scheduled and then cancelled mid-flight.
  vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
    rafId += 1
    const id = rafId
    Promise.resolve().then(() => {
      if (!cancelledRafIds.has(id)) cb(0)
    })
    return id
  })
  vi.stubGlobal('cancelAnimationFrame', (id: number) => {
    cancelledRafIds.add(id)
  })

  document.body.innerHTML =
    '<div id="family"></div><div id="documents"></div><div id="signature"></div><div id="residence"></div>'

  setViewport({ scrollY: 0, innerHeight: 800, scrollHeight: 3000 })
  setSectionTops([
    { id: 'family', top: 0 },
    { id: 'documents', top: 300 },
    { id: 'signature', top: 450 },
    { id: 'residence', top: 550 },
  ])
})

afterEach(() => {
  document.body.innerHTML = ''
  vi.unstubAllGlobals()
})

describe('useSideNavScrollSpy', () => {
  it('keeps the first item active on a page that does not scroll at all', () => {
    // maxScrollY is 0 here, so no section's own trigger is reachable - the first
    // one on screen should stay active rather than the compression math treating
    // "ran out of sections to check" the same as "found a reachable trigger" and
    // collapsing everything onto the last item.
    setViewport({ scrollY: 0, innerHeight: 800, scrollHeight: 800 })
    setSectionTops([
      { id: 'family', top: 200 },
      { id: 'documents', top: 500 },
      { id: 'signature', top: 650 },
      { id: 'residence', top: 750 },
    ])

    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    expect(result.current.activeItemId).toBe('family')
  })

  it('defaults the active item to the first id before any scroll', () => {
    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    expect(result.current.activeItemId).toBe('family')
  })

  it('activates a section once its top scrolls past the activation line, even when it is short', async () => {
    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    // Scrolled so that "documents" and "signature" (both short) have already
    // passed the top, but "residence" has not yet - "documents" must win here,
    // not get skipped in favor of whichever section shows the most pixels.
    setSectionTops([
      { id: 'family', top: -300 },
      { id: 'documents', top: -50 },
      { id: 'signature', top: 100 },
      { id: 'residence', top: 250 },
    ])
    await fireScroll()

    expect(result.current.activeItemId).toBe('documents')
  })

  it('advances to the next section once its top crosses the activation line', async () => {
    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    setSectionTops([
      { id: 'family', top: -400 },
      { id: 'documents', top: -100 },
      { id: 'signature', top: -10 },
      { id: 'residence', top: 40 },
    ])
    await fireScroll()

    expect(result.current.activeItemId).toBe('signature')
  })

  it('respects a non-zero offset (e.g. a sticky header) as the activation line', async () => {
    const { result } = renderHook(() =>
      useSideNavScrollSpy({
        itemIds: ['family', 'documents', 'signature', 'residence'],
        offset: 100,
      }),
    )

    setSectionTops([
      { id: 'family', top: -400 },
      { id: 'documents', top: -50 },
      { id: 'signature', top: 90 },
      { id: 'residence', top: 300 },
    ])
    await fireScroll()

    expect(result.current.activeItemId).toBe('signature')
  })

  it('gives every trailing section its own ordered window even when the page runs out of room for their tops to reach the activation line', async () => {
    // Document-absolute tops: family=0, documents=100, signature=300, residence=380.
    // innerHeight=400, scrollHeight=650 -> maxScrollY=250, so "residence"'s natural
    // trigger (380) is unreachable, and "signature"'s (300) barely is. Naively
    // clamping both to maxScrollY would collapse them onto the same point and skip
    // straight from "documents" to "residence" - exactly the bug this covers.
    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    setViewport({ scrollY: 150, innerHeight: 400, scrollHeight: 650 })
    setSectionTops([
      { id: 'family', top: -150 },
      { id: 'documents', top: -50 },
      { id: 'signature', top: 150 },
      { id: 'residence', top: 230 },
    ])
    await fireScroll()
    expect(result.current.activeItemId).toBe('documents')

    setViewport({ scrollY: 220, innerHeight: 400, scrollHeight: 650 })
    setSectionTops([
      { id: 'family', top: -220 },
      { id: 'documents', top: -120 },
      { id: 'signature', top: 80 },
      { id: 'residence', top: 160 },
    ])
    await fireScroll()
    expect(result.current.activeItemId).toBe('signature')

    setViewport({ scrollY: 250, innerHeight: 400, scrollHeight: 650 })
    setSectionTops([
      { id: 'family', top: -250 },
      { id: 'documents', top: -150 },
      { id: 'signature', top: 50 },
      { id: 'residence', top: 130 },
    ])
    await fireScroll()
    expect(result.current.activeItemId).toBe('residence')
  })

  it('does not drift the active id when some ids have no matching element on the page', async () => {
    // Only "documents" and "signature" exist on the page; "family" and "residence"
    // never render. activeIndex is computed against the filtered (DOM-resolved)
    // list, so reading the result back out of the original itemIds by that same
    // index would return the wrong id as soon as the two arrays' lengths diverge.
    document.body.innerHTML = '<div id="documents"></div><div id="signature"></div>'
    setSectionTops([
      { id: 'documents', top: -400 },
      { id: 'signature', top: -100 },
    ])

    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    expect(result.current.activeItemId).toBe('signature')
  })

  it('does not permanently freeze scroll-spy when itemIds/offset change while a scroll frame is pending', async () => {
    const { result, rerender } = renderHook(
      ({ offset }: { offset: number }) =>
        useSideNavScrollSpy({
          itemIds: ['family', 'documents', 'signature', 'residence'],
          offset,
        }),
      { initialProps: { offset: 0 } },
    )

    // Schedule a frame via a scroll event, then re-render with a different offset
    // before that frame's callback has fired - this tears down and re-runs the
    // effect (cancelling the pending frame) while rafRef.current is still set.
    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })
    rerender({ offset: 5 })

    // Let the now-cancelled frame's leftover microtask resolve.
    await act(async () => {
      await Promise.resolve()
    })

    // A fresh scroll after that should still be able to update the active item -
    // if cleanup left rafRef.current stuck non-undefined, this would be a no-op
    // and activeItemId would stay pinned on "family" forever.
    setSectionTops([
      { id: 'family', top: -400 },
      { id: 'documents', top: -100 },
      { id: 'signature', top: -10 },
      { id: 'residence', top: 40 },
    ])
    await fireScroll()

    expect(result.current.activeItemId).toBe('signature')
  })

  it('scrollToItem scrolls to the element and marks it active immediately', () => {
    const scrollToMock = vi.fn()
    vi.stubGlobal('scrollTo', scrollToMock)
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false })),
    )

    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    act(() => {
      result.current.scrollToItem('signature')
    })

    expect(scrollToMock).toHaveBeenCalledTimes(1)
    expect(scrollToMock).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: 'smooth' }),
    )
    expect(result.current.activeItemId).toBe('signature')
  })

  it('scrolls instantly when the user prefers reduced motion', () => {
    const scrollToMock = vi.fn()
    vi.stubGlobal('scrollTo', scrollToMock)
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    )

    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    act(() => {
      result.current.scrollToItem('signature')
    })

    expect(scrollToMock).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: 'auto' }),
    )
  })

  it('does nothing when scrolling to an id with no matching element', () => {
    const scrollToMock = vi.fn()
    vi.stubGlobal('scrollTo', scrollToMock)

    const { result } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    act(() => {
      result.current.scrollToItem('missing')
    })

    expect(scrollToMock).not.toHaveBeenCalled()
  })

  it('stops reacting to scroll after unmount', async () => {
    const { result, unmount } = renderHook(() =>
      useSideNavScrollSpy({ itemIds: ['family', 'documents', 'signature', 'residence'] }),
    )

    unmount()

    setSectionTops([
      { id: 'family', top: -400 },
      { id: 'documents', top: -100 },
      { id: 'signature', top: -10 },
      { id: 'residence', top: 40 },
    ])
    await fireScroll()

    expect(result.current.activeItemId).toBe('family')
  })
})
