import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Chain,
  Code,
  DocPage,
  Pill,
  ResponsiveValues,
  Row,
  Section,
  Stage,
  Table,
  isResponsive,
  literalOf,
  numericSuffix,
  toPx,
} from '@/components/storybook/TokenDocs'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

const meta = {
  title: 'Foundations/Spacing',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type SpaceToken = keyof typeof spacingRoleBasedTokens

const all = Object.keys(spacingRoleBasedTokens) as SpaceToken[]
const scale = all
  .filter((name) => name.startsWith('space-'))
  .sort((a, b) => numericSuffix(a) - numericSuffix(b))
const sizeOrder = ['xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl']
const bySize = (a: string, b: string) =>
  sizeOrder.indexOf(a.split('-').at(-1)!) - sizeOrder.indexOf(b.split('-').at(-1)!)

const block = {
  backgroundColor: colorTokens['surface-brand-subtle'],
  border: `${borderTokens['border-default']} solid ${colorTokens['border-brand-subtle']}`,
  borderRadius: borderTokens['radius-4'],
}
const fill = colorTokens['status-warning-bg']

function GapSpecimen({ token }: { token: SpaceToken }) {
  return (
    <Stage height={56} width={120}>
      <Box
        sx={{
          backgroundColor: fill,
          display: 'flex',
          gap: spacingRoleBasedTokens[token],
        }}
      >
        <Box sx={{ ...block, height: 28, width: 20 }} />
        <Box sx={{ ...block, height: 28, width: 20 }} />
      </Box>
    </Stage>
  )
}

function PaddingSpecimen({ token }: { token: SpaceToken }) {
  return (
    <Stage height={56} width={120}>
      <Box
        sx={{
          backgroundColor: fill,
          borderRadius: borderTokens['radius-4'],
          p: spacingRoleBasedTokens[token],
        }}
      >
        <Box sx={{ ...block, height: 14, width: 28 }} />
      </Box>
    </Stage>
  )
}

const roleGroups = [
  {
    title: 'Gap',
    lead: 'Space between siblings. The yellow area is the gap.',
    tokens: all.filter((name) => name.startsWith('gap-')).sort(bySize),
    Specimen: GapSpecimen,
  },
  {
    title: 'Padding',
    lead: 'Inset inside containers. The yellow area is the padding.',
    tokens: all.filter((name) => name.startsWith('padding-')).sort(bySize),
    Specimen: PaddingSpecimen,
  },
  {
    title: 'Component',
    lead: 'Component-specific paddings.',
    tokens: all.filter((name) => name.startsWith('button-') || name.startsWith('input-')),
    Specimen: PaddingSpecimen,
  },
]

function Spacing() {
  const max = numericSuffix(scale.at(-1)!)
  return (
    <DocPage
      title='Spacing'
      lead='A rem scale of primitives, and roles for gaps and paddings. Larger roles grow at the md breakpoint; the underline marks the breakpoint you are viewing.'
    >
      <Section
        title='Scale'
        lead='Primitive steps. Use roles in components where one fits.'
      >
        <Table columns='96px 72px minmax(0, 1fr)' head={['Token', 'Value', '']}>
          {scale.map((name) => (
            <Row key={name}>
              <Code>{name}</Code>
              <Code muted>{toPx(literalOf(name))}</Code>
              <Box
                sx={{
                  backgroundColor: colorTokens['border-focus'],
                  borderRadius: borderTokens['radius-2'],
                  height: 10,
                  maxWidth: '100%',
                  minWidth: 2,
                  width: `${(numericSuffix(name) / max) * 100}%`,
                }}
              />
            </Row>
          ))}
        </Table>
      </Section>

      {roleGroups.map(({ title, lead, tokens, Specimen }) => (
        <Section key={title} title={title} lead={lead}>
          <Table
            columns='120px minmax(0, 1fr) 260px'
            head={['', 'Token', 'Value per breakpoint']}
          >
            {tokens.map((name) => (
              <Row key={name}>
                <Specimen token={name} />
                <Box sx={{ minWidth: 0 }}>
                  <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                    <Code>{name}</Code>
                    {isResponsive(name) && <Pill>responsive</Pill>}
                  </Box>
                  <Chain name={name} />
                </Box>
                <ResponsiveValues name={name} />
              </Row>
            ))}
          </Table>
        </Section>
      ))}
    </DocPage>
  )
}

export const Overview: Story = { render: () => <Spacing /> }
