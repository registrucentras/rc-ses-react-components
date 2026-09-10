import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import RcSesSegmentButton, { type RcSesSegmentOption } from '.'

describe('RcSesSegmentButton', () => {
  const defaultOption: RcSesSegmentOption = {
    id: 'option-1',
    label: 'Option 1',
    disabled: false,
  }

  const defaultProps = {
    option: defaultOption,
    isSelected: false,
    isFocused: false,
    size: 'regular' as const,
    ariaRole: 'radio' as const,
    onClick: vi.fn(),
    onKeyDown: vi.fn(),
    onFocus: vi.fn(),
  }

  test('renders button with option label', () => {
    render(<RcSesSegmentButton {...defaultProps} />)
    expect(screen.getByRole('radio', { name: 'Option 1' })).toBeInTheDocument()
  })

  test('calls onClick handler when clicked', () => {
    const onClick = vi.fn()

    render(<RcSesSegmentButton {...defaultProps} onClick={onClick} />)

    fireEvent.click(screen.getByRole('radio'))
    expect(onClick).toHaveBeenCalledWith('option-1')
  })

  test('calls onFocus handler when focused', () => {
    const onFocus = vi.fn()

    render(<RcSesSegmentButton {...defaultProps} onFocus={onFocus} />)

    fireEvent.focus(screen.getByRole('radio'))
    expect(onFocus).toHaveBeenCalled()
  })

  test('calls onKeyDown handler when key pressed', () => {
    const onKeyDown = vi.fn()

    render(<RcSesSegmentButton {...defaultProps} onKeyDown={onKeyDown} />)

    const button = screen.getByRole('radio')
    fireEvent.keyDown(button, { key: 'ArrowRight', code: 'ArrowRight' })
    expect(onKeyDown).toHaveBeenCalled()
  })

  test('disables button when option.disabled is true', () => {
    render(
      <RcSesSegmentButton
        {...defaultProps}
        option={{ ...defaultOption, disabled: true }}
      />,
    )

    expect(screen.getByRole('radio')).toBeDisabled()
  })

  test('sets aria-checked when selected', () => {
    render(<RcSesSegmentButton {...defaultProps} isSelected />)

    expect(screen.getByRole('radio')).toHaveAttribute('aria-checked', 'true')
  })

  test('sets tabIndex to 0 when focused', () => {
    render(<RcSesSegmentButton {...defaultProps} isFocused />)

    expect(screen.getByRole('radio')).toHaveAttribute('tabIndex', '0')
  })

  test('supports tab role', () => {
    render(<RcSesSegmentButton {...defaultProps} ariaRole='tab' />)

    expect(screen.getByRole('tab')).toBeInTheDocument()
  })
})
