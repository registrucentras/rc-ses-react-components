import { useMediaQuery, useTheme } from '@mui/material'
import { useEffect, useState } from 'react'

import './ServiceWizardStepper.css'
import { StepItem } from './StepperTypes'
import DesktopStepper from './components/DesktopStepper'
import MobileStepper from './components/MobileStepper'

export interface ServiceWizardStepperProps {
  orientation?: 'vertical' | 'horizontal'
  steps: StepItem[]
  onStepClick?: (steps: StepItem[]) => void
  isLoading?: boolean
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
  onStepClick,
  isLoading = false,
}: ServiceWizardStepperProps) {
  const [currentSteps, setCurrentSteps] = useState(steps)

  useEffect(() => {
    setCurrentSteps(steps)
  }, [steps])

  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const resolvedOrientation = isMobile ? 'horizontal' : orientation

  const activeStep = currentSteps.findIndex((s) => s.state === 'active') ?? 0

  const handleStepClick = (index: number) => {
    if (index < 0 || index > activeStep) return
    const updatedSteps = updateSteps(index, currentSteps)
    setCurrentSteps(updatedSteps)
    onStepClick?.(updatedSteps)
  }

  if (isMobile) {
    return (
      <MobileStepper
        stepEntries={currentSteps}
        activeStep={activeStep}
        handleStepClick={handleStepClick}
      />
    )
  }

  return (
    <DesktopStepper
      stepEntries={currentSteps}
      activeStep={activeStep}
      handleStepClick={handleStepClick}
      resolvedOrientation={resolvedOrientation}
      isLoading={isLoading}
    />
  )
}

export default ServiceWizardStepper
