import {
  FormControlLabelProps,
  FormLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'
import RcSesFormControlLabel from '@/components/form/inputs/FormControlLabel'
import getLoadingIcon from '@/components/utils/loading'
import palette from '@/theme/palette'

import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper'

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules'

type TFieldProps = MuiCheckboxProps
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    children: React.ReactNode
    loading?: boolean
    variant?: 'flat' | 'outlined'
    childValues?: boolean[]
    onChildValuesChange?: (childValues: boolean[]) => void
    slotProps?: {
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      label?: Partial<FormControlLabelProps>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesCheckboxFormControl(props: Props) {
  const {
    children,
    control,
    disabled,
    id,
    loading,
    name,
    rules,
    slotProps,
    variant,
    childValues = [],
    onChildValuesChange,
  } = props

  const {
    field: { value, onChange, ...controllerProps },
  } = useController({
    control,
    name,
    rules,
  })

  const checkedCount = useMemo(() => childValues.filter(Boolean).length, [childValues])

  const computedIndeterminate = useMemo(
    () => checkedCount > 0 && checkedCount < childValues.length,
    [checkedCount, childValues.length],
  )

  useEffect(() => {
    if (!childValues.length) return
    const expectedValue = checkedCount === childValues.length

    if (expectedValue !== value) onChange(expectedValue)
  }, [checkedCount, childValues.length, value, onChange])

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked
    onChange(newValue)

    if (onChildValuesChange && childValues.length > 0) {
      onChildValuesChange(childValues.map(() => newValue))
    }
  }

  return (
    <RcSesFormControlLabel
      control={
        <MuiCheckbox
          id={id}
          checked={value === true}
          indeterminate={computedIndeterminate}
          checkedIcon={getLoadingIcon(<CheckBoldIcon />, loading)}
          disabled={disabled}
          icon={getLoadingIcon(<CheckUncheckedBoldIcon />, loading)}
          onChange={handleParentChange}
          {...controllerProps}
          {...slotProps?.field}
          disableRipple
        />
      }
      label={
        <FormLabel htmlFor={id} sx={{ fontWeight: 'inherit !important' }}>
          {children}
          {slotProps?.wrapper?.hideLabel && rules?.required === true && (
            <span aria-hidden className='MuiFormControlLabel-asterisk'>
              *
            </span>
          )}
        </FormLabel>
      }
      loading={loading}
      {...slotProps?.label}
      slotProps={{
        typography: {
          fontWeight: 400,
          lineHeight: '1.25rem',
          marginLeft: variant === 'flat' ? '.4375rem' : '.1875rem',
          variant: variant === 'flat' ? 'body1' : 'body2',
          ...slotProps?.label?.slotProps?.typography,
        },
      }}
      sx={{
        ...(!variant || variant === 'outlined'
          ? {
              backgroundColor: palette.grey['50'],
              borderColor: palette.grey['500'],
              borderStyle: 'solid',
              borderWidth: '1px',
              borderRadius: '.5rem',
              margin: 0,
              padding: '1rem 1.25rem 1rem .875rem',
            }
          : {}),
        ...slotProps?.label?.sx,
      }}
    />
  )
}

export default RcSesCheckboxFormControl
