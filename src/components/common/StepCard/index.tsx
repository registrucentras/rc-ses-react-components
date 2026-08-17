import { Box, BoxProps, Stack, Typography } from '@mui/material'

import palette, { common } from '@/theme/palette'

import { RcSesStepCardProps, StepCardHeadingLevel } from './types'

type ShellProps = RcSesStepCardProps &
  Omit<BoxProps, keyof RcSesStepCardProps | 'children'>

const headingVariants: Record<StepCardHeadingLevel, 'h2' | 'h3' | 'h4' | 'h5' | 'h6'> = {
  2: 'h2',
  3: 'h3',
  4: 'h4',
  5: 'h5',
  6: 'h6',
}

function RcSesStepCard({
  title,
  description,
  headingLevel = 2,
  children,
  footer,
  className,
  testIds,
  sx,
  ...boxProps
}: ShellProps) {
  const HeadingTag = headingVariants[headingLevel]

  return (
    <Box
      {...boxProps}
      className={className}
      data-testid={testIds?.root}
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: common.white,
          border: `1px solid ${palette.grey[300]}`,
          borderRadius: '0.75rem',
          p: { xs: '1.25rem 1.5rem 1.5rem', md: '1.5rem 2rem 2rem' },
          gap: { xs: '1rem', md: '1.5rem' },
          minWidth: 0,
          position: 'relative',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Box data-testid={testIds?.header} sx={{ minWidth: 0, width: '100%' }}>
        <Typography
          component={HeadingTag}
          variant='h2'
          data-testid={testIds?.title}
          sx={{
            fontSize: { xs: '1.25rem', md: '1.5rem' },
            fontWeight: 700,
            lineHeight: { xs: '1.75rem', md: '2rem' },
            color: palette.grey[900],
            m: 0,
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {title}
        </Typography>

        {description && (
          <Typography
            variant='body1'
            data-testid={testIds?.description}
            sx={{
              fontSize: '1rem',
              lineHeight: '1.5rem',
              color: palette.grey[700],
              mt: '0.5rem',
              wordWrap: 'break-word',
              overflowWrap: 'break-word',
            }}
          >
            {description}
          </Typography>
        )}
      </Box>

      {children && (
        <Box data-testid={testIds?.content} sx={{ minWidth: 0, width: '100%' }}>
          {children}
        </Box>
      )}

      {footer && (
        <Stack
          data-testid={testIds?.footer}
          direction='row'
          spacing='0.75rem'
          sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            width: '100%',
            gap: '0.75rem',
          }}
        >
          {footer}
        </Stack>
      )}
    </Box>
  )
}

export default RcSesStepCard
