import { Alert as MuiAlert, AlertProps as MuiAlertProps } from '@mui/material'
import { useTranslation } from 'react-i18next'

const defaultProps: Partial<MuiAlertProps> = {
  elevation: 0,
  variant: 'outlined',
}

function RcSesAlert(props: MuiAlertProps) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesAlert' })

  const { children } = props

  return (
    <MuiAlert {...defaultProps} {...props} closeText={t('close')}>
      {children}
    </MuiAlert>
  )
}

export default RcSesAlert
