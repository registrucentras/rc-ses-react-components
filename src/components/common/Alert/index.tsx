import {
  Container,
  ContainerProps,
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

type Props = MuiAlertProps & {
  container?: boolean | ContainerProps
}

const defaultProps: Partial<MuiAlertProps> = {
  elevation: 0,
  variant: 'outlined',
}

const containerSx: MuiAlertProps['sx'] = {
  borderRadius: 0,
  px: 0,
  '& .MuiAlert-message': { p: 0, width: '100%' },
}

function RcSesAlert({ container, children, sx, ...props }: Props) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesAlert' })

  const containerProps: ContainerProps | undefined = (() => {
    if (container === true) return {}
    if (container === false || !container) return undefined
    return container
  })()

  return (
    <MuiAlert
      {...defaultProps}
      {...props}
      sx={[
        ...(container ? [containerSx] : []),
        // eslint-disable-next-line no-nested-ternary
        ...(Array.isArray(sx) ? sx : sx ? [sx] : []),
      ]}
      closeText={t('close')}
    >
      {containerProps ? <Container {...containerProps}>{children}</Container> : children}
    </MuiAlert>
  )
}

export default RcSesAlert
