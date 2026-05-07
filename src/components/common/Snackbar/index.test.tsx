import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactNode } from 'react'
import { afterEach, beforeEach, describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import RcSesSnackbar from './index'

const DEFAULT_PROPS = { state: 'success' as const, message: 'Test', open: true }

const renderSnackbar = (props: ReactNode) =>
  render(<ThemeProvider theme={theme}>{props}</ThemeProvider>)

const getMuiSnackbar = () => document.querySelector('.MuiSnackbar-root') as HTMLElement

describe('RcSesSnackbar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.runOnlyPendingTimers()
    vi.useRealTimers()
  })

  test('renders message', () => {
    renderSnackbar(<RcSesSnackbar {...DEFAULT_PROPS} message='Test message' />)

    expect(screen.getByText('Test message')).toBeInTheDocument()
  })

  test('renders standard size by default', () => {
    const { container } = renderSnackbar(<RcSesSnackbar {...DEFAULT_PROPS} />)

    expect(container.querySelector('[role="status"]')).toHaveStyle({
      maxHeight: '120px',
      width: '400px',
    })
  })

  test('renders compact size', () => {
    const { container } = renderSnackbar(
      <RcSesSnackbar {...DEFAULT_PROPS} size='compact' />,
    )

    expect(container.querySelector('[role="status"]')).toHaveStyle({
      maxHeight: '96px',
      width: '320px',
    })
  })

  test('closes on Escape key', () => {
    const handleClose = vi.fn()
    renderSnackbar(<RcSesSnackbar {...DEFAULT_PROPS} onClose={handleClose} />)
    const snackbar = getMuiSnackbar()
    fireEvent.keyDown(snackbar, { key: 'Escape', code: 'Escape' })

    expect(handleClose).toHaveBeenCalled()
  })

  test('auto-hides after duration', () => {
    const handleClose = vi.fn()
    renderSnackbar(
      <RcSesSnackbar {...DEFAULT_PROPS} onClose={handleClose} duration={1000} />,
    )
    const statusElement = screen.getByText('Test')
    expect(statusElement).toBeInTheDocument()

    vi.advanceTimersByTime(1000)

    expect(handleClose).toHaveBeenCalled()
  })

  test('does not auto-hide when persist is true', async () => {
    const handleClose = vi.fn()
    renderSnackbar(
      <RcSesSnackbar {...DEFAULT_PROPS} onClose={handleClose} persist duration={1000} />,
    )

    vi.advanceTimersByTime(2000)

    expect(handleClose).not.toHaveBeenCalled()
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
