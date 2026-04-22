import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { ReactElement } from 'react'

import theme from '@/theme/light'

import { StepItem } from '../../ServiceWizardStepper/StepperTypes'
import RcSesCardFormContainer from './index'

const baseSteps: StepItem[] = [
  { id: '1', title: 'Step 1' },
  { id: '2', title: 'Step 2' },
  { id: '3', title: 'Step 3' },
]

const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

describe('RcSesCardFormContainer', () => {
  test('renders stepper, card content, and card title', () => {
    renderWithTheme(
      <RcSesCardFormContainer steps={baseSteps} activeStep={1} title='Form title'>
        <div>Form content</div>
      </RcSesCardFormContainer>,
    )

    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
    expect(screen.getByText('Form title')).toBeInTheDocument()
    expect(screen.getByText('Form content')).toBeInTheDocument()
  })

  test('uses horizontal orientation by default', () => {
    const { container } = renderWithTheme(
      <RcSesCardFormContainer steps={baseSteps} activeStep={1} title='Default layout'>
        <div>Body</div>
      </RcSesCardFormContainer>,
    )

    expect(
      container.querySelector('.ServiceWizardStepper-horizontal'),
    ).toBeInTheDocument()
  })

  test('uses vertical orientation when layout is row', () => {
    const { container } = renderWithTheme(
      <RcSesCardFormContainer
        steps={baseSteps}
        activeStep={1}
        title='Row layout'
        layout='row'
      >
        <div>Body</div>
      </RcSesCardFormContainer>,
    )

    expect(container.querySelector('.ServiceWizardStepper-vertical')).toBeInTheDocument()
  })

  test('calls onStepClick with index when a step is clicked', () => {
    const onStepClick = vi.fn()

    renderWithTheme(
      <RcSesCardFormContainer
        steps={baseSteps}
        activeStep={1}
        title='Clickable steps'
        onStepClick={onStepClick}
      >
        <div>Body</div>
      </RcSesCardFormContainer>,
    )

    fireEvent.click(screen.getByText('Step 1'))

    expect(onStepClick).toHaveBeenCalledTimes(1)
    expect(onStepClick).toHaveBeenCalledWith(0)
  })
})
