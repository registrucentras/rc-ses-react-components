import { Button, Container, Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import { useState } from 'react'

import RcSesCardFormContainer from '@/components/layout/ServiceFormContainer/CardFormContainer'
import { StepItem } from '@/components/layout/ServiceWizardStepper/StepperTypes'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

const shortSteps: StepItem[] = [
  { id: '1', state: 'completed', title: 'Paslauga' },
  { id: '2', state: 'active', title: 'Duomenys' },
  { id: '3', state: 'pending', title: 'Patvirtinimas' },
]

const longSteps: StepItem[] = [
  { id: '1', state: 'completed', title: 'Paslauga' },
  { id: '2', state: 'completed', title: 'Duomenys' },
  { id: '3', state: 'active', title: 'Dokumentai' },
  { id: '4', state: 'pending', title: 'Mokėjimas' },
  { id: '5', state: 'pending', title: 'Patvirtinimas' },
]

const meta: Meta<typeof RcSesCardFormContainer> = {
  title: 'components/common/form/CardFormContainer',
  component: RcSesCardFormContainer,
  tags: ['autodocs'],
  argTypes: {
    steps: { table: { disable: true } },
    onStepClick: { table: { disable: true } },
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
    initialSteps: StepItem[],
    forcedLayout?: 'row' | 'column',
  ): StoryFn<typeof RcSesCardFormContainer> =>
  (args) => {
    const [currentSteps, setCurrentSteps] = useState(initialSteps)
    const activeStep = currentSteps.findIndex((s) => s.state === 'active')

    const handleBack = () => {
      if (activeStep <= 0) return

      const updated = currentSteps.map((step, index) => {
        if (index < activeStep - 1) return { ...step, state: 'completed' as const }
        if (index === activeStep - 1) return { ...step, state: 'active' as const }
        return { ...step, state: 'pending' as const }
      })

      setCurrentSteps(updated)
    }

    const handleNext = () => {
      if (activeStep === -1 || activeStep === currentSteps.length - 1) return

      const updated = currentSteps.map((step, index) => {
        if (index < activeStep + 1) return { ...step, state: 'completed' as const }
        if (index === activeStep + 1) return { ...step, state: 'active' as const }
        return { ...step, state: 'pending' as const }
      })

      setCurrentSteps(updated)
    }

    return (
      <Fields>
        <FieldView>
          <RcSesCardFormContainer
            {...args}
            layout={forcedLayout}
            steps={currentSteps}
            onStepClick={setCurrentSteps}
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
