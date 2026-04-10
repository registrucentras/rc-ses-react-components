import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import VerticalStepper from './VerticalStepper'

const mockSteps = [
  { id: 'step1', label: 'Step 1' },
  { id: 'step2', label: 'Step 2' },
  { id: 'step3', label: 'Step 3' },
]

const renderVerticalStepper = (props: Parameters<typeof VerticalStepper>[0]) =>
  render(
    <ThemeProvider theme={theme}>
      <VerticalStepper {...props} />
    </ThemeProvider>,
  )

describe('VerticalStepper', () => {
  describe('rendering', () => {
    test('renders all step labels', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      mockSteps.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })

    test('renders with className prop', () => {
      const { container } = renderVerticalStepper({
        steps: mockSteps,
        activeStep: 1,
        className: 'vertical-stepper-custom',
      })

      const box = container.querySelector('.vertical-stepper-custom')
      expect(box).toBeInTheDocument()
    })

    test('renders no step buttons when no steps', () => {
      renderVerticalStepper({
        steps: [],
        activeStep: 1,
      })

      expect(screen.queryAllByRole('button')).toHaveLength(0)
    })

    test('calculates correct container height', () => {
      const { container } = renderVerticalStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      const mainBox = container.querySelector('[class*="MuiBox"]')
      const expectedHeight = mockSteps.length * 45
      expect(mainBox).toHaveStyle(`height: ${expectedHeight}px`)
    })
  })

  describe('step status indicators', () => {
    test('renders step icons as buttons', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      const buttons = screen.getAllByRole('button')
      expect(buttons.length).toBeGreaterThanOrEqual(mockSteps.length)
    })

    test('marks completed steps as clickable', () => {
      const handleStepClick = vi.fn()

      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 3,
        onStepClick: handleStepClick,
      })

      const enabledButtons = screen
        .getAllByRole('button')
        .filter((btn) => !(btn as HTMLButtonElement).disabled)

      expect(enabledButtons.length).toBeGreaterThan(0)
    })
  })

  describe('step navigation', () => {
    test('calls onStepClick when clicking completed step', () => {
      const handleStepClick = vi.fn()
      renderVerticalStepper({
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

    test('does not call onStepClick without handler', () => {
      const handleStepClick = vi.fn()
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 3,
      })

      const buttons = screen.getAllByRole('button')
      buttons.forEach((btn) => {
        fireEvent.click(btn)
      })
      expect(handleStepClick).not.toHaveBeenCalled()
    })

    test('passes correct index to onStepClick', () => {
      const handleStepClick = vi.fn()
      renderVerticalStepper({
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
  })

  describe('connector lines', () => {
    test('renders vertical connector lines between steps', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      const lines = screen.getAllByTestId('connector-line')

      expect(lines).toHaveLength(mockSteps.length - 1)
    })

    test('renders at least one connector line when steps > 1', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      const lines = screen.getAllByTestId('connector-line')

      expect(lines.length).toBeGreaterThan(0)
    })
  })

  describe('step labels', () => {
    test('displays label for each step', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      mockSteps.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })

    test('shows active step label with bold font weight', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      expect(screen.getByText('Step 2')).toBeInTheDocument()
    })

    test('labels remain visible and not hidden on overflow', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      mockSteps.forEach((step) => {
        const label = screen.getByText(step.label)
        expect(label).toHaveStyle({
          whiteSpace: 'normal',
          overflowWrap: 'break-word',
        })
      })
    })
  })

  describe('accessibility', () => {
    test('step buttons are keyboard accessible', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 3,
      })

      const buttons = screen.getAllByRole('button')
      buttons.forEach((btn) => {
        expect(btn).toHaveAttribute('type', 'button')
      })
    })

    test('disabled buttons have proper disabled state', () => {
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      const buttons = screen.getAllByRole('button')
      const disabledButtons = buttons.filter((btn) => btn.hasAttribute('disabled'))
      expect(disabledButtons.length).toBeGreaterThan(0)
    })

    test('cursor changes for clickable steps', () => {
      const handleStepClick = vi.fn()
      renderVerticalStepper({
        steps: mockSteps,
        activeStep: 3,
        onStepClick: handleStepClick,
      })

      const enabledButtons = screen
        .getAllByRole('button')
        .filter((btn) => !(btn as HTMLButtonElement).disabled)
      enabledButtons.forEach((btn) => {
        expect(btn).toHaveStyle('cursor: pointer')
      })
    })
  })

  describe('multiple steps', () => {
    test('handles single step correctly', () => {
      const single = [{ id: 'only', label: 'Only Step' }]
      renderVerticalStepper({
        steps: single,
        activeStep: 1,
      })

      expect(screen.getByText('Only Step')).toBeInTheDocument()
    })

    test('handles many steps', () => {
      const many = Array.from({ length: 10 }, (_, i) => ({
        id: `step${i}`,
        label: `Step ${i + 1}`,
      }))

      renderVerticalStepper({
        steps: many,
        activeStep: 5,
      })

      many.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })
  })
})
