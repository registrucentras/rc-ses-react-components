import { Skeleton, Step, StepButton, Stepper } from '@mui/material'

import StepConnector from '../StepConnector'
import { StepItem } from '../StepperTypes'
import CustomStepIcon from './CustomStepIcon'
import StyledStepLabel from './StyledStepLabel'

interface DesktopStepperProps {
  stepEntries: StepItem[]
  activeStep: number
  handleStepClick: (index: number) => void
  resolvedOrientation: 'vertical' | 'horizontal'
  isLoading?: boolean
  getStepState: (index: number) => 'completed' | 'active' | 'pending'
}

const DesktopStepper = ({
  stepEntries,
  activeStep,
  handleStepClick,
  resolvedOrientation,
  isLoading = false,
  getStepState,
}: DesktopStepperProps) => (
  <Stepper
    alternativeLabel={resolvedOrientation === 'horizontal'}
    activeStep={activeStep}
    orientation={resolvedOrientation}
    connector={resolvedOrientation === 'horizontal' ? <StepConnector /> : undefined}
    className={`ServiceWizardStepper ServiceWizardStepper-${resolvedOrientation}`}
    sx={
      resolvedOrientation === 'vertical'
        ? {
            width: 220,
            flexShrink: 0,
            alignSelf: 'flex-start',
          }
        : undefined
    }
  >
    {stepEntries.map((step, index) => {
      const isClickable = index <= activeStep
      const stepState = getStepState(index)

      return (
        <Step key={step.id}>
          <StepButton onClick={() => handleStepClick(index)} disabled={!isClickable}>
            <StyledStepLabel
              StepIconComponent={CustomStepIcon}
              stepState={stepState}
              orientation={resolvedOrientation}
              isLast={index === stepEntries.length - 1}
            >
              {isLoading ? (
                <Skeleton variant='rounded' width={100} height={14} />
              ) : (
                step.title
              )}
            </StyledStepLabel>
          </StepButton>
        </Step>
      )
    })}
  </Stepper>
)

export default DesktopStepper
