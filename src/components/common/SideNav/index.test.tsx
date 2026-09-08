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

// The desktop column and its scrolling row list carry no role of their own; the
// nav landmark is the only stable handle into that part of the tree.
const getDesktopColumn = () =>
  screen.getByRole('navigation').firstElementChild as HTMLElement
const getRowList = () => getDesktopColumn().lastElementChild as HTMLElement

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

  it('lets the desktop list grow as tall as it needs by default', () => {
    renderSideNav(<RcSesSideNav items={items} />)

    expect(getRowList()).not.toHaveStyle({ overflowY: 'auto' })
    expect(window.getComputedStyle(getDesktopColumn()).maxHeight).not.toContain('100vh')
  })

  it("caps the desktop list to the viewport and scrolls it inside itself with overflow='scroll'", () => {
    renderSideNav(<RcSesSideNav items={items} overflow='scroll' offset={96} />)

    expect(window.getComputedStyle(getDesktopColumn()).maxHeight).toBe(
      'calc(100vh - 96px)',
    )
    expect(getRowList()).toHaveStyle({ overflowY: 'auto' })
  })

  it('scrolls an active item that sits past the bottom of the list into view', () => {
    const { rerender } = renderSideNav(
      <RcSesSideNav items={items} overflow='scroll' offset={96} />,
    )

    const list = getRowList()
    const scrollTo = vi.fn()
    list.scrollTo = scrollTo
    // jsdom has no layout: the list ends at 300, the row runs on to 360.
    list.getBoundingClientRect = () =>
      ({ top: 100, bottom: 300, left: 0, right: 200 }) as DOMRect
    const row = list.querySelector<HTMLElement>('[data-item-id="signature"]')!
    row.getBoundingClientRect = () =>
      ({ top: 320, bottom: 360, left: 0, right: 200 }) as DOMRect

    rerender(
      <ThemeProvider theme={theme}>
        <RcSesSideNav
          items={items}
          overflow='scroll'
          offset={96}
          activeItemId='signature'
        />
      </ThemeProvider>,
    )

    expect(scrollTo).toHaveBeenCalledWith({ top: 60, behavior: 'smooth' })
  })

  it('renders in English when the language is changed', async () => {
    await i18n.changeLanguage('en')
    renderSideNav(<RcSesSideNav items={items} />)

    expect(screen.getByRole('navigation', { name: 'Topics' })).toBeInTheDocument()
  })
})
