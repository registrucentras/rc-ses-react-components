import { Box, CircularProgress, Paper, TextField } from '@mui/material'
import Autocomplete, { AutocompleteProps } from '@mui/material/Autocomplete'
import React, { useMemo } from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { v4 as uuidv4 } from 'uuid'

import {
  CaretDownIcon,
  CheckIcon,
  WarningCircleIcon,
  XCircleFillIcon,
} from '@/assets/icons/phosphorIcons'
import RcSesBadge from '@/components/common/Badge'
import { colorTokens as color } from '@/theme/colorTokens'
import { sizeTokens as size } from '@/theme/sizeTokens'
import { spacingRoleBasedTokens as space } from '@/theme/spacingRoleBasedTokens'
import '@/theme/tokens.css'
import { typographyTokens as typography } from '@/theme/typographyTokens'

import type { RcSesFormControlWrapperProps } from '../../components/FormControlWrapper'
import { SelectWrapper, paperStyle, selectStyle } from './Select.styles'
import { Option } from './Select.types'
import {
  dropdownGroupOptionValue,
  dropdownSelectAllValue,
  groupNameFromOptionValue,
  isGroupOptionValue,
  isInternalOptionValue,
} from './Select.utils'
import OptionCheckbox from './components/OptionCheckbox'
import useFilteredOptions from './hooks/useFilteredOptions'

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
    loadError?: string
    options: Option[]
    placeholder?: string
    dropdownLabel?: string
    selectAllLabel?: string
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
  }

type MultiSelectProps<TFieldValues extends FieldValues = FieldValues> =
  CommonSelectProps<TFieldValues> & {
    multiple: true
    limitTags?: number
    selectAll?: boolean
  }

type Props<TFieldValues extends FieldValues = FieldValues> =
  SingleSelectProps<TFieldValues> | MultiSelectProps<TFieldValues>

interface DropdownPaperProps extends React.ComponentProps<typeof Paper> {
  dropdownLabel?: string
  ownerState?: unknown
  status?: React.ReactNode
  searchField?: React.ReactNode
}

function DropdownPaper({
  children,
  dropdownLabel,
  ownerState: _ownerState,
  status,
  searchField,
  ...paperProps
}: DropdownPaperProps) {
  return (
    <Paper {...paperProps}>
      {!!dropdownLabel && (
        <Box
          sx={{
            padding: `calc(${space['space-20']} - ${space['space-2']} / 2) calc(${space['space-16']} + ${space['space-2']}) calc(${space['space-12']} + ${space['space-2']} / 2) calc(${space['space-16']} + ${space['space-2']})`,
            fontSize: typography['font-size-body-regular'],
            color: color['text-secondary'],
          }}
        >
          {dropdownLabel}
        </Box>
      )}
      {searchField}
      {children}
      {status}
    </Paper>
  )
}

