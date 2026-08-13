import { Box, BoxProps, Stack, Typography } from '@mui/material'
import { ReactNode } from 'react'

import palette, { common } from '@/theme/palette'

export type RcSesImageCardTestIds = {
  root?: string
  image?: string
  header?: string
  title?: string
  description?: string
  button?: string
}

export type RcSesImageCardProps = {
  image: ReactNode
  title: ReactNode
  description?: ReactNode
  button?: ReactNode
  className?: string
  testIds?: RcSesImageCardTestIds
}

type ShellProps = RcSesImageCardProps &
  Omit<BoxProps, keyof RcSesImageCardProps | 'children'>

function RcSesImageCard({
  image,
  title,
  description,
  button,
  className,
  testIds,
  sx,
  ...boxProps
}: ShellProps) {
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
          minWidth: 0,
          position: 'relative',
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <Stack spacing={{ xs: '1rem', md: '1.5rem' }} sx={{ alignItems: 'center' }}>
        {image && (
          <Box
            data-testid={testIds?.image}
            sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}
          >
            {image}
          </Box>
        )}

        <Stack
          data-testid={testIds?.header}
          spacing='0.25rem'
          sx={{ alignItems: 'center', textAlign: 'center' }}
        >
          <Typography
            data-testid={testIds?.title}
            component='h3'
            sx={{
              color: palette.grey[900],
              fontSize: '1.125rem',
              fontWeight: 600,
              lineHeight: '1.5rem',
              margin: 0,
            }}
          >
            {title}
          </Typography>

          {description && (
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
          )}
        </Stack>

        {button && (
          <Box
            data-testid={testIds?.button}
            sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}
          >
            {button}
          </Box>
        )}
      </Stack>
    </Box>
  )
}

export default RcSesImageCard
