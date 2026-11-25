import { Box, Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useState } from 'react'
import { fn } from 'storybook/test'

import RcSesAlert from '@/components/common/Alert'
import RcSesButton from '@/components/common/Button'
import RcSesEmptyState from '@/components/common/EmptyState'

const meta = {
  title: 'Molecules/EmptyState',
  component: RcSesEmptyState,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Replaces absent content after loading finishes. Use sx/minHeight to reserve the same space as the list or table. Set announce for warning/error responses to user actions; neutral/info remain plain content. Compose validationError with an Inline Alert below. Compact omits the hint; showAction=false prevents duplicate actions.',
      },
    },
  },
  args: {
    title: 'Kol kas nieko nėra',
    description: 'Paaiškinkite, kodėl turinio nėra ir ką daryti toliau.',
    hint: 'Patarimas: trumpa užuomina, kaip greičiau gauti rezultatą.',
    action: { label: 'Kaip ieškoti?', onClick: fn() },
  },
  argTypes: {
    type: { control: 'select', options: ['neutral', 'info', 'warning', 'error'] },
    size: { control: 'select', options: ['regular', 'compact'] },
    headingLevel: { control: 'select', options: [1, 2, 3, 4, 5, 6] },
  },
} satisfies Meta<typeof RcSesEmptyState>

export default meta
type Story = StoryObj<typeof meta>

export const Regular: Story = {}
export const Compact: Story = { args: { size: 'compact' } }
export const AllTones: Story = {
  render: (args) => (
    <Stack spacing={3}>
      {(['neutral', 'info', 'warning', 'error'] as const).map((type) => (
        <Box
          key={type}
          sx={{
            display: 'grid',
            alignItems: 'start',
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' },
            gap: 3,
          }}
        >
          <RcSesEmptyState {...args} type={type} />
          <RcSesEmptyState {...args} type={type} size='compact' />
        </Box>
      ))}
    </Stack>
  ),
}
export const WithoutAction: Story = { args: { showAction: false } }
export const WithoutHint: Story = { args: { hint: undefined } }
export const Validation: Story = {
  render: (args) => (
    <Stack spacing={2}>
      <RcSesEmptyState
        {...args}
        title='Pridėkite bent vieną dalyvį'
        description='Dalyvių sąrašas tuščias.'
        validationError
        aria-describedby='participants-error'
        action={{ label: 'Pridėti dalyvį', onClick: fn() }}
      />
      <RcSesAlert id='participants-error' severity='error'>
        Privaloma pridėti bent vieną dalyvį.
      </RcSesAlert>
    </Stack>
  ),
}
export const AfterUserAction: Story = {
  render: function Render(args) {
    const [failed, setFailed] = useState(false)
    return (
      <Stack spacing={2}>
        <RcSesButton onClick={() => setFailed(true)}>Įkelti sąrašą</RcSesButton>
        <RcSesEmptyState
          {...args}
          type={failed ? 'error' : 'neutral'}
          announce={failed}
          title={failed ? 'Nepavyko įkelti sąrašo' : args.title}
          description={failed ? 'Bandykite dar kartą.' : args.description}
          showAction={false}
        />
      </Stack>
    )
  },
}
export const LongContent: Story = {
  args: {
    title:
      'Pagal pasirinktus paieškos kriterijus ir papildomus filtrus rezultatų nerasta',
    description:
      'Pakeiskite paieškos kriterijus arba pašalinkite pasirinktus filtrus ir bandykite ieškoti dar kartą. IlgaNepertraukiamaReikšmėKuriNeturėtųSukeltiHorizontalausSlinkimo'.repeat(
        2,
      ),
  },
}
