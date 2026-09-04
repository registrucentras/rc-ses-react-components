import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'
import type { ButtonTypeMap } from '@mui/material/Button'
import type { ExtendButtonBase } from '@mui/material/ButtonBase'
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

type Props = ButtonProps

function RcSesButtonComponent(props: Props) {
  const { t } = useTranslation('common')
  const {
    children,
    iconOnly,
    loading = false,
    loadingIndicator,
    loadingPosition,
    size = 'medium',
    sx,
    variant,
    ...rest
  } = props

  const currentVariant = variant ?? defaultProps.variant
  const isIconOnly =
    !!iconOnly && (currentVariant === 'contained' || currentVariant === 'outlined')

  // MUI centres the spinner over the label but keeps the label visible for
  // width stability; Figma wants the label hidden while the spinner spins.
  // Only relevant for the default/`center` position — `start`/`end` reserve
  // their own slot next to a still-visible label.
  const hideLabelWhileLoading =
    loading && (loadingPosition === undefined || loadingPosition === 'center')

  // Match Figma: RcSesLoadingSpinner replaces MUI's default CircularProgress
  // so contained/outlined/link variants share the same spinner treatment.
  const indicator = loadingIndicator ?? (
    <RcSesLoadingSpinner color={getSpinnerColor(rest.color)} size={size} />
  )

  return (
    <MuiButton
      {...defaultProps}
      {...rest}
      size={size}
      variant={currentVariant}
      loading={loading}
      loadingIndicator={indicator}
      loadingPosition={loadingPosition}
      aria-busy={loading || undefined}
      aria-label={
        loading && rest['aria-label']
          ? `${rest['aria-label']} – ${t('components.Button.loading')}`
          : rest['aria-label']
      }
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
        hideLabelWhileLoading
          ? {
              // Hide the label + startIcon + endIcon in place so the button
              // keeps its natural width while the centred spinner takes over.
              // Target every direct child except the loadingIndicator so the
              // spinner stays fully visible. Also hide direct SVG children
              // (icon-only buttons render the icon as a direct child).
              '& > *:not(.MuiButton-loadingIndicator), & > svg': {
                visibility: 'hidden',
              },
            }
          : undefined,
      ]}
    >
      {hideLabelWhileLoading ? <span>{children}</span> : children}
    </MuiButton>
  )
}

/**
 * Declared the way MUI declares its own `Button`, rather than as a plain
 * function component. `component={Link}` has to bring the target component's
 * props with it - without this, `<RcSesButton component={Link} to='/x' />` fails
 * with "Property 'to' does not exist", which is how ~38 call sites in `ses-ui`
 * were compiling against 1.x (it declared a bare `to?: string`, which allowed
 * `to` even when no `component` was given).
 */
const RcSesButton = RcSesButtonComponent as ExtendButtonBase<
  ButtonTypeMap<{ iconOnly?: boolean }>
>

export default RcSesButton
