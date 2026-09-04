import { RefObject, useCallback, useEffect, useRef, useState } from 'react'

const ACTIVATION_LINE_EPSILON = 1
// Long enough to cover a native smooth-scroll to any in-page section for this
// component's use case (a single service page's sidebar nav, not an arbitrarily
// long document).
const PROGRAMMATIC_SCROLL_SETTLE_MS = 600

type UseSideNavScrollSpyOptions = {
  itemIds: string[]
  offset?: number
  // Bounds id resolution to this subtree so an id collision elsewhere on the page
  // can't win or lose the activation check. Defaults to the whole document.
  scope?: RefObject<HTMLElement>
}

function findScopedElement(root: Document | HTMLElement, id: string): HTMLElement | null {
  if (root instanceof Document) return root.getElementById(id)
  // Attribute selector, so an id that is not a valid CSS selector cannot throw.
  return root.querySelector<HTMLElement>(`[id="${id.replace(/"/g, '\\"')}"]`)
}

function useSideNavScrollSpy({ itemIds, offset = 0, scope }: UseSideNavScrollSpyOptions) {
  const [activeItemId, setActiveItemId] = useState<string | undefined>(itemIds[0])
  const rafRef = useRef<number>()
  const suppressUntilRef = useRef(0)
  const itemIdsKey = itemIds.join('|')

  useEffect(() => {
    if (itemIds.length === 0) return undefined

    const root: Document | HTMLElement = scope?.current ?? document

    // Resolved fresh on every call (not cached once at mount) so sections added to
    // the DOM after mount - e.g. lazily-loaded content - still get picked up
    // immediately via the MutationObserver below, or on the next scroll/resize.
    const updateActiveItem = () => {
      // A click-driven scrollToItem() already set the correct activeItemId - the
      // scroll events fired by its own smooth-scroll animation would otherwise
      // recompute (and flicker) it through every section the animation passes over
      // before landing on the clicked one.
      if (Date.now() < suppressUntilRef.current) return

      const resolved = itemIds
        .map((id) => ({ id, element: findScopedElement(root, id) }))
        .filter(
          (entry): entry is { id: string; element: HTMLElement } =>
            entry.element !== null,
        )

      if (resolved.length === 0) return

      const { scrollY } = window
      const maxScrollY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      )
      const tops = resolved.map(
        ({ element }) => element.getBoundingClientRect().top + scrollY,
      )
      const triggers = tops.map((top) => top - offset)
      let lastReachable = triggers.length - 1
      while (lastReachable > 0 && triggers[lastReachable] > maxScrollY) {
        lastReachable -= 1
      }

      const adjustedTriggers = [...triggers]
      const startTrigger = triggers[lastReachable]
      // The while loop above can land on index 0 for two different reasons: because
      // that section is genuinely reachable (its own trigger <= maxScrollY), or
      // simply because it ran out of sections to check - e.g. the whole page fits in
      // one viewport, so nothing is reachable at all. Only the first case should
      // trigger compression; otherwise (maxScrollY - startTrigger) is <= 0, which
      // collapses every trigger onto the same point or runs them backwards, and the
      // last section ends up wrongly marked active on a page that never scrolls.
      if (lastReachable < triggers.length - 1 && startTrigger < maxScrollY) {
        const startTop = tops[lastReachable]
        const span = tops[tops.length - 1] - startTop
        for (let index = lastReachable + 1; index < triggers.length; index += 1) {
          const ratio = span > 0 ? (tops[index] - startTop) / span : 1
          adjustedTriggers[index] = startTrigger + ratio * (maxScrollY - startTrigger)
        }
      }

      let activeIndex = 0
      adjustedTriggers.forEach((trigger, index) => {
        if (trigger <= scrollY + ACTIVATION_LINE_EPSILON) activeIndex = index
      })
      // Read the id back out of `resolved`, not `itemIds` - activeIndex is an index
      // into the filtered (DOM-resolved) list, and the two arrays drift apart as
      // soon as any id has no matching element on the page.
      setActiveItemId(resolved[activeIndex].id)
    }

    const scheduleUpdate = () => {
      if (rafRef.current !== undefined) return
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = undefined
        updateActiveItem()
      })
    }

    updateActiveItem()
    window.addEventListener('scroll', scheduleUpdate, { passive: true })
    window.addEventListener('resize', scheduleUpdate)

    // Sections added to the DOM after mount - e.g. lazily-loaded content - should
    // register immediately rather than waiting for the next scroll/resize event.
    // Skipped when unscoped, where it would observe the whole document.
    const mutationObserver =
      root instanceof Document ? undefined : new MutationObserver(scheduleUpdate)
    mutationObserver?.observe(root, { childList: true, subtree: true })

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      mutationObserver?.disconnect()
      // Also reset the ref, not just cancel the frame - otherwise the next effect
      // instance's scheduleUpdate sees a stale non-undefined handle on its in-flight
      // guard and silently refuses to ever schedule another update.
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current)
      rafRef.current = undefined
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- itemIdsKey stands in for itemIds; scope is a ref, its identity is stable
  }, [itemIdsKey, offset])

  const scrollToItem = useCallback(
    (id: string) => {
      const element = findScopedElement(scope?.current ?? document, id)
      if (!element) return

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      const top = element.getBoundingClientRect().top + window.scrollY - offset

      // Always (re)assign rather than only when animating, so an instant
      // (reduced-motion) click can't leave a still-running suppression window
      // from an earlier animated click blocking its own follow-up scroll updates.
      suppressUntilRef.current = prefersReducedMotion
        ? 0
        : Date.now() + PROGRAMMATIC_SCROLL_SETTLE_MS
      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      setActiveItemId(id)
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- scope is a ref, its identity is stable
    [offset],
  )

  return { activeItemId, scrollToItem }
}

export default useSideNavScrollSpy
export type { UseSideNavScrollSpyOptions }
