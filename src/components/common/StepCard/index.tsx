import { Box, Stack, Typography } from '@mui/material'

import palette from '@/theme/palette'

import RcSesCardShell from '../CardShell'
import { RcSesStepCardProps, StepCardHeadingLevel } from './types'

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
}: RcSesStepCardProps) {
  const HeadingTag = headingVariants[headingLevel]

  const headerContent = (
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
  )

  const footerContent = footer ? (
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
  ) : undefined

  return (
    <RcSesCardShell
      variant='card'
      theme='default'
      header={headerContent}
      footer={footerContent}
      className={className}
      testIds={{ root: testIds?.root, content: testIds?.content }}
      sx={sx}
    >
      {children}
    </RcSesCardShell>
  )
}

export default RcSesStepCard
