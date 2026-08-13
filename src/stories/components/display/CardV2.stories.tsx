import { Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import RcSesBadge from '@/components/common/Badge'
import RcSesButton from '@/components/common/Button'
import RcSesCardV2 from '@/components/common/CardV2'

const meta: Meta<typeof RcSesCardV2> = {
  title: 'components/display/CardV2',
  component: RcSesCardV2,
  tags: ['autodocs'],
  argTypes: {
    tier: { control: 'radio', options: ['card', 'subcard'] },
    theme: { control: 'radio', options: ['default', 'brand', 'sunken'] },
    headingLevel: { control: 'radio', options: [2, 3, 4, 5, 6] },
  },
}

export default meta

type Story = StoryObj<typeof RcSesCardV2>

const defaultFooter = (
  <>
    <RcSesButton color='grey' size='small' variant='outlined'>
      Atšaukti
    </RcSesButton>
    <RcSesButton endIcon={<ArrowRightIcon />} size='small'>
      Tęsti
    </RcSesButton>
  </>
)

export const Card: Story = {
  args: {
    tier: 'card',
    theme: 'default',
    heading: 'Kortelės antraštė',
    description: 'Paaiškinimas apie šios kortelės turinį',
    children: (
      <Typography align='center' sx={{ py: '2rem' }}>
        Turinys (Body slot)
      </Typography>
    ),
    footer: defaultFooter,
  },
}

export const HeaderOff: Story = {
  args: {
    children: (
      <Stack spacing='0.5rem'>
        <Typography>Paslaugos pavadinimas</Typography>
        <Typography>Laisvos formos turinys be antraštės.</Typography>
      </Stack>
    ),
    footer: defaultFooter,
  },
}

export const WithBadge: Story = {
  args: {
    heading: 'Pasirinktos teisės',
    badge: <RcSesBadge label='4' showIcon={false} size='small' variant='neutral' />,
    children: (
      <Typography align='center' sx={{ py: '2rem' }}>
        Turinys (Body slot)
      </Typography>
    ),
  },
}

export const SubcardInsideCard: Story = {
  render: () => (
    <RcSesCardV2
      description='Paaiškinimas apie šios kortelės turinį'
      heading='Kortelės antraštė'
    >
      <Stack spacing='0.75rem'>
        <RcSesCardV2 heading='Subkortelės antraštė' theme='sunken' tier='subcard'>
          <Typography variant='body2'>Subkortelės turinys</Typography>
        </RcSesCardV2>
        <RcSesCardV2 heading='Kita subkortelė' theme='sunken' tier='subcard'>
          <Typography variant='body2'>Subkortelės turinys</Typography>
        </RcSesCardV2>
      </Stack>
    </RcSesCardV2>
  ),
}

export const Themes: Story = {
  render: () => (
    <Stack spacing='1rem'>
      <RcSesCardV2 description='Theme=Default' heading='Default'>
        <Typography variant='body2'>Turinys</Typography>
      </RcSesCardV2>
      <RcSesCardV2 description='Theme=Brand' heading='Brand' theme='brand'>
        <Typography variant='body2'>Turinys</Typography>
      </RcSesCardV2>
      <RcSesCardV2 description='Theme=Sunken' heading='Sunken' theme='sunken'>
        <Typography variant='body2'>Turinys</Typography>
      </RcSesCardV2>
    </Stack>
  ),
}
