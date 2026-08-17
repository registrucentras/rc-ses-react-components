import { Button } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentProps } from 'react'

import RcSesStepCard from '@/components/common/StepCard'

const meta: Meta<typeof RcSesStepCard> = {
  title: 'Components/Display/StepCard',
  component: RcSesStepCard,
  parameters: {
    docs: {
      description: {
        component:
          'StepCard component for wizard steps. Provides minimal API without theme, icon, badge, or CTA pair props that are part of the Card family.',
      },
    },
    controls: {
      include: ['title', 'description', 'headingLevel', 'children', 'footer'],
    },
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof RcSesStepCard>

const DefaultFooter = (
  <>
    <Button variant='outlined' color='primary'>
      Atgal
    </Button>
    <Button variant='contained' color='primary'>
      Tęsti
    </Button>
  </>
)

export const Default: Story = {
  render: (args: ComponentProps<typeof RcSesStepCard>) => (
    <RcSesStepCard {...args}>
      <div>Turinys (Body slot)</div>
    </RcSesStepCard>
  ),
  args: {
    title: 'Žingsnio antraštė',
    description: 'Paaiskinimas apie šį žingsnį',
    footer: DefaultFooter,
  },
}

export const WithoutDescription: Story = {
  render: (args: ComponentProps<typeof RcSesStepCard>) => (
    <RcSesStepCard {...args}>
      <div>Turinys be paaiškinimo viršuje</div>
    </RcSesStepCard>
  ),
  args: {
    title: 'Žingsnio antraštė',
    footer: DefaultFooter,
  },
}

export const LongTitle: Story = {
  render: (args: ComponentProps<typeof RcSesStepCard>) => (
    <RcSesStepCard {...args}>
      <div>Turinys su labai ilga antrašte, kuri lūžta į kelias eilutes</div>
    </RcSesStepCard>
  ),
  args: {
    title:
      'Labai ilga žingsnio antraštė, kuri turėtų lūžti į kelias eilutes, kai ekranas yra siauras arba antraštė per ilga',
    description:
      'Paaiškinimas taip pat gali būti ilgas ir turėtų teisingai lūžti į kelias eilutes, išlaikant gerą skaitomumą',
    footer: DefaultFooter,
  },
}

export const WithCustomHeadingLevel: Story = {
  render: (args: ComponentProps<typeof RcSesStepCard>) => (
    <RcSesStepCard {...args}>
      <div>Turinys su h3 antraštes lygiu</div>
    </RcSesStepCard>
  ),
  args: {
    title: 'Žingsnio antraštė (h3)',
    description: 'Antraštės lygis gali būti konfigūruojamas pagal puslapio struktūrą',
    headingLevel: 3,
    footer: DefaultFooter,
  },
}

export const EmptyContent: Story = {
  render: (args: ComponentProps<typeof RcSesStepCard>) => <RcSesStepCard {...args} />,
  args: {
    title: 'Žingsnio antraštė',
    description: 'Tuščias turinys nelaužo layouto (min padding išlieka)',
    footer: DefaultFooter,
  },
}

export const WithCardInContent: Story = {
  render: (args: ComponentProps<typeof RcSesStepCard>) => (
    <RcSesStepCard {...args}>
      <div
        style={{
          padding: '1rem',
          border: '1px solid #e0e0e0',
          borderRadius: '0.5rem',
          backgroundColor: '#f5f5f5',
        }}
      >
        Card/Subcard gali būti dedami Į Step-card turinį
      </div>
    </RcSesStepCard>
  ),
  args: {
    title: 'Žingsnio antraštė',
    description: 'Step-card su įdėtu Card komponentu turinyje',
    footer: DefaultFooter,
  },
}
