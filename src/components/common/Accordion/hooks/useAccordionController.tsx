import React from 'react'

import { AccordionControllerState } from '../types/AccordionControllerState'

type Props = {
  initialState: AccordionControllerState
}

function useAccordionController({ initialState }: Props) {
  const [state, setState] = React.useState<AccordionControllerState>(initialState)

  const toggleAccordion = (id: string, isExpanded: boolean) => {
    const nextState = { ...state }
    if (id in nextState) nextState[id].expanded = isExpanded
    setState(nextState)
  }

  const collapseAll = () => {
    const nextState = { ...state }
    Object.keys(nextState).forEach((k) => {
      nextState[k].expanded = false
    })
    setState(nextState)
  }

  const expandAll = () => {
    const nextState = { ...state }
    Object.keys(nextState).forEach((k) => {
      nextState[k].expanded = true
    })
    setState(nextState)
  }

  return {
    collapseAll,
    expandAll,
    state,
    toggleAccordion,
  }
}

export default useAccordionController
