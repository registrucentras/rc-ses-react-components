import { Button, OutlinedInput, OutlinedInputProps, styled } from '@mui/material'
import React, { useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { MinusBoldIcon, PlusBoldIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

const stepperHoverBackground = 'var(--rc-color-neutrals-200)'

const NumberInput = styled(OutlinedInput)({
  paddingRight: `${spacingRoleBasedTokens['space-0']} !important`,

  'input[type=number]': {
    MozAppearance: 'textfield',
  },
  'input[type=number]::-webkit-outer-spin-button': {
    WebkitAppearance: 'none',
    margin: spacingRoleBasedTokens['space-0'],
  },
  'input[type=number]::-webkit-inner-spin-button': {
    WebkitAppearance: 'none',
    margin: spacingRoleBasedTokens['space-0'],
  },

  '.MuiButtonBase-root': {
    backgroundColor: colorTokens['surface-muted'],
    borderRightStyle: 'none !important',

    '&:last-of-type': {
      borderTopRightRadius: borderTokens['radius-input'],
      borderBottomRightRadius: borderTokens['radius-input'],
    },

    '&:hover:not(:disabled)': {
      backgroundColor: stepperHoverBackground,
    },

    '&.Mui-disabled': {
      backgroundColor: `${colorTokens['surface-muted']} !important`,
      borderLeftColor: `${colorTokens['border-strong']} !important`,

      'svg path': {
        fill: colorTokens['text-disabled'],
      },
    },
  },
})

interface ArrowButtonProps {
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
        color: colorTokens['text-default'],
        borderRadius: borderTokens['radius-0'],
        borderWidth: `${borderTokens['stroke-0']} ${borderTokens['stroke-0']} ${borderTokens['stroke-0']} ${borderTokens['stroke-1']}`,
        // No stepper width/padding roles exist; retain the existing 44px/13px values.
        minWidth: '2.75rem',
        padding: '.8125rem !important',
        // No stepper icon role exists; retain the existing 16px icon size.
        '& > svg': {
          width: sizeTokens['icon-size-16'],
          height: sizeTokens['icon-size-16'],
        },

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
    ...slotProps?.controller,
  })

  // [subtractDisabled, addDisabled] - derived from the current value and the
  // controller rules, so the buttons render with the right state on first paint.
  const buttonState = useMemo<[boolean, boolean]>(() => {
    if (disabled) {
      return [true, true]
    }

    return [
      Number.isInteger(rules?.min)
        ? parseInt(rules?.min as string, 10) >= parseInt((value ?? 0) as string, 10)
        : false,
      Number.isInteger(rules?.max)
        ? parseInt(rules?.max as string, 10) <= parseInt((value ?? 0) as string, 10)
        : false,
    ]
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
        slotProps={{
          // Was inputProps. Note this is OutlinedInput, not TextField: its
          // native-input slot is called `input` (TextField's `input` is the
          // OutlinedInput wrapper and its native slot is `htmlInput`), so the
          // mapping is per-component rather than a blanket rename.
          input: {
            disabled,
            step,
            value,
          },
        }}
        onChange={handleInputOnChange}
        type='number'
        {...fieldProps}
      />
    </RcSesFormControlWrapper>
  )
}

export default RcSesNumberStepper
