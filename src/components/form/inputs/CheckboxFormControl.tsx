/* eslint-disable no-nested-ternary */
import {
  FormControlLabel,
  FormControlLabelProps,
  FormLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
  styled,
} from '@mui/material'
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import CheckBoldDisabledIcon from '@/assets/icons/CheckBoldDisabledIcon'
import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'
import SpinnerGapBoldIcon from '@/assets/icons/SpinnerGapBoldIcon'
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
    slotProps?: {
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      label?: Partial<FormControlLabelProps>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

const LoadingStateIcon = styled(SpinnerGapBoldIcon)(`
  @keyframes loadingStateIconRotation {
     12.5% { transform: rotateZ( 45deg); }
     25.0% { transform: rotateZ( 90deg); }
     37.5% { transform: rotateZ(135deg); }
     50.0% { transform: rotateZ(180deg); }
     62.5% { transform: rotateZ(225deg); }
     75.0% { transform: rotateZ(270deg); }
     87.5% { transform: rotateZ(315deg); }
    100.0% { transform: rotateZ(360deg); }
  }

  animation-duration: 1s;
  animation-iteration-count: infinite;
  animation-name: loadingStateIconRotation;
  animation-timing-function: step-start;
  box-shadow: none !important;
`)

function RcSesCheckboxFormControl(props: Props) {
  const { children, control, disabled, id, loading, name, rules, slotProps, variant } =
    props

  const {
    field: { value, ...controllerProps },
  } = useController({
    control,
    name,
    rules,
  })

  return (
    <FormControlLabel
      control={
        <MuiCheckbox
          id={id}
          checked={value === true}
          checkedIcon={
            loading ? (
              <LoadingStateIcon />
            ) : disabled ? (
              <CheckBoldDisabledIcon />
            ) : (
              <CheckBoldIcon />
            )
          }
          disabled={disabled}
          icon={loading ? <LoadingStateIcon /> : <CheckUncheckedBoldIcon />}
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
              borderRadius: '.25rem',
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
