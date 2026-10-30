import { Box, Skeleton, Tooltip, Typography } from '@mui/material'

import { borderTokens as border } from '@/theme/borderTokens'
import { colorTokens as color } from '@/theme/colorTokens'
import { effectTokens as effect } from '@/theme/effectTokens'
import { sizeTokens as size } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens as space } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens as typography } from '@/theme/typographyTokens'

import { ListWithIconsItemData, ListWithIconsItemTone } from '../ListWithIcons.types'

interface Props extends ListWithIconsItemData {
  isLoading?: boolean
}

const TEXT_TONE_COLORS: Record<ListWithIconsItemTone, string> = {
  default: color['text-default'],
  secondary: color['text-secondary'],
  muted: color['text-muted'],
  link: color['text-link'],
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
        gap: space['space-4'],
        maxWidth: '100%',
      }}
    >
      {Icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: typography['line-height-body-small'],
            '& > svg': {
              width: size['icon-size-inline'],
              height: size['icon-size-inline'],
            },
          }}
        >
          <Icon fillColor={resolvedColor} size={16} />
        </Box>
      )}
      <Typography
        variant='body2'
        sx={{
          fontSize: typography['font-size-body-small'],
          lineHeight: typography['line-height-body-small'],
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
            bgcolor: color['surface-sunken'],
            color: color['text-default'],
            fontSize: typography['font-size-body-small'],
            fontWeight: 300,
            px: space['space-16'],
            py: space['space-8'],
            borderRadius: border['radius-12'],
            boxShadow: effect['elevation-md'],
          },
        },
        arrow: { sx: { color: color['surface-sunken'] } },
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
        gap: space['space-4'],
        minHeight: space['space-20'],
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          sx={{
            flex: 1,
            height: space['space-16'],
            borderRadius: border['radius-4'],
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
