import { Box, Button, TextField, Typography } from '@mui/material'
import type { Meta, StoryObj } from '@storybook/react-vite'
import { ComponentProps, FormEvent, useState } from 'react'

import RcSesCardFooter from '@/components/common/CardShell/CardFooter'
import RcSesStepCard from '@/components/common/StepCard'
import FieldView from '@/components/storybook/FieldView'
import Fields from '@/components/storybook/Fields'

const STEP_COUNT = 3

const meta: Meta<typeof RcSesStepCard> = {
  title: 'Molecules/StepCard',
  component: RcSesStepCard,
  tags: ['autodocs'],
  parameters: {
    viewport: {
      options: {
        mobile375: { name: 'Mobile 375', styles: { height: '900px', width: '375px' } },
      },
    },
  },
  args: {
    title: 'Antraštės tekstas',
    description: 'Papildomas aprašymo tekstas',
  },
}

export default meta

const DemoContent = () => (
  <Box
    sx={{
      alignItems: 'center',
      backgroundColor: 'grey.100',
      border: '1px dashed',
      borderColor: 'grey.300',
      borderRadius: 1,
      display: 'flex',
      height: 140,
      justifyContent: 'center',
      width: '100%',
    }}
  >
    <Typography variant='body2'>Turinys (Body slot)</Typography>
  </Box>
)

type Story = StoryObj<typeof RcSesStepCard>

type StepCardDemoProps = Omit<
  ComponentProps<typeof RcSesStepCard>,
  'activeStep' | 'stepCount' | 'onNext' | 'onBack' | 'onCancel'
>

function StepCardDemo(args: StepCardDemoProps) {
  const [activeStep, setActiveStep] = useState(0)

  return (
    <Fields>
      <FieldView>
        <RcSesStepCard
          {...args}
          activeStep={activeStep}
          stepCount={STEP_COUNT}
          onNext={() => setActiveStep((prev) => Math.min(prev + 1, STEP_COUNT - 1))}
          onBack={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
          onCancel={() => setActiveStep(0)}
        >
          <DemoContent />
        </RcSesStepCard>
      </FieldView>
    </Fields>
  )
}

/** Interactive wizard: walks through Atšaukti/Tęsti → Atgal/Tęsti → Atgal/Į krepšelį. */
export const Default: Story = {
  render: (args) => <StepCardDemo {...args} />,
}

/** First step → footer shows `Atšaukti` + `Tęsti`. */
export const FirstStep: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesStepCard {...args} activeStep={0} stepCount={STEP_COUNT}>
          <DemoContent />
        </RcSesStepCard>
      </FieldView>
    </Fields>
  ),
}

/** Middle step → footer shows `Atgal` + `Tęsti`. */
export const MiddleStep: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesStepCard {...args} activeStep={1} stepCount={STEP_COUNT}>
          <DemoContent />
        </RcSesStepCard>
      </FieldView>
    </Fields>
  ),
}

/** Last step → footer shows `Atgal` + `Suma be PVM` total + `Pridėti į krepšelį`. */
export const LastStep: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesStepCard
          {...args}
          activeStep={STEP_COUNT - 1}
          stepCount={STEP_COUNT}
          totalPrice='4,01 €'
        >
          <DemoContent />
        </RcSesStepCard>
      </FieldView>
    </Fields>
  ),
}

/**
 * Custom footer → the `footer` prop replaces the default step-position row
 * entirely. Use when a step needs bespoke actions.
 */
export const CustomFooter: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesStepCard
          {...args}
          activeStep={1}
          stepCount={STEP_COUNT}
          footer={
            <RcSesCardFooter align='between'>
              <Button variant='contained' color='grey'>
                Išsaugoti juodraštį
              </Button>
              <Button variant='contained'>Pateikti peržiūrai</Button>
            </RcSesCardFooter>
          }
        >
          <DemoContent />
        </RcSesStepCard>
      </FieldView>
    </Fields>
  ),
}

function FormSubmitDemo(args: StepCardDemoProps) {
  const [activeStep, setActiveStep] = useState(0)
  const [saving, setSaving] = useState(false)
  const isLastStep = activeStep === STEP_COUNT - 1
  const formId = `step-${activeStep}-form`

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSaving(true)
    setTimeout(() => {
      setSaving(false)
      setActiveStep((prev) => Math.min(prev + 1, STEP_COUNT - 1))
    }, 1500)
  }

  return (
    <Fields>
      <FieldView>
        <RcSesStepCard
          {...args}
          activeStep={activeStep}
          stepCount={STEP_COUNT}
          totalPrice='4,01 €'
          onBack={() => setActiveStep((prev) => Math.max(prev - 1, 0))}
          actions={{
            next: {
              form: formId,
              loading: saving,
              ...(isLastStep ? { label: 'Pateikti', icon: null } : {}),
            },
            back: { disabled: saving },
            cancel: false,
          }}
        >
          <Box
            component='form'
            id={formId}
            key={formId}
            onSubmit={handleSubmit}
            sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}
          >
            <TextField label='Vardas' size='small' fullWidth required />
            <TextField label='Pavardė' size='small' fullWidth required />
          </Box>
        </RcSesStepCard>
      </FieldView>
    </Fields>
  )
}

/**
 * Form wizard without payments. Each step owns its `<form>`, and
 * `actions.next.form` makes the CTA that form's submit button, so Enter in a
 * field submits too. No `Atšaukti` on the first step (`cancel: false`); the
 * last step is `Pateikti` with no cart icon, next to the total price.
 */
export const FormSubmit: Story = {
  render: (args) => <FormSubmitDemo {...args} />,
}

/**
 * Last step with a custom CTA → `actions.next = { label: 'Pateikti', icon: null }`
 * swaps the cart CTA for a neutral one in flows without a basket; the price
 * summary stays.
 */
export const LastStepCustomCTA: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesStepCard
          {...args}
          activeStep={STEP_COUNT - 1}
          stepCount={STEP_COUNT}
          totalPriceLabel='Suma (2 × 5,00 €)'
          totalPrice='10,00 €'
          actions={{ next: { label: 'Patvirtinti', icon: null } }}
        >
          <DemoContent />
        </RcSesStepCard>
      </FieldView>
    </Fields>
  ),
}

/**
 * Last-step footer pinned at a 375px viewport - the trailing CTA + price
 * summary stack above the leading button and the price row goes inline, per
 * the mobile Figma spec.
 */
export const MobileViewport: Story = {
  render: (args) => (
    <Fields>
      <FieldView>
        <RcSesStepCard
          {...args}
          activeStep={STEP_COUNT - 1}
          stepCount={STEP_COUNT}
          totalPrice='4,01 €'
        >
          <DemoContent />
        </RcSesStepCard>
      </FieldView>
    </Fields>
  ),
  // Two separate mechanisms, deliberately: the tag sets Playwright's browser
  // width for the visual baseline, the global sets the canvas iframe width for
  // anyone reviewing in Storybook. Docs pages render stories inline at the
  // container's width, where neither applies, so this one is kept out of the
  // docs page rather than showing a desktop card under a mobile heading.
  tags: ['viewport-375', '!autodocs'],
  globals: { viewport: { value: 'mobile375' } },
}
