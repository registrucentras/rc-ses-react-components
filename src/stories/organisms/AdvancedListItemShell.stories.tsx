import { Avatar, Radio, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import NotePencilIcon from '@/assets/icons/NotePencilIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import AdvancedListItemShell from '@/components/common/AdvancedList/components/AdvancedListItemShell'
import RcSesButton from '@/components/common/Button'
import palette from '@/theme/palette'

const ACTION_BUTTON_SX = {
  height: 'auto',
  padding: '0.5rem 0.25rem',
  fontWeight: 500,
  lineHeight: '1.25rem',
  color: palette.primary[700],
} as const

const meta = {
  title: 'Organisms/AdvancedListItemShell',
  component: AdvancedListItemShell,
  tags: ['autodocs'],
  argTypes: {
    leading: { control: false },
    content: { control: false },
    trailing: { control: false },
    expanded: { control: false },
    onClick: { control: false },
    testIds: { control: false },
  },
  args: {
    content: (
      <Stack sx={{ gap: '0.5rem' }}>
        <Typography variant='body2' sx={{ fontWeight: 600 }}>
          Įrašo pavadinimas
        </Typography>
        <Typography variant='body2' sx={{ color: palette.grey[600] }}>
          a.k. 3850.........
        </Typography>
      </Stack>
    ),
    state: 'rest',
  },
} satisfies Meta<typeof AdvancedListItemShell>

export default meta

type Story = StoryObj<typeof meta>

export const Main: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Only the required `content` slot is filled. `leading`, `trailing` and `expanded` are all omitted, so those are not rendered at all.',
      },
      source: {
        code: `<AdvancedListItemShell
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
/>`,
      },
    },
  },
}

export const Selected: Story = {
  args: { state: 'selected' },
  parameters: {
    docs: {
      description: {
        story:
          'Same slots as `Main`, but `state` is set to `selected`. The shell only changes its own border/background styling — slot content is untouched.',
      },
      source: {
        code: `<AdvancedListItemShell
  state='selected'
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
/>`,
      },
    },
  },
}

export const Disabled: Story = {
  args: { state: 'disabled' },
  parameters: {
    docs: {
      description: {
        story:
          '`state` is set to `disabled`. The shell dims itself, ignores `onClick`, and marks its root `inert` so any controls rendered into the slots are also removed from the tab order and assistive tech, not just visually blocked from the mouse.',
      },
      source: {
        code: `<AdvancedListItemShell
  state='disabled'
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
/>`,
      },
    },
  },
}

export const ErrorState: Story = {
  args: { state: 'error' },
  parameters: {
    docs: {
      description: {
        story:
          '`state` is set to `error`, which only swaps the border color token used by the shell. No slot content or layout changes are needed to represent this state.',
      },
      source: {
        code: `<AdvancedListItemShell
  state='error'
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
/>`,
      },
    },
  },
}

export const WithLeadingAndTrailing: Story = {
  args: {
    leading: <Avatar>AB</Avatar>,
    trailing: (
      <Stack direction='row' sx={{ gap: '0.5rem', alignItems: 'center' }}>
        <RcSesButton
          variant='link'
          startIcon={<NotePencilIcon size={20} />}
          onClick={() => {}}
          sx={ACTION_BUTTON_SX}
        >
          Keisti
        </RcSesButton>
        <RcSesButton
          variant='link'
          startIcon={<TrashIcon size={20} />}
          onClick={() => {}}
          sx={ACTION_BUTTON_SX}
        >
          Pašalinti
        </RcSesButton>
      </Stack>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Passes plain elements directly as the `leading` (an avatar) and `trailing` (a `Stack` of `RcSesButton` link-style action buttons, the same look `AdvancedListItem` uses for its `actions` trailing type) slots.',
      },
      source: {
        code: `<AdvancedListItemShell
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
  leading={<Avatar>AB</Avatar>}
  trailing={
    <Stack direction='row' sx={{ gap: '0.5rem', alignItems: 'center' }}>
      <RcSesButton variant='link' startIcon={<NotePencilIcon size={20} />} onClick={handleEdit}>
        Keisti
      </RcSesButton>
      <RcSesButton variant='link' startIcon={<TrashIcon size={20} />} onClick={handleDelete}>
        Pašalinti
      </RcSesButton>
    </Stack>
  }
/>`,
      },
    },
  },
}

