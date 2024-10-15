import { Box, Button, Typography, styled } from '@mui/material'
import React from 'react'
import { UseControllerProps, useController } from 'react-hook-form'

import UploadSimpleIcon from '@/assets/icons/UploadSimpleIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
})

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules'

type TFieldProps = React.InputHTMLAttributes<HTMLInputElement>
type ImmediateFieldProps = 'onChange' | 'onBlur' | 'disabled' | 'name'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'label' | 'errors'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TFieldProps, ImmediateFieldProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    slotProps?: {
      controller?: Partial<Omit<TControllerProps, ImmediateControllerProps>>
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesFileUpload(props: Props) {
  const { control, errors, label, rules, slotProps, ...fieldProps } = props
  const { name } = fieldProps

  // eslint-disable-next-line react/destructuring-assignment
  const id = props.id ?? crypto.randomUUID()

  const {
    field: { value, onChange, ...fieldControlProps },
  } = useController({
    control,
    name,
    rules,
  })

  const handleChange = (e: { target: { files: any } }) => onChange(e.target.files)

  return (
    <RcSesFormControlWrapper
      id={id}
      label={label}
      errors={errors}
      {...slotProps?.wrapper}
    >
      <Button
        color={errors ? 'error' : 'grey'}
        component='label'
        fullWidth
        role={undefined}
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          overflow: 'hidden',
          pl: 1.25,
          pr: 0,
          ':hover': {
            backgroundColor: 'white !important',
          },
        }}
        tabIndex={-1}
        variant='outlined'
      >
        <VisuallyHiddenInput
          id={id}
          type='file'
          {...fieldProps}
          {...fieldControlProps}
          onChange={handleChange}
        />

        <Box sx={{ fontWeight: 400 }}>
          {!!value && (value as FileList)?.item(0)?.name}
        </Box>

        <Box
          sx={{
            alignItems: 'center',
            backgroundColor: palette.grey['100'],
            borderColor: palette.grey['500'],
            borderLeftStyle: 'solid',
            borderLeftWidth: '1px',
            color: palette.grey['900'],
            display: 'flex',
            height: '42px',
            px: 2,
            ':hover': {
              backgroundColor: palette.grey['200'],
            },
          }}
        >
          <UploadSimpleIcon />
          <Typography variant='body1' sx={{ fontWeight: 600, ml: 1 }}>
            Įkelti failą
          </Typography>
        </Box>
      </Button>
    </RcSesFormControlWrapper>
  )
}

export default RcSesFileUpload
