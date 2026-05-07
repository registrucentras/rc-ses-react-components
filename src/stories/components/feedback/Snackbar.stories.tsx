import { Box, Button } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

import RcSesSnackbar from '@/components/common/Snackbar'
import { stateConfig } from '@/components/common/Snackbar/config'
import type { SnackbarState } from '@/components/common/Snackbar/types'

const FEEDBACK_BG_COLOR = '#4caf50'
const FEEDBACK_TIMEOUT = 2000
const FEEDBACK_MESSAGE = '✓ Veiksmas atliktas'

const getButtonColor = (state: SnackbarState): any => {
  if (state === 'error') return 'error'
  if (state === 'warning') return 'warning'
  if (state === 'info') return 'info'
  return undefined
}

const getStateLabel = (state: SnackbarState): string =>
  state.charAt(0).toUpperCase() + state.slice(1).replace('-', ' ')

function FeedbackBox({ message }: { message: string }) {
  return (
    <Box
      sx={{
        px: 1,
        py: 0.5,
        backgroundColor: FEEDBACK_BG_COLOR,
        color: 'white',
        borderRadius: '4px',
        fontWeight: 500,
        fontSize: '12px',
        width: 'fit-content',
      }}
    >
      {message}
    </Box>
  )
}

const meta: Meta<typeof RcSesSnackbar> = {
  title: 'components/feedback/Snackbar',
  component: RcSesSnackbar,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <Box sx={{ p: 4, pb: 16, minHeight: '300px' }}>
        <Story />
      </Box>
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
          'Interactive playground to test different Snackbar configurations. Adjust all props using the controls above to see how the component responds in real-time.',
      },
    },
  },
}

function SnackbarDemoCompactWithText() {
  const [state, setState] = useState<SnackbarState | null>(null)
  const [config, setConfig] = useState<{ state: SnackbarState; message: string }>()

  const handleShowSnackbar = (snackbarState: SnackbarState, message: string) => {
    setConfig({ state: snackbarState, message })
    setState(snackbarState)
  }

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {COMPACT_CONFIG.map(({ state: snackbarState, message }) => {
          const Icon = stateConfig[snackbarState].icon
          return (
            <Button
              key={snackbarState}
              variant='contained'
              color={getButtonColor(snackbarState) as any}
              startIcon={<Icon />}
              onClick={() => handleShowSnackbar(snackbarState, message)}
            >
              {getStateLabel(snackbarState)} (Compact)
            </Button>
          )
        })}
      </Box>
      {state && config && (
        <RcSesSnackbar
          state={config.state}
          message={config.message}
          size='compact'
          onClose={() => setState(null)}
        />
      )}
    </>
  )
}

export const CompactWithText = {
  render: () => <SnackbarDemoCompactWithText />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates compact-size snackbars (320×48px) across all 4 states. Compact size does not support action buttons.',
      },
    },
  },
}

function SnackbarDemoStandardWithButtons() {
  const [state, setState] = useState<SnackbarState | null>(null)
  const [config, setConfig] = useState<{
    state: SnackbarState
    message: string
    actionLabel?: string
  }>()
  const [feedback, setFeedback] = useState('')

  const showFeedback = () => {
    setFeedback(FEEDBACK_MESSAGE)
    setTimeout(() => setFeedback(''), FEEDBACK_TIMEOUT)
  }

  const handleShowSnackbar = (
    snackbarState: SnackbarState,
    message: string,
    actionLabel?: string,
  ) => {
    setConfig({ state: snackbarState, message, actionLabel })
    setState(snackbarState)
  }

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', flexDirection: 'column' }}>
        {feedback && <FeedbackBox message={feedback} />}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          {STANDARD_CONFIG.map(({ state: snackbarState, message, actionLabel }) => {
            const Icon = stateConfig[snackbarState].icon
            return (
              <Button
                key={snackbarState}
                variant='contained'
                color={getButtonColor(snackbarState) as any}
                startIcon={<Icon />}
                onClick={() => handleShowSnackbar(snackbarState, message, actionLabel)}
              >
                {getStateLabel(snackbarState)} (Standard)
              </Button>
            )
          })}
        </Box>
      </Box>
      {state && config && (
        <RcSesSnackbar
          state={config.state}
          message={config.message}
          size='standard'
          actionLabel={config.actionLabel}
          onAction={showFeedback}
          onClose={() => setState(null)}
        />
      )}
    </>
  )
}

export const StandardWithButtons = {
  render: () => <SnackbarDemoStandardWithButtons />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates standard-size snackbars with action buttons. Clicking an action button triggers a visual feedback message (only for the demo purpose).',
      },
    },
  },
}

function SnackbarDemoCustomDuration() {
  const [state, setState] = useState<SnackbarState | null>(null)
  const [config, setConfig] = useState<{ message: string; duration: number }>()

  const handleShowSnackbar = (message: string, duration: number) => {
    setConfig({ message, duration })
    setState('success')
  }

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Button
          variant='contained'
          onClick={() => handleShowSnackbar('Trumpai išsaugota (3s)', 3000)}
        >
          3s Duration
        </Button>
        <Button
          variant='contained'
          onClick={() => handleShowSnackbar('Ilgiau išsaugota (10s)', 10000)}
        >
          10s Duration
        </Button>
      </Box>
      {state && config && (
        <RcSesSnackbar
          state={state}
          message={config.message}
          duration={config.duration}
          onClose={() => setState(null)}
        />
      )}
    </>
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
    },
  },
}

function SnackbarDemoPersistent() {
  const [showSnackbar, setShowSnackbar] = useState(false)
  const [feedback, setFeedback] = useState('')

  const showFeedback = () => {
    setFeedback(FEEDBACK_MESSAGE)
    setTimeout(() => setFeedback(''), FEEDBACK_TIMEOUT)
  }

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', flexDirection: 'column' }}>
        {feedback && <FeedbackBox message={feedback} />}
        <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
          <Button variant='contained' onClick={() => setShowSnackbar(true)}>
            Persistent Snackbar
          </Button>
        </Box>
      </Box>
      {showSnackbar && (
        <RcSesSnackbar
          state='action-needed'
          message='Statiškas pranešimas'
          actionLabel='Patvirtinti'
          onAction={showFeedback}
          persist
          onClose={() => setShowSnackbar(false)}
        />
      )}
    </>
  )
}

export const Persistent = {
  render: () => <SnackbarDemoPersistent />,
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button to dismiss.',
      },
    },
  },
}

function SnackbarDemoLongText() {
  const [showSnackbar, setShowSnackbar] = useState(false)
  const InfoIcon = stateConfig.info.icon

  return (
    <>
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Button
          variant='contained'
          color='info'
          startIcon={<InfoIcon />}
          onClick={() => setShowSnackbar(true)}
        >
          Long Text (Truncation)
        </Button>
      </Box>
      {showSnackbar && (
        <RcSesSnackbar
          state='info'
          message='Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą'
          onClose={() => setShowSnackbar(false)}
        />
      )}
    </>
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
    },
  },
}
