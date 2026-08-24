import { Box, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import RcSesSideNav from '@/components/common/SideNav'
import { RcSesSideNavItem } from '@/components/common/SideNav/SideNav.types'
import FieldView from '@/components/storybook/FieldView'

const ITEMS: RcSesSideNavItem[] = [
  { id: 'family', label: 'Aš ir mano šeima', count: 4 },
  { id: 'documents', label: 'Dokumentai apie gyventoją', count: 2 },
  { id: 'signature', label: 'Elektroninis parašas', count: 1 },
  { id: 'residence', label: 'Gyvenamosios vietos deklaravimas', count: 7 },
  { id: 'authorizations', label: 'Įgaliojimai', count: 6 },
  { id: 'marriage', label: 'Santuoka ir skyrybos', count: 7 },
]

const meta: Meta<typeof RcSesSideNav> = {
  title: 'components/navigation/SideNav',
  component: RcSesSideNav,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "Renders a sticky topic list on desktop and a sticky, horizontally scrollable pill bar on mobile. Resize the preview (or use the viewport toolbar) below the `md` breakpoint to see the pill variant. By default (no `activeItemId`) it tracks scroll position itself and scrolls the page on click - pass `activeItemId`/`onItemClick` to take full control instead. See `WithScrollSpy` for the component's default, self-contained behavior; `Main` demonstrates the fully-controlled mode, which is why it wires the component's state itself.",
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesSideNav>

function ControlledDemo({
  activeItemId: initialActiveItemId,
  ...args
}: React.ComponentProps<typeof RcSesSideNav>) {
  const [activeItemId, setActiveItemId] = useState(initialActiveItemId ?? ITEMS[0].id)

  return (
    <RcSesSideNav {...args} activeItemId={activeItemId} onItemClick={setActiveItemId} />
  )
}

export const Main: Story = {
  render: (args) => (
    <FieldView>
      <ControlledDemo {...args} />
    </FieldView>
  ),
  args: {
    items: ITEMS,
    title: 'Temos',
  },
}

const SECTION_HEIGHT = 320

function ScrollSpyDemo() {
  return (
    // The real page scrolls the window (as in the confirmed design), so this demo
    // does too, rather than nesting its own scroll container. Below `md` the nav
    // switches to the mobile pill bar, so it's stacked above the content instead
    // of sitting in a side column. No activeItemId/onItemClick here - SideNav
    // tracks scroll position and drives its own click-to-scroll by default.
    <Box
      sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: '2rem' }}
    >
      <Box sx={{ width: { xs: '100%', md: '17rem' }, flexShrink: 0 }}>
        <RcSesSideNav items={ITEMS} title='Temos' />
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
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
      </Box>
    </Box>
  )
}

export const WithScrollSpy: Story = {
  render: () => (
    <FieldView>
      <ScrollSpyDemo />
    </FieldView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'The default, uncontrolled mode: no `activeItemId`/`onItemClick` passed, so SideNav tracks scroll position itself (via useSideNavScrollSpy internally) and scrolls to a section when its topic is clicked.',
      },
    },
  },
}
