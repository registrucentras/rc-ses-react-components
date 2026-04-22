import { Box, Skeleton, Tooltip, Typography } from '@mui/material'

import palette from '@/theme/palette'

interface Props {
  icon?: React.ReactNode
  text?: string
  disabled?: boolean
  tooltip?: string
  isLoading?: boolean
}

const ListWithIconsItem = ({ icon, text, disabled, tooltip, isLoading }: Props) => {
  const content = (
    <Box
      sx={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 0.5,
        maxWidth: { xs: '100%', md: 'none' },
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', width: 20 }}>{icon}</Box>
      <Typography
        variant='body2'
        sx={{
          fontSize: '14px',
          fontWeight: 300,
          whiteSpace: 'nowrap',
        }}
      >
        {text}
      </Typography>
    </Box>
  )

  const contentToReturn = tooltip ? (
    <Tooltip
      title={tooltip ?? ''}
      arrow
      placement='top'
      slotProps={{
        tooltip: {
          sx: {
            bgcolor: palette.grey[50],
            color: 'text.primary',
            fontSize: '14px',
            fontWeight: 300,
            px: 2,
            py: 1,
            borderRadius: '12px',
            boxShadow: '0px 8px 10px rgba(0,0,0,0.15)',
          },
        },
        arrow: { sx: { color: palette.grey[50] } },
      }}
    >
      {content}
    </Tooltip>
  ) : (
    content
  )

  return (
    <Box
      component='li'
      sx={{
        display: 'flex',
        alignItems: 'center',
        width: { xs: '100%', md: isLoading ? '120px' : 'auto' },
        gap: 0.5,
        minHeight: 20,
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          sx={{
            flex: 1,
            height: 16,
            borderRadius: 1,
            width: { xs: '100%', md: 120 },
          }}
        />
      ) : (
        contentToReturn
      )}
    </Box>
  )
}

export default ListWithIconsItem
