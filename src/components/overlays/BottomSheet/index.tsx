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

import { ArrowLeftIcon } from '@/assets/icons/phosphorIcons'
import usePrefersReducedMotion from '@/components/common/AdvancedList/components/AdvancedListItem/hooks/usePrefersReducedMotion'
import RcSesButton from '@/components/common/Button'
import { borderTokens as border } from '@/theme/borderTokens'
import { colorTokens as color } from '@/theme/colorTokens'
import { spacingRoleBasedTokens as space } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens as typography } from '@/theme/typographyTokens'

import useSwipeToDismiss from './useSwipeToDismiss'

const SHEET = {
  // Bottom-sheet aliases are not exposed by the foundation map; use their primitives.
  padding: `${space['space-8']} ${space['space-16']} ${space['space-16']}`,
  sectionGap: space['space-16'],
  handleWidth: space['space-40'],
  handleHeight: space['space-4'],
  handleHitAreaPadding: `${space['space-0']} ${space['space-0']} ${space['space-4']}`,
  headerPadding: space['space-0'],
  contentPadding: `${space['space-8']} ${space['space-0']}`,
  actionsPadding: `${space['space-8']} ${space['space-0']} ${space['space-0']}`,
  cornerRadius: border['radius-modal'],
  maxHeight: '85vh',
  titleFontSize: typography['font-size-heading-h3'],
  titleLineHeight: typography['line-height-heading-h3'],
  // The upward sheet shadow has no matching foundation effect token.
  shadow: '0 -4px 24px 0 rgba(0, 0, 0, 0.18)',
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
  'children' | 'title' | 'PaperProps' | 'maxWidth' | 'onClose' | 'slots' | 'slotProps'
> {
  title?: string
  children?: ReactNode
  showBack?: boolean
  onBack?: () => void
  primaryActionLabel?: string
  onPrimaryAction?: () => void
  primaryActionDisabled?: boolean
  secondaryActionLabel?: string
  onSecondaryAction?: () => void
  secondaryActionDisabled?: boolean
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
  primaryActionDisabled,
  secondaryActionLabel,
  onSecondaryAction,
  secondaryActionDisabled,
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
            margin: space['space-0'],
            width: '100%',
            maxWidth: SHEET_MAX_WIDTH[size],
            maxHeight: SHEET.maxHeight,
            padding: SHEET.padding,
            gap: SHEET.sectionGap,
            backgroundColor: color['surface-base'],
            boxShadow: SHEET.shadow,
            borderRadius: `${SHEET.cornerRadius} ${SHEET.cornerRadius} ${border['radius-0']} ${border['radius-0']}`,
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
            borderRadius: border['radius-pill'],
            backgroundColor: color['border-default'],
          }}
        />
      </Box>

      {(title || showBack) && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: space['space-8'],
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
            <Typography
              id={titleId}
              variant='h3'
              component='h2'
              sx={{
                flex: 1,
                fontSize: SHEET.titleFontSize,
                lineHeight: SHEET.titleLineHeight,
                color: color['text-default'],
              }}
            >
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
            gap: space['space-12'],
            padding: SHEET.actionsPadding,
            flexShrink: 0,
          }}
        >
          {secondaryActionLabel && (
            <RcSesButton
              variant='outlined'
              color='grey'
              onClick={onSecondaryAction}
              disabled={secondaryActionDisabled}
            >
              {secondaryActionLabel}
            </RcSesButton>
          )}
          {primaryActionLabel && (
            <RcSesButton
              variant='contained'
              onClick={onPrimaryAction}
              disabled={primaryActionDisabled}
            >
              {primaryActionLabel}
            </RcSesButton>
          )}
        </Box>
      )}
    </MuiDialog>
  )
}

export default RcSesBottomSheet
