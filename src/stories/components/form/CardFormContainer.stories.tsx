import { Button, Container, Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import RcSesCardFormContainer from '@/components/layout/ServiceFormContainer/CardFormContainer'
import { StepItem } from '@/components/layout/ServiceWizardStepper/StepperTypes'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

const shortSteps: StepItem[] = [
  { id: '1', title: 'Paslauga' },
  { id: '2', title: 'Duomenys' },
  { id: '3', title: 'Patvirtinimas' },
]

const longSteps: StepItem[] = [
  { id: '1', title: 'Paslauga' },
  { id: '2', title: 'Duomenys' },
  { id: '3', title: 'Dokumentai' },
  { id: '4', title: 'Mokėjimas' },
  { id: '5', title: 'Patvirtinimas' },
]

const meta: Meta<typeof RcSesCardFormContainer> = {
  title: 'components/form/CardFormContainer',
  component: RcSesCardFormContainer,
  tags: ['autodocs'],
  argTypes: {
    steps: { table: { disable: true } },
    onStepClick: { table: { disable: true } },
    activeStep: { table: { disable: true } },
  },
}

export default meta

const DemoContent = () => (
  <>
    <Typography variant='h6'>Pavadinimas</Typography>
    <Typography variant='body2' sx={{ mb: 2 }}>
      Papildomas aprašymo tekstas
    </Typography>

    <Container
      sx={{
        height: 140,
        background: '#EDEDED',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        mb: 2,
      }}
    >
      <Typography variant='body2'>Vidinis paslaugų front-end sprendimas</Typography>
    </Container>
  </>
)

const createTemplate =
  (
    steps: StepItem[],
    forcedLayout?: 'row' | 'column',
  ): StoryFn<typeof RcSesCardFormContainer> =>
  (args) => {
    const [activeStep, setActiveStep] = useState(0)

    const handleBack = () => {
      setActiveStep((prev) => Math.max(prev - 1, 0))
    }

    const handleNext = () => {
      setActiveStep((prev) => Math.min(prev + 1, steps.length - 1))
    }

    const handleStepClick = (index: number) => {
      if (index > activeStep) return
      setActiveStep(index)
    }

    return (
      <Fields>
        <FieldView>
          <RcSesCardFormContainer
            {...args}
            layout={forcedLayout}
            steps={steps}
            activeStep={activeStep}
            onStepClick={handleStepClick}
            leadingActions={
              <Button onClick={handleBack} disabled={activeStep === 0}>
                Back
              </Button>
            }
            trailingActions={
              <>
                <Button variant='outlined'>Button</Button>
                <Button
                  variant='contained'
                  onClick={handleNext}
                  disabled={activeStep === steps.length - 1}
                >
                  Next
                </Button>
              </>
            }
          >
            <DemoContent />
          </RcSesCardFormContainer>
        </FieldView>
      </Fields>
    )
  }

export const HorizontalDemo = createTemplate(shortSteps, 'column')
HorizontalDemo.args = {
  title: 'Antraštės tekstas',
  description: 'Papildomas aprašymo tekstas',
}

export const VerticalDemo = createTemplate(longSteps, 'row')
VerticalDemo.args = {
  title: 'Antraštės tekstas',
  description: 'Papildomas aprašymo tekstas',
}
