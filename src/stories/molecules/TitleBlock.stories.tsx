import { Box, ButtonBase, Divider, Stack } from '@mui/material'
import { InfoIcon, PhoneCallIcon } from '@phosphor-icons/react'
import type { Meta, StoryObj } from '@storybook/react-vite'

import ArrowRightIcon from '@/assets/icons/ArrowRightIcon'
import CalendarBlankIcon from '@/assets/icons/CalendarBlankIcon'
import RcSesButton from '@/components/common/Button'
import RcSesCardShell from '@/components/common/CardShell'
import RcSesCardFooter from '@/components/common/CardShell/CardFooter'
import RcSesIconWithSquareBackground from '@/components/common/IconWithSquareBackground'
import RcSesTitleBlock from '@/components/common/TitleBlock'
import palette from '@/theme/palette'

const meta: Meta<typeof RcSesTitleBlock> = {
  title: 'Molecules/TitleBlock',
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
  <RcSesCardFooter align='start' stretchOnMobile={false}>
    <RcSesButton
      variant='link'
      href={href}
      endIcon={<ArrowRightIcon fillColor={palette.primary[600]} size={20} />}
    >
      {label}
    </RcSesButton>
  </RcSesCardFooter>
)

// Decorative chevron sitting on the right edge of horizontal tile rows.
// aria-hidden because the row is announced by the heading (and, when the
// whole row is clickable, by the wrapping ButtonBase's accessible name).
const TrailingArrow = () => (
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
)

export const TitleBlock: Story = {
  render: () => (
    <RcSesTitleBlock
      title='Pažymos santuokai sudaryti užsienyje užsakymas'
      description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
      titleTone='brand'
    />
  ),
}

export const WithPrimaryAction: Story = {
  render: () => {
    const headingId = 'title-block-with-primary-action'
    return (
      <RcSesTitleBlock
        headingId={headingId}
        title='Pažymos santuokai sudaryti užsienyje užsakymas'
        description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
        titleTone='brand'
        actions={
          <RcSesButton
            id={`${headingId}-cta`}
            aria-labelledby={`${headingId}-cta ${headingId}`}
          >
            Užsakyti
          </RcSesButton>
        }
      />
    )
  },
}

export const WithLinkAction: Story = {
  render: () => {
    const headingId = 'title-block-with-link-action'
    return (
      <RcSesTitleBlock
        headingId={headingId}
        title='Santuoką liudijančio įrašo užsakymas'
        description='Oficialus santuokos faktą patvirtinantis įrašas.'
        titleTone='brand'
        actions={
          <RcSesButton
            variant='link'
            id={`${headingId}-cta`}
            aria-labelledby={`${headingId}-cta ${headingId}`}
          >
            Plačiau
          </RcSesButton>
        }
      />
    )
  },
}

export const WithPrimaryAndSecondaryActions: Story = {
  render: () => {
    const headingId = 'title-block-with-primary-and-secondary'
    return (
      <RcSesTitleBlock
        headingId={headingId}
        title='Pažymos santuokai sudaryti užsienyje užsakymas'
        description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
        titleTone='brand'
        actions={
          <>
            <RcSesButton
              id={`${headingId}-order`}
              aria-labelledby={`${headingId}-order ${headingId}`}
            >
              Užsakyti
            </RcSesButton>
            <RcSesButton
              variant='link'
              id={`${headingId}-more`}
              aria-labelledby={`${headingId}-more ${headingId}`}
            >
              Plačiau
            </RcSesButton>
          </>
        }
      />
    )
  },
}

export const RowList: Story = {
  render: () => {
    const rowAId = 'row-list-a'
    const rowBId = 'row-list-b'
    return (
      <Stack divider={<Divider flexItem />} spacing={3}>
        <RcSesTitleBlock
          headingId={rowAId}
          title='Santuoką liudijančio įrašo užsakymas'
          description='Oficialus santuokos faktą patvirtinantis įrašas.'
          titleTone='brand'
          actions={
            <RcSesButton
              variant='link'
              id={`${rowAId}-cta`}
              aria-labelledby={`${rowAId}-cta ${rowAId}`}
            >
              Plačiau
            </RcSesButton>
          }
        />
        <RcSesTitleBlock
          headingId={rowBId}
          title='Pažymos santuokai sudaryti užsienyje užsakymas'
          description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
          titleTone='brand'
          actions={
            <RcSesButton id={`${rowBId}-cta`} aria-labelledby={`${rowBId}-cta ${rowBId}`}>
              Užsakyti
            </RcSesButton>
          }
        />
      </Stack>
    )
  },
}

