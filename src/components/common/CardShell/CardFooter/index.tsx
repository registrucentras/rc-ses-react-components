import { Stack } from '@mui/material'

import cards from '@/theme/cards'

import { CardFooterAlign, RcSesCardFooterProps } from './types'

const justifyContent: Record<CardFooterAlign, string> = {
  between: 'space-between',
  end: 'flex-end',
  start: 'flex-start',
}

function RcSesCardFooter({
  children,
  align = 'between',
  stretchOnMobile = true,
  className,
  testIds,
}: RcSesCardFooterProps) {
  return (
    <Stack
      className={className}
      data-testid={testIds?.root}
      direction={{ xs: 'column', sm: 'row' }}
      spacing={cards.footer.gap}
      sx={{
        alignItems: { xs: 'flex-start', sm: 'center' },
        justifyContent: justifyContent[align],
        width: '100%',
        ...(stretchOnMobile ? { '& > *': { width: { xs: '100%', sm: 'auto' } } } : {}),
      }}
    >
      {children}
    </Stack>
  )
}

export default RcSesCardFooter
