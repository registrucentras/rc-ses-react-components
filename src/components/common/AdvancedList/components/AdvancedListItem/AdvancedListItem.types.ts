import { ComponentType, ReactNode } from 'react'

import { ListWithIconsItemData } from '@/components/common/ListWithIcons/ListWithIcons.types'

export type AdvancedListItemState = 'rest' | 'selected' | 'disabled' | 'error'

export type AdvancedListItemStatusColor = 'grey' | 'warning' | 'success' | 'error'

export type AdvancedListItemAction = {
  label: string
  icon?: ComponentType<{ fillColor?: string; size?: number }>
  onClick: () => void
  disabled?: boolean
}

export type AdvancedListItemLeading =
  | { type: 'none' }
  | {
      type: 'reorder'
      onMoveUp?: () => void
      onMoveDown?: () => void
      moveUpDisabled?: boolean
      moveDownDisabled?: boolean
    }
  | {
      type: 'checkbox'
      checked: boolean
      onChange: (checked: boolean) => void
      'aria-label'?: string
    }
  | {
      type: 'radio'
      checked: boolean
      onChange: (checked: boolean) => void
      name?: string
      'aria-label'?: string
    }
  | { type: 'drag'; 'aria-label'?: string }
  | {
      type: 'icon'
      icon: ComponentType<{ fillColor?: string; size?: number }>
      'aria-label'?: string
    }
  | { type: 'avatar'; initials?: string; src?: string; alt?: string }
  | { type: 'index'; index: number }

export type AdvancedListItemTrailing =
  | { type: 'none' }
  | { type: 'actions'; actions: AdvancedListItemAction[] }
  | {
      type: 'toggle'
      checked: boolean
      onChange: (checked: boolean) => void
      'aria-label'?: string
    }
  | { type: 'status'; label: string; color?: AdvancedListItemStatusColor }
  | {
      type: 'price'
      amount: string
      caption?: string
      onDelete?: () => void
      deleteAriaLabel?: string
    }
  | {
      type: 'checkbox'
      checked: boolean
      onChange: (checked: boolean) => void
      'aria-label'?: string
    }
  | {
      type: 'radio'
      checked: boolean
      onChange: (checked: boolean) => void
      name?: string
      'aria-label'?: string
    }
  | { type: 'chevron' }
  | {
      type: 'stepper'
      value: number
      onChange: (value: number) => void
      min?: number
      max?: number
      'aria-label'?: string
    }

export interface AdvancedListItemProps {
  title: string
  label?: string
  subtitle?: string
  metaItems?: ListWithIconsItemData[]
  leadingMedia?: ReactNode
  expandedContent?: ReactNode
  expanded?: boolean
  onExpandedChange?: (expanded: boolean) => void
  leading?: AdvancedListItemLeading
  trailing?: AdvancedListItemTrailing
  state?: AdvancedListItemState
  onClick?: () => void
}
