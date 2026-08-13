import { Box, BoxProps, Stack } from '@mui/material'

import palette, { common } from '@/theme/palette'

import { CardTheme, CardVariant, RcSesCardProps } from './types'

const variantStyles: Record<CardVariant, object> = {
  card: {
    borderRadius: '0.75rem',
    p: { xs: '1.25rem 1.5rem 1.5rem', md: '1.5rem 2rem 2rem' },
    gap: { xs: '1rem', md: '1.5rem' },
  },
  subcard: {
    borderRadius: '0.5rem',
    p: { xs: '1rem', md: '1.25rem 1.5rem' },
    gap: { xs: '0.75rem', md: '1rem' },
  },
}

const themeStyles: Record<CardTheme, object> = {
  default: {
    backgroundColor: common.white,
    border: `1px solid ${palette.grey[300]}`,
  },
  brand: {
    backgroundColor: palette.primary[50],
    border: `1px solid ${palette.primary[200]}`,
  },
  sunken: {
    backgroundColor: palette.grey[100],
    border: `1px solid ${palette.grey[200]}`,
  },
}

type ShellProps = RcSesCardProps & Omit<BoxProps, keyof RcSesCardProps | 'children'>

function RcSesCard({
  variant = 'card',
  theme = 'default',
  fullHeight = false,
  header,
  children,
  footer,
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
          height: fullHeight ? '100%' : 'auto',
          minWidth: 0,
          // enables stretched-link pattern in interactive compositions
          position: 'relative',
          ...variantStyles[variant],
          ...themeStyles[theme],
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {header ? (
        <Box data-testid={testIds?.header} sx={{ minWidth: 0, width: '100%' }}>
          {header}
        </Box>
      ) : null}

      {children ? (
        <Box
          data-testid={testIds?.content}
          sx={{ flexGrow: fullHeight ? 1 : 0, minWidth: 0, width: '100%' }}
        >
          {children}
        </Box>
      ) : null}

      {footer ? (
        <Stack
          data-testid={testIds?.footer}
          direction='row'
          spacing='0.75rem'
          sx={{ alignItems: 'center', justifyContent: 'space-between', width: '100%' }}
        >
          {footer}
        </Stack>
      ) : null}
    </Box>
  )
}

export default RcSesCard
export type { RcSesCardProps }
