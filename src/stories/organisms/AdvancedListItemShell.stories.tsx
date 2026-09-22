import { Avatar, IconButton, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import NotePencilIcon from '@/assets/icons/NotePencilIcon'
import TrashIcon from '@/assets/icons/TrashIcon'
import AdvancedListItemShell from '@/components/common/AdvancedList/components/AdvancedListItemShell'
import palette from '@/theme/palette'

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
      <Stack sx={{ gap: '0.125rem' }}>
        <Typography variant='body1' sx={{ fontWeight: 600 }}>
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
    },
  },
}

export const Disabled: Story = {
  args: { state: 'disabled' },
  parameters: {
    docs: {
      description: {
        story:
          '`state` is set to `disabled`. The shell dims itself, disables pointer events, and ignores `onClick`/keyboard activation.',
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
    },
  },
}

export const WithLeadingAndTrailing: Story = {
  args: {
    leading: <Avatar>AB</Avatar>,
    trailing: (
      <Stack direction='row' sx={{ gap: '0.25rem' }}>
        <IconButton size='small' aria-label='redaguoti'>
          <NotePencilIcon />
        </IconButton>
        <IconButton size='small' aria-label='trinti'>
          <TrashIcon />
        </IconButton>
      </Stack>
    ),
  },
  parameters: {
    docs: {
      description: {
        story:
          'Passes plain MUI elements directly as the `leading` (an avatar) and `trailing` (a `Stack` of `IconButton`) slots.',
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
          <Stack direction='row' sx={{ gap: '0.25rem' }}>
            <IconButton size='small' aria-label='redaguoti'>
              <NotePencilIcon />
            </IconButton>
            <IconButton size='small' aria-label='trinti'>
              <TrashIcon />
            </IconButton>
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
    },
  },
}
