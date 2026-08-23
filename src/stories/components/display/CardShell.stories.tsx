import { Box, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import UserIcon from '@/assets/icons/UserIcon'
import RcSesButton from '@/components/common/Button'
import RcSesCardShell from '@/components/common/CardShell'
import RcSesCardFooter from '@/components/common/CardShell/content/CardFooter'
import RcSesCardHeader from '@/components/common/CardShell/content/CardHeader'
import RcSesIconWithCircularBackground from '@/components/common/IconWithCircularBackground'

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
    controls: {
      include: [
        'variant',
        'theme',
        'fullHeight',
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

export const CardVariant: Story = {
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
