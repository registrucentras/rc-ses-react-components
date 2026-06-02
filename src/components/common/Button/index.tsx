import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'
import { useTranslation } from 'react-i18next'

import RcSesLoadingSpinner, { getSpinnerColor } from '@/components/loaders/LoadingSpinner'
import { ButtonProps } from '@/types/buttons/ButtonProps'

const defaultProps: Partial<MuiButtonProps> = {
  color: 'primary',
  disabled: false,
  variant: 'contained',
}

const ICON_ONLY_SIZE_MAP = {
  small: '2.25rem',
  medium: '2.75rem',
  large: '3rem',
} as const

// TODO: use MUI's loading prop when MUI lib upgrade is done
type Props = ButtonProps & {
  loading?: boolean
}

function RcSesButton(props: Props) {
  const { t } = useTranslation('common')
  const {
    children,
    iconOnly,
    loading = false,
    size = 'medium',
    sx,
    variant,
    ...rest
  } = props

  const currentVariant = variant ?? defaultProps.variant
  const isIconOnly =
    !!iconOnly && (currentVariant === 'contained' || currentVariant === 'outlined')

  const showSpinnerInContent = loading && !isIconOnly && !rest.startIcon && !rest.endIcon
  const showSpinnerAsIcon = loading && isIconOnly

  const spinnerColor = getSpinnerColor(rest.color)
  const spinner = <RcSesLoadingSpinner color={spinnerColor} size={size} />

  const getIconDisplay = (icon: React.ReactNode) => {
    if (showSpinnerAsIcon) return undefined
    if (loading && !isIconOnly && icon) return spinner
    return icon
  }

  const displayIcon = getIconDisplay(rest.startIcon)
  const displayEndIcon = getIconDisplay(rest.endIcon)

  let displayContent = children
  if (showSpinnerInContent || showSpinnerAsIcon) displayContent = spinner

  return (
    <MuiButton
      {...defaultProps}
      {...rest}
      // TODO: use loading prop when MUI lib upgrade is done
      disabled={loading || rest.disabled}
      size={size}
      variant={currentVariant}
      aria-busy={loading || undefined}
      aria-label={
        loading && rest['aria-label']
          ? `${rest['aria-label']} – ${t('components.Button.loading')}`
          : rest['aria-label']
      }
      startIcon={displayIcon}
      endIcon={displayEndIcon}
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]),
        isIconOnly
          ? {
              minWidth: 0,
              padding: 0,
              width: ICON_ONLY_SIZE_MAP[size],
              height: ICON_ONLY_SIZE_MAP[size],
              '.MuiButton-startIcon, .MuiButton-endIcon': {
                margin: 0,
              },
            }
          : undefined,
      ]}
    >
      {displayContent}
    </MuiButton>
  )
}

export default RcSesButton
