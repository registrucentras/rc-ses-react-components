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

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

export interface RadioOption {
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
    options: RadioOption[]
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
    ...slotProps?.controller,
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
    backgroundColor:
      props.variant === 'filled' ? colorTokens['surface-muted'] : 'transparent',
    borderColor:
      props.variant === 'outlined' ? colorTokens['control-border'] : 'transparent',
    borderStyle: 'solid',
    borderWidth: props.variant === 'outlined' ? borderTokens['stroke-1'] : 0,
    borderRadius: borderTokens['radius-input'],
    margin: 0,
    padding: props.hideNativeRadio
      ? undefined
      : `${spacingRoleBasedTokens['space-4']} ${spacingRoleBasedTokens['space-12']}`,
  },
}))

export default RcSesRadioButtonGroup
