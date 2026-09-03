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
  const hasHeader = hasSlot(header)
  const hasContent = hasSlot(children)
  const hasFooter = hasSlot(footer)

  const footerMt = (() => {
    if (fullHeight) return 'auto'
    if (hasHeader || hasContent) return cards[variant].footerGap
    return 0
  })()

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
          p: cards[variant].padding,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      {hasHeader ? (
        <Box data-testid={testIds?.header} sx={{ minWidth: 0, width: '100%' }}>
          {header}
        </Box>
      ) : null}

      {hasContent ? (
        <Box
          data-testid={testIds?.content}
          sx={{
            flexGrow: fullHeight ? 1 : 0,
            minWidth: 0,
            mt: hasHeader ? cards[variant].gap : 0,
            width: '100%',
          }}
        >
          {children}
        </Box>
      ) : null}

      {hasFooter ? (
        <Box
          data-testid={testIds?.footer}
          sx={{
            minWidth: 0,
            mt: footerMt,
            width: '100%',
          }}
        >
          {footer}
        </Box>
      ) : null}
    </Box>
  )
}

export default RcSesCardShell
