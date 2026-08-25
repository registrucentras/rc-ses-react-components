import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import UserIcon from '@/assets/icons/UserIcon'
import RcSesButton from '@/components/common/Button'
import RcSesCardShell from '@/components/common/CardShell'
import RcSesCardFooter from '@/components/common/CardShell/CardFooter'
import RcSesIconWithCircularBackground from '@/components/common/IconWithCircularBackground'
import RcSesCardHeader from '@/components/common/TitleBlock'
import palette from '@/theme/palette'

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
