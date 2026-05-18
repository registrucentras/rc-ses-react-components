import type { ComponentType } from 'react'

import {
  CheckCircleFillIcon,
  InfoFillIcon,
  ScrollIcon,
  WarningFillIcon,
  XCircleFillIcon,
} from '@/library/icons'
import { error, primary, secondary, warning } from '@/theme/palette'

import { type SnackbarSize, type SnackbarState } from './types'

export const SNACKBAR_DURATION = 10000 // 10s

export const SNACKBAR_ICON_SIZE = { width: 18, height: 20 }

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
    color: secondary['400'],
    severity: 'success',
    ariaLive: 'polite',
  },
  error: {
    icon: XCircleFillIcon,
    color: error['400'],
    severity: 'error',
    ariaLive: 'assertive',
  },
  warning: {
    icon: WarningFillIcon,
    color: warning['400'],
    severity: 'warning',
    ariaLive: 'polite',
  },
  info: {
    icon: InfoFillIcon,
    color: primary['400'],
    severity: 'info',
    ariaLive: 'polite',
  },
  'action-needed': {
    icon: ScrollIcon,
    color: primary['400'],
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
    padding: '12px 16px',
  },
  compact: {
    maxHeight: 96,
    width: 320,
    padding: '8px 12px',
  },
}
