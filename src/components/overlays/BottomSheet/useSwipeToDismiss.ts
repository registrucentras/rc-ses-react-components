import {
  PointerEvent as ReactPointerEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

const DISMISS_DISTANCE_PX = 96
const DISMISS_VELOCITY_PX_PER_MS = 0.5
const SNAP_BACK_MS = 200

export interface UseSwipeToDismissOptions {
  open: boolean
  disableTransform: boolean
  onDismiss: (event: ReactPointerEvent<HTMLElement>) => void
}

interface DragState {
  startY: number
  lastY: number
  lastTime: number
}

function useSwipeToDismiss({
  open,
  disableTransform,
  onDismiss,
}: UseSwipeToDismissOptions) {
  const paperRef = useRef<HTMLDivElement | null>(null)
  const dragState = useRef<DragState | null>(null)
  const isDismissingRef = useRef(false)
  const [isDragging, setIsDragging] = useState(false)

  const applyTransform = useCallback(
    (offsetPx: number, transition: string) => {
      const node = paperRef.current
      if (!node || disableTransform) return
      node.style.transition = transition
      node.style.transform = offsetPx > 0 ? `translateY(${offsetPx}px)` : ''
    },
    [disableTransform],
  )

  useEffect(() => {
    if (!open) return
    isDismissingRef.current = false
    const node = paperRef.current
    if (node) {
      node.style.transition = ''
      node.style.transform = ''
    }
  }, [open])

  const handlePointerDown = useCallback((event: ReactPointerEvent<HTMLElement>) => {
    if (isDismissingRef.current) return
    if (!event.isPrimary || (event.pointerType === 'mouse' && event.button !== 0)) return

    const now = performance.now()
    dragState.current = { startY: event.clientY, lastY: event.clientY, lastTime: now }
    setIsDragging(true)
    event.currentTarget.setPointerCapture(event.pointerId)
  }, [])

  const handlePointerMove = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      const state = dragState.current
      if (!state) return
      const offsetPx = Math.max(0, event.clientY - state.startY)
      applyTransform(offsetPx, 'none')
      state.lastY = event.clientY
      state.lastTime = performance.now()
    },
    [applyTransform],
  )

  const endDrag = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      const state = dragState.current
      if (!state) return
      dragState.current = null
      setIsDragging(false)
      event.currentTarget.releasePointerCapture(event.pointerId)

      const offsetPx = Math.max(0, event.clientY - state.startY)
      const releaseElapsedMs = Math.max(1, performance.now() - state.lastTime)
      const releaseVelocity = Math.max(0, event.clientY - state.lastY) / releaseElapsedMs

      const shouldDismiss =
        offsetPx > DISMISS_DISTANCE_PX || releaseVelocity > DISMISS_VELOCITY_PX_PER_MS

      if (shouldDismiss) {
        isDismissingRef.current = true
        onDismiss(event)
      } else {
        applyTransform(0, `transform ${SNAP_BACK_MS}ms ease-out`)
      }
    },
    [applyTransform, onDismiss],
  )

  const cancelDrag = useCallback(
    (event: ReactPointerEvent<HTMLElement>) => {
      const state = dragState.current
      if (!state) return
      dragState.current = null
      setIsDragging(false)
      event.currentTarget.releasePointerCapture(event.pointerId)
      applyTransform(0, `transform ${SNAP_BACK_MS}ms ease-out`)
    },
    [applyTransform],
  )

  return {
    paperRef,
    isDragging,
    handleProps: {
      onPointerDown: handlePointerDown,
      onPointerMove: handlePointerMove,
      onPointerUp: endDrag,
      onPointerCancel: cancelDrag,
    },
  }
}

export default useSwipeToDismiss
