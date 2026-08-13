import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { ComponentProps, ComponentType, PropsWithChildren, ReactElement } from 'react'

import RcSesCardHeader from '@/components/common/Card/CardHeader'
import theme from '@/theme/light'

import RcSesCardFormContainer from '.'
import { StepItem } from '../../ServiceWizardStepper/StepperTypes'

const baseSteps: StepItem[] = [
  { id: '1', title: 'Step 1' },
  { id: '2', title: 'Step 2' },
  { id: '3', title: 'Step 3' },
]

const renderWithTheme = (ui: ReactElement) =>
  render(<ThemeProvider theme={theme}>{ui}</ThemeProvider>)

type RcSesCardFormContainerTestProps = PropsWithChildren<
  ComponentProps<typeof RcSesCardFormContainer>
> & {
  header?: ReactElement
}

const RcSesCardFormContainerWithChildren =
  RcSesCardFormContainer as ComponentType<RcSesCardFormContainerTestProps>

describe('RcSesCardFormContainer', () => {
  test('renders stepper, card content, and card title', () => {
    renderWithTheme(
      <RcSesCardFormContainerWithChildren
        steps={baseSteps}
        activeStep={1}
        header={<RcSesCardHeader title='Form title' />}
      >
        <div>Form content</div>
      </RcSesCardFormContainerWithChildren>,
    )

    expect(screen.getByText('Step 1')).toBeInTheDocument()
    expect(screen.getByText('Step 2')).toBeInTheDocument()
    expect(screen.getByText('Step 3')).toBeInTheDocument()
    expect(screen.getByText('Form title')).toBeInTheDocument()
    expect(screen.getByText('Form content')).toBeInTheDocument()
  })

  test('uses horizontal orientation by default', () => {
    const { container } = renderWithTheme(
      <RcSesCardFormContainerWithChildren
        steps={baseSteps}
        activeStep={1}
        header={<RcSesCardHeader title='Default layout' />}
      >
        <div>Body</div>
      </RcSesCardFormContainerWithChildren>,
    )

    expect(
      container.querySelector('.ServiceWizardStepper-horizontal'),
    ).toBeInTheDocument()
  })

  test('uses vertical orientation when layout is row', () => {
    const { container } = renderWithTheme(
      <RcSesCardFormContainerWithChildren
        steps={baseSteps}
        activeStep={1}
        header={<RcSesCardHeader title='Row layout' />}
        layout='row'
      >
        <div>Body</div>
      </RcSesCardFormContainerWithChildren>,
    )

    expect(container.querySelector('.ServiceWizardStepper-vertical')).toBeInTheDocument()
  })

  test('calls onStepClick with index when a step is clicked', () => {
    const onStepClick = vi.fn()

    renderWithTheme(
      <RcSesCardFormContainerWithChildren
        steps={baseSteps}
        activeStep={1}
        header={<RcSesCardHeader title='Clickable steps' />}
        onStepClick={onStepClick}
      >
        <div>Body</div>
      </RcSesCardFormContainerWithChildren>,
    )

    fireEvent.click(screen.getByText('Step 1'))

    expect(onStepClick).toHaveBeenCalledTimes(1)
    expect(onStepClick).toHaveBeenCalledWith(0)
  })
})
