export const dropdownSelectAllValue = '__dropdown-select-all__'
export const dropdownGroupOptionPrefix = '__dropdown-group__:'

export const isGroupOptionValue = (value: string) =>
  value.startsWith(dropdownGroupOptionPrefix)

export const groupNameFromOptionValue = (value: string) =>
  value.slice(dropdownGroupOptionPrefix.length)

export const dropdownGroupOptionValue = (groupName: string) =>
  `${dropdownGroupOptionPrefix}${groupName}`

export const isInternalOptionValue = (value: string) =>
  value === dropdownSelectAllValue || isGroupOptionValue(value)
