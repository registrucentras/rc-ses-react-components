import { Box, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import { RcSesSideNavItem } from '@/components/common/SideNav/SideNav.types'
import RcSesSideNavLayout from '@/components/common/SideNav/SideNavLayout'
import FieldView from '@/components/storybook/FieldView'

const ITEMS: RcSesSideNavItem[] = [
  { id: 'family', label: 'Aš ir mano šeima', count: 4 },
  { id: 'documents', label: 'Dokumentai apie gyventoją', count: 2 },
  { id: 'signature', label: 'Elektroninis parašas', count: 1 },
  { id: 'residence', label: 'Gyvenamosios vietos deklaravimas', count: 7 },
  { id: 'authorizations', label: 'Įgaliojimai', count: 6 },
  { id: 'marriage', label: 'Santuoka ir skyrybos', count: 7 },
]

const SECTION_HEIGHT = 320

function Sections() {
  return (
    <>
      {ITEMS.map((item) => (
        <Box
          key={item.id}
          id={item.id}
          sx={{
            height: `${SECTION_HEIGHT}px`,
            borderBottom: '1px dashed #dce0e5',
            paddingTop: '1rem',
          }}
        >
          <Typography variant='h3' sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
            {item.label}
          </Typography>
          <Typography sx={{ color: '#6b747f' }}>
            {item.count} paslaugos šioje temoje.
          </Typography>
        </Box>
      ))}
    </>
  )
}

const meta: Meta<typeof RcSesSideNavLayout> = {
  title: 'components/navigation/SideNav',
  component: RcSesSideNavLayout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'RcSesSideNavLayout is the only supported way to use this component - it lays out the sticky nav column (a topic list on desktop, a horizontally scrollable pill bar on mobile) alongside its section children, which is what guarantees the desktop sticky behavior works. By default (no `activeItemId`) it tracks scroll position itself and scrolls the page on click - pass `activeItemId`/`onItemClick` to take full control instead. See `WithScrollSpy` for the default, self-contained behavior; `Main` demonstrates the fully-controlled mode, which is why it wires the state itself.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesSideNavLayout>

function ControlledDemo({
  activeItemId: initialActiveItemId,
  ...args
}: React.ComponentProps<typeof RcSesSideNavLayout>) {
  const [activeItemId, setActiveItemId] = useState(initialActiveItemId ?? ITEMS[0].id)

  return (
    <RcSesSideNavLayout
      {...args}
      activeItemId={activeItemId}
      onItemClick={setActiveItemId}
    />
  )
}

export const Main: Story = {
  render: (args) => (
    <FieldView>
      <ControlledDemo {...args}>
        <Sections />
      </ControlledDemo>
    </FieldView>
  ),
  args: {
    items: ITEMS,
    title: 'Temos',
  },
}

export const WithScrollSpy: Story = {
  render: () => (
    <FieldView>
      {/* The real page scrolls the window (as in the confirmed design), so this demo
          does too, rather than nesting its own scroll container. */}
      <RcSesSideNavLayout items={ITEMS} title='Temos'>
        <Sections />
      </RcSesSideNavLayout>
    </FieldView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The default, uncontrolled mode: no `activeItemId`/`onItemClick` passed, so the nav tracks scroll position itself and scrolls to a section when its topic is clicked.',
      },
    },
  },
}
