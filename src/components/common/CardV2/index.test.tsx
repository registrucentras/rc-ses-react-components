import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import RcSesCardV2 from '.'
import theme from '../../../theme/light'

const renderCard = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesCardV2', () => {
  test('renders header row with heading, description and CTAs when heading is provided', () => {
    renderCard(
      <RcSesCardV2
        heading='Kortelės antraštė'
        description='Paaiškinimas apie šios kortelės turinį'
        headerActions={<button type='button'>Redaguoti</button>}
        footer={<button type='button'>Tęsti</button>}
      >
        <div>Turinys</div>
      </RcSesCardV2>,
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Kortelės antraštė' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Paaiškinimas apie šios kortelės turinį')).toBeInTheDocument()
    expect(screen.getByText('Turinys')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Redaguoti' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tęsti' })).toBeInTheDocument()
  })

  test('header is OFF when no heading is provided (free-form slot content)', () => {
    renderCard(
      <RcSesCardV2 testIds={{ header: 'card-header' }}>
        <div>Laisvos formos turinys</div>
      </RcSesCardV2>,
    )

    expect(screen.queryByTestId('card-header')).not.toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByText('Laisvos formos turinys')).toBeInTheDocument()
  })

  test('badge is part of the heading accessible name, not separately focusable', () => {
    renderCard(
      <RcSesCardV2 badge={<span>4</span>} heading='Pasirinktos teisės'>
        <div>Turinys</div>
      </RcSesCardV2>,
    )

    expect(
      screen.getByRole('heading', { name: /Pasirinktos teisės\s?4/ }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(document.querySelector('[tabindex]')).toBeNull()
  })

  test('icon-tile is decorative (aria-hidden)', () => {
    renderCard(
      <RcSesCardV2
        heading='Antraštė'
        icon={<svg data-testid='tile-icon' />}
        testIds={{ icon: 'icon-wrapper' }}
      >
        <div>Turinys</div>
      </RcSesCardV2>,
    )

    expect(screen.getByTestId('icon-wrapper')).toHaveAttribute('aria-hidden', 'true')
  })

  test('respects headingLevel (Card introduces no own semantics)', () => {
    renderCard(<RcSesCardV2 heading='Antraštė' headingLevel={2} />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Antraštė' }),
    ).toBeInTheDocument()
  })

  test('omits description when not provided', () => {
    renderCard(
      <RcSesCardV2 heading='Antraštė' testIds={{ description: 'card-description' }} />,
    )

    expect(screen.queryByTestId('card-description')).not.toBeInTheDocument()
  })

  test('omits content slot when no children provided', () => {
    renderCard(<RcSesCardV2 heading='Antraštė' testIds={{ content: 'card-content' }} />)

    expect(screen.queryByTestId('card-content')).not.toBeInTheDocument()
  })

  test('omits footer when not provided', () => {
    renderCard(
      <RcSesCardV2
        heading='Subkortelė'
        testIds={{ footer: 'card-footer', root: 'card-root' }}
        tier='subcard'
      >
        <div>Turinys</div>
      </RcSesCardV2>,
    )

    expect(screen.getByTestId('card-root')).toBeInTheDocument()
    expect(screen.queryByTestId('card-footer')).not.toBeInTheDocument()
  })
})
