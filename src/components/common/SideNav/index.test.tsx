import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import i18n from '@/i18n/i18n'
import theme from '@/theme/light'

import RcSesSideNav from '.'
import { RcSesSideNavItem } from './SideNav.types'

function ResizeObserverMock() {
  return { observe: () => {}, unobserve: () => {}, disconnect: () => {} }
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)
Element.prototype.scrollIntoView = vi.fn()

const items: RcSesSideNavItem[] = [
  { id: 'family', label: 'Aš ir mano šeima', count: 4 },
  { id: 'documents', label: 'Dokumentai apie gyventoją', count: 2 },
  { id: 'signature', label: 'Elektroninis parašas' },
]

const renderSideNav = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesSideNav', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('lt')
  })

  it('renders a nav landmark labelled with the title', () => {
    renderSideNav(<RcSesSideNav items={items} />)

    expect(screen.getByRole('navigation', { name: 'Temos' })).toBeInTheDocument()
  })

  it('renders a custom title when provided', () => {
    renderSideNav(<RcSesSideNav items={items} title='Skyriai' />)

    expect(screen.getByRole('navigation', { name: 'Skyriai' })).toBeInTheDocument()
    expect(screen.getAllByText('Skyriai')[0]).toBeInTheDocument()
  })

  it('renders every item label and count for both the desktop and mobile layouts', () => {
    renderSideNav(<RcSesSideNav items={items} activeItemId='family' />)

    expect(screen.getAllByText('Aš ir mano šeima')).toHaveLength(2)
    expect(screen.getAllByText('4')).toHaveLength(2)
  })

  it('marks the active item with aria-current and includes the count in its accessible name', () => {
    renderSideNav(
      <RcSesSideNav items={items} activeItemId='family' onItemClick={() => {}} />,
    )

    const activeButtons = screen.getAllByRole('button', { name: 'Aš ir mano šeima, 4' })
    expect(activeButtons).toHaveLength(2)
    activeButtons.forEach((button) =>
      expect(button).toHaveAttribute('aria-current', 'page'),
    )
  })

  it('does not set aria-current on inactive items', () => {
    renderSideNav(
      <RcSesSideNav items={items} activeItemId='family' onItemClick={() => {}} />,
    )

    const inactiveButtons = screen.getAllByRole('button', {
      name: 'Dokumentai apie gyventoją, 2',
    })
    inactiveButtons.forEach((button) =>
      expect(button).not.toHaveAttribute('aria-current'),
    )
  })

  it('calls onItemClick with the clicked item id', () => {
    const handleClick = vi.fn()
    renderSideNav(<RcSesSideNav items={items} onItemClick={handleClick} />)

    screen.getAllByRole('button', { name: 'Elektroninis parašas' })[0].click()

    expect(handleClick).toHaveBeenCalledWith('signature')
  })

  it('renders static, non-interactive content with no onItemClick', () => {
    renderSideNav(<RcSesSideNav items={items} activeItemId='family' />)

    expect(screen.queryAllByRole('button')).toHaveLength(0)
  })

  it('renders in English when the language is changed', async () => {
    await i18n.changeLanguage('en')
    renderSideNav(<RcSesSideNav items={items} />)

    expect(screen.getByRole('navigation', { name: 'Topics' })).toBeInTheDocument()
  })
})
