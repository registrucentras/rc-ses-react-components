import { Box, Typography } from '@mui/material'

import palette from '@/theme/palette'

const BORDER_WIDTH = '0.125rem'

type Props = {
  label: string
  count?: number
  ariaLabel?: string
  active: boolean
  onClick?: () => void
}

function SideNavRow({ label, count, ariaLabel, active, onClick }: Props) {
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
        width: '100%',
        boxSizing: 'border-box',
        margin: 0,
        border: 'none',
        borderLeft: `${BORDER_WIDTH} solid ${active ? palette.primary.main : 'transparent'}`,
        backgroundColor: active ? palette.primary[50] : 'transparent',
        padding: '0.75rem 1rem',
        textAlign: 'left',
        cursor: onClick ? 'pointer' : 'default',
        '&:hover': onClick && !active ? { backgroundColor: palette.grey[50] } : undefined,
        '&:focus-visible': {
          outline: `${BORDER_WIDTH} solid ${palette.primary.main}`,
          outlineOffset: '-2px',
        },
      }}
    >
      <Typography
        component='span'
        sx={{
          flex: '1 1 0%',
          minWidth: 0,
          fontSize: '0.9375rem',
          lineHeight: '1.375rem',
          color: active ? palette.grey[900] : palette.primary[700],
        }}
      >
        {label}
      </Typography>
      {count !== undefined && (
        <Typography
          component='span'
          sx={{
            flexShrink: 0,
            fontSize: '0.8125rem',
            lineHeight: '1.125rem',
            color: palette.grey[500],
          }}
        >
          {count}
        </Typography>
      )}
    </Box>
  )
}

export default SideNavRow
