import {
  Box,
  Fade,
  Dialog as MuiDialog,
  Slide,
  SlideProps,
  Typography,
} from '@mui/material'
import { forwardRef, useId } from 'react'
import { useTranslation } from 'react-i18next'

import { CloseIcon } from '@/assets/icons/phosphorIcons'
import usePrefersReducedMotion from '@/components/common/AdvancedList/components/AdvancedListItem/hooks/usePrefersReducedMotion'
import RcSesButton from '@/components/common/Button'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import { RcSesDrawerProps, RcSesDrawerTestIds } from './Drawer.types'

const DRAWER_WIDTH = 440
const ANIMATION_DURATION = 250
const BACKDROP_OPACITY = 0.5

/**
 * SlideLeftTransition - Wrapper for Slide component with direction='left'
 * Allows type-safe usage without 'as any' cast
 */
const SlideLeftTransition = forwardRef<HTMLDivElement, SlideProps>((props, ref) => (
  <Slide ref={ref} direction='left' {...props} />
))

/**
 * RcSesDrawer component - a slide-over panel that slides in from the right.
 * Built on MUI Dialog for proper focus management, scroll locking, and DOM handling.
 * Composition: Header (title + close button), scrollable body, and optional footer.
 */
const RcSesDrawer = ({
  isOpen,
  onClose,
  title,
  children,
  secondaryActionLabel,
  onSecondaryAction,
  secondaryActionDisabled,
  primaryActionLabel,
  onPrimaryAction,
  primaryActionDisabled,
  testIds,
  className,
}: RcSesDrawerProps) => {
  const prefersReducedMotion = usePrefersReducedMotion()
  const { t } = useTranslation('common', { keyPrefix: 'components.Drawer' })
  const headerId = useId()

  const handleClose = () => {
    onClose()
  }

  return (
    <MuiDialog
      open={isOpen}
      onClose={handleClose}
      aria-labelledby={headerId}
      maxWidth={false}
      transitionDuration={prefersReducedMotion ? 0 : ANIMATION_DURATION}
      sx={{
        '& .MuiDialog-container': {
          height: '100vh',
          minHeight: '100vh',
        },
      }}
      slots={{
        transition: prefersReducedMotion ? Fade : SlideLeftTransition,
      }}
      slotProps={{
        transition: {
          appear: true,
        },
        backdrop: {
          sx: {
            backgroundColor: `rgba(0, 0, 0, ${BACKDROP_OPACITY})`,
          },
        },
        container: {
          sx: {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'stretch',
            width: '100%',
            margin: 0,
            padding: 0,
          },
        },
        paper: {
          sx: {
            margin: 0,
            padding: 0,
            width: DRAWER_WIDTH,
            maxWidth: DRAWER_WIDTH,
            flex: '1 1 auto',
            minHeight: '100vh',
            borderRadius: 0,
            boxShadow: '-4px 0 24px rgba(0, 0, 0, 0.18)',
            backgroundColor: colorTokens['surface-base'],
          },
        },
      }}
    >
      <Box
        data-testid={testIds?.root}
        className={className}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          width: '100%',
        }}
      >
        <Box
          data-testid={testIds?.header}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: `${spacingRoleBasedTokens['space-20']} ${spacingRoleBasedTokens['space-16']} ${spacingRoleBasedTokens['space-16']} ${spacingRoleBasedTokens['space-24']}`,
            borderBottom: `${borderTokens['stroke-1']} solid ${colorTokens['border-subtle']}`,
            backgroundColor: colorTokens['surface-base'],
            flexShrink: 0,
            gap: spacingRoleBasedTokens['space-16'],
          }}
        >
          <Typography
            id={headerId}
            component='h2'
            sx={{
              fontSize: typographyTokens['font-size-heading-h5'],
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: typographyTokens['line-height-heading-h5'],
              color: colorTokens['text-default'],
            }}
          >
            {title}
          </Typography>
          <RcSesButton
            variant='link'
            onClick={handleClose}
            data-testid={testIds?.closeButton}
            sx={{ flexShrink: 0, width: '44px', height: '44px' }}
            aria-label={t('closeDrawer')}
          >
            <CloseIcon size={24} />
          </RcSesButton>
        </Box>

        <Box
          data-testid={testIds?.body}
          sx={{
            flex: 1,
            overflowY: 'auto',
            padding: `${spacingRoleBasedTokens['space-12']} ${spacingRoleBasedTokens['space-24']} ${spacingRoleBasedTokens['space-16']}`,
            backgroundColor: colorTokens['surface-sunken'],
          }}
        >
          {children}
        </Box>

        {(secondaryActionLabel || primaryActionLabel) && (
          <Box
            data-testid={testIds?.footer}
            sx={{
              padding: `${spacingRoleBasedTokens['space-16']} ${spacingRoleBasedTokens['space-24']}`,
              borderTop: `${borderTokens['stroke-1']} solid ${colorTokens['border-subtle']}`,
              backgroundColor: colorTokens['surface-base'],
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: secondaryActionLabel ? 'space-between' : 'flex-end',
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
      </Box>
    </MuiDialog>
  )
}

export default RcSesDrawer
export type { RcSesDrawerProps, RcSesDrawerTestIds }
