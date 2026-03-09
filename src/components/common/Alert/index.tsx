import {
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

function RcSesAlert({ container, children, sx, ...props }: Props) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesAlert' })

  const isContainer = Boolean(container)
  const containerParams = typeof container === 'object' ? container : {}
  const maxWidth =
    containerParams.maxWidth === undefined ? 'lg' : containerParams.maxWidth
  const disableGutters = containerParams.disableGutters || false

  let normalizedSx: any[] = []
  if (sx) {
    normalizedSx = Array.isArray(sx) ? sx : [sx]
  }

  return (
    <MuiAlert
      {...defaultProps}
      {...props}
      sx={[
        isContainer &&
          ((theme) => {
            let maxWidthValue: string | number = 'none'

            if (maxWidth !== false) {
              if (typeof maxWidth === 'string') {
                maxWidthValue =
                  theme.breakpoints.values[
                    maxWidth as keyof typeof theme.breakpoints.values
                  ] || maxWidth
              } else {
                maxWidthValue = maxWidth
              }
            }

            const containerStyles: Record<string, any> = {
              borderRadius: 0,
              '& .MuiAlert-message': { p: 0, width: '100%' },
            }

            if (maxWidthValue !== 'none') {
              const gutterXs = disableGutters ? '' : ' + 16px'
              const gutterSm = disableGutters ? '' : ' + 24px'

              containerStyles.px = `calc(max((100% - ${maxWidthValue}px) / 2, 0px)${gutterXs})`
              containerStyles[theme.breakpoints.up('sm')] = {
                px: `calc(max((100% - ${maxWidthValue}px) / 2, 0px)${gutterSm})`,
              }
            }

            return containerStyles
          }),
        ...normalizedSx,
      ]}
      closeText={t('close')}
    >
      {children}
    </MuiAlert>
  )
}

export default RcSesAlert
