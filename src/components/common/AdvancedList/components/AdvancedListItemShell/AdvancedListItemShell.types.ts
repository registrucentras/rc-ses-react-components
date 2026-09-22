import { ReactNode } from 'react'

export type AdvancedListItemShellState = 'rest' | 'selected' | 'disabled' | 'error'

export interface AdvancedListItemShellTestIds {
  root?: string
  leading?: string
  content?: string
  trailing?: string
  expanded?: string
}

export interface AdvancedListItemShellProps {
  /** Optional leading slot (e.g. checkbox, radio, avatar, icon). Empty => not rendered. */
  leading?: ReactNode
  /** Required main content slot (title, subtitle, meta, etc.). */
  content: ReactNode
  /** Optional trailing slot (e.g. actions, status, price). Empty => not rendered. */
  trailing?: ReactNode
  /** Optional expandable slot content, shown/hidden via `isExpanded`. */
  expanded?: ReactNode
  isExpanded?: boolean
  state?: AdvancedListItemShellState
  onClick?: () => void
  className?: string
  testIds?: AdvancedListItemShellTestIds
}
