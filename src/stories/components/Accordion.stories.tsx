import { Meta, StoryContext, StoryFn } from '@storybook/react'

import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer'
import FieldView from '@/components/storybook/FieldView'

const meta: Meta<typeof RcSesAccordion> = {
  title: 'components/common/Accordion',
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
}

export default meta

const Template: StoryFn<typeof RcSesAccordion> = (args) => {
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

export const Main = Template.bind({})
Main.args = {
  disabled: false,
}

Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) => {
        return codeBlock(storyContext.args)
      },
    },
  },
}
