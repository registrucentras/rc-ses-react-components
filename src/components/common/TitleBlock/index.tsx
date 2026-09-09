import { Box, Stack, Typography } from '@mui/material'

import RcSesBadge from '@/components/common/Badge'
import cards from '@/theme/cards'
import palette from '@/theme/palette'

import { RcSesTitleBlockProps, TitleBlockHeadingLevel } from './types'

function RcSesTitleBlock({
  title,
  headingLevel = 3,
  titleVariant = 'h6',
  titleTone = 'default',
  orientation = 'horizontal',
  icon,
  count,
  description,
  actions,
  headingId,
  className,
  testIds,
}: RcSesTitleBlockProps) {
  // Annotated rather than asserted: a template literal expression widens to
  // `string` without a contextual type, and JSX cannot resolve an intrinsic
  // element from that.
  const HeadingTag: `h${TitleBlockHeadingLevel}` = `h${headingLevel}`
  const hasCount = count !== undefined && count !== null
  const hasDescription = description !== undefined && description !== null
  const isVertical = orientation === 'vertical'
  // The card-header weight belongs to the heading variants only.
  const isHeadingScale = titleVariant !== 'body1'

  const iconNode = icon ? (
    <Box
      aria-hidden
      data-testid={testIds?.icon}
      sx={{
        display: 'flex',
        flexShrink: 0,
      }}
    >
      {icon}
    </Box>
  ) : null

  const textColumn = (
    <Stack
      spacing={isVertical ? { xs: '0.5rem', sm: cards.header.rowGap } : cards.header.gap}
      sx={{ flex: 1, minWidth: 0, width: '100%' }}
    >
      <HeadingTag id={headingId} data-testid={testIds?.heading} style={{ margin: 0 }}>
        <Typography
          component='span'
          variant={titleVariant}
          sx={{
            color: titleTone === 'brand' ? palette.primary[700] : palette.grey[900],
            // inline only when the badge has to sit on the heading's last line
            display: hasCount ? 'inline' : 'block',
            // Vertical orientation compresses the title on xs; desktop keeps
            // whatever size `titleVariant` defines. Keep lineHeight paired with
            // fontSize so wrapping titles do not clip descenders.
            fontSize: isVertical ? { xs: '0.875rem', sm: '1.5rem' } : undefined,
            lineHeight: isVertical ? { xs: 1.25, sm: 1.33 } : undefined,
            fontWeight: isHeadingScale ? cards.header.titleFontWeight : undefined,
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

  const actionsSlot = actions ? (
    <Stack
      data-testid={testIds?.actions}
      direction='row'
      spacing={cards.header.actionsGap}
      sx={{
        alignItems: 'center',
        flexShrink: 0,
        flexWrap: 'wrap',
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
      // Flex gap skips items removed via `display: none`, so the icon's mobile
      // hide in the vertical orientation actually collapses its slot instead of
      // leaving a sibling-selector margin above the title.
      useFlexGap
      sx={{
        alignItems: isVertical ? 'flex-start' : { xs: 'flex-start', sm: 'center' },
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
            alignItems: 'center',
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
