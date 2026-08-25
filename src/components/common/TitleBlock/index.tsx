import { Box, Stack, Typography } from '@mui/material'

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

  return (
    <Stack
      className={className}
      data-testid={testIds?.root}
      direction={isVertical ? 'column' : 'row'}
      spacing={cards.header.rowGap}
      sx={{
        alignItems: isVertical || hasDescription ? 'flex-start' : 'center',
        width: '100%',
      }}
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

      {actions && !isVertical ? (
        <Stack
          data-testid={testIds?.actions}
          direction='row'
          spacing={cards.header.actionsGap}
          sx={{ alignItems: 'center', flexShrink: 0 }}
        >
          {actions}
        </Stack>
      ) : null}
    </Stack>
  )
}

export default RcSesTitleBlock
