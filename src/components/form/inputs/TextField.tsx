import {
  Box,
  FormHelperText,
  FormLabel,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import type { SxProps, Theme } from '@mui/material'
import type { OutlinedTextFieldProps } from '@mui/material/TextField'
import { useForkRef } from '@mui/material/utils'
import type { SystemStyleObject } from '@mui/system'
import { EyeIcon, EyeSlashIcon, XCircleIcon } from '@phosphor-icons/react'
import React, { useEffect, useId, useRef, useState } from 'react'
import type { FieldError } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { MagnifyingGlassIcon } from '@/assets/icons/phosphorIcons'
import RcSesTooltip from '@/components/common/Tooltip'
import RcSesLoadingSpinner from '@/components/loaders/LoadingSpinner'
import normalizeSx from '@/components/utils/normalizeSx'
import '@/i18n/i18n'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import type { RcSesFormControlWrapperProps } from '../components/FormControlWrapper'
import { inputActionStyles, textFieldStyles } from './TextField.styles'

// Existing MUI field/input sx must remain authoritative over scoped DS defaults.
const consumerStyles = (sx: SxProps<Theme> | undefined): SxProps<Theme> =>
  normalizeSx(sx).map((entry) => (theme): SystemStyleObject<Theme> => {
    if (!entry || typeof entry === 'boolean') return {}
    return { '&&&&': typeof entry === 'function' ? entry(theme) : entry }
  })

export type TextFieldPreset = 'text' | 'search' | 'password' | 'phone' | 'number'

export interface TextFieldProps extends Omit<
  OutlinedTextFieldProps,
  | 'variant'
  | 'label'
  | 'helperText'
  | 'error'
  | 'select'
  | 'slotProps'
  | 'value'
  | 'defaultValue'
  | 'prefix'
> {
  preset?: TextFieldPreset
  value?: string | number
  defaultValue?: string | number
  label?: React.ReactNode
  helperText?: React.ReactNode
  error?: boolean
  /** Replaces helperText and also enables the error state. Validation belongs to the form. */
  errorText?: React.ReactNode
  explainer?: string
  /** Defaults to the translated optional marker; set null to omit it. */
  optionalLabel?: React.ReactNode
  leading?: React.ReactNode
  trailing?: React.ReactNode
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  readOnly?: boolean
  loading?: boolean
  /** Existing react-hook-form error API. */
  errors?: FieldError
  slotProps?: NonNullable<OutlinedTextFieldProps['slotProps']> & {
    field?: Partial<Omit<OutlinedTextFieldProps, 'variant'>>
    wrapper?: Partial<Omit<RcSesFormControlWrapperProps, 'children' | 'label' | 'errors'>>
  }
}

/** A native MUI text field with DS v2 anatomy. No form, masking or validation is added. */
const RcSesTextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  (props, ref) => {
    const { field: legacyField, wrapper, ...nativeSlots } = props.slotProps ?? {}
    const options = {
      ...legacyField,
      ...props,
      slotProps: { ...legacyField?.slotProps, ...nativeSlots },
    }
    const {
      preset = 'text',
      label,
      helperText: providedHelper,
      error = false,
      errorText: providedErrorText,
      errors,
      explainer,
      optionalLabel,
      leading,
      trailing,
      prefix,
      suffix,
      readOnly = false,
      loading = false,
      disabled = false,
      required = wrapper?.required ?? false,
      multiline = false,
      value,
      defaultValue,
      onChange,
      inputRef: consumerInputRef,
      id: providedId,
      slotProps,
      sx,
      className,
      type: providedType,
      'aria-describedby': describedBy,
      ...fieldProps
    } = options
    const { t } = useTranslation('input', { keyPrefix: 'components.RcSesTextField' })
    const generatedId = useId()
    const id = providedId ?? `rc-input-${generatedId}`
    const nativeRef = useRef<HTMLInputElement>(null)
    const forwardedRef = useForkRef(ref, consumerInputRef)
    const handleRef = useForkRef(nativeRef, forwardedRef)
    const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? '')
    const [showPassword, setShowPassword] = useState(false)
    const hasValue = String(value ?? uncontrolledValue).length > 0
    const errorText =
      providedErrorText ??
      errors?.message ??
      (errors?.type === 'required' ? t('required') : undefined)
    const helperText = providedHelper ?? wrapper?.description
    const isError = error || !!errorText || !!errors
    const supportText = isError ? errorText : helperText
    const supportId = supportText
      ? `${id}-${isError ? 'errors' : 'description'}`
      : undefined
    const marker = optionalLabel === undefined ? t('optional') : optionalLabel

    // register()/reset() may populate an uncontrolled DOM field through its ref.
    // Read it after commits so preset actions reflect the native value as well.
    useEffect(() => {
      if (value === undefined) setUncontrolledValue(nativeRef.current?.value ?? '')
    }, [props, value])

    // Native form.reset() does not fire input/change. Synchronize the Clear affordance
    // after the browser restores an uncontrolled field's default value.
    useEffect(() => {
      const form = nativeRef.current?.form
      let resetTimer: ReturnType<typeof setTimeout> | undefined
      const onReset = (event: Event) => {
        resetTimer = setTimeout(() => {
          if (!event.defaultPrevented)
            setUncontrolledValue(nativeRef.current?.value ?? '')
        }, 0)
      }
      form?.addEventListener('reset', onReset)
      return () => {
        form?.removeEventListener('reset', onReset)
        clearTimeout(resetTimer)
      }
    }, [])

    const clear = () => {
      const input = nativeRef.current
      if (!input || input.disabled || input.readOnly) return
      // Dispatch a real input event so onChange, controlled parents and RHF receive
      // the normal native event contract rather than a fabricated change object.
      const view = input.ownerDocument.defaultView
      if (!view) return
      const nativePrototype =
        input.tagName === 'TEXTAREA'
          ? view.HTMLTextAreaElement.prototype
          : view.HTMLInputElement.prototype
      Object.getOwnPropertyDescriptor(nativePrototype, 'value')?.set?.call(input, '')
      input.dispatchEvent(new view.Event('input', { bubbles: true }))
      input.focus()
    }

    let nativeType = providedType ?? 'text'
    if (!providedType && preset === 'phone') nativeType = 'tel'
    if (!providedType && preset === 'search') nativeType = 'search'
    if (preset === 'password') nativeType = showPassword ? 'text' : 'password'
    const iconSize = sizeTokens['icon-size-control']
    let presetLeading: React.ReactNode = prefix
    if (presetLeading === undefined && preset === 'phone') presetLeading = '+370'
    if (presetLeading === undefined && preset === 'search')
      presetLeading = <MagnifyingGlassIcon aria-hidden />

    let presetTrailing: React.ReactNode = suffix
    if (preset === 'search' && hasValue)
      presetTrailing = (
        <IconButton
          type='button'
          aria-label={t('clear')}
          disabled={disabled || readOnly}
          onClick={clear}
          sx={inputActionStyles}
        >
          <XCircleIcon size={iconSize} aria-hidden />
        </IconButton>
      )
    if (preset === 'password')
      presetTrailing = (
        <IconButton
          type='button'
          aria-label={t('togglePassword')}
          aria-pressed={showPassword}
          disabled={disabled}
          onMouseDown={(event) => event.preventDefault()}
          onClick={() => setShowPassword(!showPassword)}
          sx={inputActionStyles}
        >
          {showPassword ? (
            <EyeSlashIcon size={iconSize} aria-hidden />
          ) : (
            <EyeIcon size={iconSize} aria-hidden />
          )}
        </IconButton>
      )

    return (
      <Box
        className={['RcSesTextField-root', wrapper?.className].filter(Boolean).join(' ')}
        aria-disabled={disabled || undefined}
        data-leading-hidden={leading === null || prefix === null || undefined}
        data-trailing-hidden={trailing === null || suffix === null || undefined}
        data-multiline={multiline || undefined}
        data-side-label={
          (wrapper?.labelOnTop === false && !wrapper.hideLabel && !!label) || undefined
        }
        sx={[textFieldStyles, disabled ? { opacity: 0.6 } : {}]}
      >
        {(label || explainer || wrapper?.fieldSuffix) && (
          <Box
            className='RcSesTextField-labelRow'
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: spacingRoleBasedTokens['space-4'],
              minWidth: 0,
              ...(wrapper?.hideLabel && {
                position: 'absolute',
                width: '1px',
                height: '1px',
                overflow: 'hidden',
                clipPath: 'inset(50%)',
              }),
            }}
          >
            {label && (
              <FormLabel className='RcSesTextField-label' htmlFor={id}>
                {label}
                {!required && marker && (
                  <>
                    {' '}
                    <Box component='span' className='RcSesTextField-optional'>
                      {marker}
                    </Box>
                  </>
                )}
                {wrapper?.labelSubtitle && (
                  <span className='rc-ses-label-subtitle'>{wrapper.labelSubtitle}</span>
                )}
              </FormLabel>
            )}
            {explainer && !wrapper?.hideLabel && (
              <RcSesTooltip
                title={explainer}
                slotProps={{
                  trigger: {
                    'aria-label': t('explain', {
                      label: typeof label === 'string' ? label : t('field'),
                    }),
                    sx: { flexShrink: 0, m: 0, p: 0.25 },
                  },
                }}
              />
            )}
            {!wrapper?.hideLabel && wrapper?.fieldSuffix}
          </Box>
        )}
        <TextField
          {...fieldProps}
          id={id}
          className={['RcSesTextField-field', className].filter(Boolean).join(' ')}
          sx={consumerStyles(sx)}
          variant='outlined'
          fullWidth
          disabled={disabled}
          required={required}
          multiline={multiline}
          error={isError}
          type={nativeType}
          value={value}
          defaultValue={defaultValue}
          inputRef={handleRef}
          onChange={(event) => {
            setUncontrolledValue(event.target.value)
            onChange?.(event)
          }}
          slotProps={{
            ...slotProps,
            input: (ownerState) => {
              const consumer =
                typeof slotProps?.input === 'function'
                  ? slotProps.input(ownerState)
                  : slotProps?.input
              const start = leading === undefined ? presetLeading : leading
              const end = trailing === undefined ? presetTrailing : trailing
              let endAdornment = consumer?.endAdornment
              if (end !== undefined)
                endAdornment = end && (
                  <InputAdornment position='end'>{end}</InputAdornment>
                )
              if (loading)
                endAdornment = (
                  <InputAdornment position='end'>
                    <Box aria-label={t('loading')} role='status'>
                      <Box aria-hidden sx={{ display: 'flex' }}>
                        <RcSesLoadingSpinner size='medium' color='primary' />
                      </Box>
                    </Box>
                  </InputAdornment>
                )
              return {
                ...consumer,
                sx: consumerStyles(consumer?.sx),
                readOnly: readOnly || consumer?.readOnly,
                startAdornment:
                  start !== undefined
                    ? start && <InputAdornment position='start'>{start}</InputAdornment>
                    : consumer?.startAdornment,
                endAdornment,
              }
            },
            htmlInput: (ownerState) => {
              const consumer =
                typeof slotProps?.htmlInput === 'function'
                  ? slotProps.htmlInput(ownerState)
                  : slotProps?.htmlInput
              return {
                ...(preset === 'number' ? { inputMode: 'decimal' as const } : {}),
                ...consumer,
                'aria-describedby':
                  [
                    ...new Set(
                      [describedBy, consumer?.['aria-describedby'], supportId].filter(
                        Boolean,
                      ),
                    ),
                  ].join(' ') || undefined,
                'aria-invalid': isError || consumer?.['aria-invalid'],
                'aria-busy': loading || consumer?.['aria-busy'],
              }
            },
          }}
        />
        {supportText && (
          <FormHelperText id={supportId} error={isError} aria-live='polite'>
            {supportText}
          </FormHelperText>
        )}
      </Box>
    )
  },
)

RcSesTextField.displayName = 'RcSesTextField'
export default RcSesTextField
