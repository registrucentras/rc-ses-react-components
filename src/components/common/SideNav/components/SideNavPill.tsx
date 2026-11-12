import { Box, Typography } from '@mui/material'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

interface Props {
  label: string
  count?: number
  ariaLabel?: string
  active: boolean
  onClick?: () => void
}

function SideNavPill({ label, count, ariaLabel, active, onClick }: Props) {
  return (
    <Box
      component={onClick ? 'button' : 'div'}
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      aria-label={ariaLabel}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: spacingRoleBasedTokens['space-8'],
        flexShrink: 0,
        whiteSpace: 'nowrap',
        margin: 0,
        borderRadius: borderTokens['radius-pill'],
        border: `${borderTokens['border-default']} solid ${active ? colorTokens['border-focus'] : colorTokens['border-subtle']}`,
        backgroundColor: active
          ? colorTokens['surface-brand-subtle']
          : colorTokens['surface-base'],
        paddingX: spacingRoleBasedTokens['space-16'],
        paddingY: spacingRoleBasedTokens['space-8'],
        cursor: onClick ? 'pointer' : 'default',
        WebkitTapHighlightColor: 'transparent',
        '&:focus-visible': {
          outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
          outlineOffset: borderTokens['border-focus'],
        },
      }}
    >
      <Typography
        component='span'
        sx={{
          fontSize: typographyTokens['font-size-body-small'],
          lineHeight: typographyTokens['line-height-body-small'],
          fontWeight: 400,
          color: active ? colorTokens['text-default'] : colorTokens['text-secondary'],
        }}
      >
        {label}
      </Typography>
      {count !== undefined && (
        <Typography
          component='span'
          sx={{
            fontSize: typographyTokens['font-size-body-caption'],
            lineHeight: typographyTokens['line-height-body-caption'],
            fontWeight: 400,
            color: colorTokens['text-muted'],
          }}
        >
          {count}
        </Typography>
      )}
    </Box>
  )
}

export default SideNavPill
