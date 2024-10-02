import { Button as MuiButton, ButtonProps as MuiButtonProps } from '@mui/material'

const defaultProps: Partial<MuiButtonProps> = {
  color: 'primary',
  disabled: false,
  variant: 'contained',
}

type Props = MuiButtonProps & { to?: string }

function RcSesButton(props: Props) {
  const { children, ...rest } = props

  return (
    <MuiButton {...defaultProps} {...rest}>
      {children}
    </MuiButton>
  )
}

export default RcSesButton
