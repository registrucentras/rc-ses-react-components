import { Box, Typography } from '@mui/material'

import palette from '@/theme/palette'

import { RcSesCardV2Props } from '../types'

type CardHeadingProps = Pick<RcSesCardV2Props, 'heading' | 'badge' | 'testIds'> & {
  headingLevel: number
}

function CardHeading({ heading, headingLevel, badge, testIds }: CardHeadingProps) {
  const HeadingTag = `h${headingLevel}` as 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

  return (
    <HeadingTag data-testid={testIds?.heading} style={{ margin: 0 }}>
      <Typography
        component='span'
        sx={{
          alignItems: 'center',
          color: palette.grey[900],
          display: 'inline-flex',
          fontSize: '1.125rem',
          fontWeight: 600,
          gap: '0.5rem',
          lineHeight: '1.5rem',
          overflowWrap: 'anywhere',
        }}
      >
        {heading}
        {badge !== undefined && badge !== null ? (
          <Box component='span' data-testid={testIds?.badge} sx={{ flexShrink: 0 }}>
            {badge}
          </Box>
        ) : null}
      </Typography>
    </HeadingTag>
  )
}

export default CardHeading
