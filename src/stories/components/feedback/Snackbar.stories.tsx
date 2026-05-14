import { Box, Button } from '@mui/material'
import type { Meta } from '@storybook/react'

import RcSesSnackbar from '@/components/common/Snackbar'
import {
  RcSesSnackbarProvider,
  useSnackbar,
} from '@/components/common/Snackbar/SnackbarProvider'
import { stateConfig } from '@/components/common/Snackbar/config'
import type { SnackbarState } from '@/components/common/Snackbar/types'

const getButtonColor = (state: SnackbarState): any => {
  if (state === 'error') return 'error'
  if (state === 'warning') return 'warning'
  if (state === 'info') return 'info'
  return undefined
}

const getStateLabel = (state: SnackbarState): string =>
  state.charAt(0).toUpperCase() + state.slice(1).replace('-', ' ')

const meta: Meta<typeof RcSesSnackbar> = {
  title: 'components/feedback/Snackbar',
  component: RcSesSnackbar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <RcSesSnackbarProvider>
        <Box sx={{ p: 4, pb: 16, minHeight: '300px' }}>
          <Story />
        </Box>
      </RcSesSnackbarProvider>
    ),
  ],
}

export default meta

const COMPACT_CONFIG = [
  { state: 'success' as SnackbarState, message: 'Sėkmingai išsaugota' },
  { state: 'error' as SnackbarState, message: 'Įvyko klaida' },
  { state: 'warning' as SnackbarState, message: 'Dėmesio pranešimas' },
  { state: 'info' as SnackbarState, message: 'Informacinis pranešimas' },
]

const STANDARD_CONFIG = [
  {
    state: 'success' as SnackbarState,
    message: 'Sėkmingai išsaugota',
    actionLabel: 'Atgal',
  },
  {
    state: 'error' as SnackbarState,
    message: 'Įvyko klaida',
    actionLabel: 'Pakartoti',
  },
  {
    state: 'warning' as SnackbarState,
    message: 'Dėmesio pranešimas',
    actionLabel: 'Sąlyga',
  },
  {
    state: 'info' as SnackbarState,
    message: 'Informacinis pranešimas',
    actionLabel: 'Daugiau',
  },
  {
    state: 'action-needed' as SnackbarState,
    message: 'Reikalingas veiksmas',
    actionLabel: 'Atlikti',
  },
]

export const Default = {
  render: (args: any) => (
    <Box sx={{ pb: 12 }}>
      <RcSesSnackbar
        key={`${args.state}-${args.message}-${args.size}-${args.persist}`}
        {...args}
      />
    </Box>
  ),
  args: {
    open: true,
    state: 'success',
    message: 'Sėkmingai išsaugota',
    size: 'standard',
    actionLabel: 'Atgal',
    duration: 10000,
    persist: true,
    showClose: true,
    dismissOnAction: true,
  },
  argTypes: {
    open: {
      control: 'boolean',
      description: 'Control snackbar visibility',
    },
    state: {
      control: 'select',
      options: ['success', 'error', 'warning', 'info', 'action-needed'],
      description: 'Snackbar state determines icon, color, and aria-live level',
    },
    message: {
      control: 'text',
      description: 'Notification message text (truncates with ellipsis)',
    },
    size: {
      control: 'radio',
      options: ['standard', 'compact'],
      description: 'Standard (400×60px) or Compact (320×48px)',
    },
    duration: {
      control: { type: 'number', min: 1000, max: 30000, step: 1000 },
      description: 'Auto-dismiss duration in milliseconds (ignored if persist=true)',
    },
    persist: {
      control: 'boolean',
      description: 'If true, snackbar will not auto-dismiss',
    },
    showClose: {
      control: 'boolean',
      description: 'Show/hide close button',
    },
    dismissOnAction: {
      control: 'boolean',
      description: 'Close snackbar when action button is clicked',
    },
    actionLabel: {
      control: 'text',
      description: 'Action button label (only shown in standard size)',
    },
    onAction: {
      action: 'onAction',
      description: 'Callback when action button is clicked',
    },
    onClose: {
      action: 'onClose',
      description: 'Callback when snackbar closes',
    },
  },
  parameters: {
    docs: {
      description: {
        story:
          'Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time. Use this for direct component testing.',
      },
    },
  },
}

function SnackbarDemoCompactWithText() {
  const { showSnackbar } = useSnackbar()

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {COMPACT_CONFIG.map(({ state: snackbarState, message }) => {
        const Icon = stateConfig[snackbarState].icon
        return (
          <Button
            key={snackbarState}
            variant='contained'
            color={getButtonColor(snackbarState) as any}
            startIcon={<Icon />}
            onClick={() =>
              showSnackbar({ state: snackbarState, message, size: 'compact' })
            }
          >
            {getStateLabel(snackbarState)} (Compact)
          </Button>
        )
      })}
    </Box>
  )
}

export const CompactWithText = {
  render: () => <SnackbarDemoCompactWithText />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates compact-size snackbars across all 4 states. Compact size does not support action buttons.',
      },
      source: {
        code: `// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// Show different state snackbars
showSnackbar({
  state: 'success',
  message: 'Sėkmingai išsaugota',
  size: 'compact',
})

showSnackbar({
  state: 'error',
  message: 'Įvyko klaida',
  size: 'compact',
})

showSnackbar({
  state: 'warning',
  message: 'Dėmesio pranešimas',
  size: 'compact',
})

showSnackbar({
  state: 'info',
  message: 'Informacinis pranešimas',
  size: 'compact',
})`,
      },
    },
  },
}

