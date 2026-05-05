import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import RcSesSnackbar from './index'

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

const DEFAULT_PROPS = { state: 'success' as const, message: 'Test', open: true }

const renderSnackbar = (props: ReactNode) =>
  render(<ThemeProvider theme={theme}>{props}</ThemeProvider>)
const getStatusElement = (container: HTMLElement) =>
  container.querySelector('[role="status"]')

describe('RcSesSnackbar', () => {
  test('renders message', () => {
    renderSnackbar(<RcSesSnackbar {...DEFAULT_PROPS} message='Test message' />)

    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  test('renders standard size by default', () => {
    const { container } = renderSnackbar(<RcSesSnackbar {...DEFAULT_PROPS} />)

    expect(getStatusElement(container)).toHaveStyle({ height: '60px', width: '400px' })
  })

  test('renders compact size', () => {
    const { container } = renderSnackbar(
      <RcSesSnackbar {...DEFAULT_PROPS} size='compact' />,
    )

    expect(getStatusElement(container)).toHaveStyle({ height: '48px', width: '320px' })
  })

  test('closes on Escape key', () => {
    const handleClose = vi.fn()
    const { container } = renderSnackbar(
      <RcSesSnackbar {...DEFAULT_PROPS} onClose={handleClose} />,
    )
    const snackbar = getStatusElement(container)
    if (snackbar) {
      fireEvent.keyDown(snackbar, { key: 'Escape', code: 'Escape' })
    }

    expect(handleClose).toHaveBeenCalled()
  })

  test('renders action button in standard size with onAction', () => {
    renderSnackbar(
      <RcSesSnackbar
        {...DEFAULT_PROPS}
        size='standard'
        onAction={() => {}}
        actionLabel='Undo'
      />,
    )

    expect(screen.getByRole('button', { name: 'Undo' })).toBeInTheDocument()
  })

  test('does not render action button in compact size', () => {
    renderSnackbar(
      <RcSesSnackbar
        {...DEFAULT_PROPS}
        size='compact'
        onAction={() => {}}
        actionLabel='Undo'
      />,
    )

    expect(screen.queryByRole('button', { name: 'Undo' })).not.toBeInTheDocument()
  })

  test('has correct accessibility attributes', () => {
    renderSnackbar(<RcSesSnackbar {...DEFAULT_PROPS} />)
    const status = screen.getByRole('status')

    expect(status).toHaveAttribute('aria-atomic', 'true')
    expect(status).toHaveAttribute('aria-live', 'polite')
  })
})
