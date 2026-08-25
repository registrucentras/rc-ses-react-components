import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { ReactElement } from 'react'
import { beforeEach, describe, expect, it, vi } from 'vitest'

import i18n from '@/i18n/i18n'
import theme from '@/theme/light'

import { RcSesSideNavItem } from './SideNav.types'
import RcSesSideNavLayout from './SideNavLayout'

function ResizeObserverMock() {
  return { observe: () => {}, unobserve: () => {}, disconnect: () => {} }
}

vi.stubGlobal('ResizeObserver', ResizeObserverMock)
Element.prototype.scrollIntoView = vi.fn()

const items: RcSesSideNavItem[] = [
  { id: 'family', label: 'Aš ir mano šeima', count: 4 },
  { id: 'documents', label: 'Dokumentai apie gyventoją', count: 2 },
]

const renderLayout = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesSideNavLayout', () => {
  beforeEach(async () => {
    await i18n.changeLanguage('lt')
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
