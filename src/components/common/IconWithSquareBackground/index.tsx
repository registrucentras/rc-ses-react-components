import { Box } from '@mui/material'
import React, { memo, useMemo } from 'react'

import IconProps from '@/assets/IconProps'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'

type SquareTileSize = 40 | 44
type SquareTileVariant = 'solid' | 'soft' | 'muted'

interface Props {
  Icon: React.JSXElementConstructor<IconProps>
  size?: SquareTileSize
  variant?: SquareTileVariant
}

// Figma Icon-tile Color=Solid binds Cyans/500; no semantic role matches it.
const SOLID_TILE_BG = 'var(--rc-color-cyans-500)'

// Tile size / icon size / radius. Figma leaves the tile sizes and the 40px
// tile's 22px icon unbound.
const SIZE_TOKENS: Record<SquareTileSize, [string, string, string]> = {
  40: ['2.5rem', '1.375rem', borderTokens['radius-8']],
  44: ['2.75rem', sizeTokens['icon-size-24'], borderTokens['radius-10']],
}

function IconWithSquareBackground(props: Props) {
  const { Icon } = props

  const size = props?.size ?? 44
  const variant = props?.variant ?? 'solid'

  const [boxSize, iconSize, radius] = SIZE_TOKENS[size]

  const { backgroundColor, iconColor } = useMemo<{
    backgroundColor: string
    iconColor: string
  }>(() => {
    switch (variant) {
      case 'soft':
        return {
          backgroundColor: colorTokens['surface-brand-subtle'],
          iconColor: colorTokens['text-default'],
        }
      case 'muted':
        return {
          backgroundColor: colorTokens['surface-sunken'],
          iconColor: colorTokens['text-default'],
        }
      case 'solid':
      default:
        return {
          backgroundColor: SOLID_TILE_BG,
          iconColor: colorTokens['text-inverse'],
        }
    }
  }, [variant])

  return (
    <Box
      className='IconWithSquareBackground-root'
      sx={{
        alignItems: 'center',
        backgroundColor,
        borderRadius: radius,
        display: 'flex',
        justifyContent: 'center',
        height: boxSize,
        width: boxSize,
        aspectRatio: '1 / 1',

        svg: {
          height: iconSize,
          width: iconSize,
        },
        'svg path': {
          fill: iconColor,
        },
      }}
    >
      <Icon />
    </Box>
  )
}

export default memo(IconWithSquareBackground)
