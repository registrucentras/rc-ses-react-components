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
  className,
  testIds,
}: RcSesCardFooterProps) {
  return (
    <Stack
      className={className}
      data-testid={testIds?.root}
      direction='row'
      spacing={cards.footer.gap}
      sx={{
        alignItems: 'center',
        justifyContent: justifyContent[align],
        width: '100%',
        flexWrap: 'wrap',
      }}
    >
      {children}
    </Stack>
  )
}

export default RcSesCardFooter
