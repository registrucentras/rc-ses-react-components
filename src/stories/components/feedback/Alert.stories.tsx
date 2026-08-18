import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import { useState } from 'react'

import RcSesAlert from '@/components/common/Alert'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const severities: Array<'grey' | 'info' | 'success' | 'warning' | 'error'> = [
  'grey',
  'info',
  'success',
  'warning',
  'error',
]

const meta: Meta<typeof RcSesAlert> = {
  title: 'components/feedback/Alert',
  component: RcSesAlert,
  tags: ['autodocs'],
  argTypes: {
    severity: {
      options: severities,
      control: { type: 'select' },
    },
    variant: {
      options: ['outlined', 'filled', 'standard'],
      control: { type: 'select' },
    },
    showIcon: {
      control: 'boolean',
    },
    showAction: {
      control: 'boolean',
    },
    showClose: {
      control: 'boolean',
    },
    actionLabel: {
      control: 'text',
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesAlert>

// ---------------------------------------------------------------------------
// Main (interactive / configurable via Controls panel)
// ---------------------------------------------------------------------------

export const Main: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesAlert {...args} />
      </FieldView>
      <FieldPreview>
        <PreviewTitle>State previews</PreviewTitle>
        {severities.map((severity) => (
          <RcSesAlert key={severity} severity={severity} sx={{ mb: 1 }}>
            {lorem}
          </RcSesAlert>
        ))}
      </FieldPreview>
    </Fields>
  ),
  args: {
    children: lorem,
    severity: 'info',
    actionLabel: 'Veiksmas',
    onActionClick: fn(),
    onClose: fn(),
  },
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

const renderVariants: Story['render'] = (args) => (
  <>
    {severities.map((severity) => (
      <RcSesAlert key={severity} {...args} severity={severity} sx={{ mb: 1 }}>
        {lorem}
      </RcSesAlert>
    ))}
  </>
)

export const Outlined: Story = {
  render: renderVariants,
  args: { variant: 'outlined' },
}

export const Filled: Story = {
  render: renderVariants,
  args: { variant: 'filled' },
}

export const Standard: Story = {
  render: renderVariants,
  args: { variant: 'standard' },
}

// ---------------------------------------------------------------------------
// Action & close — buttons wired up, but not removing the alert on close
// (see Dismissible below for that). Clicks are logged in the Actions panel.
// ---------------------------------------------------------------------------

export const WithActionAndClose: Story = {
  render: renderVariants,
  args: {
    actionLabel: 'Veiksmas',
    onActionClick: fn(),
    onClose: fn(),
  },
}

export const WithoutActionAndClose: Story = {
  render: renderVariants,
}

// ---------------------------------------------------------------------------
// Toggles — Type × showIcon/showAction/showClose combinations
// ---------------------------------------------------------------------------

export const Toggles: Story = {
  render: () => (
    <>
      <PreviewTitle>showIcon = false</PreviewTitle>
      {severities.map((severity) => (
        <RcSesAlert key={severity} severity={severity} showIcon={false} sx={{ mb: 1 }}>
          {lorem}
        </RcSesAlert>
      ))}

      <PreviewTitle>action only (showClose = false)</PreviewTitle>
      {severities.map((severity) => (
        <RcSesAlert
          key={severity}
          severity={severity}
          actionLabel='Veiksmas'
          onActionClick={fn()}
          onClose={fn()}
          showClose={false}
          sx={{ mb: 1 }}
        >
          {lorem}
        </RcSesAlert>
      ))}

      <PreviewTitle>close only (showAction = false)</PreviewTitle>
      {severities.map((severity) => (
        <RcSesAlert
          key={severity}
          severity={severity}
          actionLabel='Veiksmas'
          onActionClick={fn()}
          onClose={fn()}
          showAction={false}
          sx={{ mb: 1 }}
        >
          {lorem}
        </RcSesAlert>
      ))}
    </>
  ),
}

// ---------------------------------------------------------------------------
// Dismissible — action logs to the console, close actually removes the alert
// ---------------------------------------------------------------------------

function DismissibleTemplate() {
  const [visibleSeverities, setVisibleSeverities] = useState<
    Array<(typeof severities)[number]>
  >([...severities])

  return (
    <>
      {visibleSeverities.map((severity) => (
        <RcSesAlert
          key={severity}
          severity={severity}
          actionLabel='Veiksmas'
          onActionClick={() => console.log(`${severity} alert action clicked`)}
          onClose={() =>
            setVisibleSeverities((prev) => prev.filter((item) => item !== severity))
          }
          sx={{ mb: 1 }}
        >
          {lorem}
        </RcSesAlert>
      ))}
    </>
  )
}

export const Dismissible: Story = {
  render: () => <DismissibleTemplate />,
}

// ---------------------------------------------------------------------------
// Container — full-bleed banner keeping content width-constrained
// ---------------------------------------------------------------------------

export const WithContainer: Story = {
  render: () => (
    <>
      <PreviewTitle>container (default maxWidth)</PreviewTitle>
      {severities.map((severity) => (
        <RcSesAlert key={severity} severity={severity} container sx={{ mb: 1 }}>
          {lorem}
        </RcSesAlert>
      ))}

      <PreviewTitle>container with maxWidth=&quot;sm&quot;</PreviewTitle>
      {severities.map((severity) => (
        <RcSesAlert
          key={severity}
          severity={severity}
          container={{ maxWidth: 'sm' }}
          sx={{ mb: 1 }}
        >
          {lorem}
        </RcSesAlert>
      ))}
    </>
  ),
}
