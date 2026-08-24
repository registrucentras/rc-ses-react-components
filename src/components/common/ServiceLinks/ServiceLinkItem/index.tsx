import { Box, Skeleton, Stack, Typography } from '@mui/material'
import { ElementType } from 'react'

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

type Props = RcSesServiceLinkItem & {
  isLoading?: boolean
  testIds?: RcSesServiceLinksTestIds
  /**
   * Custom element used to render navigable rows. Receives `href` (and other
   * anchor props) and must render an interactive element. Falls back to `<a>`.
   * For router links, pass a small adapter, e.g.
   * `({ href, ...rest }) => <RouterLink to={href} {...rest} />`.
   */
  linkComponent?: ElementType
}

function ServiceLinkItem({
  label,
  href,
  target,
  onClick,
  disabled = false,
  isLoading = false,
  linkComponent,
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

  // Navigable rows render as `linkComponent` (or native `<a>`); a disabled row
  // degrades to a static div. The Stack itself is the interactive element, so
  // hover/focus styles, aria state and the anchor semantics all live on one node.
  const RowComponent: ElementType = isLink ? (linkComponent ?? 'a') : 'div'

  const interactiveProps = isLink
    ? {
        href,
        target,
        rel: target === '_blank' ? 'noopener noreferrer' : undefined,
        onClick,
      }
    : {}

  return (
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
        color: 'inherit',
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
}

export default ServiceLinkItem
