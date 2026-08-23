import { Stack, Typography } from '@mui/material'

import cards from '@/theme/cards'
import palette from '@/theme/palette'

import { RcSesCardHeaderProps } from './types'

function RcSesCardHeader({
  title,
  headingLevel = 3,
  description,
  className,
  testIds,
}: RcSesCardHeaderProps) {
  const HeadingTag = `h${headingLevel}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <Stack
      className={className}
      data-testid={testIds?.root}
      spacing={cards.header.gap}
      sx={{ width: '100%' }}
    >
      <HeadingTag data-testid={testIds?.heading} style={{ margin: 0 }}>
        <Typography
          component='span'
          variant='h6'
          sx={{
            color: palette.grey[900],
            display: 'block',
            fontWeight: cards.header.titleFontWeight,
            overflowWrap: 'anywhere',
          }}
        >
          {title}
        </Typography>
      </HeadingTag>

      {description !== undefined && description !== null ? (
        <Typography
          data-testid={testIds?.description}
          variant='body2'
          sx={{
            color: palette.grey[700],
            lineHeight: cards.header.descriptionLineHeight,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Stack>
  )
}

export default RcSesCardHeader
