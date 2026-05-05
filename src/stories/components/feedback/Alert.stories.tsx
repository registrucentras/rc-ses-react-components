import { Meta, StoryObj } from '@storybook/react'

import RcSesAlert from '@/components/common/Alert'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const severities = ['info', 'warning', 'error', 'success'] as const

const meta: Meta<typeof RcSesAlert> = {
  title: 'components/feedback/Alert',
  component: RcSesAlert,
  tags: ['autodocs'],
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
          <RcSesAlert key={severity} severity={severity}>
            {lorem}
          </RcSesAlert>
        ))}
      </FieldPreview>
    </Fields>
  ),
  args: {
    children: lorem,
    severity: 'info',
  },
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

const renderVariants: Story['render'] = (args) => (
  <>
    {severities.map((severity) => (
      <RcSesAlert key={severity} {...args} severity={severity}>
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
