import { Box, Checkbox, FormControlLabel, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import RcSesCheckboxMark from '@/components/common/CheckboxMark'

const types = ['unchecked', 'checked', 'indeterminate'] as const
const meta: Meta<typeof RcSesCheckboxMark> = {
  title: 'Atoms/CheckboxMark',
  component: RcSesCheckboxMark,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Decorative 24px Checkbox-mark. Add an accessible native input, label and interaction states in the consuming control. The mark itself is hidden from assistive technology.',
      },
    },
  },
  argTypes: { type: { control: 'select', options: types } },
}
export default meta
type Story = StoryObj<typeof RcSesCheckboxMark>

export const Main: Story = { args: { type: 'unchecked', disabled: false } }

export const AllStates: Story = {
  render: () => (
    <Stack spacing={3}>
      {[false, true].map((disabled) => (
        <Stack key={String(disabled)} direction='row' spacing={4}>
          {types.map((type) => (
            <Stack key={type} spacing={1} sx={{ alignItems: 'center' }}>
              <RcSesCheckboxMark type={type} disabled={disabled} />
              <Typography variant='caption'>
                {type}
                {disabled ? ' / disabled' : ''}
              </Typography>
            </Stack>
          ))}
        </Stack>
      ))}
    </Stack>
  ),
}

export const TokenOverrides: Story = {
  render: () => (
    <Box
      sx={{
        '--rc-color-control-selected': '#654321',
        '--rc-color-control-border': '#654321',
        '--rc-icon-size-control': '22px',
      }}
    >
      <RcSesCheckboxMark /> <RcSesCheckboxMark type='checked' />{' '}
      <RcSesCheckboxMark type='indeterminate' />
    </Box>
  ),
}

export const NativeControls: Story = {
  render: () => (
    <Stack>
      <FormControlLabel control={<Checkbox />} label='Checkbox' />
      <FormControlLabel control={<Checkbox defaultChecked />} label='Checked checkbox' />
      <FormControlLabel control={<Checkbox indeterminate />} label='Mixed checkbox' />
      <FormControlLabel
        disabled
        control={<Checkbox />}
        label='Inherited disabled checkbox'
      />
      <FormControlLabel
        disabled
        control={<Checkbox defaultChecked />}
        label='Inherited disabled checked checkbox'
      />
    </Stack>
  ),
}
