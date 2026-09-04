import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'

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
  title: 'Atoms/Button',
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
    loadingPosition: {
      control: {
        type: 'select',
      },
      options: ['start', 'end', 'center'],
      table: {
        defaultValue: { summary: 'center' },
        type: { summary: "'start' | 'end' | 'center'" },
      },
      description:
        "Where the loading indicator sits while `loading` is true. Defaults to MUI's `center`, which overlays the label. `start`/`end` reserve space next to the label so the button width stays stable.",
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

// Loading position variants (MUI 9 native)

export const LoadingPositionStart: Story = {
  args: {
    children: 'Save',
    loading: true,
    loadingPosition: 'start',
    startIcon: <PlusBoldIcon />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The spinner replaces the start icon slot and the label stays visible. Use when the label needs to stay readable during the loading state.',
      },
    },
  },
}

export const LoadingPositionEnd: Story = {
  args: {
    children: 'Save',
    loading: true,
    loadingPosition: 'end',
    endIcon: <PlusBoldIcon />,
  },
  parameters: {
    docs: {
      description: {
        story:
          'The spinner replaces the end icon slot and the label stays visible. Mirror of `start` for buttons that trail with an icon.',
      },
    },
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
