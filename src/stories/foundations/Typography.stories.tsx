import { Box, ThemeProvider, Typography, useTheme } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment } from 'react'

import {
  Code,
  DocPage,
  Pill,
  ResponsiveValues,
  Row,
  Section,
  Table,
  isResponsive,
} from '@/components/storybook/TokenDocs'
import { colorTokens } from '@/theme/colorTokens'
import { createRcSesTokenTheme } from '@/theme/tokenTheme'
import { typographyRoleVariants } from '@/theme/typographyTokens'

const tokenTheme = createRcSesTokenTheme()

const meta = {
  title: 'Foundations/Typography',
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

const sample: Partial<Record<string, string>> = {
  heading: 'Nekilnojamojo turto registras',
  button: 'Pateikti prašymą',
}
const bodySample = 'Įmonės duomenys atnaujinami kasdien. ąčęėįšųūž 0123456789'

const groups = [
  { prefix: 'heading', title: 'Headings' },
  { prefix: 'body', title: 'Body' },
  { prefix: 'button', title: 'Buttons' },
] as const

function Roles() {
  const theme = useTheme()
  const family = String(theme.typography.fontFamily).split(',')[0].replace(/['"]/g, '')

  return (
    <DocPage
      title='Typography'
      lead={`14 roles, each bound to a theme variant. Sizes and line heights are tokens; headings step up at the sm and md breakpoints. Family: ${family}.`}
    >
      {groups.map(({ prefix, title }) => (
        <Section key={prefix} title={title}>
          <Table
            columns='minmax(0, 1fr) 300px'
            head={['Role and sample', 'Size and line height']}
          >
            {Object.entries(typographyRoleVariants)
              .filter(([role]) => role.startsWith(prefix))
              .map(([role, variant]) => {
                const style = theme.typography[variant] as {
                  fontWeight?: number | string
                }
                return (
                  <Row key={role}>
                    <Box sx={{ minWidth: 0, py: 1 }}>
                      <Box
                        sx={{
                          alignItems: 'center',
                          display: 'flex',
                          flexWrap: 'wrap',
                          gap: 1,
                          mb: 1,
                        }}
                      >
                        <Code>{role}</Code>
                        <Code muted>variant=&quot;{variant}&quot;</Code>
                        <Code muted>weight {style.fontWeight ?? 'inherit'}</Code>
                        {isResponsive(`typography-font-size-${role}`) && (
                          <Pill>responsive</Pill>
                        )}
                      </Box>
                      <Typography
                        variant={variant}
                        sx={{
                          color: colorTokens['text-default'],
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          whiteSpace: 'nowrap',
                        }}
                      >
                        {sample[prefix] ?? bodySample}
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        alignItems: 'end',
                        columnGap: 1.5,
                        display: 'grid',
                        gridTemplateColumns: '40px 1fr',
                        rowGap: 1,
                      }}
                    >
                      {(['font-size', 'line-height'] as const).map((property) => (
                        <Fragment key={property}>
                          <Box
                            sx={{
                              color: colorTokens['text-secondary'],
                              fontSize: '0.75rem',
                              pb: 0.5,
                            }}
                          >
                            {property === 'font-size' ? 'Size' : 'Line'}
                          </Box>
                          <ResponsiveValues name={`typography-${property}-${role}`} />
                        </Fragment>
                      ))}
                    </Box>
                  </Row>
                )
              })}
          </Table>
        </Section>
      ))}
    </DocPage>
  )
}

export const Overview: Story = {
  render: () => (
    <ThemeProvider theme={tokenTheme}>
      <Roles />
    </ThemeProvider>
  ),
}
