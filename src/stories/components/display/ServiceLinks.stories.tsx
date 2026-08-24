import { BriefcaseIcon } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import RcSesButton from '@/components/common/Button'
import RcSesCardShell from '@/components/common/CardShell'
import RcSesCardFooter from '@/components/common/CardShell/CardFooter'
import RcSesCardHeader from '@/components/common/CardShell/CardHeader'
import RcSesIconWithSquareBackground from '@/components/common/IconWithSquareBackground'
import RcSesServiceLinks from '@/components/common/ServiceLinks'
import {
  RcSesServiceLinkItem,
  RcSesServiceLinksProps,
} from '@/components/common/ServiceLinks/types'

const baseItems: RcSesServiceLinkItem[] = [
  { label: 'Juridinių asmenų registro (JAR) išrašas', href: '#jar' },
  { label: 'Juridinio asmens steigimas', href: '#steigimas' },
  { label: 'Dalyvių sąrašo teikimas (JADIS)', href: '#jadis' },
  { label: 'Įmonių ir organizacijų dokumentų kopijos', href: '#kopijos' },
]

const meta: Meta<typeof RcSesServiceLinks> = {
  title: 'components/display/ServiceLinks',
  component: RcSesServiceLinks,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'ServiceLinks is a standalone, vertical list of navigational service links, each row pairing a label with a trailing arrow. It carries no card shell of its own and is intended to be placed inside a CardShell content, could be together with a CardHeader and CardFooter.',
      },
    },
    viewport: {
      options: {
        mobile375: { name: 'Mobile 375', styles: { height: '900px', width: '375px' } },
        tablet768: { name: 'Tablet 768', styles: { height: '900px', width: '768px' } },
      },
    },
  },
  argTypes: {
    items: { control: false },
    dividers: { control: 'boolean' },
    isLoading: { control: 'boolean' },
    skeletonCount: { control: 'number' },
    renderLink: { control: false },
    testIds: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof RcSesServiceLinks>

export const Default: Story = {
  args: {
    items: baseItems,
    dividers: true,
  },
}

export const WithoutDividers: Story = {
  args: {
    items: baseItems,
    dividers: false,
  },
}

export const WithDisabledItem: Story = {
  args: {
    items: [...baseItems.slice(0, 3), { label: 'Netrukus (neaktyvus)', disabled: true }],
    dividers: true,
  },
}

export const Loading: Story = {
  args: {
    items: [],
    isLoading: true,
    skeletonCount: 4,
  },
}

/**
 * Passing a `renderLink` render-prop lets consumers wrap each navigable row
 * with any custom element (e.g. a router `<Link>`). The
 * component supplies href/target/rel/onClick and the row content as children;
 * the consumer decides how to render the anchor.
 */
export const WithRouterLink: Story = {
  args: {
    items: baseItems,
    dividers: true,
    renderLink: ({
      href,
      onClick,
      target,
      rel,
      children,
    }: {
      href: string
      onClick?: (e: React.MouseEvent<HTMLElement>) => void
      target?: string
      rel?: string
      children: React.ReactNode
    }) => (
      <a href={href} onClick={onClick} target={target} rel={rel} data-router-link>
        {children}
      </a>
    ),
  },
}

/**
 * The intended composition: ServiceLinks placed inside a CardShell as the
 * content slot, framed by a CardHeader and a CardFooter.
 */
export const InsideCardShell: Story = {
  render: (args: RcSesServiceLinksProps) => (
    <RcSesCardShell
      theme='brand'
      borderless
      header={
        <RcSesCardHeader
          icon={<RcSesIconWithSquareBackground Icon={BriefcaseIcon} variant='solid' />}
          title='Įmonėms ir organizacijoms'
          titleVariant='h5'
        />
      }
      footer={
        <RcSesCardFooter align='start'>
          <RcSesButton variant='contained' color='primary'>
            Žiūrėti visas
          </RcSesButton>
        </RcSesCardFooter>
      }
    >
      <RcSesServiceLinks {...args} />
    </RcSesCardShell>
  ),
  args: {
    items: baseItems,
    dividers: true,
  },
}
