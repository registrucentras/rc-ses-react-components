import { Box, Stack, Typography } from '@mui/material'
import { Meta, StoryContext } from '@storybook/react-vite'

import { BriefcaseIcon, UserIcon } from '@/assets/icons/phosphorIcons'
import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer/AccordionFormContainer'
import FieldView from '@/components/storybook/FieldView'
import { colorTokens } from '@/theme/colorTokens'
import { typographyTokens } from '@/theme/typographyTokens'

const meta: Meta<typeof RcSesAccordion> = {
  title: 'Organisms/Accordion',
  component: RcSesAccordion,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: {},
      },
    },
  },
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Accordion v2 keeps the existing id + controller API. Optional description can be passed directly or in controller.state[id].description. Default now has the card border and radius at every breakpoint. canToggle=false always shows content and renders a non-interactive heading; collapseAll cannot close it. Use type="menu" with one shared controller (exclusive: true), menuItems and optional allLink. Mark the current link with current=true; its group opens on mount or when the current link changes. Menu uses buttons and lists, without heading/region landmarks. Menu children, if supplied, must be list items (li), allowing composition with future shared Nav-item components. Disabled is Default-only.',
      },
    },
  },
}

export default meta

function AccordionDemo(args: any) {
  const { disabled } = args

  const accordionController = useAccordionController({
    initialState: {
      form: {
        canToggle: true,
        expanded: false,
        state: 'active',
        title: 'Accordion title',
      },
    },
  })

  return (
    <FieldView>
      <RcSesServiceFormContainer
        showProgressStepper
        accordionController={accordionController}
        slotProps={{ container: { maxWidth: 'lg' } }}
      >
        <RcSesAccordion id='form' controller={accordionController} disabled={disabled}>
          Here goes Accordeon content
        </RcSesAccordion>
      </RcSesServiceFormContainer>
    </FieldView>
  )
}

const codeBlock = (args: any) => {
  const { disabled } = args
  return `
  import RcSesAccordion from '@/components/common/Accordion'
  import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'

  const MyComponent = () => (
  const accordionController = useAccordionController({
    initialState: {
      form: {
        canToggle: true,
        expanded: false,
        state: 'active',
        title: "Accordion title",
      },
    },
  });

    <RcSesAccordion controller={accordionController} disabled="${disabled}">
       This is content
    </RcSesAccordion>
  );`
}

export const Main = {
  render: (args: any) => <AccordionDemo {...args} />,
  args: {
    disabled: false,
  },
  parameters: {
    docs: {
      source: {
        type: 'dynamic',
        transform: (code: string, storyContext: StoryContext) =>
          codeBlock(storyContext.args),
      },
    },
  },
}

function DefaultV2Demo() {
  const controller = useAccordionController({
    initialState: {
      closed: {
        title: 'Sekcijos pavadinimas',
        description: 'Trumpas sekcijos paaiškinimas',
        expanded: false,
        state: 'active',
      },
      opened: {
        title: 'Atidaryta sekcija',
        description: 'Trumpas sekcijos paaiškinimas',
        expanded: true,
        state: 'active',
      },
      disabled: {
        title: 'Neaktyvi sekcija',
        description: 'Sekcija dar neprieinama',
        disabled: true,
        expanded: false,
        state: 'pending',
      },
      pinned: {
        title: 'Visada atidaryta sekcija',
        canToggle: false,
        expanded: false,
        state: 'active',
      },
      long: {
        title:
          'Labai ilgas sekcijos pavadinimas, kuris mažame ekrane turi persikelti į kitą eilutę ir likti visas matomas',
        expanded: false,
        state: 'active',
      },
    },
  })
  return (
    <Box sx={{ maxWidth: 840, mx: 'auto', p: 1 }}>
      {Object.keys(controller.state).map((id) => (
        <RcSesAccordion key={id} id={id} controller={controller}>
          <Typography
            sx={{
              color: colorTokens['text-muted'],
              fontFamily: typographyTokens['font-family'],
              fontSize: typographyTokens['font-size-body-small'],
              fontStyle: 'normal',
              fontWeight: typographyTokens['font-weight-body-small'],
              lineHeight: typographyTokens['line-height-body-small'],
              letterSpacing: typographyTokens['letter-spacing-body-small'],
            }}
          >
            Sekcijos turinys (Body slot) – formos laukai, sąrašai
          </Typography>
        </RcSesAccordion>
      ))}
    </Box>
  )
}

export const DefaultV2 = { render: () => <DefaultV2Demo /> }
export const DefaultMobile = { render: () => <DefaultV2Demo />, tags: ['viewport-375'] }

function MenuDemo({
  current = false,
  icons = true,
}: {
  current?: boolean
  icons?: boolean
}) {
  const controller = useAccordionController({
    exclusive: true,
    initialState: {
      services: { title: 'Įmonės ir organizacijos', expanded: !current, state: 'active' },
      people: { title: 'Gyventojai', expanded: false, state: 'active' },
    },
  })
  return (
    <Stack component='nav' aria-label='Paslaugų meniu' sx={{ maxWidth: 375, mx: 'auto' }}>
      <RcSesAccordion
        type='menu'
        id='services'
        controller={controller}
        Icon={icons ? BriefcaseIcon : undefined}
        menuItems={[
          { label: 'Nuorodos pavadinimas', href: '#first' },
          {
            label:
              'Juridinių asmenų registro išrašo ir kitų reikalingų dokumentų užsakymas',
            href: '#second',
          },
          { label: 'Nuorodos pavadinimas', href: '#third' },
          { label: 'Nuorodos pavadinimas', href: '#fourth' },
        ]}
        allLink={{ label: 'Visos paslaugos', href: '#all' }}
      />
      <RcSesAccordion
        type='menu'
        id='people'
        controller={controller}
        Icon={icons ? UserIcon : undefined}
        menuItems={[
          { label: 'Mano duomenys', href: '#personal', current },
          { label: 'Pažymų užsakymas', href: '#certificates' },
        ]}
        allLink={{ label: 'Visos gyventojų paslaugos', href: '#people' }}
      />
    </Stack>
  )
}

export const Menu = { render: () => <MenuDemo />, tags: ['viewport-375'] }
export const MenuCurrentPage = {
  render: () => <MenuDemo current />,
  tags: ['viewport-375'],
}
export const MenuWithoutIcons = {
  render: () => <MenuDemo icons={false} />,
  tags: ['viewport-375'],
}
