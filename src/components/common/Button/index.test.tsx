import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Button from './index'

describe('Button Component', () => {
  describe('Loading State', () => {
    it('should render loading spinner when loading is true', () => {
      render(<Button loading>Save</Button>)

      const spinner = screen.getByRole('progressbar')
      expect(spinner).toBeInTheDocument()
    })

    it('should set aria-busy attribute when loading', () => {
      render(<Button loading>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveAttribute('aria-busy', 'true')
    })

    it('should disable button when loading=true', () => {
      render(<Button loading>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('should show spinner instead of children when loading', () => {
      render(<Button loading>Save</Button>)

      expect(screen.queryByText('Save')).not.toBeInTheDocument()
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('should replace startIcon with spinner when loading', () => {
      render(
        <Button loading startIcon={<span data-testid='start-icon'>+</span>}>
          Add
        </Button>,
      )

      expect(screen.queryByTestId('start-icon')).not.toBeInTheDocument()
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('should replace endIcon with spinner when loading', () => {
      render(
        <Button loading endIcon={<span data-testid='end-icon'>→</span>}>
          Next
        </Button>,
      )

      expect(screen.queryByTestId('end-icon')).not.toBeInTheDocument()
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('should prevent click when loading=true', () => {
      const handleClick = vi.fn()
      render(
        <Button loading onClick={handleClick}>
          Save
        </Button>,
      )

      const button = screen.getByRole('button')
      fireEvent.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Disabled State', () => {
    it('should disable button when disabled=true', () => {
      render(<Button disabled>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('should prevent click when disabled=true', () => {
      const handleClick = vi.fn()
      render(
        <Button disabled onClick={handleClick}>
          Save
        </Button>,
      )

      const button = screen.getByRole('button')
      fireEvent.click(button)

      expect(handleClick).not.toHaveBeenCalled()
    })
  })

  describe('Loading + Disabled States', () => {
    it('should show spinner and be disabled when both loading and disabled are true', () => {
      const handleClick = vi.fn()
      render(
        <Button loading disabled onClick={handleClick}>
          Save
        </Button>,
      )

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
      expect(button).toHaveAttribute('aria-busy', 'true')
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })
  })

  describe('Variants', () => {
    it('should render contained variant by default', () => {
      render(<Button>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('MuiButton-contained')
    })

    it('should render outlined variant when specified', () => {
      render(<Button variant='outlined'>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('MuiButton-outlined')
    })

    it('should render text variant when specified', () => {
      render(<Button variant='text'>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('MuiButton-textPrimary')
    })
  })

  describe('Icon Only Buttons', () => {
    it('should show spinner in place of icon when loading and iconOnly', () => {
      render(
        <Button
          loading
          iconOnly
          variant='contained'
          startIcon={<span data-testid='icon'>+</span>}
        >
          Add
        </Button>,
      )

      expect(screen.queryByTestId('icon')).not.toBeInTheDocument()
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })
  })

  describe('Size Props', () => {
    it('should render small button', () => {
      render(<Button size='small'>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('MuiButton-sizeSmall')
    })

    it('should render medium button by default', () => {
      render(<Button>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('MuiButton-sizeMedium')
    })

    it('should render large button', () => {
      render(<Button size='large'>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('MuiButton-sizeLarge')
    })
  })
})
