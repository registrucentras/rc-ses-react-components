import { Option } from '../Select.types'

type OnChange = (values: string[]) => void

function useSelectAll(options: Option[], selectedValues: string[], onChange: OnChange) {
  const allSelected =
    options.length > 0 && options.every((o) => selectedValues.includes(o.value))

  const toggle = () => {
    const values = options.map((o) => o.value)

    if (allSelected) {
      onChange(selectedValues.filter((v) => !values.includes(v)))
    } else {
      onChange(Array.from(new Set([...selectedValues, ...values])))
    }
  }

  return { allSelected, toggle }
}

export default useSelectAll
