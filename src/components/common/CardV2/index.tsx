import { Box, Stack, Typography } from '@mui/material'

import palette, { common } from '@/theme/palette'

import CardHeading from './components/CardHeading'
import { CardTheme, CardTier, RcSesCardV2Props } from './types'

const tierStyles: Record<CardTier, object> = {
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
    backgroundColor: palette.primary[100],
    border: `1px solid ${palette.primary[200]}`,
  },
  sunken: {
    backgroundColor: palette.grey[100],
    border: `1px solid ${palette.grey[200]}`,
  },
}

function RcSesCardV2({
  tier = 'card',
  theme = 'default',
  fullHeight = false,
  heading,
  headingLevel = 3,
  description,
  icon,
  badge,
  headerActions,
  children,
  footer,
  className,
  testIds,
}: RcSesCardV2Props) {
  const hasHeader = heading !== undefined && heading !== null

  return (
    <Box
      className={className}
      data-testid={testIds?.root}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: fullHeight ? '100%' : 'auto',
        minWidth: 0,
        // Enables stretched-link pattern in interactive presets (e.g. Category-tile)
        position: 'relative',
        ...tierStyles[tier],
        ...themeStyles[theme],
      }}
    >
      {hasHeader ? (
        <Stack
          data-testid={testIds?.header}
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
            <CardHeading
              badge={badge}
              heading={heading}
              headingLevel={headingLevel}
              testIds={testIds}
            />

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

          {headerActions ? (
            <Stack
              data-testid={testIds?.headerActions}
              direction='row'
              spacing='0.5rem'
              sx={{ alignItems: 'center', flexShrink: 0 }}
            >
              {headerActions}
            </Stack>
          ) : null}
        </Stack>
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
          sx={{ alignItems: 'center', justifyContent: 'flex-end', width: '100%' }}
        >
          {footer}
        </Stack>
      ) : null}
    </Box>
  )
}

export default RcSesCardV2
