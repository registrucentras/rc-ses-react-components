import { Stack, Typography } from '@mui/material'

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
      spacing='0.25rem'
      sx={{ width: '100%' }}
    >
      <HeadingTag data-testid={testIds?.heading} style={{ margin: 0 }}>
        <Typography
          component='span'
          sx={{
            color: palette.grey[900],
            display: 'block',
            fontSize: '1.125rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
            overflowWrap: 'anywhere',
          }}
        >
          {title}
        </Typography>
      </HeadingTag>

      {description !== undefined && description !== null ? (
        <Typography
          data-testid={testIds?.description}
          sx={{
            color: palette.grey[700],
            fontSize: '0.875rem',
            lineHeight: '1.25rem',
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Stack>
  )
}

export default RcSesCardHeader
