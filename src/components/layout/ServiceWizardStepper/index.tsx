import { useMediaQuery, useTheme } from '@mui/material'

import './ServiceWizardStepper.css'
import { StepItem } from './StepperTypes'
import DesktopStepper from './components/DesktopStepper'
import MobileStepper from './components/MobileStepper'

export interface ServiceWizardStepperProps {
  orientation?: 'vertical' | 'horizontal'
  steps: StepItem[]
  activeStep: number
  onStepClick?: (index: number) => void
  isLoading?: boolean
}

function ServiceWizardStepper({
  steps,
  activeStep,
  orientation = 'horizontal',
  onStepClick,
  isLoading = false,
}: ServiceWizardStepperProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const resolvedOrientation = isMobile ? 'horizontal' : orientation

  const getStepState = (index: number) => {
    if (index < activeStep) return 'completed'
    if (index === activeStep) return 'active'
    return 'pending'
  }

  const handleStepClick = (index: number) => {
    if (index < 0 || index > activeStep) return
    onStepClick?.(index)
  }

  if (isMobile) {
    return (
      <MobileStepper
        stepEntries={steps}
        activeStep={activeStep}
        handleStepClick={handleStepClick}
        getStepState={getStepState}
      />
    )
  }

  return (
    <DesktopStepper
      stepEntries={steps}
      activeStep={activeStep}
      handleStepClick={handleStepClick}
      resolvedOrientation={resolvedOrientation}
      isLoading={isLoading}
      getStepState={getStepState}
    />
  )
}

export default ServiceWizardStepper
