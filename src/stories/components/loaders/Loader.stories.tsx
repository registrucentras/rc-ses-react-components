import type { Meta, StoryObj } from '@storybook/react'

import RcSesLoader from '@/components/loaders/Loader'

const meta = {
  title: 'components/loaders/Loader/Loader',
  component: RcSesLoader,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['label', 'showLabel', 'size'],
    },
    docs: {
      description: {
        component:
          'Reusable loader built on top of RcSesLoadingSpinner. Supports three standard sizes for inline (small), section (medium), and full-page (large) loading states.',
      },
    },
  },
  argTypes: {
    label: {
      control: 'text',
    },
    showLabel: {
      control: 'boolean',
    },
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
  },
} satisfies Meta<typeof RcSesLoader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Kraunama...',
    showLabel: true,
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    label: 'Kraunama...',
    showLabel: true,
    size: 'small',
  },
}

export const Medium: Story = {
  args: {
    label: 'Kraunama...',
    showLabel: true,
    size: 'medium',
  },
}

export const Large: Story = {
  args: {
    label: 'Kraunama...',
    showLabel: true,
    size: 'large',
  },
}

export const WithoutLabel: Story = {
  args: {
    label: 'Kraunama...',
    showLabel: false,
    size: 'medium',
  },
}
