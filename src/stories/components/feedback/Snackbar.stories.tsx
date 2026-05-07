import { Box, Button } from '@mui/material'
import type { Meta } from '@storybook/react'
import { useState } from 'react'

import RcSesSnackbar from '@/components/common/Snackbar'
import {
  RcSesSnackbarProvider,
  useSnackbar,
} from '@/components/common/Snackbar/SnackbarProvider'
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
  const { showSnackbar } = useSnackbar()

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      {COMPACT_CONFIG.map(({ state, message }) => {
        const Icon = stateConfig[state].icon
        return (
          <Button
            key={state}
            variant='contained'
            color={getButtonColor(state) as any}
            startIcon={<Icon />}
            onClick={() => showSnackbar({ state, message, size: 'compact' })}
          >
            {getStateLabel(state)} (Compact)
          </Button>
        )
      })}
    </Box>
  )
}

export const CompactWithText = {
  render: () => (
    <RcSesSnackbarProvider>
      <SnackbarDemoCompactWithText />
    </RcSesSnackbarProvider>
  ),
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
  const { showSnackbar } = useSnackbar()
  const [feedback, setFeedback] = useState('')

  const showFeedback = () => {
    setFeedback(FEEDBACK_MESSAGE)
    setTimeout(() => setFeedback(''), FEEDBACK_TIMEOUT)
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', flexDirection: 'column' }}>
      {feedback && <FeedbackBox message={feedback} />}
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        {STANDARD_CONFIG.map(({ state, message, actionLabel }) => {
          const Icon = stateConfig[state].icon
          return (
            <Button
              key={state}
              variant='contained'
              color={getButtonColor(state) as any}
              startIcon={<Icon />}
              onClick={() =>
                showSnackbar({
                  state,
                  message,
                  size: 'standard',
                  actionLabel,
                  onAction: showFeedback,
                })
              }
            >
              {getStateLabel(state)} (Standard)
            </Button>
          )
        })}
      </Box>
    </Box>
  )
}

export const StandardWithButtons = {
  render: () => (
    <RcSesSnackbarProvider>
      <SnackbarDemoStandardWithButtons />
    </RcSesSnackbarProvider>
  ),
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
  render: () => (
    <RcSesSnackbarProvider>
      <SnackbarDemoCustomDuration />
    </RcSesSnackbarProvider>
  ),
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
  const { showSnackbar } = useSnackbar()
  const [feedback, setFeedback] = useState('')

  const showFeedback = () => {
    setFeedback(FEEDBACK_MESSAGE)
    setTimeout(() => setFeedback(''), FEEDBACK_TIMEOUT)
  }

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', flexDirection: 'column' }}>
      {feedback && <FeedbackBox message={feedback} />}
      <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
        <Button
          variant='contained'
          onClick={() =>
            showSnackbar({
              state: 'action-needed',
              message: 'Statiškas pranešimas',
              persist: true,
              actionLabel: 'Patvirtinti',
              onAction: showFeedback,
            })
          }
        >
          Persistent Snackbar
        </Button>
      </Box>
    </Box>
  )
}

export const Persistent = {
  render: () => (
    <RcSesSnackbarProvider>
      <SnackbarDemoPersistent />
    </RcSesSnackbarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates persistent snackbars that do not auto-dismiss. Users must click the action button or close button to dismiss.',
      },
    },
  },
}

function SnackbarDemoStackable() {
  const { showSnackbar } = useSnackbar()

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Button
        variant='contained'
        onClick={() => {
          showSnackbar({
            state: 'success',
            message: 'Sėkmingai išsaugota',
            duration: 10000,
          })
          setTimeout(
            () =>
              showSnackbar({
                state: 'error',
                message: 'Įvyko klaida',
                duration: 10000,
              }),
            100,
          )
        }}
      >
        Stack 2 Snackbars
      </Button>
      <Button
        variant='contained'
        onClick={() => {
          showSnackbar({
            state: 'success',
            message: 'Sėkmingai išsaugota',
            duration: 10000,
          })
          setTimeout(
            () =>
              showSnackbar({
                state: 'error',
                message: 'Įvyko klaida',
                duration: 10000,
              }),
            100,
          )
          setTimeout(
            () =>
              showSnackbar({
                state: 'warning',
                message: 'Dėmesio!',
                duration: 10000,
                actionLabel: 'Sąlyga',
              }),
            200,
          )
        }}
      >
        Stack 3 Snackbars
      </Button>
    </Box>
  )
}

export const Stackable = {
  render: () => (
    <RcSesSnackbarProvider>
      <SnackbarDemoStackable />
    </RcSesSnackbarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates stackable snackbars: max 3 on desktop, max 2 on mobile. New snackbars appear at the top of the stack.',
      },
    },
  },
}

function SnackbarDemoLongText() {
  const { showSnackbar } = useSnackbar()
  const InfoIcon = stateConfig.info.icon

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Button
        variant='contained'
        color='info'
        startIcon={<InfoIcon />}
        onClick={() =>
          showSnackbar({
            state: 'info',
            message:
              'Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą',
          })
        }
      >
        Long Text (Truncation)
      </Button>
    </Box>
  )
}

export const LongText = {
  render: () => (
    <RcSesSnackbarProvider>
      <SnackbarDemoLongText />
    </RcSesSnackbarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates how lengthy messages are truncated with ellipsis (...) when they exceed the snackbar width.',
      },
    },
  },
}

function SnackbarDemoStacked() {
  const { showSnackbar } = useSnackbar()

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Button
        variant='contained'
        onClick={() => {
          showSnackbar({
            state: 'success',
            message: 'Sėkmingai išsaugota',
            actionLabel: 'Anuliuoti',
            onAction: () => {},
            size: 'standard',
          })
          setTimeout(() => {
            showSnackbar({
              state: 'info',
              message:
                'Tai yra labai ilgas pranešimas kuris turėtų būti trumpintas su elipsu jei nepakanka vietos komponente. Šis tekstas skirtas testuoti teksto trumpinimą',
              size: 'standard',
            })
          }, 500)
          setTimeout(() => {
            showSnackbar({
              state: 'error',
              message: 'Įvyko klaida',
              size: 'standard',
            })
          }, 1000)
        }}
      >
        Show Multiple Snackbars
      </Button>
    </Box>
  )
}

export const Stacked = {
  render: () => (
    <RcSesSnackbarProvider>
      <SnackbarDemoStacked />
    </RcSesSnackbarProvider>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates multiple snackbars stacked with consistent 8px spacing when truncating long text in one of the snackbars.',
      },
    },
  },
}
