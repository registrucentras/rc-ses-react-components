import type { ButtonProps as MuiButtonProps } from '@mui/material/Button'
import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import PlusBoldIcon from '@/assets/icons/PlusBoldIcon'
import Button from '@/components/common/Button'

const variantOptions: Array<MuiButtonProps['variant']> = ['contained', 'outlined']
const colorOptions = ['primary', 'secondary', 'grey']

const meta = {
  title: 'components/common/buttons/Button',
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

export const PrimaryOutlined: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
  },
}

export const PrimaryOutlinedWithIcon: Story = {
  parameters: disableColorContrast,
  args: {
    color: 'primary',
    variant: 'outlined',
    children: (
      <>
        <PlusBoldIcon /> Button
      </>
    ),
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

/*
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
*/

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
