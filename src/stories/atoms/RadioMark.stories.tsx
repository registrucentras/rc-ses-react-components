import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  Typography,
} from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import RcSesRadioMark from '@/components/common/RadioMark'

const types = ['unselected', 'selected'] as const
const meta: Meta<typeof RcSesRadioMark> = {
  title: 'Atoms/RadioMark',
  component: RcSesRadioMark,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Independent decorative 24px Radio-mark. The consuming radio supplies input semantics, labeling, hover, focus and error states. Radio-mark does not depend on Checkbox-mark.',
      },
    },
  },
  argTypes: { type: { control: 'select', options: types } },
}
export default meta
type Story = StoryObj<typeof RcSesRadioMark>

export const Main: Story = { args: { type: 'unselected', disabled: false } }

export const AllStates: Story = {
  render: () => (
    <Stack spacing={3}>
      {[false, true].map((disabled) => (
        <Stack key={String(disabled)} direction='row' spacing={4}>
          {types.map((type) => (
            <Stack key={type} spacing={1} sx={{ alignItems: 'center' }}>
              <RcSesRadioMark type={type} disabled={disabled} />
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
      <RcSesRadioMark /> <RcSesRadioMark type='selected' />
    </Box>
  ),
}

export const NativeControls: Story = {
  render: () => (
    <RadioGroup defaultValue='first' aria-label='Shared radio marks'>
      <FormControlLabel control={<Radio />} value='first' label='First radio' />
      <FormControlLabel control={<Radio />} value='second' label='Second radio' />
      <FormControlLabel
        disabled
        control={<Radio />}
        value='disabled'
        label='Disabled radio'
      />
    </RadioGroup>
  ),
}

/** Interactive fixture: keyboard/pointer tests capture the resulting states. */
export const KeyboardAndPointer: Story = {
  tags: ['no-snapshot'],
  render: () => (
    <Stack spacing={2}>
      <FormControl>
        <RadioGroup defaultValue='selected' aria-label='Radio interactions'>
          <FormControlLabel control={<Radio />} value='selected' label='Selected radio' />
          <FormControlLabel
            control={<Radio />}
            value='unselected'
            label='Unselected radio'
          />
        </RadioGroup>
      </FormControl>
      <FormControl error>
        <RadioGroup
          defaultValue='selected'
          aria-label='Radio error interactions'
          aria-invalid='true'
        >
          <FormControlLabel
            control={<Radio />}
            value='selected'
            label='Selected error radio'
          />
          <FormControlLabel
            control={<Radio />}
            value='unselected'
            label='Unselected error radio'
          />
        </RadioGroup>
      </FormControl>
      <FormControl disabled>
        <RadioGroup defaultValue='selected' aria-label='Disabled radio interactions'>
          <FormControlLabel
            control={<Radio />}
            value='selected'
            label='Selected disabled radio'
          />
          <FormControlLabel
            control={<Radio />}
            value='unselected'
            label='Unselected disabled radio'
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  ),
}
