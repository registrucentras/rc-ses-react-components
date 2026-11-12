import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import { CircleFilledIcon, CloseIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

export interface RcSesBadgeProps {
  label: string
  variant: 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'brand'
  size: 'small' | 'regular'
  showIcon?: boolean
  icon?: React.ReactNode
  showClose?: boolean
  onClose?: () => void
}

interface VariantStyle {
  border: string
  background: string
  iconColor: string
  color: string
}

const variantStyles: Record<RcSesBadgeProps['variant'], VariantStyle> = {
  neutral: {
    border: colorTokens['border-default'],
    background: colorTokens['surface-base'],
    iconColor: colorTokens['text-default'],
    color: colorTokens['text-default'],
  },
  success: {
    border: colorTokens['status-success-border'],
    background: colorTokens['status-success-bg'],
    iconColor: colorTokens['status-success-icon'],
    color: colorTokens['status-success-text'],
  },
  warning: {
    border: colorTokens['status-warning-border'],
    background: colorTokens['status-warning-bg'],
    iconColor: colorTokens['status-warning-icon'],
    color: colorTokens['status-warning-text'],
  },
  error: {
    border: colorTokens['status-error-border'],
    background: colorTokens['status-error-bg'],
    iconColor: colorTokens['status-error-icon'],
    color: colorTokens['status-error-text'],
  },
  info: {
    border: colorTokens['status-info-border'],
    background: colorTokens['status-info-bg'],
    iconColor: colorTokens['status-info-icon'],
    color: colorTokens['status-info-text'],
  },
  brand: {
    border: colorTokens['action-primary-bg-pressed'],
    background: colorTokens['action-primary-bg'],
    iconColor: colorTokens['action-primary-text'],
    color: colorTokens['action-primary-text'],
  },
}

interface SizeStyle {
  padding: string
  fontSize: string
  lineHeight: string
}

const sizeStyles: Record<RcSesBadgeProps['size'], SizeStyle> = {
  small: {
    padding: `${spacingTokens['spacing-aliases-badge-padding-y-small']} ${spacingTokens['spacing-aliases-badge-padding-x-small']}`,
    fontSize: typographyTokens['font-size-body-caption'],
    lineHeight: typographyTokens['line-height-body-caption'],
  },
  regular: {
    padding: `${spacingTokens['spacing-aliases-badge-padding-y-regular']} ${spacingTokens['spacing-aliases-badge-padding-x-regular']}`,
    fontSize: typographyTokens['font-size-body-caption'],
    lineHeight: typographyTokens['line-height-body-caption'],
  },
}

function RcSesBadge(props: RcSesBadgeProps) {
  const {
    label,
    variant,
    size,
    showIcon = true,
    icon,
    showClose = false,
    onClose,
  } = props
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesBadge' })

  const variantStyle = variantStyles[variant]
  const sizeStyle = sizeStyles[size]

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'baseline',
    gap: spacingTokens['spacing-aliases-badge-icon-text-gap'],
    maxWidth: '100%',
    borderRadius: borderTokens['radius-pill'],
    border: `${borderTokens['stroke-1']} solid ${variantStyle.border}`,
    background: variantStyle.background,
    color: variantStyle.color,
    ...sizeStyle,
  }

  return (
    <Box sx={baseStyle}>
      {showIcon &&
        (icon ? (
          <Box
            aria-hidden
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: 14,
              height: 14,
              flexShrink: 0,
            }}
          >
            {icon}
          </Box>
        ) : (
          <CircleFilledIcon
            size={14}
            fillColor={variantStyle.iconColor}
            aria-hidden
            focusable={false}
            style={{ flexShrink: 0 }}
          />
        ))}
      <Box
        component='span'
        title={label}
        sx={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          minWidth: 0,
        }}
      >
        {label}
      </Box>
      {showClose && (
        <Box
          component='button'
          type='button'
          onClick={onClose}
          aria-label={t('aria.close', { label })}
          sx={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            minWidth: 16,
            minHeight: 16,
            padding: 0,
            border: 'none',
            background: 'none',
            cursor: onClose ? 'pointer' : 'default',
            opacity: 0.6,
            '&:hover': { opacity: 1 },
          }}
        >
          <CloseIcon
            size={14}
            fillColor={variantStyle.iconColor}
            aria-hidden
            focusable={false}
          />
        </Box>
      )}
    </Box>
  )
}

export default RcSesBadge
