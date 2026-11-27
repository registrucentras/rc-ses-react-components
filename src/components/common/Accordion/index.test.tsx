import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test } from 'vitest'

import { BriefcaseIcon } from '@/assets/icons/phosphorIcons'
import theme from '@/theme/light'

import RcSesAccordion from '.'
import useAccordionController from './hooks/useAccordionController'

function Example({
  menu = false,
  pinned = false,
  disabled = false,
  current = false,
}: {
  menu?: boolean
  pinned?: boolean
  disabled?: boolean
  current?: boolean
}) {
  const controller = useAccordionController({
    exclusive: menu,
    initialState: {
      first: {
        title: 'Pirma sekcija',
        description: 'Sekcijos aprašymas',
        state: 'active',
        expanded: false,
        canToggle: !pinned,
        disabled,
      },
      second: { title: 'Antra sekcija', state: 'pending', expanded: false },
    },
  })
  return (
    <ThemeProvider theme={theme}>
      <button type='button' onClick={controller.expandAll}>
        Išskleisti visus
      </button>
      <button type='button' onClick={controller.collapseAll}>
        Suskleisti visus
      </button>
      {menu ? (
        <nav aria-label='Paslaugos'>
          <RcSesAccordion
            id='first'
            type='menu'
            Icon={BriefcaseIcon}
            controller={controller}
            menuItems={[{ label: 'Dabartinė paslauga', href: '/current', current }]}
          />
          <RcSesAccordion
            id='second'
            type='menu'
            controller={controller}
            menuItems={[{ label: 'Kita paslauga', href: '/other' }]}
          />
        </nav>
      ) : (
        <>
          <RcSesAccordion id='first' controller={controller}>
            Pirmos sekcijos turinys
          </RcSesAccordion>
          <RcSesAccordion id='second' controller={controller}>
            Antros sekcijos turinys
          </RcSesAccordion>
        </>
      )}
    </ThemeProvider>
  )
}

describe('Accordion v2', () => {
  test('preserves heading, description and labelled region with controller controls', () => {
    render(<Example />)
    const header = screen.getByRole('button', { name: /Pirma sekcija/ })
    expect(screen.getByRole('heading', { name: /Pirma sekcija/ })).toContainElement(
      header,
    )
    expect(header).toHaveAttribute('aria-controls', 'first-content')
    fireEvent.click(header)
    expect(header).toHaveAttribute('aria-expanded', 'true')
    expect(screen.getByRole('region', { name: /Pirma sekcija/ })).toHaveAttribute(
      'id',
      'first-content',
    )
    fireEvent.click(screen.getByRole('button', { name: 'Išskleisti visus' }))
    expect(screen.getByRole('button', { name: 'Antra sekcija' })).toHaveAttribute(
      'aria-expanded',
      'true',
    )
  })

  test('pinned sections stay visible without a button after collapseAll', () => {
    render(<Example pinned />)
    expect(
      screen.queryByRole('button', { name: /Pirma sekcija/ }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Pirma sekcija/ })).toBeVisible()
    fireEvent.click(screen.getByRole('button', { name: 'Suskleisti visus' }))
    expect(screen.getByText('Pirmos sekcijos turinys')).toBeVisible()
  })

  test('disabled sections cannot expand by click or expandAll', () => {
    render(<Example disabled />)
    const header = screen.getByRole('button', { name: /Pirma sekcija/ })
    expect(header).toBeDisabled()
    fireEvent.click(header)
    fireEvent.click(screen.getByRole('button', { name: 'Išskleisti visus' }))
    expect(header).toHaveAttribute('aria-expanded', 'false')
  })

  test('menu opens the current group once, supports all-closed, and has no headings or regions', async () => {
    render(<Example menu current />)
    const first = screen.getByRole('button', { name: 'Pirma sekcija' })
    const second = screen.getByRole('button', { name: 'Antra sekcija' })
    await waitFor(() => expect(first).toHaveAttribute('aria-expanded', 'true'))
    expect(screen.getByRole('link', { name: 'Dabartinė paslauga' })).toHaveAttribute(
      'aria-current',
      'page',
    )
    expect(screen.queryByRole('heading')).not.toBeInTheDocument()
    expect(screen.queryByRole('region')).not.toBeInTheDocument()
    fireEvent.click(second)
    expect(first).toHaveAttribute('aria-expanded', 'false')
    expect(second).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(second)
    expect(second).toHaveAttribute('aria-expanded', 'false')
    expect(first).toHaveAttribute('aria-expanded', 'false')
  })
})
