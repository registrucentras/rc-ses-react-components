import { Step, StepButton, Stepper } from '@mui/material'
import { Box } from '@mui/system'

import StepConnector from '../StepConnector'
import { StepItem } from '../StepperTypes'
import CustomStepIcon from './CustomStepIcon'
import HorizontalStepperButton from './HorizontalStepperButton'
import StyledStepLabel from './StyledStepLabel'

interface MobileStepperProps {
  stepEntries: StepItem[]
  activeStep: number
  handleStepClick: (index: number) => void
  getStepState: (index: number) => 'completed' | 'active' | 'pending'
}

const MobileStepper = ({
  stepEntries,
  activeStep,
  handleStepClick,
  getStepState,
}: MobileStepperProps) => (
  <Box className='ServiceWizardStepper-MobileStepperWrapper'>
    <Box className='ServiceWizardStepper-NavSlot'>
      {activeStep > 0 && (
        <HorizontalStepperButton
          direction='back'
          onClick={() => handleStepClick(activeStep - 1)}
        />
      )}
    </Box>
    <Box className='ServiceWizardStepper-MobileStepperContent'>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
        orientation='horizontal'
        connector={<StepConnector />}
        className='ServiceWizardStepper ServiceWizardStepper-horizontal'
      >
        {stepEntries.map((step, index) => (
          <Step key={step.id}>
            <StepButton disabled>
              <StyledStepLabel
                StepIconComponent={CustomStepIcon}
                stepState={getStepState(index)}
              />
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
    <Box className='ServiceWizardStepper-NavSlot' />
  </Box>
)

export default MobileStepper
