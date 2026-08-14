import { ElementType, ReactNode } from 'react'
import { Box, Link as MuiLink, Stack } from '@mui/material'
import { useTranslation } from 'react-i18next'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import RcSesButton from '@/components/common/Button'
import palette from '@/theme/palette'

import RcSesCardV2 from '..'
import { CardHeadingLevel, RcSesCardV2TestIds } from '../types'

export type RcSesGroupCardLink = {
  label: ReactNode
  href: string
}

export type RcSesGroupCardProps = {
  title: ReactNode
  description?: ReactNode
  icon?: ReactNode
  links: RcSesGroupCardLink[]
  viewAllLabel?: ReactNode
  viewAllHref?: string
  onViewAllClick?: () => void
  headingLevel?: CardHeadingLevel
  linkComponent?: ElementType
  className?: string
  testIds?: RcSesCardV2TestIds & { link?: string; viewAll?: string }
}

function RcSesGroupCard({
  title,
  description,
  icon,
  links,
  viewAllLabel,
  viewAllHref,
  onViewAllClick,
  headingLevel = 3,
  linkComponent = 'a',
  className,
  testIds,
}: RcSesGroupCardProps) {
  const { t } = useTranslation('common')
  const hasFooter = Boolean(viewAllHref) || Boolean(onViewAllClick)
  const ctaLabel = viewAllLabel ?? t('components.GroupCard.viewAll')

  return (
    <RcSesCardV2
      className={className}
      description={description}
      heading={title}
      headingLevel={headingLevel}
      icon={icon}
      testIds={testIds}
      theme='brand'
      footer={
        hasFooter ? (
          <Box sx={{ marginRight: 'auto' }}>
            <RcSesButton
              color='primary'
              data-testid={testIds?.viewAll}
              href={viewAllHref}
              onClick={onViewAllClick}
              size='small'
            >
              {ctaLabel}
            </RcSesButton>
          </Box>
        ) : undefined
      }
    >
      <Stack component='ul' sx={{ listStyle: 'none', m: 0, p: 0 }}>
        {links.map((link, index) => (
          <Box
            component='li'
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            sx={{
              borderBottom: `1px solid ${palette.primary[200]}`,
              '&:last-of-type': { borderBottom: 'none' },
            }}
          >
            <MuiLink
              component={linkComponent}
              data-testid={testIds?.link}
              href={link.href}
              underline='none'
              sx={{
                alignItems: 'center',
                color: palette.primary[600],
                display: 'flex',
                fontSize: '0.9375rem',
                fontWeight: 500,
                gap: '0.75rem',
                justifyContent: 'space-between',
                lineHeight: '1.25rem',
                minWidth: 0,
                py: '0.875rem',
                '&:hover': { textDecoration: 'underline' },
              }}
            >
              <Box component='span' sx={{ minWidth: 0, overflowWrap: 'anywhere' }}>
                {link.label}
              </Box>
              <Box aria-hidden component='span' sx={{ display: 'flex', flexShrink: 0 }}>
                <ArrowRightIcon size={20} fillColor={palette.primary[600]} />
              </Box>
            </MuiLink>
          </Box>
        ))}
      </Stack>
    </RcSesCardV2>
  )
}

export default RcSesGroupCard
