import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { Code, DocPage, Section, literalOf } from '@/components/storybook/TokenDocs'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'

const meta = {
  title: 'Foundations/Effects',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const elevations = [
  { token: 'elevation-sm', use: 'Cards resting on the page' },
  { token: 'elevation-md', use: 'Menus, dropdowns, popovers' },
  { token: 'elevation-lg', use: 'Dialogs and overlays' },
] as const

const rings = [
  { token: 'focus-ring-default', label: 'Default focus' },
  { token: 'focus-ring-error', label: 'Error focus' },
] as const

// Splits a multi-layer shadow at top-level commas only.
const layers = (value: string) => value.split(/,(?![^(]*\))/).map((layer) => layer.trim())

function Effects() {
  return (
    <DocPage
      title='Effects'
      lead='Elevation separates layers; focus rings mark keyboard focus. Both are composite tokens, so components take them whole.'
    >
      <Section title='Elevation'>
        <Box
          sx={{
            backgroundColor: colorTokens['surface-sunken'],
            borderRadius: borderTokens['radius-16'],
            display: 'grid',
            gap: 4,
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            p: 4,
          }}
        >
          {elevations.map(({ token, use }) => (
            <Box
              key={token}
              sx={{
                backgroundColor: colorTokens['surface-base'],
                borderRadius: borderTokens['radius-card'],
                boxShadow: effectTokens[token],
                display: 'flex',
                flexDirection: 'column',
                gap: 1,
                minHeight: 140,
                p: 2.5,
              }}
            >
              <Typography sx={{ fontWeight: 600 }}>
                {token.replace('elevation-', '').toUpperCase()}
              </Typography>
              <Typography
                variant='body2'
                sx={{ color: colorTokens['text-secondary'], flexGrow: 1 }}
              >
                {use}
              </Typography>
              <Code>{token}</Code>
              {layers(literalOf(token)).map((layer) => (
                <Code key={layer} muted>
                  {layer}
                </Code>
              ))}
            </Box>
          ))}
        </Box>
      </Section>

      <Section
        title='Focus rings'
        lead='A 2px ring in the focus color, outside the element border.'
      >
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {rings.map(({ token, label }) => (
            <Box key={token} sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box
                sx={{
                  alignItems: 'center',
                  backgroundColor: colorTokens['surface-base'],
                  border: `${borderTokens['border-default']} solid ${colorTokens['border-default']}`,
                  borderRadius: borderTokens['radius-input'],
                  boxShadow: effectTokens[token],
                  color: colorTokens['text-secondary'],
                  display: 'flex',
                  height: 44,
                  px: 2,
                  width: 240,
                }}
              >
                {label}
              </Box>
              <Code>{token}</Code>
              <Code muted>{literalOf(token).replace(/var\(--rc-([\w-]+)\)/g, '$1')}</Code>
            </Box>
          ))}
        </Box>
      </Section>
    </DocPage>
  )
}

export const Overview: Story = { render: () => <Effects /> }
