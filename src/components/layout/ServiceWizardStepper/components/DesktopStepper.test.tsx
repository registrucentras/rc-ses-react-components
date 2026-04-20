import { fireEvent, render } from '@testing-library/react'

import { StepItem } from '../StepperTypes'
import DesktopStepper from './DesktopStepper'

const steps: StepItem[] = [
  { id: '1', title: 'Step 1', state: 'completed' },
  { id: '2', title: 'Step 2', state: 'active' },
  { id: '3', title: 'Step 3', state: 'pending' },
]

describe('DesktopStepper', () => {
  it('renders all steps', () => {
    const { getByText } = render(
      <DesktopStepper
        stepEntries={steps}
        activeStep={1}
        handleStepClick={() => {}}
        resolvedOrientation='horizontal'
      />,
    )
    expect(getByText('Step 1')).toBeInTheDocument()
    expect(getByText('Step 2')).toBeInTheDocument()
    expect(getByText('Step 3')).toBeInTheDocument()
  })

  it('calls handleStepClick when a step is clicked', () => {
    const handleStepClick = vi.fn()
    const { getByText } = render(
      <DesktopStepper
        stepEntries={steps}
        activeStep={1}
        handleStepClick={handleStepClick}
        resolvedOrientation='horizontal'
      />,
    )
    fireEvent.click(getByText('Step 1'))
    expect(handleStepClick).toHaveBeenCalled()
  })
})
