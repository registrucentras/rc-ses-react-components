import { FormControl, FormControlLabel, Stack } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'

import SimpleCheckbox from '@/components/form/inputs/SimpleCheckbox'
import theme from '@/theme/light'

const meta = {
  title: 'Atoms/SimpleCheckbox',
  component: SimpleCheckbox,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Lightweight checkbox without form wrapper. Use as children in CheckboxFormControl or anywhere you need a plain checkbox without form wrapper overhead.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleCheckbox>

export default meta
type Story = StoryObj<typeof meta>

function BasicDemo() {
  const [checked, setChecked] = useState(false)
  return (
    <SimpleCheckbox checked={checked} onChange={(e) => setChecked(e.target.checked)} />
  )
}

function LoadingDemo() {
  return <SimpleCheckbox checked loading />
}

export const Basic: Story = {
  render: () => <BasicDemo />,
}

export const Loading: Story = {
  render: () => <LoadingDemo />,
  parameters: {
    docs: {
      description: {
        story: 'Loading state - shows skeleton icon animation.',
      },
      source: {
        type: 'code',
        code: `<SimpleCheckbox checked={true} loading />`,
      },
    },
  },
}

export const TokenBindings: Story = {
  render: () => (
    <Stack spacing={2}>
      <FormControlLabel control={<SimpleCheckbox />} label='Unchecked checkbox' />
      <FormControlLabel
        control={<SimpleCheckbox defaultChecked />}
        label='Checked checkbox'
      />
      <FormControlLabel
        control={<SimpleCheckbox indeterminate />}
        label='Indeterminate checkbox'
      />
      <FormControlLabel
        control={<SimpleCheckbox disabled />}
        label='Disabled unchecked checkbox'
      />
      <FormControlLabel
        control={<SimpleCheckbox disabled defaultChecked />}
        label='Disabled checked checkbox'
      />
      <FormControlLabel
        control={<SimpleCheckbox disabled indeterminate />}
        label='Disabled indeterminate checkbox'
      />
      <FormControl error>
        <FormControlLabel
          sx={{ ml: 0 }}
          control={<SimpleCheckbox />}
          label='Error checkbox'
        />
      </FormControl>
      <FormControlLabel control={<SimpleCheckbox loading />} label='Loading checkbox' />
    </Stack>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Shared Checkbox-mark uses a 24px frame and 20px shape. Hover and error halos belong to the consuming control, while selection and loading behavior are preserved.',
      },
    },
  },
}

export const TokenOverrides: Story = {
  render: () => (
    <Stack spacing={2}>
      <FormControlLabel
        label='Custom checkbox styles'
        control={
          <SimpleCheckbox
            defaultChecked
            sx={{
              '&.Mui-checked': { color: '#0a141e' },
              '&.Mui-focusVisible [data-rc-mark-shape]': { boxShadow: 'none' },
            }}
          />
        }
      />
      <ThemeProvider
        theme={createTheme(theme, { palette: { secondary: { main: '#4d5863' } } })}
      >
        <FormControlLabel
          label='Custom palette checkbox'
          control={<SimpleCheckbox color='secondary' defaultChecked />}
        />
      </ThemeProvider>
    </Stack>
  ),
}
