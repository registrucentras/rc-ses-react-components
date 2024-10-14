import {
  FormControlLabel,
  FormControlLabelProps,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material'
import React from 'react'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

type TFieldProps = MuiCheckboxProps
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name' | 'ref'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    children: React.ReactNode
    variant?: 'flat' | 'outlined'
    slotProps?: {
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      label?: Partial<FormControlLabelProps>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

const RcSesCheckbox = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { children, errors, label, slotProps, variant, ...fieldProps } = props

  const id = props.id ?? crypto.randomUUID()

  return (
    <RcSesFormControlWrapper
      id={id}
      label={label}
      errors={errors}
      {...slotProps?.wrapper}
    >
      <FormControlLabel
        control={
          <MuiCheckbox
            checkedIcon={<CheckBoldIcon />}
            icon={<CheckUncheckedBoldIcon />}
            {...fieldProps}
            {...slotProps?.field}
            disableRipple
            inputRef={ref}
          />
        }
        label={children}
        {...slotProps?.label}
        slotProps={{
          typography: {
            lineHeight: '1.25rem',
            marginLeft: '.4375rem',
            variant: 'body2',
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
                borderRadius: '.25rem',
                margin: 0,
                padding: '1rem 1.25rem 1rem .875rem',
              }
            : {}),
          ...slotProps?.label?.sx,
        }}
      />
    </RcSesFormControlWrapper>
  )
})

export default RcSesCheckbox
