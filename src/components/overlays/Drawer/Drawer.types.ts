import { ReactNode } from 'react'

export interface DrawerTestIds {
  root?: string
  backdrop?: string
  panel?: string
  header?: string
  closeButton?: string
  body?: string
  footer?: string
}

export interface DrawerProps {
  /** Whether the drawer is open */
  isOpen: boolean
  /** Callback fired when the drawer should close */
  onClose: () => void
  /** Drawer title displayed in header */
  title: ReactNode
  /** Main content of the drawer (scrollable body) */
  children: ReactNode
  /** Whether to show the footer with default action buttons, default true */
  showFooter?: boolean
  /** Test IDs for testing */
  testIds?: DrawerTestIds
  /** Optional CSS class name */
  className?: string
}
