import { Box, Typography } from '@mui/material'
import { Meta, StoryObj } from '@storybook/react'
import { Fragment } from 'react'

import RcSesBadge, { RcSesBadgeProps } from '@/components/common/Badge'
import FieldPreview from '@/components/storybook/FieldPreview'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import PreviewTitle from '@/components/storybook/PreviewTitle'

const variants: RcSesBadgeProps['variant'][] = [
  'neutral',
  'success',
  'warning',
  'error',
  'info',
  'brand',
]

const sizes: RcSesBadgeProps['size'][] = ['small', 'regular']

const meta: Meta<typeof RcSesBadge> = {
  title: 'components/display/Badge',
  component: RcSesBadge,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof RcSesBadge>

// ---------------------------------------------------------------------------
// Main (interactive / configurable via Controls panel)
// ---------------------------------------------------------------------------

export const Main: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesBadge {...args} />
      </FieldView>
    </Fields>
  ),
  args: {
    label: 'Dabartinė',
    variant: 'success',
    size: 'regular',
    showIcon: true,
    showClose: false,
  },
}

// ---------------------------------------------------------------------------
// Matrix — all 6 Type x 2 Size x show icon x show close combinations
// ---------------------------------------------------------------------------

const combos: { key: string; label: string; showIcon: boolean; showClose: boolean }[] = [
  { key: 'icon', label: 'Icon', showIcon: true, showClose: false },
  { key: 'close', label: 'Close', showIcon: false, showClose: true },
  { key: 'both', label: 'Icon + Close', showIcon: true, showClose: true },
  { key: 'plain', label: 'Plain', showIcon: false, showClose: false },
]

export const AllCombinations: Story = {
  render: () => (
    <>
      <PreviewTitle>
        6 types × 2 sizes × show icon × show close = 48 variants
      </PreviewTitle>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: '90px 70px repeat(4, 1fr)',
          rowGap: 1.5,
          columnGap: 2,
          alignItems: 'center',
          maxWidth: 720,
        }}
      >
        <Box />
        <Box />
        {combos.map((combo) => (
          <Typography
            key={combo.key}
            align='center'
            color='text.secondary'
            variant='body2'
          >
            {combo.label}
          </Typography>
        ))}
        {variants.map((variant) =>
          sizes.map((size, sizeIndex) => (
            <Fragment key={`${variant}-${size}`}>
              {sizeIndex === 0 && (
                <Typography sx={{ gridRow: 'span 2' }} variant='body2' fontWeight={600}>
                  {variant}
                </Typography>
              )}
              <Typography color='text.secondary' variant='body2'>
                {size}
              </Typography>
              {combos.map((combo) => (
                <Box key={combo.key} display='flex' justifyContent='center'>
                  <RcSesBadge
                    label='Label'
                    variant={variant}
                    size={size}
                    showIcon={combo.showIcon}
                    showClose={combo.showClose}
                    onClose={combo.showClose ? () => {} : undefined}
                  />
                </Box>
              ))}
            </Fragment>
          )),
        )}
      </Box>
    </>
  ),
}

// ---------------------------------------------------------------------------
// Edge cases
// ---------------------------------------------------------------------------

export const LongLabel: Story = {
  render: () => (
    <Fields>
      <FieldView>
        <PreviewTitle>
          truncated in a constrained container (hover/focus for full text)
        </PreviewTitle>
        <Box sx={{ maxWidth: 160 }}>
          <RcSesBadge
            label='Labai ilgas būsenos pavadinimas, kuris netelpa'
            variant='info'
            size='regular'
            showClose
            onClose={() => {}}
          />
        </Box>
      </FieldView>
      <FieldPreview>
        <PreviewTitle>grows freely when space allows</PreviewTitle>
        <RcSesBadge
          label='Labai ilgas būsenos pavadinimas, kuris netelpa'
          variant='info'
          size='regular'
        />
      </FieldPreview>
    </Fields>
  ),
}

export const BaselineAlignment: Story = {
  render: () => (
    <FieldView>
      <Typography variant='body1' component='p'>
        Įrašo būsena: <RcSesBadge label='Dabartinė' variant='success' size='small' />{' '}
        greta teksto eilutėje.
      </Typography>
    </FieldView>
  ),
}