export const RowListWithIcons: Story = {
  render: () => {
    const rowAId = 'row-list-with-icons-a'
    const rowBId = 'row-list-with-icons-b'
    return (
      <Stack divider={<Divider flexItem />} spacing={3}>
        <RcSesTitleBlock
          headingId={rowAId}
          title='Santuoką liudijančio įrašo užsakymas'
          description='Oficialus santuokos faktą patvirtinantis įrašas.'
          titleTone='brand'
          icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
          actions={
            <RcSesButton
              variant='link'
              id={`${rowAId}-cta`}
              aria-labelledby={`${rowAId}-cta ${rowAId}`}
            >
              Plačiau
            </RcSesButton>
          }
        />
        <RcSesTitleBlock
          headingId={rowBId}
          title='Pažymos santuokai sudaryti užsienyje užsakymas'
          description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
          titleTone='brand'
          icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
          actions={
            <RcSesButton id={`${rowBId}-cta`} aria-labelledby={`${rowBId}-cta ${rowBId}`}>
              Užsakyti
            </RcSesButton>
          }
        />
      </Stack>
    )
  },
}

export const RowListWithIconsAndTwoActions: Story = {
  render: () => {
    const rowAId = 'row-list-two-actions-a'
    const rowBId = 'row-list-two-actions-b'
    return (
      <Stack divider={<Divider flexItem />} spacing={3}>
        <RcSesTitleBlock
          headingId={rowAId}
          title='Santuoką liudijančio įrašo užsakymas'
          description='Oficialus santuokos faktą patvirtinantis įrašas.'
          titleTone='brand'
          icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
          actions={
            <>
              <RcSesButton
                id={`${rowAId}-order`}
                aria-labelledby={`${rowAId}-order ${rowAId}`}
              >
                Užsakyti
              </RcSesButton>
              <RcSesButton
                variant='link'
                id={`${rowAId}-more`}
                aria-labelledby={`${rowAId}-more ${rowAId}`}
              >
                Plačiau
              </RcSesButton>
            </>
          }
        />
        <RcSesTitleBlock
          headingId={rowBId}
          title='Pažymos santuokai sudaryti užsienyje užsakymas'
          description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
          titleTone='brand'
          icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
          actions={
            <>
              <RcSesButton
                id={`${rowBId}-order`}
                aria-labelledby={`${rowBId}-order ${rowBId}`}
              >
                Užsakyti
              </RcSesButton>
              <RcSesButton
                variant='link'
                id={`${rowBId}-more`}
                aria-labelledby={`${rowBId}-more ${rowBId}`}
              >
                Plačiau
              </RcSesButton>
            </>
          }
        />
      </Stack>
    )
  },
}

