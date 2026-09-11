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

interface VariantColorCombo {
  variant: Exclude<ButtonProps['variant'], undefined>
  color: ButtonProps['color']
}

// Split so axe color-contrast stays enforced on light-surface combos and is
// only disabled for the dark-surface grid, where light/ghost intentionally
// render on top of a dark backdrop that axe cannot see through the DOM.
const lightSurfaceCombos: VariantColorCombo[] = [
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
  // link/text carry their own loading baseline - link disabled ships with
  // opacity: 0.4 so its centered indicator is fainter than the theme's
  // grey[600] measurement suggests. Keep primary + grey rows to cover both
  // the tinted and the neutral disabled paths.
  { variant: 'link', color: 'primary' },
  { variant: 'link', color: 'grey' },
  { variant: 'text', color: 'primary' },
  { variant: 'text', color: 'grey' },
]

const darkSurfaceCombos: VariantColorCombo[] = [
  { variant: 'outlined', color: 'light' },
  { variant: 'outlined', color: 'ghost' },
]

const rowSpansFor = (combos: VariantColorCombo[]) =>
  combos.reduce<Record<string, number>>((acc, { variant }) => {
    acc[variant] = (acc[variant] ?? 0) + 1
    return acc
  }, {})

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

const CombinationsGrid = ({
  combos,
  onDark = false,
}: {
  combos: VariantColorCombo[]
  onDark?: boolean
}) => {
  const rowSpans = rowSpansFor(combos)
  const labelColor = onDark ? grey[50] : 'text.secondary'
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: `110px 90px repeat(${states.length}, minmax(140px, 1fr))`,
        rowGap: 1.5,
        columnGap: 1.5,
        alignItems: 'center',
      }}
    >
      {/* header row: two empty cells for the variant/color labels, then state labels */}
      <Box />
      <Box />
      {states.map((state) => (
        <Typography
          key={state.key}
          align='center'
          variant='body2'
          sx={{ color: labelColor }}
        >
          {state.label}
        </Typography>
      ))}
      {combos.map(({ variant, color }, rowIndex) => {
        const prevVariant = combos[rowIndex - 1]?.variant
        const isFirstOfVariant = variant !== prevVariant
        const rowSpan = rowSpans[variant]
        return (
          <Fragment key={`${variant}-${color}`}>
            {isFirstOfVariant ? (
              <Typography
                variant='body2'
                sx={{
                  color: onDark ? grey[50] : undefined,
                  fontWeight: 600,
                  gridRow: `span ${rowSpan}`,
                }}
              >
                {variant}
              </Typography>
            ) : null}
            <Typography variant='body2' sx={{ color: labelColor }}>
              {color}
            </Typography>
            {states.map((state) => {
              const { children, ...restArgs } = state.args
              return (
                <Box key={state.key} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Button variant={variant} color={color} {...restArgs}>
                    {children ?? 'Button'}
                  </Button>
                </Box>
              )
            })}
          </Fragment>
        )
      })}
    </Box>
  )
}

export const CoreCombinations: Story = {
  parameters: {
    layout: 'padded',
  },
  render: () => (
    <>
      <PreviewTitle>
        Light surface: {lightSurfaceCombos.length} variant+color rows x {states.length}{' '}
        states = {lightSurfaceCombos.length * states.length} buttons. Axe color-contrast
        stays enforced here.
      </PreviewTitle>
      <CombinationsGrid combos={lightSurfaceCombos} />
    </>
  ),
}

export const DarkSurfaceCombinations: Story = {
  parameters: {
    ...disableColorContrast,
    layout: 'padded',
  },
  render: () => (
    <Box
      sx={{
        backgroundColor: grey[900],
        borderRadius: 1,
        p: 3,
        color: grey[50],
        width: 'fit-content',
        minWidth: '100%',
      }}
    >
      <PreviewTitle>
        Dark surface: {darkSurfaceCombos.length} variant+color rows x {states.length}{' '}
        states = {darkSurfaceCombos.length * states.length} buttons. Axe color-contrast is
        disabled - light/ghost render on top of this dark backdrop.
      </PreviewTitle>
      <CombinationsGrid combos={darkSurfaceCombos} onDark />
    </Box>
  ),
}
