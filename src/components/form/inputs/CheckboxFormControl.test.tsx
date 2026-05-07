import { ThemeProvider } from '@mui/material/styles'
import { render } from '@testing-library/react'
import { useForm } from 'react-hook-form'

import theme from '@/theme/light'

import RcSesCheckboxFormControl from './CheckboxFormControl'

type WrapperProps = Partial<React.ComponentProps<typeof RcSesCheckboxFormControl>> & {
  defaultValue?: boolean
}

const TestWrapper = ({ defaultValue = false, ...props }: WrapperProps) => {
  const { control } = useForm({ defaultValues: { checkbox: defaultValue } })
  return (
    <ThemeProvider theme={theme}>
      <RcSesCheckboxFormControl
        id='checkbox'
        name='checkbox'
        control={control}
        {...props}
      >
        Test Checkbox
      </RcSesCheckboxFormControl>
    </ThemeProvider>
  )
}

describe('RcSesCheckboxFormControl - Indeterminate State', () => {
  test('should auto-check parent when all children are checked', () => {
    const { container } = render(<TestWrapper childValues={[true, true, true]} />)
    const checkbox = container.querySelector('input#checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(true)
  })

  test('should auto-uncheck parent when all children are unchecked', () => {
    const { container } = render(<TestWrapper childValues={[false, false, false]} />)
    const checkbox = container.querySelector('input#checkbox') as HTMLInputElement
    expect(checkbox.checked).toBe(false)
  })

  test('should render with mixed child values (indeterminate visual state)', () => {
    const { container } = render(<TestWrapper childValues={[true, false, true]} />)
    const checkbox = container.querySelector('input#checkbox')
    expect(checkbox).toBeTruthy()
  })
})
