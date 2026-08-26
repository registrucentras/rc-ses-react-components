import { Box, Typography } from '@mui/material'

import palette, { common } from '@/theme/palette'

type Props = {
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
        gap: '0.5rem',
        flexShrink: 0,
        whiteSpace: 'nowrap',
        margin: 0,
        borderRadius: '9999px',
        border: `0.0625rem solid ${active ? palette.primary.main : palette.grey[200]}`,
        backgroundColor: active ? palette.primary[50] : common.white,
        padding: '0.5rem 1rem',
        cursor: onClick ? 'pointer' : 'default',
        WebkitTapHighlightColor: 'transparent',
        '&:focus-visible': {
          outline: `0.125rem solid ${palette.primary.main}`,
          outlineOffset: '0.125rem',
        },
      }}
    >
      <Typography
        component='span'
        sx={{
          fontSize: '0.875rem',
          lineHeight: '1.25rem',
          color: active ? palette.grey[900] : palette.grey[600],
        }}
      >
        {label}
      </Typography>
      {count !== undefined && (
        <Typography
          component='span'
          sx={{ fontSize: '0.8125rem', lineHeight: '1.125rem', color: palette.grey[500] }}
        >
          {count}
        </Typography>
      )}
    </Box>
  )
}

export default SideNavPill
