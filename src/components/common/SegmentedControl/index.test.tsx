import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import RcSesSegmentedControl, { type RcSesSegmentOption } from './index'

describe('RcSesSegmentedControl', () => {
  const options: RcSesSegmentOption[] = [
    { id: 'option-1', label: 'Option 1', disabled: false },
    { id: 'option-2', label: 'Option 2', disabled: false },
    { id: 'option-3', label: 'Option 3', disabled: false },
  ]

  const defaultProps = {
    options,
    value: 'option-1',
    onChange: vi.fn(),
  }

  test('renders all options', () => {
    render(<RcSesSegmentedControl {...defaultProps} />)

    expect(screen.getByRole('radio', { name: 'Option 1' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Option 2' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Option 3' })).toBeInTheDocument()
  })

  test('has correct container role (radiogroup by default)', () => {
    render(<RcSesSegmentedControl {...defaultProps} />)

    expect(screen.getByRole('radiogroup')).toBeInTheDocument()
  })

  test('marks selected option wtesth aria-checked=true', () => {
    render(<RcSesSegmentedControl {...defaultProps} value='option-2' />)

    expect(screen.getByRole('radio', { name: 'Option 2' })).toHaveAttribute(
      'aria-checked',
      'true',
    )
  })

  test('calls onChange when option clicked', () => {
    const onChange = vi.fn()
    render(<RcSesSegmentedControl {...defaultProps} onChange={onChange} />)

    fireEvent.click(screen.getByRole('radio', { name: 'Option 2' }))
    expect(onChange).toHaveBeenCalledWith('option-2')
  })

  test('navigates wtesth ArrowRight key', () => {
    const onChange = vi.fn()
    render(<RcSesSegmentedControl {...defaultProps} onChange={onChange} />)

    const option1 = screen.getByRole('radio', { name: 'Option 1' })
    fireEvent.keyDown(option1, { key: 'ArrowRight' })

    expect(option1).toBeInTheDocument()
  })

  test('jumps to first/last option wtesth Home/End keys', () => {
    render(<RcSesSegmentedControl {...defaultProps} value='option-2' />)

    const option2 = screen.getByRole('radio', { name: 'Option 2' })
    fireEvent.keyDown(option2, { key: 'Home' })

    expect(screen.getByRole('radio', { name: 'Option 1' })).toBeInTheDocument()
  })

  test('selects option wtesth Enter key', () => {
    const onChange = vi.fn()
    render(
      <RcSesSegmentedControl {...defaultProps} onChange={onChange} value='option-1' />,
    )

    const option2 = screen.getByRole('radio', { name: 'Option 2' })
    fireEvent.focus(option2)
    fireEvent.keyDown(option2, { key: 'Enter' })

    expect(onChange).toHaveBeenCalledWith('option-2')
  })

  test('selects option wtesth Space key', () => {
    const onChange = vi.fn()
    render(
      <RcSesSegmentedControl {...defaultProps} onChange={onChange} value='option-1' />,
    )

    const option2 = screen.getByRole('radio', { name: 'Option 2' })
    fireEvent.keyDown(option2, { key: ' ' })

    expect(onChange).toHaveBeenCalledWith('option-2')
  })

  test('skips disabled options in navigation', () => {
    const optionsWtesthDisabled: RcSesSegmentOption[] = [
      { id: 'option-1', label: 'Option 1', disabled: false },
      { id: 'option-2', label: 'Option 2', disabled: true },
      { id: 'option-3', label: 'Option 3', disabled: false },
    ]

    render(
      <RcSesSegmentedControl
        options={optionsWtesthDisabled}
        value='option-1'
        onChange={vi.fn()}
      />,
    )

    const option1 = screen.getByRole('radio', { name: 'Option 1' })
    fireEvent.keyDown(option1, { key: 'ArrowRight' })

    expect(screen.getByRole('radio', { name: 'Option 3' })).toBeInTheDocument()
  })

  test('disables disabled options', () => {
    const optionsWtesthDisabled: RcSesSegmentOption[] = [
      { id: 'option-1', label: 'Option 1', disabled: false },
      { id: 'option-2', label: 'Option 2', disabled: true },
    ]

    render(
      <RcSesSegmentedControl
        options={optionsWtesthDisabled}
        value='option-1'
        onChange={vi.fn()}
      />,
    )

    expect(screen.getByRole('radio', { name: 'Option 2' })).toBeDisabled()
  })

  test('supports tab role wtesth tab buttons', () => {
    render(<RcSesSegmentedControl {...defaultProps} role='tablist' />)

    expect(screen.getByRole('tab', { name: 'Option 1' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Option 2' })).toBeInTheDocument()
    expect(screen.getByRole('tab', { name: 'Option 3' })).toBeInTheDocument()
  })

  test('updates selected option when value prop changes', () => {
    const { rerender } = render(
      <RcSesSegmentedControl {...defaultProps} value='option-1' />,
    )

    expect(screen.getByRole('radio', { name: 'Option 1' })).toHaveAttribute(
      'aria-checked',
      'true',
    )

    rerender(<RcSesSegmentedControl {...defaultProps} value='option-2' />)

    expect(screen.getByRole('radio', { name: 'Option 2' })).toHaveAttribute(
      'aria-checked',
      'true',
    )
  })
})
