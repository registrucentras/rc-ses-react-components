import {
  Box,
  Button,
  ContainerProps,
  Alert as MuiAlert,
  AlertProps as MuiAlertProps,
  Theme,
} from '@mui/material'
import { useTranslation } from 'react-i18next'

import CloseIcon from '@/assets/icons/CloseIcon'

type Props = Omit<MuiAlertProps, 'onClose'> & {
  container?: boolean | ContainerProps
  showIcon?: boolean
  showAction?: boolean
  showClose?: boolean
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
  minHeight: '1.5rem',
  minWidth: '1.5rem',
  padding: 0,
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  color: 'inherit',
  opacity: 0.8,
  '&:hover': { opacity: 1 },
}

const actionContainerStyles = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '.75rem',
}

// Only the alert body and its CTA form a row; the message slot itself stays a plain
// block container so rich or multi-node children keep flowing normally.
const messageRowStyles = (theme: Theme) => ({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '.75rem',

  [theme.breakpoints.up('md')]: {
    flexWrap: 'nowrap',
  },
})

// The close button is a fixed-size control, so it keeps the action slot tight instead of
// stacking onto its own row the way a consumer-supplied action does.
const closeOnlyActionStyles = {
  '.MuiAlert-action': {
    alignSelf: 'center',
    flex: '0 0 auto',
    margin: 0,
    padding: 0,
  },
}

// `breakpoints.values.xs` is 0, so an xs container banner needs an explicit content width.
const XS_CONTAINER_MAX_WIDTH = 444

const URGENT_SEVERITIES: MuiAlertProps['severity'][] = ['warning', 'error']

function RcSesAlert({
  container,
  children,
  icon,
  showIcon = true,
  showAction = true,
  showClose = true,
  actionLabel,
  onActionClick,
  onClose,
  action,
  severity,
  role,
  'aria-live': ariaLive,
  sx,
  ...props
}: Props) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesAlert' })

  const hasAction = showAction && Boolean(onActionClick) && Boolean(actionLabel)
  const hasClose = showClose && Boolean(onClose)

  const closeButton = hasClose ? (
    <Box
      component='button'
      type='button'
      onClick={onClose}
      aria-label={t('close')}
      sx={closeButtonStyles}
    >
      <CloseIcon size={22} fillColor='currentColor' focusable={false} aria-hidden />
    </Box>
  ) : null

  let resolvedAction = action
  if (hasClose) {
    resolvedAction = action ? (
      <Box sx={actionContainerStyles}>
        {action}
        {closeButton}
      </Box>
    ) : (
      closeButton
    )
  }

  const resolvedRole = role ?? (URGENT_SEVERITIES.includes(severity) ? 'alert' : 'status')
  const resolvedAriaLive = ariaLive ?? (resolvedRole === 'alert' ? 'assertive' : 'polite')

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
      severity={severity}
      role={resolvedRole}
      aria-live={resolvedAriaLive}
      icon={showIcon ? icon : false}
      action={resolvedAction}
      sx={[
        isContainer &&
          ((theme) => {
            let maxWidthValue: number | 'none' = 'none'

            if (maxWidth !== false) {
              if (typeof maxWidth === 'string') {
                maxWidthValue =
                  maxWidth === 'xs'
                    ? XS_CONTAINER_MAX_WIDTH
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
              containerStyles[theme.breakpoints.up('sm')] = {
                px: `calc(max((100% - ${maxWidthValue}px) / 2, 0px)${gutterSm})`,
              }
            }

            return containerStyles
          }),
        hasClose && !action && closeOnlyActionStyles,
        ...normalizedSx,
      ]}
    >
      {hasAction ? (
        <Box sx={messageRowStyles}>
          <Box sx={{ minWidth: 0 }}>{children}</Box>
          <Button
            variant='link'
            onClick={onActionClick}
            sx={(theme) => ({
              flexBasis: '100%',
              padding: '0.5rem 0.25rem',
              [theme.breakpoints.up('md')]: {
                flexBasis: 'auto',
              },
            })}
          >
            {actionLabel}
          </Button>
        </Box>
      ) : (
        children
      )}
    </MuiAlert>
  )
}

export default RcSesAlert
