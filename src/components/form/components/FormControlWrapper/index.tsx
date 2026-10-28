import { Box, FormControl, FormHelperText, FormLabel, useMediaQuery } from '@mui/material'
import { FieldError } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import '@/i18n/i18n'
import { colorTokens as color } from '@/theme/colorTokens'
import theme from '@/theme/light'
import { spacingRoleBasedTokens as space } from '@/theme/spacingRoleBasedTokens'
import { typographyTokens as typography } from '@/theme/typographyTokens'

import FieldSuffix from './components/FieldSuffix'
import { formControlDesktopLabelWidth } from './const/FormControlLayoutVariables'

// Read the rendered input state so every wrapper can share disabled text styling
// without adding a prop or changing any field's disabled behavior.
const disabledInput =
  '&:has(.rc-ses-form-field-wrapper .MuiInputBase-root.Mui-disabled, .rc-ses-form-field-wrapper .MuiPickersInputBase-root.Mui-disabled)'

interface Props {
  children: React.ReactNode
  className?: string
  description?: React.ReactNode
  errors?: FieldError | undefined
  fieldSuffix?: React.ReactNode
  hideLabel?: boolean
  id?: string
  label?: React.ReactNode
  labelSubtitle?: React.ReactNode
  labelOnTop?: boolean
  required?: boolean
}

function RcSesFormControlWrapper({
  children,
  className = undefined,
  description = undefined,
  errors = undefined,
  fieldSuffix = undefined,
  hideLabel = false,
  id,
  label = undefined,
  labelSubtitle = undefined,
  labelOnTop = false,
  required = false,
}: Props) {
  const { t } = useTranslation('input', {
    keyPrefix: 'components.RcSesFormControlWrapper',
  })
  const upMd = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <FormControl
      className={className}
      error={!!errors}
      sx={{
        my: space['space-8'],
        width: '100%',
        [`${disabledInput} > .rc-ses-form-control-wrapper > .MuiFormLabel-root, ${disabledInput} > [aria-live="polite"] > .MuiFormHelperText-root`]:
          {
            color: color['text-disabled'],
          },
      }}
    >
      <Box
        className='rc-ses-form-control-wrapper'
        sx={{
          alignItems: { xs: 'stretch', sm: labelOnTop ? 'stretch' : 'center' },
          display: 'flex',
          flexDirection: { xs: 'column', sm: labelOnTop ? 'column' : 'row' },
          width: '100%',
        }}
      >
        {hideLabel !== true && (
          <FormLabel
            htmlFor={id}
            sx={{
              ...(labelOnTop && {
                fontSize: typography['font-size-body-caption'],
                lineHeight: typography['line-height-body-caption'],
                // The theme's md weight is a media rule, which outranks plain sx.
                '&&': { fontWeight: 400 },
              }),
              flex: {
                xs: '0 0 0%',
                sm: labelOnTop ? '0 0 0%' : `0 0 ${formControlDesktopLabelWidth}`,
              },
              marginBottom: {
                xs: space['space-4'],
                sm: labelOnTop ? space['space-4'] : space['space-0'],
              },
              pr: space['space-24'],
              textAlign: { xs: 'left', sm: labelOnTop ? 'left' : 'right' },
            }}
          >
            {label}
            {!!label && required === true && (
              <span aria-hidden className='MuiFormLabel-asterisk'>
                *
              </span>
            )}
            {!upMd && !!fieldSuffix && (
              <FieldSuffix
                sx={{
                  display: 'inline',
                  verticalAlign: 'text-bottom',
                  svg: { height: '14px', width: '14px' },
                }}
              >
                {fieldSuffix}
              </FieldSuffix>
            )}
            {!!labelSubtitle && (
              <span className='rc-ses-label-subtitle'>{labelSubtitle}</span>
            )}
          </FormLabel>
        )}

        <Box
          sx={{ flex: '1 1 0%', position: 'relative' }}
          className='rc-ses-form-field-wrapper'
        >
          {children}
          <FieldSuffix
            sx={{
              display: { xs: 'none', md: 'block' },
              position: 'absolute',
              left: '100%',
              ml: 0.5,
              top: '.5rem',
              svg: { height: '18px', width: '18px' },
            }}
          >
            {fieldSuffix}
          </FieldSuffix>
        </Box>
      </Box>

      <Box
        aria-live='polite'
        sx={{
          flex: '1 1 0%',
          ml: { sm: labelOnTop || hideLabel ? 0 : formControlDesktopLabelWidth },
        }}
      >
        {!!description && <FormHelperText>{description}</FormHelperText>}

        {!!errors && (
          <FormHelperText id={`${id}-errors`} aria-errormessage={id} error>
            {errors.type === 'required' && !errors.message && (
              <span>{t('required')}</span>
            )}
            {!!errors.message && <span>{errors.message}</span>}
          </FormHelperText>
        )}
      </Box>
    </FormControl>
  )
}

export default RcSesFormControlWrapper

export { type Props as RcSesFormControlWrapperProps }
