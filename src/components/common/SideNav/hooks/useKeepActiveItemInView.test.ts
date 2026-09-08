import { renderHook } from '@testing-library/react'
import { RefObject } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import useKeepActiveItemInView from './useKeepActiveItemInView'

type Rect = { top: number; bottom: number; left: number; right: number }

const CONTAINER_RECT: Rect = { top: 100, bottom: 400, left: 100, right: 400 }

// jsdom has no layout, so every rect the hook reads has to be supplied here.
const stubRect = (element: HTMLElement, rect: Rect) => {
  element.getBoundingClientRect = () => rect as DOMRect
}

const setup = (itemRect: Rect, itemId = 'documents') => {
  const container = document.createElement('div')
  const item = document.createElement('div')
  item.setAttribute('data-item-id', itemId)
  container.appendChild(item)
  document.body.appendChild(container)

  stubRect(container, CONTAINER_RECT)
  stubRect(item, itemRect)

  // Element.scrollTo is not implemented in jsdom; the hook falls back to the
  // scrollTop/scrollLeft assignment without it, which would hide the smooth path.
  const scrollTo = vi.fn()
  container.scrollTo = scrollTo

  let scrollTop = 0
  let scrollLeft = 0
  Object.defineProperty(container, 'scrollTop', {
    get: () => scrollTop,
    set: (value: number) => {
      scrollTop = value
    },
    configurable: true,
  })
  Object.defineProperty(container, 'scrollLeft', {
    get: () => scrollLeft,
    set: (value: number) => {
      scrollLeft = value
    },
    configurable: true,
  })

  return {
    containerRef: { current: container } as RefObject<HTMLElement>,
    scrollTo,
    getScrollTop: () => scrollTop,
    getScrollLeft: () => scrollLeft,
  }
}

const prefersReducedMotion = (matches: boolean) =>
  vi.stubGlobal(
    'matchMedia',
    vi.fn(() => ({ matches })),
  )

beforeEach(() => {
  document.body.innerHTML = ''
  prefersReducedMotion(false)
})

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useKeepActiveItemInView', () => {
  it('scrolls up by exactly the amount the item overflows the top edge', () => {
    const { containerRef, getScrollTop } = setup({
      top: 60,
      bottom: 100,
      left: 100,
      right: 400,
    })

    renderHook(() =>
      useKeepActiveItemInView({
        containerRef,
        activeItemId: 'documents',
        axis: 'vertical',
      }),
    )

    expect(getScrollTop()).toBe(-40)
  })

  it('scrolls down by exactly the amount the item overflows the bottom edge', () => {
    const { containerRef, getScrollTop } = setup({
      top: 380,
      bottom: 425,
      left: 100,
      right: 400,
    })

    renderHook(() =>
      useKeepActiveItemInView({
        containerRef,
        activeItemId: 'documents',
        axis: 'vertical',
      }),
    )

    expect(getScrollTop()).toBe(25)
  })

  it('leaves the scroll position alone when the item is already visible', () => {
    const { containerRef, getScrollTop, scrollTo } = setup({
      top: 200,
      bottom: 240,
      left: 100,
      right: 400,
    })

    renderHook(() =>
      useKeepActiveItemInView({
        containerRef,
        activeItemId: 'documents',
        axis: 'vertical',
      }),
    )

    expect(getScrollTop()).toBe(0)
    expect(scrollTo).not.toHaveBeenCalled()
  })

  it('scrolls the horizontal axis by scrollLeft', () => {
    const { containerRef, getScrollLeft } = setup({
      top: 100,
      bottom: 140,
      left: 380,
      right: 460,
    })

    renderHook(() =>
      useKeepActiveItemInView({
        containerRef,
        activeItemId: 'documents',
        axis: 'horizontal',
      }),
    )

    expect(getScrollLeft()).toBe(60)
  })

  it('animates when asked to and the user has no reduced-motion preference', () => {
    const { containerRef, scrollTo } = setup({
      top: 380,
      bottom: 425,
      left: 100,
      right: 400,
    })

    renderHook(() =>
      useKeepActiveItemInView({
        containerRef,
        activeItemId: 'documents',
        axis: 'vertical',
        behavior: 'smooth',
      }),
    )

    expect(scrollTo).toHaveBeenCalledWith({ top: 25, behavior: 'smooth' })
  })

  it('jumps instead of animating under prefers-reduced-motion', () => {
    prefersReducedMotion(true)
    const { containerRef, scrollTo, getScrollTop } = setup({
      top: 380,
      bottom: 425,
      left: 100,
      right: 400,
    })

    renderHook(() =>
      useKeepActiveItemInView({
        containerRef,
        activeItemId: 'documents',
        axis: 'vertical',
        behavior: 'smooth',
      }),
    )

    expect(scrollTo).not.toHaveBeenCalled()
    expect(getScrollTop()).toBe(25)
  })

  it('does nothing while disabled', () => {
    const { containerRef, getScrollTop } = setup({
      top: 380,
      bottom: 425,
      left: 100,
      right: 400,
    })

    renderHook(() =>
      useKeepActiveItemInView({
        containerRef,
        activeItemId: 'documents',
        axis: 'vertical',
        enabled: false,
      }),
    )

    expect(getScrollTop()).toBe(0)
  })

  it('does not throw when no item matches the active id', () => {
    const { containerRef, getScrollTop } = setup({
      top: 380,
      bottom: 425,
      left: 100,
      right: 400,
    })

    expect(() =>
      renderHook(() =>
        useKeepActiveItemInView({
          containerRef,
          activeItemId: 'missing',
          axis: 'vertical',
        }),
      ),
    ).not.toThrow()
    expect(getScrollTop()).toBe(0)
  })

  // An id is an arbitrary string, not a CSS identifier, so quotes and
  // backslashes have to survive the lookup.
  it.each(['te"ma 1', 'tema\\1', 'trailing\\'])(
    'still finds the item for the awkward id %j',
    (itemId) => {
      const { containerRef, getScrollTop } = setup(
        { top: 380, bottom: 425, left: 100, right: 400 },
        itemId,
      )

      expect(() =>
        renderHook(() =>
          useKeepActiveItemInView({
            containerRef,
            activeItemId: itemId,
            axis: 'vertical',
          }),
        ),
      ).not.toThrow()
      expect(getScrollTop()).toBe(25)
    },
  )
})
