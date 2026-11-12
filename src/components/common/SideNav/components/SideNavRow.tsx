import { Box, Typography } from '@mui/material'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

// Figma's .Side-nav-row has no hover state; no semantic role matches the tint.
const ROW_HOVER_BG = 'var(--rc-color-neutrals-50)'

interface Props {
  itemId: string
  label: string
  count?: number
  ariaLabel?: string
  active: boolean
  onClick?: () => void
}

function SideNavRow({ itemId, label, count, ariaLabel, active, onClick }: Props) {
  return (
    <Box
      component={onClick ? 'button' : 'div'}
      type={onClick ? 'button' : undefined}
      onClick={onClick}
      data-item-id={itemId}
      aria-current={active ? 'page' : undefined}
      aria-label={ariaLabel}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: spacingTokens['spacing-aliases-side-nav-gap'],
        width: '100%',
        boxSizing: 'border-box',
        margin: 0,
        border: 'none',
        borderLeft: `${borderTokens['border-focus']} solid ${active ? colorTokens['border-focus'] : 'transparent'}`,
        backgroundColor: active ? colorTokens['surface-brand-subtle'] : 'transparent',
        paddingX: spacingTokens['spacing-aliases-side-nav-row-padding-x'],
        paddingY: spacingTokens['spacing-aliases-side-nav-row-padding-y'],
        textAlign: 'left',
        // A scrolling list (overflow='scroll') must not shrink its rows to fit.
        flexShrink: 0,
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick && !active ? { backgroundColor: ROW_HOVER_BG } : undefined,
        '&:focus-visible': {
          outline: `${borderTokens['border-focus']} solid ${colorTokens['border-focus']}`,
          outlineOffset: `calc(-1 * ${borderTokens['border-focus']})`,
        },
      }}
    >
      <Typography
        component='span'
        sx={{
          flex: '1 1 0%',
          minWidth: 0,
          fontSize: typographyTokens['font-size-body-regular'],
          lineHeight: typographyTokens['line-height-body-regular'],
          fontWeight: 400,
          color: active ? colorTokens['text-default'] : colorTokens['text-link'],
        }}
      >
        {label}
      </Typography>
      {count !== undefined && (
        <Typography
          component='span'
          sx={{
            flexShrink: 0,
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

export default SideNavRow
