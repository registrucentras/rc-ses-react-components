import React from 'react'

import { AccordionControllerState } from '../types/AccordionControllerState'

interface Props {
  initialState: AccordionControllerState
  exclusive?: boolean
}

function useAccordionController({ initialState, exclusive = false }: Props) {
  const [state, setState] = React.useState<AccordionControllerState>(() => {
    let opened = false
    return Object.fromEntries(
      Object.entries(initialState).map(([id, item]) => {
        const expanded =
          item.canToggle === false || (!!item.expanded && (!exclusive || !opened))
        if (expanded) opened = true
        return [id, { ...item, expanded }]
      }),
    )
  })

  const toggleAccordion = (id: string, isExpanded: boolean) => {
    setState((prev) => {
      if (!(id in prev) || prev[id].disabled || prev[id].canToggle === false) return prev

      return {
        ...Object.fromEntries(
          Object.entries(prev).map(([key, item]) => [
            key,
            {
              ...item,
              expanded:
                exclusive && isExpanded && item.canToggle !== false
                  ? false
                  : item.expanded,
            },
          ]),
        ),
        [id]: {
          ...prev[id],
          expanded: isExpanded,
        },
      }
    })
  }

  const collapseAll = () => {
    setState((prev) => {
      const next = { ...prev }
      Object.keys(next).forEach((k) => {
        let expanded = false
        if (next[k].canToggle === false) expanded = true
        else if (next[k].disabled) expanded = !!next[k].expanded
        next[k] = {
          ...next[k],
          expanded,
        }
      })
      return next
    })
  }

  const expandAll = () => {
    setState((prev) => {
      const next = { ...prev }
      let opened = false
      Object.keys(next).forEach((k) => {
        const expanded =
          next[k].canToggle === false || (!next[k].disabled && (!exclusive || !opened))
        if (expanded) opened = true
        next[k] = {
          ...next[k],
          expanded: next[k].disabled ? next[k].expanded : expanded,
        }
      })
      return next
    })
  }

  const open = (id: string) => {
    setState((prev) => {
      if (!(id in prev) || prev[id].disabled) return prev
      const next = { ...prev }
      Object.keys(next).forEach((k) => {
        next[k] = {
          ...next[k],
          expanded:
            next[k].canToggle === false ||
            (next[k].disabled ? next[k].expanded : k === id),
        }
      })
      return next
    })
  }

  return {
    collapseAll,
    expandAll,
    open,
    state,
    toggleAccordion,
  }
}

export default useAccordionController
