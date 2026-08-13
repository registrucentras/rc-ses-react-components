import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import RcSesCard from '.'
import theme from '../../../theme/light'
import RcSesCardHeader from './CardHeader'

const renderCard = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesCard (shell)', () => {
  test('renders header, content and footer slots when provided', () => {
    renderCard(
      <RcSesCard
        header={
          <RcSesCardHeader
            title='Kortelės antraštė'
            description='Paaiškinimas apie šios kortelės turinį'
            actions={<button type='button'>Redaguoti</button>}
          />
        }
        footer={<button type='button'>Tęsti</button>}
      >
        <div>Turinys</div>
      </RcSesCard>,
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Kortelės antraštė' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Paaiškinimas apie šios kortelės turinį')).toBeInTheDocument()
    expect(screen.getByText('Turinys')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Redaguoti' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tęsti' })).toBeInTheDocument()
  })

  test('header slot is OFF when not provided (free-form slot content)', () => {
    renderCard(
      <RcSesCard testIds={{ header: 'card-header' }}>
        <div>Laisvos formos turinys</div>
      </RcSesCard>,
    )

    expect(screen.queryByTestId('card-header')).not.toBeInTheDocument()
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.getByText('Laisvos formos turinys')).toBeInTheDocument()
  })

  test('omits content slot when no children provided', () => {
    renderCard(
      <RcSesCard
        header={<RcSesCardHeader title='Antraštė' />}
        testIds={{ content: 'card-content' }}
      />,
    )

    expect(screen.queryByTestId('card-content')).not.toBeInTheDocument()
  })

  test('omits footer when not provided', () => {
    renderCard(
      <RcSesCard testIds={{ footer: 'card-footer', root: 'card-root' }} variant='subcard'>
        <div>Turinys</div>
      </RcSesCard>,
    )

    expect(screen.getByTestId('card-root')).toBeInTheDocument()
    expect(screen.queryByTestId('card-footer')).not.toBeInTheDocument()
  })

  test('fullHeight stretches the card and grows the content slot', () => {
    renderCard(
      <RcSesCard fullHeight testIds={{ content: 'card-content', root: 'card-root' }}>
        <div>Turinys</div>
      </RcSesCard>,
    )

    expect(screen.getByTestId('card-root')).toHaveStyle({ height: '100%' })
    expect(screen.getByTestId('card-content')).toHaveStyle({ flexGrow: '1' })
  })
})

describe('RcSesCardHeader', () => {
  test('badge is part of the heading accessible name, not separately focusable', () => {
    renderCard(<RcSesCardHeader badge={<span>4</span>} title='Pasirinktos teisės' />)

    expect(
      screen.getByRole('heading', { name: /Pasirinktos teisės\s?4/ }),
    ).toBeInTheDocument()
    expect(screen.queryByRole('button')).not.toBeInTheDocument()
    expect(document.querySelector('[tabindex]')).toBeNull()
  })

  test('icon-tile is decorative (aria-hidden)', () => {
    renderCard(
      <RcSesCardHeader
        icon={<svg data-testid='tile-icon' />}
        testIds={{ icon: 'icon-wrapper' }}
        title='Antraštė'
      />,
    )

    expect(screen.getByTestId('icon-wrapper')).toHaveAttribute('aria-hidden', 'true')
  })

  test('respects headingLevel (shell introduces no own semantics)', () => {
    renderCard(<RcSesCardHeader headingLevel={2} title='Antraštė' />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Antraštė' }),
    ).toBeInTheDocument()
  })

  test('omits description when not provided', () => {
    renderCard(
      <RcSesCardHeader
        testIds={{ description: 'header-description' }}
        title='Antraštė'
      />,
    )

    expect(screen.queryByTestId('header-description')).not.toBeInTheDocument()
  })
})
