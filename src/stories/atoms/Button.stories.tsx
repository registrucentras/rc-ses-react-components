import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment } from 'react'
import { fn } from 'storybook/test'

import PlusBoldIcon from '@/assets/icons/PlusBoldIcon'
import Button from '@/components/common/Button'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import { grey } from '@/theme/palette'
import { ButtonProps } from '@/types/buttons/ButtonProps'

const variantOptions: ButtonProps['variant'][] = ['contained', 'outlined', 'link', 'text']
const colorOptions = [
  'primary',
  'secondary',
  'grey',
  'dark',
  'error',
  'inherit',
  'success',
  'info',
  'warning',
  'light',
  'ghost',
]

const meta = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      options: variantOptions,
      control: { type: 'select' },
    },
    color: {
      options: colorOptions,
      control: { type: 'select' },
    },
    disabled: { control: 'boolean' },
    iconOnly: { control: 'boolean' },
    loading: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: {
    children: 'Button',
    onClick: fn(),
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

export const PrimaryContained: Story = {
  args: {
    variant: 'contained',
    color: 'primary',
    disabled: false,
    iconOnly: false,
    loading: false,
  },
}

const disableColorContrast = {
  a11y: {
    config: {
      rules: [{ id: 'color-contrast', enabled: false }],
    },
  },
}

const variantColors: Array<{
  variant: Exclude<ButtonProps['variant'], undefined>
  color: ButtonProps['color']
}> = [
  { variant: 'contained', color: 'primary' },
  { variant: 'contained', color: 'secondary' },
  { variant: 'contained', color: 'grey' },
  { variant: 'contained', color: 'warning' },
  { variant: 'contained', color: 'error' },
  { variant: 'outlined', color: 'primary' },
  { variant: 'outlined', color: 'secondary' },
  { variant: 'outlined', color: 'grey' },
  { variant: 'outlined', color: 'warning' },
  { variant: 'outlined', color: 'error' },
  { variant: 'outlined', color: 'light' },
  { variant: 'outlined', color: 'ghost' },
]

// light/ghost are designed for dark surfaces; wrap those cells so the outline
// and text stay legible.
const DARK_BG_COLORS = new Set(['light', 'ghost'])

const variantRowSpans = variantColors.reduce<Record<string, number>>(
  (acc, { variant }) => {
    acc[variant] = (acc[variant] ?? 0) + 1
    return acc
  },
  {},
)

const iconOnlyArgs: Partial<ButtonProps> = {
  iconOnly: true,
  'aria-label': 'Add',
  children: <PlusBoldIcon />,
}

const states: {
  key: string
  label: string
  args: Partial<ButtonProps>
}[] = [
  { key: 'default', label: 'Default', args: {} },
  {
    key: 'prefixIcon',
    label: 'Prefix Icon',
    args: { startIcon: <PlusBoldIcon /> },
  },
  {
    key: 'suffixIcon',
    label: 'Suffix Icon',
    args: { endIcon: <PlusBoldIcon /> },
  },
  { key: 'iconOnly', label: 'Icon Only', args: iconOnlyArgs },
  { key: 'disabled', label: 'Disabled', args: { disabled: true } },
  { key: 'loading', label: 'Loading', args: { loading: true } },
  {
    key: 'loadingStart',
    label: 'Loading Position Start',
    args: { loading: true, loadingPosition: 'start', startIcon: <PlusBoldIcon /> },
  },
  {
    key: 'loadingEnd',
    label: 'Loading Position End',
    args: { loading: true, loadingPosition: 'end', endIcon: <PlusBoldIcon /> },
  },
  {
    key: 'loadingIconOnly',
    label: 'Loading Icon Only',
    args: { ...iconOnlyArgs, loading: true },
  },
]

const CellWrapper = ({
  color,
  children,
}: {
  color: ButtonProps['color']
  children: React.ReactNode
}) => {
  if (color && DARK_BG_COLORS.has(color as string)) {
    return (
      <Box
        sx={{
          backgroundColor: grey[900],
          px: 1,
          py: 0.5,
          borderRadius: 0.75,
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </Box>
    )
  }
  return <>{children}</>
}

export const CoreCombinations: Story = {
  parameters: {
    ...disableColorContrast,
    layout: 'padded',
  },
  render: () => (
    <>
      <PreviewTitle>
        {variantColors.length} variant+color rows x {states.length} states ={' '}
        {variantColors.length * states.length} buttons
      </PreviewTitle>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: `110px 90px repeat(${states.length}, minmax(140px, 1fr))`,
          rowGap: 1.5,
          columnGap: 1.5,
          alignItems: 'center',
        }}
      >
        {states.map((state) => (
          <Typography
            key={state.key}
            align='center'
            variant='body2'
            sx={{ color: 'text.secondary' }}
          >
            {state.label}
          </Typography>
        ))}
        {variantColors.map(({ variant, color }, rowIndex) => {
          const prevVariant = variantColors[rowIndex - 1]?.variant
          const isFirstOfVariant = variant !== prevVariant
          const rowSpan = variantRowSpans[variant]
          return (
            <Fragment key={`${variant}-${color}`}>
              {isFirstOfVariant ? (
                <Typography
                  variant='body2'
                  sx={{ fontWeight: 600, gridRow: `span ${rowSpan}` }}
                >
                  {variant}
                </Typography>
              ) : null}
              <Typography variant='body2' sx={{ color: 'text.secondary' }}>
                {color}
              </Typography>
              {states.map((state) => {
                const { children, ...restArgs } = state.args
                return (
                  <Box key={state.key} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CellWrapper color={color}>
                      <Button variant={variant} color={color} {...restArgs}>
                        {children ?? 'Button'}
                      </Button>
                    </CellWrapper>
                  </Box>
                )
              })}
            </Fragment>
          )
        })}
      </Box>
    </>
  ),
}
