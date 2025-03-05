import { Box, IconButton, Stack, Typography, styled } from '@mui/material'
import React, { useCallback, useMemo } from 'react'
import { DropzoneOptions, useDropzone } from 'react-dropzone'
import { UseControllerProps, useController } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import UploadSimpleIcon from '@/assets/icons/UploadSimpleIcon'
import XCircleFillIcon from '@/assets/icons/XCircleFillIcon'
import IconWithCircularBackground from '@/components/common/IconWithCircularBackground'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

const StyledCloseIcon = styled(XCircleFillIcon)({
  'path fill': palette.grey[950],
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
      dropzone?: Partial<DropzoneOptions>
      field?: Partial<Omit<TFieldProps, ImmediateFieldProps>>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesFileDropzone(props: Props) {
  const { control, errors, label, rules, slotProps, ...fieldProps } = props
  const { name } = fieldProps
  const { description, ...wrapperProps } = slotProps?.wrapper ?? {}

  const id = useMemo(() => fieldProps.id ?? uuidv4(), [fieldProps.id])

  const {
    field: { value, onChange, ...fieldControlProps },
  } = useController({
    control,
    name,
    rules,
  })

  const onDrop = useCallback((acceptedFiles: Blob[]) => {
    onChange(acceptedFiles)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    ...slotProps?.dropzone,
  })

  const hasValidFileSelection = value && Array.isArray(value) && value.length > 0

  const onRemoveFile = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    index: number,
  ) => {
    e.preventDefault()
    e.stopPropagation()

    const newValue = [...value]
    newValue.splice(index, 1)
    onChange(newValue)
  }

  return (
    <RcSesFormControlWrapper
      id={id}
      errors={errors}
      label={label}
      required={!!rules?.required}
      {...wrapperProps}
    >
      <Box
        {...getRootProps()}
        sx={{
          backgroundColor: () => {
            if (fieldProps.disabled) return 'white'
            return isDragActive ? palette.primary[50] : 'white'
          },
          borderColor: () => {
            if (errors) return palette.error[600]
            if (fieldProps.disabled) return palette.grey[300]
            return isDragActive ? palette.primary[500] : palette.grey[500]
          },
          borderRadius: '.1875rem',
          borderStyle: 'dashed',
          borderWidth: 1,
          px: 5.5,
          py: 5,

          '&:hover': {
            borderColor: () => {
              if (fieldProps.disabled) return palette.grey[300]
              return palette.primary[300]
            },
            cursor: fieldProps.disabled ? 'default' : 'pointer',
          },
        }}
      >
        <input {...getInputProps()} name={fieldControlProps.name} />

        <Stack direction='row' sx={{ alignItems: 'center', gap: 2 }}>
          <IconWithCircularBackground
            color={!fieldProps.disabled && isDragActive ? 'primary' : 'grey'}
            bgShade={!fieldProps.disabled && isDragActive ? '100' : '50'}
            iconShade={fieldProps.disabled ? '500' : '900'}
            Icon={UploadSimpleIcon}
          />

          <Stack gap={0.5} sx={{ flexGrow: 1 }}>
            {hasValidFileSelection && (
              <Stack>
                {value.map((file: File, index) => (
                  <Stack
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    direction='row'
                    sx={{ alignItems: 'center', gap: 1 }}
                  >
                    <Typography
                      sx={{
                        color: palette.grey[fieldProps.disabled ? 500 : 900],
                        fontSize: '.875rem',
                        fontWeight: 600,
                        lineHeight: '1.125rem',
                      }}
                    >
                      {file.name}
                      <Typography
                        component='span'
                        sx={{ color: palette.grey[500], fontSize: '.75rem', ml: 1 }}
                      >
                        ({Math.round(file.size / 1024)} KB)
                      </Typography>
                    </Typography>

                    <Box sx={{ ml: 'auto' }}>
                      <IconButton size='small' onClick={(e) => onRemoveFile(e, index)}>
                        <StyledCloseIcon />
                      </IconButton>
                    </Box>
                  </Stack>
                ))}
              </Stack>
            )}

            {!hasValidFileSelection && (
              <>
                <Typography
                  sx={{
                    color: palette.grey[fieldProps.disabled ? 500 : 900],
                    fontWeight: 600,
                  }}
                >
                  Nutempkite failą čia arba{' '}
                  <Typography
                    component='span'
                    sx={{
                      color: fieldProps.disabled ? palette.grey[500] : 'primary.main',
                      fontSize: '.875rem',
                      fontWeight: 600,
                      lineHeight: '1.125rem',
                      textDecoration: 'underline',
                    }}
                  >
                    įkelkite
                  </Typography>{' '}
                  iš kompiuterio
                </Typography>

                {!!description && (
                  <Typography
                    sx={{
                      color: palette.grey[fieldProps.disabled ? 500 : 600],
                      fontSize: '.75rem',
                      fontStyle: 'italic',
                      lineHeight: '1rem',
                    }}
                  >
                    {description}
                  </Typography>
                )}
              </>
            )}
          </Stack>
        </Stack>
      </Box>
    </RcSesFormControlWrapper>
  )
}

export default RcSesFileDropzone
