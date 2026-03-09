/* eslint-disable react/function-component-definition */
import { Meta, StoryFn } from '@storybook/react'

import RcSesAlert from '@/components/common/Alert'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const lorem =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."

const severities = ['info', 'warning', 'error', 'success'] as const

const meta: Meta<typeof RcSesAlert> = {
  title: 'components/common/Alert',
  component: RcSesAlert,
  tags: ['autodocs'],
}

export default meta

// ---------------------------------------------------------------------------
// Main (interactive / configurable via Controls panel)
// ---------------------------------------------------------------------------

const Template: StoryFn<typeof RcSesAlert> = (args) => (
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
)

export const Main = Template.bind({})
Main.args = {
  children: lorem,
  severity: 'info',
}

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

const VariantsTemplate: StoryFn<typeof RcSesAlert> = (args) => (
  <>
    {severities.map((severity) => (
      <RcSesAlert key={severity} {...args} severity={severity}>
        {lorem}
      </RcSesAlert>
    ))}
  </>
)

export const Outlined = VariantsTemplate.bind({})
Outlined.args = { variant: 'outlined' }

export const Filled = VariantsTemplate.bind({})
Filled.args = { variant: 'filled' }

export const Standard = VariantsTemplate.bind({})
Standard.args = { variant: 'standard' }

// ---------------------------------------------------------------------------
// Container — full-bleed banner keeping content width-constrained
// ---------------------------------------------------------------------------

export const WithContainer: StoryFn<typeof RcSesAlert> = () => (
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
)
