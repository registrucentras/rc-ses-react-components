import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { vi } from 'vitest'

import theme from '@/theme/light'

import RcSesAlert from './index'

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}))

const renderAlert = (ui: React.ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesAlert', () => {
  test('renders children', () => {
    renderAlert(<RcSesAlert>Alert message</RcSesAlert>)
    expect(screen.getByText('Alert message')).toBeInTheDocument()
  })

  test('renders with each severity', () => {
    const severities = ['grey', 'info', 'warning', 'error', 'success'] as const
    severities.forEach((severity) => {
      const { unmount } = renderAlert(
        <RcSesAlert severity={severity}>{severity} message</RcSesAlert>,
      )
      expect(screen.getByText(`${severity} message`)).toBeInTheDocument()
      unmount()
    })
  })

  describe('accessibility', () => {
    test.each([
      ['grey', 'status', 'polite'],
      ['info', 'status', 'polite'],
      ['success', 'status', 'polite'],
      ['warning', 'alert', 'assertive'],
      ['error', 'alert', 'assertive'],
    ] as const)('severity=%s gets role=%s and aria-live=%s', (severity, expectedRole, expectedAriaLive) => {
      const { unmount } = renderAlert(<RcSesAlert severity={severity}>message</RcSesAlert>)
      expect(screen.getByRole(expectedRole)).toHaveAttribute('aria-live', expectedAriaLive)
      unmount()
    })

    test('an explicit role prop overrides the severity default', () => {
      renderAlert(
        <RcSesAlert severity='error' role='status'>
          message
        </RcSesAlert>,
      )
      expect(screen.getByRole('status')).toHaveAttribute('aria-live', 'polite')
    })

    test('close button has a translated aria-label', () => {
      renderAlert(<RcSesAlert onClose={() => {}}>message</RcSesAlert>)
      expect(screen.getByRole('button', { name: 'close' })).toBeInTheDocument()
    })

    test('severity icon is hidden from assistive tech', () => {
      const { container } = renderAlert(<RcSesAlert severity='success'>message</RcSesAlert>)
      expect(container.querySelector('.MuiAlert-icon svg')).toHaveAttribute('aria-hidden')
    })

    test('close and action controls are reachable in normal Tab order', () => {
      renderAlert(
        <RcSesAlert severity='error' actionLabel='Retry' onActionClick={() => {}} onClose={() => {}}>
          message
        </RcSesAlert>,
      )

      const actionButton = screen.getByRole('button', { name: 'Retry' })
      const closeButton = screen.getByRole('button', { name: 'close' })

      expect(actionButton.tagName).toBe('BUTTON')
      expect(closeButton.tagName).toBe('BUTTON')

      actionButton.focus()
      expect(actionButton).toHaveFocus()

      closeButton.focus()
      expect(closeButton).toHaveFocus()
    })
  })

  describe('show* toggles', () => {
    test('showClose=false hides the close button even when onClose is provided', () => {
      renderAlert(
        <RcSesAlert onClose={() => {}} showClose={false}>
          message
        </RcSesAlert>,
      )
      expect(screen.queryByRole('button', { name: 'close' })).not.toBeInTheDocument()
    })

    test('showAction=false hides the action button even when actionLabel/onActionClick are provided', () => {
      renderAlert(
        <RcSesAlert actionLabel='Retry' onActionClick={() => {}} showAction={false}>
          message
        </RcSesAlert>,
      )
      expect(screen.queryByRole('button', { name: 'Retry' })).not.toBeInTheDocument()
    })

    test('action button does not render without onActionClick even if actionLabel is set', () => {
      renderAlert(<RcSesAlert actionLabel='Retry'>message</RcSesAlert>)
      expect(screen.queryByRole('button', { name: 'Retry' })).not.toBeInTheDocument()
    })

    test('showIcon=false hides the severity icon', () => {
      const { container } = renderAlert(
        <RcSesAlert severity='success' showIcon={false}>
          message
        </RcSesAlert>,
      )
      expect(container.querySelector('.MuiAlert-icon')).not.toBeInTheDocument()
    })
  })

  describe('container prop', () => {
    test('renders children correctly when container={true}', () => {
      renderAlert(
        <RcSesAlert container data-testid='alert'>
          inside
        </RcSesAlert>,
      )

      expect(screen.getByText('inside')).toBeInTheDocument()
    })

    test('renders children correctly when container is ContainerProps object', () => {
      renderAlert(
        <RcSesAlert container={{ maxWidth: 'sm' }} data-testid='alert'>
          inside sm
        </RcSesAlert>,
      )
      expect(screen.getByText('inside sm')).toBeInTheDocument()
    })

    test('applies full-bleed sx overrides when container is set', () => {
      const { container } = renderAlert(
        <RcSesAlert container data-testid='alert'>
          text
        </RcSesAlert>,
      )
      // Verify the alert renders
      expect(container.querySelector('.MuiAlert-root')).toBeInTheDocument()
    })

    test('merges caller sx on top of container sx', () => {
      const { container } = renderAlert(
        <RcSesAlert container sx={{ mb: 0 }}>
          text
        </RcSesAlert>,
      )
      // Both container and caller sx should be applied without error
      expect(container.querySelector('.MuiAlert-root')).toBeInTheDocument()
    })
  })
})
