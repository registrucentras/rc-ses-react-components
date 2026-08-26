import { Box, styled } from '@mui/material'
import React, { memo, useMemo } from 'react'

import IconProps from '@/assets/IconProps'
import { ThemeColors } from '@/assets/ThemeColors'
import resolvePaletteColorPath from '@/assets/resolvePaletteColorPath'
import palette from '@/theme/palette'

type SquareTileSize = 40 | 44
type SquareTileVariant = 'solid' | 'soft' | 'muted'

type Props = {
  Icon: React.JSXElementConstructor<IconProps>
  size?: SquareTileSize
  variant?: SquareTileVariant
}

const SIZE_TOKENS: Record<SquareTileSize, [string, string, string]> = {
  40: ['2.5rem', '1.375rem', '0.5rem'], // 40 / 22 / 8
  44: ['2.75rem', '1.5rem', '0.625rem'], // 44 / 24 / 10
}

function IconWithSquareBackground(props: Props) {
  const { Icon } = props

  const size = props?.size ?? 44
  const variant = props?.variant ?? 'solid'

  const [boxSize, iconSize, radius] = SIZE_TOKENS[size]

  const { backgroundColor, iconColorPath } = useMemo<{
    backgroundColor: string
    iconColorPath: ThemeColors | 'white'
  }>(() => {
    switch (variant) {
      case 'soft':
        return {
          backgroundColor: palette.primary[50],
          iconColorPath: 'primary.600',
        }
      case 'muted':
        return {
          backgroundColor: palette.grey[100],
          iconColorPath: 'grey.600',
        }
      case 'solid':
      default:
        return {
          backgroundColor: palette.primary[500],
          iconColorPath: 'white',
        }
    }
  }, [variant])

  const StyledIcon = styled(Icon)({
    height: iconSize,
    width: iconSize,
  })

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

        'svg path': {
          fill: resolvePaletteColorPath(iconColorPath),
        },
      }}
    >
      <StyledIcon />
    </Box>
  )
}

export default memo(IconWithSquareBackground)
