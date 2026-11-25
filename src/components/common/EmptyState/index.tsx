import { Box, BoxProps, Typography } from '@mui/material'
import { MouseEventHandler, useEffect, useId, useState } from 'react'

import {
  InfoIcon,
  MagnifyingGlassIcon,
  WarningCircleIcon,
  WarningFillIcon,
} from '@/assets/icons/phosphorIcons'
import RcSesButton from '@/components/common/Button'
import normalizeSx from '@/components/utils/normalizeSx'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import '@/theme/tokens.css'
import { typographyTokens } from '@/theme/typographyTokens'

export type EmptyStateType = 'neutral' | 'info' | 'warning' | 'error'
export type EmptyStateSize = 'regular' | 'compact'

export interface EmptyStateProps extends Omit<BoxProps, 'title' | 'children'> {
  title: string
  description: string
  type?: EmptyStateType
  size?: EmptyStateSize
  hint?: string
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6
  action?: {
    label: string
    onClick: MouseEventHandler<HTMLButtonElement>
    disabled?: boolean
  }
  showAction?: boolean
  validationError?: boolean
  announce?: boolean
}

const tones = {
  neutral: { Icon: MagnifyingGlassIcon, color: colorTokens['text-secondary'] },
  info: { Icon: InfoIcon, color: colorTokens['status-info-text'] },
  warning: { Icon: WarningFillIcon, color: colorTokens['status-warning-text'] },
  error: { Icon: WarningCircleIcon, color: colorTokens['status-error-icon'] },
}

const textStyle = (
  role: 'heading-h3' | 'heading-h5' | 'body-regular' | 'body-small',
) => ({
  fontFamily: typographyTokens['font-family'],
  fontSize: typographyTokens[`font-size-${role}`],
  lineHeight: typographyTokens[`line-height-${role}`],
  fontWeight: typographyTokens[`font-weight-${role}`],
  letterSpacing: typographyTokens[`letter-spacing-${role}`],
})

export default function RcSesEmptyState({
  title,
  description,
  type = 'neutral',
  size = 'regular',
  hint,
  headingLevel = 2,
  action,
  showAction = true,
  validationError = false,
  announce = false,
  sx,
  ...rest
}: EmptyStateProps) {
  const titleId = useId()
  const compact = size === 'compact'
  const iconSize = sizeTokens[compact ? 'icon-size-24' : 'icon-size-32']
  const { Icon, color } = tones[type]
  const [announcement, setAnnouncement] = useState('')
  const shouldAnnounce = announce && (type === 'warning' || type === 'error')

  useEffect(() => {
    const timer = setTimeout(
      () => setAnnouncement(shouldAnnounce ? `${title}. ${description}` : ''),
      0,
    )
    return () => clearTimeout(timer)
  }, [shouldAnnounce, title, description])

  return (
    <Box
      component='section'
      aria-labelledby={titleId}
      {...rest}
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          minWidth: 0,
          boxSizing: 'border-box',
          backgroundColor: colorTokens['surface-sunken'],
          borderRadius: borderTokens[compact ? 'radius-list-item' : 'radius-subcard'],
          paddingBlock: spacingRoleBasedTokens[compact ? 'space-16' : 'space-32'],
          paddingInline: spacingRoleBasedTokens[compact ? 'space-16' : 'space-24'],
          gap: spacingRoleBasedTokens[compact ? 'space-8' : 'space-16'],
          boxShadow: validationError
            ? `inset 0 0 0 ${borderTokens['stroke-2']} ${colorTokens['status-error-border']}`
            : 'none',
          textAlign: 'center',
          overflowWrap: 'anywhere',
        },
        ...normalizeSx(sx),
      ]}
    >
      <Icon
        weight='regular'
        fillColor={color}
        aria-hidden='true'
        focusable='false'
        style={{ flexShrink: 0, width: iconSize, height: iconSize }}
      />
      <Box
        sx={{
          width: '100%',
          maxWidth: compact ? undefined : '560px',
          display: 'flex',
          flexDirection: 'column',
          gap: spacingRoleBasedTokens[compact ? 'space-4' : 'space-8'],
        }}
      >
        <Typography
          id={titleId}
          component={`h${headingLevel}`}
          sx={{
            ...textStyle(compact ? 'heading-h5' : 'heading-h3'),
            color: colorTokens['text-default'],
          }}
        >
          {title}
        </Typography>
        <Typography
          component='p'
          sx={{
            ...textStyle(compact ? 'body-small' : 'body-regular'),
            color: colorTokens['text-secondary'],
          }}
        >
          {description}
        </Typography>
        {!compact && hint && (
          <Typography
            component='p'
            sx={{ ...textStyle('body-small'), color: colorTokens['text-secondary'] }}
          >
            {hint}
          </Typography>
        )}
      </Box>
      {showAction && action && (
        <RcSesButton
          type='button'
          variant='outlined'
          color='grey'
          size='small'
          onClick={action.onClick}
          disabled={action.disabled}
          sx={{
            width: { xs: '100%', sm: 'auto' },
            maxWidth: '100%',
            whiteSpace: 'normal',
            overflowWrap: 'anywhere',
          }}
        >
          {action.label}
        </RcSesButton>
      )}
      <Box
        role='status'
        aria-live='polite'
        aria-atomic='true'
        sx={{
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: 0,
          margin: '-1px',
          overflow: 'hidden',
          clipPath: 'inset(50%)',
          whiteSpace: 'nowrap',
          border: 0,
        }}
      >
        {shouldAnnounce ? announcement : ''}
      </Box>
    </Box>
  )
}
