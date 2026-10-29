import { Box, Typography, useMediaQuery } from '@mui/material'
import type { ReactNode } from 'react'

import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
// The preview already loads tokens.css; this reads its source to show the token chains.
import tokensCss from '@/theme/tokens.css?raw'

export const breakpoints = [
  { key: 'xs', min: 0 },
  { key: 'sm', min: 600 },
  { key: 'md', min: 900 },
  { key: 'lg', min: 1200 },
] as const
export type Breakpoint = (typeof breakpoints)[number]['key']

type Declarations = Record<string, Partial<Record<Breakpoint, string>>>

// tokens.css is the source of truth: one base :root plus min-width overrides.
const declarations: Declarations = (() => {
  const out: Declarations = {}
  const [base, ...media] = tokensCss.split('@media')
  const read = (chunk: string, bp: Breakpoint) =>
    Array.from(chunk.matchAll(/--rc-([\w-]+):\s*([^;]+);/g)).forEach(
      ([, name, value]) => {
        out[name] = { ...out[name], [bp]: value.trim() }
      },
    )
  read(base, 'xs')
  media.forEach((chunk) => {
    const min = Number(/min-width:\s*(\d+)px/.exec(chunk)?.[1])
    const bp = breakpoints.find((b) => b.min === min)?.key
    if (bp) read(chunk, bp)
  })
  return out
})()

/** Strips the `var(--rc-…)` wrapper from a token map value. */
export const cssName = (ref: string) => /var\(--rc-([\w-]+)\)/.exec(ref)?.[1] ?? ref

export function rawAt(name: string, bp: Breakpoint = 'xs') {
  const index = breakpoints.findIndex((b) => b.key === bp)
  for (let i = index; i >= 0; i -= 1) {
    const value = declarations[name]?.[breakpoints[i].key]
    if (value !== undefined) return value
  }
  return undefined
}

const refOf = (value?: string) =>
  value ? /^var\(--rc-([\w-]+)\)$/.exec(value)?.[1] : undefined

/** Token names a role passes through, excluding itself. */
export function chainOf(name: string, bp: Breakpoint = 'xs') {
  const chain: string[] = []
  let ref = refOf(rawAt(name, bp))
  while (ref) {
    chain.push(ref)
    ref = refOf(rawAt(ref, bp))
  }
  return chain
}

export function literalOf(name: string, bp: Breakpoint = 'xs') {
  const chain = chainOf(name, bp)
  return rawAt(chain.at(-1) ?? name, bp) ?? ''
}

export const isResponsive = (name: string) =>
  breakpoints.some((b) => b.key !== 'xs' && literalOf(name, b.key) !== literalOf(name))

export function toPx(value: string) {
  if (value.endsWith('rem')) return `${parseFloat(value) * 16}px`
  return value
}

export function parseRgb(value: string) {
  const match = /rgb\((\d+)\s+(\d+)\s+(\d+)\s*\/\s*([\d.]+)\)/.exec(value)
  if (!match) return undefined
  const [r, g, b] = match.slice(1, 4).map(Number)
  const alpha = Number(match[4])
  const hex =
    `#${[r, g, b].map((n) => n.toString(16).padStart(2, '0')).join('')}`.toUpperCase()
  const luminance = [r, g, b]
    .map((n) => n / 255)
    .map((c) => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4))
    .reduce((sum, c, i) => sum + c * [0.2126, 0.7152, 0.0722][i], 0)
  // Picks the label color with the higher contrast: white or neutrals-900.
  const onWhite = 1.05 / (luminance + 0.05)
  const onInk = (luminance + 0.05) / 0.0704
  return { hex, alpha, dark: alpha > 0.5 && onWhite > onInk }
}

export function useBreakpoint(): Breakpoint {
  const sm = useMediaQuery('(min-width:600px)')
  const md = useMediaQuery('(min-width:900px)')
  const lg = useMediaQuery('(min-width:1200px)')
  if (lg) return 'lg'
  if (md) return 'md'
  if (sm) return 'sm'
  return 'xs'
}

export const mono = 'ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'
export const hairline = `${borderTokens['border-default']} solid ${colorTokens['border-subtle']}`

