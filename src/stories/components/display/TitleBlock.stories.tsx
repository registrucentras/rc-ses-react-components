import { Box, ButtonBase, Divider, Stack } from '@mui/material'
import { InfoIcon } from '@phosphor-icons/react/dist/icons/Info'
import { PhoneCallIcon } from '@phosphor-icons/react/dist/ssr/PhoneCall'
import type { Meta, StoryObj } from '@storybook/react-vite'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon'
import RcSesButton from '@/components/common/Button'
import RcSesCardShell from '@/components/common/CardShell'
import RcSesIconWithSquareBackground from '@/components/common/IconWithSquareBackground'
import RcSesTitleBlock from '@/components/common/TitleBlock'
import palette from '@/theme/palette'

const meta: Meta<typeof RcSesTitleBlock> = {
  title: 'components/display/TitleBlock',
  component: RcSesTitleBlock,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'TitleBlock lays out an optional icon, a title, an optional description and up to two trailing actions. It is the primitive that can be dropped into any row that needs a titled unit (card headers, list items, section rows, modal headers).',
      },
    },
  },
}

export default meta

type Story = StoryObj<typeof RcSesTitleBlock>

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

export const WithPrimaryAction: Story = {
  render: () => (
    <RcSesTitleBlock
      title='Pažymos santuokai sudaryti užsienyje užsakymas'
      description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
      titleColor={palette.primary['700']}
      actions={<RcSesButton>Užsakyti</RcSesButton>}
    />
  ),
}

export const WithLinkAction: Story = {
  render: () => (
    <RcSesTitleBlock
      title='Santuoką liudijančio įrašo užsakymas'
      description='Oficialus santuokos faktą patvirtinantis įrašas.'
      titleColor={palette.primary['700']}
      actions={<RcSesButton variant='link'>Plačiau</RcSesButton>}
    />
  ),
}

export const WithPrimaryAndSecondaryActions: Story = {
  render: () => (
    <RcSesTitleBlock
      title='Pažymos santuokai sudaryti užsienyje užsakymas'
      description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
      titleColor={palette.primary['700']}
      actions={
        <>
          <RcSesButton>Užsakyti</RcSesButton>
          <RcSesButton variant='link'>Plačiau</RcSesButton>
        </>
      }
    />
  ),
}

export const RowList: Story = {
  render: () => (
    <Stack divider={<Divider flexItem />} spacing={3}>
      <RcSesTitleBlock
        title='Santuoką liudijančio įrašo užsakymas'
        description='Oficialus santuokos faktą patvirtinantis įrašas.'
        titleColor={palette.primary['700']}
        actions={<RcSesButton variant='link'>Plačiau</RcSesButton>}
      />
      <RcSesTitleBlock
        title='Pažymos santuokai sudaryti užsienyje užsakymas'
        description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
        titleColor={palette.primary['700']}
        actions={<RcSesButton>Užsakyti</RcSesButton>}
      />
    </Stack>
  ),
}

export const RowListWithIcons: Story = {
  render: () => (
    <Stack divider={<Divider flexItem />} spacing={3}>
      <RcSesTitleBlock
        title='Santuoką liudijančio įrašo užsakymas'
        description='Oficialus santuokos faktą patvirtinantis įrašas.'
        titleColor={palette.primary['700']}
        icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
        actions={<RcSesButton variant='link'>Plačiau</RcSesButton>}
      />
      <RcSesTitleBlock
        title='Pažymos santuokai sudaryti užsienyje užsakymas'
        description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
        titleColor={palette.primary['700']}
        icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
        actions={<RcSesButton>Užsakyti</RcSesButton>}
      />
    </Stack>
  ),
}

export const RowListWithIconsAndTwoActions: Story = {
  render: () => (
    <Stack divider={<Divider flexItem />} spacing={3}>
      <RcSesTitleBlock
        title='Santuoką liudijančio įrašo užsakymas'
        description='Oficialus santuokos faktą patvirtinantis įrašas.'
        titleColor={palette.primary['700']}
        icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
        actions={
          <>
            <RcSesButton>Užsakyti</RcSesButton>
            <RcSesButton variant='link'>Plačiau</RcSesButton>
          </>
        }
      />
      <RcSesTitleBlock
        title='Pažymos santuokai sudaryti užsienyje užsakymas'
        description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
        titleColor={palette.primary['700']}
        icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
        actions={
          <>
            <RcSesButton>Užsakyti</RcSesButton>
            <RcSesButton variant='link'>Plačiau</RcSesButton>
          </>
        }
      />
    </Stack>
  ),
}

