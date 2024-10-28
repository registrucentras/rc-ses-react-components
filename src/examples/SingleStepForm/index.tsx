import { Divider, Typography } from '@mui/material'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

import RcSesAccordion from '@/components/common/Accordion'
import useAccordionController from '@/components/common/Accordion/hooks/useAccordionController'
import RcSesButtonWithPopover from '@/components/common/Button/ButtonWithPopover'
import RcSesCheckbox from '@/components/form/inputs/Checkbox'
import RcSesDatepicker from '@/components/form/inputs/Datepicker'
import RcSesFileUpload from '@/components/form/inputs/FileUpload'
import RcSesNumberStepper from '@/components/form/inputs/NumberStepper'
import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup'
import RcSesSearchableField from '@/components/form/inputs/SearchableField'
import RcSesSelect from '@/components/form/inputs/Select'
import RcSesTextField from '@/components/form/inputs/TextField'
import ServiceFormActions from '@/components/layout/ServiceFormActions'
import ServiceFormContainer from '@/components/layout/ServiceFormContainer'
import ServiceHeader from '@/components/layout/ServiceHeader'
import ServicePage from '@/components/layout/ServicePage'

import ObjectIdentifierSearchModal from './components/ObjectIdentifierSearchModal'
import type SingleStepFormModel from './types/SingleStepFormModel'

