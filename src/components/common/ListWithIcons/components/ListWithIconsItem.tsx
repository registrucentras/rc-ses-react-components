import { Box, Skeleton, Tooltip, Typography } from '@mui/material'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { spacingTokens } from '@/theme/spacingTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import { ListWithIconsItemData, ListWithIconsItemTone } from '../ListWithIcons.types'

interface Props extends ListWithIconsItemData {
  isLoading?: boolean
}

const TEXT_TONE_COLORS: Record<ListWithIconsItemTone, string> = {
  default: colorTokens['text-default'],
  secondary: colorTokens['text-secondary'],
  muted: colorTokens['text-muted'],
  link: colorTokens['text-link'],
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
        gap: spacingTokens['spacing-aliases-meta-icon-text-gap'],
        maxWidth: '100%',
      }}
    >
      {Icon && (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: typographyTokens['line-height-body-caption'],
            '& > svg': {
              width: sizeTokens['icon-size-inline'],
              height: sizeTokens['icon-size-inline'],
            },
          }}
        >
          <Icon fillColor={resolvedColor} size={16} />
        </Box>
      )}
      <Typography
        variant='body2'
        sx={{
          fontSize: typographyTokens['font-size-body-caption'],
          lineHeight: typographyTokens['line-height-body-caption'],
          fontWeight: 400,
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
            bgcolor: colorTokens['surface-base'],
            color: colorTokens['text-default'],
            fontSize: typographyTokens['font-size-body-small'],
            lineHeight: typographyTokens['line-height-body-small'],
            fontWeight: 400,
            p: spacingTokens['spacing-aliases-tooltip-padding'],
            borderRadius: borderTokens['radius-8'],
            boxShadow: effectTokens['elevation-md'],
          },
        },
        arrow: { sx: { color: colorTokens['surface-base'] } },
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
        gap: spacingRoleBasedTokens['space-4'],
        minHeight: spacingRoleBasedTokens['space-20'],
        opacity: disabled ? 0.5 : 1,
        pointerEvents: disabled ? 'none' : 'auto',
      }}
    >
      {isLoading ? (
        <Skeleton
          variant='rectangular'
          sx={{
            flex: 1,
            height: spacingRoleBasedTokens['space-16'],
            borderRadius: borderTokens['radius-4'],
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
