import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import React from 'react'

import {
  AccordionControllerState,
  AccordionState,
} from '@/components/common/Accordion/types/AccordionControllerState'

import ActiveStepIcon from './components/ActiveStepIcon'
import CompletedStepIcon from './components/CompletedStepIcon'
import PendingStepIcon from './components/PendingStepIcon'

type Props = {
  steps: AccordionControllerState
}
function ServiceWizardStepper({ steps }: Props) {
  const getStepIcon = React.useCallback((state: AccordionState['state']) => {
    switch (state) {
      case 'active':
        return ActiveStepIcon
      case 'completed':
        return CompletedStepIcon
      default:
        return PendingStepIcon
    }
  }, [])

  const activeStep =
    Object.values(steps).findIndex((step) => step.state === 'active') ?? 0

  return (
    <Stepper activeStep={activeStep} orientation='vertical' sx={{ mt: 6.5 }}>
      {Object.values(steps).map((step) => (
        <Step key={step.title}>
          <StepLabel StepIconComponent={getStepIcon(step.state)}>{step.title}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default ServiceWizardStepper
