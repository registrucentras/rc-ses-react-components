import { Box, Collapse, Stack, Typography } from '@mui/material'
import { useCallback, useId, useMemo, useRef } from 'react'

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

  const hasInteractiveChild =
    INTERACTIVE_LEADING_TYPES.has(leading.type) ||
    INTERACTIVE_TRAILING_TYPES.has(trailing.type) ||
    (trailing.type === 'price' && !!trailing.onDelete)

  const isRootFocusable = isClickable && !hasInteractiveChild
  const isExpandable = !!expandedContent
  const canAttachExpandToLeading =
    isExpandable && (leading.type === 'radio' || leading.type === 'checkbox')

  const contentId = useId()
  const titleId = useId()
  const selectorRef = useRef<HTMLInputElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const prefersReducedMotion = usePrefersReducedMotion()

  const borderColor = STATE_BORDER_COLOR[state]
  const backgroundColor = state === 'selected' ? palette.primary[50] : undefined
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
        if (!checked && contentRef.current?.contains(document.activeElement)) {
          selectorRef.current?.focus()
        }
        leading.onChange(checked)
        onExpandedChange?.(checked)
      },
    }
  }, [canAttachExpandToLeading, leading, onExpandedChange])

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
      role={isRootFocusable ? 'button' : undefined}
      tabIndex={isRootFocusable ? 0 : undefined}
      onClick={isClickable ? handleRootClick : undefined}
      onKeyDown={isRootFocusable ? handleRootKeyDown : undefined}
      aria-disabled={isDisabled || undefined}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.75rem',
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
      <Stack direction='row' alignItems='flex-start' gap='0.75rem'>
        {leading.type !== 'none' && (
          <Box sx={{ alignSelf: 'center' }}>
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

        {!!leadingMedia && <Box sx={LEADING_MEDIA_SX}>{leadingMedia}</Box>}

        <Box
          sx={{
            flex: 1,
            minWidth: 0,
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem',
            alignSelf: subtitle ? undefined : 'center',
          }}
        >
          <Stack
            direction='row'
            alignItems='center'
            flexWrap='wrap'
            gap='0.5rem'
            sx={{ alignSelf: 'stretch' }}
          >
            <Typography
              id={titleId}
              variant='h3'
              sx={{ fontSize: '1rem', fontWeight: 600, lineHeight: '1.375rem' }}
              color={palette.grey[900]}
            >
              {title}
            </Typography>
            {!!label && <RcSesBadge label={label} variant='neutral' size='small' />}
          </Stack>

          {!!subtitle && (
            <Typography
              variant='body2'
              sx={{ fontSize: '0.875rem', fontWeight: 400, lineHeight: '1.25rem' }}
              color={palette.grey[600]}
            >
              {subtitle}
            </Typography>
          )}

          {!!metaItems?.length && <ListWithIcons items={metaItems} layout='horizontal' />}
        </Box>

        {trailing.type !== 'none' && (
          <Box sx={{ alignSelf: 'center' }}>
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
              marginLeft: leading.type !== 'none' ? '2rem' : 0,
              backgroundColor: palette.grey[50],
              borderRadius: BORDER_RADIUS,
              padding: '0.75rem 1rem',
            }}
            {...({ inert: !expanded } as React.HTMLAttributes<HTMLDivElement>)}
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
