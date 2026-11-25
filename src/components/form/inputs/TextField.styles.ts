import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

// Scoped to TextField: the shared InputBase theme remains unchanged.
const fieldHeight = `calc(${typographyTokens['line-height-body-regular']} + 2 * ${spacingTokens['spacing-aliases-input-padding-y']} + 2 * ${borderTokens['stroke-1']})`

export const textFieldStyles = {
  minWidth: 0,
  width: '100%',
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
      color: colorTokens['text-default'],
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
      opacity: 0.6,
      backgroundColor: colorTokens['surface-muted'],
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: colorTokens['border-subtle'],
      },
    },
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
