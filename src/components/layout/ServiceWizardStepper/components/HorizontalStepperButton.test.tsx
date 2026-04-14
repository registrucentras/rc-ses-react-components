import { fireEvent, render } from '@testing-library/react'

import HorizontalStepperButton from './HorizontalStepperButton'

describe('HorizontalStepperButton', () => {
  it('renders back icon', () => {
    const { container } = render(<HorizontalStepperButton direction='back' />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders forward icon', () => {
    const { container } = render(<HorizontalStepperButton direction='forward' />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('calls onClick', () => {
    const onClick = vi.fn()
    const { getByRole } = render(
      <HorizontalStepperButton direction='forward' onClick={onClick} />,
    )
    fireEvent.click(getByRole('button'))
    expect(onClick).toHaveBeenCalled()
  })
})
