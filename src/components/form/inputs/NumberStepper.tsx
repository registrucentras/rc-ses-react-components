/* eslint-disable react/jsx-props-no-spreading */
import { Button, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import React, { useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import MinusBoldIcon from '@/assets/icons/MinusBoldIcon'
import PlusBoldIcon from '@/assets/icons/PlusBoldIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

const NumberInput = styled(OutlinedInput)({
  paddingRight: '0 !important',

  'input[type=number]': {
    MozAppearance: 'textfield',
  },
  'input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },
  'input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: 0,
  },

  '.MuiButtonBase-root': {
    backgroundColor: palette.grey['100'],
    borderRightStyle: 'none !important',

    '&:last-of-type': {
      borderTopRightRadius: '.25rem',
      borderBottomRightRadius: '.25rem',
    },

    '&:hover:not(:disabled)': {
      backgroundColor: palette.grey['200'],
    },

    '&.Mui-disabled': {
      backgroundColor: `${palette.grey['100']} !important`,
      borderLeftColor: `${palette.grey['600']} !important`,

      'svg path': {
        fill: palette.grey['600'],
      },
    },
  },
})

type ArrowButtonProps = {
  ariaLabel: string
  direction: 'plus' | 'minus'
  disabled: boolean
  onClick: () => void
}

function ArrowButton({ ariaLabel, onClick, disabled, direction }: ArrowButtonProps) {
  return (
    <Button
      aria-label={ariaLabel}
      color='grey'
      onClick={onClick}
      disabled={disabled}
      variant='outlined'
      sx={{
        color: 'grey.900',
        borderRadius: 0,
        borderWidth: '0 0 0 1px',
        minWidth: '2.75rem',
        padding: '.8125rem !important',

        '&::before': {
          content: 'unset',
        },
      }}
    >
      {direction === 'plus' ? <PlusBoldIcon /> : <MinusBoldIcon />}
    </Button>
  )
}

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules'

type TFieldProps = OutlinedInputProps
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    displayStepperControls?: boolean
    min?: string | number
    max?: string | number
    step?: string | number
    slotProps?: {
      controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesNumberStepper(props: Props) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesNumberStepper' })

  const [buttonState, setButtonState] = React.useState<[boolean, boolean]>([true, true])

  const {
    control,
    displayStepperControls,
    errors,
    label,
    max,
    min,
    rules,
    slotProps,
    step,
    ...fieldProps
  } = props
  const { disabled, name } = fieldProps

  // eslint-disable-next-line react/destructuring-assignment
  const id = useMemo(() => props.id ?? uuidv4(), [props.id])

  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    rules,
  })

  React.useEffect(() => {
    if (disabled) {
      setButtonState([true, true])
      return
    }

    setButtonState([
      Number.isInteger(rules?.min)
        ? parseInt(rules?.min as string, 10) >= parseInt((value ?? 0) as string, 10)
        : false,
      Number.isInteger(rules?.max)
        ? parseInt(rules?.max as string, 10) <= parseInt((value ?? 0) as string, 10)
        : false,
    ])
  }, [disabled, rules?.max, rules?.min, value])

  const handleInputOnChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => onChange && onChange(e.target.value)

  const handleOnAdd = () =>
    onChange(parseInt((value ?? 0) as string, 10) + (parseInt(step as string, 10) || 1))

  const handleOnSubtract = () =>
    onChange(parseInt((value ?? 0) as string, 10) - (parseInt(step as string, 10) || 1))

  return (
    <RcSesFormControlWrapper
      id={id}
      errors={errors}
      label={label}
      required={!!rules?.required}
      {...slotProps?.wrapper}
    >
      <NumberInput
        disabled={disabled}
        endAdornment={
          displayStepperControls && (
            <>
              <ArrowButton
                ariaLabel={t('subtract')}
                onClick={handleOnSubtract}
                disabled={buttonState[0]}
                direction='minus'
              />
              <ArrowButton
                ariaLabel={t('add')}
                onClick={handleOnAdd}
                disabled={buttonState[1]}
                direction='plus'
              />
            </>
          )
        }
        error={!!errors}
        inputProps={{
          disabled,
          step,
          value,
        }}
        onChange={handleInputOnChange}
        type='number'
        {...fieldProps}
      />
    </RcSesFormControlWrapper>
  )
}

export default RcSesNumberStepper
