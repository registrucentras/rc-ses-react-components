import { useForm } from 'react-hook-form'

import RcSesAlert from '@/components/common/Alert'
import RcSesRadioButtonGroup from '@/components/form/inputs/RadioButtonGroup'
import RcSesSelect from '@/components/form/inputs/Select'

type FormModel = {
  issuanceMethod: string
  rcBranch: string
}

function ServiceIssuanceForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      issuanceMethod: '',
      rcBranch: '',
    },
  })

  return (
    // eslint-disable-next-line no-console
    <form onSubmit={handleSubmit(console.debug)} noValidate>
      <RcSesAlert severity='warning'>
        Primename, kad atsiimant rezultatus padalinyje su savimi privalote turėti asmens
        tapatybę patvirtinantį dokumentą.
      </RcSesAlert>

      <RcSesRadioButtonGroup
        id='issuanceMethod'
        name='issuanceMethod'
        control={control}
        rules={{ required: true }}
        label='Išdavimo būdas'
        errors={errors?.issuanceMethod}
        options={[
          { label: 'El. paštu', value: 'email' },
          { label: 'Padalinyje', value: 'branch' },
          { label: 'Paštu Lietuvoje', value: 'mail-local' },
          { label: 'Paštu užsienyje', value: 'mail-abroad' },
        ]}
        hideNativeRadio
      />

      <RcSesSelect
        id='rcBranch'
        name='rcBranch'
        control={control}
        rules={{ required: true }}
        label='RC padalinys'
        slotProps={{
          wrapper: {
            description: (
              <>
                Informacija apie{' '}
                <a
                  href='https://www.registrucentras.lt/p/1218'
                  target='_blank'
                  rel='noreferrer'
                >
                  RC padalinius
                </a>
              </>
            ),
          },
        }}
        errors={errors?.rcBranch}
        options={[
          {
            label: 'Lvivo g. 25-101',
            value: 'vilnius',
            description: '09320 Vilnius',
          },
          {
            label: 'E. Ožeškienės g. 12',
            value: 'kaunas',
            description: '44252 Kaunas, (įėjimas iš L. Sapiegos gatvės pusės)',
          },
          {
            label: 'Baltijos pr. 123-1',
            value: 'klaipeda',
            description: '93224 Klaipėda',
          },
          {
            label: 'Baltijos pr. 123-1',
            value: 'siauliai',
            description: '78167 Šiauliai',
          },
          {
            label: 'Baltijos pr. 123-1',
            value: 'panevezys',
            description: '35173 Panevėžys',
          },
        ]}
      />
    </form>
  )
}

export default ServiceIssuanceForm
