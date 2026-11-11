import type { Meta, StoryObj } from '@storybook/react-vite'
import { type CSSProperties, useState } from 'react'

import ServiceWizardStepper from '@/components/layout/ServiceWizardStepper'
import { StepItem } from '@/components/layout/ServiceWizardStepper/StepperTypes'

const steps: StepItem[] = [
  { id: '1', title: 'Step 1' },
  { id: '2', title: 'Step 2' },
  { id: '3', title: 'Step 3' },
]

const meta: Meta<typeof ServiceWizardStepper> = {
  title: 'Organisms/ServiceWizardStepper',
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

function ServiceWizardStepperDemo({
  orientation,
  ...args
}: {
  orientation: 'horizontal' | 'vertical'
} & Record<string, unknown>) {
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
}

export const Horizontal: Story = {
  render: (args) => <ServiceWizardStepperDemo {...args} orientation='horizontal' />,
}

export const Vertical: Story = {
  render: (args) => <ServiceWizardStepperDemo {...args} orientation='vertical' />,
}

export const TokenBindings: Story = {
  args: { steps, activeStep: 1, orientation: 'horizontal' },
}

export const VerticalTokenBindings: Story = {
  ...TokenBindings,
  args: { ...TokenBindings.args, orientation: 'vertical' },
}

export const Loading: Story = {
  ...TokenBindings,
  args: { ...TokenBindings.args, isLoading: true },
}

export const MobileTokenBindings: Story = {
  ...TokenBindings,
  tags: ['viewport-375'],
}

export const TokenOverrides: Story = {
  ...TokenBindings,
  render: (args) => (
    <div
      style={
        {
          '--rc-color-cyans-400': '#008561',
          '--rc-color-neutrals-800': '#005276',
          '--rc-typography-font-size-heading-h4': '18px',
        } as CSSProperties
      }
    >
      <ServiceWizardStepper {...args} />
    </div>
  ),
}
