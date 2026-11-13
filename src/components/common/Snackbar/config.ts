import type { ComponentType } from 'react'

import {
  CheckCircleFillIcon,
  InfoFillIcon,
  ScrollIcon,
  WarningFillIcon,
  XCircleFillIcon,
} from '@/library/icons'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'

import { type SnackbarSize, type SnackbarState } from './types'

export const SNACKBAR_DURATION = 10000 // 10s

export const SNACKBAR_ICON_SIZE = { width: 18, height: 20 }

// Figma binds the state icons to the 400 primitives, which read on the dark
// surface; the status-*-icon roles are meant for light backgrounds.
const STATE_ICON_COLORS = {
  success: 'var(--rc-color-greens-400)',
  error: 'var(--rc-color-red-400)',
  warning: 'var(--rc-color-yellows-400)',
  info: 'var(--rc-color-cyans-400)',
}

// Figma uses the same padding for both sizes: the Snackbar aliases on the
// top, bottom and left, 12px on the right next to the close button.
const SNACKBAR_PADDING = [
  spacingTokens['spacing-aliases-snackbar-padding-y'],
  spacingRoleBasedTokens['space-12'],
  spacingTokens['spacing-aliases-snackbar-padding-y'],
  spacingTokens['spacing-aliases-snackbar-padding-x'],
].join(' ')

export const SNACKBAR_CHAR_LIMITS: Record<SnackbarSize, number> = {
  standard: 120,
  compact: 60,
}

export const stateConfig: Record<
  SnackbarState,
  {
    icon: ComponentType<{ fillColor?: string; 'aria-hidden'?: boolean }>
    color: string
    severity: 'success' | 'error' | 'warning' | 'info'
    ariaLive: 'polite' | 'assertive'
  }
> = {
  success: {
    icon: CheckCircleFillIcon,
    color: STATE_ICON_COLORS.success,
    severity: 'success',
    ariaLive: 'polite',
  },
  error: {
    icon: XCircleFillIcon,
    color: STATE_ICON_COLORS.error,
    severity: 'error',
    ariaLive: 'assertive',
  },
  warning: {
    icon: WarningFillIcon,
    color: STATE_ICON_COLORS.warning,
    severity: 'warning',
    ariaLive: 'polite',
  },
  info: {
    icon: InfoFillIcon,
    color: STATE_ICON_COLORS.info,
    severity: 'info',
    ariaLive: 'polite',
  },
  'action-needed': {
    icon: ScrollIcon,
    color: STATE_ICON_COLORS.info,
    severity: 'info',
    ariaLive: 'assertive',
  },
}

export const sizeConfig: Record<
  SnackbarSize,
  {
    maxHeight: number
    width: number
    padding: string
  }
> = {
  standard: {
    maxHeight: 120,
    width: 400,
    padding: SNACKBAR_PADDING,
  },
  compact: {
    maxHeight: 96,
    width: 320,
    padding: SNACKBAR_PADDING,
  },
}
