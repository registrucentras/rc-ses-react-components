import { StepButton, useMediaQuery, useTheme } from '@mui/material'
import Step from '@mui/material/Step'
import Stepper from '@mui/material/Stepper'
import { useState } from 'react'

import CustomStepIcon from './CustomStepIcon'
import './ServiceWizardStepper.css'
import QontoConnector from './StepConnector'
import { StepperContext } from './StepperContext'
import { StepItem } from './StepperTypes'
import StyledStepLabel from './StyledStepLabel'

interface ServiceWizardStepperProps {
  orientation?: 'vertical' | 'horizontal'
  steps: StepItem[]
}
const updateSteps = (index: number, prev: StepItem[]): StepItem[] =>
  prev.map((step, i) => {
    if (i < index) return { ...step, state: 'completed' }
    if (i === index) return { ...step, state: 'active' }
    return { ...step, state: 'pending' }
  })

function ServiceWizardStepper({
  steps,
  orientation = 'horizontal',
}: ServiceWizardStepperProps) {
  const [stepEntries, setStepEntries] = useState<StepItem[]>(steps)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const resolvedOrientation = isMobile ? 'horizontal' : orientation
  const activeStep = stepEntries.findIndex((s) => s.state === 'active')

  const handleStepClick = (index: number) => {
    if (index > activeStep) return
    setStepEntries((prev) => updateSteps(index, prev))
  }

  return (
    <StepperContext.Provider value={stepEntries}>
      <Stepper
        alternativeLabel={resolvedOrientation === 'horizontal'}
        activeStep={activeStep === -1 ? 0 : activeStep}
        orientation={resolvedOrientation}
        connector={resolvedOrientation === 'horizontal' ? <QontoConnector /> : undefined}
        className={`ServiceWizardStepper ServiceWizardStepper-${resolvedOrientation}`}
      >
        {stepEntries.map((step, index) => {
          const isClickable = index <= (activeStep === -1 ? 0 : activeStep)
          return (
            <Step key={step.title}>
              <StepButton onClick={() => handleStepClick(index)} disabled={!isClickable}>
                <StyledStepLabel
                  StepIconComponent={CustomStepIcon}
                  stepState={step.state}
                  orientation={resolvedOrientation}
                >
                  {!isMobile && step.title}
                </StyledStepLabel>
              </StepButton>
            </Step>
          )
        })}
      </Stepper>
    </StepperContext.Provider>
  )
}

export default ServiceWizardStepper
