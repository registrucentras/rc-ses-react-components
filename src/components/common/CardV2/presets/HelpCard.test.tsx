import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test, vi } from 'vitest'

import theme from '../../../../theme/light'
import RcSesHelpCard from './HelpCard'

const renderCard = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesHelpCard', () => {
  test('renders title, description and CTA link', () => {
    renderCard(
      <RcSesHelpCard
        title='Kontaktai'
        description='Konsultacijos telefonu darbo dienomis 8:00-17:00.'
        ctaLabel='Visi kontaktai'
        href='/kontaktai'
      />,
    )

    expect(screen.getByText('Kontaktai')).toBeInTheDocument()
    expect(
      screen.getByText('Konsultacijos telefonu darbo dienomis 8:00-17:00.'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Visi kontaktai' })).toHaveAttribute(
      'href',
      '/kontaktai',
    )
  })

  test('renders CTA as button and triggers click handler', () => {
    const onClick = vi.fn()

    renderCard(<RcSesHelpCard title='DUK' ctaLabel='Peržiūrėti DUK' onClick={onClick} />)

    fireEvent.click(screen.getByRole('button', { name: 'Peržiūrėti DUK' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('omits CTA when no href or click handler provided', () => {
    renderCard(
      <RcSesHelpCard title='Registracija vizitui' ctaLabel='Pradėkite registraciją' />,
    )

    expect(screen.queryByText('Pradėkite registraciją')).not.toBeInTheDocument()
  })

  test('icon is decorative (aria-hidden)', () => {
    renderCard(
      <RcSesHelpCard
        title='DUK'
        icon={<svg data-testid='tile-icon' />}
        testIds={{ icon: 'help-card-icon' }}
      />,
    )

    expect(screen.getByTestId('help-card-icon')).toHaveAttribute('aria-hidden', 'true')
  })

  test('CTA accessible name does not include arrow decoration', () => {
    renderCard(
      <RcSesHelpCard title='Kontaktai' ctaLabel='Visi kontaktai' href='/kontaktai' />,
    )

    expect(screen.getByRole('link')).toHaveAccessibleName('Visi kontaktai')
  })
})
