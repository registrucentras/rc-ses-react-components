import { Button, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import {
  CheckCircleFillIcon,
  InfoFillIcon,
  QuestionFillIcon,
  WarningFillIcon,
} from '@/assets/icons/phosphorIcons'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import RcSesDialog, { RcSesDialogProps } from '../Dialog'

export type ModalVariant = 'destructive' | 'confirm' | 'success' | 'info'

const VARIANT_CONFIG: Record<ModalVariant, { icon: ReactNode }> = {
  destructive: {
    icon: (
      <WarningFillIcon
        size={36}
        weight='regular'
        fillColor={colorTokens['status-error-icon']}
      />
    ),
  },
  confirm: {
    icon: (
      <QuestionFillIcon
        size={36}
        weight='regular'
        fillColor={colorTokens['status-info-icon']}
      />
    ),
  },
  success: {
    icon: (
      <CheckCircleFillIcon
        size={36}
        weight='regular'
        fillColor={colorTokens['status-success-icon']}
      />
    ),
  },
  info: {
    icon: (
      <InfoFillIcon
        size={36}
        weight='regular'
        fillColor={colorTokens['status-info-icon']}
      />
    ),
  },
}

export interface RcSesModalProps extends Omit<
  RcSesDialogProps,
  'children' | 'dialogTitle' | 'actions'
> {
  title: string
  message: ReactNode
  variant?: ModalVariant
  showIcon?: boolean
  onPrimaryAction?: () => void
  onSecondaryAction?: () => void
  primaryActionLabel?: string
  secondaryActionLabel?: string
  actions?: ReactNode
}

function RcSesModal({
  title,
  message,
  variant = 'info',
  showIcon = false,
  onPrimaryAction,
  onSecondaryAction,
  primaryActionLabel,
  secondaryActionLabel,
  actions: customActions,
  ...props
}: RcSesModalProps) {
  const { t } = useTranslation('input', { keyPrefix: 'components.Modal' })
  const config = VARIANT_CONFIG[variant]

  const getPrimaryLabel = () => {
    if (primaryActionLabel) return primaryActionLabel
    return t(`actions.${variant}.primary`)
  }

  const getSecondaryLabel = () => {
    if (secondaryActionLabel) return secondaryActionLabel
    return t('actions.cancel')
  }

  const titleContent = showIcon ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: spacingRoleBasedTokens['space-12'],
      }}
    >
      <div
        aria-hidden='true'
        style={{
          display: 'flex',
          width: spacingRoleBasedTokens['space-36'],
          height: spacingRoleBasedTokens['space-36'],
        }}
      >
        {config.icon}
      </div>
      {title}
    </div>
  ) : (
    title
  )

  const defaultActions = (
    <>
      {(variant === 'destructive' || variant === 'confirm') && (
        <Button onClick={onSecondaryAction} variant='outlined' color='grey'>
          {getSecondaryLabel()}
        </Button>
      )}
      <Button
        onClick={onPrimaryAction}
        variant='contained'
        color={variant === 'destructive' ? 'error' : 'primary'}
      >
        {getPrimaryLabel()}
      </Button>
    </>
  )

  const actions = customActions || defaultActions

  return (
    <RcSesDialog dialogTitle={titleContent} actions={actions} {...props}>
      <Typography
        variant='body1'
        sx={{
          color: colorTokens['text-default'],
          fontSize: typographyTokens['font-size-body-regular'],
          lineHeight: typographyTokens['line-height-body-regular'],
        }}
      >
        {message}
      </Typography>
    </RcSesDialog>
  )
}

export default RcSesModal
