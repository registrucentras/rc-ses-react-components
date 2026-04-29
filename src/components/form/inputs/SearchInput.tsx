import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material'
import InputAdornment from '@mui/material/InputAdornment'
import type { OutlinedTextFieldProps } from '@mui/material/TextField'
import TextField from '@mui/material/TextField'
import React, { useCallback, useMemo, useRef } from 'react'
import type { UseControllerProps } from 'react-hook-form'
import { useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import XCircleFillIcon from '@/assets/icons/XCircleFillIcon'
import RcSesButton from '@/components/common/Button'
import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '@/components/form/components/FormControlWrapper'
import type { ButtonProps } from '@/types/buttons/ButtonProps'

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules' | 'disabled' | 'name'

type TFieldProps = Omit<OutlinedTextFieldProps, 'variant' | 'value' | 'defaultValue'>

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'id' | 'label' | 'errors' | 'labelSubtitle'
type TSearchButtonProps = Partial<ButtonProps>

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    onSearch: (value: string) => void
    required?: boolean
    onlyNumbers?: boolean
    placeholder?: TFieldProps['placeholder']
    sideLabel?: boolean
    showSearchButton?: boolean
    searchButtonLabel?: string
    slotProps?: {
      controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>
      field?: Partial<TFieldProps>
      searchButton?: TSearchButtonProps
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

const RcSesSearchInput = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [hasSearchAttempted, setHasSearchAttempted] = React.useState(false)
  const internalInputRef = useRef<HTMLInputElement>(null)

  const setInputRef = useCallback(
    (el: HTMLInputElement | null) => {
      ;(internalInputRef as React.MutableRefObject<HTMLInputElement | null>).current = el
      if (typeof ref === 'function') {
        ref(el)
      } else if (ref) {
        ;(ref as React.MutableRefObject<HTMLInputElement | null>).current = el
      }
    },
    [ref],
  )

  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesSearchableField' })
  const { t: tWrapper } = useTranslation('input', {
    keyPrefix: 'components.RcSesFormControlWrapper',
  })

  const {
    control,
    labelSubtitle,
    errors,
    label,
    onSearch,
    required,
    onlyNumbers = false,
    placeholder,
    rules,
    sideLabel = false,
    showSearchButton = true,
    searchButtonLabel,
    slotProps,
    ...fieldProps
  } = props
  const { disabled, name } = fieldProps

  const id = useMemo(() => fieldProps.id ?? uuidv4(), [fieldProps.id])

  const hasRequiredRule = rules?.required !== undefined
  const isRequired = hasRequiredRule ? !!rules?.required : required === true
  const controllerRules =
    hasRequiredRule || !isRequired ? rules : { ...(rules ?? {}), required: true }

  const {
    field: { onBlur, onChange, value },
  } = useController({
    control,
    name,
    rules: controllerRules,
    disabled,
    shouldUnregister: true,
    ...slotProps?.controller,
  })

  const currentTheme = useTheme()
  const upMd = useMediaQuery(currentTheme.breakpoints.up('md'))

  const mergedSearchButtonProps = slotProps?.searchButton ?? {}

  const shouldRenderSearchButton = showSearchButton !== false && upMd

  const mergedWrapperProps = {
    ...slotProps?.wrapper,
    labelSubtitle,
    hideLabel: slotProps?.wrapper?.hideLabel ?? !label,
    labelOnTop: slotProps?.wrapper?.labelOnTop ?? !sideLabel,
  }

  const shouldSearchOnEnter =
    !shouldRenderSearchButton || !!mergedSearchButtonProps.disabled

  const hasSearchValue = `${value ?? ''}`.trim().length > 0
  const visibleErrors = hasSearchAttempted ? errors : undefined

  const handleSearchClick: NonNullable<ButtonProps['onClick']> = (event) => {
    setHasSearchAttempted(true)
    mergedSearchButtonProps.onClick?.(event)

    if (!event.defaultPrevented && hasSearchValue) {
      onSearch?.(value ?? '')
    }
  }

  const handleFieldKeyDown: NonNullable<TFieldProps['onKeyDown']> = (event) => {
    slotProps?.field?.onKeyDown?.(event)

    if (!event.defaultPrevented && shouldSearchOnEnter && event.key === 'Enter') {
      setHasSearchAttempted(true)
      event.preventDefault()

      if (hasSearchValue) {
        onSearch?.(value ?? '')
      } else {
        onBlur()
      }
    }
  }

  const handleFieldChange: NonNullable<TFieldProps['onChange']> = (event) => {
    slotProps?.field?.onChange?.(event)

    if (event.defaultPrevented) {
      return
    }

    const nextValue = event.target.value ?? ''
    const parsedValue = onlyNumbers ? nextValue.replace(/\D+/g, '') : nextValue

    onChange(parsedValue)
  }

  return (
    <RcSesFormControlWrapper
      id={id}
      errors={visibleErrors}
      label={label}
      required={isRequired}
      {...mergedWrapperProps}
    >
      <Box
        sx={{
          alignItems: 'stretch',
          display: 'flex',
          gap: 2,
          width: '100%',
        }}
      >
        <TextField
          id={id}
          inputRef={setInputRef}
          InputProps={{
            inputProps: {
              ...(slotProps?.field?.inputProps ?? {}),
              ...(onlyNumbers
                ? {
                    inputMode: 'numeric',
                    pattern: '[0-9]*',
                  }
                : {}),
            },
            startAdornment: (
              <InputAdornment
                position='start'
                onClick={() => internalInputRef.current?.focus()}
              >
                <Box
                  sx={{
                    alignItems: 'center',
                    cursor: 'text',
                    display: 'flex',
                    height: '2.5rem',
                    justifyContent: 'center',
                    p: 1,
                    width: '2.5rem',
                  }}
                >
                  <MagnifyingGlassIcon />
                </Box>
              </InputAdornment>
            ),
            endAdornment: !!value && (
              <InputAdornment position='end'>
                <IconButton
                  aria-label={t('clearValueAriaLabel')}
                  disabled={disabled}
                  onClick={() => onChange('')}
                >
                  <XCircleFillIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          error={!!visibleErrors}
          fullWidth
          {...slotProps?.field}
          disabled={disabled}
          label={undefined}
          name={name}
          onBlur={onBlur}
          onChange={handleFieldChange}
          onKeyDown={handleFieldKeyDown}
          placeholder={slotProps?.field?.placeholder ?? placeholder}
          sx={[
            {
              flex: '1 1 auto',
              '& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus':
                {
                  WebkitBoxShadow: `0 0 0 1000px ${currentTheme.palette.background.paper} inset`,
                },
              '& .MuiOutlinedInput-root:has(input:-webkit-autofill)': {
                backgroundColor: currentTheme.palette.background.paper,
              },
            },
            ...(Array.isArray(slotProps?.field?.sx)
              ? slotProps.field.sx
              : [slotProps?.field?.sx]),
          ]}
          value={value ?? ''}
        />

        {shouldRenderSearchButton && (
          <RcSesButton
            disabled={!!(disabled || mergedSearchButtonProps.disabled || !hasSearchValue)}
            onClick={handleSearchClick}
            sx={[
              {
                flexShrink: 0,
                minWidth: '6.75rem',
                px: 3,
                whiteSpace: 'nowrap',
              },
              ...(Array.isArray(mergedSearchButtonProps.sx)
                ? mergedSearchButtonProps.sx
                : [mergedSearchButtonProps.sx]),
            ]}
            {...mergedSearchButtonProps}
          >
            {searchButtonLabel ?? mergedSearchButtonProps.children ?? tWrapper('search')}
          </RcSesButton>
        )}
      </Box>
    </RcSesFormControlWrapper>
  )
})

export default RcSesSearchInput
