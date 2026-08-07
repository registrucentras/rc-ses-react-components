import { Box, Checkbox, Chip, TextField } from '@mui/material'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import React, { useMemo } from 'react'
import { UseControllerProps, useController } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'

import CheckBoldIcon from '@/assets/icons/CheckBoldIcon'
import CheckIcon from '@/assets/icons/CheckIcon'
import CheckUncheckedBoldIcon from '@/assets/icons/CheckUncheckedBoldIcon'
import MagnifyingGlassIcon from '@/assets/icons/MagnifyingGlassIcon'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../../components/FormControlWrapper'
import { Option } from './Select.types'
import useFilteredOptions from './hooks/useFilteredOptions'
import useSelectAll from './hooks/useSelectAllLogic'

type TControllerProps = UseControllerProps<any, any>
type ImmediateControllerProps = 'control' | 'rules' | 'name' | 'disabled'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'id' | 'label' | 'errors'
type AutocompleteValue<T, Multiple extends boolean> = Multiple extends true
  ? T[]
  : T | null

type Props = Pick<TControllerProps, ImmediateControllerProps> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    multiple?: boolean
    clearable?: boolean
    limitTags?: number
    loading?: boolean
    options: Option[]
    placeholder?: string
    dropdownLabel?: string
    dropdownSearch?: boolean
    dropdownSearchPlaceholder?: string
    selectAll?: boolean

    onInputChange?: AutocompleteProps<Option, boolean, boolean, false>['onInputChange']

    slotProps?: {
      field?: Partial<
        Omit<
          AutocompleteProps<Option, boolean, boolean, false>,
          'renderInput' | 'options' | 'value'
        >
      >
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

function RcSesSelect(props: Props) {
  const [dropdownSearchValue, setDropdownSearchValue] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const dropdownSearchOptionValue = '__dropdown-search-option__'
  const reservedSingleEndAdornmentWidth = 2
  const wrapperRef = React.useRef<HTMLDivElement>(null)

  const {
    multiple = false,
    clearable,
    control,
    errors,
    label,
    limitTags,
    loading,
    onInputChange,
    options,
    placeholder,
    rules,
    slotProps,
    dropdownLabel,
    dropdownSearch = false,
    dropdownSearchPlaceholder = 'Ieškoti',
    selectAll = false,
    ...fieldProps
  } = props

  const { disabled, name } = fieldProps

  const id = useMemo(() => fieldProps.id ?? uuidv4(), [fieldProps.id])
  const selectedValueId = useMemo(() => `rc-ses-select-single-value-${id}`, [id])

  const {
    field: { onChange, value },
  } = useController({
    control,
    name,
    rules,
    shouldUnregister: true,
  })

  const hasError = !!errors
  const hasCustomGroupBy = typeof slotProps?.field?.groupBy === 'function'

  const resolvedValue = useMemo(() => {
    if (multiple) {
      if (!Array.isArray(value)) return []
      return options.filter((o) => value.includes(o.value))
    }

    return options.find((o) => o.value === value) ?? null
  }, [value, options, multiple])

  const selectedSingleLabel =
    !multiple && resolvedValue && !Array.isArray(resolvedValue) ? resolvedValue.label : ''

  const selectedTagCount =
    multiple && Array.isArray(resolvedValue) ? resolvedValue.length : 0
  const hasLimitTagCounter =
    multiple && (limitTags ?? -1) > -1 && selectedTagCount > (limitTags ?? -1)
  const reservedMultipleEndAdornmentWidth = hasLimitTagCounter
    ? `${reservedSingleEndAdornmentWidth * 1.5}`
    : `${reservedSingleEndAdornmentWidth * 1.1}`

  const resolvedInputValue: string = ''

  const searchRowOption = useMemo<Option>(
    () => ({ label: '', value: dropdownSearchOptionValue }),
    [dropdownSearchOptionValue],
  )

  const resolvedOptions = useMemo(
    () => (dropdownSearch && !hasCustomGroupBy ? [searchRowOption, ...options] : options),
    [dropdownSearch, hasCustomGroupBy, options, searchRowOption],
  )

  const handleChange = (
    _: React.SyntheticEvent,
    selected: AutocompleteValue<Option, typeof multiple>,
  ) => {
    if (multiple) {
      const values = (selected as Option[])
        .filter((item) => item.value !== dropdownSearchOptionValue)
        .map((item) => item.value)

      onChange(values)
    } else {
      const val = selected as Option | null
      if (val?.value === dropdownSearchOptionValue) return
      onChange(val?.value ?? null)
    }
  }

  const filteredOptions = useFilteredOptions(
    options,
    dropdownSearch ? dropdownSearchValue : inputValue,
  )

  const selectedValues = Array.isArray(value) ? value : []
  const { allSelected: allFilteredSelected, toggle: handleSelectAll } = useSelectAll(
    filteredOptions,
    selectedValues,
    onChange,
  )

  const filterOptions = (opts: Option[]) => {
    if (hasCustomGroupBy) return opts

    if (dropdownSearch) {
      const [searchOption, ...realOptions] = opts
      if (!dropdownSearchValue.trim()) return opts

      const filteredValues = new Set(filteredOptions.map((o) => o.value))
      const filtered = realOptions.filter((opt) => filteredValues.has(opt.value))

      return [searchOption, ...filtered]
    }

    if (!inputValue.trim()) return opts

    const filteredValues = new Set(filteredOptions.map((o) => o.value))
    return opts.filter((opt) => filteredValues.has(opt.value))
  }

  const closeDropdown = () => {
    setOpen(false)
    setDropdownSearchValue('')
  }

  const shouldKeepDropdownOpen = () => {
    const activeEl = document.activeElement
    if (!(activeEl instanceof Element)) return false

    const listbox = document.getElementById(`${id}-listbox`)
    return !!listbox?.contains(activeEl) || !!wrapperRef.current?.contains(activeEl)
  }

  const deferCloseCheck = () => {
    requestAnimationFrame(() => {
      if (!shouldKeepDropdownOpen()) {
        closeDropdown()
      }
    })
  }
  return (
    <RcSesFormControlWrapper
      id={id}
      errors={errors}
      label={label}
      required={!!rules?.required}
      {...slotProps?.wrapper}
    >
      <Autocomplete
        id={id}
        ref={wrapperRef}
        open={open}
        onOpen={() => setOpen(true)}
        multiple={multiple}
        limitTags={multiple ? (limitTags ?? -1) : undefined}
        disableCloseOnSelect={multiple}
        disabled={disabled}
        disableClearable={clearable === false}
        options={resolvedOptions}
        filterOptions={(opts) => filterOptions(opts)}
        disableListWrap
        blurOnSelect={false}
        clearOnBlur={false}
        handleHomeEndKeys={false}
        ListboxProps={{
          onMouseDown: (e) => {
            e.preventDefault()
          },
        }}
        loading={loading}
        value={resolvedValue}
        inputValue={resolvedInputValue}
        onChange={handleChange}
        onInputChange={(event, val, reason) => {
          if (dropdownSearch) return
          onInputChange?.(event, val, reason)
        }}
        onClose={(_event, reason) => {
          if (dropdownSearch && reason === 'blur') {
            deferCloseCheck()
            return
          }
          closeDropdown()
        }}
        isOptionEqualToValue={(option, val) => option.value === val.value}
        getOptionLabel={(option) => option.label}
        groupBy={() => ''} // to prevent default grouping when groupBy is not provided but dropdownSearch is enabled
        renderGroup={(params) => (
          <React.Fragment key={params.key}>
            {!!params.group && (
              <Box className='MuiAutocomplete-groupLabel'>{params.group}</Box>
            )}

            {!params.group && !!dropdownLabel && (
              <Box
                sx={{
                  padding: '1.1875rem 1.125rem .8125rem 1.125rem',
                  fontSize: '.9375rem',
                  color: palette.grey[600],
                }}
              >
                {dropdownLabel}
              </Box>
            )}

            {params.children}
          </React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            disabled={disabled}
            error={hasError}
            placeholder={!multiple && selectedSingleLabel ? undefined : placeholder}
            sx={{
              ...(dropdownSearch
                ? {
                    '& .MuiInputBase-input': {
                      caretColor: 'transparent',
                    },
                  }
                : {}),
              ...(multiple
                ? {
                    '& .MuiAutocomplete-inputRoot': {
                      alignItems: 'center',
                      pr: `calc(${reservedMultipleEndAdornmentWidth}rem) !important`,
                    },
                    '& .MuiChip-root': {
                      maxWidth: `calc(100% - ${reservedMultipleEndAdornmentWidth}rem) !important`,
                    },
                  }
                : {
                    '& .rc-ses-select-single-value': {
                      boxSizing: 'border-box',
                      display: 'block',
                      overflowWrap: 'anywhere',
                      paddingLeft: '.75rem',
                      pointerEvents: 'none',
                      width: '100%',
                    },
                    '& .MuiAutocomplete-input': {
                      marginRight: `calc(${reservedSingleEndAdornmentWidth}rem) !important`,
                    },
                  }),
            }}
            InputProps={{
              ...params.InputProps,
              startAdornment:
                !multiple && selectedSingleLabel ? (
                  <Box id={selectedValueId} className='rc-ses-select-single-value'>
                    {selectedSingleLabel}
                  </Box>
                ) : (
                  params.InputProps.startAdornment
                ),
              inputProps: {
                ...params.inputProps,
                'aria-describedby':
                  !multiple && selectedSingleLabel ? selectedValueId : undefined,
                readOnly: true,
              },
            }}
          />
        )}
        renderOption={(optionProps, option, { selected }) => {
          const { key, ...rest } = optionProps as any

          if (option.value === dropdownSearchOptionValue) {
            return (
              <Box
                key={key}
                component='li'
                {...rest}
                onMouseDown={(event: React.MouseEvent) => {
                  event.preventDefault()
                }}
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation()
                }}
                sx={{
                  '&:hover': { backgroundColor: 'transparent !important' },
                  alignItems: 'center',
                  borderBottom: `1px solid ${palette.grey['200']}`,
                  display: 'flex',
                  flexDirection: 'row !important',
                  gap: '.75rem',
                  mb: '.25rem',
                  pb: '.5rem',
                  pt: 0,
                  px: '.75rem',
                }}
              >
                {multiple && selectAll && (
                  <Checkbox
                    checked={allFilteredSelected}
                    checkedIcon={
                      <CheckBoldIcon fillColor={palette.primary.main} size={24} />
                    }
                    icon={
                      <CheckUncheckedBoldIcon fillColor={palette.grey['500']} size={24} />
                    }
                    disableRipple
                    onMouseDown={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelectAll()
                    }}
                    sx={{
                      flexShrink: 0,
                      alignSelf: 'center',
                      height: '1.5rem',
                      m: 0,
                      p: 0,
                      width: '1.5rem',
                    }}
                  />
                )}
                <TextField
                  fullWidth
                  value={dropdownSearchValue}
                  onChange={(event) => setDropdownSearchValue(event.target.value)}
                  placeholder={dropdownSearchPlaceholder}
                  size='small'
                  onMouseDown={(e) => {
                    e.stopPropagation()
                  }}
                  onClick={(e) => {
                    e.stopPropagation()
                  }}
                  onFocus={(e) => {
                    e.stopPropagation()
                  }}
                  onBlur={deferCloseCheck}
                  onKeyDown={(event) => {
                    event.stopPropagation()
                  }}
                  sx={{
                    '& .MuiInputBase-input::placeholder': {
                      color: palette.grey.main,
                      opacity: 1,
                    },
                  }}
                  InputProps={{
                    inputProps: {
                      onKeyDown: (event) => event.stopPropagation(),
                    },
                    startAdornment: (
                      <Box sx={{ display: 'flex', m: '.625rem' }}>
                        <MagnifyingGlassIcon size={20} fillColor={palette.grey['900']} />
                      </Box>
                    ),
                  }}
                />
              </Box>
            )
          }

          return (
            <Box
              key={key}
              component='li'
              {...rest}
              display='flex'
              alignItems='center'
              gap={multiple ? '.75rem' : '.5rem'}
              sx={{
                flexDirection: 'row !important',
                justifyContent: 'space-between',
                minWidth: 0,
              }}
            >
              {multiple && (
                <Checkbox
                  checked={selected}
                  checkedIcon={
                    <CheckBoldIcon fillColor={palette.primary.main} size={24} />
                  }
                  icon={
                    <CheckUncheckedBoldIcon fillColor={palette.grey['500']} size={24} />
                  }
                  tabIndex={-1}
                  disableRipple
                  sx={{
                    alignSelf: 'center',
                    height: '1.5rem',
                    m: 0,
                    p: 0,
                    pointerEvents: 'none',
                    width: '1.5rem',
                  }}
                />
              )}

              <Box
                flex={1}
                sx={{
                  minWidth: 0,
                  ...(multiple && !option.description
                    ? {
                        alignItems: 'center',
                        display: 'flex',
                        minHeight: '1.5rem',
                      }
                    : {}),
                }}
              >
                <span className='rc-ses-select-option-label'>{option.label}</span>

                {option.description && (
                  <span className='rc-ses-select-option-description'>
                    {option.description}
                  </span>
                )}
              </Box>

              {!multiple && selected && (
                <CheckIcon
                  size={16}
                  fillColor={palette.primary.main}
                  aria-hidden
                  weight='bold'
                  style={{ flexShrink: 0, marginLeft: 'auto', alignSelf: 'center' }}
                />
              )}
            </Box>
          )
        }}
        renderTags={(tagValues, getTagProps, ownerState) => {
          const visibleTagLimit = ownerState.limitTags ?? -1
          const shouldLimitTags =
            visibleTagLimit > -1 && tagValues.length > visibleTagLimit
          const visibleTags = shouldLimitTags
            ? tagValues.slice(0, visibleTagLimit)
            : tagValues
          const hiddenTagCount = tagValues.length - visibleTags.length

          return (
            <>
              {visibleTags.map((option, index) => {
                const { key, ...tagProps } = getTagProps({ index })
                return (
                  <Chip
                    key={key}
                    label={option.label}
                    size='small'
                    sx={{
                      height: 'auto',
                      maxWidth: `calc(100% - ${reservedMultipleEndAdornmentWidth}rem)`,
                      '& .MuiChip-label': {
                        display: 'block',
                        overflowWrap: 'anywhere',
                        py: '.25rem',
                        textOverflow: 'clip',
                        whiteSpace: 'normal',
                      },
                    }}
                    {...tagProps}
                  />
                )
              })}

              {hiddenTagCount > 0 && (
                <Box component='span' className='MuiAutocomplete-tag'>
                  {ownerState.getLimitTagsText?.(hiddenTagCount) ?? `+${hiddenTagCount}`}
                </Box>
              )}
            </>
          )
        }}
        {...slotProps?.field}
      />
    </RcSesFormControlWrapper>
  )
}

export default RcSesSelect
