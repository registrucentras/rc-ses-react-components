import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import { formControlDesktopLabelWidth } from '../components/FormControlWrapper/const/FormControlLayoutVariables'

// Scoped to TextField: the shared InputBase theme remains unchanged.
const fieldHeight = `calc(${typographyTokens['line-height-body-regular']} + 2 * ${spacingTokens['spacing-aliases-input-padding-y']} + 2 * ${borderTokens['stroke-1']})`

export const textFieldStyles = {
  display: 'flex',
  flexDirection: 'column',
  gap: spacingRoleBasedTokens['space-4'],
  minWidth: 0,
  width: '100%',
  '&[data-side-label="true"]': {
    display: 'grid',
    gridTemplateColumns: {
      xs: 'minmax(0, 1fr)',
      sm: `${formControlDesktopLabelWidth} minmax(0, 1fr)`,
    },
    '& .RcSesTextField-labelRow': {
      gridColumn: 1,
      alignSelf: 'center',
      justifyContent: { xs: 'flex-start', sm: 'flex-end' },
      paddingRight: { sm: spacingRoleBasedTokens['space-24'] },
      textAlign: { xs: 'left', sm: 'right' },
    },
    '& .RcSesTextField-field': {
      gridColumn: { xs: 1, sm: 2 },
      gridRow: { xs: 2, sm: 1 },
    },
    '& > .MuiFormHelperText-root': { gridColumn: { xs: 1, sm: 2 } },
  },
  '&&[data-multiline="true"] .MuiOutlinedInput-root': {
    height: 'auto',
    minHeight: fieldHeight,
    paddingBlock: spacingTokens['spacing-aliases-input-padding-y'],
  },
  '&&[data-leading-hidden="true"] .MuiOutlinedInput-root .MuiOutlinedInput-input': {
    paddingLeft: 0,
  },
  '&&[data-trailing-hidden="true"] .MuiOutlinedInput-root .MuiOutlinedInput-input': {
    paddingRight: 0,
  },
  '& .RcSesTextField-label': {
    color: colorTokens['text-default'],
    fontSize: typographyTokens['font-size-body-regular'],
    lineHeight: typographyTokens['line-height-body-regular'],
    fontWeight: 400,
    overflowWrap: 'anywhere',
    minWidth: 0,
  },
  '& .RcSesTextField-optional': {
    color: colorTokens['text-secondary'],
    fontSize: typographyTokens['font-size-body-small'],
    lineHeight: typographyTokens['line-height-body-small'],
  },
  '&& .MuiOutlinedInput-root': {
    height: fieldHeight,
    boxSizing: 'border-box',
    borderRadius: borderTokens['radius-input'],
    backgroundColor: colorTokens['surface-base'],
    padding: `0 ${spacingRoleBasedTokens['space-12']}`,
    gap: spacingRoleBasedTokens['space-8'],
    '& .MuiOutlinedInput-input': {
      padding: 0,
      paddingLeft: spacingRoleBasedTokens['space-8'],
      paddingRight: spacingRoleBasedTokens['space-8'],
      minWidth: 0,
      height: 'auto',
      fontSize: typographyTokens['font-size-body-regular'],
      lineHeight: typographyTokens['line-height-body-regular'],
      color: colorTokens['text-muted'],
      '&::placeholder': { color: colorTokens['text-muted'], opacity: 1 },
      '&::-webkit-search-cancel-button': { WebkitAppearance: 'none' },
      '&.Mui-disabled': {
        color: colorTokens['text-muted'],
        WebkitTextFillColor: colorTokens['text-muted'],
      },
    },
    '&.MuiInputBase-adornedStart .MuiOutlinedInput-input': { paddingLeft: 0 },
    '&.MuiInputBase-adornedEnd .MuiOutlinedInput-input': { paddingRight: 0 },
    '& .MuiInputAdornment-root': {
      margin: 0,
      color: colorTokens['text-secondary'],
      fontSize: typographyTokens['font-size-body-regular'],
      lineHeight: typographyTokens['line-height-body-regular'],
    },
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: colorTokens['border-strong'],
      borderWidth: borderTokens['stroke-1'],
      boxShadow: 'none',
    },
    '&:hover:not(.Mui-disabled):not(.Mui-readOnly):not(.Mui-focused) .MuiOutlinedInput-notchedOutline':
      { borderColor: colorTokens['control-border'] },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: colorTokens['status-error-border'],
    },
    '&.Mui-error:hover:not(.Mui-disabled):not(.Mui-readOnly):not(.Mui-focused)': {
      backgroundColor: colorTokens['status-error-bg'],
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: colorTokens['status-error-border'],
      },
    },
    '&.Mui-focused, &.Mui-focused.Mui-error': {
      backgroundColor: colorTokens['surface-base'],
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: colorTokens['border-focus'],
        borderWidth: borderTokens['border-focus'],
      },
    },
    '&.Mui-disabled': {
      backgroundColor: colorTokens['surface-muted'],
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: colorTokens['border-subtle'],
      },
    },
  },
  '&& .MuiFormHelperText-root': {
    margin: 0,
    fontSize: typographyTokens['font-size-body-caption'],
    lineHeight: typographyTokens['line-height-body-caption'],
    color: colorTokens['text-secondary'],
    '&.Mui-error': { color: colorTokens['status-error-text'] },
  },
} as const

export const inputActionStyles = {
  width: '20px',
  height: '20px',
  padding: 0,
  color: colorTokens['text-secondary'],
  '&::after': { content: '""', position: 'absolute', inset: '-2px' },
  '&.Mui-focusVisible': { boxShadow: effectTokens['focus-ring-default'] },
} as const
