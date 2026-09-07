import {
  Box,
  Fade,
  Dialog as MuiDialog,
  DialogProps as MuiDialogProps,
  Slide,
  Typography,
} from '@mui/material'
import { TransitionProps } from '@mui/material/transitions'
import {
  ReactElement,
  ReactNode,
  PointerEvent as ReactPointerEvent,
  forwardRef,
  useCallback,
  useId,
} from 'react'
import { useTranslation } from 'react-i18next'

import ArrowLeftIcon from '@/assets/icons/ArrowLeftIcon'
import usePrefersReducedMotion from '@/components/common/AdvancedList/components/AdvancedListItem/hooks/usePrefersReducedMotion'
import RcSesButton from '@/components/common/Button'
import { grey } from '@/theme/palette'

import useSwipeToDismiss from './useSwipeToDismiss'

const SHEET = {
  handleWidth: '2.25rem',
  handleHeight: '0.25rem',
  handleHitAreaPadding: '0.75rem 0',
  headerPadding: '0 1.5rem 1rem',
  contentPadding: '0 1.5rem 1.5rem',
  actionsPadding: '0.75rem 1.5rem 1.5rem',
  cornerRadius: '1rem',
  maxHeight: '85vh',
}

const SHEET_MAX_WIDTH = {
  sm: '100%',
  md: '480px',
}

const MOTION_DURATION = { enter: 280, exit: 200 }

const SlideUpTransition = forwardRef<
  HTMLDivElement,
  TransitionProps & { children: ReactElement<unknown> }
>((props, ref) => <Slide direction='up' ref={ref} {...props} />)

export interface RcSesBottomSheetProps extends Omit<
  MuiDialogProps,
  | 'children'
  | 'title'
  | 'PaperProps'
  | 'maxWidth'
  | 'onClose'
  | 'slots'
  | 'slotProps'
> {
  title?: string
  children?: ReactNode
  showBack?: boolean
  onBack?: () => void
  primaryActionLabel?: string
  onPrimaryAction?: () => void
  secondaryActionLabel?: string
  onSecondaryAction?: () => void
  disableBackdropClose?: boolean
  size?: 'sm' | 'md'
  onClose?: (
    event: unknown,
    reason: 'backdropClick' | 'escapeKeyDown' | 'swipeDown',
  ) => void
}

function RcSesBottomSheet({
  title,
  children,
  showBack = false,
  onBack,
  primaryActionLabel,
  onPrimaryAction,
  secondaryActionLabel,
  onSecondaryAction,
  onClose,
  disableBackdropClose = false,
  size = 'sm',
  open,
  'aria-labelledby': ariaLabelledByProp,
  'aria-describedby': ariaDescribedByProp,
  scroll = 'paper',
  transitionDuration = MOTION_DURATION,
  ...props
}: RcSesBottomSheetProps) {
  const prefersReducedMotion = usePrefersReducedMotion()
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesBottomSheet' })
  const titleId = useId()
  const contentId = useId()

  const hasFooter = !!primaryActionLabel || !!secondaryActionLabel

  if (process.env.NODE_ENV !== 'production' && showBack && !onBack) {
    // eslint-disable-next-line no-console
    console.warn(
      'RcSesBottomSheet: `showBack` is set without an `onBack` handler - the back button will do nothing.',
    )
  }

  const handleClose = (event: unknown, reason: 'backdropClick' | 'escapeKeyDown') => {
    if (disableBackdropClose && reason === 'backdropClick') return
    onClose?.(event, reason)
  }

  const handleSwipeDismiss = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => onClose?.(event, 'swipeDown'),
    [onClose],
  )

  const { paperRef, isDragging, handleProps } = useSwipeToDismiss({
    open,
    disableTransform: prefersReducedMotion,
    onDismiss: handleSwipeDismiss,
  })

  return (
    <MuiDialog
      open={open}
      onClose={handleClose}
      {...props}
      maxWidth={false}
      aria-labelledby={ariaLabelledByProp ?? (title ? titleId : undefined)}
      aria-describedby={ariaDescribedByProp ?? (children != null ? contentId : undefined)}
      scroll={scroll}
      slots={{ transition: prefersReducedMotion ? Fade : SlideUpTransition }}
      slotProps={{
        container: { sx: { alignItems: 'flex-end' } },
        paper: {
          ref: paperRef,
          sx: {
            margin: 0,
            width: '100%',
            maxWidth: SHEET_MAX_WIDTH[size],
            maxHeight: SHEET.maxHeight,
            borderRadius: `${SHEET.cornerRadius} ${SHEET.cornerRadius} 0 0`,
          },
        },
      }}
      transitionDuration={transitionDuration}
    >
      <Box
        aria-hidden
        data-testid='rc-ses-bottom-sheet-handle'
        {...handleProps}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          padding: SHEET.handleHitAreaPadding,
          flexShrink: 0,
          touchAction: 'none',
          cursor: isDragging ? 'grabbing' : 'grab',
        }}
      >
        <Box
          sx={{
            width: SHEET.handleWidth,
            height: SHEET.handleHeight,
            borderRadius: 999,
            backgroundColor: grey['300'],
          }}
        />
      </Box>

      {(title || showBack) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1.5,
            padding: SHEET.headerPadding,
            flexShrink: 0,
          }}
        >
          {showBack && (
            <RcSesButton
              iconOnly
              variant='outlined'
              color='grey'
              onClick={onBack}
              aria-label={t('aria.back')}
            >
              <ArrowLeftIcon />
            </RcSesButton>
          )}
          {title && (
            <Typography id={titleId} variant='h3' component='h2' sx={{ flex: 1 }}>
              {title}
            </Typography>
          )}
        </Box>
      )}

      {children != null && (
        <Box
          id={contentId}
          sx={{ padding: SHEET.contentPadding, overflowY: 'auto', flex: 1 }}
        >
          {children}
        </Box>
      )}

      {hasFooter && (
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 1.5,
            padding: SHEET.actionsPadding,
            flexShrink: 0,
          }}
        >
          {secondaryActionLabel && (
            <RcSesButton variant='outlined' color='grey' onClick={onSecondaryAction}>
              {secondaryActionLabel}
            </RcSesButton>
          )}
          {primaryActionLabel && (
            <RcSesButton variant='contained' onClick={onPrimaryAction}>
              {primaryActionLabel}
            </RcSesButton>
          )}
        </Box>
      )}
    </MuiDialog>
  )
}

export default RcSesBottomSheet
