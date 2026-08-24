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

  test('does not set rel on same-tab links', () => {
    renderServiceLinks(<RcSesServiceLinks items={[{ label: 'Same', href: '/s' }]} />)

    const link = screen.getByRole('link', { name: 'Same' })
    expect(link).not.toHaveAttribute('rel')
    expect(link).not.toHaveAttribute('target')
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

  test('renders navigable rows through a custom linkComponent', () => {
    const RouterLink = ({ href, children, ...rest }: React.ComponentProps<'a'>) => (
      <a href={href} data-router-link {...rest}>
        {children}
      </a>
    )

    renderServiceLinks(<RcSesServiceLinks items={baseItems} linkComponent={RouterLink} />)

    const links = screen.getAllByRole('link')
    expect(links).toHaveLength(2)
    links.forEach((link) => expect(link).toHaveAttribute('data-router-link'))
    expect(links[0]).toHaveAttribute('href', '#first')
  })

  test('linkComponent receives href, target, rel and onClick', () => {
    const onClick = vi.fn()
    const linkComponent = vi.fn(
      ({ href, children, ...rest }: React.ComponentProps<'a'>) => (
        <a href={href} {...rest}>
          {children}
        </a>
      ),
    )

    renderServiceLinks(
      <RcSesServiceLinks
        items={[{ label: 'Go', href: '/target', target: '_blank', onClick }]}
        linkComponent={linkComponent}
      />,
    )

    expect(linkComponent).toHaveBeenCalled()
    expect(linkComponent.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        href: '/target',
        target: '_blank',
        rel: 'noopener noreferrer',
        onClick,
      }),
    )
  })

  test('linkComponent does not receive rel for same-tab links', () => {
    const linkComponent = vi.fn(
      ({ href, children, ...rest }: React.ComponentProps<'a'>) => (
        <a href={href} {...rest}>
          {children}
        </a>
      ),
    )

    renderServiceLinks(
      <RcSesServiceLinks
        items={[{ label: 'Go', href: '/target' }]}
        linkComponent={linkComponent}
      />,
    )

    const props = linkComponent.mock.calls[0][0]
    expect(props.rel).toBeUndefined()
    expect(props.target).toBeUndefined()
  })

  test('linkComponent is not used for disabled items', () => {
    const linkComponent = vi.fn(
      ({ href, children, ...rest }: React.ComponentProps<'a'>) => (
        <a href={href} {...rest}>
          {children}
        </a>
      ),
    )

    renderServiceLinks(
      <RcSesServiceLinks
        items={[{ label: 'Off', href: '/off', disabled: true }]}
        linkComponent={linkComponent}
      />,
    )

    expect(linkComponent).not.toHaveBeenCalled()
    expect(screen.queryByRole('link', { name: 'Off' })).not.toBeInTheDocument()
  })
})
