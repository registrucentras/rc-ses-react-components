import { Box, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import RcSesBadge from '@/components/common/Badge'
import RcSesButton from '@/components/common/Button'
import RcSesCard from '@/components/common/Card'
import RcSesCardHeader from '@/components/common/Card/CardHeader'
import palette from '@/theme/palette'

const meta: Meta<typeof RcSesCard> = {
  title: 'components/display/Card',
  component: RcSesCard,
  tags: ['autodocs'],
  parameters: {
    controls: {
      include: ['variant', 'theme', 'fullHeight', 'header', 'children', 'footer'],
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesCard>

const defaultHeader = (
  <RcSesCardHeader
    title='Kortelės antraštė'
    description='Paaiškinimas apie šios kortelės turinį'
  />
)

const bodySlot = (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: palette.grey[100],
      borderRadius: '0.375rem',
      color: palette.grey[600],
      display: 'flex',
      justifyContent: 'center',
      minHeight: '4rem',
      width: '100%',
    }}
  >
    <Typography sx={{ fontSize: '0.8125rem' }}>Turinys (Body slot)</Typography>
  </Box>
)

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
    variant: 'card',
    theme: 'default',
    header: defaultHeader,
    children: bodySlot,
    footer: defaultFooter,
  },
}

export const Themes: Story = {
  render: () => (
    <Stack spacing='1.5rem'>
      {(['default', 'brand', 'sunken'] as const).map((theme) => (
        <RcSesCard
          key={theme}
          theme={theme}
          header={defaultHeader}
          footer={defaultFooter}
        >
          {bodySlot}
        </RcSesCard>
      ))}
    </Stack>
  ),
}

export const SubcardInsideCard: Story = {
  render: () => (
    <RcSesCard header={defaultHeader} footer={defaultFooter}>
      <RcSesCard
        variant='subcard'
        theme='sunken'
        header={<RcSesCardHeader title='Subkortelės antraštė' headingLevel={4} />}
      >
        <Typography variant='body2'>Subkortelės turinys</Typography>
      </RcSesCard>
    </RcSesCard>
  ),
}

export const HeaderOff: Story = {
  args: {
    children: (
      <Stack spacing='0.5rem'>
        <Typography sx={{ fontWeight: 600 }}>Paslaugos pavadinimas</Typography>
        <Typography variant='body2'>Laisvos formos turinys be antraštės.</Typography>
      </Stack>
    ),
    footer: defaultFooter,
  },
}

export const WithBadge: Story = {
  args: {
    header: (
      <RcSesCardHeader
        title='Pasirinktos teisės'
        badge={<RcSesBadge label='4' showIcon={false} size='small' variant='neutral' />}
      />
    ),
    children: bodySlot,
  },
}

export const FullHeightGrid: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
      }}
    >
      {[
        'Trumpas pavadinimas',
        'Šiek tiek ilgesnis kortelės pavadinimas dviem eilutėms',
        'Labai ilgas kortelės pavadinimas, kuris laužiasi per kelias eilutes ir parodo, kad footeris lieka apačioje',
      ].map((title) => (
        <RcSesCard key={title} fullHeight footer={defaultFooter}>
          <Typography sx={{ fontWeight: 600 }}>{title}</Typography>
        </RcSesCard>
      ))}
    </Box>
  ),
}
