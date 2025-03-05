/* eslint-disable react/jsx-props-no-spreading */
import {
  FormControlLabel,
  Radio,
  RadioGroup,
  RadioGroupProps,
  styled,
} from '@mui/material'
import { useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

export type RadioOption = {
  label: string
  value: string
}

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules' | 'name'

type TFieldProps = RadioGroupProps
type ImmediateFieldProps = 'name'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    className?: string
    hideNativeRadio?: boolean
    options: Array<RadioOption>
    variant?: 'flat' | 'outlined' | 'filled'
    slotProps?: {
      controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function UnstyledRcSesRadioButtonGroup(props: Props) {
  const {
    control,
    className,
    hideNativeRadio,
    errors,
    label,
    name,
    options,
    rules,
    slotProps,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    variant = 'flat',
  } = props

  // eslint-disable-next-line react/destructuring-assignment
  const id = useMemo(() => props.id ?? uuidv4(), [props.id])

  const { field } = useController({
    control,
    name,
    rules,
  })

  return (
    <RcSesFormControlWrapper
      id={id}
      className={className}
      errors={errors}
      label={label}
      required={!!rules?.required}
      {...slotProps?.wrapper}
    >
      <RadioGroup
        aria-labelledby={id}
        className={hideNativeRadio ? 'rc-ses-hide-native-radio' : ''}
        {...field}
      >
        {options.map((option) => (
          <FormControlLabel
            control={<Radio />}
            id={id}
            key={option.label}
            label={option.label}
            value={option.value}
            className={option.value === field.value ? 'Mui-checked' : ''}
          />
        ))}
      </RadioGroup>
    </RcSesFormControlWrapper>
  )
}

const RcSesRadioButtonGroup = styled(UnstyledRcSesRadioButtonGroup)((props) => ({
  '.rc-ses-form-field-wrapper': {
    backgroundColor: props.variant === 'filled' ? palette.grey['100'] : 'transparent',
    borderColor: props.variant === 'outlined' ? palette.grey['500'] : 'transparent',
    borderStyle: 'solid',
    borderWidth: props.variant === 'outlined' ? '1px' : 0,
    borderRadius: '.1875rem',
    margin: 0,
    padding: props.hideNativeRadio ? undefined : '.25rem .75rem',
  },
}))

export default RcSesRadioButtonGroup
