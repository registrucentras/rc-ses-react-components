/* eslint-disable react/function-component-definition */
import { Meta, StoryFn } from '@storybook/react'

import RcSesServiceProgressStepper from '@/components/layout/ServiceWizardStepper'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const mockSteps = [
  { id: 'step1', label: 'Personal Information' },
  { id: 'step2', label: 'Contact Details' },
  { id: 'step3', label: 'Review & Submit' },
  { id: 'step4', label: 'Confirmation' },
]

const meta: Meta<typeof RcSesServiceProgressStepper> = {
  title: 'components/layout/ServiceWizardStepper',
  component: RcSesServiceProgressStepper,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['horizontal', 'vertical'],
    },
    activeStep: {
      control: { type: 'number', min: 1, max: 4 },
    },
  },
}

export default meta
const Template: StoryFn<typeof RcSesServiceProgressStepper> = (args) => (
  <Fields>
    <FieldView>
      <RcSesServiceProgressStepper {...args} />
    </FieldView>
    <FieldPreview>
      <PreviewTitle>Orientation variants</PreviewTitle>
      <div style={{ marginBottom: '2rem' }}>
        <h4>Horizontal</h4>
        <RcSesServiceProgressStepper {...args} orientation='horizontal' activeStep={2} />
      </div>
      <div>
        <h4>Vertical</h4>
        <RcSesServiceProgressStepper {...args} orientation='vertical' activeStep={2} />
      </div>
    </FieldPreview>
  </Fields>
)

export const Main = Template.bind({})
Main.args = {
  steps: mockSteps,
  activeStep: 2,
  orientation: 'horizontal',
  onStepClick: (index: number) => console.log(`Step ${index + 1} clicked`),
}

export const HorizontalStepper: StoryFn<typeof RcSesServiceProgressStepper> = () => (
  <RcSesServiceProgressStepper
    steps={mockSteps}
    activeStep={2}
    orientation='horizontal'
    onStepClick={(index) => console.log(`Step ${index + 1} clicked`)}
  />
)

export const VerticalStepper: StoryFn<typeof RcSesServiceProgressStepper> = () => (
  <RcSesServiceProgressStepper
    steps={mockSteps}
    activeStep={2}
    orientation='vertical'
    onStepClick={(index) => console.log(`Step ${index + 1} clicked`)}
  />
)

export const StepProgression: StoryFn<typeof RcSesServiceProgressStepper> = () => (
  <Fields>
    <FieldPreview>
      <PreviewTitle>Step progression states</PreviewTitle>
      {[1, 2, 3, 4].map((activeStep) => (
        <div key={activeStep} style={{ marginBottom: '2rem' }}>
          <h4>Active Step: {activeStep}</h4>
          <RcSesServiceProgressStepper
            steps={mockSteps}
            activeStep={activeStep}
            orientation='horizontal'
          />
        </div>
      ))}
    </FieldPreview>
  </Fields>
)

export const WithBackButton: StoryFn<typeof RcSesServiceProgressStepper> = () => (
  <RcSesServiceProgressStepper
    steps={mockSteps}
    activeStep={3}
    orientation='horizontal'
    handleBack={() => console.log('Back button clicked')}
    onStepClick={(index) => console.log(`Step ${index + 1} clicked`)}
  />
)

export const SingleStep: StoryFn<typeof RcSesServiceProgressStepper> = () => (
  <RcSesServiceProgressStepper
    steps={[{ id: 'single', label: 'Single Step Process' }]}
    activeStep={1}
    orientation='horizontal'
  />
)
