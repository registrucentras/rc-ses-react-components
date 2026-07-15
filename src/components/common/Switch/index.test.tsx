import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import RcSesSwitch from './index'

describe('RcSesSwitch Component', () => {
  describe('Switch semantics', () => {
    it('should expose role="switch" instead of the native checkbox role', () => {
      render(<RcSesSwitch label='Notifications' checked={false} onChange={vi.fn()} />)

      expect(screen.getByRole('switch')).toBeInTheDocument()
      expect(screen.queryByRole('checkbox')).not.toBeInTheDocument()
    })

    it('should reflect the checked state via aria-checked', () => {
      render(<RcSesSwitch label='Notifications' checked onChange={vi.fn()} />)

      expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true')
    })

    it('should update aria-checked when the checked prop changes', () => {
      const { rerender } = render(
        <RcSesSwitch label='Notifications' checked={false} onChange={vi.fn()} />,
      )

      const input = screen.getByRole('switch')
      expect(input).toHaveAttribute('aria-checked', 'false')

      rerender(<RcSesSwitch label='Notifications' checked onChange={vi.fn()} />)

      expect(input).toHaveAttribute('aria-checked', 'true')
    })
  })

  describe('Accessible name', () => {
    it('should associate the visible label with the switch via FormControlLabel', () => {
      render(<RcSesSwitch label='Notifications' checked={false} onChange={vi.fn()} />)

      expect(screen.getByRole('switch', { name: 'Notifications' })).toBeInTheDocument()
    })

    it('should use ariaLabel as the accessible name when no visible label is given', () => {
      render(<RcSesSwitch ariaLabel='Notifications' checked={false} onChange={vi.fn()} />)

      const input = screen.getByRole('switch', { name: 'Notifications' })
      expect(input).toBeInTheDocument()
      expect(screen.queryByText('Notifications')).not.toBeInTheDocument()
    })

    it('should prefer an explicit ariaLabel over the visible label text', () => {
      render(
        <RcSesSwitch
          label='Notifications'
          ariaLabel='Enable notifications'
          checked={false}
          onChange={vi.fn()}
        />,
      )

      expect(
        screen.getByRole('switch', { name: 'Enable notifications' }),
      ).toBeInTheDocument()
    })

    it('should not fall back to label when ariaLabel is explicitly an empty string', () => {
      render(
        <RcSesSwitch
          label='Notifications'
          ariaLabel=''
          checked={false}
          onChange={vi.fn()}
        />,
      )

      const input = screen.getByRole('switch')
      expect(input).not.toHaveAttribute('aria-label', 'Notifications')
    })
  })

  describe('Checked state', () => {
    it('should reflect checked=false', () => {
      render(<RcSesSwitch label='Notifications' checked={false} onChange={vi.fn()} />)

      expect(screen.getByRole('switch')).not.toBeChecked()
    })

    it('should reflect checked=true', () => {
      render(<RcSesSwitch label='Notifications' checked onChange={vi.fn()} />)

      expect(screen.getByRole('switch')).toBeChecked()
    })

    it('should not change visually on click unless the caller updates the checked prop', () => {
      const handleChange = vi.fn()
      render(
        <RcSesSwitch label='Notifications' checked={false} onChange={handleChange} />,
      )

      const input = screen.getByRole('switch')
      fireEvent.click(input)

      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(input).not.toBeChecked()
    })
  })

  describe('onChange', () => {
    it('should call onChange with the new checked value when toggled on', () => {
      const handleChange = vi.fn()
      render(
        <RcSesSwitch label='Notifications' checked={false} onChange={handleChange} />,
      )

      fireEvent.click(screen.getByRole('switch'))

      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange.mock.calls[0][1]).toBe(true)
    })

    it('should call onChange with false when toggled off', () => {
      const handleChange = vi.fn()
      render(<RcSesSwitch label='Notifications' checked onChange={handleChange} />)

      fireEvent.click(screen.getByRole('switch'))

      expect(handleChange.mock.calls[0][1]).toBe(false)
    })
  })

  describe('Keyboard interaction', () => {
    it('should toggle when Enter is pressed', () => {
      const handleChange = vi.fn()
      render(
        <RcSesSwitch label='Notifications' checked={false} onChange={handleChange} />,
      )

      fireEvent.keyDown(screen.getByRole('switch'), { key: 'Enter' })

      expect(handleChange).toHaveBeenCalledTimes(1)
      expect(handleChange.mock.calls[0][1]).toBe(true)
    })

    it('should not toggle on Enter when disabled', () => {
      const handleChange = vi.fn()
      render(
        <RcSesSwitch
          label='Notifications'
          disabled
          checked={false}
          onChange={handleChange}
        />,
      )

      fireEvent.keyDown(screen.getByRole('switch'), { key: 'Enter' })

      expect(handleChange).not.toHaveBeenCalled()
    })
  })

  describe('Disabled state', () => {
    it('should disable the switch when disabled=true', () => {
      render(
        <RcSesSwitch label='Notifications' disabled checked={false} onChange={vi.fn()} />,
      )

      expect(screen.getByRole('switch')).toBeDisabled()
    })

    it('should mark the FormControlLabel as disabled', () => {
      const { container } = render(
        <RcSesSwitch label='Notifications' disabled checked={false} onChange={vi.fn()} />,
      )

      expect(container.querySelector('.MuiFormControlLabel-root')).toHaveClass(
        'Mui-disabled',
      )
    })
  })

  describe('Without a visible label', () => {
    it('should render the bare switch without a wrapping FormControlLabel', () => {
      const { container } = render(
        <RcSesSwitch ariaLabel='Notifications' checked={false} onChange={vi.fn()} />,
      )

      expect(container.querySelector('.MuiFormControlLabel-root')).not.toBeInTheDocument()
      expect(container.querySelector('.MuiSwitch-root')).toBeInTheDocument()
    })
  })
})
