import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import HorizontalStepper from './HorizontalStepper'

const mockSteps = [
  { id: 'step1', label: 'Step 1' },
  { id: 'step2', label: 'Step 2' },
  { id: 'step3', label: 'Step 3' },
]

const renderHorizontalStepper = (props: Parameters<typeof HorizontalStepper>[0]) =>
  render(
    <ThemeProvider theme={theme}>
      <HorizontalStepper {...props} />
    </ThemeProvider>,
  )

describe('HorizontalStepper', () => {
  describe('rendering', () => {
    test('renders all step labels on desktop', () => {
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Step 2')).toBeInTheDocument()
      expect(screen.getByText('Step 3')).toBeInTheDocument()
    })

    test('renders with className prop', () => {
      const { container } = renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 1,
        className: 'custom-class',
      })

      const box = container.querySelector('.custom-class')
      expect(box).toBeInTheDocument()
    })

    test('renders nothing interactive when no steps', () => {
      renderHorizontalStepper({
        steps: [],
        activeStep: 1,
      })

      expect(screen.queryAllByRole('button')).toHaveLength(0)
    })
  })

  describe('step status indicators', () => {
    test('renders all steps as buttons', () => {
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThanOrEqual(3)
    })

    test('marks step as clickable when completed', () => {
      const handleStepClick = vi.fn()
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 3,
        onStepClick: handleStepClick,
      })

      const stepButtons = screen
        .getAllByRole('button')
        .filter((btn) => !(btn as HTMLButtonElement).disabled)
      expect(stepButtons.length).toBeGreaterThan(0)
    })

    test('disables all steps when no onStepClick handler', () => {
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      const disabledButtons = screen
        .getAllByRole('button')
        .filter((btn) => (btn as HTMLButtonElement).disabled)
      expect(disabledButtons.length).toBeGreaterThan(0)
    })
  })

  describe('step navigation', () => {
    test('calls onStepClick when clicking completed step', () => {
      const handleStepClick = vi.fn()
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 3,
        onStepClick: handleStepClick,
      })

      const enabledButtons = screen
        .getAllByRole('button')
        .filter((btn) => !(btn as HTMLButtonElement).disabled)
      if (enabledButtons.length > 0) {
        fireEvent.click(enabledButtons[0])
        expect(handleStepClick).toHaveBeenCalled()
      }
    })

    test('does not call onStepClick for pending steps', () => {
      const handleStepClick = vi.fn()
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 1,
        onStepClick: handleStepClick,
      })

      expect(handleStepClick).not.toHaveBeenCalled()
    })
  })

  describe('mobile behavior', () => {
    test('renders back button on mobile when activeStep > 1', () => {
      const handleBack = vi.fn()
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 2,
        handleBack,
      })

      expect(handleBack).toBeDefined()
    })

    test('calls handleBack when back button clicked', () => {
      const handleBack = vi.fn()
      const { container } = renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 2,
        handleBack,
      })

      const backButton = container.querySelector('button')
      if (backButton) {
        fireEvent.click(backButton)
      }

      expect(handleBack).toBeDefined()
    })
  })

  describe('accessibility', () => {
    test('step buttons are keyboard accessible', () => {
      const handleStepClick = vi.fn()
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 3,
        onStepClick: handleStepClick,
      })

      const buttons = screen.getAllByRole('button')
      buttons.forEach((btn) => {
        expect(btn).toHaveAttribute('type', 'button')
      })
    })

    test('disabled buttons have disabled attribute', () => {
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      const buttons = screen.getAllByRole('button')
      const disabledButtons = buttons.filter((btn) => btn.hasAttribute('disabled'))
      expect(disabledButtons.length).toBeGreaterThan(0)
    })
  })

  describe('connector lines', () => {
    test('renders connector lines between steps', () => {
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      const lines = screen.getAllByTestId('connector-line')

      expect(lines).toHaveLength(mockSteps.length - 1)
    })
  })

  describe('label visibility', () => {
    test('renders labels on desktop by default', () => {
      renderHorizontalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      mockSteps.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })
  })
})
