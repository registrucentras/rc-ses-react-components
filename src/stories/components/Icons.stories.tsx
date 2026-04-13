/* eslint-disable react/function-component-definition, react/prop-types */
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material'
import type { Meta, StoryFn } from '@storybook/react'
import { useMemo, useState } from 'react'
import type { ReactElement } from 'react'

import type IconProps from '@/assets/IconProps'
import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import BarcodeIcon from '@/assets/icons/BarcodeIcon'
import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon'
import CaretDoubleLeftBoldIcon from '@/assets/icons/CaretDoubleLeftBoldIcon'
import CaretDoubleRightBoldIcon from '@/assets/icons/CaretDoubleRightBoldIcon'
import CaretDownBoldIcon from '@/assets/icons/CaretDownBoldIcon'
import CaretDownFill from '@/assets/icons/CaretDownFill'
import CaretDownIcon from '@/assets/icons/CaretDownIcon'
import CaretLeftBoldIcon from '@/assets/icons/CaretLeftBoldIcon'
import CaretLeftIcon from '@/assets/icons/CaretLeftIcon'
import CaretRightBoldIcon from '@/assets/icons/CaretRightBoldIcon'
import CheckBoldDisabledIcon from '@/assets/icons/CheckBoldDisabledIcon'
import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'
import CircleFilledIcon from '@/assets/icons/CircleFilledIcon'
import CloseIcon from '@/assets/icons/CloseIcon'
import CollapseChevronsIcon from '@/assets/icons/CollapseChevronsIcon'
import DotCircleFilledIcon from '@/assets/icons/DotCircleFilledIcon'
import ExpandChevronsIcon from '@/assets/icons/ExpandChevronsIcon'
import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import MapPinAreaIcon from '@/assets/icons/MapPinAreaIcon'
import MinusBoldIcon from '@/assets/icons/MinusBoldIcon'
import PlusBoldIcon from '@/assets/icons/PlusBoldIcon'
import QuestionFillIcon from '@/assets/icons/QuestionFillIcon'
import QuestionIcon from '@/assets/icons/QuestionIcon'
import ScalesIcon from '@/assets/icons/ScalesIcon'
import ScrollIcon from '@/assets/icons/ScrollIcon'
import SpinnerGapBoldIcon from '@/assets/icons/SpinnerGapBoldIcon'
import UploadSimpleIcon from '@/assets/icons/UploadSimpleIcon'
import WarningDiamondFillIcon from '@/assets/icons/WarningDiamondFillIcon'
import WarningFillIcon from '@/assets/icons/WarningFillIcon'
import XCircleFillIcon from '@/assets/icons/XCircleFillIcon'
import palette from '@/theme/palette'

// import resolvePaletteColorPath from '@/assets/resolvePaletteColorPath'

type StoryArgs = IconProps

type IconStoryItem = {
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
    name: 'ArrowRightIcon',
    render: renderIcon(ArrowRightIcon),
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
    name: 'CheckBoldDisabledIcon',
    render: renderIcon(CheckBoldDisabledIcon),
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
    name: 'SpinnerGapBoldIcon',
    render: renderIcon(SpinnerGapBoldIcon),
  },
  {
    name: 'UploadSimpleIcon',
    render: renderIcon(UploadSimpleIcon),
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
  title: 'components/common/Icons',
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

export const Gallery: StoryFn<StoryArgs> = ({ className, size, fillColor }) => {
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