function SingleStepForm() {
  const navigate = useNavigate()

  const accordionController = useAccordionController({
    initialState: {
      form: {
        canToggle: false,
        expanded: true,
        state: 'active',
        title: 'Paslaugos užsakymo forma',
      },
    },
  })

  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<SingleStepFormModel>({
    mode: 'all',
    defaultValues: {
      text: '',
      multilineText: '',
      selection: '',
      phoneNo: '',
      searchable: '',
      date: null,
      dateInterval: '',
      countable: 0,
      agreement: '',
      fileUpload: '',
      anotherShortText: '',
      radioSelection1: '',
      radioSelection2: '',
      radioSelection3: '',
      radioSelection4: '',
      fileUploadMulti: '',
    },
  })

  return (
    <ServicePage>
      <ServiceHeader
        breadcrumbsProps={{
          path: [
            { label: 'Pagrindinis', path: '/' },
            { label: 'Vieno žingsnio formos pavyzdys', path: '/sample-form-single-step' },
          ],
        }}
        title='Nekilnojamojo turto registro išrašas pagal nurodytą turto adresą'
      >
        <Typography variant='body1'>
          Šiame puslapyje Jūs galite užsisakyti Nekilnojamojo turto registro išrašus,
          pažymas bei kitus dokumentus. Užsakytą NTR išrašą, pažymą ar kitą dokumentą
          galėsite gauti elektroniniu būdu arba atsiimti pasirinktame VĮ Registrų centro
          padalinyje.
        </Typography>
      </ServiceHeader>

      <ServiceFormContainer accordionController={accordionController}>
        <RcSesAccordion id='form' controller={accordionController}>
          <form onSubmit={handleSubmit(console.debug)} noValidate>
            <RcSesTextField
              label='Trumpas tekstas'
              errors={errors?.text}
              {...register('text', { required: true })}
              slotProps={{
                wrapper: {
                  fieldSuffix: (
                    <RcSesButtonWithPopover
                      popoverHeader='Viską paaiškinanti antraštė'
                      popoverContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
                    />
                  ),
                },
              }}
            />

            <RcSesTextField
              label='Ilgas tekstas'
              errors={errors?.multilineText}
              multiline
              {...register('text', { required: true })}
              slotProps={{
                wrapper: {
                  fieldSuffix: (
                    <RcSesButtonWithPopover
                      popoverHeader='Viską paaiškinanti antraštė'
                      popoverContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard."
                    />
                  ),
                },
              }}
            />

            <RcSesSearchableField
              control={control}
              id='searchable'
              errors={errors?.searchable}
              label='Unikalus daikto Nr.'
              name='searchable'
              rules={{ required: true }}
              ModalComponent={ObjectIdentifierSearchModal}
              slotProps={{
                wrapper: {
                  fieldSuffix: (
                    <RcSesButtonWithPopover popoverContent="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard." />
                  ),
                },
              }}
            />

            <RcSesSelect
              id='selection'
              name='selection'
              control={control}
              rules={{ required: true }}
              label='Terminas'
              errors={errors?.selection}
              options={[
                { value: 'pasirinkimas-1', label: 'Pasirinkimas #1' },
                { value: 'pasirinkimas-2', label: 'Pasirinkimas #2' },
              ]}
            />

            <RcSesDatepicker
              id='date'
              name='date'
              clearable
              control={control}
              rules={{ required: true }}
              label='Terminas'
              errors={errors?.date}
            />

            <RcSesNumberStepper
              id='countable'
              name='countable'
              control={control}
              displayStepperControls
              errors={errors?.countable}
              label='Skaičius'
              rules={{ required: true, min: 0, max: 10 }}
            />

            <RcSesCheckbox
              id='agreement'
              errors={errors?.agreement}
              label='Sutikimas'
              {...register('agreement', { required: true })}
            >
              Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių
              duomenų neatskleisiu tretiesiems asmenims.
            </RcSesCheckbox>

            <RcSesFileUpload
              id='fileUpload'
              name='fileUpload'
              control={control}
              rules={{ required: true }}
              label='Failo įkėlimas'
              errors={errors?.fileUpload}
              slotProps={{
                wrapper: { labelSubtitle: 'Tinkami formatai: .doc, .xdoc, .pdf, .pages' },
              }}
            />

            <RcSesFileUpload
              id='fileUpload2'
              name='fileUpload'
              control={control}
              rules={{ required: true }}
              label='Failo įkėlimas'
              errors={errors?.fileUpload}
              slotProps={{
                wrapper: {
                  fieldSuffix: (
                    <RcSesButtonWithPopover popoverContent='Tinkami formatai: .doc, .xdoc, .pdf, .pages' />
                  ),
                },
              }}
            />

            <Divider />

            <RcSesRadioButtonGroup
              id='radioSelection1'
              name='radioSelection1'
              control={control}
              rules={{ required: true }}
              label='Pasirinkimas #1'
              errors={errors?.radioSelection1}
              hideNativeRadio
              options={[
                { label: 'El. paštu', value: 'email' },
                { label: 'Padalinyje', value: 'branch' },
                { label: 'Paštu Lietuvoje', value: 'mail-local' },
                { label: 'Paštu užsienyje', value: 'mail-abroad' },
              ]}
            />

            <RcSesRadioButtonGroup
              id='radioSelection2'
              name='radioSelection2'
              control={control}
              rules={{ required: true }}
              label='Pasirinkimas #2'
              errors={errors?.radioSelection2}
              options={[
                { label: 'El. paštu', value: 'email' },
                { label: 'Padalinyje', value: 'branch' },
                { label: 'Paštu Lietuvoje', value: 'mail-local' },
                { label: 'Paštu užsienyje', value: 'mail-abroad' },
              ]}
            />

            <RcSesRadioButtonGroup
              id='radioSelection3'
              name='radioSelection3'
              control={control}
              rules={{ required: true }}
              label='Pasirinkimas #3'
              errors={errors?.radioSelection3}
              options={[
                { label: 'El. paštu', value: 'email' },
                { label: 'Padalinyje', value: 'branch' },
                { label: 'Paštu Lietuvoje', value: 'mail-local' },
                { label: 'Paštu užsienyje', value: 'mail-abroad' },
              ]}
              variant='filled'
            />

            <RcSesRadioButtonGroup
              id='radioSelection4'
              name='radioSelection4'
              control={control}
              rules={{ required: true }}
              label='Pasirinkimas #4'
              errors={errors?.radioSelection4}
              options={[
                { label: 'El. paštu', value: 'email' },
                { label: 'Padalinyje', value: 'branch' },
                { label: 'Paštu Lietuvoje', value: 'mail-local' },
                { label: 'Paštu užsienyje', value: 'mail-abroad' },
              ]}
              variant='outlined'
            />
          </form>
        </RcSesAccordion>

        <ServiceFormActions
          onDiscard={() => navigate('/')}
          onSaveDraft={() => navigate('/')}
          onSubmit={() => navigate('/')}
        />
      </ServiceFormContainer>
    </ServicePage>
  )
}

export default SingleStepForm
