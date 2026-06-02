import type { Meta, StoryObj } from '@storybook/react'

import RcSesLoadingSpinner, {
  RcSesSpinnerColor,
} from '@/components/loaders/LoadingSpinner'

const colorOptions: RcSesSpinnerColor[] = [
  'primary',
  'secondary',
  'error',
  'warning',
  'info',
  'success',
  'inherit',
]

const sizeOptions = ['small', 'medium', 'large']

const meta = {
  title: 'components/loaders/LoadingSpinner/LoadingSpinner',
  component: RcSesLoadingSpinner,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A customizable loading spinner component that displays a rotating circular progress indicator. Supports multiple colors and sizes with accessible animations that respect user motion preferences.',
      },
    },
  },
  argTypes: {
    color: {
      description: 'The color of the spinner',
      options: colorOptions,
      mapping: colorOptions,
      control: {
        type: 'select',
        labels: colorOptions,
      },
      table: {
        defaultValue: { summary: 'inherit' },
        type: { summary: 'SpinnerColor' },
      },
    },
    size: {
      description: 'The size of the spinner',
      options: sizeOptions,
      mapping: sizeOptions,
      control: {
        type: 'select',
        labels: sizeOptions,
      },
      table: {
        defaultValue: { summary: 'medium' },
        type: { summary: '"small" | "medium" | "large" | string' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RcSesLoadingSpinner>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    color: 'inherit',
    size: 'medium',
  },
}

export const Small: Story = {
  args: {
    color: 'inherit',
    size: 'small',
  },
}

export const Large: Story = {
  args: {
    color: 'inherit',
    size: 'large',
  },
}

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'medium',
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
    size: 'medium',
  },
}

export const Error: Story = {
  args: {
    color: 'error',
    size: 'medium',
  },
}

export const Success: Story = {
  args: {
    color: 'success',
    size: 'medium',
  },
}

export const Warning: Story = {
  args: {
    color: 'warning',
    size: 'medium',
  },
}

export const Info: Story = {
  args: {
    color: 'info',
    size: 'medium',
  },
}
