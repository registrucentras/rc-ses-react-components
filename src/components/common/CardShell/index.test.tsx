import { Box, Typography } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test } from 'vitest'

import RcSesButton from '@/components/common/Button'
import theme from '@/theme/light'

import RcSesCard from '.'

const renderCard = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesCard (shell)', () => {
  test('renders header, content and footer slots when provided', () => {
    renderCard(
      <RcSesCard
        header={
          <Box>
            <Typography variant='h5' component='h3' sx={{ mb: 2.5 }}>
              Kortelės antraštė
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              Paaiškinimas apie šios kortelės turinį
            </Typography>
          </Box>
        }
        footer={
          <>
            <RcSesButton color='grey' variant='outlined'>
              Atšaukti
            </RcSesButton>
            <RcSesButton>Tęsti</RcSesButton>
          </>
        }
      >
        <div>Turinys</div>
      </RcSesCard>,
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Kortelės antraštė' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Paaiškinimas apie šios kortelės turinį')).toBeInTheDocument()
    expect(screen.getByText('Turinys')).toBeInTheDocument()
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
      <RcSesCard header={<h3>Antraštė</h3>} testIds={{ content: 'card-content' }} />,
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

  test('variant="card" applies larger border-radius', () => {
    renderCard(
      <RcSesCard variant='card' testIds={{ root: 'card-root' }}>
        <div>Turinys</div>
      </RcSesCard>,
    )

    const card = screen.getByTestId('card-root')
    expect(card).toHaveStyle({ borderRadius: '0.75rem' })
  })

  test('variant="subcard" applies smaller border-radius', () => {
    renderCard(
      <RcSesCard variant='subcard' testIds={{ root: 'card-root' }}>
        <div>Turinys</div>
      </RcSesCard>,
    )

    const card = screen.getByTestId('card-root')
    expect(card).toHaveStyle({ borderRadius: '0.5rem' })
  })

  test('applies different theme styles', () => {
    const { rerender } = renderCard(
      <RcSesCard theme='default' testIds={{ root: 'card-root' }}>
        <div>Turinys</div>
      </RcSesCard>,
    )
    expect(screen.getByTestId('card-root')).toBeInTheDocument()

    rerender(
      <ThemeProvider theme={theme}>
        <RcSesCard theme='brand' testIds={{ root: 'card-root' }}>
          <div>Turinys</div>
        </RcSesCard>
      </ThemeProvider>,
    )
    expect(screen.getByTestId('card-root')).toBeInTheDocument()

    rerender(
      <ThemeProvider theme={theme}>
        <RcSesCard theme='sunken' testIds={{ root: 'card-root' }}>
          <div>Turinys</div>
        </RcSesCard>
      </ThemeProvider>,
    )
    expect(screen.getByTestId('card-root')).toBeInTheDocument()
  })
})
