import { Box, BoxProps } from '@mui/material'
import { ReactNode } from 'react'

import cards from '@/theme/cards'

import { RcSesCardShellProps } from './types'

// A conditional slot renders as false rather than as nothing, so false is absent
const hasSlot = (node: ReactNode) => node !== undefined && node !== null && node !== false

type ShellProps = RcSesCardShellProps &
  Omit<BoxProps, keyof RcSesCardShellProps | 'children'>

function RcSesCardShell({
  variant = 'card',
  theme = 'default',
  fullHeight = false,
  borderless = false,
  header,
  children,
  footer,
  className,
  testIds,
  sx,
  ...boxProps
}: ShellProps) {
  return (
    <Box
      {...boxProps}
      className={className}
      data-testid={testIds?.root}
      sx={[
        {
          display: 'flex',
          flexDirection: 'column',
          height: fullHeight ? '100%' : 'auto',
          minWidth: 0,
          // enables stretched-link pattern in interactive compositions
          position: 'relative',
          backgroundColor: cards.themes[theme].backgroundColor,
          border: borderless
            ? 'none'
            : `${cards.borderWidth} solid ${cards.themes[theme].borderColor}`,
          borderRadius: cards[variant].borderRadius,
          gap: cards[variant].gap,
          p: cards[variant].padding,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {hasSlot(header) ? (
        <Box data-testid={testIds?.header} sx={{ minWidth: 0, width: '100%' }}>
          {header}
        </Box>
      ) : null}

      {hasSlot(children) ? (
        <Box
          data-testid={testIds?.content}
          sx={{ flexGrow: fullHeight ? 1 : 0, minWidth: 0, width: '100%' }}
        >
          {children}
        </Box>
      ) : null}

      {hasSlot(footer) ? (
        <Box
          data-testid={testIds?.footer}
          sx={{ minWidth: 0, mt: fullHeight ? 'auto' : 0, width: '100%' }}
        >
          {footer}
        </Box>
      ) : null}
    </Box>
  )
}

export default RcSesCardShell
