import { Box, Collapse, Stack, Typography } from '@mui/material'
import { useCallback, useEffect, useId, useMemo, useRef } from 'react'

import RcSesBadge from '@/components/common/Badge'
import ListWithIcons from '@/components/common/ListWithIcons'
import motion from '@/theme/motion'
import palette from '@/theme/palette'

import {
  AdvancedListItemLeading as AdvancedListItemLeadingData,
  AdvancedListItemProps,
  AdvancedListItemState,
} from './AdvancedListItem.types'
import AdvancedListItemLeading from './components/AdvancedListItemLeading'
import AdvancedListItemTrailing from './components/AdvancedListItemTrailing'
import usePrefersReducedMotion from './hooks/usePrefersReducedMotion'

const BORDER_RADIUS = '0.5rem'
const BORDER_WIDTH = '0.0625rem'
const FOCUS_RING_WIDTH = '0.0625rem'

const STATE_BORDER_COLOR: Record<AdvancedListItemState, string> = {
  rest: palette.grey[300],
  selected: palette.primary.main,
  disabled: palette.grey[200],
  error: palette.error.main,
}

const LEADING_MEDIA_SX = {
  width: '2rem',
  height: '2rem',
  flexShrink: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
} as const

const INTERACTIVE_LEADING_TYPES = new Set(['reorder', 'checkbox', 'radio'])
const INTERACTIVE_TRAILING_TYPES = new Set([
  'actions',
  'toggle',
  'checkbox',
  'radio',
  'stepper',
])