export const HorizontalTitleBlockWithIconAndArrow: Story = {
  render: () => (
    <Stack direction='row' spacing={2} sx={{ alignItems: 'center', width: '100%' }}>
      <Box sx={{ alignSelf: 'center', flex: 1, minWidth: 0 }}>
        <RcSesTitleBlock
          title='Paslaugos pavadinimas'
          description='Trumpas paslaugos paaiškinimas'
          titleTone='brand'
          icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
        />
      </Box>
      <TrailingArrow />
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
            titleTone='brand'
          />
        </Box>
        <TrailingArrow />
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
            titleTone='brand'
          />
        </Box>
        <TrailingArrow />
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
          <TrailingArrow />
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

// Card title as running body copy: `titleVariant` moves the type scale only,
// `headingLevel` keeps the heading.
export const BodyScaleTitleInCard: Story = {
  render: () => {
    const services = [
      {
        id: 'body-scale-title-a',
        title: 'Pažymos apie asmens duomenis Gyventojų registre užsakymas',
      },
      {
        id: 'body-scale-title-b',
        title: 'Nekilnojamojo turto registro išrašo užsakymas',
      },
      {
        id: 'body-scale-title-c',
        title: 'Pažymos santuokai sudaryti užsienyje užsakymas',
      },
    ]

    return (
      <Box
        sx={{
          display: 'grid',
          gap: 2,
          gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
        }}
      >
        {services.map((service) => (
          <RcSesCardShell
            key={service.id}
            variant='card'
            theme='brand'
            fullHeight
            header={
              <RcSesTitleBlock
                headingId={service.id}
                headingLevel={3}
                title={service.title}
                titleVariant='body1'
                titleTone='brand'
              />
            }
            footer={
              <RcSesCardFooter align='start'>
                <RcSesButton
                  id={`${service.id}-order`}
                  aria-labelledby={`${service.id}-order ${service.id}`}
                >
                  Užsakyti
                </RcSesButton>
                <RcSesButton
                  variant='link'
                  id={`${service.id}-more`}
                  aria-labelledby={`${service.id}-more ${service.id}`}
                >
                  Plačiau
                </RcSesButton>
              </RcSesCardFooter>
            }
          />
        ))}
      </Box>
    )
  },
}

// Responsive baselines for SAV-6509 / SAV-6480 DoD ("Responsive patikra 375 /
// 768 / 1440"). Exercises the mobile stacking of the actions slot
// (direction={{ xs: 'column', sm: 'row' }}) so both the two-action and
// vertical-grid layouts get pinned baselines at 375 and 768.

const responsiveRowAId = 'responsive-row-a'
const responsiveRowBId = 'responsive-row-b'

const ResponsiveTwoActionsRowList = () => (
  <Stack divider={<Divider flexItem />} spacing={3}>
    <RcSesTitleBlock
      headingId={responsiveRowAId}
      title='Santuoką liudijančio įrašo užsakymas'
      description='Oficialus santuokos faktą patvirtinantis įrašas.'
      titleTone='brand'
      icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
      actions={
        <>
          <RcSesButton
            id={`${responsiveRowAId}-order`}
            aria-labelledby={`${responsiveRowAId}-order ${responsiveRowAId}`}
          >
            Užsakyti
          </RcSesButton>
          <RcSesButton
            variant='link'
            id={`${responsiveRowAId}-more`}
            aria-labelledby={`${responsiveRowAId}-more ${responsiveRowAId}`}
          >
            Plačiau
          </RcSesButton>
        </>
      }
    />
    <RcSesTitleBlock
      headingId={responsiveRowBId}
      title='Pažymos santuokai sudaryti užsienyje užsakymas'
      description='Pažyma, kad nėra kliūčių sudaryti santuoką užsienio valstybėje.'
      titleTone='brand'
      icon={<RcSesIconWithSquareBackground Icon={InfoIcon} variant='soft' />}
      actions={
        <>
          <RcSesButton
            id={`${responsiveRowBId}-order`}
            aria-labelledby={`${responsiveRowBId}-order ${responsiveRowBId}`}
          >
            Užsakyti
          </RcSesButton>
          <RcSesButton
            variant='link'
            id={`${responsiveRowBId}-more`}
            aria-labelledby={`${responsiveRowBId}-more ${responsiveRowBId}`}
          >
            Plačiau
          </RcSesButton>
        </>
      }
    />
  </Stack>
)

export const MobileViewport: Story = {
  render: () => <ResponsiveTwoActionsRowList />,
  // Two separate mechanisms, deliberately: the tag sets Playwright's browser
  // width for the baseline, the global sets the canvas iframe width for anyone
  // reviewing in Storybook. Docs pages render stories inline at the container's
  // width, where neither applies, so this one is kept out of the docs page
  // rather than showing a desktop row list under a mobile heading.
  tags: ['viewport-375', '!autodocs'],
  globals: { viewport: { value: 'mobile375' } },
}

export const TabletViewport: Story = {
  render: () => <ResponsiveTwoActionsRowList />,
  tags: ['viewport-768', '!autodocs'],
  globals: { viewport: { value: 'tablet768' } },
}

// Pins the vertical-orientation mobile treatment (icon hidden, compressed
// title, left-aligned link footer inside CardShell) so any regression in the
// responsive gap/breakpoint stack shows up in the visual diff.
export const VerticalMobileViewport: Story = {
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
  tags: ['viewport-375', '!autodocs'],
  globals: { viewport: { value: 'mobile375' } },
}
