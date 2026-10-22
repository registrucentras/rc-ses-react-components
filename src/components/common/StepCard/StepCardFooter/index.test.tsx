import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import RcSesStepCardFooter from '.'

const STEP_COUNT = 3

describe('RcSesStepCardFooter', () => {
  describe('First step (activeStep === 0)', () => {
    it('renders Atšaukti + Tęsti and no back arrow', () => {
      render(<RcSesStepCardFooter activeStep={0} stepCount={STEP_COUNT} />)

      expect(screen.getByRole('button', { name: 'Atšaukti' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Tęsti' })).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: 'Atgal' })).not.toBeInTheDocument()
    })

    it('calls onCancel on leading click and onNext on trailing click', () => {
      const onCancel = vi.fn()
      const onNext = vi.fn()
      const onBack = vi.fn()

      render(
        <RcSesStepCardFooter
          activeStep={0}
          stepCount={STEP_COUNT}
          onCancel={onCancel}
          onNext={onNext}
          onBack={onBack}
        />,
      )

      fireEvent.click(screen.getByRole('button', { name: 'Atšaukti' }))
      fireEvent.click(screen.getByRole('button', { name: 'Tęsti' }))

      expect(onCancel).toHaveBeenCalledTimes(1)
      expect(onNext).toHaveBeenCalledTimes(1)
      expect(onBack).not.toHaveBeenCalled()
    })

    it('does not render the price summary even if totalPrice is passed', () => {
      render(
        <RcSesStepCardFooter activeStep={0} stepCount={STEP_COUNT} totalPrice='4,01 €' />,
      )

      expect(screen.queryByText('4,01 €')).not.toBeInTheDocument()
      expect(screen.queryByText(/Suma be PVM/i)).not.toBeInTheDocument()
    })
  })

  describe('Middle step (0 < activeStep < stepCount - 1)', () => {
    it('renders Atgal + Tęsti', () => {
      render(<RcSesStepCardFooter activeStep={1} stepCount={STEP_COUNT} />)

      expect(screen.getByRole('button', { name: /Atgal/ })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: 'Tęsti' })).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: 'Atšaukti' })).not.toBeInTheDocument()
      expect(
        screen.queryByRole('button', { name: /Pridėti į krepšelį/ }),
      ).not.toBeInTheDocument()
    })

    it('routes leading click to onBack (not onCancel)', () => {
      const onBack = vi.fn()
      const onCancel = vi.fn()

      render(
        <RcSesStepCardFooter
          activeStep={1}
          stepCount={STEP_COUNT}
          onBack={onBack}
          onCancel={onCancel}
        />,
      )

      fireEvent.click(screen.getByRole('button', { name: /Atgal/ }))

      expect(onBack).toHaveBeenCalledTimes(1)
      expect(onCancel).not.toHaveBeenCalled()
    })

    it('does not render the price summary', () => {
      render(
        <RcSesStepCardFooter activeStep={1} stepCount={STEP_COUNT} totalPrice='4,01 €' />,
      )

      expect(screen.queryByText('4,01 €')).not.toBeInTheDocument()
    })
  })

  describe('Last step (activeStep >= stepCount - 1)', () => {
    it('renders Atgal + "Pridėti į krepšelį"', () => {
      render(<RcSesStepCardFooter activeStep={2} stepCount={STEP_COUNT} />)

      expect(screen.getByRole('button', { name: /Atgal/ })).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /Pridėti į krepšelį/ }),
      ).toBeInTheDocument()
      expect(screen.queryByRole('button', { name: 'Tęsti' })).not.toBeInTheDocument()
    })

    it('renders the price summary when totalPrice is provided', () => {
      render(
        <RcSesStepCardFooter activeStep={2} stepCount={STEP_COUNT} totalPrice='4,01 €' />,
      )

      expect(screen.getByText('Suma be PVM:')).toBeInTheDocument()
      expect(screen.getByText('4,01 €')).toBeInTheDocument()
    })

    it('replaces the price caption with totalPriceLabel', () => {
      render(
        <RcSesStepCardFooter
          activeStep={2}
          stepCount={STEP_COUNT}
          totalPrice='4,01 €'
          totalPriceLabel='Mokėtina suma'
        />,
      )

      expect(screen.getByText('Mokėtina suma:')).toBeInTheDocument()
      expect(screen.queryByText(/Suma be PVM/i)).not.toBeInTheDocument()
    })

    it('omits the price summary when totalPrice is missing', () => {
      render(<RcSesStepCardFooter activeStep={2} stepCount={STEP_COUNT} />)

      expect(screen.queryByText(/Suma be PVM/i)).not.toBeInTheDocument()
    })

    it('calls onNext when "Pridėti į krepšelį" is clicked', () => {
      const onNext = vi.fn()

      render(
        <RcSesStepCardFooter
          activeStep={2}
          stepCount={STEP_COUNT}
          onNext={onNext}
          totalPrice='4,01 €'
        />,
      )

      fireEvent.click(screen.getByRole('button', { name: /Pridėti į krepšelį/ }))
      expect(onNext).toHaveBeenCalledTimes(1)
    })

    it('treats activeStep > stepCount - 1 as the last step', () => {
      render(<RcSesStepCardFooter activeStep={99} stepCount={STEP_COUNT} />)

      expect(
        screen.getByRole('button', { name: /Pridėti į krepšelį/ }),
      ).toBeInTheDocument()
    })
  })

  describe('actions', () => {
    it('makes the CTA the submit button of the form named by `form`', () => {
      const onSubmit = vi.fn((event: React.FormEvent) => event.preventDefault())

      render(
        <>
          <form id='step-form' onSubmit={onSubmit} />
          <RcSesStepCardFooter
            activeStep={0}
            stepCount={STEP_COUNT}
            actions={{ next: { form: 'step-form' } }}
          />
        </>,
      )

      const next = screen.getByRole('button', { name: 'Tęsti' })
      expect(next).toHaveAttribute('type', 'submit')
      expect(next).toHaveAttribute('form', 'step-form')

      fireEvent.click(next)
      expect(onSubmit).toHaveBeenCalledTimes(1)
    })

    it('keeps the CTA a plain button without `form`', () => {
      render(<RcSesStepCardFooter activeStep={0} stepCount={STEP_COUNT} />)

      const next = screen.getByRole('button', { name: 'Tęsti' })
      expect(next).toHaveAttribute('type', 'button')
      expect(next).not.toHaveAttribute('form')
    })

    it('disables the CTA and shows a spinner while loading', () => {
      render(
        <RcSesStepCardFooter
          activeStep={1}
          stepCount={STEP_COUNT}
          actions={{ next: { loading: true } }}
        />,
      )

      expect(screen.getByRole('button', { name: /Tęsti/ })).toBeDisabled()
      expect(screen.getByRole('progressbar')).toBeInTheDocument()
    })

    it('puts the spinner in the icon slot when the button has an icon', () => {
      render(
        <RcSesStepCardFooter
          activeStep={1}
          stepCount={STEP_COUNT}
          actions={{ next: { loading: true }, back: { loading: true } }}
        />,
      )

      expect(screen.getByRole('button', { name: /Tęsti/ })).toHaveClass(
        'MuiButton-loadingPositionEnd',
      )
      expect(screen.getByRole('button', { name: /Atgal/ })).toHaveClass(
        'MuiButton-loadingPositionStart',
      )
    })

    it('centres the spinner when the button has no icon', () => {
      render(
        <RcSesStepCardFooter
          activeStep={2}
          stepCount={STEP_COUNT}
          actions={{ next: { label: 'Pateikti', icon: null, loading: true } }}
        />,
      )

      expect(screen.getByRole('button', { name: /Pateikti/ })).toHaveClass(
        'MuiButton-loadingPositionCenter',
      )
    })

    it('disables next and back independently', () => {
      render(
        <RcSesStepCardFooter
          activeStep={1}
          stepCount={STEP_COUNT}
          actions={{ next: { disabled: true }, back: { disabled: true } }}
        />,
      )

      expect(screen.getByRole('button', { name: 'Tęsti' })).toBeDisabled()
      expect(screen.getByRole('button', { name: /Atgal/ })).toBeDisabled()
    })

    it('overrides the i18n labels', () => {
      render(
        <RcSesStepCardFooter
          activeStep={1}
          stepCount={STEP_COUNT}
          actions={{ next: { label: 'Toliau' }, back: { label: 'Grįžti' } }}
        />,
      )

      expect(screen.getByRole('button', { name: 'Toliau' })).toBeInTheDocument()
      expect(screen.getByRole('button', { name: /Grįžti/ })).toBeInTheDocument()
    })

    it('hides the leading button on the first step with `cancel: false`', () => {
      render(
        <RcSesStepCardFooter
          activeStep={0}
          stepCount={STEP_COUNT}
          actions={{ cancel: false }}
        />,
      )

      expect(screen.queryByRole('button', { name: 'Atšaukti' })).not.toBeInTheDocument()
      expect(screen.getAllByRole('button')).toHaveLength(1)
    })

    it('keeps Atgal on later steps with `cancel: false`', () => {
      render(
        <RcSesStepCardFooter
          activeStep={1}
          stepCount={STEP_COUNT}
          actions={{ cancel: false }}
        />,
      )

      expect(screen.getByRole('button', { name: /Atgal/ })).toBeInTheDocument()
    })

    it('renders a custom last-step CTA: own label, no cart icon', () => {
      render(
        <RcSesStepCardFooter
          activeStep={2}
          stepCount={STEP_COUNT}
          totalPrice='4,01 €'
          actions={{ next: { label: 'Pateikti', icon: null } }}
        />,
      )

      const next = screen.getByRole('button', { name: 'Pateikti' })
      expect(next.querySelector('svg')).toBeNull()
      expect(screen.getByText('4,01 €')).toBeInTheDocument()
    })

    it('keeps the default icons when `icon` is undefined', () => {
      render(
        <RcSesStepCardFooter
          activeStep={2}
          stepCount={STEP_COUNT}
          actions={{ next: { label: 'Pateikti' }, back: {} }}
        />,
      )

      expect(
        screen.getByRole('button', { name: 'Pateikti' }).querySelector('svg'),
      ).not.toBeNull()
      expect(
        screen.getByRole('button', { name: /Atgal/ }).querySelector('svg'),
      ).not.toBeNull()
    })

    it('replaces the icon with a custom node', () => {
      render(
        <RcSesStepCardFooter
          activeStep={1}
          stepCount={STEP_COUNT}
          actions={{ next: { icon: <span data-testid='custom-icon' /> } }}
        />,
      )

      const next = screen.getByRole('button', { name: 'Tęsti' })
      expect(next).toContainElement(screen.getByTestId('custom-icon'))
      expect(next.querySelector('svg')).toBeNull()
    })
  })

  describe('Edge cases', () => {
    it('does not throw when handlers are omitted and buttons are clicked', () => {
      render(<RcSesStepCardFooter activeStep={0} stepCount={STEP_COUNT} />)

      expect(() => {
        fireEvent.click(screen.getByRole('button', { name: 'Atšaukti' }))
        fireEvent.click(screen.getByRole('button', { name: 'Tęsti' }))
      }).not.toThrow()
    })

    it('treats a single-step wizard as both first AND last (Atšaukti + Pridėti į krepšelį)', () => {
      render(<RcSesStepCardFooter activeStep={0} stepCount={1} totalPrice='4,01 €' />)

      expect(screen.getByRole('button', { name: 'Atšaukti' })).toBeInTheDocument()
      expect(
        screen.getByRole('button', { name: /Pridėti į krepšelį/ }),
      ).toBeInTheDocument()
      expect(screen.getByText('4,01 €')).toBeInTheDocument()
    })
  })
})
