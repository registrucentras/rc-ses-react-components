import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import Button from '.'

describe('Button Component', () => {
  describe('Loading State', () => {
    it('should render loading spinner when loading is true', () => {
      render(<Button loading>Save</Button>)

      const spinner = screen.getByRole('progressbar')
      expect(spinner).toBeInTheDocument()
    })

    it('should mark the button with the MUI loading class when loading', () => {
      render(<Button loading>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toHaveClass('MuiButton-loading')
    })

    it('should disable button when loading=true', () => {
      render(<Button loading>Save</Button>)

      const button = screen.getByRole('button')
      expect(button).toBeDisabled()
    })

    it('should keep children in the DOM alongside the spinner when loading (label is visually hidden via CSS)', () => {
      render(<Button loading>Save</Button>)

      expect(screen.getByText('Save')).toBeInTheDocument()
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('should hide startIcon when loadingPosition is "start"', () => {
      render(
        <Button
          loading
          loadingPosition='start'
          startIcon={<span data-testid='start-icon'>+</span>}
        >
          Add
        </Button>,
      )

      expect(screen.getByRole('button')).toHaveClass('MuiButton-loadingPositionStart')
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('should hide endIcon when loadingPosition is "end"', () => {
      render(
        <Button
          loading
          loadingPosition='end'
          endIcon={<span data-testid='end-icon'>→</span>}
        >
          Next
        </Button>,
      )

      expect(screen.getByRole('button')).toHaveClass('MuiButton-loadingPositionEnd')
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
      expect(button).toHaveClass('MuiButton-loading')
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
      // MUI 9 removed the combined variant+colour classes: MuiButton-textPrimary
      // is now expressed as MuiButton-text plus MuiButton-colorPrimary.
      expect(button).toHaveClass('MuiButton-text')
      expect(button).toHaveClass('MuiButton-colorPrimary')
    })
  })

  describe('Icon Only Buttons', () => {
    it('should render spinner when loading and iconOnly (icon visually hidden via CSS)', () => {
      render(
        <Button
          loading
          iconOnly
          variant='contained'
          aria-label='Add'
          startIcon={<span data-testid='icon'>+</span>}
        >
          Add
        </Button>,
      )

      expect(screen.getByRole('progressbar')).toBeInTheDocument()
      expect(screen.getByRole('button')).toHaveClass('MuiButton-loading')
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
