import { Box, ButtonBase, Stack, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon'
import UserIcon from '@/assets/icons/UserIcon'
import RcSesButton from '@/components/common/Button'
import RcSesCardShell from '@/components/common/CardShell'
import RcSesCardFooter from '@/components/common/CardShell/CardFooter'
import RcSesCardHeader from '@/components/common/CardShell/CardHeader'
import RcSesIconWithCircularBackground from '@/components/common/IconWithCircularBackground'
import RcSesIconWithSquareBackground from '@/components/common/IconWithSquareBackground'
import palette from '@/theme/palette'
import { InfoIcon } from '@phosphor-icons/react/dist/icons/Info'
import { PhoneCallIcon } from '@phosphor-icons/react/dist/ssr'

const meta: Meta<typeof RcSesCardShell> = {
  title: 'components/display/CardShell',
  component: RcSesCardShell,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'CardShell is a low-level building-block component for card structure and styling. It provides header, content, and footer slots with different variants (card, subcard) and themes (default, brand, sunken). Unlike a ready-to-use Card component, CardShell has no built-in content and serves as a foundation for building more complex cards.',
      },
    },
    viewport: {
      options: {
        mobile375: { name: 'Mobile 375', styles: { height: '900px', width: '375px' } },
        tablet768: { name: 'Tablet 768', styles: { height: '900px', width: '768px' } },
      },
    },
    controls: {
      include: [
        'variant',
        'theme',
        'fullHeight',
        'borderless',
        'header',
        'children',
        'footer',
        'testIds',
      ],
    },
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['card', 'subcard'],
      description: 'Visual variant of the card',
    },
    theme: {
      control: 'select',
      options: ['default', 'brand', 'sunken'],
      description: 'Color theme of the card',
    },
    fullHeight: {
      control: 'boolean',
      description: 'Whether the card should take full height of its container',
    },
    borderless: {
      control: 'boolean',
      description: 'Renders the shell without any border',
    },
    header: {
      control: false,
      description: 'Header content (ReactNode)',
    },
    children: {
      control: false,
      description: 'Main content (ReactNode)',
    },
    footer: {
      control: false,
      description: 'Footer content (ReactNode)',
    },
    testIds: {
      control: false,
      description: 'Test IDs for the card elements',
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesCardShell>

const SampleHeader = () => (
  <RcSesCardHeader
    title='Kortelės antraštė'
    description='Paaiškinimas apie šios kortelės turinį'
  />
)

const SampleContent = () => (
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
    <Typography align='center'>Turinys (Body slot)</Typography>
  </Box>
)

const SampleFooter = () => (
  <RcSesCardFooter>
    <RcSesButton color='grey' variant='outlined'>
      Atšaukti
    </RcSesButton>
    <RcSesButton>Tęsti</RcSesButton>
  </RcSesCardFooter>
)

export const Default: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
}

export const SubcardVariant: Story = {
  args: {
    variant: 'subcard',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
}

export const BrandTheme: Story = {
  args: {
    variant: 'card',
    theme: 'brand',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
}

export const SunkenTheme: Story = {
  args: {
    variant: 'card',
    theme: 'sunken',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
}

export const HeaderComplete: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    header: (
      <RcSesCardHeader
        actions={
          <RcSesButton color='grey' variant='outlined'>
            Redaguoti
          </RcSesButton>
        }
        count={4}
        description='Paaiškinimas apie šios kortelės turinį'
        icon={<RcSesIconWithCircularBackground Icon={UserIcon} size='medium' />}
        title='Pasirinktos teisės'
      />
    ),
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
}

export const Borderless: Story = {
  args: {
    variant: 'card',
    theme: 'brand',
    borderless: true,
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
}

export const WithoutHeader: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
}

export const FooterSingleLink: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: (
      <RcSesCardFooter align='start' stretchOnMobile={false}>
        <RcSesButton variant='link'>Žiūrėti visas</RcSesButton>
      </RcSesCardFooter>
    ),
  },
}

export const WithoutFooter: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
  },
}

export const ContentOnly: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    children: <SampleContent />,
  },
}

export const FullHeight: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    fullHeight: true,
    header: <SampleHeader />,
    children: (
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography align='center'>Pilno aukščio turinys</Typography>
      </Box>
    ),
    footer: <SampleFooter />,
  },
  decorators: [
    (Story) => (
      <Box sx={{ height: '500px' }}>
        <Story />
      </Box>
    ),
  ],
}

export const MobileViewport: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
  // Two separate mechanisms, deliberately: the tag sets Playwright's browser
  // width for the baseline, the global sets the canvas iframe width for anyone
  // reviewing in Storybook. Docs pages render stories inline at the container's
  // width, where neither applies, so this one is kept out of the docs page
  // rather than showing a desktop card under a mobile heading.
  tags: ['viewport-375', '!autodocs'],
  globals: { viewport: { value: 'mobile375' } },
}

