import { Box, Typography } from '@mui/material'
import { CheckIcon } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Chain,
  Code,
  DocPage,
  Row,
  Section,
  Stage,
  Table,
  hairline,
  literalOf,
  numericSuffix,
  toPx,
} from '@/components/storybook/TokenDocs'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { sizeTokens } from '@/theme/sizeTokens'

const meta = {
  title: 'Foundations/Sizes',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type SizeToken = keyof typeof sizeTokens

const all = Object.keys(sizeTokens) as SizeToken[]
const scale = all
  .filter((name) => /^icon-size-\d+$/.test(name))
  .sort((a, b) => numericSuffix(a) - numericSuffix(b))
const roles = all.filter((name) => !scale.includes(name)).sort()

// The dashed square is the token box; the glyph fills it as icons do in components.
function Specimen({ token }: { token: SizeToken }) {
  return (
    <Box
      sx={{
        color: colorTokens['text-default'],
        display: 'flex',
        height: sizeTokens[token],
        outline: `1px dashed ${colorTokens['border-focus']}`,
        width: sizeTokens[token],
      }}
    >
      <CheckIcon aria-hidden weight='bold' style={{ width: '100%', height: '100%' }} />
    </Box>
  )
}

function Sizes() {
  return (
    <DocPage
      title='Sizes'
      lead='Icon sizes. Components bind to the role tokens; each role points at one step of the scale.'
    >
      <Section title='Icon scale'>
        <Box
          sx={{
            display: 'grid',
            gap: 2,
            gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          }}
        >
          {scale.map((name) => (
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
              <Stage>
                <Specimen token={name} />
              </Stage>
              <Box sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.2 }}>
                  {numericSuffix(name)}
                </Typography>
                <Code>{name}</Code>
              </Box>
            </Box>
          ))}
        </Box>
      </Section>

      <Section title='Icon roles'>
        <Table columns='64px minmax(0, 1fr) 72px' head={['', 'Token', 'Value']}>
          {roles.map((name) => (
            <Row key={name}>
              <Stage height={48}>
                <Specimen token={name} />
              </Stage>
              <Box>
                <Code>{name}</Code>
                <Chain name={name} />
              </Box>
              <Code muted>{toPx(literalOf(name))}</Code>
            </Row>
          ))}
        </Table>
      </Section>
    </DocPage>
  )
}

export const Overview: Story = { render: () => <Sizes /> }
