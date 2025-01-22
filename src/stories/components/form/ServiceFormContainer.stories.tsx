/* eslint-disable @typescript-eslint/no-unused-vars */

/* eslint-disable react/function-component-definition */
import { Meta, StoryContext, StoryFn } from '@storybook/react'

import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesServiceFormContainer from '@/components/layout/ServiceFormContainer'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'
import BasicInformationForm from '@/examples/MultipleStepForm/components/BasicInformationForm'

const meta: Meta<typeof RcSesServiceFormContainer> = {
  title: 'components/common/form/ServiceFormContainer',
  component: RcSesServiceFormContainer,
  argTypes: {
    accordionController: {
      table: {
        disable: true,
      },
    },
    showAccordionCollapseControls: {
      table: {
        disable: true,
      },
    },
    showProgressStepper: {
      table: {
        disable: true,
      },
    },
    slotProps: {
      table: {
        disable: true,
      },
    },
  },
  tags: ['autodocs'],
}

export default meta

const Template: StoryFn<typeof RcSesServiceFormContainer> = (args) => {
  const accordionController = useAccordionController({
    initialState: {
      basicInformation: {
        expanded: false,
        state: 'completed',
        title: 'Bazinė informacija',
      },
      serviceDetails: {
        expanded: true,
        state: 'active',
        title: 'Paslaugos užsakymas',
      },
      serviceIssuance: {
        expanded: false,
        state: 'pending',
        title: 'Išdavimas',
      },
      additionalServices: {
        expanded: false,
        state: 'pending',
        title: 'Reikalingos papildomos paslaugos',
      },
      termsAndConditions: {
        expanded: false,
        state: 'pending',
        title: 'Terminai ir sąlygos',
      },
    },
  })

  return (
    <Fields>
      <FieldView>
        <RcSesServiceFormContainer
          accordionController={accordionController}
          slotProps={{ container: { maxWidth: 'md' } }}
        >
          <RcSesAccordion id='basicInformation' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          <RcSesAccordion id='serviceDetails' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          <RcSesAccordion id='serviceIssuance' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          <RcSesAccordion id='additionalServices' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>

          <RcSesAccordion id='termsAndConditions' controller={accordionController}>
            <BasicInformationForm />
          </RcSesAccordion>
        </RcSesServiceFormContainer>
      </FieldView>
    </Fields>
  )
}

const codeBlock = (args: any) => `
  import RcSesSelect from '@/components/form/inputs/Select'

  const MyComponent = () => (

  const accordionController = useAccordionController({
    initialState: {
      basicInformation: {
        expanded: false,
        state: 'completed',
        title: 'Bazinė informacija',
      },
      serviceDetails: {
        expanded: true,
        state: 'active',
        title: 'Paslaugos užsakymas',
      },
      serviceIssuance: {
        expanded: false,
        state: 'pending',
        title: 'Išdavimas',
      },
      additionalServices: {
        expanded: false,
        state: 'pending',
        title: 'Reikalingos papildomos paslaugos',
      },
      termsAndConditions: {
        expanded: false,
        state: 'pending',
        title: 'Terminai ir sąlygos',
      },
    },
  })

    <RcSesServiceFormContainer
      accordionController={accordionController}
      slotProps={{ container: { maxWidth: 'md' } }}
    >
      <RcSesAccordion id='basicInformation' controller={accordionController}>
        <BasicInformationForm />
      </RcSesAccordion>

      <RcSesAccordion id='serviceDetails' controller={accordionController}>
        <BasicInformationForm />
      </RcSesAccordion>

      <RcSesAccordion id='serviceIssuance' controller={accordionController}>
        <BasicInformationForm />
      </RcSesAccordion>

      <RcSesAccordion id='additionalServices' controller={accordionController}>
        <BasicInformationForm />
      </RcSesAccordion>

      <RcSesAccordion id='termsAndConditions' controller={accordionController}>
        <BasicInformationForm />
      </RcSesAccordion>
    </RcSesServiceFormContainer>
  );`

export const Main = Template.bind({})
Main.args = {}

Main.parameters = {
  docs: {
    source: {
      type: 'dynamic',
      transform: (code: string, storyContext: StoryContext) =>
        codeBlock(storyContext.args),
    },
  },
}
