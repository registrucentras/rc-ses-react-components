import { Box, IconButton, Stack, Typography, styled } from '@mui/material'
import React, { useCallback, useMemo } from 'react'
import type { DropzoneOptions } from 'react-dropzone'
import { useDropzone } from 'react-dropzone'
import { UseControllerProps, useController } from 'react-hook-form'
import { Trans, useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { UploadSimpleIcon, XCircleFillIcon } from '@/assets/icons/phosphorIcons'
import IconWithCircularBackground from '@/components/common/IconWithCircularBackground'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens } from '@/theme/typographyTokens'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../components/FormControlWrapper'

const StyledCloseIcon = styled(XCircleFillIcon)({
  'path fill': colorTokens['text-default'],
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
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesFileDropzone' })

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
    ...slotProps?.controller,
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

  const onRemoveFile = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
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
            if (fieldProps.disabled) return colorTokens['surface-base']
            return isDragActive
              ? colorTokens['surface-brand-subtle']
              : colorTokens['surface-base']
          },
          borderColor: () => {
            if (errors) return colorTokens['status-error-border']
            if (fieldProps.disabled) return colorTokens['border-subtle']
            return isDragActive
              ? colorTokens['border-focus']
              : colorTokens['border-default']
          },
          borderRadius: borderTokens['radius-input'],
          borderStyle: 'dashed',
          borderWidth: borderTokens['stroke-1'],
          px: `calc(${spacingRoleBasedTokens['space-40']} + ${spacingRoleBasedTokens['space-4']})`,
          py: spacingRoleBasedTokens['space-40'],

          '&:hover': {
            borderColor: () => {
              if (fieldProps.disabled) return colorTokens['border-subtle']
              return colorTokens['border-focus']
            },
            cursor: fieldProps.disabled ? 'default' : 'pointer',
          },
        }}
      >
        <input {...getInputProps()} id={id} name={fieldControlProps.name} />

        <Stack
          direction='row'
          sx={{ alignItems: 'center', gap: spacingRoleBasedTokens['space-16'] }}
        >
          <IconWithCircularBackground
            color={!fieldProps.disabled && isDragActive ? 'primary' : 'grey'}
            bgShade={!fieldProps.disabled && isDragActive ? '100' : '50'}
            iconShade={fieldProps.disabled ? '500' : '900'}
            Icon={UploadSimpleIcon}
          />

          <Stack
            sx={{
              gap: spacingRoleBasedTokens['space-4'],
              flexGrow: 1,
            }}
          >
            {hasValidFileSelection && (
              <Stack>
                {value.map((file: File, index) => (
                  <Stack
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    direction='row'
                    sx={{ alignItems: 'center', gap: spacingRoleBasedTokens['space-8'] }}
                  >
                    <Typography
                      sx={{
                        color: fieldProps.disabled
                          ? colorTokens['text-secondary']
                          : colorTokens['text-default'],
                        fontSize: typographyTokens['font-size-body-small'],
                        fontWeight: 600,
                        lineHeight: typographyTokens['line-height-body-small'],
                      }}
                    >
                      {file.name}
                      <Typography
                        component='span'
                        sx={{
                          color: colorTokens['text-secondary'],
                          fontSize: typographyTokens['font-size-body-micro'],
                          ml: spacingRoleBasedTokens['space-8'],
                        }}
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
                    color: fieldProps.disabled
                      ? colorTokens['text-disabled']
                      : colorTokens['text-default'],
                    fontWeight: 600,
                  }}
                >
                  <Trans t={t} i18nKey='label'>
                    Nutempkite failą čia arba
                    <Typography
                      component='span'
                      sx={{
                        color: fieldProps.disabled
                          ? colorTokens['text-disabled']
                          : colorTokens['text-link'],
                        fontSize: typographyTokens['font-size-body-small'],
                        fontWeight: 600,
                        lineHeight: typographyTokens['line-height-body-small'],
                        textDecoration: 'underline',
                      }}
                    >
                      įkelkite
                    </Typography>
                    iš kompiuterio
                  </Trans>
                </Typography>

                {!!description && (
                  <Typography
                    sx={{
                      color: fieldProps.disabled
                        ? colorTokens['text-disabled']
                        : colorTokens['text-secondary'],
                      fontSize: typographyTokens['font-size-body-micro'],
                      fontStyle: 'italic',
                      lineHeight: typographyTokens['line-height-body-micro'],
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
