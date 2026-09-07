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

// The upper end of the supported range (1-12), where the list no longer fits the
// viewport and the Overflow=Scroll variant earns its keep.
const MANY_ITEMS: RcSesSideNavItem[] = [
  ...ITEMS,
  { id: 'spatial', label: 'Erdviniai duomenys', count: 13 },
  { id: 'forests', label: 'Miškai', count: 14 },
  { id: 'mortgage', label: 'Hipoteka ir įkeitimai', count: 8 },
  { id: 'value', label: 'Turto vertė ir sandorių duomenys', count: 12 },
  { id: 'addresses', label: 'Adresai', count: 3 },
  { id: 'contracts', label: 'Nekilnojamojo turto sutartys', count: 12 },
]

const SECTION_HEIGHT = 320

function Sections({ items = ITEMS }: { items?: RcSesSideNavItem[] }) {
  return (
    <>
      {items.map((item) => (
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
  title: 'Organisms/SideNav',
  component: RcSesSideNavLayout,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'RcSesSideNavLayout is the only supported way to use this component - it lays out the sticky nav column (a topic list on desktop, a horizontally scrollable pill bar on mobile) alongside its section children, which is what guarantees the desktop sticky behavior works. By default (no `activeItemId`) it tracks scroll position itself and scrolls the page on click - pass `activeItemId`/`onItemClick` to take full control instead. See `WithScrollSpy` for the default, self-contained behavior; `Main` demonstrates the fully-controlled mode, which is why it wires the state itself. `overflow` decides what happens when there are more topics than fit the screen - see `WithScrollOverflow`.',
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

export const WithScrollOverflow: Story = {
  // Only visible at a real viewport height: the visual baseline is a fullPage
  // capture, which stretches the viewport to the whole page and so leaves the
  // 100vh cap with nothing to cut off.
  render: () => (
    <FieldView>
      <RcSesSideNavLayout items={MANY_ITEMS} title='Temos' overflow='scroll'>
        <Sections items={MANY_ITEMS} />
      </RcSesSideNavLayout>
    </FieldView>
  ),
  parameters: {
    docs: {
      description: {
        story:
          "`overflow='scroll'` caps the desktop list to the viewport (minus `offset`) and scrolls it inside itself, so a long topic list no longer runs off the bottom of the screen. As the scroll-spy moves the active topic past either edge of that list, the list scrolls just far enough to keep it visible - smoothly, unless the user prefers reduced motion. The default, `overflow='fit'`, lets the list grow as tall as it needs to.",
      },
    },
  },
}
