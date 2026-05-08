import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

import RcSesSnackbar from './index'
import { type SnackbarSize, type SnackbarState } from './types'

export interface SnackbarConfig {
  state: SnackbarState
  message: string
  size?: SnackbarSize
  onAction?: () => void
  actionLabel?: string
  duration?: number
  persist?: boolean
  dismissOnAction?: boolean
  showClose?: boolean
}

interface SnackbarContextType {
  show: (config: SnackbarConfig) => void
  close: () => void
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

export function RcSesSnackbarProvider({ children }: { children: ReactNode }) {
  const [snackbar, setSnackbar] = useState<SnackbarConfig | null>(null)

  const show = useCallback((config: SnackbarConfig) => {
    setSnackbar(config)
  }, [])

  const close = useCallback(() => {
    setSnackbar(null)
  }, [])

  const value = useMemo(() => ({ show, close }), [show, close])

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {snackbar && (
        <RcSesSnackbar
          state={snackbar.state}
          message={snackbar.message}
          size={snackbar.size}
          onAction={snackbar.onAction}
          actionLabel={snackbar.actionLabel}
          duration={snackbar.duration}
          persist={snackbar.persist}
          dismissOnAction={snackbar.dismissOnAction}
          showClose={snackbar.showClose ?? true}
          onClose={close}
          open
        />
      )}
    </SnackbarContext.Provider>
  )
}

export function useSnackbar() {
  const context = useContext(SnackbarContext)
  if (!context) {
    throw new Error('useSnackbar must be used within RcSesSnackbarProvider')
  }
  return context
}

export default RcSesSnackbarProvider
