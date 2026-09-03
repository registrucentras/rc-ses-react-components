import { Box, Chip, TextField } from '@mui/material'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import React, { useMemo } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import CaretDownIcon from '@/assets/icons/CaretDownIcon'
import CheckIcon from '@/assets/icons/CheckIcon'
import RcSesBadge from '@/components/common/Badge'
import palette from '@/theme/palette'

import RcSesFormControlWrapper, {
  RcSesFormControlWrapperProps,
} from '../../components/FormControlWrapper'
import { Option } from './Select.types'
import {
  dropdownSearchFieldOption,
  dropdownSearchFieldValue,
  dropdownSelectAllValue,
  isInternalOptionValue,
} from './Select.utils'
import OptionCheckbox from './components/OptionCheckbox'
import useFilteredOptions from './hooks/useFilteredOptions'
import useSelectAll from './hooks/useSelectAllLogic'

type TControllerProps<TFieldValues extends FieldValues = FieldValues> =
  UseControllerProps<TFieldValues>
type ImmediateControllerProps = 'control' | 'rules' | 'name' | 'disabled'

type TWrapperProps = RcSesFormControlWrapperProps
type ImmediateWrapperProps = 'id' | 'label' | 'errors'

type CommonSelectProps<TFieldValues extends FieldValues = FieldValues> = Pick<
  TControllerProps<TFieldValues>,
  ImmediateControllerProps
> &
  Pick<TWrapperProps, ImmediateWrapperProps> & {
    clearable?: boolean
    loading?: boolean
    options: Option[]
    placeholder?: string
    dropdownLabel?: string
    dropdownSearch?: boolean
    dropdownSearchPlaceholder?: string

    onInputChange?: AutocompleteProps<Option, boolean, boolean, false>['onInputChange']

    slotProps?: {
      controller?: Partial<Omit<TControllerProps<TFieldValues>, ImmediateControllerProps>>
      field?: Partial<
        Omit<
          AutocompleteProps<Option, boolean, boolean, false>,
          'renderInput' | 'options' | 'value'
        >
      >
      wrapper?: Partial<Omit<TWrapperProps, ImmediateWrapperProps>>
    }
  }

type SingleSelectProps<TFieldValues extends FieldValues = FieldValues> =
  CommonSelectProps<TFieldValues> & {
    multiple?: false
    limitTags?: never
    selectAll?: never
    selectAllLabel?: never
  }

type MultiSelectProps<TFieldValues extends FieldValues = FieldValues> =
  CommonSelectProps<TFieldValues> & {
    multiple: true
    limitTags?: number
    selectAll?: boolean
    selectAllLabel?: string
  }

type Props<TFieldValues extends FieldValues = FieldValues> =
  SingleSelectProps<TFieldValues> | MultiSelectProps<TFieldValues>

