import { Meta, StoryObj } from '@storybook/react-vite'

import RcSesButtonWithPopover from '@/components/common/Button/ButtonWithPopover'

const meta: Meta<typeof RcSesButtonWithPopover> = {
  title: 'Molecules/ButtonWithPopover',
  component: RcSesButtonWithPopover,
  tags: ['autodocs'],
  argTypes: {
    popoverHeader: { control: 'text' },
    popoverContent: { control: 'text' },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    popoverHeader: 'Information',
    popoverContent: 'Hover or click the question icon to see this popover content',
  },
}

export const WithCustomContent: Story = {
  args: {
    popoverHeader: 'Help',
    popoverContent: 'This is custom content inside the popover',
  },
  render: (args) => (
    <RcSesButtonWithPopover {...args}>Custom Button</RcSesButtonWithPopover>
  ),
}
