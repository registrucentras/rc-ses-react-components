import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react'

import CaretLeftIcon from '@/assets/icons/CaretLeftIcon'
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import PencilSimpleLineIcon from '@/assets/icons/PencilSimpleLineIcon'
import RcSesButton from '@/components/common/Button'
import RcSesCard from '@/components/common/Card'
import palette from '@/theme/palette'

const meta: Meta<typeof RcSesCard> = {
  title: 'components/display/Card',
  component: RcSesCard,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RcSesCard>

export const Main: Story = {
  args: {
    title: 'Pavadinimas',
    description: 'Papildomas aprasymo tekstas',
    children: (
      <Box
        sx={{
          alignItems: 'center',
          color: 'text.primary',
          display: 'flex',
          justifyContent: 'center',
          minHeight: { xs: '9.625rem', md: '11.5rem' },
          px: 3,
          width: '100%',
        }}
      >
        <Typography align='center'>Vidinis paslaugu front-end sprendimas</Typography>
      </Box>
    ),
    leadingActions: (
      <RcSesButton startIcon={<CaretLeftIcon />} color='grey' variant='outlined'>
        Button
      </RcSesButton>
    ),
    trailingActions: (
      <>
        <RcSesButton color='grey' variant='outlined'>
          Button
        </RcSesButton>
        <RcSesButton>Button</RcSesButton>
      </>
    ),
  },
}

export const WithHeaderAction: Story = {
  args: {
    title: 'Juridinis asmuo',
    description: 'UAB "Telia Lietuva", 121215434',
    contentBackground: false,
    headerAction: (
      <RcSesButton startIcon={<PencilSimpleLineIcon />} variant='text' size='small'>
        Redaguoti
      </RcSesButton>
    ),
  },
}

export const WithImage: Story = {
  args: {
    variant: 'elevation',
    centered: true,
    title: 'Place heading text here',
    description:
      'Additional description text elaborating on situation and what to do next.',
    image: (
      <Box
        sx={{ color: palette.grey[400], position: 'relative', display: 'inline-flex' }}
      >
        <MagnifyingGlassIcon size={64} fillColor={palette.grey[400]} />
      </Box>
    ),
    children: <RcSesButton>Button</RcSesButton>,
    contentBackground: false,
  },
}
