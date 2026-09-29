import { Box, Fade, Dialog as MuiDialog, Slide, Typography } from '@mui/material'
import { useId } from 'react'
import { useTranslation } from 'react-i18next'

import { CloseIcon } from '@/assets/icons/phosphorIcons'
import usePrefersReducedMotion from '@/components/common/AdvancedList/components/AdvancedListItem/hooks/usePrefersReducedMotion'
import RcSesButton from '@/components/common/Button'

import { RcSesDrawerProps, RcSesDrawerTestIds } from './Drawer.types'

const DRAWER_WIDTH = 440
const ANIMATION_DURATION = 250
const BACKDROP_OPACITY = 0.5

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
  primaryActionLabel,
  onPrimaryAction,
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
        transition: prefersReducedMotion ? Fade : Slide,
      }}
      slotProps={{
        transition: (prefersReducedMotion
          ? { appear: true }
          : { appear: true, direction: 'left' }) as any,
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
            backgroundColor: (theme) => theme.palette.common.white,
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
            padding: '1.25rem 1rem 1rem 1.5rem',
            borderBottom: (theme) => `1px solid ${theme.palette.grey[200]}`,
            flexShrink: 0,
            gap: '1rem',
          }}
        >
          <Typography
            id={headerId}
            component='h2'
            sx={{
              fontSize: '14px',
              fontStyle: 'normal',
              fontWeight: 600,
              lineHeight: '20px',
            }}
          >
            {title}
          </Typography>
          <RcSesButton
            variant='link'
            onClick={handleClose}
            data-testid={testIds?.closeButton}
            sx={{ flexShrink: 0, width: '2.75rem', height: '2.75rem' }}
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
            padding: '1rem 1.5rem',
            backgroundColor: (theme) => theme.palette.grey[50],
          }}
        >
          {children}
        </Box>

        {(secondaryActionLabel || primaryActionLabel) && (
          <Box
            data-testid={testIds?.footer}
            sx={{
              padding: '1rem 1.5rem',
              borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: secondaryActionLabel ? 'space-between' : 'flex-end',
            }}
          >
            {secondaryActionLabel && (
              <RcSesButton variant='link' onClick={onSecondaryAction}>
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
      </Box>
    </MuiDialog>
  )
}

export default RcSesDrawer
export type { RcSesDrawerProps, RcSesDrawerTestIds }
