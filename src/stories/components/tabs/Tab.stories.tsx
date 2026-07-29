import { Meta, StoryObj } from '@storybook/react-vite'

import RcSesTab from '@/components/common/Tabs/Tab'
import RcSesTabs from '@/components/common/Tabs/Tabs'

const meta: Meta<typeof RcSesTab> = {
  title: 'components/tabs/Tab',
  component: RcSesTab,
  tags: ['autodocs'],
  // From MUI 9 a Tab must sit inside a Tabs provider: Tabs supplies the
  // RovingTabIndexContext, and a standalone Tab throws without it. These stories
  // used to render the Tab bare, which worked up to MUI 7.
  decorators: [
    (Story) => (
      <RcSesTabs value={0} onChange={() => {}}>
        <Story />
      </RcSesTabs>
    ),
  ],
  argTypes: {
    disabled: { control: 'boolean' },
    label: { control: 'text' },
    icon: { control: 'text' },
    iconPosition: {
      control: { type: 'select', options: ['top', 'bottom', 'start', 'end'] },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { label: 'Tab Label' },
}

export const WithIcon: Story = {
  args: { label: 'Home', icon: '⭐', iconPosition: 'start' },
}

export const Disabled: Story = {
  args: { label: 'Disabled Tab', disabled: true },
}
