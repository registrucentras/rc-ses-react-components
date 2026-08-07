import type { IconButtonProps, TooltipProps } from '@mui/material'
import { Fade, IconButton, Tooltip } from '@mui/material'
import { useForkRef } from '@mui/material/utils'
import React from 'react'
import { useTranslation } from 'react-i18next'

import QuestionIcon from '@/assets/icons/QuestionIcon'

export type RcSesTooltipProps = {
  title: string
  placement?: TooltipProps['placement']
} & (
  | {
      /* overrides for default trigger button */
      slotProps?: { trigger?: Partial<IconButtonProps> }
      children?: never
    }
  | {
      slotProps?: never
      /* custom trigger replaces default button, but should forward ref and define a11y name */
      children: React.ReactElement
    }
)

// only one tooltip should be visible, no need for context for that
let closeCurrent: (() => void) | null = null

const popperProps: TooltipProps['PopperProps'] = {
  popperOptions: {
    modifiers: [
      { name: 'arrow', options: { padding: 14 } },
      {
        name: 'offset',
        options: {
          offset: ({ placement }: { placement: string }) => {
            if (placement.endsWith('-end')) {
              return [11, -4]
            }

            if (placement.endsWith('-start')) {
              return [-11, -4]
            }

            return [0, -4]
          },
        },
      },
    ],
  },
}

/**
 * Controlled MUI Tooltip, ensures only one tooltip is visible and adds tap-to-dismiss to mobile
 * (ClickAwayListener doesn't work with bubble itself)
 */
function RcSesTooltip({
  title,
  placement = 'top-start',
  slotProps,
  children,
}: RcSesTooltipProps) {
  const { t } = useTranslation('common')

  const [open, setOpen] = React.useState(false)

  const triggerRef = React.useRef<HTMLElement>(null)

  // if children is used, child ref merge is needed
  const childRef = (
    children as (React.ReactElement & { ref?: React.Ref<HTMLElement> }) | undefined
  )?.ref

  const handleTriggerRef = useForkRef(triggerRef, childRef ?? null)

  const hide = React.useCallback(() => setOpen(false), [])

  const show = React.useCallback(() => {
    if (closeCurrent !== hide) {
      closeCurrent?.()
      closeCurrent = hide
    }

    setOpen(true)
  }, [hide])

  // on mobile: tap anywhere to dismiss
  React.useEffect(() => {
    if (!open) {
      return undefined
    }

    const onPointerDown = ({ target }: PointerEvent) => {
      const element = target instanceof Element ? target : null

      if (
        triggerRef.current?.contains(element) ||
        element?.closest('.MuiTooltip-popper')
      ) {
        return
      }

      hide()
    }

    document.addEventListener('pointerdown', onPointerDown)

    return () => document.removeEventListener('pointerdown', onPointerDown)
  }, [open, hide])

  React.useEffect(
    () => () => {
      if (closeCurrent === hide) {
        closeCurrent = null
      }
    },
    [hide],
  )

  const { sx: triggerSx, ...triggerProps } = slotProps?.trigger ?? {}

  const trigger = children ?? (
    <IconButton
      size='small'
      aria-label={t('components.Tooltip.trigger')}
      {...triggerProps}
      sx={[
        {
          p: 0.25,
          ml: 0.5,
          verticalAlign: 'text-bottom',
          color: 'grey.600',
          '&:hover, &.Mui-focusVisible': { color: 'primary.main' },
        },
        ...(Array.isArray(triggerSx) ? triggerSx : [triggerSx]),
      ]}
    >
      <QuestionIcon size={16} aria-hidden />
    </IconButton>
  )

  return (
    <Tooltip
      title={title}
      open={open}
      describeChild
      arrow
      placement={placement}
      leaveDelay={100}
      disableTouchListener
      TransitionComponent={Fade}
      PopperProps={popperProps}
      onOpen={show}
      onClose={hide}
    >
      {/* same principle as in MUI Tooltip */}
      {React.cloneElement(trigger, {
        ref: handleTriggerRef,
        onClick: (event: React.MouseEvent) => {
          trigger.props.onClick?.(event)
          show()
        },
      })}
    </Tooltip>
  )
}

export default RcSesTooltip
