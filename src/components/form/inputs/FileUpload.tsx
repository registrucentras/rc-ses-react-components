import { Box, Button, Typography, styled } from '@mui/material'
import React, { useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import { UploadSimpleIcon } from '@/assets/icons/phosphorIcons'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

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
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesFileUpload' })

  const { control, errors, label, rules, slotProps, ...fieldProps } = props
  const { name } = fieldProps

  const id = useMemo(() => fieldProps.id ?? uuidv4(), [fieldProps.id])

  const {
    field: { value, onChange, ...fieldControlProps },
  } = useController({
    control,
    name,
    rules,
    ...slotProps?.controller,
  })

  const handleChange = (e: { target: { files: any } }) => onChange(e.target.files)

  return (
    <RcSesFormControlWrapper
      id={id}
      errors={errors}
      label={label}
      required={!!rules?.required}
      {...slotProps?.wrapper}
    >
      <Button
        color={errors ? 'error' : 'grey'}
        component='label'
        fullWidth
        role={undefined}
        sx={{
          backgroundColor: `${colorTokens['surface-base']} !important`,
          borderRadius: borderTokens['radius-input'],
          display: 'flex',
          justifyContent: 'space-between',
          minHeight: '2.75rem',
          overflow: 'hidden',
          p: 0,
          pl: spacingRoleBasedTokens['space-10'],
          pr: 0,
          position: 'relative',

          'input:focus-visible ~ .faux-button::after': {
            content: '""',
            background: 'transparent',
            border: `${borderTokens['border-focus']} solid`,
            borderColor: colorTokens['border-focus'],
            borderRadius: borderTokens['radius-input'],
            height: 'calc(100% + 6px)',
            left: '-3px',
            position: 'absolute',
            top: '-3px',
            width: 'calc(100% + 6px)',
            zIndex: 1,
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
          className='faux-button'
          sx={{
            alignItems: 'center',
            alignSelf: 'stretch',
            backgroundColor: colorTokens['surface-sunken'],
            borderColor: colorTokens['border-default'],
            borderBottomRightRadius: `calc(${borderTokens['radius-input']} - ${borderTokens['stroke-1']})`,
            borderLeftStyle: 'solid',
            borderLeftWidth: borderTokens['stroke-1'],
            borderTopRightRadius: `calc(${borderTokens['radius-input']} - ${borderTokens['stroke-1']})`,
            color: colorTokens['text-default'],
            display: 'flex',
            flexShrink: 0,
            position: 'relative',
            px: spacingRoleBasedTokens['space-16'],
            ':hover': {
              backgroundColor: colorTokens['surface-muted'],
            },
          }}
        >
          <UploadSimpleIcon />
          <Typography
            variant='body1'
            sx={{ fontWeight: 600, ml: spacingRoleBasedTokens['space-8'] }}
          >
            {t('label')}
          </Typography>
        </Box>
      </Button>
    </RcSesFormControlWrapper>
  )
}

export default RcSesFileUpload
