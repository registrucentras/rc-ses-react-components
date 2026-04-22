import { render, screen } from '@testing-library/react'

import { StepItem } from '../StepperTypes'
import MobileStepper from './MobileStepper'

const steps: StepItem[] = [
  { id: '1', title: 'Step 1' },
  { id: '2', title: 'Step 2' },
  { id: '3', title: 'Step 3' },
]

const getStepState = (index: number, activeStep: number) => {
  if (index < activeStep) return 'completed'
  if (index === activeStep) return 'active'
  return 'pending'
}

describe('MobileStepper', () => {
  it('renders all steps and navigation button', () => {
    render(
      <MobileStepper
        stepEntries={steps}
        activeStep={1}
        handleStepClick={() => {}}
        getStepState={(index) => getStepState(index, 1)}
      />,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(steps.length + 1)
  })

  it('does not render back button on first step', () => {
    render(
      <MobileStepper
        stepEntries={steps}
        activeStep={0}
        handleStepClick={() => {}}
        getStepState={(index) => getStepState(index, 0)}
      />,
    )

    const buttons = screen.getAllByRole('button')

    expect(buttons).toHaveLength(steps.length)
  })
})