export const RowContainer: Story = {
  args: {
    container: 'row',
    leading: <Avatar>AB</Avatar>,
    trailing: (
      <Stack direction='row' sx={{ gap: '0.5rem', alignItems: 'center' }}>
        <RcSesButton
          variant='link'
          startIcon={<NotePencilIcon size={20} />}
          onClick={() => {}}
          sx={ACTION_BUTTON_SX}
        >
          Keisti
        </RcSesButton>
        <RcSesButton
          variant='link'
          startIcon={<TrashIcon size={20} />}
          onClick={() => {}}
          sx={ACTION_BUTTON_SX}
        >
          Pašalinti
        </RcSesButton>
      </Stack>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          '`container` is set to `"row"`, the flush-list-row look: no border or corner radius, just a bottom divider in the same state-driven color the `"card"` look uses for its border. Useful when several shells are stacked directly against each other, like rows in a table.',
      },
      source: {
        code: `<AdvancedListItemShell
  container='row'
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
  leading={<Avatar>AB</Avatar>}
  trailing={
    <Stack direction='row' sx={{ gap: '0.5rem', alignItems: 'center' }}>
      <RcSesButton variant='link' startIcon={<NotePencilIcon size={20} />} onClick={handleEdit}>
        Keisti
      </RcSesButton>
      <RcSesButton variant='link' startIcon={<TrashIcon size={20} />} onClick={handleDelete}>
        Pašalinti
      </RcSesButton>
    </Stack>
  }
/>`,
      },
    },
  },
}

export const Expandable: Story = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
      <AdvancedListItemShell
        {...args}
        isExpanded={isExpanded}
        onClick={() => setIsExpanded((prev) => !prev)}
        expanded={
          <Stack sx={{ gap: '0.5rem' }}>
            <Typography variant='body2'>Papildoma informacija apie šį įrašą.</Typography>
            <Typography variant='body2' sx={{ color: palette.grey[600] }}>
              Antra papildomos informacijos eilutė.
            </Typography>
          </Stack>
        }
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Uses a custom `render` with local `useState` to own the `isExpanded` boolean. `onClick` toggles it and is wired to the root element by the shell; the `expanded` slot content stays the same node the whole time.',
      },
      source: {
        code: `const [isExpanded, setIsExpanded] = useState(false)

<AdvancedListItemShell
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
  isExpanded={isExpanded}
  onClick={() => setIsExpanded((prev) => !prev)}
  expanded={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body2'>Papildoma informacija apie šį įrašą.</Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        Antra papildomos informacijos eilutė.
      </Typography>
    </Stack>
  }
/>`,
      },
    },
  },
}

/**
 * Renders already expanded (no click needed) so the visual regression suite,
 * which only screenshots each story's initial render, gets a baseline of the
 * expanded open state.
 */
export const ExpandedOpen: Story = {
  args: {
    isExpanded: true,
    expanded: (
      <Stack sx={{ gap: '0.5rem' }}>
        <Typography variant='body2'>Papildoma informacija apie šį įrašą.</Typography>
        <Typography variant='body2' sx={{ color: palette.grey[600] }}>
          Antra papildomos informacijos eilutė.
        </Typography>
      </Stack>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Same `expanded` slot content as `Expandable`, but with `isExpanded` set to `true` directly in `args` instead of via local state, so the story renders open from the first paint — used as the visual-regression baseline for the expanded state.',
      },
      source: {
        code: `<AdvancedListItemShell
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
  isExpanded
  expanded={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body2'>Papildoma informacija apie šį įrašą.</Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        Antra papildomos informacijos eilutė.
      </Typography>
    </Stack>
  }
/>`,
      },
    },
  },
}

