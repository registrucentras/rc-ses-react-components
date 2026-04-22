import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'

import ServiceWizardStepper from '../components/layout/ServiceWizardStepper'
import { StepItem } from '../components/layout/ServiceWizardStepper/StepperTypes'

const steps: StepItem[] = [
  { id: '1', title: 'Step 1' },
  { id: '2', title: 'Step 2' },
  { id: '3', title: 'Step 3' },
]

const meta: Meta<typeof ServiceWizardStepper> = {
  title: 'Components/ServiceWizardStepper',
  component: ServiceWizardStepper,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
    },
    activeStep: { table: { disable: true } },
    onStepClick: { table: { disable: true } },
  },
}
export default meta

type Story = StoryObj<typeof ServiceWizardStepper>

const createStory = (orientation: 'horizontal' | 'vertical'): Story => ({
  render: (args) => {
    const [activeStep, setActiveStep] = useState(0)

    const handleStepClick = (index: number) => {
      if (index > activeStep) return
      setActiveStep(index)
    }

    return (
      <ServiceWizardStepper
        {...args}
        steps={steps}
        activeStep={activeStep}
        onStepClick={handleStepClick}
        orientation={orientation}
      />
    )
  },
})

export const Horizontal = createStory('horizontal')

export const Vertical = createStory('vertical')
