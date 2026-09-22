import { Option } from './Select.types'

export const dropdownSearchFieldValue = '__dropdown-search-field__'
export const dropdownSelectAllValue = '__dropdown-select-all__'
export const dropdownGroupOptionPrefix = '__dropdown-group__:'

export const isGroupOptionValue = (value: string) =>
  value.startsWith(dropdownGroupOptionPrefix)

export const groupNameFromOptionValue = (value: string) =>
  value.slice(dropdownGroupOptionPrefix.length)

export const dropdownGroupOptionValue = (groupName: string) =>
  `${dropdownGroupOptionPrefix}${groupName}`

export const isInternalOptionValue = (value: string) =>
  value === dropdownSearchFieldValue ||
  value === dropdownSelectAllValue ||
  isGroupOptionValue(value)

export const dropdownSearchFieldOption: Option = {
  label: '',
  value: dropdownSearchFieldValue,
}
