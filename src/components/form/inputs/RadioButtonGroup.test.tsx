import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, screen } from '@testing-library/react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

import theme from '@/theme/light'

import RcSesRadioButtonGroup from './RadioButtonGroup'

const options = [
  { label: 'Fizinis asmuo', value: 'natural' },
  { label: 'Juridinis asmuo', value: 'legal' },
]

type TestWrapperProps = {
  shouldUnregister?: boolean
}

const TestWrapper = ({ shouldUnregister }: TestWrapperProps) => {
  const { control, getValues } = useForm({
    defaultValues: { ownerType: 'natural' },
  })
  const [mounted, setMounted] = useState(true)
  const [formValues, setFormValues] = useState('')

  const slotProps =
    shouldUnregister === undefined ? undefined : { controller: { shouldUnregister } }

  return (
    <ThemeProvider theme={theme}>
      {mounted && (
        <RcSesRadioButtonGroup
          id='ownerType'
          name='ownerType'
          control={control}
          label='Savininko tipas'
          options={options}
          slotProps={slotProps}
        />
      )}

      <button type='button' onClick={() => setMounted(false)}>
        Hide
      </button>
      <button type='button' onClick={() => setFormValues(JSON.stringify(getValues()))}>
        Read
      </button>
      <div data-testid='form-values'>{formValues}</div>
    </ThemeProvider>
  )
}

describe('RcSesRadioButtonGroup', () => {
  test('keeps the value in the form by default when the field unmounts', () => {
    render(<TestWrapper />)

    fireEvent.click(screen.getByRole('button', { name: 'Hide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Read' }))

    expect(screen.getByTestId('form-values')).toHaveTextContent('natural')
  })

  test('drops the value when slotProps.controller turns shouldUnregister on', () => {
    render(<TestWrapper shouldUnregister />)

    fireEvent.click(screen.getByRole('button', { name: 'Hide' }))
    fireEvent.click(screen.getByRole('button', { name: 'Read' }))

    expect(screen.getByTestId('form-values')).not.toHaveTextContent('natural')
  })
})