function RcSesSelect<TFieldValues extends FieldValues = FieldValues>(
  props: Props<TFieldValues>,
) {
  const { t } = useTranslation('input', { keyPrefix: 'components.RcSesSelect' })
  const [dropdownSearchValue, setDropdownSearchValue] = React.useState('')
  const [open, setOpen] = React.useState(false)
  const wrapperRef = React.useRef<HTMLDivElement>(null)
  const summaryRef = React.useRef<HTMLDivElement>(null)
  const [visibleCount, setVisibleCount] = React.useState(Number.MAX_SAFE_INTEGER)

  const {
    multiple = false,
    clearable,
    control,
    errors,
    label,
    limitTags,
    loading,
    loadError,
    onInputChange,
    options,
    placeholder,
    rules,
    slotProps,
    dropdownLabel,
    dropdownSearch = true,
    dropdownSearchPlaceholder,
    selectAll = true,
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
  const useDefaultSummary = !slotProps?.field?.renderValue

  const selectedValueSet = useMemo(() => {
    if (!Array.isArray(value)) return new Set<string>()
    return new Set(value)
  }, [value])

  const resolvedValue = useMemo(() => {
    if (multiple) {
      const known = options.filter((o) => selectedValueSet.has(o.value))
      const knownValues = new Set(known.map((option) => option.value))
      return [
        ...known,
        ...Array.from(selectedValueSet)
          .filter((selected) => !knownValues.has(selected))
          .map((selected) => ({ value: selected, label: selected })),
      ]
    }

    if (typeof value === 'string' && isGroupOptionValue(value) && groupBy) {
      const group = groupNameFromOptionValue(value)
      if (options.some((option) => groupBy(option) === group))
        return { value, label: group }
    }
    if (typeof value !== 'string' || !value) return null
    return (
      options.find((o) => o.value === value) ?? {
        value,
        label: isGroupOptionValue(value) ? groupNameFromOptionValue(value) : value,
      }
    )
  }, [value, options, multiple, selectedValueSet, groupBy])

  const selectedSingleLabel =
    !multiple && resolvedValue && !Array.isArray(resolvedValue) ? resolvedValue.label : ''

  const selectedLabels = useMemo(
    () =>
      Array.isArray(resolvedValue) ? resolvedValue.map((option) => option.label) : [],
    [resolvedValue],
  )
  const isAll = multiple && selectAll && selectedValueSet.size === 0

  React.useLayoutEffect(() => {
    const summary = summaryRef.current
    if (!summary || !multiple) return undefined
    let active = true
    const measure = () => {
      if (!active) return
      const probe = document.createElement('span')
      probe.style.cssText =
        'position:absolute;visibility:hidden;white-space:pre;pointer-events:none'
      summary.appendChild(probe)
      let count = Math.min(
        selectedLabels.length,
        limitTags == null || limitTags < 0
          ? selectedLabels.length
          : Math.max(1, limitTags),
      )
      while (count > 1) {
        probe.textContent =
          selectedLabels.slice(0, count).join(', ') +
          (count < selectedLabels.length
            ? ` ${t('more', { count: selectedLabels.length - count })}`
            : '')
        if (probe.getBoundingClientRect().width <= summary.clientWidth) break
        count -= 1
      }
      probe.remove()
      setVisibleCount(count)
    }
    measure()
    const observer =
      typeof ResizeObserver === 'undefined' ? undefined : new ResizeObserver(measure)
    observer?.observe(summary)
    document.fonts?.ready.then(measure)
    return () => {
      active = false
      observer?.disconnect()
    }
  }, [multiple, selectedLabels, limitTags, t, useDefaultSummary])

  const [inputValue, setInputValue] = React.useState('')
  const resolvedInputValue = dropdownSearch ? '' : inputValue
  const searchText = dropdownSearch ? dropdownSearchValue : inputValue

  const selectAllOption = useMemo<Option>(
    () => ({ label: resolvedSelectAllLabel, value: dropdownSelectAllValue }),
    [resolvedSelectAllLabel],
  )

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

  const groupCounts = useMemo(() => {
    const counts = new Map<string, number>()
    options.forEach((option) => {
      const group = groupBy?.(option) ?? ''
      counts.set(group, (counts.get(group) ?? 0) + 1)
    })
    return counts
  }, [options, groupBy])

  const selectedValues = Array.from(selectedValueSet)

  // A group header doubles as a "select all in this group" checkbox: it's
  // checked exactly when every one of its items is selected, and toggling it
  // selects/deselects every item in the group together - so unchecking any
  // single item also un-checks the group, with no separate state to track.
  const isGroupFullySelected = (groupValue: string) => {
    const memberValues = options.filter((option) => groupBy?.(option) === groupValue)
    return (
      memberValues.length > 0 && memberValues.every((o) => selectedValueSet.has(o.value))
    )
  }

  const toggleGroupValue = (groupValue: string) => {
    const memberValues = options
      .filter((option) => groupBy?.(option) === groupValue)
      .map((o) => o.value)

    const next = isGroupFullySelected(groupValue)
      ? selectedValues.filter((v) => !memberValues.includes(v))
      : Array.from(new Set([...selectedValues, ...memberValues]))

    onChange(
      selectAll &&
        options.length > 0 &&
        next.length === options.length &&
        options.every((option) => next.includes(option.value))
        ? []
        : next,
    )
  }

  const handleSelectAll = () => onChange([])

  // Group headers are rendered as their own selectable option
  // (see the isGroupOptionValue branch in renderOption) instead of living
  // outside the listbox as a separate Tab-only element - that's what lets
  // the header fully participate in the listbox's native keyboard
  // navigation (arrows, Enter) and pick up the same focus ring as every
  // other row, both of which a plain non-option DOM node can't get for free
  // since MUI's Autocomplete manages highlighting via aria-activedescendant
  // on the input, not real per-item DOM focus.
  const optionsWithGroupMarkers = useMemo(() => {
    if (!groupBy) return options

    const seenGroups = new Set<string>()
    const result: Option[] = []
    options.forEach((option) => {
      const group = groupBy(option)
      if (group && !seenGroups.has(group)) {
        seenGroups.add(group)
        result.push({ label: group, value: dropdownGroupOptionValue(group) })
      }
      result.push(option)
    })
    return result
  }, [groupBy, options])

  const resolvedOptions = useMemo(() => {
    const rows: Option[] = []
    if ((!multiple || selectAll) && filteredOptions.length > 0 && !loading && !loadError)
      rows.push(selectAllOption)
    return loading || loadError ? rows : [...rows, ...optionsWithGroupMarkers]
  }, [
    multiple,
    selectAll,
    optionsWithGroupMarkers,
    selectAllOption,
    filteredOptions.length,
    loading,
    loadError,
  ])

  const handleChange = (_: React.SyntheticEvent, selected: Option | Option[] | null) => {
    if (Array.isArray(selected)) {
      const groupItem = selected.find((item) => isGroupOptionValue(item.value))
      if (groupItem) {
        toggleGroupValue(groupNameFromOptionValue(groupItem.value))
        return
      }

      if (selected.some((item) => item.value === dropdownSelectAllValue)) {
        handleSelectAll()
        return
      }

      const values = selected
        .filter((item) => !isInternalOptionValue(item.value))
        .map((item) => item.value)

      onChange(
        selectAll &&
          options.length > 0 &&
          values.length === options.length &&
          options.every((option) => values.includes(option.value))
          ? []
          : values,
      )
    } else {
      if (selected?.value === dropdownSelectAllValue) {
        onChange(null)
        return
      }
      if (
        selected &&
        isInternalOptionValue(selected.value) &&
        !isGroupOptionValue(selected.value)
      )
        return
      onChange(selected?.value ?? null)
    }
  }

  const filterOptions = (opts: Option[]) => {
    const filteredValues = new Set(filteredOptions.map((o) => o.value))
    const isVisibleAfterFilter = (opt: Option) => {
      if (isGroupOptionValue(opt.value)) {
        const groupValue = groupNameFromOptionValue(opt.value)
        return (filteredOptionsByGroup.get(groupValue)?.length ?? 0) > 0
      }
      return filteredValues.has(opt.value)
    }

    if (dropdownSearch) {
      if (!dropdownSearchValue.trim()) return opts

      return opts.filter((opt) => {
        // All is available only when results exist; group rows follow their members.
        if (opt.value === dropdownSelectAllValue) {
          return true
        }
        return isVisibleAfterFilter(opt)
      })
    }

    if (!inputValue.trim() || inputValue === selectedSingleLabel) return opts

    return opts.filter((opt) => isVisibleAfterFilter(opt))
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
    return (
      !!listbox?.contains(activeEl) ||
      !!document.getElementById(`${id}-paper`)?.contains(activeEl) ||
      !!wrapperRef.current?.contains(activeEl)
    )
  }

  const deferCloseCheck = () => {
    requestAnimationFrame(() => {
      if (!shouldKeepDropdownOpen()) {
        closeDropdown()
      }
    })
  }

  let panelStatus: React.ReactNode
  if (loadError) {
    panelStatus = (
      <Box
        role='alert'
        sx={{
          m: space['padding-xs'],
          p: space['padding-md'],
          display: 'flex',
          alignItems: 'center',
          gap: space['gap-md'],
          color: color['status-error-text'],
          bgcolor: color['status-error-bg'],
          border: `1px solid ${color['status-error-border']}`,
          borderRadius: 'var(--rc-radius-8)',
        }}
      >
        <WarningCircleIcon
          weight='regular'
          aria-hidden
          style={{
            flexShrink: 0,
            width: size['icon-size-control'],
            height: size['icon-size-control'],
          }}
        />
        {loadError}
      </Box>
    )
  } else if (loading) {
    panelStatus = (
      <Box
        role='status'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: space['gap-sm'],
          p: space['padding-md'],
          color: color['text-secondary'],
        }}
      >
        <CircularProgress size={24} />
        <span>{t('loading')}</span>
      </Box>
    )
  } else if (!filteredOptions.length) {
    panelStatus = (
      <Box role='status' sx={{ p: space['padding-md'] }}>
        <Box>{t('noResults', { query: searchText })}</Box>
        <Box sx={{ color: color['text-secondary'], mt: space['gap-xs'] }}>
          {t('refineSearch')}
        </Box>
      </Box>
    )
  }

  const singleSummary =
    typeof value === 'string' && isGroupOptionValue(value)
      ? `${selectedSingleLabel} (${
          groupCounts.get(groupNameFromOptionValue(value)) ?? 0
        })`
      : selectedSingleLabel
  const fullSummary = isAll ? resolvedSelectAllLabel : selectedLabels.join(', ')
  const visibleSummary = isAll
    ? resolvedSelectAllLabel
    : selectedLabels.slice(0, visibleCount).join(', ') || placeholder

  return (
    <SelectWrapper
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
        disableClearable={clearable === false || isAll}
        options={resolvedOptions}
        filterOptions={(opts) => filterOptions(opts)}
        disableListWrap
        blurOnSelect={false}
        clearOnBlur={false}
        handleHomeEndKeys
        loading={loading}
        loadingText={null}
        noOptionsText={null}
        clearIcon={
          <XCircleFillIcon
            aria-hidden
            style={{ width: size['icon-size-inline'], height: size['icon-size-inline'] }}
          />
        }
        popupIcon={
          <CaretDownIcon
            fillColor={color['text-secondary']}
            style={{
              width: size['icon-size-control'],
              height: size['icon-size-control'],
            }}
          />
        }
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
        renderGroup={(params) => (
          <React.Fragment key={params.key}>{params.children}</React.Fragment>
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            focused={open || undefined}
            disabled={disabled}
            error={hasError}
            placeholder={
              multiple || dropdownSearch || selectedSingleLabel ? undefined : placeholder
            }
            sx={{
              ...(dropdownSearch || (!multiple && selectedSingleLabel)
                ? {
                    '& .MuiInputBase-input': {
                      caretColor: 'transparent',
                    },
                  }
                : {}),
              '& .rc-ses-select-single-value': {
                boxSizing: 'border-box',
                display: 'flex',
                flex: 1,
                minWidth: 0,
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                pointerEvents: 'none',
              },
            }}
            slotProps={{
              ...params.slotProps,
              input: {
                ...params.slotProps.input,
                startAdornment:
                  useDefaultSummary &&
                  (multiple || selectedSingleLabel || dropdownSearch) ? (
                    <Box
                      ref={summaryRef}
                      id={selectedValueId}
                      className='rc-ses-select-single-value'
                      title={multiple ? fullSummary : singleSummary}
                    >
                      <Box
                        component='span'
                        sx={{ overflow: 'hidden', textOverflow: 'ellipsis', minWidth: 0 }}
                      >
                        {multiple
                          ? visibleSummary
                          : singleSummary || placeholder || resolvedSelectAllLabel}
                      </Box>
                      {multiple && !isAll && selectedLabels.length > visibleCount && (
                        <Box component='span' sx={{ flexShrink: 0, whiteSpace: 'pre' }}>
                          {` ${t('more', {
                            count: selectedLabels.length - visibleCount,
                          })}`}
                        </Box>
                      )}
                    </Box>
                  ) : (
                    params.slotProps.input.startAdornment
                  ),
              },
              htmlInput: {
                ...params.slotProps.htmlInput,
                title: multiple ? fullSummary : singleSummary,
                'aria-describedby':
                  useDefaultSummary && (multiple || selectedSingleLabel || dropdownSearch)
                    ? selectedValueId
                    : undefined,
                value:
                  useDefaultSummary && (multiple || selectedSingleLabel || dropdownSearch)
                    ? ''
                    : params.slotProps.htmlInput?.value,
                readOnly: multiple || dropdownSearch || !!selectedSingleLabel,
              },
            }}
          />
        )}
        renderOption={(optionProps, option, { selected }) => {
          const { key, className, ...rest } = optionProps

          if (option.value === dropdownSelectAllValue) {
            return (
              <Box
                key={key}
                component='li'
                {...rest}
                aria-selected={multiple ? isAll : !value}
                className={className}
                onMouseDown={(event: React.MouseEvent) => {
                  event.preventDefault()
                }}
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation()
                  if (multiple) handleSelectAll()
                  else {
                    onChange(null)
                    closeDropdown({ clearInput: true })
                  }
                }}
                sx={{
                  alignItems: 'center !important',
                  display: 'flex',
                  flexDirection: 'row !important',
                  gap: space['gap-md'],
                }}
              >
                {multiple && <OptionCheckbox checked={isAll} />}
                <span className='rc-ses-select-option-label'>
                  {resolvedSelectAllLabel}
                </span>
                {!multiple && !value && (
                  <CheckIcon
                    aria-hidden
                    weight='bold'
                    fillColor={color['control-selected']}
                    style={{
                      width: size['icon-size-control'],
                      height: size['icon-size-control'],
                      marginLeft: 'auto',
                    }}
                  />
                )}
              </Box>
            )
          }

          if (isGroupOptionValue(option.value)) {
            const groupValue = groupNameFromOptionValue(option.value)
            const isGroupSelected = multiple
              ? isGroupFullySelected(groupValue)
              : value === option.value

            return (
              <Box
                key={key}
                component='li'
                {...rest}
                aria-selected={isGroupSelected}
                className={className}
                onMouseDown={(event: React.MouseEvent) => {
                  event.preventDefault()
                }}
                onClick={(event: React.MouseEvent) => {
                  event.stopPropagation()
                  if (multiple) toggleGroupValue(groupValue)
                  else {
                    onChange(option.value)
                    closeDropdown({ clearInput: true })
                  }
                }}
                sx={{
                  alignItems: 'center !important',
                  backgroundColor: isGroupSelected
                    ? color['surface-brand-subtle']
                    : 'transparent',
                  display: 'flex',
                  flexDirection: 'row !important',
                  gap: space['gap-sm'],
                }}
              >
                {multiple && <OptionCheckbox checked={isGroupSelected} />}
                <Box
                  component='span'
                  sx={{
                    color: isGroupSelected ? color['text-link'] : color['text-default'],
                    flex: 1,
                    fontFamily: '"Public Sans", sans-serif',
                    fontSize: typography['font-size-body-small'],
                    fontWeight: 600,
                    lineHeight: typography['line-height-body-small'],
                    overflowWrap: 'anywhere',
                  }}
                >
                  {groupValue}
                </Box>
                {groupCounts.has(groupValue) && (
                  <RcSesBadge
                    label={String(groupCounts.get(groupValue))}
                    variant='neutral'
                    size='small'
                    showIcon={false}
                  />
                )}
                {!multiple && isGroupSelected && (
                  <CheckIcon
                    aria-hidden
                    weight='bold'
                    fillColor={color['control-selected']}
                    style={{
                      width: size['icon-size-control'],
                      height: size['icon-size-control'],
                      flexShrink: 0,
                    }}
                  />
                )}
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
                alignItems: 'center !important',
                display: 'flex',
                gap: multiple ? space['gap-md'] : space['gap-sm'],
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
                  style={selected ? { color: color['text-link'] } : undefined}
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
                  style={{
                    width: size['icon-size-control'],
                    height: size['icon-size-control'],
                    flexShrink: 0,
                    marginLeft: 'auto',
                    alignSelf: 'center',
                  }}
                  fillColor={color['control-selected']}
                  aria-hidden
                  weight='bold'
                />
              )}
            </Box>
          )
        }}
        renderValue={() => null}
        {...slotProps?.field}
        onKeyDown={(event) => {
          slotProps?.field?.onKeyDown?.(event)
          if (
            !event.defaultPrevented &&
            open &&
            dropdownSearch &&
            event.key === 'Tab' &&
            !event.shiftKey
          ) {
            event.preventDefault()
            document.getElementById(`${id}-search`)?.focus()
          }
        }}
        sx={[
          selectStyle,
          ...(Array.isArray(slotProps?.field?.sx)
            ? slotProps.field.sx
            : [slotProps?.field?.sx ?? {}]),
        ]}
        groupBy={(option) => {
          if (isGroupOptionValue(option.value)) {
            return groupNameFromOptionValue(option.value)
          }
          if (isInternalOptionValue(option.value)) return ''
          return groupBy ? groupBy(option) : ''
        }}
        slots={{
          ...slotProps?.field?.slots,
          paper: DropdownPaper,
        }}
        slotProps={{
          ...slotProps?.field?.slotProps,
          paper: (ownerState) => {
            const consumerPaperSlotProps = slotProps?.field?.slotProps?.paper
            const resolved =
              typeof consumerPaperSlotProps === 'function'
                ? consumerPaperSlotProps(ownerState)
                : consumerPaperSlotProps

            return {
              ...resolved,
              sx: [
                paperStyle,
                ...(Array.isArray(resolved?.sx) ? resolved.sx : [resolved?.sx ?? {}]),
              ],
              id: `${id}-paper`,
              dropdownLabel,
              searchField: dropdownSearch ? (
                <Box sx={{ p: space['padding-xs'] }}>
                  <TextField
                    id={`${id}-search`}
                    fullWidth
                    label={undefined}
                    value={dropdownSearchValue}
                    onChange={(event) => {
                      setDropdownSearchValue(event.target.value)
                      const callback = slotProps?.field?.onInputChange ?? onInputChange
                      callback?.(event, event.target.value, 'input')
                    }}
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
                      if (event.key === 'Escape') {
                        event.preventDefault()
                        closeDropdown()
                        document.getElementById(id)?.focus()
                      } else if (event.key === 'Tab') {
                        if (event.shiftKey) event.preventDefault()
                        else closeDropdown()
                        document.getElementById(id)?.focus()
                      } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                        event.preventDefault()
                        const trigger = document.getElementById(id)
                        trigger?.focus()
                        trigger?.dispatchEvent(
                          new KeyboardEvent('keydown', { key: event.key, bubbles: true }),
                        )
                      }
                    }}
                    sx={[
                      selectStyle,
                      {
                        '& .MuiInputBase-input': {
                          padding: `${space['space-10']} ${space['padding-sm']}`,
                        },
                        '& .MuiInputBase-input::placeholder': {
                          color: color['text-muted'],
                          opacity: 1,
                        },
                      },
                    ]}
                    slotProps={{
                      htmlInput: {
                        'aria-label': resolvedDropdownSearchPlaceholder,
                      },
                    }}
                  />
                </Box>
              ) : undefined,
              status: panelStatus,
            }
          },
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
    </SelectWrapper>
  )
}

export default RcSesSelect
