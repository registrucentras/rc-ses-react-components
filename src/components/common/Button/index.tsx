import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

import ArrowsClockwiseIcon from '@/assets/icons/ArrowsClockwiseIcon'
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

const SPINNER_SIZE_MAP = {
  small: 16,
  medium: 20,
  large: 24,
} as const

type Props = ButtonProps & { to?: string }

function RcSesButton(props: Props) {
  const {
    children,
    disabled,
    iconOnly,
    loading,
    size = 'medium',
    sx,
    variant,
    ...rest
  } = props

  const currentVariant = variant ?? defaultProps.variant
  const isIconOnly =
    !!iconOnly && (currentVariant === 'contained' || currentVariant === 'outlined')

  return (
    <MuiButton
      {...defaultProps}
      {...rest}
      disabled={disabled || loading}
      size={size}
      variant={currentVariant}
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]),
        loading
          ? {
              position: 'relative',
              '& .MuiButton-startIcon, & .MuiButton-endIcon, & .RcSesButton-content': {
                visibility: 'hidden',
              },
              '& .RcSesButton-loading': {
                alignItems: 'center',
                display: 'inline-flex',
                inset: 0,
                justifyContent: 'center',
                pointerEvents: 'none',
                position: 'absolute',
              },
              '& .RcSesButton-spinner': {
                animation: 'RcSesButtonSpin 1s linear infinite',
                display: 'inline-flex',
                transformOrigin: 'center',
              },
              '@keyframes RcSesButtonSpin': {
                '0%': { transform: 'rotate(0deg)' },
                '100%': { transform: 'rotate(360deg)' },
              },
            }
          : undefined,
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
      <span className='RcSesButton-content'>{children}</span>
      {loading ? (
        <span className='RcSesButton-loading'>
          <span className='RcSesButton-spinner'>
            <ArrowsClockwiseIcon size={SPINNER_SIZE_MAP[size]} />
          </span>
        </span>
      ) : null}
    </MuiButton>
  )
}

export default RcSesButton
