import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import AdvancedListItemShell from '.'

describe('AdvancedListItemShell', () => {
  it('renders the required content slot', () => {
    render(<AdvancedListItemShell content={<span>Content</span>} />)

    expect(screen.getByText('Content')).toBeInTheDocument()
  })

  it('omits leading/trailing/expanded regions when not provided', () => {
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        testIds={{
          root: 'root',
          leading: 'leading',
          trailing: 'trailing',
          expanded: 'expanded',
        }}
      />,
    )

    expect(screen.queryByTestId('leading')).not.toBeInTheDocument()
    expect(screen.queryByTestId('trailing')).not.toBeInTheDocument()
    expect(screen.queryByTestId('expanded')).not.toBeInTheDocument()
  })

  it('renders leading and trailing slots when provided', () => {
    render(
      <AdvancedListItemShell
        leading={<span>Leading</span>}
        content={<span>Content</span>}
        trailing={<span>Trailing</span>}
        testIds={{ leading: 'leading', trailing: 'trailing' }}
      />,
    )

    expect(screen.getByTestId('leading')).toHaveTextContent('Leading')
    expect(screen.getByTestId('trailing')).toHaveTextContent('Trailing')
  })

  it('does not render a falsy leading/trailing slot', () => {
    render(
      <AdvancedListItemShell
        leading={false}
        content={<span>Content</span>}
        trailing={null}
        testIds={{ leading: 'leading', trailing: 'trailing' }}
      />,
    )

    expect(screen.queryByTestId('leading')).not.toBeInTheDocument()
    expect(screen.queryByTestId('trailing')).not.toBeInTheDocument()
  })

  it('keeps the expanded slot content stable while toggling isExpanded', () => {
    const { rerender } = render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        expanded={<span>Expanded content</span>}
        isExpanded={false}
        testIds={{ expanded: 'expanded' }}
      />,
    )

    expect(screen.getByTestId('expanded')).toBeInTheDocument()
    expect(screen.getByText('Expanded content')).toBeInTheDocument()

    rerender(
      <AdvancedListItemShell
        content={<span>Content</span>}
        expanded={<span>Expanded content</span>}
        isExpanded
        testIds={{ expanded: 'expanded' }}
      />,
    )

    expect(screen.getByText('Expanded content')).toBeInTheDocument()
  })

  it('calls onClick when the root is clicked and not disabled', () => {
    const onClick = vi.fn()
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        onClick={onClick}
        testIds={{ root: 'root' }}
      />,
    )

    fireEvent.click(screen.getByTestId('root'))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('activates via keyboard (Enter/Space) when clickable', () => {
    const onClick = vi.fn()
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        onClick={onClick}
        testIds={{ root: 'root' }}
      />,
    )

    const root = screen.getByTestId('root')
    fireEvent.keyDown(root, { key: 'Enter' })
    fireEvent.keyDown(root, { key: ' ' })
    expect(onClick).toHaveBeenCalledTimes(2)
  })

  it('does not call onClick when state is disabled', () => {
    const onClick = vi.fn()
    render(
      <AdvancedListItemShell
        content={<span>Content</span>}
        onClick={onClick}
        state='disabled'
        testIds={{ root: 'root' }}
      />,
    )

    fireEvent.click(screen.getByTestId('root'))
    expect(onClick).not.toHaveBeenCalled()
  })
})
