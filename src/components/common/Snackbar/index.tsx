import {
  Box,
  Snackbar as MuiSnackbar,
  Slide,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

import CloseIcon from '@/assets/icons/CloseIcon'
import { grey } from '@/theme/palette'

import RcSesButton from '../Button'
import { SNACKBAR_DURATION, SNACKBAR_ICON_SIZE, sizeConfig, stateConfig } from './config'
import { type SnackbarSize, type SnackbarState } from './types'

export interface RcSesSnackbarProps {
  state: SnackbarState
  message: string
  size?: SnackbarSize
  onAction?: () => void
  actionLabel?: string
  onClose?: () => void
  open?: boolean
  dismissOnAction?: boolean
  duration?: number
  persist?: boolean
  showClose?: boolean
}

function RcSesSnackbar({
  state,
  size = 'standard',
  message,
  onClose,
  onAction,
  dismissOnAction = true,
  actionLabel,
  open: controlledOpen,
  duration = SNACKBAR_DURATION,
  persist: controlledPersist,
  showClose = true,
}: RcSesSnackbarProps) {
  const theme = useTheme()
  const { t } = useTranslation('input')
  const [internalOpen, setInternalOpen] = useState(controlledOpen ?? true)
  const [isPaused, setIsPaused] = useState(false)
  const persist = controlledPersist ?? state === 'action-needed'

  useEffect(() => {
    if (controlledOpen !== undefined) {
      setInternalOpen(controlledOpen)
    }
  }, [controlledOpen])

  const config = stateConfig[state]
  const StateIcon = config.icon
  const isStandard = size === 'standard'

  const handleClose = () => {
    setInternalOpen(false)
    onClose?.()
  }

  const handleAction = () => {
    onAction?.()
    if (dismissOnAction) handleClose()
  }

  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)')

  return (
    <MuiSnackbar
      open={internalOpen}
      autoHideDuration={persist || isPaused ? null : duration}
      onClose={handleClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onKeyDown={(e) => e.key === 'Escape' && handleClose()}
      TransitionComponent={Slide}
      transitionDuration={prefersReducedMotion ? { enter: 0, exit: 0 } : undefined}
      sx={{
        transition: prefersReducedMotion ? 'none' : `bottom 150ms ease-in-out !important`,
      }}
    >
      <Box
        role={config.ariaLive === 'assertive' ? 'alert' : 'status'}
        aria-live={config.ariaLive}
        aria-atomic='true'
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: theme.spacing(1),
          width: `${sizeConfig[size].width}px`,
          maxHeight: `${sizeConfig[size].maxHeight}px`,
          backgroundColor: grey['900'],
          color: grey['50'],
          borderRadius: '8px',
          padding: sizeConfig[size].padding,
          opacity: internalOpen ? 1 : 0,
          transition: 'opacity 200ms ease-out',
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
              width: `${SNACKBAR_ICON_SIZE.width}px !important`,
              height: `${SNACKBAR_ICON_SIZE.height}px !important`,
            },
          }}
        >
          <StateIcon fillColor={config.color} aria-hidden />
        </Box>
        <Typography
          variant='body2'
          sx={{
            flex: 1,
            minWidth: 0,
            overflow: 'hidden',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            textOverflow: 'ellipsis',
          }}
        >
          {message}
        </Typography>
        <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
          {onAction && isStandard && (
            <RcSesButton
              size='small'
              variant='outlined'
              color='light'
              onClick={handleAction}
              sx={{
                textTransform: 'none',
                fontSize: '0.875rem',
                flexShrink: 0,
              }}
            >
              {actionLabel}
            </RcSesButton>
          )}
          {showClose && (
            <RcSesButton
              variant='outlined'
              color='ghost'
              onClick={handleClose}
              sx={{
                minWidth: 'auto',
                padding: theme.spacing(0.625),
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '34px',
                height: '34px',
                flexShrink: 0,
                '& svg': {
                  width: '20px',
                  height: '20px',
                },
              }}
              aria-label={t('components.RcSesSnackbar.aria.close')}
            >
              <CloseIcon />
            </RcSesButton>
          )}
        </Box>
      </Box>
    </MuiSnackbar>
  )
}

export default RcSesSnackbar
