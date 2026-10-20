import { styled } from '@mui/material/styles'

import { borderTokens as border } from '@/theme/borderTokens'
import { colorTokens as color } from '@/theme/colorTokens'
import { effectTokens as effect } from '@/theme/effectTokens'
import { spacingRoleBasedTokens as space } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens as typography } from '@/theme/typographyTokens'

import FormControlWrapper from '../../components/FormControlWrapper'

const body = {
  fontSize: typography['font-size-body-regular'],
  lineHeight: typography['line-height-body-regular'],
}
const small = {
  fontSize: typography['font-size-body-small'],
  lineHeight: typography['line-height-body-small'],
}

// Style the existing wrapper without adding a DOM element or changing its API.
export const SelectWrapper = styled(FormControlWrapper)({
  marginBlock: space['space-8'],
  '& .MuiFormLabel-root': { ...small, color: color['text-default'] },
  '& .MuiFormLabel-root.Mui-focused': { color: color['text-default'] },
  '& .MuiFormHelperText-root': {
    fontSize: typography['font-size-body-micro'],
    lineHeight: typography['line-height-body-micro'],
    color: color['text-secondary'],
  },
  '& .MuiFormHelperText-root.Mui-error': { color: color['status-error-text'] },
})

export const selectStyle = {
  ...body,
  '& .MuiOutlinedInput-root': {
    color: color['text-default'],
    bgcolor: color['surface-base'],
    borderRadius: border['radius-input'],
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: color['control-border'],
      borderWidth: border['border-default'],
      borderRadius: 'inherit',
      boxShadow: 'none !important',
    },
    '&:hover:not(.Mui-disabled):not(.Mui-focused):not(.Mui-error) .MuiOutlinedInput-notchedOutline':
      {
        borderColor: `${color['border-strong']} !important`,
      },
    '&.Mui-error .MuiOutlinedInput-notchedOutline': {
      borderColor: `${color['status-error-border']} !important`,
    },
    '&.Mui-focused': {
      borderRadius: border['radius-input'],
      boxShadow: effect['focus-ring-default'],
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${color['border-focus']} !important`,
        borderRadius: 'inherit',
      },
    },
    '&.Mui-focused.Mui-error': {
      boxShadow: effect['focus-ring-error'],
      '& .MuiOutlinedInput-notchedOutline': {
        borderColor: `${color['status-error-border']} !important`,
      },
    },
    '&.Mui-disabled': {
      bgcolor: `${color['control-disabled']} !important`,
      '& .rc-ses-select-single-value': { color: color['text-disabled'] },
      '& .MuiInputBase-input': {
        color: `${color['text-disabled']} !important`,
        WebkitTextFillColor: color['text-disabled'],
      },
    },
    '& .MuiInputBase-input': { ...body, color: color['text-default'] },
    '& .MuiInputBase-input::placeholder': { color: color['text-secondary'] },
  },
  '& .rc-ses-select-single-value': { ...body, color: color['text-default'] },
  '& .MuiChip-root': {
    ...small,
    bgcolor: color['surface-brand-subtle'],
    color: color['text-link'],
    borderRadius: border['radius-chip'],
    '& .MuiChip-deleteIcon': { color: color['text-secondary'] },
  },
  '& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator': {
    color: color['text-secondary'],
  },
}

export const paperStyle = {
  ...body,
  bgcolor: color['surface-base'],
  color: color['text-default'],
  border: `${border['border-default']} solid ${color['border-subtle']}`,
  // The existing popup radius has no dedicated DS role; retain its primitive.
  borderRadius: border['radius-12'],
  boxShadow: effect['elevation-md'],
  '& .MuiAutocomplete-listbox': {
    py: space['space-8'],
    '& .MuiAutocomplete-groupLabel': {
      ...small,
      color: color['text-default'],
      padding: `${space['padding-sm']} ${space['padding-md']}`,
    },
    '& .MuiAutocomplete-option': {
      ...body,
      color: color['text-default'],
      padding: `${space['padding-sm']} ${space['padding-md']}`,
      '&:hover': { bgcolor: color['surface-muted'] },
      '&.Mui-focused:not(:hover)': {
        bgcolor: 'transparent',
        boxShadow: `inset 0 0 0 ${border['border-focus']} ${color['border-focus']}`,
      },
      '&.Mui-selected, &[aria-selected="true"]': {
        bgcolor: color['surface-brand-subtle'],
        '&:hover, &.Mui-focused': { bgcolor: color['surface-brand-subtle'] },
      },
      '&.Mui-disabled': { color: color['text-disabled'] },
      '&.rc-ses-select-option--indent-single': { pl: space['space-40'] },
      '&.rc-ses-select-option--indent-multi': { pl: space['space-32'] },
      '& .rc-ses-select-option-label': { ...body },
      '&.Mui-selected .rc-ses-select-option-label': { color: color['text-link'] },
      '& .rc-ses-select-option-description': {
        fontSize: typography['font-size-body-micro'],
        lineHeight: typography['line-height-body-micro'],
        color: color['text-secondary'],
        mt: space['gap-xs'],
      },
    },
  },
}
