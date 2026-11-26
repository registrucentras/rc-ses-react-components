import { Box } from '@mui/material'
import React, { memo, useMemo } from 'react'

import IconProps from '@/assets/IconProps'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'

type SquareTileSize = 16 | 20 | 24 | 32 | 40 | 44 | 48 | 56 | 64
type SquareTileVariant = 'solid' | 'cyan' | 'muted' | 'green'

interface Props {
  Icon: React.JSXElementConstructor<IconProps>
  size?: SquareTileSize
  variant?: SquareTileVariant
}

// Figma Icon-tile backgrounds bind color primitives directly; no semantic
const SOLID_TILE_BG = 'var(--rc-color-cyans-500)'
const GREEN_TILE_BG = 'var(--rc-color-greens-50)'
const CYAN_TILE_BG = 'var(--rc-color-cyans-50)'

// Tile size / icon size / radius. Figma leaves the tile sizes and the 40px
// tile's 22px icon unbound.
const SIZE_TOKENS: Record<SquareTileSize, [string, string, string]> = {
  16: ['1rem', sizeTokens['icon-size-12'], borderTokens['radius-2']],
  20: ['1.25rem', sizeTokens['icon-size-14'], borderTokens['radius-4']],
  24: ['1.5rem', sizeTokens['icon-size-16'], borderTokens['radius-4']],
  32: ['2rem', sizeTokens['icon-size-20'], borderTokens['radius-6']],
  40: ['2.5rem', sizeTokens['icon-size-22'], borderTokens['radius-8']],
  44: ['2.75rem', sizeTokens['icon-size-24'], borderTokens['radius-10']],
  48: ['3rem', sizeTokens['icon-size-28'], borderTokens['radius-12']],
  56: ['3.5rem', sizeTokens['icon-size-32'], borderTokens['radius-14']],
  64: ['4rem', sizeTokens['icon-size-36'], borderTokens['radius-16']],
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
      case 'cyan':
        return {
          backgroundColor: CYAN_TILE_BG,
          iconColor: colorTokens['text-default'],
        }
      case 'green':
        return {
          backgroundColor: GREEN_TILE_BG,
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
