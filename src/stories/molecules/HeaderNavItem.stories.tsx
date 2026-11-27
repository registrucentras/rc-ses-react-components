import type { Meta, StoryObj } from '@storybook/react-vite'
import React from 'react'

import HeaderNavItem from '@/components/common/HeaderNavItem'

const meta = {
  title: 'Molecules/HeaderNavItem',
  component: HeaderNavItem,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: { type: 'select' },
      options: ['rest', 'hover', 'current', 'focus', 'open'],
    },
    onClick: { action: 'clicked' },
  },
} satisfies Meta<typeof HeaderNavItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'Paslaugos',
    href: '#',
    submenuId: 'paslaugos-submenu',
  },
  render: (args) => {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
      <div>
        <HeaderNavItem
          {...args}
          href={undefined}
          isOpen={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        />
        {isOpen && (
          <div
            style={{
              marginTop: '8px',
              padding: '8px',
              backgroundColor: '#f5f5f5',
              borderRadius: '4px',
            }}
          >
            <div>Submenu content would appear here</div>
          </div>
        )}
      </div>
    )
  },
}
