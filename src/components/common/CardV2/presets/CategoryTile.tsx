import { ElementType, ReactNode } from 'react'
import { Box, Stack, Typography } from '@mui/material'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import palette from '@/theme/palette'

import RcSesCardV2 from '..'
import { CardHeadingLevel } from '../types'

export type RcSesCategoryTileTestIds = {
  root?: string
  icon?: string
  title?: string
  description?: string
  link?: string
  arrow?: string
}

export type RcSesCategoryTileProps = {
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  href: string
  headingLevel?: CardHeadingLevel
  linkComponent?: ElementType
  className?: string
  testIds?: RcSesCategoryTileTestIds
}

function RcSesCategoryTile({
  title,
  description,
  icon,
  href,
  headingLevel = 3,
  linkComponent = 'a',
  className,
  testIds,
}: RcSesCategoryTileProps) {
  return (
    <RcSesCardV2
      className={className}
      headingLevel={headingLevel}
      testIds={{ root: testIds?.root }}
    >
      <Stack
        direction='row'
        spacing='1rem'
        sx={{ alignItems: 'flex-start', minWidth: 0, width: '100%' }}
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
          <Typography
            component={`h${headingLevel}`}
            data-testid={testIds?.title}
            sx={{
              color: palette.grey[900],
              fontSize: '1rem',
              fontWeight: 600,
              lineHeight: '1.5rem',
              m: 0,
              minWidth: 0,
              overflowWrap: 'anywhere',
            }}
          >
            <Box
              component={linkComponent}
              data-testid={testIds?.link}
              href={href}
              sx={{
                color: 'inherit',
                textDecoration: 'none',
                // Stretched link: makes the whole tile clickable
                '&::after': {
                  content: '""',
                  inset: 0,
                  position: 'absolute',
                  zIndex: 1,
                },
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              {title}
            </Box>
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
        </Stack>

        <Box
          aria-hidden
          data-testid={testIds?.arrow}
          sx={{ alignSelf: 'center', display: 'flex', flexShrink: 0 }}
        >
          <ArrowRightIcon size={20} fillColor={palette.primary[600]} />
        </Box>
      </Stack>
    </RcSesCardV2>
  )
}

export default RcSesCategoryTile
