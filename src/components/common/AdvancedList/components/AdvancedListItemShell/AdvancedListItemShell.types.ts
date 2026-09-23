import { ReactNode } from 'react'

export type AdvancedListItemShellState = 'rest' | 'selected' | 'disabled' | 'error'

/**
 * `card` - bordered, rounded container (the default).
 * `row` - flush row within a list: no border/radius, just a bottom divider.
 */
export type AdvancedListItemShellContainer = 'card' | 'row'

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
  /** Visual container style. Defaults to `card`. */
  container?: AdvancedListItemShellContainer
  onClick?: () => void
  className?: string
  testIds?: AdvancedListItemShellTestIds
}
