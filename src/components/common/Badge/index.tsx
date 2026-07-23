import { Box } from '@mui/material'
import { useTranslation } from 'react-i18next'

import CircleFilledIcon from '@/assets/icons/CircleFilledIcon'
import CloseIcon from '@/assets/icons/CloseIcon'
import { common, error, grey, primary, secondary, warning } from '@/theme/palette'

export type RcSesBadgeProps = {
  label: string
  variant: 'neutral' | 'success' | 'warning' | 'error' | 'info' | 'brand'
  size: 'small' | 'regular'
  showIcon?: boolean
  showClose?: boolean
  onClose?: () => void
}

type VariantStyle = {
  border: string
  background: string
  iconColor: string
  color: string
}

const variantStyles: Record<RcSesBadgeProps['variant'], VariantStyle> = {
  neutral: {
    border: grey['300'],
    background: common.white,
    iconColor: grey['900'],
    color: grey['900'],
  },
  success: {
    border: secondary['500'],
    background: secondary['100'],
    iconColor: secondary['600'],
    color: secondary['800'],
  },
  warning: {
    border: warning['400'],
    background: warning['100'],
    iconColor: warning['500'],
    color: warning['800'],
  },
  error: {
    border: error['500'],
    background: error['100'],
    iconColor: error['600'],
    color: error['700'],
  },
  info: {
    border: primary['400'],
    background: primary['100'],
    iconColor: primary['500'],
    color: primary['800'],
  },
  brand: {
    border: primary['500'],
    background: primary['200'],
    iconColor: primary['950'],
    color: primary['950'],
  },
}

type SizeStyle = {
  height: string
  padding: string
  fontSize: string
  lineHeight: string
}

const sizeStyles: Record<RcSesBadgeProps['size'], SizeStyle> = {
  small: {
    height: '1.625rem',
    padding: '0.25rem 0.5rem',
    fontSize: '0.8125rem',
    lineHeight: '1.125rem',
  },
  regular: {
    height: '2.125rem',
    padding: '0.375rem 0.75rem',
    fontSize: '0.9375rem',
    lineHeight: '1.375rem',
  },
}

function RcSesBadge(props: RcSesBadgeProps) {
  const { label, variant, size, showIcon = true, showClose = false, onClose } = props
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesBadge' })

  const variantStyle = variantStyles[variant]
  const sizeStyle = sizeStyles[size]

  const baseStyle = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    verticalAlign: 'baseline',
    gap: '0.25rem',
    maxWidth: '100%',
    borderRadius: '9999px',
    border: `1px solid ${variantStyle.border}`,
    background: variantStyle.background,
    color: variantStyle.color,
    ...sizeStyle,
  }

  return (
    <Box sx={baseStyle}>
      {showIcon && (
        <CircleFilledIcon
          size={14}
          fillColor={variantStyle.iconColor}
          aria-hidden
          focusable={false}
          style={{ flexShrink: 0 }}
        />
      )}
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
