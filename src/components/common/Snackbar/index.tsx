import {
  Box,
  Snackbar as MuiSnackbar,
  Slide,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { useLayoutEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { CloseIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import RcSesButton from '../Button'
import {
  SNACKBAR_CHAR_LIMITS,
  SNACKBAR_DURATION,
  SNACKBAR_ICON_SIZE,
  sizeConfig,
  stateConfig,
} from './config'
import { type SnackbarSize, type SnackbarState } from './types'

// Figma sets the message in Neutrals/50 on the inverse surface;
// text-inverse is white, so no semantic role matches.
const SNACKBAR_TEXT = 'var(--rc-color-neutrals-50)'

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
  const { t } = useTranslation('input')
  const [internalOpen, setInternalOpen] = useState(controlledOpen ?? true)
  const [isPaused, setIsPaused] = useState(false)
  const [prevControlledOpen, setPrevControlledOpen] = useState(controlledOpen)
  const persist = controlledPersist ?? state === 'action-needed'

  // The `open` prop drives the internal state, but closing from the inside
  // (Escape, autohide, close button) has to keep working while the parent holds
  // `open` at true. Adjusting the state during render instead of in an effect
  // preserves both without the extra render pass an effect would cause.
  if (controlledOpen !== prevControlledOpen) {
    setPrevControlledOpen(controlledOpen)
    if (controlledOpen !== undefined) {
      setInternalOpen(controlledOpen)
    }
  }

  const config = stateConfig[state]
  const StateIcon = config.icon
  const isStandard = size === 'standard'
  const charLimit = SNACKBAR_CHAR_LIMITS[size]
  const truncatedMessage =
    message.length > charLimit ? `${message.slice(0, charLimit)}...` : message

  const textRef = useRef<HTMLSpanElement>(null)
  const [isMultiline, setIsMultiline] = useState(false)
  useLayoutEffect(() => {
    const el = textRef.current
    if (!el) return
    const singleLineHeight = parseFloat(getComputedStyle(el).lineHeight)
    setIsMultiline(el.clientHeight > singleLineHeight + 4)
  }, [truncatedMessage])

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
      transitionDuration={prefersReducedMotion ? { enter: 0, exit: 0 } : undefined}
      sx={{
        transition: prefersReducedMotion ? 'none' : `bottom 150ms ease-in-out !important`,
      }}
      slots={{
        transition: Slide,
      }}
    >
      <Box
        role={config.ariaLive === 'assertive' ? 'alert' : 'status'}
        aria-live={config.ariaLive}
        aria-atomic='true'
        sx={{
          display: 'flex',
          alignItems: isMultiline ? 'flex-start' : 'center',
          gap: spacingRoleBasedTokens['space-8'],
          width: `${sizeConfig[size].width}px`,
          maxHeight: `${sizeConfig[size].maxHeight}px`,
          backgroundColor: colorTokens['surface-inverse'],
          color: SNACKBAR_TEXT,
          borderRadius: borderTokens['radius-8'],
          boxShadow: effectTokens['elevation-md'],
          padding: sizeConfig[size].padding,
          opacity: internalOpen ? 1 : 0,
          transition: 'opacity 200ms ease-out',
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            display: 'flex',
            alignItems: isMultiline ? 'flex-start' : 'center',
            justifyContent: 'center',
            pt: isMultiline ? spacingRoleBasedTokens['space-2'] : 0,
            color: config.color,
            '& svg': {
              width: `${SNACKBAR_ICON_SIZE.width}px !important`,
              height: `${SNACKBAR_ICON_SIZE.height}px !important`,
            },
          }}
        >
          <StateIcon fillColor='currentColor' aria-hidden />
        </Box>
        <Typography
          ref={textRef}
          variant='body2'
          sx={{
            flex: 1,
            minWidth: 0,
            fontSize: typographyTokens['font-size-body-small'],
            lineHeight: typographyTokens['line-height-body-small'],
            fontWeight: 400,
          }}
        >
          {truncatedMessage}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: spacingRoleBasedTokens['space-12'],
            alignItems: 'center',
            // Figma spaces the actions 16px from the message, 8px more than the
            // icon-to-message gap above.
            ml: spacingRoleBasedTokens['space-8'],
          }}
        >
          {onAction && isStandard && (
            <RcSesButton
              size='small'
              variant='outlined'
              color='light'
              onClick={handleAction}
              sx={{
                textTransform: 'none',
                fontSize: typographyTokens['font-size-button-compact'],
                lineHeight: typographyTokens['line-height-button-compact'],
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
                // Figma's close control is a 24px frame around a 20px icon.
                padding: spacingRoleBasedTokens['space-2'],
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '1.5rem',
                height: '1.5rem',
                flexShrink: 0,
                '& svg': {
                  width: sizeTokens['icon-size-20'],
                  height: sizeTokens['icon-size-20'],
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
