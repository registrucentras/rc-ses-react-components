import { Box, FormControl, MenuItem, Select, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useMemo, useState } from 'react'
import type { ComponentType, ReactNode } from 'react'

import type IconProps from '@/assets/IconProps'
import RcSesButton from '@/components/common/Button'
import RcSesIconWithSquareBackground from '@/components/common/IconWithSquareBackground'
import ListWithIcons from '@/components/common/ListWithIcons'
import * as libraryIcons from '@/library/icons'
import {
  EnvelopeSimpleIcon,
  InfoIcon,
  MapPinIcon,
  PhoneIcon,
  TrashIcon,
  UserListIcon,
} from '@/library/icons'
import palette from '@/theme/palette'

// import resolvePaletteColorPath from '@/assets/resolvePaletteColorPath'

type StoryArgs = IconProps

type PaletteColorOptions = Record<string, string | undefined>
type PaletteColorLabels = Record<string, string>

// const defaultStoryFillColor = resolvePaletteColorPath('primary.400')
// const defaultStoryStrokeColor = resolvePaletteColorPath('white')

const paletteColorOptions: PaletteColorOptions = {
  default: undefined,
  white: '#ffffff',
}

const paletteColorLabels: PaletteColorLabels = {
  default: 'default',
  white: 'white (#ffffff)',
}

Object.entries(palette).forEach(([colorGroupName, colorGroup]) => {
  Object.entries(colorGroup).forEach(([colorName, colorValue]) => {
    const tokenName = `${colorGroupName}.${colorName}`
    paletteColorOptions[tokenName] = colorValue
    paletteColorLabels[tokenName] = `${tokenName} (${colorValue})`
  })
})

const paletteTokenItems = Object.entries(paletteColorOptions).map(
  ([tokenName, colorValue]) => ({
    colorValue,
    tokenName,
  }),
)

const resolveTokenNameByColor = (color: string | undefined): string => {
  const resolvedTokenName = Object.entries(paletteColorOptions).find(
    ([, colorValue]) => colorValue === color,
  )?.[0]

  return resolvedTokenName ?? 'default'
}

// Every icon the package exports, so a newly added icon shows up here without
// touching this story
const iconItems = Object.entries(libraryIcons)
  .filter(([name]) => name !== 'RcSesLogo')
  .map(([name, Component]) => ({
    name,
    Component: Component as ComponentType<IconProps>,
  }))
  .sort((a, b) => a.name.localeCompare(b.name))

const meta: Meta<StoryArgs> = {
  title: 'Atoms/Icons',
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          "Icons are exported from the package root, e.g. `import { TrashIcon } from '@registrucentras/rc-ses-react-components'`. Every icon takes `fillColor` (defaults to the current text color), `size` (px) and `weight` (`thin`, `light`, `regular`, `bold`, `fill`, `duotone`), plus any SVG attribute such as `className` or `aria-hidden`. **Usage** shows the common patterns; **Gallery** lists every icon.",
      },
    },
  },
  args: {
    className: '',
    fillColor: undefined,
    size: 24,
  },
  argTypes: {
    className: { control: 'text' },
    size: {
      control: { min: 8, max: 128, step: 1, type: 'number' },
      table: {
        defaultValue: { summary: '24' },
      },
    },
  },
}

export default meta

