import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import PlusBoldIcon from '@/assets/icons/PlusBoldIcon'
import Button from '@/components/common/Button'
import { grey } from '@/theme/palette'
import { ButtonProps } from '@/types/buttons/ButtonProps'

const variantOptions: Array<ButtonProps['variant']> = [
  'contained',
  'outlined',
  'link',
  'text',
]
const colorOptions = [
  'primary',
  'secondary',
  'grey',
  'dark',
  'error',
  'inherit',
  'success',
  'info',
  'warning',
  'light',
  'ghost',
]

const meta = {
  title: 'components/actions/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: variantOptions,
      mapping: variantOptions,
      control: {
        type: 'select',
        labels: variantOptions,
      },
      table: {
        defaultValue: {},
      },
    },
    color: {
      options: colorOptions,
      mapping: colorOptions,
      control: {
        type: 'select',
        labels: colorOptions,
      },
      table: {
        defaultValue: {},
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {},
      },
    },
    iconOnly: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {},
      },
    },
    loading: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    onClick: fn(),
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

const disableColorContrast = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
}

export const PrimaryContained: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
  },
  /* play: async ({ canvasElement }) => {
    const canvas = within(canvasElement)

    // See https://storybook.js.org/docs/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
    await userEvent.click(canvas.getByRole('button'))

    // 👇 Assert DOM structure
    await expect(
      canvas.getByText(
        'Everything is perfect. Your account is ready and we should probably get you started!',
      ),
    ).toBeInTheDocument()
  }, */
}

export const PrimaryContainedWithPrefixIcon: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    startIcon: <PlusBoldIcon />,
  },
}

export const PrimaryContainedWithSuffixIcon: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    endIcon: <PlusBoldIcon />,
  },
}

export const PrimaryContainedIconOnly: Story = {
  args: {
    'aria-label': 'Add',
    children: <PlusBoldIcon />,
    color: 'primary',
    iconOnly: true,
    variant: 'contained',
  },
}

export const PrimaryOutlined: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
  },
}

export const PrimaryOutlinedWithPrefixIcon: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    startIcon: <PlusBoldIcon />,
  },
}

export const PrimaryOutlinedWithSuffixIcon: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    endIcon: <PlusBoldIcon />,
  },
}

export const PrimaryOutlinedIconOnly: Story = {
  parameters: disableColorContrast,
  args: {
    'aria-label': 'Add',
    children: <PlusBoldIcon />,
    color: 'primary',
    iconOnly: true,
    variant: 'outlined',
  },
}

export const SecondaryContained: Story = {
  args: {
    color: 'secondary',
    variant: 'contained',
  },
}

export const SecondaryOutlined: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'secondary',
    variant: 'outlined',
  },
}

export const GreyContained: Story = {
  args: {
    color: 'grey',
    variant: 'contained',
  },
}

export const GreyOutlined: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'grey',
    variant: 'outlined',
  },
}

export const WarningContained: Story = {
  args: {
    variant: 'contained',
    children: 'Button',
    color: 'warning',
  },
}

export const WarningOutlined: Story = {
  parameters: disableColorContrast,
  args: {
    variant: 'outlined',
    children: 'Button',
    color: 'warning',
  },
}

export const ErrorContained: Story = {
  args: {
    color: 'error',
    variant: 'contained',
  },
}

export const ErrorOutlined: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'error',
    variant: 'outlined',
  },
}

export const LightOutlined: Story = {
  args: {
    variant: 'outlined',
    color: 'light' as any,
    children: 'Light Button',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: grey[900],
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const LightOutlinedWithIcon: Story = {
  args: {
    variant: 'outlined',
    color: 'light' as any,
    startIcon: <PlusBoldIcon />,
    children: 'Light Button with Icon',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: grey[900],
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const LightOutlinedDisabled: Story = {
  args: {
    variant: 'outlined',
    color: 'light' as any,
    children: 'Light Button Disabled',
    disabled: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: grey[900],
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const GhostOutlinedIconOnly: Story = {
  args: {
    'aria-label': 'Close',
    children: <PlusBoldIcon />,
    color: 'ghost' as any,
    iconOnly: true,
    variant: 'outlined',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: grey[900],
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const GhostOutlinedIconOnlyDisabled: Story = {
  args: {
    'aria-label': 'Close',
    children: <PlusBoldIcon />,
    color: 'ghost' as any,
    disabled: true,
    iconOnly: true,
    variant: 'outlined',
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: grey[900],
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

// Loading states
export const PrimaryContainedLoading: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    loading: true,
  },
}

export const PrimaryContainedLoadingWithIcon: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    loading: true,
    startIcon: <PlusBoldIcon />,
  },
}

export const PrimaryContainedLoadingWithEndIcon: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    loading: true,
    endIcon: <PlusBoldIcon />,
  },
}

export const PrimaryContainedIconOnlyLoading: Story = {
  args: {
    'aria-label': 'Add',
    children: <PlusBoldIcon />,
    color: 'primary',
    iconOnly: true,
    variant: 'contained',
    loading: true,
  },
}

export const PrimaryOutlinedLoading: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    loading: true,
  },
}

export const SecondaryContainedLoading: Story = {
  args: {
    color: 'secondary',
    variant: 'contained',
    loading: true,
  },
}

export const SecondaryOutlinedLoading: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'secondary',
    variant: 'outlined',
    loading: true,
  },
}

export const GreyContainedLoading: Story = {
  args: {
    color: 'grey',
    variant: 'contained',
    loading: true,
  },
}

export const GreyOutlinedLoading: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'grey',
    variant: 'outlined',
    loading: true,
  },
}

export const WarningContainedLoading: Story = {
  args: {
    variant: 'contained',
    color: 'warning',
    loading: true,
  },
}

export const WarningOutlinedLoading: Story = {
  parameters: disableColorContrast,
  args: {
    variant: 'outlined',
    color: 'warning',
    loading: true,
  },
}

export const ErrorContainedLoading: Story = {
  args: {
    color: 'error',
    variant: 'contained',
    loading: true,
  },
}

export const ErrorOutlinedLoading: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'error',
    variant: 'outlined',
    loading: true,
  },
}

export const LightOutlinedLoading: Story = {
  args: {
    variant: 'outlined',
    color: 'light' as any,
    children: 'Light Button',
    loading: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: grey[900],
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const LightOutlinedWithIconLoading: Story = {
  args: {
    variant: 'outlined',
    color: 'light' as any,
    startIcon: <PlusBoldIcon />,
    children: 'Light Button with Icon',
    loading: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: grey[900],
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const GhostOutlinedIconOnlyLoading: Story = {
  args: {
    'aria-label': 'Close',
    children: <PlusBoldIcon />,
    color: 'ghost' as any,
    iconOnly: true,
    variant: 'outlined',
    loading: true,
  },
  decorators: [
    (Story) => (
      <div
        style={{
          backgroundColor: grey[900],
          padding: '0.5rem',
          borderRadius: '0.5rem',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