function SnackbarDemoStandardWithButtons() {
  const { showSnackbar } = useSnackbar()

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {STANDARD_CONFIG.map(({ state: snackbarState, message, actionLabel }) => {
        const Icon = stateConfig[snackbarState].icon
        return (
          <Button
            key={snackbarState}
            variant='contained'
            color={getButtonColor(snackbarState) as any}
            startIcon={<Icon />}
            onClick={() =>
              showSnackbar({
                state: snackbarState,
                message,
                actionLabel,
                size: 'standard',
                onAction: () => {
                  // eslint-disable-next-line no-console
                  console.log(`${actionLabel} clicked`)
                },
              })
            }
          >
            {getStateLabel(snackbarState)} (Standard)
          </Button>
        )
      })}
    </Box>
  )
}

export const StandardWithButtons = {
  render: () => <SnackbarDemoStandardWithButtons />,
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates standard-size snackbars with action buttons.',
      },
      source: {
        code: `// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// Success with action
showSnackbar({
  state: 'success',
  message: 'Sėkmingai išsaugota',
  actionLabel: 'Atgal',
  size: 'standard',
  onAction: () => console.log('Atgal clicked'),
})

// Error with action
showSnackbar({
  state: 'error',
  message: 'Įvyko klaida',
  actionLabel: 'Pakartoti',
  size: 'standard',
  onAction: () => console.log('Pakartoti clicked'),
})

// Warning with action
showSnackbar({
  state: 'warning',
  message: 'Dėmesio pranešimas',
  actionLabel: 'Sąlyga',
  size: 'standard',
  onAction: () => console.log('Sąlyga clicked'),
})

// Info with action
showSnackbar({
  state: 'info',
  message: 'Informacinis pranešimas',
  actionLabel: 'Daugiau',
  size: 'standard',
  onAction: () => console.log('Daugiau clicked'),
})

// Action needed with action
showSnackbar({
  state: 'action-needed',
  message: 'Reikalingas veiksmas',
  actionLabel: 'Atlikti',
  size: 'standard',
  onAction: () => console.log('Atlikti clicked'),
})`,
      },
    },
  },
}

function SnackbarDemoCustomDuration() {
  const { showSnackbar } = useSnackbar()

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Button
        variant='contained'
        onClick={() =>
          showSnackbar({
            state: 'success',
            message: 'Trumpai išsaugota (3s)',
            duration: 3000,
          })
        }
      >
        3s Duration
      </Button>
      <Button
        variant='contained'
        onClick={() =>
          showSnackbar({
            state: 'success',
            message: 'Ilgiau išsaugota (10s)',
            duration: 10000,
          })
        }
      >
        10s Duration
      </Button>
    </Box>
  )
}

export const CustomDuration = {
  render: () => <SnackbarDemoCustomDuration />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates custom auto-dismiss durations (3s and 10s). Hover over a snackbar to pause the countdown timer - the auto-dismiss will resume when you move the mouse away.',
      },
      source: {
        code: `// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

// 3 second duration
showSnackbar({
  state: 'success',
  message: 'Trumpai išsaugota (3s)',
  duration: 3000,
})

// 10 second duration
showSnackbar({
  state: 'success',
  message: 'Ilgiau išsaugota (10s)',
  duration: 10000,
})`,
      },
    },
  },
}

function SnackbarDemoPersistent() {
  const { showSnackbar } = useSnackbar()

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Button
        variant='contained'
        onClick={() =>
          showSnackbar({
            state: 'action-needed',
            message: 'Statiškas pranešimas',
            actionLabel: 'Patvirtinti',
            persist: true,
            showClose: true,
            onAction: () => {
              // eslint-disable-next-line no-console
              console.log('Patvirtinta')
            },
          })
        }
      >
        Persistent Snackbar
      </Button>
    </Box>
  )
}

export const Persistent = {
  render: () => <SnackbarDemoPersistent />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button.',
      },
      source: {
        code: `// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

showSnackbar({
  state: 'action-needed',
  message: 'Statiškas pranešimas',
  actionLabel: 'Patvirtinti',
  persist: true,
  showClose: true,
})`,
      },
    },
  },
}

function SnackbarDemoLongText() {
  const { showSnackbar } = useSnackbar()

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Button
        variant='contained'
        color='info'
        onClick={() =>
          showSnackbar({
            state: 'info',
            message:
              'Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą, tai yra labai labai labai ilgas tekstas testavimui.',
            showClose: true,
          })
        }
      >
        Long Text (Truncation)
      </Button>
    </Box>
  )
}

export const LongText = {
  render: () => <SnackbarDemoLongText />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width.',
      },
      source: {
        code: `// Setup at app root
import { RcSesSnackbarProvider } from 'rc-ses-react-components'

<RcSesSnackbarProvider>
  <App />
</RcSesSnackbarProvider>

// Usage in component
const { showSnackbar } = useSnackbar()

showSnackbar({
  state: 'info',
  message: 'Tai yra labai ilgas pranešimas kuris turėtų būti trump intas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą',
  showClose: true,
})`,
      },
    },
  },
}
