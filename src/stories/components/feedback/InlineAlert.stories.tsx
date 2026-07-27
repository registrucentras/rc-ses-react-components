import { Stack } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'

import RcSesInlineAlert from '@/components/common/InlineAlert'

const text = 'Pranešimo tekstas. Pakeisk turinį pagal kontekstą.'
const longText =
  'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ' +
  'nulla quae? Aliquam aperiam aut consequuntur cum debitis dolor eum explicabo, ' +
  'laborum molestias placeat quae quos sequi sunt tempore.'

const variants = ['neutral', 'info', 'success', 'warning', 'error'] as const

const meta: Meta<typeof RcSesInlineAlert> = {
  title: 'components/feedback/InlineAlert',
  component: RcSesInlineAlert,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: variants },
  },
}

export default meta

type Story = StoryObj<typeof RcSesInlineAlert>

export const Main: Story = {
  render: () => (
    <Stack spacing={2}>
      {variants.map((variant) => (
        <RcSesInlineAlert
          key={variant}
          variant={variant}
          actionLabel='Veiksmas'
          onClose={() => {}}
        >
          {text}
        </RcSesInlineAlert>
      ))}
    </Stack>
  ),
}

export const Combinations: Story = {
  render: () => (
    <Stack spacing={2}>
      <RcSesInlineAlert>{text}</RcSesInlineAlert>

      <RcSesInlineAlert showIcon={false}>{text}</RcSesInlineAlert>

      <RcSesInlineAlert onClose={() => {}}>{text}</RcSesInlineAlert>

      <RcSesInlineAlert actionLabel='Veiksmas'>{text}</RcSesInlineAlert>

      <RcSesInlineAlert actionLabel='Veiksmas' onClose={() => {}}>
        {text}
      </RcSesInlineAlert>
    </Stack>
  ),
}

export const LongText: Story = {
  render: () => (
    <Stack spacing={2}>
      {variants.map((variant) => (
        <RcSesInlineAlert
          key={variant}
          variant={variant}
          actionLabel='Veiksmas'
          onClose={() => {}}
        >
          {longText}
        </RcSesInlineAlert>
      ))}
    </Stack>
  ),
}
