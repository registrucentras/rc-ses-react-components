import { Box, ThemeProvider, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { Fragment } from 'react'
import { fn } from 'storybook/test'

import { PlusBoldIcon } from '@/assets/icons/phosphorIcons'
import Button from '@/components/common/Button'
import PreviewTitle from '@/components/storybook/PreviewTitle'
import { colorTokens as colors } from '@/theme/colorTokens'
import { createRcSesTokenTheme } from '@/theme/tokenTheme'
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

// The names describe DS roles; the component keeps its existing MUI props.
const designRoles = [
  { name: 'Primary', variant: 'contained', color: 'primary' },
  { name: 'Secondary', variant: 'outlined', color: 'grey' },
  { name: 'Error', variant: 'contained', color: 'error' },
  { name: 'Link', variant: 'link', color: 'primary' },
] as const

export const DesignCombinations: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <Box sx={{ display: 'grid', gap: 4 }}>
      {designRoles.flatMap((role) =>
        (['medium', 'small'] as const).map((size) => (
          <Box key={`${role.name}-${size}`}>
            <Typography sx={{ mb: 2 }}>
              {role.name} — {size === 'medium' ? 'Regular' : 'Small'}
            </Typography>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, max-content)',
                gap: 2,
                alignItems: 'center',
              }}
            >
              {(['none', 'left', 'right', 'only'] as const).map((position) => (
                <Typography key={position}>{position}</Typography>
              ))}
              {(['rest', 'disabled', 'loading'] as const).flatMap((state) =>
                (['none', 'left', 'right', 'only'] as const).map((position) => (
                  <Button
                    key={`${state}-${position}`}
                    data-testid={`ds-${role.name}-${size}-${state}-${position}`}
                    variant={role.variant}
                    color={role.color}
                    size={size}
                    disabled={state === 'disabled'}
                    loading={state === 'loading'}
                    loadingPosition={
                      position === 'only' || position === 'none'
                        ? 'center'
                        : ({ left: 'start', right: 'end' } as const)[position]
                    }
                    iconOnly={position === 'only'}
                    aria-label={position === 'only' ? 'Pridėti' : undefined}
                    startIcon={position === 'left' ? <PlusBoldIcon /> : undefined}
                    endIcon={position === 'right' ? <PlusBoldIcon /> : undefined}
                  >
                    {position === 'only' ? <PlusBoldIcon /> : 'Button'}
                  </Button>
                )),
              )}
            </Box>
          </Box>
        )),
      )}
    </Box>
  ),
}

export const TokenBindings: Story = {
  parameters: { layout: 'padded' },
  render: () => (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button startIcon={<PlusBoldIcon />}>Pridėti pasirinktas (4)</Button>
      <Button variant='outlined' color='grey'>
        Atšaukti
      </Button>
      <Button color='error'>Pašalinti</Button>
      <Button variant='link'>Skaityti daugiau</Button>
    </Box>
  ),
}

export const TokenOverrides: Story = {
  tags: ['no-snapshot'],
  render: () => (
    <Box sx={{ display: 'flex', gap: 2 }}>
      <Button
        iconOnly
        aria-label='Custom button'
        sx={{ width: '5rem', height: '4rem', borderRadius: '3px' }}
      >
        <PlusBoldIcon />
      </Button>
      <Button sx={{ px: 0 }}>Custom padding</Button>
    </Box>
  ),
}

const fallbackTheme = createRcSesTokenTheme()

export const Fallbacks: Story = {
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
  render: () => (
    <ThemeProvider theme={fallbackTheme}>
      <Box sx={{ display: 'grid', gap: 2, justifyItems: 'start' }}>
        {(['small', 'medium', 'large'] as const).map((size) => (
          <Box key={size} sx={{ display: 'flex', gap: 2 }}>
            <Button size={size} data-testid={`fallback-${size}-normal`}>
              {size}
            </Button>
            <Button
              size={size}
              iconOnly
              aria-label={`Add ${size}`}
              data-testid={`fallback-${size}-icon`}
            >
              <PlusBoldIcon />
            </Button>
            <Button size={size} variant='link' data-testid={`fallback-${size}-link`}>
              Link {size}
            </Button>
          </Box>
        ))}
      </Box>
    </ThemeProvider>
  ),
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
  const labelColor = onDark ? colors['text-inverse'] : colors['text-secondary']
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
                  color: onDark ? colors['text-inverse'] : undefined,
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
        backgroundColor: colors['surface-inverse'],
        borderRadius: 1,
        p: 3,
        color: colors['text-inverse'],
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

export const LinkFocus: Story = {
  tags: ['no-snapshot'],
  parameters: { layout: 'padded' },
  render: () => (
    <Box sx={{ display: 'grid', gap: 2, justifyItems: 'start' }}>
      <Typography>
        Click with the mouse, release, then move the pointer away. The current link must
        return to its base color, even while focused. Then use Tab to reach it: a visible
        keyboard focus indicator must appear.
      </Typography>
      <Typography>Current library behavior</Typography>
      <Button variant='link'>Current link</Button>
      <Button variant='link' disabled>
        Disabled link
      </Button>
      <Typography>Before: local simulation only, not library behavior</Typography>
      <Button
        variant='link'
        sx={{ '&:not(.Mui-disabled):focus': { color: colors['text-default'] } }}
      >
        Before: retained focus color
      </Button>
    </Box>
  ),
}
