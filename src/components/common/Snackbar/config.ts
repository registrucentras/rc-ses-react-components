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

export const MAX_SNACKBARS_MOBILE = 2
export const MAX_SNACKBARS_DESKTOP = 3

export const SNACKBAR_STACK_GAP = 8
export const SNACKBAR_ICON_SIZE = { width: 18, height: 20 }
export const SNACKBAR_BASE_OFFSET = { mobile: 16, desktop: 24 }

export const stateConfig: Record<
  SnackbarState,
  {
    icon: React.ComponentType<{ fillColor?: string; 'aria-hidden'?: boolean }>
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
    height: number
    width: number
    mobileWidth: string
    padding: string
  }
> = {
  standard: {
    height: 60,
    width: 400,
    mobileWidth: 'calc(100% - 32px)',
    padding: '12px 16px',
  },
  compact: {
    height: 48,
    width: 320,
    mobileWidth: 'calc(100% - 32px)',
    padding: '8px 12px',
  },
}
