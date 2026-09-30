import { Box } from '@mui/material'
import { grey } from '@mui/material/colors'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import RcSesFilterChip from '@/components/common/FilterChip'

type Story = StoryObj<typeof RcSesFilterChip>

const meta: Meta<typeof RcSesFilterChip> = {
  title: 'Atoms/FilterChip',
  component: RcSesFilterChip,
  tags: ['autodocs'],
  args: {
    label: 'Filter label',
    onRemove: () => {},
  },
}

export default meta

export const Default: Story = {
  render: (args) => {
    const [visible, setVisible] = useState(true)

    if (!visible) {
      return <Box sx={{ color: grey[500] }}>Filter removed (reload page to reset)</Box>
    }

    return <RcSesFilterChip {...args} onRemove={() => setVisible(false)} />
  },
  parameters: {
    docs: {
      source: {
        code: `

const [visible, setVisible] = useState(true)

return (
  <RcSesFilterChip
    label="Filter label"
    onRemove={() => setVisible(false)}
  />
)`,
      },
    },
  },
}

export const AllStates: Story = {
  render: (args) => {
    const [removedStates, setRemovedStates] = useState<Set<string>>(new Set())

    const toggleRemoved = (key: string) => {
      const newSet = new Set(removedStates)
      if (newSet.has(key)) {
        newSet.delete(key)
      } else {
        newSet.add(key)
      }
      setRemovedStates(newSet)
    }

    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        <Box
          sx={{
            fontSize: '0.9375rem',
            fontWeight: 400,
            color: grey[700],
            lineHeight: 1.5,
          }}
        >
          Each state can be removed by clicking or pressing Space/Enter/Backspace. Refresh
          the page to reset all states.
        </Box>
        <Box>
          <Box sx={{ mb: 1, fontSize: '0.875rem', fontWeight: 500, color: grey[600] }}>
            Hover & Focus State
          </Box>
          <Box sx={{ mb: 1, fontSize: '0.8125rem', color: grey[500] }}>
            Hover: Background changes to grey[100], border to grey[400]
            <br />
            Focus: Border changes to primary[500] blue (2px), press Tab to focus
          </Box>
          {removedStates.has('hoverFocus') ? (
            <Box sx={{ color: grey[500], fontSize: '0.875rem' }}>Removed</Box>
          ) : (
            <RcSesFilterChip
              {...args}
              label='Filter label'
              onRemove={() => toggleRemoved('hoverFocus')}
            />
          )}
        </Box>

        <Box>
          <Box sx={{ mb: 1, fontSize: '0.875rem', fontWeight: 500, color: grey[600] }}>
            Disabled State
          </Box>
          <RcSesFilterChip {...args} label='Filter label' disabled onRemove={() => {}} />
        </Box>

        <Box>
          <Box sx={{ mb: 1, fontSize: '0.875rem', fontWeight: 500, color: grey[600] }}>
            Long Label (truncated with tooltip)
          </Box>
          {removedStates.has('long') ? (
            <Box sx={{ color: grey[500], fontSize: '0.875rem' }}>Removed</Box>
          ) : (
            <RcSesFilterChip
              {...args}
              label='This is a very long filter label that will be truncated'
              onRemove={() => toggleRemoved('long')}
            />
          )}
        </Box>
      </Box>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `// Rest State
<RcSesFilterChip label="Filter label" onRemove={() => {}} />

// Disabled State
<RcSesFilterChip label="Filter label" disabled onRemove={() => {}} />

// Long Label (truncated with tooltip)
<RcSesFilterChip
  label="This is a very long filter label that will be truncated"
  onRemove={() => {}}
/>`,
      },
    },
  },
}
