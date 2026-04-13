import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

import { ButtonProps } from '@/types/buttons/ButtonProps'

const defaultProps: Partial<MuiButtonProps> = {
  color: 'primary',
  disabled: false,
  variant: 'contained',
}

type Props = ButtonProps & { to?: string }

function RcSesButton(props: Props) {
  const { children, iconOnly, size = 'medium', sx, variant, ...rest } = props

  const currentVariant = variant ?? defaultProps.variant
  const isIconOnly =
    !!iconOnly && (currentVariant === 'contained' || currentVariant === 'outlined')

  const iconOnlySizingBySize = {
    small: '2.25rem',
    medium: '2.75rem',
    large: '3rem',
  }

  return (
    <MuiButton
      {...defaultProps}
      {...rest}
      size={size}
      variant={variant}
      sx={[
        ...(Array.isArray(sx) ? sx : [sx]),
        isIconOnly
          ? {
              minWidth: 0,
              padding: 0,
              width: iconOnlySizingBySize[size],
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

export default RcSesButton
