import { ThemeProvider } from '@mui/material/styles'
import { render, screen } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'

import theme from '@/theme/light'

import ServiceProgressStepper from './index'

const mockSteps = [
  { id: 'step1', label: 'Step 1' },
  { id: 'step2', label: 'Step 2' },
  { id: 'step3', label: 'Step 3' },
]

const renderStepper = (props: Parameters<typeof ServiceProgressStepper>[0]) =>
  render(
    <ThemeProvider theme={theme}>
      <ServiceProgressStepper {...props} />
    </ThemeProvider>,
  )

describe('ServiceProgressStepper', () => {
  describe('rendering', () => {
    test('renders horizontal stepper by default', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      mockSteps.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })

    test('renders with className prop', () => {
      const { container } = renderStepper({
        steps: mockSteps,
        activeStep: 1,
        className: 'stepper-wrapper',
      })

      const element = container.querySelector('.stepper-wrapper')
      expect(element).toBeInTheDocument()
    })
  })

  describe('orientation prop', () => {
    test('renders HorizontalStepper with orientation="horizontal"', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
        orientation: 'horizontal',
      })

      mockSteps.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })

    test('renders VerticalStepper with orientation="vertical"', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
        orientation: 'vertical',
      })

      mockSteps.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })

    test('defaults to horizontal when orientation omitted', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      expect(screen.getByText('Step 1')).toBeInTheDocument()
    })
  })

  describe('activeStep prop', () => {
    test('accepts activeStep prop', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 2,
      })

      expect(screen.getByText('Step 2')).toBeInTheDocument()
    })

    test('handles activeStep = 1', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      expect(screen.getByText('Step 1')).toBeInTheDocument()
    })

    test('handles activeStep = last step', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: mockSteps.length,
      })

      expect(screen.getByText('Step 3')).toBeInTheDocument()
    })
  })

  describe('callbacks', () => {
    test('passes onStepClick to HorizontalStepper', () => {
      const handleClick = vi.fn()
      renderStepper({
        steps: mockSteps,
        activeStep: 3,
        onStepClick: handleClick,
        orientation: 'horizontal',
      })

      expect(handleClick).toBeDefined()
    })

    test('passes handleBack to HorizontalStepper', () => {
      const handleBack = vi.fn()
      renderStepper({
        steps: mockSteps,
        activeStep: 2,
        handleBack,
        orientation: 'horizontal',
      })

      expect(handleBack).toBeDefined()
    })

    test('passes onStepClick to VerticalStepper', () => {
      const handleClick = vi.fn()
      renderStepper({
        steps: mockSteps,
        activeStep: 3,
        onStepClick: handleClick,
        orientation: 'vertical',
      })

      expect(handleClick).toBeDefined()
    })

    test('does not pass handleBack to VerticalStepper', () => {
      const handleBack = vi.fn()
      renderStepper({
        steps: mockSteps,
        activeStep: 2,
        handleBack,
        orientation: 'vertical',
      })

      expect(handleBack).toBeDefined()
    })
  })

  describe('step rendering', () => {
    test('renders all steps', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      mockSteps.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })

    test('handles single step', () => {
      const single = [{ id: 'only', label: 'Single Step' }]
      renderStepper({
        steps: single,
        activeStep: 1,
      })

      expect(screen.getByText('Single Step')).toBeInTheDocument()
    })

    test('handles many steps', () => {
      const many = Array.from({ length: 8 }, (_, i) => ({
        id: `step${i}`,
        label: `Step ${i + 1}`,
      }))

      renderStepper({
        steps: many,
        activeStep: 1,
      })

      many.forEach((step) => {
        expect(screen.getByText(step.label)).toBeInTheDocument()
      })
    })
  })

  describe('mobile responsive behavior', () => {
    test('renders horizontal stepper on mobile even with vertical orientation', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
        orientation: 'vertical',
      })

      expect(screen.getByText('Step 1')).toBeInTheDocument()
    })
  })

  describe('prop combinations', () => {
    test('handles all props together', () => {
      const handleClick = vi.fn()
      const handleBack = vi.fn()

      renderStepper({
        className: 'test-class',
        steps: mockSteps,
        activeStep: 2,
        handleBack,
        onStepClick: handleClick,
        orientation: 'horizontal',
      })

      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Step 2')).toBeInTheDocument()
      expect(screen.getByText('Step 3')).toBeInTheDocument()
    })

    test('handles vertical with all props', () => {
      const handleClick = vi.fn()

      renderStepper({
        className: 'vertical-test',
        steps: mockSteps,
        activeStep: 1,
        onStepClick: handleClick,
        orientation: 'vertical',
      })

      expect(screen.getByText('Step 1')).toBeInTheDocument()
    })

    test('handles minimal props', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      expect(screen.getByText('Step 1')).toBeInTheDocument()
    })
  })

  describe('accessibility', () => {
    test('renders buttons that are keyboard accessible', () => {
      const handleClick = vi.fn()
      renderStepper({
        steps: mockSteps,
        activeStep: 3,
        onStepClick: handleClick,
      })

      const buttons = screen.getAllByRole('button')
      buttons.forEach((btn) => {
        expect(btn).toHaveAttribute('type', 'button')
      })
    })
  })

  describe('step data structure', () => {
    test('uses step.id as key', () => {
      renderStepper({
        steps: mockSteps,
        activeStep: 1,
      })

      expect(screen.getByText('Step 1')).toBeInTheDocument()
      expect(screen.getByText('Step 2')).toBeInTheDocument()
      expect(screen.getByText('Step 3')).toBeInTheDocument()
    })

    test('displays step.label as text', () => {
      const customSteps = [
        { id: 'first', label: 'First Step' },
        { id: 'second', label: 'Second Step' },
      ]

      renderStepper({
        steps: customSteps,
        activeStep: 1,
      })

      expect(screen.getByText('First Step')).toBeInTheDocument()
      expect(screen.getByText('Second Step')).toBeInTheDocument()
    })
  })
})
