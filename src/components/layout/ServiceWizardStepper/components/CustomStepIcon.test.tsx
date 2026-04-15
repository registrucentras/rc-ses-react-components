import { render } from '@testing-library/react'

import CustomStepIcon from './CustomStepIcon'

describe('CustomStepIcon', () => {
  it('renders active icon', () => {
    const { container } = render(<CustomStepIcon active completed={false} icon={1} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders completed icon', () => {
    const { container } = render(<CustomStepIcon completed active={false} icon={1} />)
    expect(container.querySelector('svg')).toBeInTheDocument()
  })

  it('renders pending icon', () => {
    const { container } = render(
      <CustomStepIcon active={false} completed={false} icon={1} />,
    )
    expect(container.querySelector('svg')).toBeInTheDocument()
  })
})
