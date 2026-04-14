import { render } from '@testing-library/react'

import { StepperContext } from '../context/StepperContext'
import CustomStepIcon from './CustomStepIcon'

describe('CustomStepIcon', () => {
  const renderWithContext = (state: 'active' | 'completed' | 'pending') =>
    render(
      <StepperContext.Provider value={[{ id: '1', title: 'Step', state }] as any}>
        <CustomStepIcon icon={1} />
      </StepperContext.Provider>,
    )

  it('renders DotCircleFilledIcon for active', () => {
    const { container } = renderWithContext('active')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders CheckCircleFillIcon for completed', () => {
    const { container } = renderWithContext('completed')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders CircleFilledIcon for pending', () => {
    const { container } = renderWithContext('pending')
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
