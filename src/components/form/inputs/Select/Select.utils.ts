import { Option } from './Select.types'

export const dropdownSearchFieldValue = '__dropdown-search-field__'
export const dropdownSelectAllValue = '__dropdown-select-all__'

export const isInternalOptionValue = (value: string) =>
  value === dropdownSearchFieldValue || value === dropdownSelectAllValue

export const dropdownSearchFieldOption: Option = {
  label: '',
  value: dropdownSearchFieldValue,
}
