import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test, vi } from 'vitest'

import theme from '../../../../theme/light'
import RcSesGroupCard from './GroupCard'

const renderCard = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

const links = [
  { label: 'Juridinių asmenų registro (JAR) išrašas', href: '/paslaugos/jar-israsas' },
  { label: 'Juridinio asmens steigimas', href: '/paslaugos/steigimas' },
]

describe('RcSesGroupCard', () => {
  test('renders heading, description and link list', () => {
    renderCard(
      <RcSesGroupCard
        title='Įmonėms ir organizacijoms'
        description='61 paslauga'
        links={links}
        viewAllHref='/paslaugos'
      />,
    )

    expect(
      screen.getByRole('heading', { level: 3, name: 'Įmonėms ir organizacijoms' }),
    ).toBeInTheDocument()
    expect(screen.getByText('61 paslauga')).toBeInTheDocument()

    const list = screen.getByRole('list')
    expect(list).toBeInTheDocument()
    expect(screen.getAllByRole('listitem')).toHaveLength(2)

    const link = screen.getByRole('link', {
      name: 'Juridinių asmenų registro (JAR) išrašas',
    })
    expect(link).toHaveAttribute('href', '/paslaugos/jar-israsas')
  })

  test('renders footer CTA with default label and href', () => {
    renderCard(
      <RcSesGroupCard
        title='Įmonėms ir organizacijoms'
        links={links}
        viewAllHref='/paslaugos'
      />,
    )

    const cta = screen.getByRole('link', { name: 'Žiūrėti visas' })
    expect(cta).toHaveAttribute('href', '/paslaugos')
  })

  test('supports onViewAllClick handler and custom label', () => {
    const onClick = vi.fn()
    renderCard(
      <RcSesGroupCard
        title='Grupė'
        links={links}
        viewAllLabel='Visos paslaugos'
        onViewAllClick={onClick}
      />,
    )

    fireEvent.click(screen.getByRole('button', { name: 'Visos paslaugos' }))
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('omits footer when no href or click handler provided', () => {
    renderCard(
      <RcSesGroupCard
        title='Grupė'
        links={links}
        testIds={{ footer: 'group-card-footer' }}
      />,
    )

    expect(screen.queryByTestId('group-card-footer')).not.toBeInTheDocument()
  })

  test('icon is decorative (aria-hidden) and heading is the accessible name', () => {
    renderCard(
      <RcSesGroupCard
        title='Grupė'
        icon={<svg data-testid='tile-icon' />}
        links={links}
        testIds={{ icon: 'group-card-icon' }}
      />,
    )

    expect(screen.getByTestId('group-card-icon')).toHaveAttribute('aria-hidden', 'true')
  })

  test('arrow icons inside links are decorative', () => {
    renderCard(<RcSesGroupCard title='Grupė' links={[links[0]]} />)

    const link = screen.getByRole('link', {
      name: 'Juridinių asmenų registro (JAR) išrašas',
    })
    // Accessible name must not include arrow decoration
    expect(link).toHaveAccessibleName('Juridinių asmenų registro (JAR) išrašas')
  })
})
