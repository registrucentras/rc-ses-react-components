import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'

import theme from '@/theme/light'

import RcSesNumberStepper from './NumberStepper'

interface TestWrapperProps {
  defaultValue?: number
  disabled?: boolean
  max?: number
  min?: number
}

const TestWrapper = ({ defaultValue = 5, disabled, max, min }: TestWrapperProps) => {
  const { control } = useForm({ defaultValues: { quantity: defaultValue } })

  return (
    <ThemeProvider theme={theme}>
      <RcSesNumberStepper
        id='quantity'
        name='quantity'
        control={control}
        label='Kiekis'
        displayStepperControls
        disabled={disabled}
        rules={{ min, max }}
      />
    </ThemeProvider>
  )
}

const subtractButton = () => screen.getByRole('button', { name: 'Atimti' })
const addButton = () => screen.getByRole('button', { name: 'Pridėti' })

describe('RcSesNumberStepper', () => {
  test('enables both controls when the value sits between min and max', () => {
    render(<TestWrapper defaultValue={5} min={0} max={10} />)

    expect(subtractButton()).toBeEnabled()
    expect(addButton()).toBeEnabled()
  })

  test('disables subtract on the first render when the value is already at min', () => {
    render(<TestWrapper defaultValue={0} min={0} max={10} />)

    expect(subtractButton()).toBeDisabled()
    expect(addButton()).toBeEnabled()
  })

  test('disables add on the first render when the value is already at max', () => {
    render(<TestWrapper defaultValue={10} min={0} max={10} />)

    expect(subtractButton()).toBeEnabled()
    expect(addButton()).toBeDisabled()
  })

  test('disables both controls when the field is disabled', () => {
    render(<TestWrapper defaultValue={5} disabled min={0} max={10} />)

    expect(subtractButton()).toBeDisabled()
    expect(addButton()).toBeDisabled()
  })

  test('leaves both controls enabled when no min or max is set', () => {
    render(<TestWrapper defaultValue={0} />)

    expect(subtractButton()).toBeEnabled()
    expect(addButton()).toBeEnabled()
  })

  test('re-evaluates the controls as the value reaches a bound', () => {
    render(<TestWrapper defaultValue={9} min={0} max={10} />)

    expect(addButton()).toBeEnabled()

    fireEvent.click(addButton())

    expect(addButton()).toBeDisabled()
    expect(subtractButton()).toBeEnabled()
  })
})
