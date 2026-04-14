import { Step, StepButton, Stepper } from '@mui/material'

import QontoConnector from '../StepConnector'
import { StepItem } from '../StepperTypes'
import CustomStepIcon from './CustomStepIcon'
import StyledStepLabel from './StyledStepLabel'

interface DesktopStepperProps {
  stepEntries: StepItem[]
  activeStep: number
  handleStepClick: (index: number) => void
  resolvedOrientation: 'vertical' | 'horizontal'
}

const DesktopStepper = ({
  stepEntries,
  activeStep,
  handleStepClick,
  resolvedOrientation,
}: DesktopStepperProps) => (
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
        <Step key={step.id}>
          <StepButton onClick={() => handleStepClick(index)} disabled={!isClickable}>
            <StyledStepLabel
              StepIconComponent={CustomStepIcon}
              stepState={step.state}
              orientation={resolvedOrientation}
            >
              {step.title}
            </StyledStepLabel>
          </StepButton>
        </Step>
      )
    })}
  </Stepper>
)

export default DesktopStepper