const AdvancedListItem = ({
  title,
  label,
  subtitle,
  metaItems,
  leadingMedia,
  expandedContent,
  expanded = false,
  onExpandedChange,
  leading = { type: 'none' },
  trailing = { type: 'none' },
  state = 'rest',
  onClick,
}: AdvancedListItemProps) => {
  const isDisabled = state === 'disabled'
  const isSelectable = leading.type === 'checkbox' || leading.type === 'radio'
  const isClickable = (!!onClick || isSelectable) && !isDisabled

  const effectiveState: AdvancedListItemState =
    state === 'rest' && 'checked' in leading && leading.checked ? 'selected' : state

  const hasInteractiveChild =
    INTERACTIVE_LEADING_TYPES.has(leading.type) ||
    INTERACTIVE_TRAILING_TYPES.has(trailing.type) ||
    (trailing.type === 'price' && !!trailing.onDelete)

  const isRootFocusable = isClickable && !hasInteractiveChild
  const isExpandable = !!expandedContent
  const canAttachExpandToLeading =
    isExpandable && (leading.type === 'radio' || leading.type === 'checkbox')
  const needsRootFocusFallback =
    isExpandable && !canAttachExpandToLeading && !isRootFocusable

  let rootTabIndex: number | undefined
  if (isRootFocusable) {
    rootTabIndex = 0
  } else if (needsRootFocusFallback) {
    rootTabIndex = -1
  }

  const contentId = useId()
  const titleId = useId()
  const selectorRef = useRef<HTMLInputElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const borderColor = STATE_BORDER_COLOR[effectiveState]
  const backgroundColor = effectiveState === 'selected' ? palette.primary[50] : undefined
  const focusRingShadow = `0 0 0 ${FOCUS_RING_WIDTH} ${palette.primary.main}`
  const transitionTiming = `${motion.duration.standard}ms ${motion.easing.standard}`

  const leadingWithExpandNotify: AdvancedListItemLeadingData = useMemo(() => {
    if (
      !canAttachExpandToLeading ||
      (leading.type !== 'radio' && leading.type !== 'checkbox')
    ) {
      return leading
    }
    return {
      ...leading,
      onChange: (checked: boolean) => {
        leading.onChange(checked)
        onExpandedChange?.(checked)
      },
    }
  }, [canAttachExpandToLeading, leading, onExpandedChange])

  // Runs for every collapse, not just ones driven by the leading control's own onChange —
  // an external trigger (e.g. a parent-level "collapse" action) sets `expanded` directly,
  // bypassing that onChange entirely. Without this, focus is left stranded inside content
  // that's about to become inert.
  useEffect(() => {
    if (!expanded && contentRef.current?.contains(document.activeElement)) {
      if (selectorRef.current) {
        selectorRef.current.focus()
      } else {
        rootRef.current?.focus()
      }
    }
  }, [expanded])

  const isInsideExpandedContent = useCallback(
    (target: EventTarget | null) => !!contentRef.current?.contains(target as Node),
    [],
  )

  const activate = useCallback(
    (event: React.SyntheticEvent) => {
      if (isInsideExpandedContent(event.target)) {
        return
      }

      const clickedInputDirectly =
        isSelectable && selectorRef.current?.contains(event.target as Node)

      if (isSelectable && !clickedInputDirectly) {
        if (
          leadingWithExpandNotify.type === 'checkbox' ||
          leadingWithExpandNotify.type === 'radio'
        ) {
          const nextChecked =
            leadingWithExpandNotify.type === 'radio'
              ? true
              : !leadingWithExpandNotify.checked
          leadingWithExpandNotify.onChange(nextChecked)
        }
      }
      onClick?.()
    },
    [isInsideExpandedContent, isSelectable, leadingWithExpandNotify, onClick],
  )

  const handleRootClick = useCallback(
    (event: React.MouseEvent) => activate(event),
    [activate],
  )

  const handleRootKeyDown = useCallback(
    (event: React.KeyboardEvent) => {
      if (isInsideExpandedContent(event.target)) {
        return
      }

      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault()
        activate(event)
      }
    },
    [activate, isInsideExpandedContent],
  )

  return (
    <Box
      ref={rootRef}
      role={isRootFocusable ? 'button' : undefined}
      tabIndex={rootTabIndex}
      onClick={isClickable ? handleRootClick : undefined}
      onKeyDown={isRootFocusable ? handleRootKeyDown : undefined}
      aria-disabled={isDisabled || undefined}
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
        boxShadow: effectiveState === 'selected' ? focusRingShadow : 'none',
        transition: prefersReducedMotion
          ? 'none'
          : `border-color ${transitionTiming}, box-shadow ${transitionTiming}`,
        '&:hover': isClickable
          ? { borderColor: effectiveState === 'rest' ? palette.grey[400] : borderColor }
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
        {leading.type !== 'none' && (
          <Box sx={{ alignSelf: 'center', order: { xs: -1, md: 0 } }}>
            <AdvancedListItemLeading
              leading={leadingWithExpandNotify}
              disabled={isDisabled}
              inputRef={canAttachExpandToLeading ? selectorRef : undefined}
              expandableId={canAttachExpandToLeading ? contentId : undefined}
              expanded={canAttachExpandToLeading ? expanded : undefined}
              titleId={titleId}
            />
          </Box>
        )}

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '0.75rem',
            minWidth: 0,
            flex: {
              xs: trailing.type !== 'none' ? '1 1 100%' : '1 1 0%',
              md: '1 1 0%',
            },
            alignSelf: subtitle ? undefined : 'center',
          }}
        >
          {!!leadingMedia && <Box sx={LEADING_MEDIA_SX}>{leadingMedia}</Box>}

          <Box
            sx={{
              flex: 1,
              minWidth: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.25rem',
            }}
          >
            <Stack
              direction='row'
              sx={{
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '0.5rem',
                alignSelf: 'stretch',
              }}
            >
              <Typography
                id={titleId}
                variant='h3'
                sx={{
                  color: palette.grey[900],
                  fontSize: '1rem',
                  fontWeight: 600,
                  lineHeight: '1.375rem',
                }}
              >
                {title}
              </Typography>
              {!!label && <RcSesBadge label={label} variant='neutral' size='small' />}
            </Stack>

            {!!subtitle && (
              <Typography
                variant='body2'
                sx={{
                  color: palette.grey[600],
                  fontSize: '0.875rem',
                  fontWeight: 400,
                  lineHeight: '1.25rem',
                }}
              >
                {subtitle}
              </Typography>
            )}

            {!!metaItems?.length && (
              <ListWithIcons items={metaItems} layout='horizontal' />
            )}
          </Box>
        </Box>

        {trailing.type !== 'none' && (
          <Box
            sx={{
              alignSelf: 'center',
              order: leading.type !== 'none' ? { xs: -1, md: 0 } : 0,
              marginLeft: leading.type !== 'none' ? { xs: 'auto', md: 0 } : 0,
            }}
          >
            <AdvancedListItemTrailing trailing={trailing} disabled={isDisabled} />
          </Box>
        )}
      </Stack>
      {isExpandable && (
        <Collapse
          in={expanded}
          timeout={prefersReducedMotion ? 0 : motion.duration.standard}
          easing={motion.easing.standard}
        >
          <Box
            ref={contentRef}
            id={contentId}
            sx={{
              marginTop: '0.5rem',
              backgroundColor: palette.grey[50],
              borderRadius: BORDER_RADIUS,
              padding: '0.75rem 1rem',
            }}
            {...({
              inert: expanded ? undefined : '',
            } as React.HTMLAttributes<HTMLDivElement>)}
          >
            {expandedContent}
          </Box>
        </Collapse>
      )}
    </Box>
  )
}

export default AdvancedListItem
export type { AdvancedListItemProps }
