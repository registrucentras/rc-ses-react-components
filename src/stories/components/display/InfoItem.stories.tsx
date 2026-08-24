import { Stack } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'

import CheckCircleFillIcon from '@/assets/icons/CheckCircleFillIcon'
import InfoFillIcon from '@/assets/icons/InfoFillIcon'
import RcSesCardShell from '@/components/common/CardShell'
import RcSesInfoItem from '@/components/common/InfoItem'

const meta: Meta<typeof RcSesInfoItem> = {
  title: 'components/display/InfoItem',
  component: RcSesInfoItem,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          '`RcSesInfoItem` is a header-only building block — it does not render its own card surface. It is meant to be placed inside an `RcSesCardShell`, which provides the border, background, padding and rounded corners. Compose one `InfoItem` per shell for a single tile, or render several shells side by side (see the `SideBySide` story) to build a row of navigable info cards, as shown in the design.',
      },
    },
  },
  decorators: [(Story) => <Story />],
  argTypes: {
    Icon: { control: false },
    onClick: { control: false },
    testIds: { control: false },
  },
}

export default meta

type Story = StoryObj<typeof RcSesInfoItem>

export const Default: Story = {
  args: {
    title: 'Paslaugos sutartiniams klientams',
    description:
      'Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.',
    Icon: InfoFillIcon,
    href: '#',
  },
}

export const WithCheckIcon: Story = {
  args: {
    title: 'Paslaugos sutartiniams klientams',
    description:
      'Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.',
    Icon: CheckCircleFillIcon,
    href: '#',
  },
}

export const NonInteractive: Story = {
  args: {
    title: 'Paslaugos sutartiniems klientams',
    description:
      'Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.',
    Icon: InfoFillIcon,
  },
}

export const WithoutDescription: Story = {
  args: {
    title: 'Paslaugos sutartiniems klientams',
    Icon: InfoFillIcon,
    href: '#',
  },
}

export const SideBySide: Story = {
  render: () => (
    <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
      <RcSesCardShell variant='card' theme='default'>
        <RcSesInfoItem
          title='Paslaugos sutartiniems klientams'
          description='Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.'
          Icon={InfoFillIcon}
          href='#'
        />
      </RcSesCardShell>
      <RcSesCardShell variant='card' theme='default'>
        <RcSesInfoItem
          title='Paslaugos sutartiniems klientams'
          description='Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.'
          Icon={CheckCircleFillIcon}
          href='#'
        />
      </RcSesCardShell>
    </Stack>
  ),
}
