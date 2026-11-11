import { Box, Stack, Typography } from '@mui/material'

import RcSesBadge from '@/components/common/Badge'
import cards from '@/theme/cards'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

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

  // Check if variant is a heading-scale (h5, h6)
  const isHeadingVariant = ['h5', 'h6'].includes(titleVariant)

  const getHeadingFontSize = () => {
    if (!isHeadingVariant) return undefined
    return isVertical
      ? {
          xs: typographyTokens['font-size-body-small'],
          sm: typographyTokens['font-size-heading-h5'],
        }
      : typographyTokens['font-size-heading-h5']
  }

  const getHeadingLineHeight = () => {
    if (!isHeadingVariant) return undefined
    return isVertical
      ? {
          xs: typographyTokens['line-height-body-small'],
          sm: typographyTokens['line-height-heading-h5'],
        }
      : typographyTokens['line-height-heading-h5']
  }

  const getTitleTypography = () => {
    if (titleVariant === 'card-title') {
      return {
        fontSize: typographyTokens['font-size-heading-card-title'],
        lineHeight: typographyTokens['line-height-heading-card-title'],
        fontWeight: 500,
      }
    }

    if (titleTone === 'brand') {
      return {
        fontSize: typographyTokens['font-size-body-regular'],
        lineHeight: typographyTokens['line-height-body-regular'],
        fontWeight: 400,
      }
    }

    if (!hasDescription && !isHeadingVariant) {
      return {
        fontSize: typographyTokens['font-size-body-regular'],
        lineHeight: typographyTokens['line-height-body-regular'],
        fontWeight: 400,
      }
    }

    if (titleVariant === 'h2') {
      return {
        fontSize: typographyTokens['font-size-heading-h2'],
        lineHeight: typographyTokens['line-height-heading-h2'],
        fontWeight: 500,
      }
    }

    if (isHeadingVariant) {
      return {
        fontSize: getHeadingFontSize(),
        lineHeight: getHeadingLineHeight(),
        fontWeight: 600,
      }
    }

    return {}
  }

  const getDescriptionTypography = () => {
    if (titleTone === 'brand') {
      return {
        fontSize: typographyTokens['font-size-body-caption'],
        lineHeight: typographyTokens['line-height-body-caption'],
      }
    }

    if (titleVariant === 'h2' || titleVariant === 'card-title') {
      return {
        fontSize: typographyTokens['font-size-body-regular'],
        lineHeight: typographyTokens['line-height-body-regular'],
      }
    }

    if (titleVariant === 'h5' || isVertical) {
      return {
        fontSize: typographyTokens['font-size-body-small'],
        lineHeight: typographyTokens['line-height-body-small'],
      }
    }

    return {}
  }

  const textColumn = (
    <Stack
      spacing={
        isVertical
          ? { xs: spacingRoleBasedTokens['space-8'], sm: cards.header.rowGap }
          : cards.header.gap
      }
      sx={{ flex: 1, minWidth: 0, width: '100%' }}
    >
      <HeadingTag id={headingId} data-testid={testIds?.heading} style={{ margin: 0 }}>
        <Typography
          component='span'
          variant={titleVariant === 'card-title' ? 'body1' : titleVariant}
          sx={{
            color:
              titleTone === 'brand'
                ? colorTokens['text-link']
                : colorTokens['text-default'],
            // inline only when the badge has to sit on the heading's last line
            display: hasCount ? 'inline' : 'block',
            ...getTitleTypography(),
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
            color: colorTokens['text-secondary'],
            fontWeight: 400,
            ...getDescriptionTypography(),
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
      // Flex gap instead of sibling margin, so wrapped rows get the vertical
      // gap and the first action of each row has no stray left margin.
      useFlexGap
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
