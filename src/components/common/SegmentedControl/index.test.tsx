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

  test('marks selected option with aria-checked=true', () => {
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

  test('navigates with ArrowRight key', () => {
    const onChange = vi.fn()
    render(<RcSesSegmentedControl {...defaultProps} onChange={onChange} />)

    const option1 = screen.getByRole('radio', { name: 'Option 1' })
    fireEvent.keyDown(option1, { key: 'ArrowRight' })

    expect(onChange).toHaveBeenCalledWith('option-2')
    expect(screen.getByRole('radio', { name: 'Option 2' })).toHaveFocus()
  })

  test('jumps to first/last option with Home/End keys', () => {
    const onChange = vi.fn()
    render(
      <RcSesSegmentedControl {...defaultProps} onChange={onChange} value='option-2' />,
    )

    const option2 = screen.getByRole('radio', { name: 'Option 2' })
    fireEvent.keyDown(option2, { key: 'Home' })

    expect(onChange).toHaveBeenCalledWith('option-1')
    expect(screen.getByRole('radio', { name: 'Option 1' })).toHaveFocus()
  })

  test('selects option with Enter key', () => {
    const onChange = vi.fn()
    render(
      <RcSesSegmentedControl {...defaultProps} onChange={onChange} value='option-1' />,
    )

    const option2 = screen.getByRole('radio', { name: 'Option 2' })
    fireEvent.focus(option2)
    fireEvent.keyDown(option2, { key: 'Enter' })

    expect(onChange).toHaveBeenCalledWith('option-2')
  })

  test('selects option with Space key', () => {
    const onChange = vi.fn()
    render(
      <RcSesSegmentedControl {...defaultProps} onChange={onChange} value='option-1' />,
    )

    const option2 = screen.getByRole('radio', { name: 'Option 2' })
    fireEvent.keyDown(option2, { key: ' ' })

    expect(onChange).toHaveBeenCalledWith('option-2')
  })

  test('skips disabled options in navigation', () => {
    const onChange = vi.fn()
    const optionsWithDisabled: RcSesSegmentOption[] = [
      { id: 'option-1', label: 'Option 1', disabled: false },
      { id: 'option-2', label: 'Option 2', disabled: true },
      { id: 'option-3', label: 'Option 3', disabled: false },
    ]

    render(
      <RcSesSegmentedControl
        options={optionsWithDisabled}
        value='option-1'
        onChange={onChange}
      />,
    )

    const option1 = screen.getByRole('radio', { name: 'Option 1' })
    fireEvent.keyDown(option1, { key: 'ArrowRight' })

    expect(onChange).toHaveBeenCalledWith('option-3')
    expect(screen.getByRole('radio', { name: 'Option 3' })).toHaveFocus()
  })

  test('disables disabled options', () => {
    const optionsWithDisabled: RcSesSegmentOption[] = [
      { id: 'option-1', label: 'Option 1', disabled: false },
      { id: 'option-2', label: 'Option 2', disabled: true },
    ]

    render(
      <RcSesSegmentedControl
        options={optionsWithDisabled}
        value='option-1'
        onChange={vi.fn()}
      />,
    )

    expect(screen.getByRole('radio', { name: 'Option 2' })).toBeDisabled()
  })

  test('supports tab role with tab buttons', () => {
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
