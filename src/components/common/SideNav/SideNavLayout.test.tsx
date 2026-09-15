import { ThemeProvider } from '@mui/material/styles'
import { act, render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import i18n from '@/i18n/i18n'
import theme from '@/theme/light'

import { RcSesSideNavItem } from './SideNav.types'
import RcSesSideNavLayout from './SideNavLayout'

function ResizeObserverMock() {
  return { observe: () => {}, unobserve: () => {}, disconnect: () => {} }
}

Element.prototype.scrollIntoView = vi.fn()

const HEADER_OFFSET = 56
const MOBILE_BAR_HEIGHT = 62
const SECTION_TOP = 500

const items: RcSesSideNavItem[] = [
  { id: 'family', label: 'Aš ir mano šeima', count: 4 },
  { id: 'documents', label: 'Dokumentai apie gyventoją', count: 2 },
]

const renderLayout = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesSideNavLayout', () => {
  beforeEach(async () => {
    vi.stubGlobal('ResizeObserver', ResizeObserverMock)
    await i18n.changeLanguage('lt')
  })

  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('renders the nav alongside its content children', () => {
    renderLayout(
      <RcSesSideNavLayout items={items} title='Temos'>
        <div id='family'>Family content</div>
        <div id='documents'>Documents content</div>
      </RcSesSideNavLayout>,
    )

    expect(screen.getByRole('navigation', { name: 'Temos' })).toBeInTheDocument()
    expect(screen.getByText('Family content')).toBeInTheDocument()
    expect(screen.getByText('Documents content')).toBeInTheDocument()
  })

  it('forwards activeItemId/onItemClick through to the nav for controlled mode', () => {
    const handleClick = vi.fn()
    renderLayout(
      <RcSesSideNavLayout items={items} activeItemId='family' onItemClick={handleClick}>
        <div id='family' />
        <div id='documents' />
      </RcSesSideNavLayout>,
    )

    screen.getAllByRole('button', { name: 'Dokumentai apie gyventoją, 2' })[0].click()

    expect(handleClick).toHaveBeenCalledWith('documents')
  })

  it('is interactive by default and scrolls to the clicked item when uncontrolled', () => {
    const scrollToMock = vi.fn()
    vi.stubGlobal('scrollTo', scrollToMock)
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false })),
    )

    renderLayout(
      <RcSesSideNavLayout items={items} title='Temos'>
        <div id='family' />
        <div id='documents' />
      </RcSesSideNavLayout>,
    )

    act(() => {
      screen.getAllByRole('button', { name: 'Dokumentai apie gyventoją, 2' })[0].click()
    })

    expect(scrollToMock).toHaveBeenCalledWith(
      expect.objectContaining({ behavior: 'smooth' }),
    )
  })

  // The mobile bar is sticky on top of the content: land a section at the page
  // header's height alone and the bar covers its heading, so the first thing the
  // reader sees is the section's first row.
  it('clears the mobile bar as well as the page header when scrolling to an item', () => {
    const scrollToMock = vi.fn()
    vi.stubGlobal('scrollTo', scrollToMock)
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: false })),
    )
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
      () => ({ top: SECTION_TOP, height: MOBILE_BAR_HEIGHT }) as DOMRect,
    )

    renderLayout(
      <RcSesSideNavLayout items={items} title='Temos' offset={HEADER_OFFSET}>
        <div id='family' />
        <div id='documents' />
      </RcSesSideNavLayout>,
    )

    act(() => {
      screen.getAllByRole('button', { name: 'Dokumentai apie gyventoją, 2' })[0].click()
    })

    expect(scrollToMock).toHaveBeenCalledWith(
      expect.objectContaining({ top: SECTION_TOP - HEADER_OFFSET - MOBILE_BAR_HEIGHT }),
    )
  })

  it('publishes that same offset for the sections to scroll-margin by', () => {
    vi.spyOn(HTMLElement.prototype, 'getBoundingClientRect').mockImplementation(
      () => ({ top: SECTION_TOP, height: MOBILE_BAR_HEIGHT }) as DOMRect,
    )

    const { container } = renderLayout(
      <RcSesSideNavLayout items={items} title='Temos' offset={HEADER_OFFSET}>
        <div id='family' />
      </RcSesSideNavLayout>,
    )

    const content = container.querySelector<HTMLElement>('[style*="scroll-offset"]')
    expect(content?.style.getPropertyValue('--rc-ses-sidenav-scroll-offset')).toBe(
      `${HEADER_OFFSET + MOBILE_BAR_HEIGHT}px`,
    )
  })

  it('does not throw when clicked with no matching section in the content', () => {
    renderLayout(
      <RcSesSideNavLayout items={items} title='Temos'>
        <div />
      </RcSesSideNavLayout>,
    )

    expect(() =>
      screen.getAllByRole('button', { name: 'Dokumentai apie gyventoją, 2' })[0].click(),
    ).not.toThrow()
  })

  it('does not drop custom sx values passed as an array', () => {
    const { container } = renderLayout(
      <RcSesSideNavLayout
        items={items}
        title='Temos'
        sx={[{ backgroundColor: 'rgb(1, 2, 3)' }]}
      >
        <div id='family' />
        <div id='documents' />
      </RcSesSideNavLayout>,
    )

    expect(container.firstChild).toHaveStyle({ backgroundColor: 'rgb(1, 2, 3)' })
  })
})
