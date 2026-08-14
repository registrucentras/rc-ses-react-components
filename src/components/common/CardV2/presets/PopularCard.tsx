import { ElementType, MouseEventHandler, ReactNode } from 'react'
import { Box, Link as MuiLink, Typography } from '@mui/material'

import RcSesButton from '@/components/common/Button'
import palette from '@/theme/palette'

import RcSesCardV2 from '..'

export type RcSesPopularCardTestIds = {
  root?: string
  title?: string
  orderCta?: string
  moreLink?: string
}

export type RcSesPopularCardProps = {
  title: ReactNode
  orderLabel?: ReactNode
  orderHref?: string
  onOrderClick?: MouseEventHandler<HTMLElement>
  moreLabel?: ReactNode
  moreHref?: string
  onMoreClick?: MouseEventHandler<HTMLElement>
  linkComponent?: ElementType
  className?: string
  testIds?: RcSesPopularCardTestIds
}

function RcSesPopularCard({
  title,
  orderLabel = 'Užsakyti',
  orderHref,
  onOrderClick,
  moreLabel = 'Plačiau',
  moreHref,
  onMoreClick,
  linkComponent = 'a',
  className,
  testIds,
}: RcSesPopularCardProps) {
  const hasOrder = Boolean(orderHref) || Boolean(onOrderClick)
  const hasMore = Boolean(moreHref) || Boolean(onMoreClick)

  return (
    <RcSesCardV2
      className={className}
      fullHeight
      testIds={{ root: testIds?.root }}
      footer={
        hasOrder || hasMore ? (
          <Box
            sx={{
              alignItems: 'center',
              display: 'flex',
              gap: '1rem',
              marginRight: 'auto',
            }}
          >
            {hasOrder ? (
              <RcSesButton
                color='primary'
                data-testid={testIds?.orderCta}
                href={orderHref}
                onClick={onOrderClick}
                size='small'
              >
                {orderLabel}
              </RcSesButton>
            ) : null}

            {hasMore ? (
              <MuiLink
                component={moreHref ? linkComponent : 'button'}
                data-testid={testIds?.moreLink}
                href={moreHref}
                onClick={onMoreClick}
                type={moreHref ? undefined : 'button'}
                underline='none'
                sx={{
                  color: palette.primary[600],
                  fontSize: '0.9375rem',
                  fontWeight: 500,
                  lineHeight: '1.25rem',
                  '&:hover': { textDecoration: 'underline' },
                }}
              >
                {moreLabel}
              </MuiLink>
            ) : null}
          </Box>
        ) : undefined
      }
    >
      <Typography
        data-testid={testIds?.title}
        sx={{
          color: palette.grey[900],
          fontSize: '0.9375rem',
          fontWeight: 500,
          lineHeight: '1.375rem',
          minWidth: 0,
          overflowWrap: 'anywhere',
        }}
      >
        {title}
      </Typography>
    </RcSesCardV2>
  )
}

export default RcSesPopularCard
