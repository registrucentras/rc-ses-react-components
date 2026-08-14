import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import RcSesPopularCard from '@/components/common/CardV2/presets/PopularCard'

const meta: Meta<typeof RcSesPopularCard> = {
  title: 'components/display/CardV2/PopularCard',
  component: RcSesPopularCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Popular-card – Card šeimos komponentas, skirtas populiariausių paslaugų ' +
          'atvaizdavimui viešuose puslapiuose. Header OFF, slot – paslaugos pavadinimas, ' +
          'footer – „Užsakyti" CTA ir „Plačiau" nuoroda. Plonas wrapper virš bazinio RcSesCardV2 ' +
          'be papildomų kortelės stilių. Footer praleidžiamas, kai nepaduotas nė vienas veiksmas.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesPopularCard>

export const PopularCard: Story = {
  args: {
    title:
      'Pažymos ar išrašo apie mano arba kito asmens duomenis užsakymas (šeiminę padėtį, deklaruotą gyv. vietą, vaikus ir kt. informaciją)',
    orderHref: '#uzsakyti',
    moreHref: '#placiau',
  },
}

export const PopularCardsGrid: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(4, minmax(0, 1fr))' },
      }}
    >
      <RcSesPopularCard
        title='Pažymos ar išrašo apie mano arba kito asmens duomenis užsakymas (šeiminę padėtį, deklaruotą gyv. vietą, vaikus ir kt. informaciją)'
        orderHref='#uzsakyti'
        moreHref='#placiau'
      />
      <RcSesPopularCard
        title='Gyvenamosios vietos deklaravimas'
        orderHref='#uzsakyti'
        moreHref='#placiau'
      />
      <RcSesPopularCard
        title='Įgaliojimo suteikimas (gyventojams, įmonėms ir organizacijoms įvairioms paslaugoms gauti)'
        orderHref='#uzsakyti'
        moreHref='#placiau'
      />
      <RcSesPopularCard
        title='Pažymos apie mano ar mano vaikų deklaruotą gyvenamąją vietą užsakymas'
        orderHref='#uzsakyti'
        moreHref='#placiau'
      />
    </Box>
  ),
}
