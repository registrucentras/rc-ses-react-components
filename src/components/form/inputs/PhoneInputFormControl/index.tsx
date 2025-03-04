import {
  Autocomplete,
  Box,
  Button,
  ClickAwayListener,
  Divider,
  FormControlLabelProps,
  InputAdornment,
  AutocompleteProps as MuiAutocompleteProps,
  Popper,
  Stack,
  TextField,
  Typography,
} from '@mui/material'
import countries from 'countries-phone-masks'
import { Mask } from 'maska'
import React, { useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'

import CaretDownFill from '@/assets/icons/CaretDownFill'
import '@/i18n/i18n'
import theme from '@/theme/light'
import palette from '@/theme/palette'

import { RcSesFormControlWrapperProps } from '../../components/FormControlWrapper'
import AutocompleteInput from './components/AutocompleteInput'
import ListboxComponent from './components/ListboxComponent'
import PopperComponent from './components/PopperComponent'
import './styles/styles.css'
import Country from './types/Country'

const DEFAULT_COUNTRY = countries.find((c) => c.iso === 'LT') as Country

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'disabled' | 'name' | 'rules'

type TAutocompleteProps = MuiAutocompleteProps<Country, false, true, false, any>
// type ImmediateAutocompleteProps = 'ref'
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

  const { control, name, rules, slotProps } = props

  const [country, setCountry] = React.useState<Country>(DEFAULT_COUNTRY)

  const mask = useMemo(() => new Mask({ mask: country?.mask ?? '' }), [country])

  const { field: controllerProps } = useController({
    control,
    name,
    rules: {
      ...rules,
      validate: {
        phoneNoFormat: (value) =>
          mask.completed(value.replace(country.code ?? '', '')) || t('invalid'),
        ...rules?.validate,
      },
    },
  })

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget)

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
        InputProps={{
          startAdornment: (
            <Stack alignItems='center' direction='row'>
              <InputAdornment position='start' sx={{ mr: 0 }}>
                <Button
                  aria-describedby={popperId}
                  color='inherit'
                  onClick={handleClick}
                  sx={{
                    backgroundColor: 'white',
                    minWidth: 'unset',
                    px: 1.5,
                  }}
                >
                  <Box
                    className={`flag-sprite-map flag-sprite-map-${country?.iso}`}
                    sx={{
                      backgroundSize: '2rem auto',
                      borderRadius: '50%',
                      height: '1.25rem',
                      width: '1.25rem',
                    }}
                    title={country?.name}
                  />
                  <CaretDownFill sx={{ fontSize: '.75rem !important', ml: 1 }} />
                </Button>
              </InputAdornment>

              <InputAdornment position='start'>
                <Divider
                  orientation='vertical'
                  sx={{
                    borderColor: palette.grey[500],
                    height: '1.25rem',
                  }}
                />
              </InputAdornment>

              <InputAdornment position='start'>
                <Typography color={palette.grey[900]} component='span'>
                  {country.code}
                </Typography>
              </InputAdornment>
            </Stack>
          ),
        }}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        inputProps={{
          pattern: '^[0-9\\(\\)\\- ]*$/',
        }}
        placeholder={mask.opts.mask?.toString()}
        value={mask.masked(controllerProps.value.replace(country.code ?? '', ''))}
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
        sx={{
          backgroundColor: 'white',
          border: '.0625rem solid #e1e4e8',
          borderRadius: 1,
          boxShadow: `0 .25rem 1rem 0 rgba(9, 30, 66, .24), 0 .5rem 1rem 0 rgba(9, 30, 66, .1)`,

          color: '#24292e',
          width: '18.75rem',
          zIndex: theme.zIndex.modal,
        }}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <Autocomplete
            disableClearable
            disableListWrap
            filterOptions={(options, { inputValue }) =>
              options.filter((opt) => opt.searchable.includes(inputValue.toUpperCase()))
            }
            getOptionLabel={(option) => option.name}
            isOptionEqualToValue={(o, v) => o.code === v.code}
            ListboxComponent={ListboxComponent}
            onChange={(_, selection) => {
              setAnchorEl(null)
              setCountry(selection)
              controllerProps.onChange('')
            }}
            open
            options={countryOptions}
            PopperComponent={PopperComponent}
            renderInput={AutocompleteInput}
            renderOption={(optionProps, option) =>
              [optionProps, option] as React.ReactNode
            }
            sx={{ width: 300 }}
            {...slotProps?.autocomplete}
          />
        </ClickAwayListener>
      </Popper>
    </>
  )
}

export type { Props as RcSesPhoneInputFormControlProps }

export default RcSesPhoneInputFormControl