export function Code({ children, muted }: { children: ReactNode; muted?: boolean }) {
  return (
    <Box
      component='code'
      sx={{
        color: muted ? colorTokens['text-secondary'] : colorTokens['text-default'],
        fontFamily: mono,
        fontSize: '0.8125rem',
        overflowWrap: 'anywhere',
      }}
    >
      {children}
    </Box>
  )
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <Box
      component='span'
      sx={{
        backgroundColor: colorTokens['surface-brand-subtle'],
        borderRadius: borderTokens['radius-chip'],
        color: colorTokens['text-link'],
        display: 'inline-block',
        fontFamily: mono,
        fontSize: '0.75rem',
        px: 1,
        py: 0.25,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </Box>
  )
}

/** `role → primitive` path, the part designers map back to Figma variables. */
export function Chain({ name, bp }: { name: string; bp?: Breakpoint }) {
  const chain = chainOf(name, bp)
  if (!chain.length) return <Code muted>{literalOf(name, bp)}</Code>
  return (
    <Box sx={{ alignItems: 'baseline', display: 'flex', flexWrap: 'wrap', gap: 0.75 }}>
      {chain.map((step) => (
        <Box key={step} component='span' sx={{ display: 'inline-flex', gap: 0.75 }}>
          <Box component='span' sx={{ color: colorTokens['text-muted'] }}>
            →
          </Box>
          <Code muted>{step}</Code>
        </Box>
      ))}
    </Box>
  )
}

export function DocPage({
  title,
  lead,
  children,
}: {
  title: string
  lead: string
  children: ReactNode
}) {
  return (
    <Box sx={{ color: colorTokens['text-default'], maxWidth: 1200, pb: 6 }}>
      <Typography variant='overline' sx={{ color: colorTokens['text-secondary'] }}>
        Foundations
      </Typography>
      <Typography variant='h1' sx={{ mb: 1 }}>
        {title}
      </Typography>
      <Typography sx={{ color: colorTokens['text-secondary'], maxWidth: 680, mb: 5 }}>
        {lead}
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 6 }}>{children}</Box>
    </Box>
  )
}

export function Section({
  title,
  lead,
  children,
}: {
  title: string
  lead?: string
  children: ReactNode
}) {
  return (
    <Box component='section'>
      <Typography variant='h3' component='h2' sx={{ mb: 0.5 }}>
        {title}
      </Typography>
      {lead && (
        <Typography variant='body2' sx={{ color: colorTokens['text-secondary'], mb: 2 }}>
          {lead}
        </Typography>
      )}
      {children}
    </Box>
  )
}

/** Bordered list; each child row shares the grid template. */
export function Table({
  columns,
  head,
  children,
}: {
  columns: string
  head?: ReactNode[]
  children: ReactNode
}) {
  return (
    <Box
      sx={{
        border: hairline,
        borderRadius: borderTokens['radius-12'],
        overflow: 'hidden',
        '& > [data-row]': {
          alignItems: 'center',
          columnGap: 2,
          display: 'grid',
          gridTemplateColumns: columns,
          px: 2,
          py: 1.25,
        },
        '& > [data-row] + [data-row]': { borderTop: hairline },
      }}
    >
      {head && (
        <Box
          data-row
          sx={{
            backgroundColor: colorTokens['surface-sunken'],
            color: colorTokens['text-secondary'],
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.04em',
            textTransform: 'uppercase',
          }}
        >
          {head.map((cell, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Box key={index}>{cell}</Box>
          ))}
        </Box>
      )}
      {children}
    </Box>
  )
}

export function Row({ children }: { children: ReactNode }) {
  return <Box data-row>{children}</Box>
}

/** Values per breakpoint; repeats are dimmed so the change points stand out. */
export function ResponsiveValues({
  name,
  format = toPx,
}: {
  name: string
  format?: (value: string) => string
}) {
  const current = useBreakpoint()
  const values = breakpoints.map((bp) => format(literalOf(name, bp.key)))
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 1,
        gridTemplateColumns: 'repeat(4, minmax(52px, 1fr))',
      }}
    >
      {breakpoints.map((bp, index) => {
        const value = values[index]
        const changed = index === 0 || value !== values[index - 1]
        return (
          <Box
            key={bp.key}
            sx={{
              borderBottom: `2px solid ${
                bp.key === current ? colorTokens['border-focus'] : 'transparent'
              }`,
              pb: 0.25,
            }}
          >
            <Box sx={{ color: colorTokens['text-muted'], fontSize: '0.6875rem' }}>
              {bp.key}
            </Box>
            <Box
              sx={{
                color: changed
                  ? colorTokens['text-default']
                  : colorTokens['text-secondary'],
                fontFamily: mono,
                fontWeight: changed ? 700 : 400,
                fontSize: '0.8125rem',
              }}
            >
              {value}
            </Box>
          </Box>
        )
      })}
    </Box>
  )
}

/** Dotted stage the specimens sit on. */
export function Stage({
  children,
  height = 72,
  width,
}: {
  children: ReactNode
  height?: number
  width?: number | string
}) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: colorTokens['surface-sunken'],
        backgroundImage: `radial-gradient(${colorTokens['border-subtle']} 1px, transparent 1px)`,
        backgroundSize: '8px 8px',
        borderRadius: borderTokens['radius-8'],
        display: 'flex',
        height,
        justifyContent: 'center',
        width: width ?? height,
      }}
    >
      {children}
    </Box>
  )
}

export const numericSuffix = (name: string) => Number(/(\d+)$/.exec(name)?.[1] ?? NaN)
