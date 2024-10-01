import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material'

const defaultProps: Partial<MuiAlertProps> = {
  elevation: 0,
  variant: 'outlined',
}

function RcSesAlert(props: MuiAlertProps) {
  const { children } = props

  return (
    <MuiAlert {...defaultProps} {...props} closeText='Uždaryti'>
      {children}
    </MuiAlert>
  )
}

export default RcSesAlert
