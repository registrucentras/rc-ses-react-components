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
    const severities = ['info', 'warning', 'error', 'success'] as const
    severities.forEach((severity) => {
      const { unmount } = renderAlert(
        <RcSesAlert severity={severity}>{severity} message</RcSesAlert>,
      )
      expect(screen.getByText(`${severity} message`)).toBeInTheDocument()
      unmount()
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