export const AllSlotsFilled: Story = {
  render: (args) => {
    const [isExpanded, setIsExpanded] = useState(false)

    return (
      <AdvancedListItemShell
        {...args}
        state='selected'
        isExpanded={isExpanded}
        onClick={() => setIsExpanded((prev) => !prev)}
        leading={<Avatar>AB</Avatar>}
        trailing={
          <Stack direction='row' sx={{ gap: '0.5rem', alignItems: 'center' }}>
            <RcSesButton
              variant='link'
              startIcon={<NotePencilIcon size={20} />}
              onClick={() => {}}
              sx={ACTION_BUTTON_SX}
            >
              Keisti
            </RcSesButton>
            <RcSesButton
              variant='link'
              startIcon={<TrashIcon size={20} />}
              onClick={() => {}}
              sx={ACTION_BUTTON_SX}
            >
              Pašalinti
            </RcSesButton>
          </Stack>
        }
        expanded={
          <Stack sx={{ gap: '0.5rem' }}>
            <Typography variant='body2'>Papildoma informacija apie šį įrašą.</Typography>
            <Typography variant='body2' sx={{ color: palette.grey[600] }}>
              Antra papildomos informacijos eilutė.
            </Typography>
          </Stack>
        }
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'Combines every slot at once — `leading` (avatar), `content`, `trailing` (action buttons) and `expanded` (extra details) — with `state="selected"` and local `isExpanded` state toggled via `onClick`, to show the shell fully composed the way a real consumer would use it.',
      },
      source: {
        code: `const [isExpanded, setIsExpanded] = useState(false)

<AdvancedListItemShell
  content={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        Įrašo pavadinimas
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        a.k. 3850.........
      </Typography>
    </Stack>
  }
  state='selected'
  isExpanded={isExpanded}
  onClick={() => setIsExpanded((prev) => !prev)}
  leading={<Avatar>AB</Avatar>}
  trailing={
    <Stack direction='row' sx={{ gap: '0.5rem', alignItems: 'center' }}>
      <RcSesButton variant='link' startIcon={<NotePencilIcon size={20} />} onClick={handleEdit}>
        Keisti
      </RcSesButton>
      <RcSesButton variant='link' startIcon={<TrashIcon size={20} />} onClick={handleDelete}>
        Pašalinti
      </RcSesButton>
    </Stack>
  }
  expanded={
    <Stack sx={{ gap: '0.5rem' }}>
      <Typography variant='body2'>Papildoma informacija apie šį įrašą.</Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        Antra papildomos informacijos eilutė.
      </Typography>
    </Stack>
  }
/>`,
      },
    },
  },
}

export const RadioSelectionWithActions: Story = {
  render: (args) => {
    const [selected, setSelected] = useState(false)

    return (
      <AdvancedListItemShell
        {...args}
        state={selected ? 'selected' : 'rest'}
        onClick={() => setSelected((prev) => !prev)}
        leading={
          <Radio checked={selected} onChange={() => setSelected((prev) => !prev)} />
        }
        content={
          <Stack sx={{ gap: '0.4375rem' }}>
            <Typography variant='body1' sx={{ fontWeight: 600 }}>
              UAB Pavyzdys
            </Typography>
            <Typography variant='body2' sx={{ color: palette.grey[600] }}>
              Kodas 300xxxxxx
            </Typography>
          </Stack>
        }
        trailing={
          <RcSesButton
            variant='link'
            startIcon={<TrashIcon size={20} />}
            onClick={() => {}}
            sx={ACTION_BUTTON_SX}
          >
            Pašalinti
          </RcSesButton>
        }
      />
    )
  },
  parameters: {
    docs: {
      description: {
        story:
          'A "pick one from a list" pattern: `leading` is a `Radio`, `content` is a title + subtitle, and `trailing` has an action.',
      },
      source: {
        code: `const [selected, setSelected] = useState(false)

<AdvancedListItemShell
  state={selected ? 'selected' : 'rest'}
  onClick={() => setSelected((prev) => !prev)}
  leading={<Radio checked={selected} onChange={() => setSelected((prev) => !prev)} />}
  content={
    <Stack sx={{ gap: '0.4375rem' }}>
      <Typography variant='body1' sx={{ fontWeight: 600 }}>
        UAB Pavyzdys
      </Typography>
      <Typography variant='body2' sx={{ color: palette.grey[600] }}>
        Kodas 300xxxxxx
      </Typography>
    </Stack>
  }
  trailing={
    <RcSesButton variant='link' startIcon={<TrashIcon size={20} />} onClick={handleDelete}>
      Pašalinti
    </RcSesButton>
  }
/>`,
      },
    },
  },
}