const GalleryComponent = ({ className, size, fillColor }: StoryArgs) => {
  const [selectedFillToken, setSelectedFillToken] = useState(
    resolveTokenNameByColor(fillColor),
  )

  const selectedFillColor = useMemo(
    () => paletteColorOptions[selectedFillToken],
    [selectedFillToken],
  )

  return (
    <Box>
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
          mb: 2,
        }}
      >
        {iconItems.map((icon) => (
          <Box
            key={icon.name}
            sx={{
              alignItems: 'center',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 1,
              color: selectedFillColor,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              minHeight: 96,
              p: 1.5,
            }}
          >
            <icon.Component
              className={className}
              fillColor={selectedFillColor}
              size={size}
            />
            <Typography
              align='center'
              sx={{
                color: 'text.secondary',
                fontFamily: 'monospace',
                fontSize: '0.75rem',
              }}
            >
              {icon.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          mt: 3,
        }}
      >
        <FormControl size='small'>
          <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem', mb: 0.5 }}>
            fillColor
          </Typography>
          <Select
            onChange={(event) => {
              setSelectedFillToken(event.target.value)
            }}
            value={selectedFillToken}
          >
            {paletteTokenItems.map(({ colorValue, tokenName }) => (
              <MenuItem key={tokenName} value={tokenName}>
                <Box sx={{ alignItems: 'center', display: 'flex', gap: 1 }}>
                  <Box
                    sx={{
                      backgroundColor: colorValue ?? 'transparent',
                      border: '1px solid',
                      borderColor: 'divider',
                      borderRadius: '4px',
                      height: 12,
                      width: 12,
                    }}
                  />
                  <Typography sx={{ fontFamily: 'monospace', fontSize: '0.75rem' }}>
                    {paletteColorLabels[tokenName]}
                  </Typography>
                </Box>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </Box>
  )
}

const UsageSection = ({ title, children }: { title: string; children: ReactNode }) => (
  <Stack sx={{ gap: 1 }}>
    <Typography sx={{ color: 'text.secondary', fontSize: '0.75rem' }}>{title}</Typography>
    <Stack direction='row' sx={{ alignItems: 'center', flexWrap: 'wrap', gap: 2 }}>
      {children}
    </Stack>
  </Stack>
)

const usageCode = `import {
  EnvelopeSimpleIcon,
  InfoIcon,
  ListWithIcons,
  MapPinIcon,
  PhoneIcon,
  RcSesButton,
  RcSesIconWithSquareBackground,
  RcSesPalette,
  TrashIcon,
  UserListIcon,
} from '@registrucentras/rc-ses-react-components'

// On its own: 24px, regular weight and the current text color unless told otherwise
<UserListIcon />
<UserListIcon size={16} fillColor={RcSesPalette.grey[600]} />
<TrashIcon weight='bold' aria-hidden='true' />
<InfoIcon weight='fill' fillColor={RcSesPalette.primary[500]} />

// Inside a button
<RcSesButton variant='link' startIcon={<TrashIcon size={20} />}>
  Pašalinti
</RcSesButton>

// ListWithIcons and the icon tiles size and color the icon themselves,
// so pass the component (PhoneIcon), not an element (<PhoneIcon />)
<ListWithIcons
  layout='horizontal'
  items={[
    { icon: UserListIcon, text: '3890615****' },
    { icon: PhoneIcon, text: '+370 600 00000' },
    { icon: EnvelopeSimpleIcon, text: 'vardenis.pavardenis@example.lt' },
    { icon: MapPinIcon, text: 'Vilnius, Gedimino pr. 1' },
  ]}
/>
<RcSesIconWithSquareBackground Icon={PhoneIcon} variant='soft' />`

const UsageComponent = () => (
  <Stack sx={{ gap: 3 }}>
    <UsageSection title='On its own'>
      <UserListIcon />
      <UserListIcon size={16} fillColor={palette.grey[600]} />
      <TrashIcon weight='bold' aria-hidden='true' />
      <InfoIcon weight='fill' fillColor={palette.primary[500]} />
    </UsageSection>
    <UsageSection title='Inside a button'>
      <RcSesButton variant='link' startIcon={<TrashIcon size={20} />}>
        Pašalinti
      </RcSesButton>
    </UsageSection>
    <UsageSection title='In ListWithIcons (pass the component)'>
      <ListWithIcons
        layout='horizontal'
        items={[
          { icon: UserListIcon, text: '3890615****' },
          { icon: PhoneIcon, text: '+370 600 00000' },
          { icon: EnvelopeSimpleIcon, text: 'vardenis.pavardenis@example.lt' },
          { icon: MapPinIcon, text: 'Vilnius, Gedimino pr. 1' },
        ]}
      />
    </UsageSection>
    <UsageSection title='In an icon tile (pass the component)'>
      <RcSesIconWithSquareBackground Icon={PhoneIcon} variant='soft' />
    </UsageSection>
  </Stack>
)

type Story = StoryObj<StoryArgs>

export const Usage: Story = {
  render: () => <UsageComponent />,
  parameters: {
    controls: { disable: true },
    docs: {
      description: {
        story:
          'How a consumer uses the icons: on their own, inside a button, and in components that take an icon component.',
      },
      source: { code: usageCode, language: 'tsx' },
    },
  },
}

export const Gallery: Story = {
  render: (args) => <GalleryComponent {...args} />,
  parameters: {
    docs: {
      description: {
        story:
          'Every icon the package exports. Use the controls to try `size` and the select below to try `fillColor`.',
      },
    },
  },
}
