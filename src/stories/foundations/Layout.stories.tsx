import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import { layoutTokens } from '@/theme/layoutTokens'
import '@/theme/tokens.css'

const meta = {
  title: 'Foundations/Layout',
  tags: ['no-snapshot'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta
export default meta
type Story = StoryObj<typeof meta>

export const Fluid: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Assumption pending designer confirmation: 1600px limits the outer border-box, including responsive horizontal padding. The specimen uses 12 equal stretch columns with token gutters. The nominal column-width token is not used as a minimum.',
      },
    },
  },
  render: () => (
    <Box
      data-testid='layout-fluid'
      sx={{
        width: '100%',
        maxWidth: layoutTokens['container-fluid-max-width'],
        marginInline: 'auto',
        boxSizing: 'border-box',
        px: layoutTokens['outer-padding'],
      }}
    >
      <Typography variant='h2'>Fluid container and grid</Typography>
      <Box
        data-testid='layout-grid'
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
          gap: layoutTokens.gutter,
        }}
      >
        {Array.from({ length: 12 }, (_, index) => (
          <Box
            key={index}
            data-testid='layout-cell'
            sx={{
              minWidth: 0,
              minHeight: '2rem',
              border: '0.0625rem solid',
              borderColor: 'divider',
              display: 'grid',
              placeItems: 'center',
            }}
          >
            {index + 1}
          </Box>
        ))}
      </Box>
      {(['narrow', 'medium', 'wide'] as const).map((variant) => (
        <Box
          key={variant}
          data-testid={`layout-${variant}`}
          sx={{
            width: '100%',
            maxWidth: layoutTokens[`container-${variant}-width`],
            marginInline: 'auto',
            border: '0.0625rem solid',
            borderColor: 'divider',
          }}
        >
          {variant} container
        </Box>
      ))}
    </Box>
  ),
}
