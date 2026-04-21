import React from 'react'

import { AccordionControllerState } from '../types/AccordionControllerState'

type Props = {
  initialState: AccordionControllerState
}

function useAccordionController({ initialState }: Props) {
  const [state, setState] = React.useState<AccordionControllerState>(initialState)

  const toggleAccordion = (id: string, isExpanded: boolean) => {
    setState((prev) => {
      if (!(id in prev)) return prev

      return {
        ...prev,
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
        next[k] = {
          ...next[k],
          expanded: false,
        }
      })
      return next
    })
  }

  const expandAll = () => {
    setState((prev) => {
      const next = { ...prev }
      Object.keys(next).forEach((k) => {
        next[k] = {
          ...next[k],
          expanded: true,
        }
      })
      return next
    })
  }

  const open = (id: string) => {
    setState((prev) => {
      const next = { ...prev }
      Object.keys(next).forEach((k) => {
        next[k] = {
          ...next[k],
          expanded: k === id,
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
