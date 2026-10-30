import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Chain,
  Code,
  DocPage,
  Row,
  Section,
  Stage,
  Table,
  cssName,
  hairline,
  literalOf,
  numericSuffix,
  toPx,
} from '@/components/storybook/TokenDocs'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'

const meta = {
  title: 'Foundations/Borders',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type BorderToken = keyof typeof borderTokens

const rank = (name: string) =>
  Number.isNaN(numericSuffix(name)) ? Infinity : numericSuffix(name)

const all = Object.keys(borderTokens) as BorderToken[]
const radiusScale = all
  .filter((name) => /^radius-(\d+|full)$/.test(name))
  .sort((a, b) => rank(a) - rank(b))
const css = (name: BorderToken) => cssName(borderTokens[name])

const radiusRoles = all.filter(
  (name) =>
    (name.startsWith('radius-') && !radiusScale.includes(name)) ||
    name.endsWith('-border-radius'),
)
const strokes = all
  .filter((name) => name.startsWith('stroke-'))
  .sort((a, b) => numericSuffix(a) - numericSuffix(b))
const borderRoles = all.filter((name) => name.startsWith('border-'))

const shapeFor: Partial<
  Record<BorderToken, { width: number; height: number; label?: string }>
> = {
  'radius-button': { width: 96, height: 36, label: 'Button' },
  'button-border-radius': { width: 96, height: 36, label: 'Button' },
  'radius-chip': { width: 64, height: 24, label: 'Chip' },
  'radius-input': { width: 104, height: 40 },
  'radius-list-item': { width: 104, height: 32 },
  'radius-pill': { width: 88, height: 28, label: 'Pill' },
}

function Shape({ token }: { token: BorderToken }) {
  const shape = shapeFor[token] ?? { width: 96, height: 56 }
  return (
    <Box
      sx={{
        alignItems: 'center',
        backgroundColor: colorTokens['surface-base'],
        border: `${borderTokens['border-default']} solid ${colorTokens['border-strong']}`,
        borderRadius: borderTokens[token],
        color: colorTokens['text-secondary'],
        display: 'flex',
        fontSize: '0.75rem',
        height: shape.height,
        justifyContent: 'center',
        width: shape.width,
      }}
    >
      {shape.label}
    </Box>
  )
}

function Borders() {
  return (
    <DocPage
      title='Borders'
      lead='Corner radius and stroke width. Components bind to the role tokens; the scale is what the roles draw from.'
    >
      <Section title='Radius scale'>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(auto-fill, minmax(112px, 1fr))',
          }}
        >
          {radiusScale.map((name) => (
            <Box
              key={name}
              sx={{
                alignItems: 'center',
                border: hairline,
                borderRadius: borderTokens['radius-12'],
                display: 'flex',
                flexDirection: 'column',
                gap: 1.5,
                p: 2,
              }}
            >
              <Box
                sx={{
                  backgroundColor: colorTokens['surface-brand-subtle'],
                  borderColor: colorTokens['border-focus'],
                  borderRadius: `0 ${borderTokens[name]} 0 0`,
                  borderRight: `2px solid`,
                  borderTop: `2px solid`,
                  height: 56,
                  width: 56,
                }}
              />
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
                  {name === 'radius-full' ? 'full' : numericSuffix(name)}
                </Typography>
                <Code muted>{toPx(literalOf(css(name)))}</Code>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>

      <Section title='Radius roles' lead='What each component shape uses.'>
        <Table columns='136px minmax(0, 1fr) 72px' head={['', 'Token', 'Value']}>
          {radiusRoles.map((name) => (
            <Row key={name}>
              <Stage height={64} width={136}>
                <Shape token={name} />
              </Stage>
              <Box sx={{ minWidth: 0 }}>
                <Code>{name}</Code>
                <Chain name={css(name)} />
              </Box>
              <Code muted>{toPx(literalOf(css(name)))}</Code>
            </Row>
          ))}
        </Table>
      </Section>

      <Section title='Stroke' lead='Line widths, and the border roles that use them.'>
        <Table columns='136px minmax(0, 1fr) 72px' head={['', 'Token', 'Value']}>
          {[...strokes, ...borderRoles].map((name) => (
            <Row key={name}>
              <Box
                sx={{
                  backgroundColor: colorTokens['border-strong'],
                  height: borderTokens[name],
                  width: 112,
                }}
              />
              <Box sx={{ minWidth: 0 }}>
                <Code>{name}</Code>
                <Chain name={css(name)} />
              </Box>
              <Code muted>{literalOf(css(name))}</Code>
            </Row>
          ))}
        </Table>
      </Section>
    </DocPage>
  )
}

export const Overview: Story = { render: () => <Borders /> }
