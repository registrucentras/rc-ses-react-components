import {
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
  TextField,
} from '@mui/material'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

type TFieldProps = Omit<MuiOutlinedTextFieldProps, 'variant'>
type ImmediateFieldProps =
  | 'onChange'
  | 'onBlur'
  | 'disabled'
  | 'name'
  | 'ref'
  | 'multiline'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    slotProps?: {
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

const RcSesTextField = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const { errors, label, slotProps, ...fieldProps } = props

  const id = props.id ?? uuidv4()

  return (
    <RcSesFormControlWrapper
      id={id}
      label={label}
      errors={errors}
      {...slotProps?.wrapper}
    >
      <TextField
        {...fieldProps}
        inputRef={ref}
        id={id}
        fullWidth
        {...slotProps?.field}
        error={!!errors}
      />
    </RcSesFormControlWrapper>
  )
})

export default RcSesTextField
