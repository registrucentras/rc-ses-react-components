import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material'
import React from 'react'

import CaretDownIcon from '@/assets/icons/CaretDownIcon'

import useAccordionController from './hooks/useAccordionController'

type Props = React.ComponentProps<typeof Accordion> & {
  id: string
  controller: ReturnType<typeof useAccordionController>
}

function RcSesAccordion(props: Props) {
  const { children, controller, id, onChange, ...accordionProps } = props
  const { toggleAccordion, state } = controller

  const { canToggle, disabled, expanded, title } =
    id in state
      ? state[id]
      : { canToggle: true, disabled: false, expanded: false, title: '' }

  const handleOnChange = (
    event: React.SyntheticEvent<Element, Event>,
    isExpanded: boolean,
  ) => {
    if (canToggle === false) return

    toggleAccordion(id, isExpanded)
    if (onChange) onChange(event, isExpanded)
  }

  return (
    <Accordion
      disabled={disabled === true}
      expanded={expanded === true}
      {...accordionProps}
      onChange={handleOnChange}
    >
      <AccordionSummary
        id={`${id}-header`}
        aria-controls={`${id}-content`}
        expandIcon={canToggle === false ? null : <CaretDownIcon />}
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </Accordion>
  )
}

export default RcSesAccordion
