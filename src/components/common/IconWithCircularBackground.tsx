import { Box, styled } from '@mui/material'
import React, { memo, useMemo } from 'react'

import IconProps from '@/assets/IconProps'
import resolvePaletteColorPath from '@/assets/resolvePaletteColorPath'
import palette from '@/theme/palette'

type Shade = keyof (typeof palette)[keyof typeof palette]

type Props = {
  bgShade?: Shade | 'white'
  color?: keyof typeof palette
  Icon: React.JSXElementConstructor<IconProps>
  iconShade?: Shade | 'white'
  size?: 'tiny' | 'small' | 'medium' | 'mediumLarge' | 'large'
}
function IconWithCircularBackground(props: Props) {
  const { Icon } = props

  const bgShade: Props['bgShade'] = props?.bgShade ?? '50'
  const iconShade: Props['iconShade'] = props?.iconShade ?? '600'

  const color = props?.color ?? 'primary'
  const size = props?.size ?? 'medium'

  const sizes = useMemo<[string, string]>(() => {
    switch (size) {
      case 'tiny':
        return ['1.5rem', '1rem']
      case 'small':
        return ['2rem', '1rem']
      case 'medium':
        return ['2.5rem', '1.5rem']
      case 'mediumLarge':
        return ['3.5rem', '2rem']
      case 'large':
        return ['4.25rem', '2.25rem']
      default:
        return ['2.5rem', '1.5rem']
    }
  }, [size])

  const StyledIcon = styled(Icon)({
    height: sizes[1],
    width: sizes[1],
  })

  return (
    <Box
      className='IconWithCircularBackground-root'
      sx={{
        alignItems: 'center',
        backgroundColor: bgShade === 'white' ? 'white' : palette[color][bgShade],
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        height: sizes[0],
        width: sizes[0],
        aspectRatio: '1 / 1',

        'svg path': {
          fill: resolvePaletteColorPath(
            iconShade === 'white' ? 'white' : `${color}.${iconShade}`,
          ),
        },
      }}
    >
      <StyledIcon />
    </Box>
  )
}

export default memo(IconWithCircularBackground)
