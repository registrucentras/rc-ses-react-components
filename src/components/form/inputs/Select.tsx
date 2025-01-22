import {
  Autocomplete,
  AutocompleteProps,
  Box,
  CircularProgress,
  TextField,
} from '@mui/material'
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

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

type TFieldProps = Omit<
  AutocompleteProps<Option | '', false, boolean, false>,
  'value' | 'disableClearable'
>
type ImmediateFieldProps = 'onInputChange'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'id' | 'label' | 'errors'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    clearable?: boolean
    loading?: boolean
    options: (Option | '')[]
    placeholder?: string
    slotProps?: {
      controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesSelect(props: Props) {
  const [inputValue, setInputValue] = React.useState<string>('')

  const {
    clearable,
    control,
    errors,
    label,
    loading,
    onInputChange,
    options,
    placeholder,
    rules,
    slotProps,
    ...fieldProps
  } = props
  const { disabled, name } = fieldProps

  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ?? uuidv4()

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
        : null,
    [options, value],
  )

  return (
    <RcSesFormControlWrapper
      id={id}
      errors={errors}
      label={label}
      required={!!rules?.required}
      {...slotProps?.wrapper}
    >
      <Autocomplete
        id={id}
        disabled={disabled}
        disableClearable={clearable === false}
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
          setInputValue(val ?? null)
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
            placeholder={placeholder}
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
        {...slotProps?.field}
      />
    </RcSesFormControlWrapper>
  )
}

export default RcSesSelect
