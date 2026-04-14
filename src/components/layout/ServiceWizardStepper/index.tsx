import { useMediaQuery, useTheme } from '@mui/material'

import './ServiceWizardStepper.css'
import { StepItem } from './StepperTypes'
import DesktopStepper from './components/DesktopStepper'
import MobileStepper from './components/MobileStepper'
import { StepperContext } from './context/StepperContext'
import useStepper from './hooks/useStepper'

interface ServiceWizardStepperProps {
  orientation?: 'vertical' | 'horizontal'
  steps: StepItem[]
}

function ServiceWizardStepper({
  steps,
  orientation = 'horizontal',
}: ServiceWizardStepperProps) {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const resolvedOrientation = isMobile ? 'horizontal' : orientation

  const { stepEntries, activeStep, goToStep } = useStepper(steps)
  return (
    <StepperContext.Provider value={stepEntries}>
      {isMobile ? (
        <MobileStepper
          stepEntries={stepEntries}
          activeStep={activeStep}
          handleStepClick={goToStep}
        />
      ) : (
        <DesktopStepper
          stepEntries={stepEntries}
          activeStep={activeStep}
          handleStepClick={goToStep}
          resolvedOrientation={resolvedOrientation}
        />
      )}
    </StepperContext.Provider>
  )
}

export default ServiceWizardStepper
