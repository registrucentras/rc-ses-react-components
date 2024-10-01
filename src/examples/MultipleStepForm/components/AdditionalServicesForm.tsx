import { useForm } from 'react-hook-form'

import RcSesTextField from '@/components/form/inputs/TextField'

type FormModel = {
  additionalServices: string
}

function AdditionalServicesForm() {
  const {
    formState: { errors },
    register,
  } = useForm<FormModel>({
    defaultValues: {
      additionalServices: 'Tekstinė reikšmė',
    },
  })

  return (
    <RcSesTextField
      id='serviceName'
      label='Paslaugos pavadinimas'
      errors={errors?.additionalServices}
      {...register('additionalServices', { required: true, disabled: true })}
    />
  )
}

export default AdditionalServicesForm
