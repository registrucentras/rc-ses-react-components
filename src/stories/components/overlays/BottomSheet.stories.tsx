import {
  List,
  ListItemButton,
  ListItemText,
  Typography,
  useMediaQuery,
} from '@mui/material'
import { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import RcSesButton from '@/components/common/Button'
import RcSesBottomSheet, {
  RcSesBottomSheetProps,
} from '@/components/overlays/BottomSheet'

const meta: Meta<typeof RcSesBottomSheet> = {
  component: RcSesBottomSheet,
  title: 'components/overlays/BottomSheet',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A standalone sheet-as-modal, unrelated to RcSesDialog/RcSesModal: optional title, ' +
          'a free-form content slot, and up to two labeled action buttons. There is no desktop ' +
          'presentation - "inherits the Modal contract" only means scrim + focus trap + Esc ' +
          'while the sheet is open. See the Composition story for how a consumer decides when ' +
          'to show it versus rendering the same content inline.',
      },
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RcSesBottomSheet>

const BRANCHES = [
  'Vilniaus padalinys',
  'Kauno padalinys',
  'Klaipėdos padalinys',
  'Šiaulių padalinys',
  'Panevėžio padalinys',
]

function BranchList({
  branches,
  onSelect,
}: {
  branches: string[]
  onSelect: (branch: string) => void
}) {
  return (
    <List disablePadding>
      {branches.map((branch, index) => (
        // Demo data has no stable id and can repeat when the list is padded for the scroll story.
        // eslint-disable-next-line react/no-array-index-key
        <ListItemButton key={`${branch}-${index}`} onClick={() => onSelect(branch)}>
          <ListItemText primary={branch} />
        </ListItemButton>
      ))}
    </List>
  )
}

function BottomSheetDemo(
  args: Partial<RcSesBottomSheetProps> & { longContent?: boolean },
) {
  const { longContent, ...sheetArgs } = args
  const [open, setOpen] = useState(false)
  const branches = longContent ? [...BRANCHES, ...BRANCHES, ...BRANCHES] : BRANCHES

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Pasirinkti padalinį
      </RcSesButton>
      <RcSesBottomSheet
        title='Pasirinkite padalinį'
        {...sheetArgs}
        open={open}
        onClose={() => setOpen(false)}
      >
        <BranchList branches={branches} onSelect={() => setOpen(false)} />
      </RcSesBottomSheet>
    </>
  )
}

export const Default: Story = {
  render: (args) => <BottomSheetDemo {...args} />,
}

export const WithActions: Story = {
  render: (args) => <BottomSheetDemo {...args} />,
  args: {
    primaryActionLabel: 'Taikyti',
    secondaryActionLabel: 'Atšaukti',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Up to two labeled buttons - both optional, and independent of each other.',
      },
    },
  },
}

export const WithoutTitle: Story = {
  render: (args) => <BottomSheetDemo {...args} title={undefined} />,
  parameters: {
    docs: {
      description: {
        story:
          'The header itself is optional: with no `title` and no `showBack`, only the handle and content render.',
      },
    },
  },
}

export const MediumWidth: Story = {
  render: (args) => <BottomSheetDemo {...args} />,
  args: {
    size: 'md',
  },
  parameters: {
    docs: {
      description: {
        story:
          '`size="md"` caps and centers the sheet width instead of the `sm` full-bleed ' +
          'default - the consumer picks this based on where the sheet is used, the component ' +
          'never infers it from the viewport.',
      },
    },
  },
}

export const ScrollableContent: Story = {
  render: (args) => <BottomSheetDemo {...args} longContent />,
  parameters: {
    docs: {
      description: {
        story:
          'A long list scrolls inside the content slot; the handle, header and footer stay put.',
      },
    },
  },
}

export const WithoutBackdropClose: Story = {
  render: (args) => <BottomSheetDemo {...args} />,
  args: {
    disableBackdropClose: true,
  },
  parameters: {
    docs: {
      description: {
        story:
          'Tapping the backdrop no longer closes the sheet. Esc and the drag handle still do.',
      },
    },
  },
}

function WithBackDemo() {
  const [open, setOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)

  const handleClose = () => {
    setOpen(false)
    setSelectedBranch(null)
  }

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='contained'>
        Pasirinkti padalinį
      </RcSesButton>
      <RcSesBottomSheet
        open={open}
        onClose={handleClose}
        title={selectedBranch || 'Pasirinkite padalinį'}
        showBack={!!selectedBranch}
        onBack={() => setSelectedBranch(null)}
      >
        {selectedBranch ? (
          <Typography variant='body1'>Adresas, darbo laikas ir kontaktai.</Typography>
        ) : (
          <BranchList branches={BRANCHES} onSelect={setSelectedBranch} />
        )}
      </RcSesBottomSheet>
    </>
  )
}

export const WithBack: Story = {
  render: () => <WithBackDemo />,
  parameters: {
    docs: {
      description: {
        story:
          '`showBack` is for a multi-step sheet: selecting a branch drills into a detail step, ' +
          'and "Atgal" returns to the list without closing the sheet.',
      },
    },
  },
}

function CompositionDemo() {
  const isMobile = useMediaQuery('(max-width:599.95px)')
  const [open, setOpen] = useState(false)
  const [selectedBranch, setSelectedBranch] = useState<string | null>(null)

  if (!isMobile) {
    return (
      <List disablePadding sx={{ width: 360 }}>
        {BRANCHES.map((branch) => (
          <ListItemButton
            key={branch}
            selected={branch === selectedBranch}
            onClick={() => setSelectedBranch(branch)}
          >
            <ListItemText primary={branch} />
          </ListItemButton>
        ))}
      </List>
    )
  }

  return (
    <>
      <RcSesButton onClick={() => setOpen(true)} variant='outlined'>
        {selectedBranch ?? 'Pasirinkti padalinį'}
      </RcSesButton>
      <RcSesBottomSheet
        open={open}
        onClose={() => setOpen(false)}
        title='Pasirinkite padalinį'
      >
        <BranchList
          branches={BRANCHES}
          onSelect={(branch) => {
            setSelectedBranch(branch)
            setOpen(false)
          }}
        />
      </RcSesBottomSheet>
    </>
  )
}

export const Composition: Story = {
  render: () => <CompositionDemo />,
  parameters: {
    docs: {
      description: {
        story:
          'How a consumer composes this: desktop renders the branch list inline (no overlay ' +
          'at all); resize below 600px and the same picker becomes a "Pasirinkti padalinį" ' +
          'trigger that opens the sheet. There is no desktop version of the sheet itself - the ' +
          'switch happens at the page-composition level, not inside the component.',
      },
    },
  },
}
