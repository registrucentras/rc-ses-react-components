/* eslint-disable react/function-component-definition */
import { Box } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'

import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import RcSesButton from '@/components/common/Button'
import RcSesImageCard from '@/components/common/ImageCard'
import palette from '@/theme/palette'

const meta: Meta<typeof RcSesImageCard> = {
  title: 'components/common/ImageCard',
  component: RcSesImageCard,
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesImageCard> = (args) => <RcSesImageCard {...args} />

const defaultImage = (
  <Box sx={{ position: 'relative', display: 'inline-flex' }}>
    <MagnifyingGlassIcon size={64} fillColor={palette.grey[400]} />
  </Box>
)

export const Main = Template.bind({})
Main.args = {
  image: defaultImage,
  title: 'Place heading text here',
  description:
    'Additional description text elaborating on situation and what to do next.',
  button: <RcSesButton>Button</RcSesButton>,
}

export const WithoutButton = Template.bind({})
WithoutButton.args = {
  image: defaultImage,
  title: 'Place heading text here',
  description:
    'Additional description text elaborating on situation and what to do next.',
}

export const OutlinedButton = Template.bind({})
OutlinedButton.args = {
  image: defaultImage,
  title: 'Place heading text here',
  description:
    'Additional description text elaborating on situation and what to do next.',
  button: (
    <RcSesButton color='grey' variant='outlined'>
      Button
    </RcSesButton>
  ),
}
