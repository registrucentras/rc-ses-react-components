import {
  OutlinedTextFieldProps as MuiOutlinedTextFieldProps,
  TextField,
} from '@mui/material'
import { mergeSlotProps } from '@mui/material/utils'
import React, { useMemo } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { RcSesFormControlWrapperProps } from '../components/FormControlWrapper'
import TextFieldControl, { textFieldInputStyles } from './TextField.styles'

type TFieldProps = Omit<MuiOutlinedTextFieldProps, 'variant'>
type ImmediateFieldProps =
  'onChange' | 'onBlur' | 'disabled' | 'name' | 'ref' | 'required' | 'multiline'

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
    <TextFieldControl
      id={id}
      errors={errors}
      label={label}
      required={props.required}
      fieldDisabled={props.disabled}
      {...slotProps?.wrapper}
    >
      <TextField
        {...fieldProps}
        inputRef={ref}
        fullWidth
        {...slotProps?.field}
        slotProps={{
          ...slotProps?.field?.slotProps,
          input: mergeSlotProps(slotProps?.field?.slotProps?.input, {
            sx: textFieldInputStyles,
          }),
        }}
        id={id}
        error={!!errors}
      />
    </TextFieldControl>
  )
})

export default RcSesTextField
