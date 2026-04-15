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
}

const MobileStepper = ({
  stepEntries,
  activeStep,
  handleStepClick,
}: MobileStepperProps) => (
  <Box className='MobileStepperWrapper'>
    <Box className='NavSlot'>
      {activeStep > 0 && (
        <HorizontalStepperButton
          direction='back'
          disabled={activeStep === 0}
          onClick={() => handleStepClick(activeStep - 1)}
        />
      )}
    </Box>
    <Box className='MobileStepperContent'>
      <Stepper
        alternativeLabel
        activeStep={activeStep === -1 ? 0 : activeStep}
        orientation='horizontal'
        connector={<StepConnector />}
        className='ServiceWizardStepper ServiceWizardStepper-horizontal'
      >
        {stepEntries.map((step) => (
          <Step key={step.id}>
            <StepButton disabled>
              <StyledStepLabel
                StepIconComponent={CustomStepIcon}
                stepState={step.state}
              />
            </StepButton>
          </Step>
        ))}
      </Stepper>
    </Box>
    <Box className='NavSlot' />
  </Box>
)

export default MobileStepper
