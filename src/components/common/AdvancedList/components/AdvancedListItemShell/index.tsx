import { Box, Collapse, Stack } from '@mui/material'
import { ReactNode, useEffect, useId, useRef } from 'react'

import motion from '@/theme/motion'
import palette from '@/theme/palette'

import usePrefersReducedMotion from '../AdvancedListItem/hooks/usePrefersReducedMotion'
import {
  AdvancedListItemShellContainer,
  AdvancedListItemShellProps,
  AdvancedListItemShellState,
  AdvancedListItemShellTestIds,
} from './AdvancedListItemShell.types'

const BORDER_RADIUS = '0.5rem'
const BORDER_WIDTH = '0.0625rem'
const FOCUS_RING_WIDTH = '0.0625rem'

const STATE_BORDER_COLOR: Record<AdvancedListItemShellState, string> = {
  rest: palette.grey[200],
  selected: palette.primary.main,
  disabled: palette.grey[200],
  error: palette.error.main,
}

// A conditional slot renders as false rather than as nothing, so false is absent
const hasSlot = (node: ReactNode) => node !== undefined && node !== null && node !== false

/**
 * Slot-based shell (Leading, Content, Trailing, Expanded).
 * Content is required; Leading/Trailing/Expanded are omitted from the DOM
 * entirely when not provided. Slot content is opaque to the shell and stays
 * stable across `state`/`isExpanded` changes — new content variations are
 * composed as slot content, not new boolean/variant props.
 */
const AdvancedListItemShell = ({
  leading,
  content,
  trailing,
  expanded,
  isExpanded = false,
  state = 'rest',
  container = 'card',
  onClick,
  className,
  testIds,
}: AdvancedListItemShellProps) => {
  const isDisabled = state === 'disabled'
  const isClickable = !!onClick && !isDisabled
  const isExpandable = hasSlot(expanded)
  const isRow = container === 'row'

  const hasLeading = hasSlot(leading)
  const hasTrailing = hasSlot(trailing)

  const rootRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const expandedId = useId()

  const borderColor = STATE_BORDER_COLOR[state]
  const backgroundColor = state === 'selected' ? palette.primary[50] : undefined
  const focusRingShadow = `0 0 0 ${FOCUS_RING_WIDTH} ${palette.primary.main}`
  const transitionTiming = `${motion.duration.standard}ms ${motion.easing.standard}`

  useEffect(() => {
    if (isDisabled) {
      rootRef.current?.setAttribute('inert', '')
    } else {
      rootRef.current?.removeAttribute('inert')
    }
  }, [isDisabled])

  useEffect(() => {
    if (!isExpandable) {
      return
    }

    const expandedElement = rootRef.current?.querySelector(`[id="${expandedId}"]`)
    if (!expandedElement) {
      return
    }

    if (isExpanded) {
      expandedElement.removeAttribute('inert')
    } else {
      // When collapsing, if focus is inside the expanded content, move it to root
      if (expandedElement.contains(document.activeElement)) {
        rootRef.current?.focus()
      }
      expandedElement.setAttribute('inert', '')
    }
  }, [isExpanded, isExpandable, expandedId])

  const handleRootClick = (event: React.MouseEvent) => {
    if (!isClickable) {
      return
    }

    const target = event.target as HTMLElement

    // Skip clicks on interactive elements that have their own handlers
    const targetElement = target.closest('button, a, input, select, textarea')
    if (targetElement && targetElement !== rootRef.current) {
      return
    }

    // Also skip if target explicitly has role="button" and is not the root
    if (
      target.hasAttribute('role') &&
      target.getAttribute('role') === 'button' &&
      target !== rootRef.current
    ) {
      return
    }

    // Skip clicks inside the expanded content area to prevent collapsing when clicking details
    const expandedElement = rootRef.current?.querySelector(`[id="${expandedId}"]`)
    if (isExpanded && expandedElement?.contains(target)) {
      return
    }

    onClick()
  }

  const handleRootKeyDown = (event: React.KeyboardEvent) => {
    if (!isClickable || !isExpandable) {
      return
    }

    // Only handle keyboard events directly on the root, not on nested elements
    if (event.target !== event.currentTarget) {
      return
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      onClick()
    }
  }

  return (
    <Box
      ref={rootRef}
      role={isClickable && isExpandable ? 'button' : undefined}
      tabIndex={isClickable && isExpandable ? 0 : -1}
      onClick={isClickable ? handleRootClick : undefined}
      onKeyDown={isClickable && isExpandable ? handleRootKeyDown : undefined}
      aria-disabled={isDisabled || undefined}
      aria-expanded={isClickable && isExpandable ? isExpanded : undefined}
      aria-controls={isClickable && isExpandable ? expandedId : undefined}
      className={className}
      data-testid={testIds?.root}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        border:
          isRow && (state === 'rest' || state === 'disabled')
            ? 'none'
            : `${BORDER_WIDTH} solid`,
        borderColor:
          isRow && (state === 'rest' || state === 'disabled') ? undefined : borderColor,
        borderBottom:
          isRow && state === 'rest' ? `${BORDER_WIDTH} solid ${borderColor}` : undefined,
        backgroundColor,
        borderRadius: isRow ? '0px' : BORDER_RADIUS,
        padding: '0.5rem 0.75rem',
        opacity: isDisabled ? 0.5 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
        cursor: isClickable ? 'pointer' : 'default',
        boxShadow: state === 'selected' ? focusRingShadow : 'none',
        transition: prefersReducedMotion
          ? 'none'
          : `border-color ${transitionTiming}, box-shadow ${transitionTiming}, border-radius ${transitionTiming}`,
        '&:hover':
          isClickable && state !== 'selected'
            ? {
                backgroundColor: palette.grey[100],
              }
            : undefined,
        '&:has(:focus-visible), &:focus-visible': !isDisabled
          ? { borderColor: palette.primary.main, boxShadow: focusRingShadow }
          : undefined,
      }}
    >
      <Stack
        direction='row'
        sx={{
          alignItems: 'center',
          flexWrap: { xs: 'wrap', md: 'nowrap' },
          gap: '0.75rem',
        }}
      >
        {hasLeading && (
          <Box data-testid={testIds?.leading} sx={{ alignSelf: 'center', flexShrink: 0 }}>
            {leading}
          </Box>
        )}

        <Box
          data-testid={testIds?.content}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 1 0%',
            minWidth: 0,
          }}
        >
          {content}
        </Box>

        {hasTrailing && (
          <Box
            data-testid={testIds?.trailing}
            sx={{ alignSelf: 'center', flexShrink: 0 }}
          >
            {trailing}
          </Box>
        )}
      </Stack>

      {isExpandable && (
        <Collapse
          in={isExpanded}
          timeout={prefersReducedMotion ? 0 : motion.duration.standard}
          easing={motion.easing.standard}
        >
          <Box
            id={expandedId}
            data-testid={testIds?.expanded}
            sx={{
              margin: '1.25rem 0.75rem',
              backgroundColor: palette.grey[50],
              borderRadius: BORDER_RADIUS,
              border: `${BORDER_WIDTH} solid ${palette.grey[200]}`,
              padding: '0.75rem',
            }}
          >
            {expanded}
          </Box>
        </Collapse>
      )}
    </Box>
  )
}

export default AdvancedListItemShell
export type {
  AdvancedListItemShellContainer,
  AdvancedListItemShellProps,
  AdvancedListItemShellState,
  AdvancedListItemShellTestIds,
}
