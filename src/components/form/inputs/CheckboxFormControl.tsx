import {
  FormControlLabelProps,
  FormLabel,
  Checkbox as MuiCheckbox,
  CheckboxProps as MuiCheckboxProps,
} from '@mui/material'
import React, { useEffect, useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import { CheckBoldIcon, CheckUncheckedBoldIcon } from '@/assets/icons/phosphorIcons'
import RcSesFormControlLabel from '@/components/form/inputs/FormControlLabel'
import getLoadingIcon from '@/components/utils/loading'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

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
    childValues?: boolean[]
    onChildValuesChange?: (childValues: boolean[]) => void
    slotProps?: {
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      label?: Partial<FormControlLabelProps>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesCheckboxFormControl(props: Props) {
  const {
    children,
    control,
    disabled,
    id,
    loading,
    name,
    rules,
    slotProps,
    variant,
    childValues = [],
    onChildValuesChange,
  } = props

  const {
    field: { value, onChange, ...controllerProps },
  } = useController({
    control,
    name,
    rules,
  })

  const checkedCount = useMemo(() => childValues.filter(Boolean).length, [childValues])

  const computedIndeterminate = useMemo(
    () => checkedCount > 0 && checkedCount < childValues.length,
    [checkedCount, childValues.length],
  )

  useEffect(() => {
    if (!childValues.length) return
    const expectedValue = checkedCount === childValues.length

    if (expectedValue !== value) onChange(expectedValue)
  }, [checkedCount, childValues.length, value, onChange])

  const handleParentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.checked
    onChange(newValue)

    if (onChildValuesChange && childValues.length > 0) {
      onChildValuesChange(childValues.map(() => newValue))
    }
  }

  return (
    <RcSesFormControlLabel
      control={
        <MuiCheckbox
          id={id}
          checked={value === true}
          indeterminate={computedIndeterminate}
          checkedIcon={getLoadingIcon(<CheckBoldIcon />, loading)}
          disabled={disabled}
          icon={getLoadingIcon(<CheckUncheckedBoldIcon />, loading)}
          onChange={handleParentChange}
          {...controllerProps}
          {...slotProps?.field}
          disableRipple
        />
      }
      label={
        <FormLabel htmlFor={id} sx={{ '&&': { fontWeight: 'inherit' } }}>
          {children}
          {slotProps?.wrapper?.hideLabel && rules?.required === true && (
            <span aria-hidden className='MuiFormControlLabel-asterisk'>
              *
            </span>
          )}
        </FormLabel>
      }
      loading={loading}
      {...slotProps?.label}
      slotProps={{
        typography: {
          // MUI 9 tightened this slot's type: style shorthands are no longer
          // accepted alongside component props, so they move into sx.
          sx: {
            fontWeight: 400,
            lineHeight: typographyTokens['line-height-body-small'],
            marginLeft: variant === 'flat' ? '.4375rem' : '.1875rem',
          },
          variant: variant === 'flat' ? 'body1' : 'body2',
          ...slotProps?.label?.slotProps?.typography,
        },
      }}
      sx={{
        ...(!variant || variant === 'outlined'
          ? {
              backgroundColor: colorTokens['surface-sunken'],
              borderColor: colorTokens['border-strong'],
              borderStyle: 'solid',
              borderWidth: borderTokens['stroke-1'],
              borderRadius: borderTokens['radius-8'],
              margin: spacingRoleBasedTokens['space-0'],
              // Legacy geometry: the 14px start pairs with MUI's 9px checkbox padding.
              // Figma's selectable area (12px sides, 2px icon frame) differs.
              padding: `${spacingRoleBasedTokens['space-16']} ${spacingRoleBasedTokens['space-20']} ${spacingRoleBasedTokens['space-16']} .875rem`,
            }
          : {}),
        ...slotProps?.label?.sx,
      }}
    />
  )
}

export default RcSesCheckboxFormControl
