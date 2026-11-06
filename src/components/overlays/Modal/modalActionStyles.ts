import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

// Keep the modal's built-in actions on Button/Regular even in applications
// that still use the legacy global Button theme.
const modalActionStyles = {
  borderRadius: borderTokens['radius-button'],
  fontSize: typographyTokens['font-size-button-regular'],
  lineHeight: typographyTokens['line-height-button-regular'],
  fontWeight: 500,
  height: `calc(${typographyTokens['line-height-button-regular']} + 2 * ${spacingRoleBasedTokens['button-padding-y-regular']})`,
  padding: `${spacingRoleBasedTokens['button-padding-y-regular']} ${spacingRoleBasedTokens['space-20']}`,
  boxShadow: 'none',
  '&:hover': { boxShadow: 'none' },
} as const

export const secondaryActionStyles = {
  ...modalActionStyles,
  color: colorTokens['action-secondary-text'],
  backgroundColor: colorTokens['action-secondary-bg'],
  border: `${borderTokens['stroke-1']} solid ${colorTokens['action-secondary-border']}`,
  '&:hover': {
    ...modalActionStyles['&:hover'],
    color: colorTokens['action-secondary-text'],
    backgroundColor: colorTokens['action-secondary-bg-hover'],
    borderColor: colorTokens['action-secondary-border-hover'],
  },
}

export const primaryActionStyles = (destructive: boolean) => ({
  ...modalActionStyles,
  color: colorTokens[destructive ? 'action-destructive-text' : 'action-primary-text'],
  backgroundColor:
    colorTokens[destructive ? 'action-destructive-bg' : 'action-primary-bg'],
  '&:hover': {
    ...modalActionStyles['&:hover'],
    color: colorTokens[destructive ? 'action-destructive-text' : 'action-primary-text'],
    backgroundColor:
      colorTokens[
        destructive ? 'action-destructive-bg-hover' : 'action-primary-bg-hover'
      ],
  },
  '&:active': {
    backgroundColor:
      colorTokens[
        destructive ? 'action-destructive-bg-pressed' : 'action-primary-bg-pressed'
      ],
  },
})
