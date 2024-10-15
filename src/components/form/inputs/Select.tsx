import {
  Autocomplete,
  AutocompleteProps,
  Box,
  CircularProgress,
  TextField,
} from '@mui/material'
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

type Option = {
  description?: string
  label: string
  value: string
}

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules' | 'name' | 'disabled'

type TFieldProps = Pick<
  AutocompleteProps<Option | '', false, true, false>,
  'id' | 'onInputChange'
>
type ImmediateFieldProps = 'onInputChange'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'id' | 'label' | 'errors'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    options: (Option | '')[]
    loading?: boolean
    slotProps?: {
      controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesSelect(props: Props) {
  const [inputValue, setInputValue] = React.useState<string>('')

  const {
    control,
    errors,
    label,
    loading,
    onInputChange,
    options,
    rules,
    slotProps,
    ...fieldProps
  } = props
  const { disabled, name } = fieldProps

  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ?? crypto.randomUUID()

  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    rules,
    shouldUnregister: true,
  })

  const hasError = !!errors

  const resolvedValue = React.useMemo(
    () =>
      value
        ? {
            value,
            label: (options.find((o) => (o && o.value) === value) as Option)?.label ?? '',
          }
        : '',
    [options, value],
  )

  return (
    <RcSesFormControlWrapper
      id={id}
      label={label}
      errors={errors}
      {...slotProps?.wrapper}
    >
      <Autocomplete
        id={id}
        disableClearable
        disabled={disabled}
        value={resolvedValue}
        getOptionLabel={(option) => (typeof option === 'object' ? option.label : '')}
        getOptionKey={(option) => (typeof option === 'object' ? option?.value : '')}
        isOptionEqualToValue={(option, selection) =>
          option === '' ||
          (typeof option === 'object' &&
            typeof selection === 'object' &&
            option?.value === selection?.value)
        }
        onChange={(_event, item) => onChange(typeof item === 'object' && item?.value)}
        onInputChange={(event, val, reason) => {
          setInputValue(val ?? '')
          if (onInputChange) onInputChange(event, val, reason)
        }}
        options={options}
        loading={loading}
        inputValue={inputValue}
        renderInput={(params) => (
          <TextField
            {...params}
            disabled={disabled}
            error={hasError}
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <>
                  {loading ? <CircularProgress color='inherit' size={16} /> : null}
                  {params.InputProps.endAdornment}
                </>
              ),
            }}
          />
        )}
        renderOption={(optionProps, option, _state, ownerState) => {
          const { key, ...rest } = optionProps as any
          return (
            <Box key={key} component='li' {...rest}>
              <span className='rc-ses-select-option-label'>
                {ownerState.getOptionLabel(option)}
              </span>
              {!!option && (
                <span className='rc-ses-select-option-description'>
                  {option.description}
                </span>
              )}
            </Box>
          )
        }}
      />
    </RcSesFormControlWrapper>
  )
}

export default RcSesSelect
