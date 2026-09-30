import { ReactNode } from 'react'

export interface RcSesDrawerTestIds {
  root?: string
  header?: string
  closeButton?: string
  body?: string
  footer?: string
}

export interface RcSesDrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean
  /** Callback fired when the drawer should close */
  onClose: () => void
  /** Drawer title displayed in header */
  title: ReactNode
  /** Main content of the drawer (scrollable body) */
  children: ReactNode
  /** Label for the secondary (left) action button */
  secondaryActionLabel?: string
  /** Callback fired when secondary action button is clicked */
  onSecondaryAction?: () => void
  /** Label for the primary (right) action button */
  primaryActionLabel?: string
  /** Callback fired when primary action button is clicked */
  onPrimaryAction?: () => void
  /** Test IDs for testing */
  testIds?: RcSesDrawerTestIds
  /** Optional CSS class name */
  className?: string
}
