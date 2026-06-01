import { ThemeProvider } from '@mui/material/styles'
import { fireEvent, render, waitFor } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { describe, expect, test, vi } from 'vitest'

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

  test('should call onChildValuesChange with [true, true, true] when clicking parent in indeterminate state', async () => {
    const onChildValuesChange = vi.fn()
    const { container } = render(
      <TestWrapper
        childValues={[true, false, true]}
        onChildValuesChange={onChildValuesChange}
      />,
    )
    const checkbox = container.querySelector('input#checkbox') as HTMLInputElement
    fireEvent.click(checkbox)
    await waitFor(() => {
      expect(onChildValuesChange).toHaveBeenCalledWith([true, true, true])
    })
  })

  test('should call onChildValuesChange with [false, false, false] when clicking checked parent', async () => {
    const onChildValuesChange = vi.fn()
    const { container } = render(
      <TestWrapper
        childValues={[true, true, true]}
        onChildValuesChange={onChildValuesChange}
      />,
    )
    const checkbox = container.querySelector('input#checkbox') as HTMLInputElement
    fireEvent.click(checkbox)
    await waitFor(() => {
      expect(onChildValuesChange).toHaveBeenCalledWith([false, false, false])
    })
  })
})
