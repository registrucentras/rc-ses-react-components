import { fireEvent, render } from '@testing-library/react'

import { StepItem } from '../StepperTypes'
import DesktopStepper from './DesktopStepper'

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

describe('DesktopStepper', () => {
  it('renders all steps', () => {
    const { getByText } = render(
      <DesktopStepper
        stepEntries={steps}
        activeStep={1}
        handleStepClick={() => {}}
        resolvedOrientation='horizontal'
        getStepState={(index) => getStepState(index, 1)}
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
        getStepState={(index) => getStepState(index, 1)}
      />,
    )

    fireEvent.click(getByText('Step 1'))
    expect(handleStepClick).toHaveBeenCalledWith(0)
  })

  it('does not allow clicking future steps', () => {
    const handleStepClick = vi.fn()

    const { getByText } = render(
      <DesktopStepper
        stepEntries={steps}
        activeStep={1}
        handleStepClick={handleStepClick}
        resolvedOrientation='horizontal'
        getStepState={(index) => getStepState(index, 1)}
      />,
    )

    fireEvent.click(getByText('Step 3'))

    expect(handleStepClick).not.toHaveBeenCalled()
  })
})
