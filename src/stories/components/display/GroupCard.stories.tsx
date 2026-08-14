import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import ScrollIcon from '@/assets/icons/ScrollIcon'
import RcSesGroupCard from '@/components/common/CardV2/presets/GroupCard'
import palette from '@/theme/palette'

const meta: Meta<typeof RcSesGroupCard> = {
  title: 'components/display/CardV2/GroupCard',
  component: RcSesGroupCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Group-card – Card šeimos komponentas, skirtas paslaugų grupių atvaizdavimui ' +
          'viešuose sąrašo puslapiuose. Header ON (Icon-tile + grupės pavadinimas + paslaugų ' +
          'skaičius), slot – paslaugų nuorodų sąrašas su rodyklėmis, footer – „Žiūrėti visas" CTA. ' +
          'Tai plonas wrapper virš bazinio RcSesCardV2 (theme="brand") be papildomų kortelės stilių. ' +
          'Footer praleidžiamas, kai nepaduotas nei viewAllHref, nei onViewAllClick.',
      },
    },
  },
  argTypes: {
    headingLevel: { control: 'radio', options: [2, 3, 4, 5, 6] },
  },
}

export default meta

type Story = StoryObj<typeof RcSesGroupCard>

const iconTile = (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: palette.primary[500],
      borderRadius: '0.5rem',
      color: '#fff',
      display: 'flex',
      height: '2.75rem',
      justifyContent: 'center',
      width: '2.75rem',
    }}
  >
    <ScrollIcon size={24} fillColor='#fff' />
  </Box>
)

export const GroupCard: Story = {
  args: {
    title: 'Įmonėms ir organizacijoms',
    description: '61 paslauga',
    icon: iconTile,
    links: [
      {
        label: 'Juridinių asmenų registro (JAR) išrašas',
        href: '#jar-israsas',
      },
      { label: 'Juridinio asmens steigimas', href: '#steigimas' },
      { label: 'Dalyvių sąrašo teikimas (JADIS)', href: '#jadis' },
      {
        label: 'Įmonių ir organizacijų dokumentų kopijos',
        href: '#dokumentu-kopijos',
      },
    ],
    viewAllHref: '#visos-paslaugos',
    viewAllLabel: 'Žiūrėti visas',
  },
}

export const WithoutFooter: Story = {
  args: {
    ...GroupCard.args,
    viewAllHref: undefined,
  },
}

export const LongTitles: Story = {
  args: {
    ...GroupCard.args,
    title: 'Labai ilgas grupės pavadinimas, kuris laužiasi per kelias eilutes mobile',
    links: [
      {
        label:
          'Labai ilgas paslaugos pavadinimas, kuris netelpa vienoje eilutėje ir turi lūžti neiškraipant išdėstymo',
        href: '#ilga-paslauga',
      },
      { label: 'Trumpa paslauga', href: '#trumpa' },
    ],
  },
}
