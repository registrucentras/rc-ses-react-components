import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

const body = {
  fontSize: typographyTokens['font-size-body-regular'],
  lineHeight: typographyTokens['line-height-body-regular'],
}
const small = {
  fontSize: typographyTokens['font-size-body-small'],
  lineHeight: typographyTokens['line-height-body-small'],
}

// Shared Input states come from the theme; only Select parts are styled here.
export const selectStyle = {
  ...body,
  '& .rc-ses-select-single-value': { ...body, color: colorTokens['text-default'] },
  '& .MuiOutlinedInput-root.Mui-disabled .rc-ses-select-single-value': {
    color: colorTokens['text-disabled'],
  },
  '& .MuiChip-root': {
    ...small,
    bgcolor: colorTokens['surface-brand-subtle'],
    color: colorTokens['text-link'],
    borderRadius: borderTokens['radius-chip'],
    '& .MuiChip-deleteIcon': { color: colorTokens['text-secondary'] },
  },
  '& .MuiAutocomplete-clearIndicator, & .MuiAutocomplete-popupIndicator': {
    color: colorTokens['text-secondary'],
  },
}

export const paperStyle = {
  ...body,
  bgcolor: colorTokens['surface-base'],
  color: colorTokens['text-default'],
  border: `${borderTokens['border-default']} solid ${colorTokens['border-subtle']}`,
  // The existing popup radius has no dedicated DS role; retain its primitive.
  borderRadius: borderTokens['radius-12'],
  boxShadow: effectTokens['elevation-md'],
  '& .MuiAutocomplete-listbox': {
    py: spacingRoleBasedTokens['space-8'],
    '& .MuiAutocomplete-groupLabel': {
      ...small,
      color: colorTokens['text-default'],
      padding: `${spacingRoleBasedTokens['padding-sm']} ${spacingRoleBasedTokens['padding-md']}`,
    },
    '& .MuiAutocomplete-option': {
      ...body,
      color: colorTokens['text-default'],
      padding: `${spacingRoleBasedTokens['padding-sm']} ${spacingRoleBasedTokens['padding-md']}`,
      '&:hover': { bgcolor: colorTokens['surface-muted'] },
      '&.Mui-focused:not(:hover)': {
        bgcolor: 'transparent',
        boxShadow: `inset 0 0 0 ${borderTokens['border-focus']} ${colorTokens['border-focus']}`,
      },
      '&.Mui-selected, &[aria-selected="true"]': {
        bgcolor: colorTokens['surface-brand-subtle'],
        '&:hover, &.Mui-focused': { bgcolor: colorTokens['surface-brand-subtle'] },
      },
      '&[aria-disabled="true"]': { color: colorTokens['text-disabled'] },
      '&.rc-ses-select-option--indent-single': { pl: spacingRoleBasedTokens['space-40'] },
      '&.rc-ses-select-option--indent-multi': { pl: spacingRoleBasedTokens['space-32'] },
      '& .rc-ses-select-option-label': { ...body },
      '&.Mui-selected .rc-ses-select-option-label': { color: colorTokens['text-link'] },
      '& .rc-ses-select-option-description': {
        fontSize: typographyTokens['font-size-body-micro'],
        lineHeight: typographyTokens['line-height-body-micro'],
        color: colorTokens['text-secondary'],
        mt: spacingRoleBasedTokens['gap-xs'],
      },
    },
  },
}
