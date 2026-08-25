import { Box, Stack, Typography } from '@mui/material'
import { Children, Fragment, type ReactNode, isValidElement } from 'react'

import RcSesBadge from '@/components/common/Badge'
import cards from '@/theme/cards'
import palette from '@/theme/palette'

import { RcSesTitleBlockProps } from './types'

function RcSesTitleBlock({
  title,
  headingLevel = 3,
  titleVariant = 'h6',
  titleColor,
  orientation = 'horizontal',
  icon,
  count,
  description,
  actions,
  className,
  testIds,
}: RcSesTitleBlockProps) {
  const HeadingTag = `h${headingLevel}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  const hasCount = count !== undefined && count !== null
  const hasDescription = description !== undefined && description !== null
  const isVertical = orientation === 'vertical'
  // Fragments are unwrapped so <>{a}{b}</> counts as 2, not 1.
  const hasMultipleActions = actions
    ? (isValidElement(actions) && actions.type === Fragment
        ? Children.toArray((actions.props as { children: ReactNode }).children)
        : Children.toArray(actions)
      ).length > 1
    : false

  const iconNode = icon ? (
    <Box aria-hidden data-testid={testIds?.icon} sx={{ display: 'flex', flexShrink: 0 }}>
      {icon}
    </Box>
  ) : null

  const textColumn = (
    <Stack spacing={cards.header.gap} sx={{ flex: 1, minWidth: 0, width: '100%' }}>
      <HeadingTag data-testid={testIds?.heading} style={{ margin: 0 }}>
        <Typography
          component='span'
          variant={titleVariant}
          sx={{
            color: titleColor ?? palette.grey[900],
            // inline only when the badge has to sit on the heading's last line
            display: hasCount ? 'inline' : 'block',
            fontWeight: cards.header.titleFontWeight,
            overflowWrap: 'anywhere',
          }}
        >
          {title}
        </Typography>

        {hasCount ? (
          <Box
            component='span'
            data-testid={testIds?.badge}
            sx={{
              display: 'inline-flex',
              ml: cards.header.badgeGap,
              verticalAlign: 'middle',
            }}
          >
            <RcSesBadge
              label={String(count)}
              showIcon={false}
              size='small'
              variant='neutral'
            />
          </Box>
        ) : null}
      </HeadingTag>

      {hasDescription ? (
        <Typography
          data-testid={testIds?.description}
          variant='body2'
          sx={{
            color: palette.grey[700],
            lineHeight: cards.header.descriptionLineHeight,
          }}
        >
          {description}
        </Typography>
      ) : null}
    </Stack>
  )

  const actionsSlot =
    actions && !isVertical ? (
      <Stack
        data-testid={testIds?.actions}
        direction={hasMultipleActions ? { xs: 'column', sm: 'row' } : 'row'}
        spacing={cards.header.actionsGap}
        sx={{
          alignItems: 'center',
          flexShrink: 0,
          ...(hasMultipleActions && {
            alignItems: { xs: 'stretch', sm: 'center' },
            width: { xs: '100%', sm: 'auto' },
            '& > *': { width: { xs: '100%', sm: 'auto' } },
          }),
        }}
      >
        {actions}
      </Stack>
    ) : null

  return (
    <Stack
      className={className}
      data-testid={testIds?.root}
      direction={isVertical ? 'column' : { xs: 'column', sm: 'row' }}
      spacing={cards.header.rowGap}
      sx={{
        alignItems:
          isVertical || hasDescription
            ? 'flex-start'
            : { xs: 'flex-start', sm: 'center' },
        width: '100%',
      }}
    >
      {isVertical ? (
        <>
          {iconNode}
          {textColumn}
        </>
      ) : (
        // Icon + text stay glued together as one horizontal group so a mobile
        // layout only breaks between the group and the actions slot, never
        // between the icon and its title.
        <Stack
          direction='row'
          spacing={cards.header.rowGap}
          sx={{
            alignItems: hasDescription ? 'flex-start' : 'center',
            flex: 1,
            minWidth: 0,
            width: '100%',
          }}
        >
          {iconNode}
          {textColumn}
        </Stack>
      )}

      {actionsSlot}
    </Stack>
  )
}

export default RcSesTitleBlock
