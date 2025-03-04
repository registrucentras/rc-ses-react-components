import {
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
  TextField,
} from '@mui/material'
import React, { useMemo } from 'react'
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
  | 'required'
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

  const id = useMemo(() => fieldProps.id ?? uuidv4(), [fieldProps.id])

  return (
    <RcSesFormControlWrapper
      id={id}
      errors={errors}
      label={label}
      required={props.required}
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
