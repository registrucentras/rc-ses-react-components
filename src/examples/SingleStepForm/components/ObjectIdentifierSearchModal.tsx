import {
  Button,
  DialogActions,
  Divider,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'
import Grid from '@mui/material/Grid'
import React from 'react'
import { useForm } from 'react-hook-form'

import RcSesTextField from '@/components/form/inputs/TextField'

type FormModel = {
  city: string
  street: string
  addressNo: string
  housingNo: string
  aptNo: string
}

type Props = {
  open: boolean
  onSubmit: (value: string) => void
  onClose: () => void
}
function ObjectIdentifierSearchModal({ open, onSubmit, onClose }: Props) {
  const [results, setResults] = React.useState<
    {
      regNo: string
      type: string
      uniqueIdentifier: string
      address: string
    }[]
  >()

  const {
    handleSubmit,
    formState: { errors },
    register,
    reset,
  } = useForm<FormModel>({
    mode: 'all',
    defaultValues: {
      city: '',
      street: '',
      addressNo: '',
      housingNo: '',
      aptNo: '',
    },
  })

  const handleOnSearch = () => {
    setResults([
      {
        regNo: '44/446848',
        type: 'Mišrus pastatas',
        uniqueIdentifier: '1099-2018-8012',
        address: 'Vilnius, Vydūno g. 17',
      },
    ])
  }

  const handleOnReset = () => {
    setResults([])
    reset()
  }

  const handleOnSubmit = () => {
    setResults([])
    reset()
    onSubmit('1099-2018-8012')
    onClose()
  }

  return (
    <Dialog onClose={onClose} open={open} maxWidth='md'>
      <DialogTitle>Paieška pagal adresą</DialogTitle>

      <DialogContent>
        <form onSubmit={handleSubmit(handleOnSearch)} noValidate>
          <Grid container columnSpacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12} md={6}>
              <RcSesTextField
                label='Miestas'
                errors={errors?.city}
                {...register('city', { required: true })}
                slotProps={{ wrapper: { labelOnTop: true } }}
              />
            </Grid>

            <Grid item xs={12} md={6}>
              <RcSesTextField
                label='Gatvė'
                errors={errors?.street}
                {...register('street', { required: true })}
                slotProps={{ wrapper: { labelOnTop: true } }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <RcSesTextField
                label='Pastato nr.'
                errors={errors?.addressNo}
                {...register('addressNo', { required: true })}
                slotProps={{ wrapper: { labelOnTop: true } }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <RcSesTextField
                label='Korpuso nr.'
                errors={errors?.housingNo}
                {...register('housingNo', { required: true })}
                slotProps={{ wrapper: { labelOnTop: true } }}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <RcSesTextField
                label='Patalpos nr.'
                errors={errors?.aptNo}
                {...register('aptNo', { required: true })}
                slotProps={{ wrapper: { labelOnTop: true } }}
              />
            </Grid>
          </Grid>

          <Stack justifyContent='flex-end' direction='row' spacing={1}>
            <Button type='submit'>Ieškoti</Button>
            <Button color='grey' variant='outlined' onClick={handleOnReset}>
              Išvalyti
            </Button>
          </Stack>
        </form>

        <Divider />

        {!!results?.length && (
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Reg.&nbsp;Nr.</TableCell>
                  <TableCell>Daiktas(-ai)</TableCell>
                  <TableCell>Unikalus&nbsp;Nr.</TableCell>
                  <TableCell>Adresas</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results?.map((row) => (
                  <TableRow key={row.regNo}>
                    <TableCell component='th' scope='row'>
                      {row.regNo}
                    </TableCell>
                    <TableCell>{row.type}</TableCell>
                    <TableCell>{row.uniqueIdentifier}</TableCell>
                    <TableCell>{row.address}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DialogContent>

      <DialogActions>
        <Button disabled={!results?.length} onClick={handleOnSubmit}>
          Pridėti
        </Button>
        <Button color='error' variant='outlined' onClick={onClose}>
          Atšaukti
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default ObjectIdentifierSearchModal
