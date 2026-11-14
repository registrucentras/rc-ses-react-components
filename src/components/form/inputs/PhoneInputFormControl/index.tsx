import {
  Box,
  Button,
  ClickAwayListener,
  Divider,
  FormControlLabelProps,
  InputAdornment,
  Popper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import Autocomplete, {
  AutocompleteProps as MuiAutocompleteProps,
} from '@mui/material/Autocomplete'
import countriesList from 'countries-phone-masks'
import { Mask } from 'maska'
import React, { useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import { CaretDownFill } from '@/assets/icons/phosphorIcons'
import '@/i18n/i18n'
import { borderTokens } from '@/theme/borderTokens'
import { colorTokens } from '@/theme/colorTokens'
import { effectTokens } from '@/theme/effectTokens'
import theme from '@/theme/light'
import { sizeTokens } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens } from '@/theme/spacingRoleBasedTokens'

import { RcSesFormControlWrapperProps } from '../../components/FormControlWrapper'
import AutocompleteInput from './components/AutocompleteInput'
import ListboxComponent from './components/ListboxComponent'
import PopperComponent from './components/PopperComponent'
import './styles/styles.css'
import Country from './types/Country'

const countries = countriesList.map((c) => {
  if (c.iso === 'LT') {
    return { ...c, mask: '### ## ###' }
  }
  return c
})

const DEFAULT_COUNTRY = countries.find((c) => c.iso === 'LT') as Country

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'disabled' | 'name' | 'rules'

type TAutocompleteProps = MuiAutocompleteProps<Country, false, true, false, any>
type ImmediateAutocompleteProps = never

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'errors' | 'label'

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TAutocompleteProps, ImmediateAutocompleteProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    id?: string
    slotProps?: {
      autocomplete?: Partial<Omit<TAutocompleteProps, ImmediateAutocompleteProps>>
      label?: Partial<FormControlLabelProps>
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesPhoneInputFormControl(props: Props) {
  const { t } = useTranslation('input', {
    keyPrefix: 'components.RcSesPhoneInputFormControl',
  })

  const { id, control, name, rules, slotProps } = props

  const [country, setCountry] = React.useState<Country>(DEFAULT_COUNTRY)

  const mask = useMemo(() => {
    const theMask = Array.isArray(country?.mask)
      ? country.mask.toReversed()
      : (country?.mask ?? '')

    return new Mask({ mask: theMask })
  }, [country])

  const { field: controllerProps } = useController({
    control,
    name,
    rules: {
      ...rules,
      validate: {
        phoneNoFormat: (value) => {
          if (typeof value !== 'string') {
            return t('invalid')
          }

          return mask.completed(value.replace(country.code ?? '', '')) || t('invalid')
        },
        ...rules?.validate,
      },
    },
  })

  const phoneValue =
    typeof controllerProps.value === 'string' ? controllerProps.value : ''

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (e: React.MouseEvent<HTMLElement>) => setAnchorEl(e.currentTarget)

  const handleClose = () => {
    if (anchorEl) anchorEl.focus()
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const popperId = open ? 'phoneNumberAutocomplete' : undefined

  const countryOptions = React.useMemo(
    () =>
      countries.map((opt) => ({
        ...opt,
        searchable: `${opt.code} ${opt.name.toUpperCase()} ${opt.iso.toUpperCase()}`,
      })),
    [],
  )

  return (
    <>
      <TextField
        {...controllerProps}
        fullWidth
        slotProps={{
          // Was inputProps: targets the native <input>.
          htmlInput: {
            id,
            pattern: '^[0-9\\(\\)\\- ]*$/',
          },
          // Was InputProps: targets the OutlinedInput wrapper.
          input: {
            startAdornment: (
              <Stack
                direction='row'
                sx={{
                  alignItems: 'center',
                }}
              >
                <InputAdornment position='start' sx={{ mr: 0 }}>
                  <Button
                    aria-describedby={popperId}
                    aria-label={t('aria.countrySelectorLabel')}
                    aria-haspopup
                    color='inherit'
                    onClick={handleClick}
                    sx={{
                      backgroundColor: colorTokens['surface-base'],
                      minWidth: 'unset',
                      px: spacingRoleBasedTokens['space-12'],
                    }}
                  >
                    <Box
                      className={`flag-sprite-map flag-${country?.iso}`}
                      sx={{
                        backgroundSize: '2rem auto',
                        borderRadius: borderTokens['radius-full'],
                        height: sizeTokens['icon-size-20'],
                        width: sizeTokens['icon-size-20'],
                      }}
                      title={country?.name}
                    />
                    <Box
                      component='span'
                      sx={{ display: 'flex', ml: spacingRoleBasedTokens['space-8'] }}
                    >
                      <CaretDownFill aria-hidden size={12} />
                    </Box>
                  </Button>
                </InputAdornment>

                <InputAdornment position='start'>
                  <Divider
                    orientation='vertical'
                    sx={{
                      borderColor: colorTokens['border-default'],
                      height: sizeTokens['icon-size-20'],
                    }}
                  />
                </InputAdornment>

                <InputAdornment position='start'>
                  <Typography
                    sx={{ color: colorTokens['text-default'] }}
                    component='span'
                  >
                    {country.code}
                  </Typography>
                </InputAdornment>
              </Stack>
            ),
          },
        }}
        placeholder={mask.opts.mask?.toString()}
        value={mask.masked(phoneValue.replace(country.code ?? '', ''))}
        onChange={(e) =>
          controllerProps.onChange({
            ...e,
            target: { value: `${country.code}${mask.unmasked(e.target.value)}` },
          })
        }
      />
      <Popper
        anchorEl={anchorEl}
        id={popperId}
        open={open}
        placement='bottom-start'
        role='menu'
        sx={{
          backgroundColor: colorTokens['surface-base'],
          border: `${borderTokens['stroke-1']} solid ${colorTokens['border-subtle']}`,
          borderRadius: borderTokens['radius-4'],
          boxShadow: effectTokens['elevation-md'],

          color: colorTokens['text-default'],
          width: '18.75rem',
          zIndex: theme.zIndex.modal,
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Box>
            <Autocomplete
              disableClearable
              disableListWrap
              filterOptions={(options, { inputValue }) =>
                options.filter((opt) => opt.searchable.includes(inputValue.toUpperCase()))
              }
              getOptionLabel={(option) => option.name}
              isOptionEqualToValue={(o, v) => o.code === v.code}
              noOptionsText={t('noOptionsText')}
              onChange={(e, selection) => {
                e.preventDefault()
                setAnchorEl(null)
                setCountry(selection)
                controllerProps.onChange('')
              }}
              open
              options={countryOptions}
              renderInput={AutocompleteInput}
              renderOption={(optionProps, option) =>
                [optionProps, option] as React.ReactNode
              }
              sx={{ width: 300 }}
              {...slotProps?.autocomplete}
              slots={{
                popper: PopperComponent,
              }}
              slotProps={{
                listbox: {
                  component: ListboxComponent,
                },
              }}
            />
          </Box>
        </ClickAwayListener>
      </Popper>
    </>
  )
}

export type { Props as RcSesPhoneInputFormControlProps }

export default RcSesPhoneInputFormControl
