import { Box } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import RcSesCategoryTile from '@/components/common/CardV2/presets/CategoryTile'
import palette from '@/theme/palette'

const iconTileSx = {
  alignItems: 'center',
  backgroundColor: palette.primary[50],
  borderRadius: '0.5rem',
  color: palette.grey[800],
  display: 'flex',
  height: '2.5rem',
  justifyContent: 'center',
  width: '2.5rem',
}

const meta: Meta<typeof RcSesCategoryTile> = {
  title: 'components/display/CardV2/CategoryTile',
  component: RcSesCategoryTile,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Category-tile – Card šeimos receptas (SAV-6477): header ON (Icon-tile + ' +
          'pavadinimas + aprašymas) su rodykle dešinėje, slot ir footer OFF. Visa ' +
          'kortelė paspaudžiama per stretched-link pattern. Plonas wrapper virš ' +
          'bazinio RcSesCardV2 be papildomų kortelės stilių.',
      },
    },
  },
  argTypes: {
    headingLevel: { control: 'radio', options: [2, 3, 4, 5, 6] },
  },
}

export default meta

type Story = StoryObj<typeof RcSesCategoryTile>

export const CategoryTile: Story = {
  args: {
    title: 'Paslaugos sutartiniems klientams',
    description:
      'Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.',
    href: '#kategorija',
    icon: (
      <Box sx={iconTileSx}>
        <InfoFillIcon size={20} />
      </Box>
    ),
  },
}

export const TilesGrid: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gap: '1rem',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, minmax(0, 1fr))' },
      }}
    >
      <RcSesCategoryTile
        title='Paslaugos sutartiniems klientams'
        description='Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.'
        href='#pirma'
        icon={
          <Box sx={iconTileSx}>
            <InfoFillIcon size={20} />
          </Box>
        }
      />
      <RcSesCategoryTile
        title='Paslaugos sutartiniems klientams'
        description='Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.'
        href='#antra'
        icon={
          <Box sx={iconTileSx}>
            <CheckCircleFillIcon size={20} />
          </Box>
        }
      />
    </Box>
  ),
}
