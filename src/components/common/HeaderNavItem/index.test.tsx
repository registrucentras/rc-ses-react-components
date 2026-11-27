import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import HeaderNavItem from '.'

describe('HeaderNavItem', () => {
  describe('rendering', () => {
    it('renders label text', () => {
      render(<HeaderNavItem label='Paslaugos' />)
      expect(screen.getByText('Paslaugos')).toBeInTheDocument()
    })

    it('renders dropdown caret when submenuId is provided', () => {
      const { container } = render(
        <HeaderNavItem label='Paslaugos' submenuId='submenu' />,
      )
      const svg = container.querySelector('svg')
      expect(svg).toBeInTheDocument()
    })

    it('does not render dropdown caret when submenuId is not provided', () => {
      const { container } = render(<HeaderNavItem label='Paslaugos' />)
      const svg = container.querySelector('svg')
      expect(svg).not.toBeInTheDocument()
    })
  })

  describe('link behavior', () => {
    it('renders as anchor tag when href is provided', () => {
      const { container } = render(<HeaderNavItem label='Paslaugos' href='/paslaugos' />)
      const link = container.querySelector('a')
      expect(link).toBeInTheDocument()
      expect(link).toHaveAttribute('href', '/paslaugos')
    })

    it('sets aria-current="page" when isCurrent is true', () => {
      const { container } = render(
        <HeaderNavItem label='Paslaugos' isCurrent href='/paslaugos' />,
      )
      const link = container.querySelector('a')
      expect(link).toHaveAttribute('aria-current', 'page')
    })
  })

  describe('button behavior', () => {
    it('renders as button when submenuId is provided', () => {
      const { container } = render(
        <HeaderNavItem label='Paslaugos' submenuId='submenu' />,
      )
      const button = container.querySelector('button')
      expect(button).toBeInTheDocument()
    })

    it('sets aria-expanded based on isOpen state', () => {
      const { container: openContainer } = render(
        <HeaderNavItem label='Paslaugos' isOpen submenuId='submenu' />,
      )
      expect(openContainer.querySelector('button')).toHaveAttribute(
        'aria-expanded',
        'true',
      )

      const { container: closedContainer } = render(
        <HeaderNavItem label='Paslaugos' isOpen={false} submenuId='submenu' />,
      )
      expect(closedContainer.querySelector('button')).toHaveAttribute(
        'aria-expanded',
        'false',
      )
    })

    it('sets aria-controls when submenuId is provided', () => {
      const { container } = render(
        <HeaderNavItem label='Paslaugos' submenuId='submenu-1' />,
      )
      const button = container.querySelector('button')
      expect(button).toHaveAttribute('aria-controls', 'submenu-1')
    })

    it('calls onClick handler when clicked', () => {
      const handleClick = vi.fn()
      const { container } = render(
        <HeaderNavItem label='Paslaugos' onClick={handleClick} submenuId='submenu' />,
      )
      const button = container.querySelector('button')
      if (button) {
        button.click()
        expect(handleClick).toHaveBeenCalled()
      }
    })
  })

  describe('accessibility', () => {
    it('sets aria-label with label text', () => {
      const { container } = render(<HeaderNavItem label='Paslaugos' />)
      expect(container.firstChild).toHaveAttribute('aria-label', 'Paslaugos')
    })

    it('uses custom ariaLabel when provided', () => {
      const { container } = render(
        <HeaderNavItem label='Paslaugos' ariaLabel='Custom accessible name' />,
      )
      expect(container.firstChild).toHaveAttribute('aria-label', 'Custom accessible name')
    })
  })
})
