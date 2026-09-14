import { render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'

import RcSesStepCard from '.'

const STEP_COUNT = 3

describe('RcSesStepCard', () => {
  it('renders the title block header + body children + default footer', () => {
    render(
      <RcSesStepCard
        activeStep={0}
        stepCount={STEP_COUNT}
        title='Pasirinkite paslaugą'
        description='Trumpas paaiškinimas'
      >
        <div data-testid='body'>Kūnas</div>
      </RcSesStepCard>,
    )

    expect(screen.getByText('Pasirinkite paslaugą')).toBeInTheDocument()
    expect(screen.getByText('Trumpas paaiškinimas')).toBeInTheDocument()
    expect(screen.getByTestId('body')).toBeInTheDocument()
    // default footer (first step)
    expect(screen.getByRole('button', { name: 'Atšaukti' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tęsti' })).toBeInTheDocument()
  })

  it('renders the middle-step footer variant', () => {
    render(<RcSesStepCard activeStep={1} stepCount={STEP_COUNT} title='Vidurinis' />)

    expect(screen.getByRole('button', { name: /Atgal/ })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tęsti' })).toBeInTheDocument()
  })

  it('renders the last-step footer variant with total price', () => {
    render(
      <RcSesStepCard
        activeStep={2}
        stepCount={STEP_COUNT}
        title='Suvestinė'
        totalPrice='4,01 €'
      />,
    )

    expect(screen.getByRole('button', { name: /Pridėti į krepšelį/ })).toBeInTheDocument()
    expect(screen.getByText('Suma be PVM:')).toBeInTheDocument()
    expect(screen.getByText('4,01 €')).toBeInTheDocument()
  })

  it('forwards step handlers to the default footer', () => {
    const onNext = vi.fn()
    const onBack = vi.fn()
    const onCancel = vi.fn()

    render(
      <RcSesStepCard
        activeStep={0}
        stepCount={STEP_COUNT}
        title='Pirmas'
        onNext={onNext}
        onBack={onBack}
        onCancel={onCancel}
      />,
    )

    screen.getByRole('button', { name: 'Atšaukti' }).click()
    screen.getByRole('button', { name: 'Tęsti' }).click()

    expect(onCancel).toHaveBeenCalledTimes(1)
    expect(onNext).toHaveBeenCalledTimes(1)
    expect(onBack).not.toHaveBeenCalled()
  })

  it('replaces the default footer when `footer` prop is provided', () => {
    render(
      <RcSesStepCard
        activeStep={0}
        stepCount={STEP_COUNT}
        title='Pirmas'
        footer={<div data-testid='custom-footer'>Custom</div>}
      />,
    )

    expect(screen.getByTestId('custom-footer')).toBeInTheDocument()
    // default footer buttons must be absent
    expect(screen.queryByRole('button', { name: 'Atšaukti' })).not.toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Tęsti' })).not.toBeInTheDocument()
  })

  it('wires testIds through to the shell slots', () => {
    render(
      <RcSesStepCard
        activeStep={0}
        stepCount={STEP_COUNT}
        title='T'
        testIds={{
          root: 'sc-root',
          header: 'sc-header',
          content: 'sc-content',
          footer: 'sc-footer',
        }}
      >
        <div>body</div>
      </RcSesStepCard>,
    )

    expect(screen.getByTestId('sc-root')).toBeInTheDocument()
    expect(screen.getByTestId('sc-header')).toBeInTheDocument()
    expect(screen.getByTestId('sc-content')).toBeInTheDocument()
    expect(screen.getByTestId('sc-footer')).toBeInTheDocument()
  })

  it('renders without children (body slot is optional)', () => {
    render(<RcSesStepCard activeStep={0} stepCount={STEP_COUNT} title='Tik antraštė' />)

    expect(screen.getByText('Tik antraštė')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Tęsti' })).toBeInTheDocument()
  })
})
