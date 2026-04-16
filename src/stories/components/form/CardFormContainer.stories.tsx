import { Button, Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import RcSesCardFormContainer from '@/components/layout/ServiceFormContainer/CardFormContainer'
import { StepItem } from '@/components/layout/ServiceWizardStepper/StepperTypes'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

const steps: StepItem[] = [
  { id: '1', state: 'completed', title: '1-2 zodziu tekstas' },
  { id: '2', state: 'active', title: '1-2 zodziu tekstas' },
  { id: '3', state: 'pending', title: '1-2 zodziu tekstas' },
]

const meta: Meta<typeof RcSesCardFormContainer> = {
  title: 'components/common/form/CardFormContainer',
  component: RcSesCardFormContainer,
  tags: ['autodocs'],
  argTypes: {
    steps: {
      table: {
        disable: true,
      },
    },
    onStepClick: {
      table: {
        disable: true,
      },
    },
  },
}

export default meta

const Template: StoryFn<typeof RcSesCardFormContainer> = (args) => {
  const [currentSteps, setCurrentSteps] = useState(steps)
  const activeStep = currentSteps.findIndex((step) => step.state === 'active')

  const handleBack = () => {
    if (activeStep <= 0) return

    const updatedSteps: StepItem[] = currentSteps.map((step, index) => {
      if (index < activeStep - 1) return { ...step, state: 'completed' }
      if (index === activeStep - 1) return { ...step, state: 'active' }
      return { ...step, state: 'pending' }
    })

    setCurrentSteps(updatedSteps)
  }

  const handleNext = () => {
    if (activeStep === -1 || activeStep === currentSteps.length - 1) return

    const updatedSteps: StepItem[] = currentSteps.map((step, index) => {
      if (index < activeStep + 1) return { ...step, state: 'completed' }
      if (index === activeStep + 1) return { ...step, state: 'active' }
      return { ...step, state: 'pending' }
    })

    setCurrentSteps(updatedSteps)
  }

  return (
    <Fields>
      <FieldView>
        <RcSesCardFormContainer
          {...args}
          steps={currentSteps}
          onStepClick={(newSteps) => setCurrentSteps(newSteps)}
          leadingActions={
            <Button onClick={handleBack} disabled={activeStep <= 0}>
              Back
            </Button>
          }
          trailingActions={
            <>
              <Button variant='outlined'>Button</Button>
              <Button
                variant='contained'
                onClick={handleNext}
                disabled={activeStep === currentSteps.length - 1}
              >
                Next
              </Button>
            </>
          }
        >
          <Typography variant='body1'>{`Current Step: ${activeStep + 1}`}</Typography>
        </RcSesCardFormContainer>
      </FieldView>
    </Fields>
  )
}

export const Main = Template.bind({})
Main.args = {
  layout: 'column',
  title: 'Test',
  description: 'Test description',
}
