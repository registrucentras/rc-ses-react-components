import { Button, Typography } from '@mui/material'
import { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import QuestionFillIcon from '@/assets/icons/QuestionFillIcon'
import WarningFillIcon from '@/assets/icons/WarningFillIcon'
import palette from '@/theme/palette'

import RcSesDialog, { RcSesDialogProps } from '../Dialog'

export type ModalVariant = 'destructive' | 'confirm' | 'success' | 'info'

const VARIANT_CONFIG: Record<ModalVariant, { icon: ReactNode }> = {
  destructive: {
    icon: <WarningFillIcon size={36} weight='regular' fillColor={palette.error['600']} />,
  },
  confirm: {
    icon: <QuestionFillIcon size={36} weight='regular' fillColor={palette.grey['700']} />,
  },
  success: {
    icon: (
      <CheckCircleFillIcon
        size={36}
        weight='regular'
        fillColor={palette.secondary['600']}
      />
    ),
  },
  info: {
    icon: <InfoFillIcon size={36} weight='regular' fillColor={palette.primary['500']} />,
  },
}

export interface RcSesModalProps
  extends Omit<RcSesDialogProps, 'children' | 'dialogTitle' | 'actions'> {
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
        gap: 8,
      }}
    >
      <div aria-hidden='true'>{config.icon}</div>
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
      <Typography variant='body1'>{message}</Typography>
    </RcSesDialog>
  )
}

export default RcSesModal