export const HorizontalTitleBlockWithIconAndArrow: Story = {
  render: () => (
    <Stack direction='row' spacing={2} sx={{ alignItems: 'center', width: '100%' }}>
      <Box sx={{ alignSelf: 'center', flex: 1, minWidth: 0 }}>
        <RcSesTitleBlock
          title='Paslaugos pavadinimas'
          description='Trumpas paslaugos paaiškinimas'
          titleColor={palette.primary['700']}
          icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
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
  ),
}

export const HorizontalTitleBlockWithArrowAndBrandCardShellTheme: Story = {
  render: () => (
    <RcSesCardShell variant='card' theme='brand'>
      <Stack direction='row' spacing={2} sx={{ alignItems: 'center', width: '100%' }}>
        <Box sx={{ alignSelf: 'center', flex: 1, minWidth: 0 }}>
          <RcSesTitleBlock
            title='Paslaugos pavadinimas'
            description='Trumpas paslaugos paaiškinimas'
            titleColor={palette.primary['700']}
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
    </RcSesCardShell>
  ),
}

export const HorizontalTitleBlockWithArrowAndSunkenCardShellTheme: Story = {
  render: () => (
    <RcSesCardShell variant='card' theme='sunken'>
      <Stack direction='row' spacing={2} sx={{ alignItems: 'center', width: '100%' }}>
        <Box sx={{ alignSelf: 'center', flex: 1, minWidth: 0 }}>
          <RcSesTitleBlock
            title='Paslaugos pavadinimas'
            description='Trumpas paslaugos paaiškinimas'
            titleColor={palette.primary['700']}
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
    </RcSesCardShell>
  ),
}

export const ClickableHorizontalTitleBlockWithCardShellBase: Story = {
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
        <Stack direction='row' spacing={2} sx={{ alignItems: 'center', width: '100%' }}>
          <Box sx={{ alignSelf: 'center', flex: 1, minWidth: 0 }}>
            <RcSesTitleBlock
              title='Paslaugos sutartiniams klientams'
              description='Peržiūrėkite pagrindinius duomenis be užsakymo - dažniausias pirmas žingsnis.'
              icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
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

export const VerticalTitleBlockWithCardShellBase: Story = {
  render: () => (
    <RcSesCardShell
      variant='card'
      theme='default'
      footer={<FooterLink label='Peržiūrėti DUK' href='#' />}
    >
      <RcSesTitleBlock
        orientation='vertical'
        title='DUK'
        description='Atsakymai į dažniausiai užduodamus klausimus apie paslaugas ir savitarną.'
        icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
      />
    </RcSesCardShell>
  ),
}

export const VerticalTitleBlock: Story = {
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
        <RcSesTitleBlock
          orientation='vertical'
          title='DUK'
          description='Atsakymai į dažniausiai užduodamus klausimus apie paslaugas ir savitarną.'
          icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
        />
      </RcSesCardShell>
      <RcSesCardShell
        variant='card'
        theme='default'
        fullHeight
        footer={<FooterLink label='Visi kontaktai' href='#' />}
      >
        <RcSesTitleBlock
          orientation='vertical'
          title='Kontaktai'
          description='Konsultacijos telefonu (0 5) 268 8262 darbo dienomis 8:00-17:00.'
          icon={<RcSesIconWithSquareBackground Icon={PhoneCallIcon} variant='soft' />}
        />
      </RcSesCardShell>
      <RcSesCardShell
        variant='card'
        theme='default'
        fullHeight
        footer={<FooterLink label='Pradėkite registraciją' href='#' />}
      >
        <RcSesTitleBlock
          orientation='vertical'
          title='Registracija vizitui'
          description='Užduokite klausimą konsultantui pokalbių lange - atsakome darbo metu.'
          icon={<RcSesIconWithSquareBackground Icon={CalendarBlankIcon} variant='soft' />}
        />
      </RcSesCardShell>
    </Box>
  ),
}
