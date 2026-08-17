import {
  Box,
  Button,
  ContainerProps,
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import CloseIcon from '@/assets/icons/CloseIcon'

type Props = Omit<MuiAlertProps, 'action' | 'onClose'> & {
  container?: boolean | ContainerProps
  showIcon?: boolean
  actionLabel?: string
  onActionClick?: () => void
  onClose?: () => void
}
export type RcSesInlineAlertProps = {
  children: React.ReactNode
  variant?: 'neutral' | 'info' | 'success' | 'warning' | 'error'
  showIcon?: boolean
  actionLabel?: string
  onActionClick?: () => void
  onClose?: () => void
}

const defaultProps: Partial<MuiAlertProps> = {
  elevation: 0,
  variant: 'outlined',
}

const closeButtonStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  color: 'inherit',
  opacity: 0.8,
  '&:hover': { opacity: 1 },
}

function RcSesAlert({
  container,
  children,
  icon,
  showIcon = true,
  actionLabel,
  onActionClick,
  onClose,
  sx,
  ...props
}: Props) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesAlert' })

  const hasAction = Boolean(onActionClick) && Boolean(actionLabel)
  const hasClose = Boolean(onClose)

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
      icon={showIcon ? icon : false}
      action={
        hasClose ? (
          <Box
            component='button'
            type='button'
            onClick={onClose}
            aria-label={t('close')}
            sx={closeButtonStyles}
          >
            <CloseIcon size={22} fillColor='currentColor' focusable={false} aria-hidden />
          </Box>
        ) : undefined
      }
      sx={[
        isContainer &&
          ((theme) => {
            let maxWidthValue: number | 'none' = 'none'

            if (maxWidth !== false) {
              if (typeof maxWidth === 'string') {
                maxWidthValue =
                  maxWidth === 'xs'
                    ? Math.max(theme.breakpoints.values.xs, 444)
                    : theme.breakpoints.values[
                        maxWidth as keyof typeof theme.breakpoints.values
                      ]
              } else {
                maxWidthValue = maxWidth
              }
            }

            const containerStyles: Record<string, any> = {
              borderRadius: 0,
              '& .MuiAlert-message': { p: 0, width: '100%' },
            }

            if (maxWidthValue !== 'none') {
              const gutterXs = disableGutters ? '' : ` + ${theme.spacing(2)}`
              const gutterSm = disableGutters ? '' : ` + ${theme.spacing(3)}`

              containerStyles.px = `calc(max((100% - ${maxWidthValue}px) / 2, 0px)${gutterXs})`
              containerStyles[theme.breakpoints.up('md')] = {
                px: `calc(max((100% - ${maxWidthValue}px) / 2, 0px)${gutterSm})`,
              }
            }

            return containerStyles
          }),
        ...normalizedSx,
      ]}
    >
      {children}
      {hasAction && (
        <Button
          variant='link'
          onClick={onActionClick}
          sx={(theme) => ({
            flexBasis: '100%',
            flexShrink: 0,
            height: 'auto',
            minWidth: 0,
            padding: 0,
            [theme.breakpoints.up('md')]: {
              flexBasis: 'auto',
            },
          })}
        >
          {actionLabel}
        </Button>
      )}
    </MuiAlert>
  )
}

export default RcSesAlert
