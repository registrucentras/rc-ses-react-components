import { render, screen } from '@testing-library/react'

import { StepItem } from '../StepperTypes'
import MobileStepper from './MobileStepper'

const steps: StepItem[] = [
  { id: '1', title: 'Step 1', state: 'completed' },
  { id: '2', title: 'Step 2', state: 'active' },
  { id: '3', title: 'Step 3', state: 'pending' },
]

describe('MobileStepper', () => {
  it('renders all steps', () => {
    render(
      <MobileStepper stepEntries={steps} activeStep={1} handleStepClick={() => {}} />,
    )

    const stepButtons = screen.getAllByRole('button')
    expect(stepButtons).toHaveLength(steps.length + 1) // +1 for the next button
  })
})
