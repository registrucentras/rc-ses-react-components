import { useForm } from 'react-hook-form'

import RcSesCheckbox from '@/components/form/inputs/Checkbox'
import RcSesNumberStepper from '@/components/form/inputs/NumberStepper'
import RcSesSelect from '@/components/form/inputs/Select'

import MultiStepFormModel from '../types/MultiStepFormModel'

function ServiceDetailsForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    register,
  } = useForm<MultiStepFormModel>({
    mode: 'all',
    defaultValues: {
      purpose: '',
      legalBasis: '',
      agreement: false,
      deadline: '',
      address: '',
      numberOfCopies: 0,
    },
  })

  return (
    // eslint-disable-next-line no-console
    <form onSubmit={handleSubmit(console.debug)} noValidate>
      <RcSesSelect
        id='purpose'
        name='purpose'
        control={control}
        rules={{ required: true }}
        label='Tikslas'
        errors={errors?.purpose}
        options={[
          { value: 'tikslas1', label: 'Tikslas 1' },
          { value: 'tikslas2', label: 'Tikslas 2' },
          { value: 'tikslas3', label: 'Tikslas 3' },
        ]}
      />

      <RcSesSelect
        id='legalBasis'
        name='legalBasis'
        control={control}
        rules={{ required: true }}
        label='Teisinis pagrindas'
        errors={errors?.legalBasis}
        options={[
          { value: 'teisinisPagrindas1', label: 'Teisinis pagrindas 1' },
          { value: 'teisinisPagrindas2', label: 'Teisinis pagrindas 2' },
          { value: 'teisinisPagrindas3', label: 'Teisinis pagrindas 3' },
        ]}
      />

      <RcSesCheckbox
        id='agreement'
        name='agreement'
        control={control}
        errors={errors?.agreement}
        label='Sutikimas'
        rules={{ required: true }}
      >
        Pagal užsakymą gautus duomenis naudosiu nurodytam duomenų tikslui ir šių duomenų
        neatskleisiu tretiesiems asmenims.
      </RcSesCheckbox>

      <RcSesSelect
        id='deadline'
        name='deadline'
        control={control}
        rules={{ required: true }}
        label='Terminas'
        errors={errors?.deadline}
        options={[
          { value: 'terminas-1', label: 'artimiausiu metu' },
          { value: 'terminas-2', label: 'iki mėnesio pabaigos' },
        ]}
      />

      <RcSesSelect
        id='address'
        name='address'
        control={control}
        rules={{ required: true }}
        label='Turto adresas'
        errors={errors?.address}
        options={[
          {
            value: 'lvivo-g-7',
            label: 'Lvivo g. 7',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
          {
            value: 'lvivo-g-9',
            label: 'Lvivo g. 9',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
          {
            value: 'lvivo-g-11',
            label: 'Lvivo g. 11',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
          {
            value: 'lvivo-g-11a',
            label: 'Lvivo g. 11A',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
          {
            value: 'lvivo-g-12',
            label: 'Lvivo g. 12',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
          {
            value: 'lvivo-g-13',
            label: 'Lvivo g. 13',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
          {
            value: 'lvivo-g-13a',
            label: 'Lvivo g. 13A',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
          {
            value: 'lvivo-g-13b',
            label: 'Lvivo g. 13B',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
          {
            value: 'lvivo-g-1c',
            label: 'Lvivo g. 13C',
            description: 'Vilnius, Vilniaus m. sav. 09313',
          },
        ]}
      />

      <RcSesNumberStepper
        id='numberOfCopies'
        name='numberOfCopies'
        control={control}
        displayStepperControls
        errors={errors?.numberOfCopies}
        label='Egzempliorių skaičius'
        rules={{ required: false, min: 0, max: 10 }}
        slotProps={{ wrapper: { labelSubtitle: '(neprivaloma)' } }}
      />
    </form>
  )
}

export default ServiceDetailsForm
