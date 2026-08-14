import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon'
import QuestionIcon from '@/assets/icons/QuestionIcon'
import ScrollIcon from '@/assets/icons/ScrollIcon'
import RcSesHelpCard from '@/components/common/CardV2/presets/HelpCard'
import palette from '@/theme/palette'

const meta: Meta<typeof RcSesHelpCard> = {
  title: 'components/display/CardV2/HelpCard',
  component: RcSesHelpCard,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Help-card – Card šeimos receptas (SAV-6485), skirtas pagalbos sekcijoms ' +
          'viešuose puslapiuose. Header OFF – visas turinys vertikaliame slote: ' +
          'Icon-tile + pavadinimas + aprašymas + CTA nuoroda su rodykle. ' +
          'Tai plonas wrapper virš bazinio RcSesCardV2 be papildomų kortelės stilių. ' +
          'CTA praleidžiamas, kai nepaduotas nei href, nei onClick. ' +
          'Naudojamas Help-section tinklelyje: 3 stulpeliai desktop, 1 mobile.',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesHelpCard>

const iconTile = (icon: React.ReactNode) => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: palette.primary[50],
      borderRadius: '0.5rem',
      color: palette.grey[800],
      display: 'flex',
      height: '2.5rem',
      justifyContent: 'center',
      width: '2.5rem',
    }}
  >
    {icon}
  </Box>
)

export const HelpCard: Story = {
  args: {
    title: 'DUK',
    description:
      'Atsakymai į dažniausiai užduodamus klausimus apie paslaugas ir savitarną.',
    ctaLabel: 'Peržiūrėti DUK',
    href: '#duk',
    icon: iconTile(<QuestionIcon size={20} />),
  },
}

export const WithoutIcon: Story = {
  args: {
    ...HelpCard.args,
    icon: undefined,
  },
}

export const HelpSectionGrid: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, minmax(0, 1fr))' },
      }}
    >
      <RcSesHelpCard
        title='DUK'
        description='Atsakymai į dažniausiai užduodamus klausimus apie paslaugas ir savitarną.'
        ctaLabel='Peržiūrėti DUK'
        href='#duk'
        icon={iconTile(<QuestionIcon size={20} />)}
      />
      <RcSesHelpCard
        title='Kontaktai'
        description='Konsultacijos telefonu (0 5) 268 8262 darbo dienomis 8:00-17:00.'
        ctaLabel='Visi kontaktai'
        href='#kontaktai'
        icon={iconTile(<ScrollIcon size={20} />)}
      />
      <RcSesHelpCard
        title='Registracija vizitui'
        description='Užduokite klausimą konsultantui pokalbių lange - atsakome darbo metu.'
        ctaLabel='Pradėkite registraciją'
        href='#registracija'
        icon={iconTile(<CalendarBlankIcon size={20} />)}
      />
    </Box>
  ),
}
