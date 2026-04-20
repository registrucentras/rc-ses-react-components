import type { Meta, StoryObj } from '@storybook/react'

import ServiceWizardStepper from '../components/layout/ServiceWizardStepper'
import { StepItem } from '../components/layout/ServiceWizardStepper/StepperTypes'

const steps: StepItem[] = [
  { id: '1', title: 'Step 1', state: 'completed' },
  { id: '2', title: 'Step 2', state: 'active' },
  { id: '3', title: 'Step 3', state: 'pending' },
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
  },
}
export default meta

type Story = StoryObj<typeof ServiceWizardStepper>

export const Horizontal: Story = {
  args: {
    steps,
    orientation: 'horizontal',
  },
}

export const Vertical: Story = {
  args: {
    steps,
    orientation: 'vertical',
  },
}
