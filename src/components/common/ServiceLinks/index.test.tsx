import { ThemeProvider } from '@mui/material/styles'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { type ReactElement } from 'react'
import { describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import RcSesServiceLinks from '.'

const renderServiceLinks = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

const baseItems = [
  { label: 'First service', href: '#first' },
  { label: 'Second service', href: '#second' },
]

describe('RcSesServiceLinks', () => {
  test('renders all provided items with their labels', () => {
    renderServiceLinks(<RcSesServiceLinks items={baseItems} />)

    expect(screen.getByText('First service')).toBeInTheDocument()
    expect(screen.getByText('Second service')).toBeInTheDocument()
  })

  test('renders an item with href as a link pointing to the href', () => {
    renderServiceLinks(<RcSesServiceLinks items={[{ label: 'Go', href: '/target' }]} />)

    const link = screen.getByRole('link', { name: 'Go' })
    expect(link).toHaveAttribute('href', '/target')
  })

  test('adds rel="noopener noreferrer" for links opening in a new tab', () => {
    renderServiceLinks(
      <RcSesServiceLinks items={[{ label: 'Ext', href: '/x', target: '_blank' }]} />,
    )

    const link = screen.getByRole('link', { name: 'Ext' })
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  test('fires onClick on a link while keeping it a link', () => {
    const onClick = vi.fn()
    renderServiceLinks(
      <RcSesServiceLinks items={[{ label: 'Both', href: '/b', onClick }]} />,
    )

    const link = screen.getByRole('link', { name: 'Both' })
    fireEvent.click(link)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  test('does not render disabled item as a link', () => {
    renderServiceLinks(
      <RcSesServiceLinks items={[{ label: 'Off', href: '/off', disabled: true }]} />,
    )

    expect(screen.queryByRole('link', { name: 'Off' })).not.toBeInTheDocument()
    expect(screen.getByText('Off')).toBeInTheDocument()
  })

  test('removes disabled item from the keyboard tab order', () => {
    renderServiceLinks(
      <RcSesServiceLinks
        items={[{ label: 'Off', href: '/off', disabled: true }]}
        testIds={{ item: 'row' }}
      />,
    )

    expect(screen.getByTestId('row')).toHaveAttribute('tabindex', '-1')
  })

  test('renders navigable rows through renderLink', () => {
    renderServiceLinks(
      <RcSesServiceLinks
        items={baseItems}
        renderLink={({ href, children, onClick }) => (
          <a href={href} onClick={onClick} data-router-link>
            {children}
          </a>
        )}
      />,
    )

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    links.forEach((link) => expect(link).toHaveAttribute('data-router-link'))
  })

  test('renderLink receives href, target, rel and onClick', () => {
    const onClick = vi.fn()
    const renderLink = vi.fn(({ href, children }) => <a href={href}>{children}</a>)

    renderServiceLinks(
      <RcSesServiceLinks
        items={[{ label: 'Go', href: '/target', target: '_blank', onClick }]}
        renderLink={renderLink}
      />,
    )

    expect(renderLink).toHaveBeenCalledWith(
      expect.objectContaining({
        href: '/target',
        target: '_blank',
        rel: 'noopener noreferrer',
        onClick,
      }),
    )
  })

  test('renderLink is not used for disabled items', () => {
    const renderLink = vi.fn(({ href, children }) => <a href={href}>{children}</a>)

    renderServiceLinks(
      <RcSesServiceLinks
        items={[{ label: 'Off', href: '/off', disabled: true }]}
        renderLink={renderLink}
      />,
    )

    expect(renderLink).not.toHaveBeenCalled()
    expect(screen.queryByRole('link', { name: 'Off' })).not.toBeInTheDocument()
  })
})
