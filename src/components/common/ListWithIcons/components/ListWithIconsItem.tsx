import { Box, Skeleton, Tooltip, Typography } from '@mui/material'

import palette from '@/theme/palette'

import { ListWithIconsItemData, ListWithIconsItemTone } from '../ListWithIcons.types'

interface Props extends ListWithIconsItemData {
  isLoading?: boolean
}

const TEXT_TONE_COLORS: Record<ListWithIconsItemTone, string> = {
  default: palette.grey[900],
  secondary: palette.grey[600],
  muted: palette.grey[500],
  link: palette.primary['700'],
}

const ListWithIconsItem = ({
  icon,
  text,
  disabled,
  tooltip,
  textColor = 'secondary',
  isLoading,
}: Props) => {
  const Icon = icon

  const resolvedColor = TEXT_TONE_COLORS[textColor as ListWithIconsItemTone] ?? textColor

  const content = (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: 0.5,
        maxWidth: '100%',
      }}
    >
      {Icon && (
        <Box sx={{ display: 'flex', alignItems: 'center', height: 20 }}>
          <Icon fillColor={resolvedColor} size={16} />
        </Box>
      )}
      <Typography
        variant='body2'
        sx={{
          fontSize: '14px',
          lineHeight: '20px',
          fontWeight: 300,
          whiteSpace: 'normal',
          wordBreak: 'break-word',
          color: resolvedColor,
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
        maxWidth: '100%',
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
