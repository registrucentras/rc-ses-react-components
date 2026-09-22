import { Box, Collapse, Stack } from '@mui/material'
import { ReactNode, useEffect, useId, useRef } from 'react'

import motion from '@/theme/motion'
import palette from '@/theme/palette'

import usePrefersReducedMotion from '../AdvancedListItem/hooks/usePrefersReducedMotion'
import {
  AdvancedListItemShellProps,
  AdvancedListItemShellState,
  AdvancedListItemShellTestIds,
} from './AdvancedListItemShell.types'

const BORDER_RADIUS = '0.5rem'
const BORDER_WIDTH = '0.0625rem'
const FOCUS_RING_WIDTH = '0.0625rem'

const STATE_BORDER_COLOR: Record<AdvancedListItemShellState, string> = {
  rest: palette.grey[300],
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
  onClick,
  className,
  testIds,
}: AdvancedListItemShellProps) => {
  const isDisabled = state === 'disabled'
  const isClickable = !!onClick && !isDisabled
  const isExpandable = hasSlot(expanded)

  const hasLeading = hasSlot(leading)
  const hasTrailing = hasSlot(trailing)

  const rootRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()
  const generatedExpandedId = useId()
  const expandedId = testIds?.expanded ?? generatedExpandedId

  const borderColor = STATE_BORDER_COLOR[state]
  const backgroundColor = state === 'selected' ? palette.primary[50] : undefined
  const focusRingShadow = `0 0 0 ${FOCUS_RING_WIDTH} ${palette.primary.main}`
  const transitionTiming = `${motion.duration.standard}ms ${motion.easing.standard}`

  useEffect(() => {
    if (!isExpanded && contentRef.current?.contains(document.activeElement)) {
      rootRef.current?.focus()
    }
  }, [isExpanded])

  const handleRootClick = () => {
    if (isClickable) {
      onClick()
    }
  }

  const handleRootKeyDown = (event: React.KeyboardEvent) => {
    if (!isClickable) {
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
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      onClick={isClickable ? handleRootClick : undefined}
      onKeyDown={isClickable ? handleRootKeyDown : undefined}
      aria-disabled={isDisabled || undefined}
      aria-expanded={isExpandable ? isExpanded : undefined}
      aria-controls={isExpandable ? expandedId : undefined}
      className={className}
      data-testid={testIds?.root}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        boxSizing: 'border-box',
        border: `${BORDER_WIDTH} solid`,
        borderColor,
        backgroundColor,
        borderRadius: BORDER_RADIUS,
        padding: '0.5rem 0.75rem',
        opacity: isDisabled ? 0.6 : 1,
        pointerEvents: isDisabled ? 'none' : 'auto',
        cursor: isClickable ? 'pointer' : 'default',
        boxShadow: state === 'selected' ? focusRingShadow : 'none',
        transition: prefersReducedMotion
          ? 'none'
          : `border-color ${transitionTiming}, box-shadow ${transitionTiming}`,
        '&:hover': isClickable
          ? { borderColor: state === 'rest' ? palette.grey[400] : borderColor }
          : undefined,
        '&:focus-visible, &:focus-within': !isDisabled
          ? { borderColor: palette.primary.main, boxShadow: focusRingShadow }
          : undefined,
      }}
    >
      <Stack
        direction='row'
        sx={{
          alignItems: 'flex-start',
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
            ref={contentRef}
            id={expandedId}
            data-testid={testIds?.expanded}
            sx={{
              marginTop: '0.5rem',
              backgroundColor: palette.grey[50],
              borderRadius: BORDER_RADIUS,
              padding: '0.75rem 1rem',
            }}
            {...({ inert: isExpanded ? undefined : '' } as { inert?: string })}
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
  AdvancedListItemShellProps,
  AdvancedListItemShellState,
  AdvancedListItemShellTestIds,
}
