/* eslint-disable react/function-component-definition */
import { Box, Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'

import CaretLeftIcon from '@/assets/icons/CaretLeftIcon'
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import RcSesButton from '@/components/common/Button'
import RcSesCard from '@/components/common/Card'
import palette from '@/theme/palette'

const meta: Meta<typeof RcSesCard> = {
  title: 'components/common/Card',
  component: RcSesCard,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesCard> = (args) => <RcSesCard {...args} />

export const Main = Template.bind({})
Main.args = {
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
}

export const WithImage = Template.bind({})
WithImage.args = {
  variant: 'elevation',
  centered: true,
  title: 'Place heading text here',
  description:
    'Additional description text elaborating on situation and what to do next.',
  image: (
    <Box sx={{ color: palette.grey[400], position: 'relative', display: 'inline-flex' }}>
      <MagnifyingGlassIcon size={64} fillColor={palette.grey[400]} />
    </Box>
  ),
  children: <RcSesButton>Button</RcSesButton>,
  contentBackground: false,
}
