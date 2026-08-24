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
    const elements = itemIds
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => element !== null)

    if (elements.length === 0) return undefined
    const updateActiveItem = () => {
      const { scrollY } = window
      const maxScrollY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      )
      const tops = elements.map(
        (element) => element.getBoundingClientRect().top + scrollY,
      )
      const triggers = tops.map((top) => top - offset)
      let lastReachable = triggers.length - 1
      while (lastReachable > 0 && triggers[lastReachable] > maxScrollY) {
        lastReachable -= 1
      }

      const adjustedTriggers = [...triggers]
      if (lastReachable < triggers.length - 1) {
        const startTrigger = triggers[lastReachable]
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
      setActiveItemId(itemIds[activeIndex])
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
      if (rafRef.current !== undefined) cancelAnimationFrame(rafRef.current)
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