export const TabletViewport: Story = {
  args: {
    variant: 'card',
    theme: 'default',
    header: <SampleHeader />,
    children: <SampleContent />,
    footer: <SampleFooter />,
  },
  tags: ['viewport-768', '!autodocs'],
  globals: { viewport: { value: 'tablet768' } },
}

// ---------------------------------------------------------------------------
// Compositions: recipes for common "tile" patterns built from CardShell +
// CardHeader + IconWithSquareBackground + ButtonBase. Kept as stories rather
// than dedicated components — the shape is thin enough that a demo is more
// useful than an extra API surface.
// ---------------------------------------------------------------------------

const FooterLink = ({ label, href }: { label: string; href: string }) => (
  <a
    href={href}
    style={{
      alignItems: 'center',
      color: palette.primary[600],
      display: 'inline-flex',
      fontWeight: 600,
      gap: '0.5rem',
      textDecoration: 'none',
    }}
  >
    {label}
    <ArrowRightIcon fillColor={palette.primary[600]} size={20} />
  </a>
)

/**
 * Horizontal, clickable tile with a trailing chevron. The whole card is the
 * action, so `ButtonBase` wraps the shell's children to make the entire
 * surface one focusable click target; `RcSesCardHeader` renders the icon +
 * title + description row next to the chevron.
 */
export const ClickableHorizontalTile: Story = {
  render: () => (
    <RcSesCardShell variant='card' theme='default'>
      <ButtonBase
        component='a'
        href='#'
        sx={{
          borderRadius: 'inherit',
          display: 'block',
          textAlign: 'left',
          width: '100%',
        }}
      >
        <Stack
          direction='row'
          spacing={2}
          sx={{ alignItems: 'center', width: '100%' }}
        >
          <Box sx={{ alignSelf: 'center', flex: 1, minWidth: 0 }}>
            <RcSesCardHeader
              title='Paslaugos sutartiniams klientams'
              description='Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.'
              icon={
                <RcSesIconWithSquareBackground
                  Icon={InfoIcon}
                  variant='soft'
                />
              }
            />
          </Box>
          <Box
            aria-hidden
            sx={{
              alignItems: 'center',
              alignSelf: 'stretch',
              color: palette.primary[600],
              display: 'flex',
              flexShrink: 0,
            }}
          >
            <ArrowRightIcon fillColor={palette.primary[600]} size={20} />
          </Box>
        </Stack>
      </ButtonBase>
    </RcSesCardShell>
  ),
}

/**
 * Vertical tile with a CTA link. `RcSesCardShell` supplies the surface and
 * `footer` slot; `RcSesCardHeader` with `orientation='vertical'` is passed
 * as children to render the stacked icon, title and description.
 */
export const VerticalTile: Story = {
  render: () => (
    <RcSesCardShell
      variant='card'
      theme='default'
      footer={<FooterLink label='Peržiūrėti DUK' href='#' />}
    >
      <RcSesCardHeader
        orientation='vertical'
        title='DUK'
        description='Atsakymai į dažniausiai užduodamus klausimus apie paslaugas ir savitarną.'
        icon={
          <RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />
        }
      />
    </RcSesCardShell>
  ),
}

/**
 * Three `VerticalTile`s in a CSS Grid row (`repeat(3, 1fr)`). Each shell
 * uses `fullHeight` so footer links align on the same baseline regardless
 * of description length.
 */
export const VerticalTileRow: Story = {
  render: () => (
    <Box
      sx={{
        display: 'grid',
        gap: 2,
        gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
      }}
    >
      <RcSesCardShell
        variant='card'
        theme='default'
        fullHeight
        footer={<FooterLink label='Peržiūrėti DUK' href='#' />}
      >
        <RcSesCardHeader
          orientation='vertical'
          title='DUK'
          description='Atsakymai į dažniausiai užduodamus klausimus apie paslaugas ir savitarną.'
          icon={
            <RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />
          }
        />
      </RcSesCardShell>
      <RcSesCardShell
        variant='card'
        theme='default'
        fullHeight
        footer={<FooterLink label='Visi kontaktai' href='#' />}
      >
        <RcSesCardHeader
          orientation='vertical'
          title='Kontaktai'
          description='Konsultacijos telefonu (0 5) 268 8262 darbo dienomis 8:00-17:00.'
          icon={
            <RcSesIconWithSquareBackground Icon={PhoneCallIcon} variant='soft' />
          }
        />
      </RcSesCardShell>
      <RcSesCardShell
        variant='card'
        theme='default'
        fullHeight
        footer={<FooterLink label='Pradėkite registraciją' href='#' />}
      >
        <RcSesCardHeader
          orientation='vertical'
          title='Registracija vizitui'
          description='Užduokite klausimą konsultantui pokalbių lange - atsakome darbo metu.'
          icon={
            <RcSesIconWithSquareBackground
              Icon={CalendarBlankIcon}
              variant='soft'
            />
          }
        />
      </RcSesCardShell>
    </Box>
  ),
}
