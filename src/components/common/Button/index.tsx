import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'
import type { ButtonTypeMap } from '@mui/material/Button'
import type { ExtendButtonBase } from '@mui/material/ButtonBase'
import { useTranslation } from 'react-i18next'

import RcSesLoadingSpinner from '@/components/loaders/LoadingSpinner'
import { buttonDimensions } from '@/theme/light/MuiButton'
import '@/theme/tokens.css'
import { ButtonProps } from '@/types/buttons/ButtonProps'

const defaultProps: Partial<MuiButtonProps> = {
  color: 'primary',
  disabled: false,
  variant: 'contained',
}

type Props = ButtonProps

function RcSesButtonComponent(props: Props) {
  const { t } = useTranslation('common')
  const { children, iconOnly, size = 'medium', sx, variant, ...rest } = props

  const currentVariant = variant ?? defaultProps.variant
  const isIconOnly =
    !!iconOnly && (currentVariant === 'contained' || currentVariant === 'outlined')

  return (
    <MuiButton
      {...defaultProps}
      {...rest}
      size={size}
      variant={currentVariant}
      aria-busy={rest.loading || undefined}
      aria-label={
        rest.loading && rest['aria-label']
          ? `${rest['aria-label']} – ${t('components.Button.loading')}`
          : rest['aria-label']
      }
      loadingIndicator={
        rest.loadingIndicator ?? <RcSesLoadingSpinner color='inherit' size={size} />
      }
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]),
        isIconOnly
          ? {
              minWidth: 0,
              padding:
                size === 'small'
                  ? buttonDimensions.iconPaddingSmall
                  : buttonDimensions.iconPaddingRegular,
              width: buttonDimensions[size],
              height: buttonDimensions[size],
              '.MuiButton-startIcon, .MuiButton-endIcon': {
                margin: 0,
              },
            }
          : undefined,
      ]}
    >
      {children}
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
