import { Backdrop, Box, Typography } from '@mui/material'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { CloseIcon } from '@/assets/icons/phosphorIcons'
import usePrefersReducedMotion from '@/components/common/AdvancedList/components/AdvancedListItem/hooks/usePrefersReducedMotion'
import RcSesButton from '@/components/common/Button'
import motion from '@/theme/motion'

import { DrawerProps, DrawerTestIds } from './Drawer.types'

const DRAWER_WIDTH = 440
const ANIMATION_DURATION = 250
const BACKDROP_OPACITY = 0.5

/**
 * Drawer component - a slide-over panel that slides in from the right.
 * Features focus trap, keyboard support (Esc to close), and smooth animations.
 * Composition: Backdrop + panel with header (title + close button), scrollable body and optional footer.
 */
const Drawer = ({
  isOpen,
  onClose,
  title,
  children,
  showFooter = true,
  testIds,
  className,
}: DrawerProps) => {
  const { t } = useTranslation('common', { keyPrefix: 'components.Drawer' })
  const panelRef = useRef<HTMLDivElement>(null)
  const firstFocusableRef = useRef<HTMLElement | null>(null)
  const lastFocusableRef = useRef<HTMLElement | null>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const animationDuration = prefersReducedMotion ? 0 : ANIMATION_DURATION

  // Handle Esc key
  useEffect(() => {
    if (!isOpen) return undefined

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  // Focus trap and management
  useEffect(() => {
    if (!isOpen || !panelRef.current) return undefined

    // Find focusable elements
    const focusableElements = panelRef.current.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
    )

    if (focusableElements.length > 0) {
      firstFocusableRef.current = focusableElements[0] as HTMLElement
      lastFocusableRef.current = focusableElements[
        focusableElements.length - 1
      ] as HTMLElement

      // Focus first element
      setTimeout(() => {
        firstFocusableRef.current?.focus()
      }, animationDuration)
    }

    const handleTabKey = (event: KeyboardEvent) => {
      if (event.key !== 'Tab') return

      if (event.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusableRef.current) {
          event.preventDefault()
          lastFocusableRef.current?.focus()
        }
      } else if (document.activeElement === lastFocusableRef.current) {
        // Tab
        event.preventDefault()
        firstFocusableRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleTabKey)
    return () => {
      document.removeEventListener('keydown', handleTabKey)
    }
  }, [isOpen, animationDuration])

  const handleBackdropClick = () => {
    onClose()
  }

  const translateX = isOpen ? 0 : DRAWER_WIDTH

  return (
    <>
      <Backdrop
        open={isOpen}
        onClick={handleBackdropClick}
        data-testid={testIds?.backdrop}
        sx={{
          backgroundColor: `rgba(0, 0, 0, ${BACKDROP_OPACITY})`,
          zIndex: (theme) => theme.zIndex.drawer - 1,
          transition: prefersReducedMotion
            ? 'none'
            : `background-color ${animationDuration}ms ${motion.easing.standard}`,
        }}
      />
      <Box
        ref={panelRef}
        role='dialog'
        aria-modal='true'
        data-testid={testIds?.root}
        className={className}
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: DRAWER_WIDTH,
          height: '100vh',
          backgroundColor: (theme) => theme.palette.common.white,
          transform: `translateX(${translateX}px)`,
          transition: prefersReducedMotion
            ? 'none'
            : `transform ${animationDuration}ms ${motion.easing.standard}`,
          display: 'flex',
          flexDirection: 'column',
          zIndex: (theme) => theme.zIndex.drawer,
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
            onClick={onClose}
            data-testid={testIds?.closeButton}
            sx={{ flexShrink: 0, minWidth: '2.5rem' }}
          >
            <CloseIcon size={20} />
          </RcSesButton>
        </Box>

        <Box
          data-testid={testIds?.body}
          sx={{
            flex: 1,
            overflowY: 'auto',
            padding: '1rem 1.5rem',
          }}
        >
          {children}
        </Box>

        {showFooter && (
          <Box
            data-testid={testIds?.footer}
            sx={{
              padding: '1rem 1.5rem',
              borderTop: (theme) => `1px solid ${theme.palette.grey[200]}`,
              flexShrink: 0,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <RcSesButton variant='link'>{t('clear')}</RcSesButton>
            <RcSesButton variant='contained'>{t('showServices')}</RcSesButton>
          </Box>
        )}
      </Box>
    </>
  )
}

export default Drawer
export type { DrawerProps, DrawerTestIds }
