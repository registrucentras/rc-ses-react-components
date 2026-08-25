import { useCallback, useEffect, useRef, useState } from 'react'

const ACTIVATION_LINE_EPSILON = 1

type UseSideNavScrollSpyOptions = {
  itemIds: string[]
  offset?: number
}

function useSideNavScrollSpy({ itemIds, offset = 0 }: UseSideNavScrollSpyOptions) {
  const [activeItemId, setActiveItemId] = useState<string | undefined>(itemIds[0])
  const rafRef = useRef<number>()
  const itemIdsKey = itemIds.join('|')

  useEffect(() => {
    // Resolved fresh on every call (not cached once at mount) so sections added to
    // the DOM after mount - e.g. lazily-loaded content - still get picked up on the
    // next scroll/resize.
    const updateActiveItem = () => {
      const resolved = itemIds
        .map((id) => ({ id, element: document.getElementById(id) }))
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

    return () => {
      window.removeEventListener('scroll', scheduleUpdate)
      window.removeEventListener('resize', scheduleUpdate)
      // Also reset the ref, not just cancel the frame - otherwise the next effect
      // instance's scheduleUpdate sees a stale non-undefined handle on its in-flight
      // guard and silently refuses to ever schedule another update.
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current)
      rafRef.current = undefined
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps -- itemIdsKey stands in for itemIds
  }, [itemIdsKey, offset])

  const scrollToItem = useCallback(
    (id: string) => {
      const element = document.getElementById(id)
      if (!element) return

      const prefersReducedMotion = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches
      const top = element.getBoundingClientRect().top + window.scrollY - offset

      window.scrollTo({ top, behavior: prefersReducedMotion ? 'auto' : 'smooth' })
      setActiveItemId(id)
    },
    [offset],
  )

  return { activeItemId, scrollToItem }
}

export default useSideNavScrollSpy
export type { UseSideNavScrollSpyOptions }
