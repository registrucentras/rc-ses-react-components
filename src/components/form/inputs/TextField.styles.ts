import { styled } from '@mui/material/styles'

import RcSesFormControlWrapper from '@/components/form/components/FormControlWrapper'
import '@/theme/tokens.css'

const TextFieldControl = styled(RcSesFormControlWrapper, {
  shouldForwardProp: (prop) => prop !== 'fieldDisabled',
})<{ fieldDisabled?: boolean }>(({ labelOnTop, fieldDisabled }) => ({
  marginBlock: 'var(--rc-space-8)',
  '&& .MuiFormLabel-root': {
    color: fieldDisabled
      ? 'var(--rc-color-text-disabled)'
      : 'var(--rc-color-text-default)',
    fontSize: labelOnTop
      ? 'var(--rc-typography-font-size-body-caption)'
      : 'var(--rc-typography-font-size-body-regular)',
    lineHeight: labelOnTop
      ? 'var(--rc-typography-line-height-body-caption)'
      : 'var(--rc-typography-line-height-body-regular)',
    paddingRight: 'var(--rc-space-24)',
    '& .MuiFormLabel-asterisk': {
      color: 'var(--rc-color-status-error-border)',
      marginLeft: 'var(--rc-space-2)',
    },
    '& .rc-ses-label-subtitle': {
      color: 'var(--rc-color-text-secondary)',
      fontSize: 'var(--rc-typography-font-size-body-caption)',
      lineHeight: 'var(--rc-typography-line-height-body-caption)',
      marginTop: 'var(--rc-space-2)',
    },
  },
  '&& .MuiFormHelperText-root': {
    color: fieldDisabled
      ? 'var(--rc-color-text-disabled)'
      : 'var(--rc-color-text-secondary)',
    fontSize: 'var(--rc-typography-font-size-body-caption)',
    lineHeight: 'var(--rc-typography-line-height-body-caption)',
    fontStyle: 'normal',
    fontWeight: 400,
    marginInline: 'var(--rc-space-0)',
    marginTop: 'var(--rc-space-4)',
    '&.Mui-error': {
      color: fieldDisabled
        ? 'var(--rc-color-text-disabled)'
        : 'var(--rc-color-status-error-border)',
    },
  },
}))

export const textFieldInputStyles = {
  backgroundColor: 'var(--rc-color-surface-base)',
  borderRadius: 'var(--rc-radius-input)',
  gap: 'var(--rc-space-8)',
  '& .MuiInputBase-input': {
    color: 'var(--rc-color-text-default)',
    fontSize: 'var(--rc-typography-font-size-body-regular)',
    lineHeight: 'var(--rc-typography-line-height-body-regular)',
    height: 'auto',
    padding: 'var(--rc-input-padding-y) var(--rc-space-12)',
    '&::placeholder': { color: 'var(--rc-color-text-secondary)', opacity: 1 },
  },
  '& .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--rc-color-border-subtle)',
    borderWidth: 'var(--rc-stroke-1)',
    borderRadius: 'var(--rc-radius-input)',
    boxShadow: 'none',
  },
  '&:hover:not(.Mui-disabled):not(.Mui-readOnly) .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--rc-color-border-default)',
  },
  '&.Mui-error .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--rc-color-status-error-border) !important',
  },
  '&.Mui-error:hover:not(.Mui-disabled):not(.Mui-readOnly)': {
    backgroundColor: 'var(--rc-color-status-error-bg)',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline, &.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline':
    {
      borderColor: 'var(--rc-color-border-focus) !important',
      borderWidth: 'var(--rc-stroke-2)',
      borderRadius: 'var(--rc-radius-input)',
      boxShadow: 'none',
    },
  '&.Mui-readOnly .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--rc-color-border-subtle) !important',
    borderWidth: 'var(--rc-stroke-1) !important',
  },
  '&.Mui-readOnly.Mui-focused .MuiOutlinedInput-notchedOutline': {
    borderColor: 'var(--rc-color-border-focus) !important',
    borderWidth: 'var(--rc-stroke-2) !important',
  },
  '&.Mui-disabled': {
    backgroundColor: 'var(--rc-color-surface-muted) !important',
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: 'var(--rc-color-border-subtle) !important',
    },
    '& .MuiInputBase-input': {
      color: 'var(--rc-color-text-disabled) !important',
      WebkitTextFillColor: 'var(--rc-color-text-disabled)',
      '&::placeholder': { color: 'var(--rc-color-text-disabled)' },
    },
  },
  '&.MuiInputBase-adornedStart': {
    paddingLeft: 'var(--rc-space-12) !important',
    '& .MuiInputBase-input': { paddingLeft: 'var(--rc-space-0)' },
  },
  '&.MuiInputBase-adornedEnd': {
    paddingRight: 'var(--rc-space-12) !important',
    '& .MuiInputBase-input': { paddingRight: 'var(--rc-space-0)' },
  },
  '& .MuiInputAdornment-root': {
    color: 'var(--rc-color-text-secondary)',
    margin: 'var(--rc-space-0)',
    '& > svg': {
      display: 'block',
      width: 'var(--rc-icon-size-control)',
      height: 'var(--rc-icon-size-control)',
    },
    '& .MuiTypography-root': {
      color: 'inherit',
      fontSize: 'var(--rc-typography-font-size-body-regular)',
      lineHeight: 'var(--rc-typography-line-height-body-regular)',
    },
  },
} as const

export default TextFieldControl
