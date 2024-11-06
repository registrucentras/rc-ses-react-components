import { FormControlLabelProps, CheckboxProps as MuiCheckboxProps } from '@mui/material'
import React from 'react'
import { UseControllerProps } from 'react-hook-form'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'
import RcSesCheckboxFormControl from './CheckboxFormControl'

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
    slotProps?: {
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      label?: Partial<FormControlLabelProps>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesCheckbox(props: Props) {
  const { errors, label, slotProps } = props

  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ?? crypto.randomUUID()

  return (
    <RcSesFormControlWrapper
      id={id}
      label={label}
      errors={errors}
      {...slotProps?.wrapper}
    >
      <RcSesCheckboxFormControl {...props} />
    </RcSesFormControlWrapper>
  )
}

export default RcSesCheckbox
