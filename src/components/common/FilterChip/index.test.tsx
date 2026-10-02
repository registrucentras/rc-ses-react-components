import { fireEvent, render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import i18n from '@/i18n/i18n'

import RcSesFilterChip from '.'

// Mock ResizeObserver
class ResizeObserverMock {
  observe = vi.fn()

  unobserve = vi.fn()

  disconnect = vi.fn()
}

global.ResizeObserver = ResizeObserverMock

describe('RcSesFilterChip', () => {
  const mockOnRemove = vi.fn()

  beforeEach(async () => {
    vi.clearAllMocks()
    await i18n.changeLanguage('en')
  })

  it('renders with label', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    expect(screen.getByText('Test Filter')).toBeInTheDocument()
  })

  it('calls onRemove when clicked', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button', {
      name: 'Remove filter: Test Filter',
    })
    fireEvent.click(chip)

    expect(mockOnRemove).toHaveBeenCalledOnce()
  })

  it('has proper accessibility attributes', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button', {
      name: 'Remove filter: Test Filter',
    })
    expect(chip).toHaveAttribute('aria-label', 'Remove filter: Test Filter')
  })

  it('supports custom testId', () => {
    render(
      <RcSesFilterChip
        label='Test Filter'
        onRemove={mockOnRemove}
        testId='custom-chip-id'
      />,
    )

    expect(screen.getByTestId('custom-chip-id')).toBeInTheDocument()
  })

  it('is keyboard accessible with Tab', () => {
    render(<RcSesFilterChip label='Test Filter' onRemove={mockOnRemove} />)

    const chip = screen.getByRole('button')
    expect(chip).toHaveAttribute('tabIndex', '0')
  })
})
