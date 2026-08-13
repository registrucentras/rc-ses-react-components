import { Box, Stack, Typography } from '@mui/material'

import palette from '@/theme/palette'

import { RcSesCardHeaderProps } from './types'

function RcSesCardHeader({
  title,
  headingLevel = 3,
  icon,
  badge,
  description,
  actions,
  className,
  testIds,
}: RcSesCardHeaderProps) {
  const HeadingTag = `h${headingLevel}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <Stack
      className={className}
      data-testid={testIds?.root}
      direction='row'
      spacing='0.75rem'
      sx={{ alignItems: 'flex-start', width: '100%' }}
    >
      {icon ? (
        <Box
          aria-hidden
          data-testid={testIds?.icon}
          sx={{ display: 'flex', flexShrink: 0 }}
        >
          {icon}
        </Box>
      ) : null}

      <Stack spacing='0.25rem' sx={{ flex: 1, minWidth: 0 }}>
        <HeadingTag data-testid={testIds?.heading} style={{ margin: 0 }}>
          <Typography
            component='span'
            sx={{
              alignItems: 'center',
              color: palette.grey[900],
              display: 'inline-flex',
              fontSize: '1.125rem',
              fontWeight: 600,
              gap: '0.5rem',
              lineHeight: '1.5rem',
              overflowWrap: 'anywhere',
            }}
          >
            {title}
            {badge !== undefined && badge !== null ? (
              <Box component='span' data-testid={testIds?.badge} sx={{ flexShrink: 0 }}>
                {badge}
              </Box>
            ) : null}
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

      {actions ? (
        <Stack
          data-testid={testIds?.actions}
          direction='row'
          spacing='0.5rem'
          sx={{ alignItems: 'center', flexShrink: 0 }}
        >
          {actions}
        </Stack>
      ) : null}
    </Stack>
  )
}

export default RcSesCardHeader
