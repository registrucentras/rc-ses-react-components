import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import {
  Code,
  DocPage,
  ResponsiveValues,
  Row,
  Section,
  Table,
  breakpoints,
  cssName,
  hairline,
  mono,
  useBreakpoint,
} from '@/components/storybook/TokenDocs'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { layoutTokens } from '@/theme/layoutTokens'

const meta = {
  title: 'Foundations/Layout',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

type LayoutToken = keyof typeof layoutTokens

const rows: { token: LayoutToken; note: string }[] = [
  { token: 'outer-padding', note: 'Page edge to content' },
  { token: 'gutter', note: 'Between grid columns' },
  { token: 'container-narrow-width', note: 'Forms, single column' },
  { token: 'container-medium-width', note: 'Content pages' },
  { token: 'container-wide-width', note: 'Dashboards, tables' },
  { token: 'outer-container-max-width', note: 'Page frame' },
  { token: 'grid-width-lg', note: 'Grid at lg' },
  { token: 'column-width', note: 'Nominal column' },
]

function Layout() {
  const current = useBreakpoint()
  return (
    <DocPage
      title='Layout'
      lead='Breakpoints follow MUI: sm 600, md 900, lg 1200. Containers and spacing widen at sm and md; outer padding grows again at lg.'
    >
      <Section title='Breakpoints'>
        <Box sx={{ display: 'grid', gap: 1.5, gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {breakpoints.map((bp) => (
            <Box
              key={bp.key}
              sx={{
                border:
                  bp.key === current
                    ? `2px solid ${colorTokens['border-focus']}`
                    : hairline,
                borderRadius: borderTokens['radius-12'],
                p: 2,
              }}
            >
              <Typography sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
                {bp.key}
              </Typography>
              <Code muted>{bp.min ? `≥ ${bp.min}px` : '< 600px'}</Code>
              {bp.key === current && (
                <Typography
                  variant='caption'
                  sx={{ color: colorTokens['text-link'], display: 'block', mt: 0.5 }}
                >
                  Viewing now
                </Typography>
              )}
            </Box>
          ))}
        </Box>
      </Section>

      <Section
        title='Tokens per breakpoint'
        lead='Bold values change at that breakpoint; plain ones carry over.'
      >
        <Table columns='minmax(0, 1fr) 300px' head={['Token', 'xs · sm · md · lg']}>
          {rows.map(({ token, note }) => (
            <Row key={token}>
              <Box>
                <Code>{token}</Code>
                <Typography variant='body2' sx={{ color: colorTokens['text-secondary'] }}>
                  {note}
                </Typography>
              </Box>
              <ResponsiveValues name={cssName(layoutTokens[token])} />
            </Row>
          ))}
        </Table>
      </Section>

      <Section
        title='Grid at this width'
        lead='12 columns with the token gutter, inside the outer padding. Resize the viewport to see it change.'
      >
        <Box
          sx={{
            backgroundColor: colorTokens['status-warning-bg'],
            borderRadius: borderTokens['radius-12'],
            px: layoutTokens['outer-padding'],
            py: 2,
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gap: layoutTokens.gutter,
              gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
            }}
          >
            {Array.from({ length: 12 }, (_, index) => (
              <Box
                key={index}
                sx={{
                  alignItems: 'center',
                  backgroundColor: colorTokens['surface-brand-subtle'],
                  border: `1px solid ${colorTokens['border-brand-subtle']}`,
                  borderRadius: borderTokens['radius-4'],
                  color: colorTokens['text-link'],
                  display: 'flex',
                  fontFamily: mono,
                  fontSize: '0.75rem',
                  height: 64,
                  justifyContent: 'center',
                }}
              >
                {index + 1}
              </Box>
            ))}
          </Box>
        </Box>
      </Section>

      <Section
        title='Containers'
        lead='Max widths at this breakpoint, centered in the page frame.'
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          {(['wide', 'medium', 'narrow'] as const).map((variant) => (
            <Box
              key={variant}
              sx={{
                alignItems: 'center',
                backgroundColor: colorTokens['surface-brand-subtle'],
                border: `1px dashed ${colorTokens['border-focus']}`,
                borderRadius: borderTokens['radius-8'],
                display: 'flex',
                height: 40,
                justifyContent: 'center',
                marginInline: 'auto',
                maxWidth: layoutTokens[`container-${variant}-width`],
                width: '100%',
              }}
            >
              <Code>{`container-${variant}-width`}</Code>
            </Box>
          ))}
        </Box>
      </Section>
    </DocPage>
  )
}

export const Overview: Story = { render: () => <Layout /> }
