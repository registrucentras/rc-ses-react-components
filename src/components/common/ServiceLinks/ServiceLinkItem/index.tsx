import { Box, Skeleton, Stack, Typography } from '@mui/material'
import { ElementType, MouseEvent, ReactNode } from 'react'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import { subcard } from '@/theme/cards'
import palette from '@/theme/palette'

import { RcSesServiceLinkItem, RcSesServiceLinksTestIds } from '../types'

const linkRow = {
  borderRadius: subcard.borderRadius,
  gap: '1rem',
  iconSize: 20,
  labelFontWeight: 500,
  lineHeight: '1.5rem',
  paddingBlock: '0.75rem',
}

type RenderLinkArgs = {
  href: string
  target?: string
  rel?: string
  onClick?: (e: MouseEvent<HTMLElement>) => void
  children: ReactNode
  className?: string
}

type Props = RcSesServiceLinkItem & {
  isLoading?: boolean
  testIds?: RcSesServiceLinksTestIds
  /**
   * Custom link wrapper. Receives href/target/rel/onClick and must render
   * them on the returned node (e.g. router `<Link>`, `<NavLink>`, `<a>` with
   * extra behavior). When omitted, a native `<a>` is used.
   */
  renderLink?: (args: RenderLinkArgs) => ReactNode
}

function ServiceLinkItem({
  label,
  href,
  target,
  onClick,
  disabled = false,
  isLoading = false,
  renderLink,
  testIds,
}: Props) {
  if (isLoading) {
    return (
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: linkRow.lineHeight,
          py: linkRow.paddingBlock,
          width: '100%',
        }}
      >
        <Skeleton
          sx={{ borderRadius: 1, height: '1rem', width: '60%' }}
          variant='rounded'
        />
        <Skeleton
          sx={{ height: linkRow.iconSize, width: linkRow.iconSize }}
          variant='rounded'
        />
      </Box>
    )
  }

  const isLink = href !== undefined && !disabled
  const useRenderLink = isLink && typeof renderLink === 'function'

  // Navigable rows render as a native `<a>`; disabled or custom-wrapped rows
  // collapse to a plain div (the custom wrapper adds the anchor around it).
  const RowComponent: ElementType = isLink && !useRenderLink ? 'a' : 'div'

  const interactiveProps = isLink && !useRenderLink
    ? {
        href,
        target,
        rel: target === '_blank' ? 'noopener noreferrer' : undefined,
        onClick,
      }
    : {}

  const row = (
    <Stack
      component={RowComponent}
      data-testid={testIds?.item}
      direction='row'
      {...interactiveProps}
      aria-disabled={disabled || undefined}
      tabIndex={disabled ? -1 : undefined}
      sx={{
        alignItems: 'center',
        borderRadius: linkRow.borderRadius,
        cursor: disabled ? 'default' : 'pointer',
        gap: linkRow.gap,
        justifyContent: 'space-between',
        minHeight: linkRow.lineHeight,
        opacity: disabled ? 0.5 : 1,
        p: `${linkRow.paddingBlock} 0`,
        pointerEvents: disabled ? 'none' : 'auto',
        textDecoration: 'none',
        width: '100%',

        '&:focus-visible': {
          outline: `2px solid ${palette.primary[500]}`,
          outlineOffset: '2px',
        },

        '&:hover .RcSesServiceLink-label, &:hover .RcSesServiceLink-icon': {
          color: palette.primary[600],
        },
        '&:hover .RcSesServiceLink-icon': {
          transform: 'translateX(2px)',
        },

        '@media (prefers-reduced-motion: reduce)': {
          '& .RcSesServiceLink-label, & .RcSesServiceLink-icon': {
            transition: 'none',
          },
          '&:hover .RcSesServiceLink-icon': {
            transform: 'none',
          },
        },
      }}
    >
      <Typography
        className='RcSesServiceLink-label'
        component='span'
        data-testid={testIds?.itemLabel}
        variant='body1'
        sx={{
          color: palette.primary[700],
          fontWeight: linkRow.labelFontWeight,
          lineHeight: linkRow.lineHeight,
          minWidth: 0,
          overflowWrap: 'anywhere',
          transition: 'color 150ms ease',
        }}
      >
        {label}
      </Typography>

      <Box
        aria-hidden
        className='RcSesServiceLink-icon'
        data-testid={testIds?.itemIcon}
        sx={{
          color: palette.primary[600],
          display: 'flex',
          flexShrink: 0,
          transition: 'color 150ms ease, transform 150ms ease',
        }}
      >
        <ArrowRightIcon fillColor='currentColor' size={linkRow.iconSize} weight='bold' />
      </Box>
    </Stack>
  )

  if (useRenderLink) {
    return (
      <Box
        sx={{
          // Reset default anchor styles for consumer-provided link wrappers so
          // the row's own styling (from Stack below) is what shows through.
          display: 'contents',
          '& a': { color: 'inherit', textDecoration: 'none' },
        }}
      >
        {renderLink!({
          href: href!,
          target,
          rel: target === '_blank' ? 'noopener noreferrer' : undefined,
          onClick,
          children: row,
        })}
      </Box>
    )
  }

  return row
}

export default ServiceLinkItem
