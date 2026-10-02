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

export const LongLabelEdgeCase: Story = {
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
        <Box>
          <Box sx={{ mb: 1, fontSize: '0.875rem', fontWeight: 500, color: grey[600] }}>
            Long Label (truncated with tooltip)
          </Box>
          <Box sx={{ maxWidth: '250px', mb: 1, p: 1, border: `1px dashed ${grey[300]}` }}>
            {removedStates.has('long') ? (
              <Box sx={{ color: grey[500], fontSize: '0.875rem' }}>
                Filter removed (reload page to reset)
              </Box>
            ) : (
              <RcSesFilterChip
                {...args}
                label='This is a very long filter label that will be truncated'
                onRemove={() => toggleRemoved('long')}
              />
            )}
          </Box>
          <Box sx={{ fontSize: '0.8125rem', color: grey[500] }}>
            Container width: 250px. Hover to see full text in tooltip.
          </Box>
        </Box>
      </Box>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `// Rest State
<RcSesFilterChip label="Filter label" onRemove={() => {}} />

// Long Label (truncated with tooltip)
<RcSesFilterChip
  label="This is a very long filter label that will be truncated"
  onRemove={() => {}}
/>`,
      },
    },
  },
}
