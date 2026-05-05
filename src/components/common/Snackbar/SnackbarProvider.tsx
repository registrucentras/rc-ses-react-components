import React, { createContext, useCallback, useContext, useMemo, useState } from 'react'

import theme from '@/theme/light'

import { MAX_SNACKBARS_DESKTOP, MAX_SNACKBARS_MOBILE } from './config'
import RcSesSnackbar from './index'
import { type SnackbarSize, type SnackbarState } from './types'

export interface SnackbarMessage {
  id: string
  state: SnackbarState
  message: string
  size?: SnackbarSize
  onAction?: () => void
  actionLabel?: string
  duration?: number
  persist?: boolean
  dismissOnAction?: boolean
}

interface SnackbarContextType {
  showSnackbar: (message: Omit<SnackbarMessage, 'id'>) => string
  hideSnackbar: (id: string) => void
  messages: SnackbarMessage[]
}

const SnackbarContext = createContext<SnackbarContextType | undefined>(undefined)

export function RcSesSnackbarProvider({ children }: { children: React.ReactNode }) {
  const [messages, setMessages] = useState<SnackbarMessage[]>([])

  const showSnackbar = useCallback((message: Omit<SnackbarMessage, 'id'>) => {
    const id = `snackbar-${Date.now()}-${Math.random()}`
    setMessages((prev) => {
      const maxSnackbars =
        window.innerWidth < theme.breakpoints.values.sm
          ? MAX_SNACKBARS_MOBILE
          : MAX_SNACKBARS_DESKTOP
      const newMessages = [{ ...message, id }, ...prev]
      return newMessages.slice(0, maxSnackbars)
    })
    return id
  }, [])

  const hideSnackbar = useCallback((id: string) => {
    setMessages((prev) => prev.filter((msg) => msg.id !== id))
  }, [])

  const value = useMemo(
    () => ({ showSnackbar, hideSnackbar, messages }),
    [showSnackbar, hideSnackbar, messages],
  )

  return (
    <SnackbarContext.Provider value={value}>
      {children}
      {messages.map((msg, index) => (
        <RcSesSnackbar
          key={msg.id}
          state={msg.state}
          message={msg.message}
          size={msg.size}
          onClose={() => hideSnackbar(msg.id)}
          onAction={msg.onAction}
          dismissOnAction={msg.dismissOnAction}
          actionLabel={msg.actionLabel}
          duration={msg.duration}
          persist={msg.persist}
          index={index}
          open
        />
      ))}
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
