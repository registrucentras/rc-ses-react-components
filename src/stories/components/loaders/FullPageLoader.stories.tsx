import { Box, Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import RcSesFullPageLoader from '@/components/loaders/FullPageLoader'

const meta = {
  title: 'components/loaders/FullPageLoader/FullPageLoader',
  component: RcSesFullPageLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['backdrop', 'label', 'showLabel'],
    },
    docs: {
      story: {
        inline: false,
        height: 400,
      },
      description: {
        component:
          'Full-page loader overlay built on top of RcSesLoader with two backdrop variants: dark and light.',
      },
    },
  },
  argTypes: {
    backdrop: {
      control: 'radio',
      options: ['dark', 'light'],
    },
    label: {
      control: 'text',
    },
    showLabel: {
      control: 'boolean',
    },
  },
} satisfies Meta<typeof RcSesFullPageLoader>

export default meta

type Story = StoryObj<typeof meta>

const FULL_PAGE_LOADER_USAGE_EXAMPLE =
  "<RcSesFullPageLoader label='Kraunama...' showLabel />"

const FULL_PAGE_LOADER_DARK_USAGE_EXAMPLE =
  "<RcSesFullPageLoader backdrop='dark' label='Kraunama...' showLabel />"

function PageMock() {
  return (
    <Stack spacing={2} sx={{ p: 4 }}>
      <Box
        sx={{ backgroundColor: 'grey.200', borderRadius: 1, height: 12, width: '35%' }}
      />
      <Box
        sx={{ backgroundColor: 'grey.200', borderRadius: 1, height: 12, width: '48%' }}
      />
      <Box
        sx={{ backgroundColor: 'grey.200', borderRadius: 1, height: 12, width: '42%' }}
      />
      <Box
        sx={{
          backgroundColor: 'grey.200',
          borderRadius: 1,
          height: 112,
          mt: 1,
          width: '100%',
        }}
      />
      <Box
        sx={{ backgroundColor: 'grey.200', borderRadius: 1, height: 88, width: '100%' }}
      />
      <Box
        sx={{ backgroundColor: 'grey.200', borderRadius: 1, height: 56, width: '65%' }}
      />
    </Stack>
  )
}

const renderPreview: Story['render'] = (args) => (
  <Stack spacing={1.5} sx={{ width: '100%' }}>
    <Box
      sx={{
        backgroundColor: '#f4f6f8',
        borderRadius: 1,
        minHeight: 360,
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
      }}
    >
      <PageMock />
      <RcSesFullPageLoader {...args} />
    </Box>
  </Stack>
)

export const Default: Story = {
  render: renderPreview,
  parameters: {
    docs: {
      source: {
        code: FULL_PAGE_LOADER_USAGE_EXAMPLE,
      },
    },
  },
  args: {
    label: 'Kraunama...',
    showLabel: true,
  },
}

export const DarkBackdrop: Story = {
  render: renderPreview,
  parameters: {
    docs: {
      source: {
        code: FULL_PAGE_LOADER_DARK_USAGE_EXAMPLE,
      },
    },
  },
  args: {
    backdrop: 'dark',
    label: 'Kraunama...',
  },
}
