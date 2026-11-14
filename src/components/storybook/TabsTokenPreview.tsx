import { Box } from '@mui/material'
import type { CSSProperties } from 'react'
import { useState } from 'react'

import Tab from '@/components/common/Tabs/Tab'
import TabPanel from '@/components/common/Tabs/TabPanel'
import Tabs from '@/components/common/Tabs/Tabs'
import TabsWrapper from '@/components/common/Tabs/TabsWrapper'

export default function TabsTokenPreview({ overrides = false }: { overrides?: boolean }) {
  const [value, setValue] = useState(0)
  return (
    <Box
      sx={{ maxWidth: '720px' }}
      style={
        overrides
          ? ({
              '--rc-color-surface-base': '#fffaf0',
              '--rc-color-surface-sunken': '#f2e9de',
              '--rc-color-border-default': '#a56835',
              '--rc-color-border-subtle': '#c9ab8a',
              '--rc-color-text-default': '#542d16',
              '--rc-color-text-disabled': '#a38c7c',
              '--rc-radius-6': '12px',
            } as CSSProperties)
          : undefined
      }
    >
      <TabsWrapper heading='Orders'>
        <Tabs
          value={value}
          onChange={(_, next) => setValue(next)}
          aria-label='Order status'
          variant='scrollable'
          scrollButtons='auto'
        >
          {['All (17)', 'Drafts (3)', 'Unavailable (0)', 'Completed (14)'].map(
            (label, index) => (
              <Tab
                key={label}
                id={`rc-ses-tab--${index}`}
                aria-controls={`rc-ses-tab-panel-${index}`}
                label={label}
                disabled={index === 2}
              />
            ),
          )}
        </Tabs>
        {[0, 1, 2, 3].map((index) => (
          <TabPanel key={index} activeTab={value} index={index}>
            <Box sx={{ p: 3 }}>Content for tab {index + 1}</Box>
          </TabPanel>
        ))}
      </TabsWrapper>
    </Box>
  )
}
