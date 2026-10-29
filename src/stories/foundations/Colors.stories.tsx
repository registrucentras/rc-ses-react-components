import { Box, Typography } from '@mui/material'
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  XCircleIcon,
} from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Chain,
  Code,
  DocPage,
  Section,
  hairline,
  literalOf,
  numericSuffix,
  parseRgb,
} from '@/components/storybook/TokenDocs'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'

const meta = {
  title: 'Foundations/Colors',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const families = ['cyans', 'greens', 'neutrals', 'yellows', 'red'] as const
const steps = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

function Ramp({ family }: { family: (typeof families)[number] }) {
  return (
    <Box
      sx={{
        alignItems: 'center',
        display: 'grid',
        gap: 2,
        gridTemplateColumns: '88px 1fr',
      }}
    >
      <Typography variant='body2' sx={{ fontWeight: 600, textTransform: 'capitalize' }}>
        {family}
      </Typography>
      <Box
        sx={{
          borderRadius: borderTokens['radius-12'],
          display: 'grid',
          gridTemplateColumns: `repeat(${steps.length}, 1fr)`,
          overflow: 'hidden',
        }}
      >
        {steps.map((step) => {
          const name = `color-${family}-${step}`
          const rgb = parseRgb(literalOf(name))
          return (
            <Box
              key={step}
              title={`--rc-${name}`}
              sx={{
                backgroundColor: `var(--rc-${name})`,
                color: rgb?.dark
                  ? colorTokens['text-inverse']
                  : colorTokens['text-default'],
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 72,
                p: 1,
              }}
            >
              <Box sx={{ fontSize: '0.75rem', fontWeight: 600 }}>{step}</Box>
              <Box sx={{ fontFamily: 'monospace', fontSize: '0.625rem' }}>
                {rgb?.hex.slice(1)}
              </Box>
            </Box>
          )
        })}
      </Box>
    </Box>
  )
}

const groups = [
  { prefix: 'text', title: 'Text' },
  { prefix: 'surface', title: 'Surface' },
  { prefix: 'border', title: 'Border' },
  { prefix: 'action', title: 'Action' },
  { prefix: 'control', title: 'Control' },
  { prefix: 'status', title: 'Status' },
  { prefix: 'flow', title: 'Flow' },
] as const

type ColorToken = keyof typeof colorTokens

function Swatch({ token }: { token: ColorToken }) {
  const isText =
    token.startsWith('text-') || token.endsWith('-text') || token.endsWith('-icon')
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: isText
          ? colorTokens[token.includes('inverse') ? 'surface-inverse' : 'surface-base']
          : colorTokens[token],
        border: hairline,
        borderRadius: borderTokens['radius-8'],
        color: colorTokens[token],
        display: 'flex',
        flexShrink: 0,
        fontSize: '1rem',
        fontWeight: 700,
        height: 40,
        justifyContent: 'center',
        width: 40,
      }}
    >
      {isText ? 'Aa' : null}
    </Box>
  )
}

function SemanticRow({ token }: { token: ColorToken }) {
  const name = `color-${token}`
  const rgb = parseRgb(literalOf(name))
  return (
    <Box sx={{ alignItems: 'center', display: 'flex', gap: 1.5, minWidth: 0, py: 1 }}>
      <Swatch token={token} />
      <Box sx={{ minWidth: 0 }}>
        <Code>{token}</Code>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          <Chain name={name} />
          <Code muted>
            {rgb
              ? `${rgb.hex}${rgb.alpha < 1 ? ` · ${Math.round(rgb.alpha * 100)}%` : ''}`
              : ''}
          </Code>
        </Box>
      </Box>
    </Box>
  )
}

const statuses = [
  { key: 'info', Icon: InfoIcon, text: 'Paraiška priimta ir laukia peržiūros.' },
  { key: 'success', Icon: CheckCircleIcon, text: 'Duomenys sėkmingai išsaugoti.' },
  {
    key: 'warning',
    Icon: WarningIcon,
    text: 'Dokumento galiojimas baigiasi po 3 dienų.',
  },
  { key: 'error', Icon: XCircleIcon, text: 'Nepavyko pateikti formos.' },
] as const

function StatusPreview() {
  return (
    <Box
      sx={{
        display: 'grid',
        gap: 1.5,
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        mb: 2,
      }}
    >
      {statuses.map(({ key, Icon, text }) => (
        <Box
          key={key}
          sx={{
            alignItems: 'flex-start',
            backgroundColor: colorTokens[`status-${key}-bg`],
            border: `${borderTokens['border-default']} solid ${colorTokens[`status-${key}-border`]}`,
            borderRadius: borderTokens['radius-8'],
            color: colorTokens[`status-${key}-text`],
            display: 'flex',
            fontSize: '0.875rem',
            gap: 1,
            p: 1.5,
          }}
        >
          <Icon
            size={20}
            weight='fill'
            color={colorTokens[`status-${key}-icon`]}
            style={{ flexShrink: 0 }}
          />
          {text}
        </Box>
      ))}
    </Box>
  )
}

function Colors() {
  return (
    <DocPage
      title='Colors'
      lead='Primitives are the raw palette. Components use semantic tokens, which point at one primitive each, so a palette change flows through by role.'
    >
      <Section
        title='Palette'
        lead='Primitive ramps, 50 to 950. Hover a step for its CSS variable.'
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          {families.map((family) => (
            <Ramp key={family} family={family} />
          ))}
        </Box>
      </Section>

      {groups.map(({ prefix, title }) => {
        const tokens = (Object.keys(colorTokens) as ColorToken[]).filter((token) =>
          token.startsWith(`${prefix}-`),
        )
        return (
          <Section key={prefix} title={title} lead={`${tokens.length} semantic tokens`}>
            {prefix === 'status' && <StatusPreview />}
            <Box
              sx={{
                columnGap: 4,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              }}
            >
              {tokens
                .sort((a, b) => a.localeCompare(b) || numericSuffix(a) - numericSuffix(b))
                .map((token) => (
                  <SemanticRow key={token} token={token} />
                ))}
            </Box>
          </Section>
        )
      })}
    </DocPage>
  )
}

export const Overview: Story = { render: () => <Colors /> }
