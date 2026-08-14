import { ElementType, MouseEventHandler, ReactNode } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import palette from '@/theme/palette'

import RcSesCardV2 from '..'

export type RcSesHelpCardTestIds = {
  root?: string
  icon?: string
  title?: string
  description?: string
  cta?: string
}

export type RcSesHelpCardProps = {
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  ctaLabel?: ReactNode
  href?: string
  onClick?: MouseEventHandler<HTMLElement>
  linkComponent?: ElementType
  className?: string
  testIds?: RcSesHelpCardTestIds
}

const ctaSx = {
  alignItems: 'center',
  background: 'transparent',
  border: 0,
  color: palette.primary[600],
  columnGap: '0.375rem',
  cursor: 'pointer',
  display: 'inline-flex',
  fontSize: '0.9375rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  p: 0,
  textDecoration: 'none',
  '&:hover': { textDecoration: 'underline' },
}

function RcSesHelpCard({
  title,
  description,
  icon,
  ctaLabel,
  href,
  onClick,
  linkComponent = 'a',
  className,
  testIds,
}: RcSesHelpCardProps) {
  const hasCta = Boolean(ctaLabel) && (Boolean(href) || Boolean(onClick))

  return (
    <RcSesCardV2 className={className} fullHeight testIds={{ root: testIds?.root }}>
      <Stack spacing='0.75rem' sx={{ alignItems: 'flex-start', height: '100%', minWidth: 0 }}>
        {icon ? (
          <Box
            aria-hidden
            data-testid={testIds?.icon}
            sx={{ display: 'flex', flexShrink: 0 }}
          >
            {icon}
          </Box>
        ) : null}

        <Typography
          data-testid={testIds?.title}
          sx={{
            color: palette.grey[900],
            fontSize: '1rem',
            fontWeight: 600,
            lineHeight: '1.5rem',
            minWidth: 0,
            overflowWrap: 'anywhere',
          }}
        >
          {title}
        </Typography>

        {description !== undefined && description !== null ? (
          <Typography
            data-testid={testIds?.description}
            sx={{
              color: palette.grey[700],
              fontSize: '0.875rem',
              lineHeight: '1.25rem',
              minWidth: 0,
            }}
          >
            {description}
          </Typography>
        ) : null}

        {hasCta ? (
          <Box sx={{ mt: 'auto !important', pt: '0.25rem' }}>
            {href ? (
              <Box
                component={linkComponent}
                data-testid={testIds?.cta}
                href={href}
                sx={ctaSx}
              >
                <Box component='span'>{ctaLabel}</Box>
                <Box
                  aria-hidden
                  component='span'
                  sx={{ display: 'flex', flexShrink: 0 }}
                >
                  <ArrowRightIcon size={18} fillColor={palette.primary[600]} />
                </Box>
              </Box>
            ) : (
              <Box
                component='button'
                data-testid={testIds?.cta}
                onClick={onClick}
                type='button'
                sx={ctaSx}
              >
                <Box component='span'>{ctaLabel}</Box>
                <Box
                  aria-hidden
                  component='span'
                  sx={{ display: 'flex', flexShrink: 0 }}
                >
                  <ArrowRightIcon size={18} fillColor={palette.primary[600]} />
                </Box>
              </Box>
            )}
          </Box>
        ) : null}
      </Stack>
    </RcSesCardV2>
  )
}

export default RcSesHelpCard
