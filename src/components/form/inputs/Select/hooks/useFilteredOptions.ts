import { useMemo } from 'react'

import { Option } from '../Select.types'

function useFilteredOptions(options: Option[], search: string) {
  return useMemo(() => {
    const normalized = search.trim().toLowerCase()
    if (!normalized) return options

    return options.filter((opt) => {
      const label = opt.label?.toLowerCase() ?? ''
      const desc = opt.description?.toLowerCase() ?? ''
      return label.includes(normalized) || desc.includes(normalized)
    })
  }, [options, search])
}

export default useFilteredOptions