function RcSesSelect<TFieldValues extends FieldValues = FieldValues>(
  props: Props<TFieldValues>,
) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesSelect' })
  const [dropdownSearchValue, setDropdownSearchValue] = React.useState('')
  const [open, setOpen] = React.useState(false)
  // rem widths reserved at the end of the input for the clear and dropdown adornments
  const reservedSingleEndAdornmentWidth = 2
  const reservedMultipleTagsEndAdornmentWidth = 2.2
  const reservedMultipleWithCounterEndAdornmentWidth = 3
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
    dropdownSearchPlaceholder,
    selectAll = false,
    selectAllLabel,
    ...fieldProps
  } = props

  const resolvedDropdownSearchPlaceholder =
    dropdownSearchPlaceholder ?? t('searchPlaceholder')
  const resolvedSelectAllLabel = selectAllLabel ?? t('selectAllLabel')

  const { disabled, name } = fieldProps

  const id = useMemo(() => fieldProps.id ?? uuidv4(), [fieldProps.id])
  const selectedValueId = useMemo(() => `rc-ses-select-single-value-${id}`, [id])

  const {
    field: { onChange: rawOnChange, value: rawValue },
  } = useController({
    control,
    name,
    rules,
    shouldUnregister: true,
    ...slotProps?.controller,
  })

  const value = rawValue as string | string[] | null | undefined
  const onChange = rawOnChange as (next: string | string[] | null) => void

  const hasError = !!errors
  const groupBy = slotProps?.field?.groupBy
  const hasCustomGroupBy = typeof groupBy === 'function'

  const groupCounts = useMemo(() => {
    if (!groupBy) return new Map<string, number>()

    const counts = new Map<string, number>()
    options.forEach((option) => {
      const group = groupBy(option)
      counts.set(group, (counts.get(group) ?? 0) + 1)
    })
    return counts
  }, [groupBy, options])

  const selectedValueSet = useMemo(
    () => new Set(Array.isArray(value) ? value : []),
    [value],
  )

  const resolvedValue = useMemo(() => {
    if (multiple) {
      return options.filter((o) => selectedValueSet.has(o.value))
    }

    return options.find((o) => o.value === value) ?? null
  }, [value, options, multiple, selectedValueSet])

  const selectedSingleLabel =
    !multiple && resolvedValue && !Array.isArray(resolvedValue) ? resolvedValue.label : ''

  const selectedTagCount =
    multiple && Array.isArray(resolvedValue) ? resolvedValue.length : 0
  const hasLimitTagCounter =
    multiple && (limitTags ?? -1) > -1 && selectedTagCount > (limitTags ?? -1)
  const reservedMultipleEndAdornmentWidth = hasLimitTagCounter
    ? reservedMultipleWithCounterEndAdornmentWidth
    : reservedMultipleTagsEndAdornmentWidth

  const [inputValue, setInputValue] = React.useState('')
  const resolvedInputValue = dropdownSearch ? '' : inputValue
  const searchText = dropdownSearch ? dropdownSearchValue : inputValue

  const selectAllOption = useMemo<Option>(
    () => ({ label: resolvedSelectAllLabel, value: dropdownSelectAllValue }),
    [resolvedSelectAllLabel],
  )

  const resolvedOptions = useMemo(() => {
    if (!dropdownSearch) return options

    const rows: Option[] = [dropdownSearchFieldOption]
    if (multiple && selectAll) rows.push(selectAllOption)
    return [...rows, ...options]
  }, [dropdownSearch, multiple, selectAll, options, selectAllOption])

  const labelFilteredOptions = useFilteredOptions(options, searchText)

  const filteredOptions = useMemo(() => {
    if (!groupBy) return labelFilteredOptions

    const normalized = searchText.trim().toLowerCase()
    if (!normalized) return labelFilteredOptions

    const matchedValues = new Set(labelFilteredOptions.map((o) => o.value))
    options.forEach((option) => {
      if (groupBy(option).toLowerCase().includes(normalized)) {
        matchedValues.add(option.value)
      }
    })

    return options.filter((option) => matchedValues.has(option.value))
  }, [groupBy, labelFilteredOptions, options, searchText])

  const filteredOptionsByGroup = useMemo(() => {
    const map = new Map<string, Option[]>()
    filteredOptions.forEach((option) => {
      const group = groupBy?.(option) ?? ''
      const items = map.get(group) ?? []
      items.push(option)
      map.set(group, items)
    })
    return map
  }, [filteredOptions, groupBy])

  const selectedValues = Array.isArray(value) ? value : []
  const { allSelected: allFilteredSelected, toggle: handleSelectAll } = useSelectAll(
    filteredOptions,
    selectedValues,
    onChange,
  )

  const handleChange = (_: React.SyntheticEvent, selected: Option | Option[] | null) => {
    if (Array.isArray(selected)) {
      if (selected.some((item) => item.value === dropdownSelectAllValue)) {
        handleSelectAll()
        return
      }

      const values = selected
        .filter((item) => !isInternalOptionValue(item.value))
        .map((item) => item.value)

      onChange(values)
    } else {
      if (selected && isInternalOptionValue(selected.value)) return
      onChange(selected?.value ?? null)
    }
  }

  const filterOptions = (opts: Option[]) => {
    if (dropdownSearch) {
      if (!dropdownSearchValue.trim()) return opts

      const filteredValues = new Set(filteredOptions.map((o) => o.value))
      return opts.filter(
        (opt) => isInternalOptionValue(opt.value) || filteredValues.has(opt.value),
      )
    }

    if (!inputValue.trim() || inputValue === selectedSingleLabel) return opts

    const filteredValues = new Set(filteredOptions.map((o) => o.value))
    return opts.filter((opt) => filteredValues.has(opt.value))
  }

  const closeDropdown = ({ clearInput = false } = {}) => {
    setOpen(false)
    setDropdownSearchValue('')
    if (clearInput) setInputValue('')
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

  const isGroupFullySelected = (groupValue: string) => {
    const memberValues = filteredOptionsByGroup.get(groupValue) ?? []
    return (
      memberValues.length > 0 && memberValues.every((o) => selectedValueSet.has(o.value))
    )
  }

  const toggleGroupValue = (groupValue: string) => {
    const memberValues = (filteredOptionsByGroup.get(groupValue) ?? []).map(
      (o) => o.value,
    )

    const next = isGroupFullySelected(groupValue)
      ? selectedValues.filter((v) => !memberValues.includes(v))
      : Array.from(new Set([...selectedValues, ...memberValues]))

    onChange(next)
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
        loading={loading}
        popupIcon={<CaretDownIcon size={20} fillColor={palette.grey['600']} />}
        value={resolvedValue}
        inputValue={resolvedInputValue}
        onChange={handleChange}
        onInputChange={(event, val, reason) => {
          if (dropdownSearch) return
          setInputValue(val)
          onInputChange?.(event, val, reason)
        }}
        onClose={(_event, reason) => {
          if (dropdownSearch && reason === 'blur') {
            deferCloseCheck()
            return
          }
          closeDropdown({ clearInput: true })
        }}
        isOptionEqualToValue={(option, val) => option.value === val.value}
        getOptionLabel={(option) => option.label}
        renderGroup={(params) => {
          const groupValue = params.group
          const groupSelectable = multiple && !disabled
          const isGroupSelected = groupSelectable && isGroupFullySelected(groupValue)

          return (
            <React.Fragment key={params.key}>
              {!!groupValue && (
                <Box
                  className='MuiAutocomplete-groupLabel'
                  role={groupSelectable ? 'checkbox' : undefined}
                  aria-checked={groupSelectable ? isGroupSelected : undefined}
                  tabIndex={groupSelectable ? 0 : undefined}
                  onMouseDown={(event: React.MouseEvent) => {
                    if (groupSelectable) event.preventDefault()
                  }}
                  onClick={
                    groupSelectable ? () => toggleGroupValue(groupValue) : undefined
                  }
                  onKeyDown={
                    groupSelectable
                      ? (event: React.KeyboardEvent) => {
                          if (event.key === 'Enter' || event.key === ' ') {
                            event.preventDefault()
                            toggleGroupValue(groupValue)
                          }
                        }
                      : undefined
                  }
                  sx={{
                    alignItems: 'center',
                    cursor: groupSelectable ? 'pointer' : 'default',
                    display: 'flex',
                    gap: '.5rem',
                  }}
                >
                  {groupSelectable && <OptionCheckbox checked={isGroupSelected} />}
                  {groupValue}
                  {groupCounts.has(groupValue) && (
                    <RcSesBadge
                      label={String(groupCounts.get(groupValue))}
                      variant='neutral'
                      size='small'
                      showIcon={false}
                    />
                  )}
                </Box>
              )}

              {!groupValue && !!dropdownLabel && (
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
          )
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            disabled={disabled}
            error={hasError}
            placeholder={!multiple && selectedSingleLabel ? undefined : placeholder}
            sx={{
              ...(dropdownSearch || (!multiple && selectedSingleLabel)
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
            slotProps={{
              ...params.slotProps,
              input: {
                ...params.slotProps.input,
                startAdornment:
                  !multiple && selectedSingleLabel ? (
                    <Box id={selectedValueId} className='rc-ses-select-single-value'>
                      {selectedSingleLabel}
                    </Box>
                  ) : (
                    params.slotProps.input.startAdornment
                  ),
              },
              htmlInput: {
                ...params.slotProps.htmlInput,
                'aria-describedby':
                  !multiple && selectedSingleLabel ? selectedValueId : undefined,
                value:
                  !multiple && selectedSingleLabel
                    ? ''
                    : params.slotProps.htmlInput?.value,
                readOnly: dropdownSearch || (!multiple && !!selectedSingleLabel),
              },
            }}
          />
        )}
        renderOption={(optionProps, option, { selected }) => {
          const { key, className, ...rest } = optionProps

          if (option.value === dropdownSearchFieldValue) {
            return (
              <Box
                key={key}
                component='li'
                {...rest}
                className={className}
                onMouseDown={(event: React.MouseEvent) => {
                  event.preventDefault()
                }}
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation()
                }}
                sx={{
                  '&:hover': { backgroundColor: 'transparent !important' },
                  display: 'flex',
                  flexDirection: 'row !important',
                  px: '1rem',
                  py: '.5rem',
                }}
              >
                <TextField
                  fullWidth
                  value={dropdownSearchValue}
                  onChange={(event) => setDropdownSearchValue(event.target.value)}
                  placeholder={resolvedDropdownSearchPlaceholder}
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
                    '& .MuiOutlinedInput-notchedOutline': {
                      borderColor: palette.grey['200'],
                    },
                    '& .MuiInputBase-input': {
                      padding: '.625rem .75rem',
                    },
                    '& .MuiInputBase-input::placeholder': {
                      color: palette.grey.main,
                      opacity: 1,
                    },
                  }}
                  slotProps={{
                    htmlInput: {
                      onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) =>
                        event.stopPropagation(),
                    },
                  }}
                />
              </Box>
            )
          }

          if (option.value === dropdownSelectAllValue) {
            return (
              <Box
                key={key}
                component='li'
                {...rest}
                className={className}
                onMouseDown={(event: React.MouseEvent) => {
                  event.preventDefault()
                }}
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation()
                  handleSelectAll()
                }}
                sx={{
                  display: 'flex',
                  flexDirection: 'row !important',
                  gap: '.75rem',
                }}
              >
                <OptionCheckbox checked={allFilteredSelected} />
                <span className='rc-ses-select-option-label'>
                  {resolvedSelectAllLabel}
                </span>
              </Box>
            )
          }

          let indentClassName = ''
          if (hasCustomGroupBy) {
            indentClassName = multiple
              ? 'rc-ses-select-option--indent-multi'
              : 'rc-ses-select-option--indent-single'
          }

          return (
            <Box
              key={key}
              component='li'
              {...rest}
              className={[className, indentClassName].filter(Boolean).join(' ')}
              sx={{
                display: 'flex',
                gap: multiple ? '.75rem' : '.5rem',
                flexDirection: 'row !important',
                justifyContent: 'space-between',
                minWidth: 0,
              }}
            >
              {multiple && <OptionCheckbox checked={selected} />}
              <Box
                sx={{
                  flex: 1,
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
                <span
                  className='rc-ses-select-option-label'
                  style={selected ? { color: palette.primary['700'] } : undefined}
                >
                  {option.label}
                </span>

                {option.description && (
                  <span className='rc-ses-select-option-description'>
                    {option.description}
                  </span>
                )}
              </Box>
              {!multiple && selected && (
                <CheckIcon
                  size={20}
                  fillColor={palette.primary.main}
                  aria-hidden
                  weight='bold'
                  style={{ flexShrink: 0, marginLeft: 'auto', alignSelf: 'center' }}
                />
              )}
            </Box>
          )
        }}
        renderValue={(tagValues, getItemProps, ownerState) => {
          // MUI 9 merged renderTags into renderValue, so this now runs for
          // single-select too where v7's renderTags did not. Single-select must
          // keep showing the plain label - rendering a deletable Chip there both
          // looks wrong and makes the field taller.
          const selected = Array.isArray(tagValues) ? tagValues : [tagValues]
          if (!multiple) {
            return selected[0]?.label ?? ''
          }

          const visibleTagLimit = ownerState.limitTags ?? -1
          const shouldLimitTags =
            visibleTagLimit > -1 && selected.length > visibleTagLimit
          const visibleTags = shouldLimitTags
            ? selected.slice(0, visibleTagLimit)
            : selected
          const hiddenTagCount = selected.length - visibleTags.length

          return (
            <>
              {visibleTags.map((option, index) => (
                // getItemProps no longer returns a key, so it comes from the option.
                <Chip
                  key={option.value ?? index}
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
                  {...getItemProps({ index })}
                />
              ))}

              {hiddenTagCount > 0 && (
                <Box component='span' className='MuiAutocomplete-tag'>
                  {ownerState.getLimitTagsText?.(hiddenTagCount) ?? `+${hiddenTagCount}`}
                </Box>
              )}
            </>
          )
        }}
        {...slotProps?.field}
        groupBy={(option) => {
          if (isInternalOptionValue(option.value)) return ''
          return groupBy ? groupBy(option) : ''
        }}
        slotProps={{
          ...slotProps?.field?.slotProps,
          listbox: (ownerState) => {
            const consumerListboxSlotProps = slotProps?.field?.slotProps?.listbox
            const resolved =
              typeof consumerListboxSlotProps === 'function'
                ? consumerListboxSlotProps(ownerState)
                : consumerListboxSlotProps

            return {
              ...resolved,
              onMouseDown: (e: React.MouseEvent<HTMLUListElement>) => {
                resolved?.onMouseDown?.(e)
                e.preventDefault()
              },
            }
          },
        }}
      />
    </RcSesFormControlWrapper>
  )
}

export default RcSesSelect
