import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { useMemo, useState } from 'react'
import type { ReactElement } from 'react'

import type IconProps from '@/assets/IconProps'
import DotCircleFilledIcon from '@/assets/icons/DotCircleFilledIcon'
import SearchHelpIcon from '@/assets/icons/SearchHelpIcon'
import SearchXIcon from '@/assets/icons/SearchXIcon'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowsClockwiseIcon,
  BarcodeIcon,
  CalendarBlankIcon,
  CaretDoubleLeftBoldIcon,
  CaretDoubleRightBoldIcon,
  CaretDownBoldIcon,
  CaretDownFill,
  CaretDownIcon,
  CaretLeftBoldIcon,
  CaretLeftIcon,
  CaretRightBoldIcon,
  CheckBoldIcon,
  CheckCircleFillIcon,
  CheckIcon,
  CheckUncheckedBoldIcon,
  CircleFilledIcon,
  CloseIcon,
  CollapseChevronsIcon,
  CopyIcon,
  ExpandChevronsIcon,
  InfoFillIcon,
  MagnifyingGlassIcon,
  MapPinAreaIcon,
  MinusBoldIcon,
  PencilSimpleLineIcon,
  PlusBoldIcon,
  QuestionFillIcon,
  QuestionIcon,
  ScalesIcon,
  ScrollIcon,
  SpinnerGapBoldIcon,
  UploadSimpleIcon,
  WarningCircleIcon,
  WarningDiamondFillIcon,
  WarningFillIcon,
  XCircleFillIcon,
} from '@/assets/icons/phosphorIcons'
import palette from '@/theme/palette'

// import resolvePaletteColorPath from '@/assets/resolvePaletteColorPath'

type StoryArgs = IconProps

interface IconStoryItem {
  name: string
  render: (args: StoryArgs) => ReactElement
}

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

const renderIcon =
  (IconComponent: (props: IconProps) => ReactElement) =>
  ({ className, fillColor, size }: StoryArgs): ReactElement => (
    <IconComponent className={className} fillColor={fillColor} size={size} />
  )

const iconItems: IconStoryItem[] = [
  {
    name: 'ArrowLeftIcon',
    render: renderIcon(ArrowLeftIcon),
  },
  {
    name: 'ArrowRightIcon',
    render: renderIcon(ArrowRightIcon),
  },
  {
    name: 'ArrowsClockwiseIcon',
    render: renderIcon(ArrowsClockwiseIcon),
  },
  {
    name: 'BarcodeIcon',
    render: renderIcon(BarcodeIcon),
  },
  {
    name: 'CalendarBlankIcon',
    render: renderIcon(CalendarBlankIcon),
  },
  {
    name: 'CaretDoubleLeftBoldIcon',
    render: renderIcon(CaretDoubleLeftBoldIcon),
  },
  {
    name: 'CaretDoubleRightBoldIcon',
    render: renderIcon(CaretDoubleRightBoldIcon),
  },
  {
    name: 'CaretDownBoldIcon',
    render: renderIcon(CaretDownBoldIcon),
  },
  {
    name: 'CaretDownFill',
    render: renderIcon(CaretDownFill),
  },
  {
    name: 'CaretDownIcon',
    render: renderIcon(CaretDownIcon),
  },
  {
    name: 'CaretLeftBoldIcon',
    render: renderIcon(CaretLeftBoldIcon),
  },
  {
    name: 'CaretLeftIcon',
    render: renderIcon(CaretLeftIcon),
  },
  {
    name: 'CaretRightBoldIcon',
    render: renderIcon(CaretRightBoldIcon),
  },
  {
    name: 'CheckBoldIcon',
    render: renderIcon(CheckBoldIcon),
  },
  {
    name: 'CheckCircleFillIcon',
    render: renderIcon(CheckCircleFillIcon),
  },
  {
    name: 'CheckIcon',
    render: renderIcon(CheckIcon),
  },
  {
    name: 'CheckUncheckedBoldIcon',
    render: renderIcon(CheckUncheckedBoldIcon),
  },
  {
    name: 'CircleFilledIcon',
    render: renderIcon(CircleFilledIcon),
  },
  {
    name: 'CloseIcon',
    render: renderIcon(CloseIcon),
  },
  {
    name: 'CollapseChevronsIcon',
    render: renderIcon(CollapseChevronsIcon),
  },
  {
    name: 'CopyIcon',
    render: renderIcon(CopyIcon),
  },
  {
    name: 'DotCircleFilledIcon',
    render: renderIcon(DotCircleFilledIcon),
  },
  {
    name: 'ExpandChevronsIcon',
    render: renderIcon(ExpandChevronsIcon),
  },
  {
    name: 'InfoFillIcon',
    render: renderIcon(InfoFillIcon),
  },
  {
    name: 'MagnifyingGlassIcon',
    render: renderIcon(MagnifyingGlassIcon),
  },
  {
    name: 'MapPinAreaIcon',
    render: renderIcon(MapPinAreaIcon),
  },
  {
    name: 'MinusBoldIcon',
    render: renderIcon(MinusBoldIcon),
  },
  {
    name: 'PencilSimpleLineIcon',
    render: renderIcon(PencilSimpleLineIcon),
  },
  {
    name: 'PlusBoldIcon',
    render: renderIcon(PlusBoldIcon),
  },
  {
    name: 'QuestionFillIcon',
    render: renderIcon(QuestionFillIcon),
  },
  {
    name: 'QuestionIcon',
    render: renderIcon(QuestionIcon),
  },
  {
    name: 'ScalesIcon',
    render: renderIcon(ScalesIcon),
  },
  {
    name: 'ScrollIcon',
    render: renderIcon(ScrollIcon),
  },
  {
    name: 'SearchHelpIcon',
    render: renderIcon(SearchHelpIcon),
  },
  {
    name: 'SearchXIcon',
    render: renderIcon(SearchXIcon),
  },
  {
    name: 'SpinnerGapBoldIcon',
    render: renderIcon(SpinnerGapBoldIcon),
  },
  {
    name: 'UploadSimpleIcon',
    render: renderIcon(UploadSimpleIcon),
  },
  {
    name: 'WarningCircleIcon',
    render: renderIcon(WarningCircleIcon),
  },
  {
    name: 'WarningDiamondFillIcon',
    render: renderIcon(WarningDiamondFillIcon),
  },
  {
    name: 'WarningFillIcon',
    render: renderIcon(WarningFillIcon),
  },
  {
    name: 'XCircleFillIcon',
    render: renderIcon(XCircleFillIcon),
  },
]

const meta: Meta<StoryArgs> = {
  title: 'Atoms/Icons',
  tags: ['autodocs'],
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
            {icon.render({
              className,
              fillColor: selectedFillColor,
              size,
            })}
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

type Story = StoryObj<StoryArgs>

export const Gallery: Story = {
  render: (args) => <GalleryComponent {...args} />,
}
