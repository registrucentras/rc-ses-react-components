import { act, renderHook } from '@testing-library/react'
import { PointerEvent as ReactPointerEvent } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import useSwipeToDismiss from './useSwipeToDismiss'

const makePointerEvent = (
  clientY: number,
  overrides: Partial<ReactPointerEvent<HTMLElement>> = {},
) =>
  ({
    clientY,
    pointerId: 1,
    isPrimary: true,
    pointerType: 'touch',
    button: 0,
    currentTarget: { setPointerCapture: vi.fn(), releasePointerCapture: vi.fn() },
    ...overrides,
  }) as unknown as ReactPointerEvent<HTMLElement>

describe('useSwipeToDismiss', () => {
  beforeEach(() => {
    vi.useFakeTimers({ toFake: ['performance'] })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('tracks the drag distance on the paper node while dragging', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => result.current.handleProps.onPointerMove(makePointerEvent(40)))

    expect(node.style.transform).toBe('translateY(40px)')
    expect(node.style.transition).toBe('none')
  })

  it('snaps back and does not dismiss when the drag stays under the threshold', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(20)))

    expect(onDismiss).not.toHaveBeenCalled()
    expect(node.style.transform).toBe('')
  })

  it('dismisses immediately, with no artificial delay, once the drag distance exceeds the threshold', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => vi.advanceTimersByTime(400))
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(150)))

    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('dismisses on a fast flick even under the distance threshold', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => vi.advanceTimersByTime(10))
    act(() => result.current.handleProps.onPointerMove(makePointerEvent(20)))
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(20)))

    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('ignores a second drag started while a dismiss is already committed', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => vi.advanceTimersByTime(400))
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(150)))
    expect(onDismiss).toHaveBeenCalledTimes(1)

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => vi.advanceTimersByTime(400))
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(150)))

    expect(onDismiss).toHaveBeenCalledTimes(1)
  })

  it('resets a leftover drag transform once the sheet opens again', () => {
    const onDismiss = vi.fn()
    const { result, rerender } = renderHook(
      ({ open }: { open: boolean }) =>
        useSwipeToDismiss({ open, disableTransform: false, onDismiss }),
      { initialProps: { open: false } },
    )
    const node = document.createElement('div')
    node.style.transform = 'translateY(150px)'
    node.style.transition = 'none'
    result.current.paperRef.current = node

    rerender({ open: true })

    expect(node.style.transform).toBe('')
    expect(node.style.transition).toBe('')
  })

  it('allows a new drag again once the sheet has reopened after a dismiss', () => {
    const onDismiss = vi.fn()
    const { result, rerender } = renderHook(
      ({ open }: { open: boolean }) =>
        useSwipeToDismiss({ open, disableTransform: false, onDismiss }),
      { initialProps: { open: true } },
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => vi.advanceTimersByTime(400))
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(150)))
    expect(onDismiss).toHaveBeenCalledTimes(1)

    rerender({ open: false })
    rerender({ open: true })

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => vi.advanceTimersByTime(400))
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(150)))

    expect(onDismiss).toHaveBeenCalledTimes(2)
  })

  it('ignores a pointer-up with no matching pointer-down', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )

    act(() => result.current.handleProps.onPointerUp(makePointerEvent(150)))

    expect(onDismiss).not.toHaveBeenCalled()
  })

  it('does not apply a visual transform when disableTransform is set (reduced motion)', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: true, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => result.current.handleProps.onPointerMove(makePointerEvent(40)))

    expect(node.style.transform).toBe('')
    expect(node.style.transition).toBe('')
  })

  it('releases pointer capture when the drag ends', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    const upEvent = makePointerEvent(20)
    act(() => result.current.handleProps.onPointerUp(upEvent))

    expect(upEvent.currentTarget.releasePointerCapture).toHaveBeenCalledWith(1)
  })

  it('passes the triggering pointer event through to onDismiss', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    const upEvent = makePointerEvent(150)
    act(() => result.current.handleProps.onPointerUp(upEvent))

    expect(onDismiss).toHaveBeenCalledWith(upEvent)
  })

  it('never dismisses on pointercancel, regardless of distance - snaps back instead', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => result.current.handleProps.onPointerCancel(makePointerEvent(150)))

    expect(onDismiss).not.toHaveBeenCalled()
    expect(node.style.transform).toBe('')
  })

  it('releases pointer capture on pointercancel too', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    const cancelEvent = makePointerEvent(20)
    act(() => result.current.handleProps.onPointerCancel(cancelEvent))

    expect(cancelEvent.currentTarget.releasePointerCapture).toHaveBeenCalledWith(1)
  })

  it('ignores a non-primary pointer', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() =>
      result.current.handleProps.onPointerDown(makePointerEvent(0, { isPrimary: false })),
    )
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(150)))

    expect(onDismiss).not.toHaveBeenCalled()
    expect(node.style.transform).toBe('')
  })

  it('ignores a non-left mouse button', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() =>
      result.current.handleProps.onPointerDown(
        makePointerEvent(0, { pointerType: 'mouse', button: 2 }),
      ),
    )
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(150)))

    expect(onDismiss).not.toHaveBeenCalled()
    expect(node.style.transform).toBe('')
  })

  it('uses release velocity, not the whole-gesture average - a fast start held still before release does not dismiss', () => {
    const onDismiss = vi.fn()
    const { result } = renderHook(() =>
      useSwipeToDismiss({ open: true, disableTransform: false, onDismiss }),
    )
    const node = document.createElement('div')
    result.current.paperRef.current = node

    act(() => result.current.handleProps.onPointerDown(makePointerEvent(0)))
    act(() => vi.advanceTimersByTime(5))
    // A fast 60px move (would read as > DISMISS_VELOCITY_PX_PER_MS if averaged
    // over the whole gesture including the hold below).
    act(() => result.current.handleProps.onPointerMove(makePointerEvent(60)))
    act(() => vi.advanceTimersByTime(95))
    // Released at the same position - release velocity is ~0.
    act(() => result.current.handleProps.onPointerUp(makePointerEvent(60)))

    expect(onDismiss).not.toHaveBeenCalled()
  })
})
