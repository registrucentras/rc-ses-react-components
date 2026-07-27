import { Box, Button, useTheme } from '@mui/material'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningCircleIcon,
  WarningIcon,
} from '@phosphor-icons/react'
import React from 'react'
import { useTranslation } from 'react-i18next'

import CloseIcon from '@/assets/icons/CloseIcon'
import { error, grey, primary, secondary, warning } from '@/theme/palette'

export type RcSesInlineAlertProps = {
  children: React.ReactNode
  variant?: 'neutral' | 'info' | 'success' | 'warning' | 'error'
  showIcon?: boolean
  showClose?: boolean
  showAction?: boolean
  actionLabel?: string
  onActionClick?: () => void
  onClose?: () => void
}

type VariantStyle = {
  background: string
  border: string
  iconColor: string
  color: string
  icon: typeof InfoIcon
  role: 'status' | 'alert'
}

const variantStyles: Record<
  NonNullable<RcSesInlineAlertProps['variant']>,
  VariantStyle
> = {
  neutral: {
    background: grey['50'],
    border: grey['200'],
    iconColor: grey['600'],
    color: grey['900'],
    icon: InfoIcon,
    role: 'status',
  },
  info: {
    background: primary['100'],
    border: primary['300'],
    iconColor: primary['600'],
    color: primary['900'],
    icon: InfoIcon,
    role: 'status',
  },
  success: {
    background: secondary['100'],
    border: secondary['300'],
    iconColor: secondary['600'],
    color: secondary['900'],
    icon: CheckCircleIcon,
    role: 'status',
  },
  warning: {
    background: warning['100'],
    border: warning['300'],
    iconColor: warning['600'],
    color: warning['900'],
    icon: WarningIcon,
    role: 'alert',
  },
  error: {
    background: error['100'],
    border: error['300'],
    iconColor: error['600'],
    color: error['900'],
    icon: WarningCircleIcon,
    role: 'alert',
  },
}

function RcSesInlineAlert(props: RcSesInlineAlertProps) {
  const {
    children,
    variant = 'neutral',
    showIcon = true,
    showClose = true,
    showAction = true,
    actionLabel,
    onActionClick,
    onClose,
  } = props
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesInlineAlert' })

  const theme = useTheme()

  const variantStyle = variantStyles[variant]
  const StatusIcon = variantStyle.icon

  const hasAction = showAction && Boolean(actionLabel)
  const hasClose = showClose && Boolean(onClose)

  const wide = `@container (min-width: ${theme.breakpoints.values.sm}px)`

  return (
    <Box
      role={variantStyle.role}
      sx={{ containerType: 'inline-size', width: '100%' }}
      aria-live={variantStyle.role === 'alert' ? 'assertive' : 'polite'}
    >
      <Box
        sx={{
          display: 'grid',
          alignItems: 'start',
          padding: theme.spacing(2.25, 1.85),
          borderRadius: '0.5rem',
          border: `1px solid ${variantStyle.border}`,
          backgroundColor: variantStyle.background,
          color: variantStyle.color,
          gridTemplateColumns: 'auto 1fr auto',
          gridTemplateAreas: '"icon text close" "icon action action"',
          [wide]: {
            gridTemplateColumns: 'auto 1fr max-content auto',
            gridTemplateAreas: '"icon text action close"',
          },
        }}
      >
        {showIcon && (
          <StatusIcon
            size={21}
            weight='regular'
            color={variantStyle.iconColor}
            focusable={false}
            style={{ gridArea: 'icon', marginRight: theme.spacing(1.5) }}
            aria-hidden
          />
        )}
        <Box
          sx={{
            gridArea: 'text',
            minWidth: 0,
            fontSize: theme.typography.body2.fontSize,
            lineHeight: '1.375rem',
            a: { color: 'inherit' },
          }}
        >
          {children}
        </Box>
        {hasAction && (
          <Button
            variant='link'
            sx={{
              gridArea: 'action',
              justifySelf: 'end',
              height: 'auto',
              minWidth: 0,
              padding: 0,
              fontSize: theme.typography.body2.fontSize,
              fontWeight: theme.typography.fontWeightMedium,
              lineHeight: '1.375rem',
              whiteSpace: 'nowrap',
              marginTop: theme.spacing(0.5),
              [wide]: {
                marginTop: 0,
                marginLeft: theme.spacing(1.5),
              },
            }}
            onClick={onActionClick}
          >
            {actionLabel}
          </Button>
        )}
        {hasClose && (
          <Box
            component='button'
            type='button'
            onClick={onClose}
            aria-label={t('close')}
            sx={{
              gridArea: 'close',
              marginLeft: theme.spacing(1.5),
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
              border: 'none',
              background: 'none',
              cursor: 'pointer',
              opacity: 0.8,
              '&:hover': { opacity: 1 },
            }}
          >
            <CloseIcon
              size={22}
              fillColor={variantStyle.color}
              focusable={false}
              aria-hidden
            />
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default RcSesInlineAlert
